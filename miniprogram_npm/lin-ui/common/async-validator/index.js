Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e, r = require("../../../../@babel/runtime/helpers/objectSpread2"), t = require("../../../../@babel/runtime/helpers/typeof"), s = require("./util.js"), a = (e = require("./validator/index.js")) && e.__esModule ? e : {
    default: e
}, n = require("./messages.js");

function i(e) {
    this.rules = null, this._messages = n.messages, this.define(e);
}

i.prototype = {
    messages: function(e) {
        return e && (this._messages = (0, s.deepMerge)((0, n.newMessages)(), e)), this._messages;
    },
    define: function(e) {
        if (!e) throw new Error("Cannot configure a schema with no rules");
        if ("object" != t(e) || Array.isArray(e)) throw new Error("Rules must be an object");
        var r, s;
        for (r in this.rules = {}, e) e.hasOwnProperty(r) && (s = e[r], this.rules[r] = Array.isArray(s) ? s : [ s ]);
    },
    validate: function(e) {
        var a, o, l = this, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, f = arguments.length > 2 ? arguments[2] : void 0, d = e, c = u, p = f;
        if ("function" == typeof c && (p = c, c = {}), this.rules && 0 !== Object.keys(this.rules).length) {
            if (c.messages) {
                var g = this.messages();
                g === n.messages && (g = (0, n.newMessages)()), (0, s.deepMerge)(g, c.messages), 
                c.messages = g;
            } else c.messages = this.messages();
            var h = {};
            (c.keys || Object.keys(this.rules)).forEach(function(t) {
                a = l.rules[t], o = d[t], a.forEach(function(s) {
                    var a = s;
                    "function" == typeof a.transform && (d === e && (d = r({}, d)), o = d[t] = a.transform(o)), 
                    (a = "function" == typeof a ? {
                        validator: a
                    } : r({}, a)).validator = l.getValidationMethod(a), a.field = t, a.fullField = a.fullField || t, 
                    a.type = l.getType(a), a.validator && (h[t] = h[t] || [], h[t].push({
                        rule: a,
                        value: o,
                        source: d,
                        field: t
                    }));
                });
            });
            var y = {};
            (0, s.asyncMap)(h, c, function(e, a) {
                var n = e.rule, o = !("object" !== n.type && "array" !== n.type || "object" != t(n.fields) && "object" != t(n.defaultField));
                function l(e, t) {
                    return r(r({}, t), {}, {
                        fullField: "".concat(n.fullField, ".").concat(e)
                    });
                }
                function u() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], u = t;
                    if (Array.isArray(u) || (u = [ u ]), u.length && (0, s.warning)("async-validator:", u), 
                    u.length && n.message && (u = [].concat(n.message)), u = u.map((0, s.complementError)(n)), 
                    c.first && u.length) return y[n.field] = 1, a(u);
                    if (o) {
                        if (n.required && !e.value) return u = n.message ? [].concat(n.message).map((0, 
                        s.complementError)(n)) : c.error ? [ c.error(n, (0, s.format)(c.messages.required, n.field)) ] : [], 
                        a(u);
                        var f = {};
                        if (n.defaultField) for (var d in e.value) e.value.hasOwnProperty(d) && (f[d] = n.defaultField);
                        for (var p in f = r(r({}, f), e.rule.fields)) if (f.hasOwnProperty(p)) {
                            var g = Array.isArray(f[p]) ? f[p] : [ f[p] ];
                            f[p] = g.map(l.bind(null, p));
                        }
                        var h = new i(f);
                        h.messages(c.messages), e.rule.options && (e.rule.options.messages = c.messages, 
                        e.rule.options.error = c.error), h.validate(e.value, e.rule.options || c, function(e) {
                            a(e && e.length ? u.concat(e) : e);
                        });
                    } else a(u);
                }
                o = o && (n.required || !n.required && e.value), n.field = e.field;
                var f = n.validator(n, e.value, u, e.source, c);
                f && f.then && f.then(function() {
                    return u();
                }, function(e) {
                    return u(e);
                });
            }, function(e) {
                !function(e) {
                    var r, t, s, a = [], n = {};
                    for (r = 0; r < e.length; r++) s = e[r], Array.isArray(s) ? a = a.concat.apply(a, s) : a.push(s);
                    if (a.length) for (r = 0; r < a.length; r++) n[t = a[r].field] = n[t] || [], n[t].push(a[r]); else a = null, 
                    n = null;
                    p(a, n);
                }(e);
            });
        } else p && p();
    },
    getType: function(e) {
        if (void 0 === e.type && e.pattern instanceof RegExp && (e.type = "pattern"), "function" != typeof e.validator && e.type && !a.default.hasOwnProperty(e.type)) throw new Error((0, 
        s.format)("Unknown rule type %s", e.type));
        return e.type || "string";
    },
    getValidationMethod: function(e) {
        if ("function" == typeof e.validator) return e.validator;
        var r = Object.keys(e), t = r.indexOf("message");
        return -1 !== t && r.splice(t, 1), 1 === r.length && "required" === r[0] ? a.default.required : a.default[this.getType(e)] || !1;
    }
}, i.register = function(e, r) {
    if ("function" != typeof r) throw new Error("Cannot register a validator by type, validator is not a function");
    a.default[e] = r;
}, i.messages = n.messages;

exports.default = i;