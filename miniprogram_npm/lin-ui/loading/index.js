var e = require("../../../@babel/runtime/helpers/objectSpread2"), t = o(require("../behaviors/computeOffset")), i = o(require("../behaviors/validator"));

function o(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Component({
    behaviors: [ t.default, i.default ],
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
    attached: function() {
        this._init();
    },
    pageLifetimes: {
        show: function() {
            this._init();
        }
    },
    methods: {
        _init: function() {
            var t = this;
            wx.lin = wx.lin || {}, wx.lin.showLoading = function(i) {
                var o = e({}, i), n = o.custom, a = void 0 !== n && n, r = o.fullScreen, l = void 0 !== r && r, s = o.color, u = void 0 === s ? "" : s, c = o.type, d = void 0 === c ? "rotate" : c, p = o.size, v = void 0 === p ? "medium" : p, f = o.opacity, h = void 0 === f ? "1" : f;
                t.setData({
                    custom: a,
                    fullScreen: l,
                    color: u,
                    type: d,
                    size: v,
                    opacity: h,
                    show: !0
                });
            }, wx.lin.hideLoading = function() {
                t.setData({
                    show: !1
                });
            };
        },
        doNothingMove: function() {}
    }
});