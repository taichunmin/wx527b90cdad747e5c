Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../../@babel/runtime/helpers/toConsumableArray");

function s() {
    this.msgQueues = {};
}

s.prototype = {
    on: function(s, t) {
        Object.prototype.hasOwnProperty.call(this.msgQueues, s) ? "function" == typeof this.msgQueues[s] ? this.msgQueues[s] = [ this.msgQueues[s], t ] : this.msgQueues[s] = [].concat(e(this.msgQueues[s]), [ t ]) : this.msgQueues[s] = t;
    },
    one: function(e, s) {
        this.msgQueues[e] = s;
    },
    emit: function(e, s) {
        Object.prototype.hasOwnProperty.call(this.msgQueues, e) && ("function" == typeof this.msgQueues[e] ? this.msgQueues[e](s) : this.msgQueues[e].map(function(e) {
            e(s);
        }));
    },
    off: function(e) {
        Object.prototype.hasOwnProperty.call(this.msgQueues, e) && delete this.msgQueues[e];
    }
};

var t = new s();

exports.default = t;