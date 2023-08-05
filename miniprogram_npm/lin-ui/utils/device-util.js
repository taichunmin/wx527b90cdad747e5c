Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var t = new class {
    constructor(t) {
        this.systemInfo = t;
    }
    px2rpx(t) {
        return 750 / this.systemInfo.windowWidth * t;
    }
    rpx2px(t) {
        return this.systemInfo.windowWidth / 750 * t;
    }
    getNavigationBarHeight() {
        return this.getTitleBarHeight() + this.getStatusBarHeight();
    }
    getStatusBarHeight() {
        return this.px2rpx(this.systemInfo.statusBarHeight);
    }
    getTitleBarHeight() {
        const t = this.systemInfo.statusBarHeight, e = wx.getMenuButtonBoundingClientRect(), s = e.top - t;
        return this.px2rpx(2 * s + e.height);
    }
}(wx.getSystemInfoSync());

exports.default = t;