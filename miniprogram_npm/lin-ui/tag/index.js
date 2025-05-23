var e, t = (e = require("../behaviors/validator")) && e.__esModule ? e : {
    default: e
};

Component({
    externalClasses: [ "l-class", "l-select-class", "l-image-class" ],
    behaviors: [ t.default ],
    properties: {
        name: String,
        cell: Object,
        type: {
            type: String,
            value: "touch",
            options: [ "reading", "touch" ]
        },
        bgColor: String,
        fontColor: String,
        disable: Boolean,
        shape: {
            type: String,
            value: "square",
            options: [ "square", "circle" ]
        },
        select: Boolean,
        plain: Boolean,
        size: {
            type: String,
            value: "medium",
            options: [ "large", "medium", "mini", "super-mini" ]
        },
        location: {
            type: String,
            value: "left",
            options: [ "left", "right" ]
        },
        icon: String,
        iconSize: {
            type: String,
            value: "20"
        },
        iconColor: {
            type: String,
            value: "#3683D6"
        },
        image: String,
        iconStyle: {
            type: String,
            value: "size:20;color:#3683D6"
        },
        height: Number
    },
    methods: {
        handleTap: function() {
            if (!this.data.disable) {
                var e = {
                    name: this.data.name,
                    cell: this.data.cell,
                    select: this.data.select
                };
                this.triggerEvent("lintap", e, {
                    bubbles: !0,
                    composed: !0
                });
            }
        }
    }
});