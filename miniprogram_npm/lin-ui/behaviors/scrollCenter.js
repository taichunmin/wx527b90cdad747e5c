Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = Behavior({
    methods: {
        getRect(e, t = !1) {
            return new Promise((r, o) => {
                const s = wx.createSelectorQuery().in(this);
                (t ? s.selectAll(e) : s.select(e)).boundingClientRect(e => {
                    if (!e) return o("找不到元素");
                    r(e);
                }).exec();
            });
        },
        queryScrollNode(e, t, r = "width") {
            if (t < 0) return;
            const o = e[t];
            this.getRect(".l-tabsscroll").then(s => {
                if (!s) return console.error("找不到元素");
                const c = s[r];
                let l = e.slice(0, t).reduce((e, t) => e + t[r], 0);
                l += (o[r] - c) / 2, "width" === r ? this.setData({
                    transformX: l,
                    transformY: 0
                }) : this.setData({
                    transformX: 0,
                    transformY: l
                });
            }).catch(e => {
                console.error(e);
            });
        },
        queryMultipleNodes() {
            const {placement: e, currentIndex: t} = this.data;
            this.getRect(".l-tabs-item", !0).then(r => {
                -1 !== [ "top", "bottom" ].indexOf(e) ? this.queryScrollNode(r, t) : this.queryScrollNode(r, t, "height");
            }).catch(e => {
                console.error(e);
            });
        }
    }
});

exports.default = e;