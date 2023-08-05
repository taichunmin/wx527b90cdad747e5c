var e = o(require("../behaviors/computeOffset")), t = o(require("../behaviors/validator"));

function o(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Component({
    behaviors: [ e.default, t.default ],
    externalClasses: [ "l-container-class", "l-class" ],
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        opacity: {
            type: String,
            value: "1"
        },
        bgColor: String,
        zIndex: {
            type: String,
            value: "776"
        },
        type: {
            type: String,
            value: "rotate",
            options: [ "flash", "flip", "change", "rotate", "circle" ]
        },
        color: {
            type: String,
            value: ""
        },
        size: {
            type: String,
            value: "medium"
        },
        custom: Boolean,
        fullScreen: Boolean
    },
    attached() {
        this._init();
    },
    pageLifetimes: {
        show() {
            this._init();
        }
    },
    methods: {
        _init() {
            wx.lin = wx.lin || {}, wx.lin.showLoading = (e => {
                const {custom: t = !1, fullScreen: o = !1, color: i = "", type: a = "rotate", size: l = "medium", opacity: s = "1"} = {
                    ...e
                };
                this.setData({
                    custom: t,
                    fullScreen: o,
                    color: i,
                    type: a,
                    size: l,
                    opacity: s,
                    show: !0
                });
            }), wx.lin.hideLoading = (() => {
                this.setData({
                    show: !1
                });
            });
        },
        doNothingMove() {}
    }
});