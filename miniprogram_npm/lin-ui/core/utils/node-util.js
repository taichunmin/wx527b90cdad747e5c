Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"), r = require("../../../../@babel/runtime/helpers/asyncToGenerator"), t = require("../../../../@babel/runtime/helpers/classCallCheck"), n = require("../../../../@babel/runtime/helpers/createClass"), u = new (function() {
    return n(function e() {
        t(this, e);
    }, [ {
        key: "getNodeRectFromComponent",
        value: (o = r(e().mark(function r(t, n) {
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, new Promise(function(e) {
                        t.createSelectorQuery().select(n).boundingClientRect(function(r) {
                            e(r);
                        }).exec();
                    });

                  case 2:
                    return e.abrupt("return", e.sent);

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, r);
        })), function(e, r) {
            return o.apply(this, arguments);
        })
    }, {
        key: "getNodesRectFromComponent",
        value: (c = r(e().mark(function r(t, n) {
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, new Promise(function(e) {
                        t.createSelectorQuery().selectAll(n).boundingClientRect(function(r) {
                            e(r);
                        }).exec();
                    });

                  case 2:
                    return e.abrupt("return", e.sent);

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, r);
        })), function(e, r) {
            return c.apply(this, arguments);
        })
    }, {
        key: "getNodeFieldsFromComponent",
        value: (u = r(e().mark(function r(t, n, u) {
            return e().wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.next = 2, new Promise(function(e) {
                        t.createSelectorQuery().select(n).fields(u, function(r) {
                            e(r);
                        }).exec();
                    });

                  case 2:
                    return e.abrupt("return", e.sent);

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, r);
        })), function(e, r, t) {
            return u.apply(this, arguments);
        })
    } ]);
    var u, c, o;
}())();

exports.default = u;