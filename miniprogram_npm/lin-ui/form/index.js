var t = i(require("../core/utils/event-bus.js")), e = i(require("../core/utils/event-util"));

function i(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Component({
    externalClasses: [ "l-form-container-class", "l-form-submit-class", "l-form-reset-class", "l-form-btn-class" ],
    options: {
        multipleSlots: !0
    },
    relations: {
        "../form-item/index": {
            type: "child",
            linked: function(t) {
                this._initItem(t);
            },
            linkChanged: function() {},
            unlinked: function() {}
        }
    },
    properties: {
        name: {
            type: String,
            value: ""
        },
        isSubmitValidate: {
            type: Boolean,
            value: !0
        }
    },
    attached() {
        this._init();
    },
    detached() {
        for (let e in this._keys) Object.prototype.hasOwnProperty.call(this._keys, e) && (t.default.off("lin-form-blur-" + e), 
        t.default.off("lin-form-change-" + e));
    },
    data: {
        _this: null
    },
    methods: {
        _init() {
            wx.lin = wx.lin || {}, wx.lin.forms = wx.lin.forms || {}, wx.lin.forms[this.properties.name] = this, 
            wx.lin.initValidateForm = (t => {
                wx.lin._instantiation = t;
            }), wx.lin.submitForm = function(t) {
                wx.lin.forms[t].submit();
            }, wx.lin.resetForm = function(t) {
                wx.lin.forms[t].reset();
            };
        },
        _initItem(e) {
            this._keys = this._keys || {}, this._errors = this._errors || {};
            const i = e.properties.name;
            if (t.default.on("lin-form-blur-" + i, t => {
                this._validateItem(t, "blur");
            }), t.default.on("lin-form-change-" + i, t => {
                clearTimeout(this.change_time), this.change_time = setTimeout(() => {
                    this._validateItem(t, "change");
                }, 200);
            }), this._keys[i]) throw new Error("表单项存在重复的name：" + i);
            this._keys[i] = "", this._errors[i] = [];
        },
        _validateItem(t, e) {
            let i = wx.lin._instantiation, s = this._getValues();
            const r = this.getRelationNodes("../form-item/index").find(e => e.properties.name === t);
            if (!i.selectComponent("#" + t)) throw new Error("表单项不存在name：" + t);
            return r.validatorData(s, e), this._errors[t] = r.data.errors, r.data.errors;
        },
        _forEachNodes(t, e) {
            let i = this.getRelationNodes("../form-item/index");
            e && i.reverse(), i.forEach((e, i) => {
                t(e, i);
            });
        },
        _validateForm() {
            let t = wx.lin._instantiation, e = [], i = this._getValues();
            return this._forEachNodes(s => {
                const r = s.properties.name;
                if (!t.selectComponent("#" + r)) throw new Error("表单项不存在name：" + r);
                s.validatorData(i), this._errors[r] = s.data.errors, e = e.concat(s.data.errors);
            }, !0), e;
        },
        _getValues() {
            let t = {}, e = wx.lin._instantiation;
            return this._forEachNodes(i => {
                const s = i.properties.name, r = e.selectComponent("#" + s);
                r && (t[s] = r.getValues());
            }), t;
        },
        submit() {
            let t = this.data.isSubmitValidate ? this._validateForm() : [];
            this.triggerEvent("linsubmit", {
                values: this._getValues(),
                errors: this.data.isSubmitValidate ? this._errors : {},
                isValidate: 0 === t.length
            });
        },
        reset() {
            let t = wx.lin._instantiation;
            this._forEachNodes(e => {
                e.setData({
                    errorText: ""
                });
                const i = e.properties.name, s = t.selectComponent("#" + i);
                s && s.reset();
            }), e.default.emit(this, "linreset");
        }
    }
});