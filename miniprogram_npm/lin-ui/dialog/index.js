var t = n(require("../behaviors/computeOffset")), e = n(require("../behaviors/zIndex")), o = n(require("../behaviors/hover")), i = n(require("../behaviors/validator"));

function n(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Component({
    behaviors: [ t.default, e.default, o.default, i.default ],
    externalClasses: [ "l-class", "l-title-class", "l-content-class", "l-confirm-class", "l-cancel-class", "l-bg-class" ],
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        type: {
            type: String,
            value: "alert",
            options: [ "alert", "confirm" ]
        },
        title: {
            type: String,
            value: "提示"
        },
        showTitle: {
            type: Boolean,
            value: !0
        },
        content: {
            type: String,
            value: ""
        },
        locked: {
            type: Boolean,
            value: !0
        },
        confirmText: {
            type: String,
            value: "确定"
        },
        confirmColor: {
            type: String,
            value: "#3683d6"
        },
        cancelText: {
            type: String,
            value: "取消"
        },
        cancelColor: {
            type: String,
            value: "#45526b"
        },
        titleColor: String,
        contentColor: {
            type: String,
            value: "rgba(89,108,142,1)"
        },
        openApi: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        success: null,
        fail: null
    },
    attached: function() {
        this.data.openApi && this.initDialog();
    },
    pageLifetimes: {
        show: function() {
            this.data.openApi && this.initDialog();
        }
    },
    methods: {
        initDialog: function() {
            var t = this;
            wx.lin = wx.lin || {}, wx.lin.showDialog = function(e) {
                console.warn("wx.lin 方法已废弃，请使用开放函数代替 https://doc.mini.talelin.com/start/open-function.html"), 
                t.linShow(e);
            };
        },
        onConfirmTap: function() {
            var t = this.data.success;
            t && t({
                confirm: !0,
                cancel: !1,
                errMsg: "showDialog: success"
            }), this.setData({
                show: !this.data.show
            }), this.triggerEvent("linconfirm", "confirm", {
                bubbles: !0,
                composed: !0
            });
        },
        onCancelTap: function() {
            var t = this.data.success;
            t && t({
                confirm: !1,
                cancel: !0,
                errMsg: "showDialog: success"
            }), this.setData({
                show: !this.data.show
            }), this.triggerEvent("lincancel", "cancel", {
                bubbles: !0,
                composed: !0
            });
        },
        onDialogTap: function() {
            !0 !== this.data.locked && this.setData({
                show: !this.data.show
            }), this.triggerEvent("lintap", !0, {
                bubbles: !0,
                composed: !0
            });
        },
        linShow: function(t) {
            var e = t.type, o = void 0 === e ? "alert" : e, i = t.title, n = void 0 === i ? "提示" : i, l = t.showTitle, a = void 0 === l || l, s = t.content, c = void 0 === s ? "" : s, r = t.locked, u = void 0 === r || r, h = t.confirmText, d = void 0 === h ? "确定" : h, v = t.contentColor, p = void 0 === v ? "rgba(89,108,142,1)" : v, f = t.cancelColor, g = void 0 === f ? "#45526b" : f, m = t.cancelText, w = void 0 === m ? "取消" : m, b = t.confirmColor, y = void 0 === b ? "#3683d6" : b, C = t.success, x = void 0 === C ? null : C, D = t.fail, T = void 0 === D ? null : D;
            this.setData({
                type: o,
                title: n,
                showTitle: a,
                content: c,
                locked: u,
                confirmText: d,
                cancelColor: g,
                cancelText: w,
                confirmColor: y,
                contentColor: p,
                show: !0,
                fail: T,
                success: x
            });
        },
        linHide: function() {
            this.setData({
                show: !0
            });
        }
    }
});