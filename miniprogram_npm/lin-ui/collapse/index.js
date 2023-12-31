Component({
    options: {
        pureDataPattern: /^_/
    },
    relations: {
        "../collapse-item/index": {
            type: "child",
            linked: function() {
                this._setAllItemId();
            },
            linkChanged: function() {
                this._setAllItemId();
            },
            unlinked: function() {
                this._setAllItemId();
            }
        }
    },
    lifetimes: {
        ready: function() {
            this.updateView();
        }
    },
    properties: {
        type: {
            type: String,
            value: "normal"
        },
        expandItemId: {
            type: Array,
            value: []
        }
    },
    data: {
        _expandItems: []
    },
    observers: {
        expandItemId: function() {
            this.updateView();
        }
    },
    methods: {
        async updateView() {
            let t;
            t = "accordion" === this.data.type ? this.data.expandItemId.slice(0, 1) : this.data.expandItemId;
            let e = this.getRelationNodes("../collapse-item/index");
            for (let a = 0; a < e.length; a++) {
                let d = e[a], i = "default" === d.data.itemId ? a : d.data.itemId;
                t.indexOf(i) > -1 && !d.isExpandContent ? await this.setCollapseItemStatus(d, !0) : (d.isExpandContent || "accordion" === this.data.type) && await this.setCollapseItemStatus(d, !1);
            }
        },
        async onTapCollapseItem(t) {
            "accordion" === this.data.type && await this.foldAllExpandItem(t), this.setCollapseItemStatus(t, !t.data.isExpandContent), 
            t.data.isExpandContent ? this.triggerEvent("linfold", {
                id: t.data.itemId ? t.data.itemId : t.data._idDefault
            }) : this.triggerEvent("linexpand", {
                id: t.data.itemId ? t.data.itemId : t.data._idDefault
            });
        },
        async setCollapseItemStatus(t, e) {
            if (e) t.expandContent(), this.data._expandItems.push(t); else {
                await t.foldContent();
                for (let e = 0; e < this.data._expandItems.length; e++) this.data._expandItems[e] === t && this.data._expandItems.splice(e, 1);
            }
        },
        foldAllExpandItem(t) {
            for (let e = 0; e < this.data._expandItems.length; e++) t !== this.data._expandItems[e] && this.data._expandItems[e].foldContent();
            this.data._expandItems = [];
        },
        _setAllItemId() {
            this.getRelationNodes("../collapse-item/index").forEach((t, e) => {
                t.data._idDefault = e;
            });
        }
    }
});