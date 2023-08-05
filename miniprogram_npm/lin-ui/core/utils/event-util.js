Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = new class {
    emit(e, t, s) {
        e.triggerEvent(t, s, {
            bubbles: !0,
            composed: !0,
            capturePhase: !0
        });
    }
}();

exports.default = e;