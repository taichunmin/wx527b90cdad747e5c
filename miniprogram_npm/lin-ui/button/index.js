var e, a = (e = require("../behaviors/validator")) && e.__esModule ? e : {
    default: e
};

Component({
    externalClasses: [ "l-class", "l-label-class", "l-hover-class", "l-img-class", "l-icon-class" ],
    behaviors: [ a.default ],
    properties: {
        name: {
            type: String,
            value: "lin"
        },
        type: {
            type: String,
            value: "default",
            options: [ "warning", "success", "error", "default" ]
        },
        plain: Boolean,
        size: {
            type: String,
            value: "medium",
            options: [ "medium", "large", "mini", "long" ]
        },
        shape: {
            type: String,
            value: "circle",
            options: [ "square", "circle", "semicircle" ]
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        special: {
            type: Boolean,
            value: !1
        },
        loading: {
            type: Boolean,
            value: !1
        },
        width: Number,
        height: Number,
        icon: String,
        image: String,
        bgColor: String,
        iconColor: String,
        iconSize: String,
        openType: String,
        appParameter: String,
        lang: String,
        hoverStopPropagation: Boolean,
        hoverStartTime: {
            type: Number,
            value: 20
        },
        hoverStayTime: {
            type: Number,
            value: 70
        },
        sessionFrom: {
            type: String,
            value: ""
        },
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean,
        formType: String,
        disabledHover: {
            type: Boolean,
            value: !1
        }
    },
    methods: {
        handleTap: function() {
            if (this.data.disabled || this.data.loading) return !1;
            this.triggerEvent("lintap", {}, {
                bubbles: !0,
                composed: !0
            });
        },
        openTypeEvent: function(e) {
            this.triggerEvent(e.type, e.detail, {});
        }
    }
});