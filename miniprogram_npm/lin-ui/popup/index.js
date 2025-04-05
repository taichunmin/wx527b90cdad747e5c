var t = require("../../../@babel/runtime/helpers/objectSpread2"), e = a(require("../behaviors/zIndex")), i = a(require("../behaviors/validator")), n = a(require("../core/utils/event-util")), o = a(require("../core/behaviors/doNothingBehavior"));

function a(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Component({
    behaviors: [ e.default, i.default, o.default ],
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
    attached: function() {
        this._init();
    },
    pageLifetimes: {
        show: function() {
            this._init();
        }
    },
    data: {
        status: "hide"
    },
    observers: {
        show: function(t) {
            t && this.setData({
                status: "show"
            });
        }
    },
    methods: {
        _init: function() {
            var t = this;
            wx.lin = wx.lin || {}, wx.lin.showPopup = function(e) {
                console.warn("wx.lin 方法已废弃，请使用开放函数代替 https://doc.mini.talelin.com/start/open-function.html"), 
                t.linShow(e);
            }, wx.lin.hidePopup = function() {
                console.warn("wx.lin 方法已废弃，请使用开放函数代替 https://doc.mini.talelin.com/start/open-function.html"), 
                t.linHide();
            };
        },
        onPopupTap: function() {
            !0 !== this.data.locked && this._hidePopup(), n.default.emit(this, "lintap");
        },
        _hidePopup: function() {
            var t = this;
            this.data.animation ? (this.setData({
                status: "hide"
            }), setTimeout(function() {
                t.setData({
                    show: !1
                });
            }, 300)) : this.setData({
                show: !1,
                status: "hide"
            });
        },
        linShow: function(e) {
            var i = t({}, e), n = i.zIndex, o = void 0 === n ? 99 : n, a = i.animation, s = void 0 === a || a, l = i.contentAlign, u = void 0 === l ? "center" : l, r = i.locked, h = void 0 !== r && r;
            this.setData({
                zIndex: o,
                animation: s,
                contentAlign: u,
                locked: h,
                show: !0
            });
        },
        linHide: function() {
            this._hidePopup();
        }
    }
});