var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"), t = require("../../../@babel/runtime/helpers/asyncToGenerator");

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
        updateView: function() {
            var a = this;
            return t(e().mark(function t() {
                var n, d, i, r, s;
                return e().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        n = "accordion" === a.data.type ? a.data.expandItemId.slice(0, 1) : a.data.expandItemId, 
                        d = a.getRelationNodes("../collapse-item/index"), i = 0;

                      case 3:
                        if (!(i < d.length)) {
                            e.next = 17;
                            break;
                        }
                        if (r = d[i], s = "default" === r.data.itemId ? i : r.data.itemId, !(n.indexOf(s) > -1) || r.isExpandContent) {
                            e.next = 10;
                            break;
                        }
                        return e.next = 8, a.setCollapseItemStatus(r, !0);

                      case 8:
                        e.next = 14;
                        break;

                      case 10:
                        if (e.t0 = r.isExpandContent || "accordion" === a.data.type, !e.t0) {
                            e.next = 14;
                            break;
                        }
                        return e.next = 14, a.setCollapseItemStatus(r, !1);

                      case 14:
                        i++, e.next = 3;
                        break;

                      case 17:
                      case "end":
                        return e.stop();
                    }
                }, t);
            }))();
        },
        onTapCollapseItem: function(a) {
            var n = this;
            return t(e().mark(function t() {
                return e().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (e.t0 = "accordion" === n.data.type, !e.t0) {
                            e.next = 4;
                            break;
                        }
                        return e.next = 4, n.foldAllExpandItem(a);

                      case 4:
                        n.setCollapseItemStatus(a, !a.data.isExpandContent), a.data.isExpandContent ? n.triggerEvent("linfold", {
                            id: a.data.itemId ? a.data.itemId : a.data._idDefault
                        }) : n.triggerEvent("linexpand", {
                            id: a.data.itemId ? a.data.itemId : a.data._idDefault
                        });

                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, t);
            }))();
        },
        setCollapseItemStatus: function(a, n) {
            var d = this;
            return t(e().mark(function t() {
                var i;
                return e().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!n) {
                            e.next = 4;
                            break;
                        }
                        a.expandContent(), d.data._expandItems.push(a), e.next = 7;
                        break;

                      case 4:
                        return e.next = 6, a.foldContent();

                      case 6:
                        for (i = 0; i < d.data._expandItems.length; i++) d.data._expandItems[i] === a && d.data._expandItems.splice(i, 1);

                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, t);
            }))();
        },
        foldAllExpandItem: function(e) {
            for (var t = 0; t < this.data._expandItems.length; t++) e !== this.data._expandItems[t] && this.data._expandItems[t].foldContent();
            this.data._expandItems = [];
        },
        _setAllItemId: function() {
            this.getRelationNodes("../collapse-item/index").forEach(function(e, t) {
                e.data._idDefault = t;
            });
        }
    }
});