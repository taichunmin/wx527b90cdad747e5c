var t = a(require("../utils/device-util")), e = a(require("../behaviors/validator")), l = a(require("../core/utils/event-util"));

function a(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Component({
    options: {
        multipleSlots: !0
    },
    behaviors: [ e.default ],
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
        titleBarHeight: t.default.getTitleBarHeight(),
        statusBarHeight: t.default.getStatusBarHeight(),
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
        getCapsuleButtonInfo() {
            const t = wx.getSystemInfoSync().screenWidth, e = wx.getMenuButtonBoundingClientRect();
            return e.left = t - e.right, e.right = e.left + e.width, e;
        },
        onTapLeftButton() {
            l.default.emit(this, "linlefttap"), this.data.disableBack || wx.navigateBack();
        },
        onLongPressLeftButton() {
            l.default.emit(this, "linleftlongpress");
        },
        async onTapRightButton() {
            l.default.emit(this, "linrighttap");
            const t = this.data.homePage;
            this.data.disableHome || wx.switchTab({
                url: t,
                fail() {
                    wx.navigateTo({
                        url: t
                    });
                }
            });
        },
        onLongPressRightButton() {
            l.default.emit(this, "linrightlongpress");
        }
    }
});