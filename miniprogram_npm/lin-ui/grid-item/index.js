var e, t = (e = require("../core/utils/data-util")) && e.__esModule ? e : {
    default: e
};

Component({
    relations: {
        "../grid/index": {
            type: "parent"
        }
    },
    externalClasses: [ "l-grid-item", "l-grid-item-class" ],
    properties: {
        key: String,
        cell: {
            type: Object,
            value: {}
        }
    },
    data: {
        index: 0,
        isHover: !0
    },
    attached() {},
    observers: {
        key: function() {
            const e = this.getRelationNodes("../grid/index")[0];
            e && (e.setData({
                gridItems: [],
                childNum: 0
            }), e.initGrids());
        }
    },
    lifetimes: {
        ready() {
            const e = this.getRelationNodes("../grid/index")[0];
            e && t.default.setDiffData(this, {
                isHover: e.data.isHover
            });
        }
    },
    methods: {
        tapGridItem() {
            this.triggerEvent("linitemtap", {
                ...this.data
            }, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});