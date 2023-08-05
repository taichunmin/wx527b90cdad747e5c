var e = s(require("../behaviors/zIndex")), t = s(require("../behaviors/watchShow")), i = s(require("../behaviors/validator"));

function s(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Component({
    behaviors: [ e.default, t.default, i.default ],
    externalClasses: [ "l-class", "l-image-class", "l-class-image" ],
    properties: {
        show: Boolean,
        icon: String,
        iconColor: {
            type: String,
            value: "#fff"
        },
        iconSize: {
            type: String,
            value: "28"
        },
        image: String,
        content: String,
        type: {
            type: String,
            value: "primary",
            options: [ "primary", "warning", "success", "error" ]
        },
        duration: {
            type: Number,
            value: 1500
        },
        openApi: {
            type: Boolean,
            value: !0
        },
        top: {
            type: Number,
            value: 0
        }
    },
    data: {
        status: !1
    },
    observers: {
        icon: function() {}
    },
    attached() {
        this.initMessage();
    },
    pageLifetimes: {
        show() {
            this.initMessage();
        }
    },
    methods: {
        initMessage() {
            wx.lin = wx.lin || {}, wx.lin.showMessage = ((e = {}) => {
                const {content: t = "", icon: i = "", image: s = "", type: a = "primary", duration: n = 1500, success: r = null, top: o = 0} = e;
                return this.data.success = r, this.setData({
                    content: t,
                    icon: i,
                    image: s,
                    duration: n,
                    type: a,
                    top: o
                }), this.changeStatus(), this;
            }), wx.lin.hideMessage = (() => {
                this.setData({
                    status: !1
                });
            });
        }
    }
});