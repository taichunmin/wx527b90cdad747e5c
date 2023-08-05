Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, t = require("./util.js"), r = (e = require("./validator/index.js")) && e.__esModule ? e : {
    default: e
}, s = require("./messages.js");

function a(e) {
    this.rules = null, this._messages = s.messages, this.define(e);
}

a.prototype = {
    messages(e) {
        return e && (this._messages = (0, t.deepMerge)((0, s.newMessages)(), e)), this._messages;
    },
    define(e) {
        if (!e) throw new Error("Cannot configure a schema with no rules");
        if ("object" != typeof e || Array.isArray(e)) throw new Error("Rules must be an object");
        let t, r;
        for (t in this.rules = {}, e) e.hasOwnProperty(t) && (r = e[t], this.rules[t] = Array.isArray(r) ? r : [ r ]);
    },
    validate(e, r = {}, i) {
        let o, n, l = e, u = r, f = i;
        if ("function" == typeof u && (f = u, u = {}), !this.rules || 0 === Object.keys(this.rules).length) return void (f && f());
        if (u.messages) {
            let e = this.messages();
            e === s.messages && (e = (0, s.newMessages)()), (0, t.deepMerge)(e, u.messages), 
            u.messages = e;
        } else u.messages = this.messages();
        const d = {};
        (u.keys || Object.keys(this.rules)).forEach(t => {
            o = this.rules[t], n = l[t], o.forEach(r => {
                let s = r;
                "function" == typeof s.transform && (l === e && (l = {
                    ...l
                }), n = l[t] = s.transform(n)), s = "function" == typeof s ? {
                    validator: s
                } : {
                    ...s
                }, s.validator = this.getValidationMethod(s), s.field = t, s.fullField = s.fullField || t, 
                s.type = this.getType(s), s.validator && (d[t] = d[t] || [], d[t].push({
                    rule: s,
                    value: n,
                    source: l,
                    field: t
                }));
            });
        });
        const p = {};
        (0, t.asyncMap)(d, u, (e, r) => {
            const s = e.rule;
            let i = !("object" !== s.type && "array" !== s.type || "object" != typeof s.fields && "object" != typeof s.defaultField);
            function o(e, t) {
                return {
                    ...t,
                    fullField: `${s.fullField}.${e}`
                };
            }
            function n(n = []) {
                let l = n;
                if (Array.isArray(l) || (l = [ l ]), l.length && (0, t.warning)("async-validator:", l), 
                l.length && s.message && (l = [].concat(s.message)), l = l.map((0, t.complementError)(s)), 
                u.first && l.length) return p[s.field] = 1, r(l);
                if (i) {
                    if (s.required && !e.value) return l = s.message ? [].concat(s.message).map((0, 
                    t.complementError)(s)) : u.error ? [ u.error(s, (0, t.format)(u.messages.required, s.field)) ] : [], 
                    r(l);
                    let i = {};
                    if (s.defaultField) for (const t in e.value) e.value.hasOwnProperty(t) && (i[t] = s.defaultField);
                    i = {
                        ...i,
                        ...e.rule.fields
                    };
                    for (const e in i) if (i.hasOwnProperty(e)) {
                        const t = Array.isArray(i[e]) ? i[e] : [ i[e] ];
                        i[e] = t.map(o.bind(null, e));
                    }
                    const n = new a(i);
                    n.messages(u.messages), e.rule.options && (e.rule.options.messages = u.messages, 
                    e.rule.options.error = u.error), n.validate(e.value, e.rule.options || u, e => {
                        r(e && e.length ? l.concat(e) : e);
                    });
                } else r(l);
            }
            i = i && (s.required || !s.required && e.value), s.field = e.field;
            const l = s.validator(s, e.value, n, e.source, u);
            l && l.then && l.then(() => n(), e => n(e));
        }, e => {
            !function(e) {
                let t, r, s = [], a = {};
                for (t = 0; t < e.length; t++) i = e[t], Array.isArray(i) ? s = s.concat.apply(s, i) : s.push(i);
                var i;
                if (s.length) for (t = 0; t < s.length; t++) r = s[t].field, a[r] = a[r] || [], 
                a[r].push(s[t]); else s = null, a = null;
                f(s, a);
            }(e);
        });
    },
    getType(e) {
        if (void 0 === e.type && e.pattern instanceof RegExp && (e.type = "pattern"), "function" != typeof e.validator && e.type && !r.default.hasOwnProperty(e.type)) throw new Error((0, 
        t.format)("Unknown rule type %s", e.type));
        return e.type || "string";
    },
    getValidationMethod(e) {
        if ("function" == typeof e.validator) return e.validator;
        const t = Object.keys(e), s = t.indexOf("message");
        return -1 !== s && t.splice(s, 1), 1 === t.length && "required" === t[0] ? r.default.required : r.default[this.getType(e)] || !1;
    }
}, a.register = function(e, t) {
    if ("function" != typeof t) throw new Error("Cannot register a validator by type, validator is not a function");
    r.default[e] = t;
}, a.messages = s.messages;

var i = a;

exports.default = i;