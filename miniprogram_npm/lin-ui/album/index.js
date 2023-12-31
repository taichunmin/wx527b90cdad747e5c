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
        init() {
            let {urls: e, maxNumber: t, key: a} = this.data;
            if (e.length > t && (e = e.slice(0, t), this.setData({
                isLong: !0
            })), this.setData({
                showUrls: e
            }), !this.data.customRowNumber) {
                let e = this.data.showUrls.length;
                e > 1 && e < 5 && 3 !== e ? this.setData({
                    everyRowNumber: 2
                }) : this.setData({
                    everyRowNumber: 3
                });
            }
            const s = this.judgeType();
            this.setData({
                newType: s
            }), 1 === e.length && this.horizontalOrVertical(s ? e[0][a] : e[0]);
        },
        judgeType() {
            const e = this.data.urls;
            return 0 === e.length || "object" == typeof e[0];
        },
        horizontalOrVertical: function(e) {
            wx.getImageInfo({
                src: e,
                success: e => {
                    const t = e.width >= e.height ? e.width : e.height, a = e.width >= e.height ? e.height : e.width;
                    this.setData({
                        horizontalScreen: e.width >= e.height,
                        shortSideValue: a * this.data.singleSize / t
                    });
                }
            });
        },
        onPreviewTap(e) {
            const t = e.currentTarget.id;
            let a;
            a = this.data.previewFullImage ? this.data.urls : this.data.showUrls;
            let s = "", i = [];
            const l = this.data.newType, r = this.data.key;
            if (l) {
                s = a[t][r];
                for (let e = 0; e < a.length; e++) i.push(a[e][r]);
            } else s = a[t], i = a;
            let u = {
                index: t,
                current: a[t],
                all: a
            };
            !0 === this.data.preview && wx.previewImage({
                current: s,
                urls: i
            }), this.triggerEvent("lintap", u, {});
        }
    }
});