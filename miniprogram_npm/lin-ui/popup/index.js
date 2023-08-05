var t = n(require("../behaviors/zIndex")), e = n(require("../behaviors/validator")), i = n(require("../core/utils/event-util")), o = n(require("../core/behaviors/doNothingBehavior"));

function n(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Component({
    behaviors: [ t.default, e.default, o.default ],
    externalClasses: [ "l-bg-class", "l-panel-class", "l-class" ],
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        animation: {
            type: Boolean,
            value: !0
        },
        transition: {
            type: Boolean,
            value: null
        },
        contentAlign: {
            type: String,
            value: "center",
            options: [ "top", "right", "left", "bottom", "center" ]
        },
        direction: {
            type: String,
            value: null,
            options: [ "top", "right", "left", "bottom", "center" ]
        },
        locked: {
            type: Boolean,
            value: !1
        }
    },
    attached() {
        this._init();
    },
    pageLifetimes: {
        show() {
            this._init();
        }
    },
    data: {
        status: "hide"
    },
    observers: {
        show(t) {
            t && this.setData({
                status: "show"
            });
        }
    },
    methods: {
        _init() {
            wx.lin = wx.lin || {}, wx.lin.showPopup = (t => {
                console.warn("wx.lin 方法已废弃，请使用开放函数代替 https://doc.mini.talelin.com/start/open-function.html"), 
                this.linShow(t);
            }), wx.lin.hidePopup = (() => {
                console.warn("wx.lin 方法已废弃，请使用开放函数代替 https://doc.mini.talelin.com/start/open-function.html"), 
                this.linHide();
            });
        },
        onPopupTap() {
            !0 !== this.data.locked && this._hidePopup(), i.default.emit(this, "lintap");
        },
        _hidePopup() {
            this.data.animation ? (this.setData({
                status: "hide"
            }), setTimeout(() => {
                this.setData({
                    show: !1
                });
            }, 300)) : this.setData({
                show: !1,
                status: "hide"
            });
        },
        linShow(t) {
            const {zIndex: e = 99, animation: i = !0, contentAlign: o = "center", locked: n = !1} = {
                ...t
            };
            this.setData({
                zIndex: e,
                animation: i,
                contentAlign: o,
                locked: n,
                show: !0
            });
        },
        linHide() {
            this._hidePopup();
        }
    }
});