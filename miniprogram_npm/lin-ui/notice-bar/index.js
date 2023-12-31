var t, i = (t = require("../core/utils/node-util")) && t.__esModule ? t : {
    default: t
};

Component({
    externalClasses: [ "l-class", "l-icon-class" ],
    properties: {
        type: {
            type: String,
            value: "still"
        },
        swipArr: Array,
        frontIconName: {
            type: String,
            value: ""
        },
        frontIconSize: {
            type: Number,
            value: 28
        },
        frontIconColor: {
            type: String,
            value: "#3683D6"
        },
        endIconName: {
            type: String,
            value: ""
        },
        endIconSize: {
            type: Number,
            value: 28
        },
        endIconColor: {
            type: String,
            value: "#3683D6"
        },
        backgroundcolor: {
            type: String,
            value: "#DFEDFF"
        },
        color: {
            type: String,
            value: "#3683D6"
        },
        speed: {
            type: Number,
            value: 1500
        },
        show: {
            type: Boolean,
            value: !0
        },
        close: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        wrapWidth: 0,
        width: 0,
        duration: 0,
        animation: null,
        timer: null
    },
    detached() {
        this.destroyTimer();
    },
    ready() {
        "roll" === this.properties.type && this.properties.show && this.initAnimation();
    },
    methods: {
        async initAnimation() {
            const t = await i.default.getNodeRectFromComponent(this, ".l-noticebar-content"), a = await i.default.getNodeRectFromComponent(this, ".l-noticebar-content-wrap"), e = t.width / 40 * this.data.speed, n = wx.createAnimation({
                duration: e,
                timingFunction: "linear"
            });
            this.setData({
                wrapWidth: a.width,
                width: t.width,
                duration: e,
                animation: n
            }, () => {
                this.startAnimation();
            });
        },
        startAnimation() {
            if (0 !== this.data.animation.option.transition.duration) {
                this.data.animation.option.transition.duration = 0;
                const t = this.data.animation.translateX(this.data.wrapWidth).step();
                this.setData({
                    animationData: t.export()
                });
            }
            this.data.animation.option.transition.duration = this.data.duration;
            const t = this.data.animation.translateX(-this.data.width).step();
            setTimeout(() => {
                this.setData({
                    animationData: t.export()
                });
            }, 100);
            const i = setTimeout(() => {
                this.startAnimation();
            }, this.data.duration);
            this.setData({
                timer: i
            });
        },
        destroyTimer() {
            this.data.timer && clearTimeout(this.data.timer);
        },
        handleTap() {
            this.triggerEvent("lintap", {}, {
                bubbles: !0,
                composed: !0
            }), this.setData({
                timer: null
            });
        },
        onSwip(t) {
            this.triggerEvent("lintap", {
                ...t.currentTarget.dataset
            }, {
                bubbles: !0,
                composed: !0
            });
        },
        onIconTap() {
            this.triggerEvent("linicontap", {}, {
                bubbles: !0,
                composed: !0
            }), this.setData({
                timer: null
            });
        },
        onClose() {
            this.setData({
                timer: null,
                show: !1
            });
        },
        linFlush() {
            this.destroyTimer(), this.initAnimation();
        }
    }
});