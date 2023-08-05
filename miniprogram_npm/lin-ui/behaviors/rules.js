Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = r(require("../common/async-validator/index")), e = r(require("../behaviors/validator"));

function r(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = Behavior({
    behaviors: [ e.default ],
    properties: {
        rules: {
            optionalTypes: [ Object, Array ],
            value: []
        },
        tipType: {
            type: String,
            value: "toast",
            options: [ "toast", "message", "text" ]
        }
    },
    data: {
        schema: "",
        tipFun: {
            message: "showMessage",
            toast: "showToast"
        },
        tipContent: {
            message: "content",
            toast: "title"
        },
        errorText: "",
        errors: []
    },
    methods: {
        initRules() {
            const {rules: t} = this.data;
            t && ("[object Object]" === Object.prototype.toString.call(t) && (this.data.rules = [ t ]), 
            this.data.rules.forEach(t => {
                t.trigger ? "string" != typeof t.trigger || (t.trigger = [ t.trigger ]) : t.trigger = [];
            }));
        },
        getNeedValidateRule(e) {
            const r = this.data.name, {rules: a} = this.data;
            if (!a) return;
            const s = e ? a.filter(t => t.trigger.indexOf(e) > -1) : a, i = new t.default({
                [r]: s
            });
            return this.setData({
                schema: i
            }), s;
        },
        validatorData(t, e) {
            const {tipType: r, tipFun: a, tipContent: s} = this.data;
            this.getNeedValidateRule(e) && (Object.getOwnPropertyNames(t).forEach(e => {
                "" === t[e] && (t[e] = void 0);
            }), this.data.schema.validate(t, t => {
                if (this.setData({
                    errors: t || []
                }), this.triggerEvent("linvalidate", {
                    errors: t,
                    isError: !!t
                }), t && r) {
                    const e = a[r], i = s[r];
                    return "text" === r ? (this.setData({
                        errorText: t[0].message
                    }), t) : wx.lin && wx.lin[e] ? (wx.lin[e] && wx.lin[e]({
                        [i]: t[0].message,
                        duration: 1500,
                        mask: !1
                    }), t) : (wx.showToast({
                        icon: "none",
                        title: `请在页面内引入${r}组件`
                    }), t);
                }
                !t && r && this.setData({
                    errorText: ""
                });
            }));
        }
    }
});

exports.default = a;