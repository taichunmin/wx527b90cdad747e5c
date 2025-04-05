Page({
    data: {
        load: !1,
        deviceId: "",
        type: "",
        auto_show: !1
    },
    onLoad: function(e) {
        console.log(e.deviceid), this.setData({
            deviceId: e.deviceid,
            type: e.type
        });
    },
    auto_show_btn: function() {
        this.setData({
            auto_show: !0
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    set: function(e) {
        var t = e.currentTarget.dataset.id;
        console.log(t), this.setData({
            load: !0
        }), "kou2" == this.data.type ? this.lanya_setmode_new(t) : this.lanya_setmode(t);
    },
    buf2hex: function(e) {
        var t = Array.from(new Uint8Array(e)).map(function(e) {
            return ("00" + e.toString(16)).slice(-2);
        }), n = [];
        return t.forEach(function(e) {
            return n.push(e);
        }), n;
    },
    hexStrToDecArray: function(e) {
        for (var t = e.split(" "), n = [], o = 0; o < t.length; o++) n.push(parseInt(t[o], 16));
        return this.arrayTo16Array(n);
    },
    arrayTo16Array: function(e) {
        e.length;
        for (var t = 16 * parseInt((e.length - 1) / 16) + 16, n = e.length; n < t; n++) e[n] = 0;
        return e;
    },
    strSplittoArray: function(e, t) {
        e = e.split("");
        for (var n = []; 0 != e.length; ) n.push(e.splice(0, t).join(""));
        return n;
    },
    int8parse: function(e) {
        for (var t = require("crypto-js"), n = e.length, o = [], r = 0; r < n; r++) o[r >>> 2] |= (255 & e[r]) << 24 - r % 4 * 8;
        return console.log(t), t.lib.WordArray.create(o, n);
    },
    AESEncrypt: function(e, t) {
        var n = this.hexStrToDecArray(e), o = this.int8parse(n), r = require("crypto-js"), a = r.AES.encrypt(o, this.aesKeyBytes(t), {
            mode: r.mode.ECB,
            padding: r.pad.NoPadding
        });
        return this.wordArrayToHexStr(a.ciphertext.words);
    },
    AESDecrypt: function(e) {
        e = this.buf2hex(e);
        var t = parseInt(e[3], 16), n = [ 75, 71, 70, 95, 65, 77, 73, 76, 7, 231, 4, 6, 10, 42, parseInt(e[0], 16), parseInt(e[1], 16) ], o = this.hexStrToDecArray(e.slice(4).join(" ")), r = this.int8parse(o), a = require("crypto-js"), i = a.enc.Base64.stringify(r), s = a.AES.decrypt(i, this.aesKeyBytes(n), {
            mode: a.mode.ECB,
            padding: a.pad.NoPadding
        });
        return console.log("解密后的内容 :", this.wordArrayToHexStr(s.words).split(" ").slice(0, t)), 
        this.wordArrayToHexStr(s.words).split(" ").slice(0, t);
    },
    aesKeyBytes: function(e) {
        var t = new Int8Array(e);
        return this.int8parse(t);
    },
    wordArrayToHexStr: function(e) {
        for (var t = "", n = 0; n < e.length; n++) {
            var o = e[n];
            o < 0 && (o = e[n] + 4294967296);
            var r = o.toString(16).toUpperCase(), a = r;
            if (r.length < 8) for (var i = 0; i < 8 - r.length; i++) a = "0" + a;
            t += a;
        }
        var s = "";
        for (n = 0; n < t.length; n += 2) s = s + t.substr(n, 2) + " ";
        return s.substr(0, s.length - 1);
    },
    buf2string: function(e) {
        for (var t = Array.from(new Uint8Array(e)).map(function(e) {
            return e;
        }), n = "", o = 0; o < t.length; o++) n += String.fromCharCode(t[o]);
        return n;
    },
    quxiao: function() {
        this.setData({
            load: !1
        });
    },
    lanya_setmode: function(e) {
        var t = this, n = "", o = "";
        "1" == e && (n = "a1b101", o = "无限模式"), "2" == e && (n = "a1b102", o = "按序模式"), 
        "3" == e && (n = "a1b103", o = "读写模式");
        var r = this.data.deviceId, a = "6E400001-B5A3-F393-E0A9-E50E24DCCA9E";
        wx.openBluetoothAdapter({
            mode: "central",
            success: function(e) {
                wx.createBLEConnection({
                    deviceId: r,
                    success: function() {
                        console.log("amiibolink 链接成功"), wx.getBLEDeviceServices({
                            deviceId: r,
                            success: function(e) {
                                wx.getBLEDeviceCharacteristics({
                                    deviceId: r,
                                    serviceId: a,
                                    success: function(e) {
                                        wx.notifyBLECharacteristicValueChange({
                                            deviceId: r,
                                            serviceId: a,
                                            characteristicId: "6E400003-B5A3-F393-E0A9-E50E24DCCA9E",
                                            state: !0
                                        }), wx.onBLECharacteristicValueChange(function(e) {
                                            console.log("收到订阅", e);
                                            var n = t.buf2hex(e.value);
                                            console.log(n, "收到的数据"), "b1" == n[0] && "a1" == n[1] && (console.log("模式修改成功"), 
                                            wx.closeBLEConnection({
                                                deviceId: r,
                                                success: function(e) {
                                                    console.log("关闭蓝牙成功", e);
                                                },
                                                complete: function() {
                                                    getApp().globalData.msg = "成功将模式修改成：" + o, wx.navigateBack({
                                                        delta: 1
                                                    });
                                                }
                                            }));
                                        });
                                        var i = n.length / 2, s = new ArrayBuffer(i), c = new DataView(s);
                                        console.log("开始写入数据", n);
                                        for (var l = 0; l < i; l++) c.setUint8(l, parseInt("0X" + n.substring(2 * l, 2 * l + 2), 16));
                                        wx.writeBLECharacteristicValue({
                                            deviceId: r,
                                            serviceId: a,
                                            characteristicId: "6E400002-B5A3-F393-E0A9-E50E24DCCA9E",
                                            value: s,
                                            success: function(e) {
                                                console.log("写入成功", e), t.setData({
                                                    load: !1
                                                });
                                            },
                                            fail: function(e) {
                                                console.log("写入失败", e);
                                                var n = "小程序无法启用蓝牙，请检查微信权限及手机设置";
                                                if (1500102 === e.errno && (n = "微信无法使用蓝牙，请到手机系统设置中启用蓝牙"), 1509008 === e.errno && (n = "微信没有【位置信息】权限，请在手机设置中将微信权限选择允许位置信息"), 
                                                1509001 === e.errno && (n = "没有搜索到亲的智能扣，请确保已经按下按钮，指示灯是闪烁状态。"), 103 === e.errno) return n = "亲没有授权小程序蓝牙权限", 
                                                void wx.openSetting({
                                                    success: function(e) {
                                                        console.log(e.authSetting);
                                                    }
                                                });
                                                wx.navigateTo({
                                                    url: "/pages/lanyaok/lanyano?txt=" + n
                                                }), t.setData({
                                                    load: !1
                                                });
                                            }
                                        });
                                    }
                                });
                            },
                            fail: function(e) {
                                var n = "小程序无法启用蓝牙，请检查微信权限及手机设置";
                                if (1500102 === e.errno && (n = "微信无法使用蓝牙，请到手机系统设置中启用蓝牙"), 1509008 === e.errno && (n = "微信没有【位置信息】权限，请在手机设置中将微信权限选择允许位置信息"), 
                                1509001 === e.errno && (n = "没有搜索到亲的智能扣，请确保已经按下按钮，指示灯是闪烁状态。"), 103 === e.errno) return n = "亲没有授权小程序蓝牙权限", 
                                void wx.openSetting({
                                    success: function(e) {
                                        console.log(e.authSetting);
                                    }
                                });
                                wx.navigateTo({
                                    url: "/pages/lanyaok/lanyano?txt=" + n
                                }), t.setData({
                                    load: !1
                                });
                            }
                        });
                    },
                    fail: function(e) {
                        console.log(e);
                        var n = "小程序无法启用蓝牙，请检查微信权限及手机设置!";
                        if (1500102 === e.errno && (n = "微信无法使用蓝牙，请到手机系统设置中启用蓝牙"), 1509008 === e.errno && (n = "微信没有【位置信息】权限，请在手机设置中将微信权限选择允许位置信息"), 
                        1509001 === e.errno && (n = "没有搜索到亲的智能扣，请确保已经按下按钮，指示灯是闪烁状态。"), 1509001 === e.errno && (n = "没有搜索到亲的智能扣，请确保已经按下按钮，指示灯是闪烁状态。"), 
                        103 === e.errno) return n = "亲没有授权小程序蓝牙权限", void wx.openSetting({
                            success: function(e) {
                                console.log(e.authSetting);
                            }
                        });
                        wx.navigateTo({
                            url: "/pages/lanyaok/lanyano?txt=" + n
                        }), t.setData({
                            load: !1
                        });
                    }
                });
            },
            fail: function(e) {
                var n = "小程序无法启用蓝牙，请检查微信权限及手机设置";
                if (1500102 === e.errno && (n = "微信无法使用蓝牙，请到手机系统设置中启用蓝牙"), 1509008 === e.errno && (n = "微信没有【位置信息】权限，请在手机设置中将微信权限选择允许位置信息"), 
                1509001 === e.errno && (n = "没有搜索到亲的智能扣，请确保已经按下按钮，指示灯是闪烁状态。"), 103 === e.errno) return n = "亲没有授权小程序蓝牙权限", 
                void wx.openSetting({
                    success: function(e) {
                        console.log(e.authSetting);
                    }
                });
                wx.navigateTo({
                    url: "/pages/lanyaok/lanyano?txt=" + n
                }), t.setData({
                    load: !1
                });
            }
        });
    },
    lanya_setmode_new: function(e) {
        var t = this, n = "", o = "";
        "1" == e && (n = "a1b101", o = "无限模式(手动)"), "2" == e && (n = "a1b102", o = "按序模式"), 
        "3" == e && (n = "a1b103", o = "读写模式"), "4" == e && (n = "a1b104", o = "无限模式(自动)"), 
        "5" == e && (n = "a3b3", o = "恢复出厂设置");
        var r = this.data.deviceId, a = "6E400001-B5A3-F393-E0A9-E50E24DCCA9E";
        wx.openBluetoothAdapter({
            mode: "central",
            success: function(e) {
                wx.createBLEConnection({
                    deviceId: r,
                    success: function() {
                        console.log("amiibolink 链接成功"), wx.getBLEDeviceServices({
                            deviceId: r,
                            success: function(e) {
                                wx.getBLEDeviceCharacteristics({
                                    deviceId: r,
                                    serviceId: a,
                                    success: function(e) {
                                        wx.notifyBLECharacteristicValueChange({
                                            deviceId: r,
                                            serviceId: a,
                                            characteristicId: "6E400003-B5A3-F393-E0A9-E50E24DCCA9E",
                                            state: !0
                                        }), wx.onBLECharacteristicValueChange(function(e) {
                                            console.log("收到订阅", e);
                                            var n = t.AESDecrypt(e.value);
                                            n[0] = n[0].toLowerCase(), n[1] = n[1].toLowerCase(), console.log("data", n[0], n[1]), 
                                            "b1" == n[0] && "a1" == n[1] && (console.log("模式修改成功"), wx.closeBLEConnection({
                                                deviceId: r,
                                                success: function(e) {
                                                    console.log("关闭蓝牙成功", e);
                                                },
                                                complete: function() {
                                                    getApp().globalData.msg = "成功将模式修改成：" + o, wx.navigateBack({
                                                        delta: 1
                                                    });
                                                }
                                            })), "a3" == n[0] && "b3" == n[1] && (console.log("出厂设置恢复成功"), wx.closeBLEConnection({
                                                deviceId: r,
                                                success: function(e) {
                                                    console.log("关闭蓝牙成功", e);
                                                },
                                                complete: function() {
                                                    getApp().globalData.msg = "成功恢复出厂设置", wx.navigateBack({
                                                        delta: 1
                                                    });
                                                }
                                            }));
                                        }), console.log(n, "需要发送的数据没有加密-新固件");
                                        for (var i = t, s = n.length / 2, c = +(100 * Math.random()).toFixed(), l = +(100 * Math.random()).toFixed(), u = (n = n.length > 32 ? (n = t.strSplittoArray(n, 32)).map(function(e) {
                                            return i.AESEncrypt(this.strSplittoArray(e, 2).join(" "), [ 75, 71, 70, 95, 65, 77, 73, 76, 7, 231, 4, 6, 10, 42, c, l ]);
                                        }) : [ t.AESEncrypt(t.strSplittoArray(n, 2).join(" "), [ 75, 71, 70, 95, 65, 77, 73, 76, 7, 231, 4, 6, 10, 42, c, l ]) ]).join(" ").split(" "), d = (n = c.toString(16).padStart(2, 0) + l.toString(16).padStart(2, 0) + u.length.toString(16).padStart(2, 0) + s.toString(16).padStart(2, 0) + u.join("")).length / 2, g = new ArrayBuffer(d), f = new DataView(g), h = 0; h < d; h++) f.setUint8(h, parseInt("0X" + n.substring(2 * h, 2 * h + 2), 16));
                                        wx.writeBLECharacteristicValue({
                                            deviceId: r,
                                            serviceId: a,
                                            characteristicId: "6E400002-B5A3-F393-E0A9-E50E24DCCA9E",
                                            value: g,
                                            success: function(e) {
                                                console.log("写入成功", e), t.setData({
                                                    load: !1
                                                });
                                            },
                                            fail: function(e) {
                                                console.log("写入失败", e);
                                                var n = "小程序无法启用蓝牙，请检查微信权限及手机设置";
                                                if (1500102 === e.errno && (n = "微信无法使用蓝牙，请到手机系统设置中启用蓝牙"), 1509008 === e.errno && (n = "微信没有【位置信息】权限，请在手机设置中将微信权限选择允许位置信息"), 
                                                1509001 === e.errno && (n = "没有搜索到亲的智能扣，请确保已经按下按钮，指示灯是闪烁状态。"), 103 === e.errno) return n = "亲没有授权小程序蓝牙权限", 
                                                void wx.openSetting({
                                                    success: function(e) {
                                                        console.log(e.authSetting);
                                                    }
                                                });
                                                wx.navigateTo({
                                                    url: "/pages/lanyaok/lanyano?txt=" + n
                                                }), t.setData({
                                                    load: !1
                                                });
                                            }
                                        });
                                    }
                                });
                            },
                            fail: function(e) {
                                var n = "小程序无法启用蓝牙，请检查微信权限及手机设置";
                                if (1500102 === e.errno && (n = "微信无法使用蓝牙，请到手机系统设置中启用蓝牙"), 1509008 === e.errno && (n = "微信没有【位置信息】权限，请在手机设置中将微信权限选择允许位置信息"), 
                                1509001 === e.errno && (n = "没有搜索到亲的智能扣，请确保已经按下按钮，指示灯是闪烁状态。"), 103 === e.errno) return n = "亲没有授权小程序蓝牙权限", 
                                void wx.openSetting({
                                    success: function(e) {
                                        console.log(e.authSetting);
                                    }
                                });
                                wx.navigateTo({
                                    url: "/pages/lanyaok/lanyano?txt=" + n
                                }), t.setData({
                                    load: !1
                                });
                            }
                        });
                    },
                    fail: function(e) {
                        console.log(e);
                        var n = "小程序无法启用蓝牙，请检查微信权限及手机设置!";
                        if (1500102 === e.errno && (n = "微信无法使用蓝牙，请到手机系统设置中启用蓝牙"), 1509008 === e.errno && (n = "微信没有【位置信息】权限，请在手机设置中将微信权限选择允许位置信息"), 
                        1509001 === e.errno && (n = "没有搜索到亲的智能扣，请确保已经按下按钮，指示灯是闪烁状态。"), 1509001 === e.errno && (n = "没有搜索到亲的智能扣，请确保已经按下按钮，指示灯是闪烁状态。"), 
                        103 === e.errno) return n = "亲没有授权小程序蓝牙权限", void wx.openSetting({
                            success: function(e) {
                                console.log(e.authSetting);
                            }
                        });
                        wx.navigateTo({
                            url: "/pages/lanyaok/lanyano?txt=" + n
                        }), t.setData({
                            load: !1
                        });
                    }
                });
            },
            fail: function(e) {
                var n = "小程序无法启用蓝牙，请检查微信权限及手机设置";
                if (1500102 === e.errno && (n = "微信无法使用蓝牙，请到手机系统设置中启用蓝牙"), 1509008 === e.errno && (n = "微信没有【位置信息】权限，请在手机设置中将微信权限选择允许位置信息"), 
                1509001 === e.errno && (n = "没有搜索到亲的智能扣，请确保已经按下按钮，指示灯是闪烁状态。"), 103 === e.errno) return n = "亲没有授权小程序蓝牙权限", 
                void wx.openSetting({
                    success: function(e) {
                        console.log(e.authSetting);
                    }
                });
                wx.navigateTo({
                    url: "/pages/lanyaok/lanyano?txt=" + n
                }), t.setData({
                    load: !1
                });
            }
        });
    }
});