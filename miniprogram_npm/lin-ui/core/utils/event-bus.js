function e() {
    this.msgQueues = {};
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0, e.prototype = {
    on: function(e, s) {
        Object.prototype.hasOwnProperty.call(this.msgQueues, e) ? "function" == typeof this.msgQueues[e] ? this.msgQueues[e] = [ this.msgQueues[e], s ] : this.msgQueues[e] = [ ...this.msgQueues[e], s ] : this.msgQueues[e] = s;
    },
    one: function(e, s) {
        this.msgQueues[e] = s;
    },
    emit: function(e, s) {
        Object.prototype.hasOwnProperty.call(this.msgQueues, e) && ("function" == typeof this.msgQueues[e] ? this.msgQueues[e](s) : this.msgQueues[e].map(e => {
            e(s);
        }));
    },
    off: function(e) {
        Object.prototype.hasOwnProperty.call(this.msgQueues, e) && delete this.msgQueues[e];
    }
};

var s = new e();

exports.default = s;