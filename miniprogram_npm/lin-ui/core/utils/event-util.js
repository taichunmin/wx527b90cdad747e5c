Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../../@babel/runtime/helpers/classCallCheck"), r = require("../../../../@babel/runtime/helpers/createClass"), t = new (function() {
    return r(function r() {
        e(this, r);
    }, [ {
        key: "emit",
        value: function(e, r, t) {
            e.triggerEvent(r, t, {
                bubbles: !0,
                composed: !0,
                capturePhase: !0
            });
        }
    } ]);
}())();

exports.default = t;