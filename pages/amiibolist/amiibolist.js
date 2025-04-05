Page({
    data: {
        grids1: [],
        grids2: {},
        game: {},
        ak: 1,
        loadmore: "loading",
        gameid: "",
        isEmpty: !0,
        type: ""
    },
    onLoad: function(a) {
        var t = this;
        if ("am" == a.type) return this.setData({
            type: "am"
        }), console.log("处理动森分类"), void wx.request({
            url: "https://newapi.nshome.cn:3001/game/getamiibobyxilie/" + a.xilie,
            success: function(i) {
                console.log("获得数据", i), t.setData({
                    grids1: i.data.amiibolist,
                    grids2: i.data.amiibojiangli,
                    game: i.data.game,
                    loadmore: "end",
                    gameid: a.id
                }), console.log("数据", t.data.grids1);
                var e = 0 === Object.keys(t.data.grids2).length;
                e || t.setData({
                    ak: 2
                }), t.setData({
                    isEmpty: e
                });
            },
            fail: function(a) {
                console.error(a);
            }
        });
        wx.request({
            url: "https://newapi.nshome.cn:3001/game/amiibolist/" + a.id,
            success: function(i) {
                t.setData({
                    grids1: i.data.amiibolist,
                    grids2: i.data.amiibojiangli,
                    game: i.data.game,
                    loadmore: "end",
                    gameid: a.id
                }), console.log(t.data.grids1);
                var e = 0 === Object.keys(t.data.grids2).length;
                e || t.setData({
                    ak: 2
                }), t.setData({
                    isEmpty: e
                }), console.log(i.data.amiibojiangli);
            },
            fail: function(a) {
                console.error(a);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    onNaviCard: function(a) {
        var t = a.currentTarget.dataset.id;
        console.log("点击了", a.currentTarget.dataset), a.currentTarget.dataset.jiangliid ? wx.navigateTo({
            url: "/pages/amiibo/amiibo?name=".concat(a.currentTarget.dataset.name, "&id=").concat(t, "&gameid=").concat(this.data.gameid, "&jiangliid=").concat(a.currentTarget.dataset.jiangliid)
        }) : wx.navigateTo({
            url: "/pages/amiibo/amiibo?id=".concat(t, "&gameid=").concat(this.data.gameid)
        });
    },
    gotoam: function(a) {
        a.currentTarget.dataset.id;
        console.log("点击了", a.currentTarget.dataset.id), wx.navigateTo({
            url: "/pages/amiibolist/amiibolist?type=am&id=11&xilie=" + a.currentTarget.dataset.id
        });
    }
});