var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"), t = require("../../../@babel/runtime/helpers/asyncToGenerator"), a = i(require("../utils/device-util")), l = i(require("../behaviors/validator")), n = i(require("../core/utils/event-util"));

function i(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Component({
    options: {
        multipleSlots: !0
    },
    behaviors: [ l.default ],
    externalClasses: [ "l-title-class" ],
    properties: {
        bgColor: {
            type: String,
            value: "white"
        },
        statusBarColor: {
            type: String,
            value: "transparent"
        },
        titleBarColor: {
            type: String,
            value: "transparent"
        },
        titleColor: {
            type: String,
            value: "black"
        },
        capsuleColor: {
            type: String,
            value: "black",
            options: [ "white", "black" ]
        },
        disableBack: {
            type: Boolean,
            value: !1
        },
        disableHome: {
            type: Boolean,
            value: !1
        },
        hiddenCapsule: {
            type: Boolean,
            value: !1
        },
        homePage: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: ""
        },
        hasPadding: {
            type: Boolean,
            value: !0
        },
        hiddenTitle: {
            type: Boolean,
            value: !1
        },
        capsuleLeftIconPath: {
            type: String,
            value: null
        },
        capsuleLeftIconWidth: {
            type: Number,
            value: null
        },
        capsuleLeftIconHeight: {
            type: Number,
            value: null
        },
        capsuleRightIconPath: {
            type: String,
            value: null
        },
        capsuleRightIconWidth: {
            type: Number,
            value: null
        },
        capsuleRightIconHeight: {
            type: Number,
            value: null
        }
    },
    data: {
        titleBarHeight: a.default.getTitleBarHeight(),
        statusBarHeight: a.default.getStatusBarHeight(),
        capsuleButtonInfo: null
    },
    lifetimes: {
        ready: function() {
            this.setData({
                capsuleButtonInfo: this.getCapsuleButtonInfo()
            });
        }
    },
    methods: {
        getCapsuleButtonInfo: function() {
            var e = wx.getSystemInfoSync().screenWidth, t = wx.getMenuButtonBoundingClientRect();
            return t.left = e - t.right, t.right = t.left + t.width, t;
        },
        onTapLeftButton: function() {
            n.default.emit(this, "linlefttap"), this.data.disableBack || wx.navigateBack();
        },
        onLongPressLeftButton: function() {
            n.default.emit(this, "linleftlongpress");
        },
        onTapRightButton: function() {
            var a = this;
            return t(e().mark(function t() {
                var l;
                return e().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        n.default.emit(a, "linrighttap"), l = a.data.homePage, a.data.disableHome || wx.switchTab({
                            url: l,
                            fail: function() {
                                wx.navigateTo({
                                    url: l
                                });
                            }
                        });

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, t);
            }))();
        },
        onLongPressRightButton: function() {
            n.default.emit(this, "linrightlongpress");
        }
    }
});