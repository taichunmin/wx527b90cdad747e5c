var t, a = (t = require("../behaviors/validator")) && t.__esModule ? t : {
    default: t
};

Component({
    externalClasses: [ "l-class", "l-class-self", "l-self-class" ],
    behaviors: [ a.default ],
    properties: {
        dot: {
            type: Boolean,
            value: !1
        },
        shape: {
            type: String,
            value: "horn",
            options: [ "horn", "circle" ]
        },
        value: {
            type: String,
            value: "0"
        },
        mode: {
            type: String,
            value: "number",
            options: [ "number", "text" ]
        },
        maxCount: {
            type: Number,
            value: 99
        },
        numberType: {
            type: String,
            value: "overflow",
            options: [ "overflow", "limit", "ellipsis" ]
        },
        show: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        finalCount: 0
    },
    observers: {
        value: function() {
            this.finalCount();
        }
    },
    methods: {
        finalCount: function() {
            isNaN(Number(this.data.value)) || "text" === this.data.mode ? this.setData({
                finalCount: this.data.value
            }) : this.switchType();
        },
        switchType: function() {
            switch (this.data.numberType) {
              case "overflow":
                this.setData({
                    finalCount: Number(this.data.value) > Number(this.data.maxCount) ? this.data.maxCount + "+" : this.data.value
                });
                break;

              case "ellipsis":
                this.setData({
                    finalCount: Number(this.data.value) > Number(this.data.maxCount) ? "..." : this.data.value
                });
                break;

              case "limit":
                this.setData({
                    finalCount: Number(this.data.value) > 999 ? Number(this.data.value) >= 9999 ? Math.floor(this.data.value / 1e4 * 100) / 100 + "w" : Math.floor(this.data.value / 1e3 * 100) / 100 + "k" : this.data.value
                });
                break;

              default:
                this.setData({
                    finalCount: Number(this.data.value)
                });
            }
        },
        handleTap: function() {
            this.triggerEvent("lintap", {}, {
                bubbles: !0,
                composed: !0
            });
        }
    }
});