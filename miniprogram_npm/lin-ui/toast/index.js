var t = o(require("../behaviors/computeOffset")), e = o(require("../behaviors/zIndex")), i = o(require("../behaviors/watchShow"));

function o(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Component({
    behaviors: [ t.default, e.default, i.default ],
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
    attached: function() {
        this.data.openApi && this.initToast();
    },
    pageLifetimes: {
        show: function() {
            this.data.openApi && this.initToast(), this.offsetMargin();
        }
    },
    methods: {
        initToast: function() {
            var t = this;
            wx.lin = wx.lin || {}, wx.lin.showToast = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return console.warn("wx.lin 已废弃，请使用开放函数代替：https://doc.mini.talelin.com//start/open-function.html"), 
                t.linShow(e), t;
            }, wx.lin.hideToast = function() {
                console.warn("wx.lin 已废弃，请使用开放函数代替：https://doc.mini.talelin.com//start/open-function.html"), 
                t.linHide();
            };
        },
        strlen: function(t) {
            for (var e = 0, i = 0; i < t.length; i++) {
                var o = t.charCodeAt(i);
                o >= "0x0001" && o <= "0x007e" || "0xff60" <= o && o <= "0xff9f" ? e++ : e += 2;
            }
            return e;
        },
        doNothingMove: function() {},
        onMaskTap: function() {
            !0 !== this.data.locked && this.setData({
                fullScreen: "hide",
                status: "hide"
            }), this.triggerEvent("lintap", !0, {
                bubbles: !0,
                composed: !0
            });
        },
        linShow: function(t) {
            t || (t = {});
            var e = t, i = e.title, o = void 0 === i ? "" : i, n = e.icon, a = void 0 === n ? "" : n, s = e.image, l = void 0 === s ? "" : s, c = e.placement, r = void 0 === c ? "bottom" : c, u = e.duration, f = void 0 === u ? 1500 : u, d = e.center, h = void 0 === d || d, v = e.mask, p = void 0 !== v && v, m = e.success, g = void 0 === m ? null : m, b = e.complete, w = void 0 === b ? null : b, S = e.offsetX, x = void 0 === S ? 0 : S, y = e.offsetY, C = void 0 === y ? 0 : y, T = e.iconSize, k = void 0 === T ? "60" : T, z = e.iconColor, N = void 0 === z ? "" : z;
            this.setData({
                title: o,
                icon: a,
                image: l,
                placement: r,
                duration: f,
                center: h,
                mask: p,
                success: g,
                complete: w,
                offsetY: C,
                offsetX: x,
                iconSize: k,
                iconColor: N
            }), this.changeStatus();
        },
        linHide: function() {
            this.setData({
                status: !1
            });
        }
    }
});