Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = Behavior({
    observers: {
        show: function(t) {
            t && this.changeStatus(), t || this.setData({
                status: t
            });
        }
    },
    methods: {
        changeStatus() {
            this.setData({
                status: !0
            }), this.data.timer && clearTimeout(this.data.timer), this.data.timer = setTimeout(() => {
                this.setData({
                    status: !1
                }), this.data.success && this.data.success(), this.data.timer = null;
            }, this.properties.duration);
        }
    }
});

exports.default = t;