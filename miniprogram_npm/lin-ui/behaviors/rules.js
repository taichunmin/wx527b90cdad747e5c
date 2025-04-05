Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = require("../../../@babel/runtime/helpers/defineProperty"), e = a(require("../common/async-validator/index")), r = a(require("../behaviors/validator"));

function a(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

exports.default = Behavior({
    behaviors: [ r.default ],
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
        initRules: function() {
            var t = this.data.rules;
            t && ("[object Object]" === Object.prototype.toString.call(t) && (this.data.rules = [ t ]), 
            this.data.rules.forEach(function(t) {
                t.trigger ? "string" != typeof t.trigger || (t.trigger = [ t.trigger ]) : t.trigger = [];
            }));
        },
        getNeedValidateRule: function(r) {
            var a = this.data.name, i = this.data.rules;
            if (i) {
                var s = r ? i.filter(function(t) {
                    return t.trigger.indexOf(r) > -1;
                }) : i, o = new e.default(t({}, a, s));
                return this.setData({
                    schema: o
                }), s;
            }
        },
        validatorData: function(e, r) {
            var a = this, i = this.data, s = i.tipType, o = i.tipFun, n = i.tipContent;
            this.getNeedValidateRule(r) && (Object.getOwnPropertyNames(e).forEach(function(t) {
                "" === e[t] && (e[t] = void 0);
            }), this.data.schema.validate(e, function(e) {
                if (a.setData({
                    errors: e || []
                }), a.triggerEvent("linvalidate", {
                    errors: e,
                    isError: !!e
                }), e && s) {
                    var r = o[s], i = n[s];
                    return "text" === s ? (a.setData({
                        errorText: e[0].message
                    }), e) : wx.lin && wx.lin[r] ? (wx.lin[r] && wx.lin[r](t(t(t({}, i, e[0].message), "duration", 1500), "mask", !1)), 
                    e) : (wx.showToast({
                        icon: "none",
                        title: "请在页面内引入".concat(s, "组件")
                    }), e);
                }
                !e && s && a.setData({
                    errorText: ""
                });
            }));
        }
    }
});