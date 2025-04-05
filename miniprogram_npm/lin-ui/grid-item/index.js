var e, t = require("../../../@babel/runtime/helpers/objectSpread2"), i = (e = require("../core/utils/data-util")) && e.__esModule ? e : {
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
    attached: function() {},
    observers: {
        key: function() {
            var e = this.getRelationNodes("../grid/index")[0];
            e && (e.setData({
                gridItems: [],
                childNum: 0
            }), e.initGrids());
        }
    },
    lifetimes: {
        ready: function() {
            var e = this.getRelationNodes("../grid/index")[0];
            e && i.default.setDiffData(this, {
                isHover: e.data.isHover
            });
        }
    },
    methods: {
        tapGridItem: function() {
            this.triggerEvent("linitemtap", t({}, this.data), {
                bubbles: !0,
                composed: !0
            });
        }
    }
});