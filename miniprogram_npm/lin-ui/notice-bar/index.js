var t, e = require("../../../@babel/runtime/helpers/objectSpread2"), i = require("../../../@babel/runtime/helpers/regeneratorRuntime"), n = require("../../../@babel/runtime/helpers/asyncToGenerator"), a = (t = require("../core/utils/node-util")) && t.__esModule ? t : {
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
    detached: function() {
        this.destroyTimer();
    },
    ready: function() {
        "roll" === this.properties.type && this.properties.show && this.initAnimation();
    },
    methods: {
        initAnimation: function() {
            var t = this;
            return n(i().mark(function e() {
                var n, r, o, s;
                return i().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, a.default.getNodeRectFromComponent(t, ".l-noticebar-content");

                      case 2:
                        return n = e.sent, e.next = 5, a.default.getNodeRectFromComponent(t, ".l-noticebar-content-wrap");

                      case 5:
                        r = e.sent, o = n.width / 40 * t.data.speed, s = wx.createAnimation({
                            duration: o,
                            timingFunction: "linear"
                        }), t.setData({
                            wrapWidth: r.width,
                            width: n.width,
                            duration: o,
                            animation: s
                        }, function() {
                            t.startAnimation();
                        });

                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
            }))();
        },
        startAnimation: function() {
            var t = this;
            if (0 !== this.data.animation.option.transition.duration) {
                this.data.animation.option.transition.duration = 0;
                var e = this.data.animation.translateX(this.data.wrapWidth).step();
                this.setData({
                    animationData: e.export()
                });
            }
            this.data.animation.option.transition.duration = this.data.duration;
            var i = this.data.animation.translateX(-this.data.width).step();
            setTimeout(function() {
                t.setData({
                    animationData: i.export()
                });
            }, 100);
            var n = setTimeout(function() {
                t.startAnimation();
            }, this.data.duration);
            this.setData({
                timer: n
            });
        },
        destroyTimer: function() {
            this.data.timer && clearTimeout(this.data.timer);
        },
        handleTap: function() {
            this.triggerEvent("lintap", {}, {
                bubbles: !0,
                composed: !0
            }), this.setData({
                timer: null
            });
        },
        onSwip: function(t) {
            this.triggerEvent("lintap", e({}, t.currentTarget.dataset), {
                bubbles: !0,
                composed: !0
            });
        },
        onIconTap: function() {
            this.triggerEvent("linicontap", {}, {
                bubbles: !0,
                composed: !0
            }), this.setData({
                timer: null
            });
        },
        onClose: function() {
            this.setData({
                timer: null,
                show: !1
            });
        },
        linFlush: function() {
            this.destroyTimer(), this.initAnimation();
        }
    }
});