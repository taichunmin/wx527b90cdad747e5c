var e = require("../../../@babel/runtime/helpers/objectSpread2");

Component({
    externalClasses: [ "l-class", "l-image-class", "l-button-class", "l-describe-class" ],
    properties: {
        show: Boolean,
        type: {
            type: String,
            value: "success",
            observer: "_changeStatus"
        },
        image: String,
        describe: String,
        buttonText: String,
        bgColor: {
            type: String,
            value: "#fff"
        },
        fullScreen: {
            type: Boolean,
            value: !0
        },
        openApi: {
            type: Boolean,
            value: !0
        },
        custom: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    attached: function() {
        this._changeStatus(), this.data.openApi && this._init();
    },
    pageLifetimes: {
        show: function() {
            this._init();
        }
    },
    methods: {
        _init: function() {
            var t = this;
            wx.lin = wx.lin || {}, wx.lin.showStatusShow = function(a) {
                var s = e({}, a), i = s.type, o = void 0 === i ? "success" : i, n = s.image, r = void 0 === n ? "" : n, c = s.describe, p = void 0 === c ? "" : c, g = s.buttonText, l = void 0 === g ? "" : g, u = s.bgColor, h = void 0 === u ? "#fff" : u, d = s.fullScreen, b = void 0 === d || d;
                t.setData({
                    show: !0,
                    type: o,
                    image: r,
                    describe: p,
                    buttonText: l,
                    bgColor: h,
                    fullScreen: b
                });
            }, wx.lin.hideStatusShow = function() {
                t.setData({
                    show: !1
                });
            };
        },
        _changeStatus: function() {
            var e = this.data.type;
            if (e) switch (e) {
              case "success":
                this.setData({
                    typeImage: "image/success.png",
                    typeText: "操作成功~"
                });
                break;

              case "error":
                this.setData({
                    typeImage: "image/error.png",
                    typeText: "操作失败~"
                });
                break;

              case "cart":
                this.setData({
                    typeImage: "image/cart.png",
                    typeText: "购物车空空如也，去逛逛吧~"
                });
                break;

              case "order":
                this.setData({
                    typeImage: "image/order.png",
                    typeText: "您暂时还没有订单哦~"
                });
                break;

              case "network":
                this.setData({
                    typeImage: "image/network.png",
                    typeText: "糟糕！网络错误~"
                });
                break;

              case "address":
                this.setData({
                    typeImage: "image/address.png",
                    typeText: "您暂时还没有地址哦~"
                });
                break;

              case "product":
                this.setData({
                    typeImage: "image/product.png",
                    typeText: "暂时还没有商品哦~~"
                });
                break;

              case "data":
                this.setData({
                    typeImage: "image/data.png",
                    typeText: "暂时还没有相关数据哦~~"
                });
                break;

              default:
                console.warn(e + " is not a valid value");
            }
        },
        tapStatusShow: function() {
            this.triggerEvent("lincorvertap", {}, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});