var e = o(require("../behaviors/computeOffset")), t = o(require("../behaviors/zIndex")), i = o(require("../behaviors/watchShow"));

function o(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Component({
    behaviors: [ e.default, t.default, i.default ],
    externalClasses: [ "l-bg-class", "l-icon-class", "l-class", "l-image-class", "l-title-class " ],
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        title: String,
        icon: String,
        iconSize: String,
        iconColor: String,
        image: String,
        placement: {
            type: String,
            value: "bottom"
        },
        duration: {
            type: Number,
            value: 1500
        },
        zIndex: {
            type: Number,
            value: 777
        },
        center: {
            type: Boolean,
            value: !0
        },
        mask: {
            type: Boolean,
            value: !1
        },
        openApi: {
            type: Boolean,
            value: !0
        },
        offsetX: Number,
        offsetY: Number
    },
    data: {
        status: !1,
        success: "",
        fail: "",
        complete: ""
    },
    observers: {
        icon: function() {}
    },
    attached() {
        this.data.openApi && this.initToast();
    },
    pageLifetimes: {
        show() {
            this.data.openApi && this.initToast(), this.offsetMargin();
        }
    },
    methods: {
        initToast() {
            wx.lin = wx.lin || {}, wx.lin.showToast = ((e = {}) => (console.warn("wx.lin 已废弃，请使用开放函数代替：https://doc.mini.talelin.com//start/open-function.html"), 
            this.linShow(e), this)), wx.lin.hideToast = (() => {
                console.warn("wx.lin 已废弃，请使用开放函数代替：https://doc.mini.talelin.com//start/open-function.html"), 
                this.linHide();
            });
        },
        strlen(e) {
            for (var t = 0, i = 0; i < e.length; i++) {
                var o = e.charCodeAt(i);
                o >= "0x0001" && o <= "0x007e" || "0xff60" <= o && o <= "0xff9f" ? t++ : t += 2;
            }
            return t;
        },
        doNothingMove() {},
        onMaskTap() {
            !0 !== this.data.locked && this.setData({
                fullScreen: "hide",
                status: "hide"
            }), this.triggerEvent("lintap", !0, {
                bubbles: !0,
                composed: !0
            });
        },
        linShow(e) {
            e || (e = {});
            const {title: t = "", icon: i = "", image: o = "", placement: s = "bottom", duration: n = 1500, center: a = !0, mask: l = !1, success: r = null, complete: c = null, offsetX: u = 0, offsetY: h = 0, iconSize: f = "60", iconColor: p = ""} = e;
            this.setData({
                title: t,
                icon: i,
                image: o,
                placement: s,
                duration: n,
                center: a,
                mask: l,
                success: r,
                complete: c,
                offsetY: h,
                offsetX: u,
                iconSize: f,
                iconColor: p
            }), this.changeStatus();
        },
        linHide() {
            this.setData({
                status: !1
            });
        }
    }
});