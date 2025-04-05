Component({
    properties: {
        name: {
            type: String
        },
        describe: {
            type: String
        },
        doc: {
            type: Boolean,
            value: !0
        }
    },
    data: {},
    methods: {
        onDoc: function() {
            wx.navigateToMiniProgram({
                appId: "wxb05fa7b69aa7e5b7",
                path: "/pages/md/index?title=" + this.properties.name + "&desc=" + this.properties.describe
            });
        }
    }
});