var e = require("../../../@babel/runtime/helpers/typeof");

Component({
    externalClasses: [ "l-class", "l-single-image-class", "l-multi-image-class" ],
    properties: {
        urls: {
            type: Array
        },
        preview: {
            type: Boolean,
            value: !0
        },
        gapRow: {
            type: Number,
            value: 10
        },
        gapColumn: {
            type: Number,
            value: 10
        },
        singleSize: {
            type: Number,
            value: 360
        },
        multipleSize: {
            type: Number,
            value: 158
        },
        singleMode: {
            type: String,
            value: "aspectFit"
        },
        multipleMode: {
            type: String,
            value: "aspectFill"
        },
        key: {
            type: String,
            value: "url"
        },
        maxNumber: {
            type: Number,
            value: 9
        },
        customRowNumber: {
            type: Boolean,
            value: !1
        },
        everyRowNumber: {
            type: Number,
            value: 3
        },
        previewFullImage: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        newType: !0,
        shortSideValue: 0,
        showUrls: [],
        isLong: !1
    },
    observers: {
        urls: function() {
            this.init();
        }
    },
    methods: {
        init: function() {
            var e = this.data, t = e.urls, a = e.maxNumber, i = e.key;
            if (t.length > a && (t = t.slice(0, a), this.setData({
                isLong: !0
            })), this.setData({
                showUrls: t
            }), !this.data.customRowNumber) {
                var r = this.data.showUrls.length;
                r > 1 && r < 5 && 3 !== r ? this.setData({
                    everyRowNumber: 2
                }) : this.setData({
                    everyRowNumber: 3
                });
            }
            var s = this.judgeType();
            this.setData({
                newType: s
            }), 1 === t.length && this.horizontalOrVertical(s ? t[0][i] : t[0]);
        },
        judgeType: function() {
            var t = this.data.urls;
            return 0 === t.length || "object" == e(t[0]);
        },
        horizontalOrVertical: function(e) {
            var t = this;
            wx.getImageInfo({
                src: e,
                success: function(e) {
                    var a = e.width >= e.height ? e.width : e.height, i = e.width >= e.height ? e.height : e.width;
                    t.setData({
                        horizontalScreen: e.width >= e.height,
                        shortSideValue: i * t.data.singleSize / a
                    });
                }
            });
        },
        onPreviewTap: function(e) {
            var t, a = e.currentTarget.id;
            t = this.data.previewFullImage ? this.data.urls : this.data.showUrls;
            var i = "", r = [], s = this.data.newType, l = this.data.key;
            if (s) {
                i = t[a][l];
                for (var u = 0; u < t.length; u++) r.push(t[u][l]);
            } else i = t[a], r = t;
            var h = {
                index: a,
                current: t[a],
                all: t
            };
            !0 === this.data.preview && wx.previewImage({
                current: i,
                urls: r
            }), this.triggerEvent("lintap", h, {});
        }
    }
});