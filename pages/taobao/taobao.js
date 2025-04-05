Page({
    data: {
        showModal: !1,
        kouling: "",
        taobaoImage: "https://newapi.nshome.cn:3001/taobao/kouling.jpg",
        productImages: [ "https://newapi.nshome.cn:3001/taobao/taobao01.jpg", "https://newapi.nshome.cn:3001/taobao/taobao02.jpg", "https://newapi.nshome.cn:3001/taobao/taobao03.jpg", "https://newapi.nshome.cn:3001/taobao/taobao04.jpg", "https://newapi.nshome.cn:3001/taobao/taobao05.jpg", "https://newapi.nshome.cn:3001/taobao/taobao06.jpg", "https://newapi.nshome.cn:3001/taobao/taobao07.jpg", "https://newapi.nshome.cn:3001/taobao/taobao08.jpg", "https://newapi.nshome.cn:3001/taobao/taobao09.jpg", "https://newapi.nshome.cn:3001/taobao/taobao10.jpg", "https://newapi.nshome.cn:3001/taobao/taobao11.jpg", "https://newapi.nshome.cn:3001/taobao/taobao12.jpg", "https://newapi.nshome.cn:3001/taobao/taobao13.jpg", "https://newapi.nshome.cn:3001/taobao/taobao14.jpg", "https://newapi.nshome.cn:3001/taobao/taobao15.jpg", "https://newapi.nshome.cn:3001/taobao/taobao16.jpg", "https://newapi.nshome.cn:3001/taobao/taobao17.jpg", "https://newapi.nshome.cn:3001/taobao/taobao18.jpg", "https://newapi.nshome.cn:3001/taobao/taobao19.jpg", "https://newapi.nshome.cn:3001/taobao/taobao20.jpg", "https://newapi.nshome.cn:3001/taobao/kouling.jpg" ]
    },
    onLoad: function() {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    goToWeidian: function() {
        console.log("跳转到微店"), wx.navigateToMiniProgram({
            appId: "wx95c5b90c30c28a88",
            path: "plugin-private://wx34345ae5855f892d/pages/productDetail/productDetail?productId=120052295",
            success: function(o) {}
        });
    },
    gototaobao: function() {
        console.log("显示淘宝购买页面"), Math.random() < .5 ? this.setData({
            kouling: "【淘宝】https://m.tb.cn/h.5jOWMVG?tk=hc41W2EGuNq CZ3457 「阿米波助手塞尔达旷野之息amiibo卡智能扣link任天堂王国之泪」复制后 淘宝搜索直接打开"
        }) : this.setData({
            kouling: "【淘宝】https://m.tb.cn/h.5kvlA6D?tk=Rd75WVq3dbQ CZ3457 「王国之泪amiibo智能扣塞尔达传说旷野之息刷卡link助手二代新款NS」复制后 淘宝搜索直接打开"
        }), this.setData({
            showModal: !0
        });
    },
    copyToClipboard: function() {
        wx.setClipboardData({
            data: this.data.kouling,
            success: function(o) {
                wx.getClipboardData({
                    success: function(o) {
                        console.log(o.data);
                    }
                });
            }
        });
    },
    saveImage: function() {
        wx.previewImage({
            current: this.data.taobaoImage,
            urls: [ this.data.taobaoImage ]
        });
    },
    dianpu: function(o) {
        wx.navigateTo({
            url: "/pages/shebei/dianpu"
        });
    }
});