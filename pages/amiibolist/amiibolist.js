var __TENCENT_CHAOS_VM = function() {
    var a = function a(c, d, e) {
        var b = [], f = 0;
        while (f++ < d) {
            b.push(c += e);
        }
        return b;
    };
    var c = function c(i) {
        var k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("");
        var f = String(i).replace(/[=]+$/, ""), j = f.length, b, a, d = 0, e = 0, h = [];
        for (;e < j; e++) {
            a = g[f.charCodeAt(e)];
            ~a && (b = d % 4 ? 64 * b + a : a, d++ % 4) ? h.push(255 & b >> (-2 * d & 6)) : 0;
        }
        return h;
    };
    var d = function d(a) {
        return a >> 1 ^ -(1 & a);
    };
    var b = function b(i) {
        var f = [];
        var g = new Int8Array(c(i));
        var j = g.length;
        var h = 0;
        while (j > h) {
            var a = g[h++];
            var e = 127 & a;
            if (a >= 0) {
                f.push(d(e));
                continue;
            }
            a = g[h++];
            e |= (127 & a) << 7;
            if (a >= 0) {
                f.push(d(e));
                continue;
            }
            a = g[h++];
            e |= (127 & a) << 14;
            if (a >= 0) {
                f.push(d(e));
                continue;
            }
            a = g[h++];
            e |= (127 & a) << 21;
            if (a >= 0) {
                f.push(d(e));
                continue;
            }
            a = g[h++];
            e |= a << 28;
            f.push(d(e));
        }
        return f;
    };
    var e = [];
    var f;
    var g = a(0, 43, 0).concat([ 62, 0, 62, 0, 63 ]).concat(a(51, 10, 1)).concat(a(0, 8, 0)).concat(a(0, 25, 1)).concat([ 0, 0, 0, 0, 63, 0 ]).concat(a(25, 26, 1));
    var h = b;
    return function g(b, c) {
        var i = h(b);
        var d, a;
        var a = function(b, c, d, g, h) {
            return function r() {
                var k = [ d, g, c, this, arguments, r, i, 0 ];
                var m = void 0;
                var j = b;
                var l = [];
                var q, n, o, s;
                while (true) {
                    try {
                        while (true) {
                            switch (i[++j]) {
                              case 0:
                                k[i[++j]] = k[i[++j]][i[++j]];
                                break;

                              case 1:
                                k[i[++j]] = k[i[++j]][i[++j]];
                                k[i[++j]] = {};
                                break;

                              case 2:
                                k[i[++j]] = k[i[++j]][i[++j]];
                                k[i[++j]][k[i[++j]]] = k[i[++j]];
                                break;

                              case 3:
                                k[i[++j]] = k[i[++j]] + k[i[++j]];
                                break;

                              case 4:
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                break;

                              case 5:
                                k[i[++j]] = Array(i[++j]);
                                break;

                              case 6:
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                k[i[++j]] = k[i[++j]].call(k[i[++j]], k[i[++j]], k[i[++j]]);
                                k[i[++j]] = k[i[++j]][i[++j]];
                                break;

                              case 7:
                                k[i[++j]] = i[++j];
                                break;

                              case 8:
                                j += i[++j];
                                break;

                              case 9:
                                l.pop();
                                break;

                              case 10:
                                k[i[++j]] = k[i[++j]][i[++j]];
                                k[i[++j]] = i[++j];
                                k[i[++j]][k[i[++j]]] = k[i[++j]];
                                break;

                              case 11:
                                k[i[++j]] = k[i[++j]][i[++j]];
                                n = [];
                                for (o = i[++j]; o > 0; o--) n.push(k[i[++j]]);
                                k[i[++j]] = a(j + i[++j], n, d, g, h);
                                try {
                                    Object.defineProperty(k[i[j - 1]], "length", {
                                        value: i[++j],
                                        configurable: true,
                                        writable: false,
                                        enumerable: false
                                    });
                                } catch (t) {}
                                k[i[++j]][k[i[++j]]] = k[i[++j]];
                                break;

                              case 12:
                                k[i[++j]] = k[i[++j]];
                                break;

                              case 13:
                                k[i[++j]] = k[i[++j]][i[++j]];
                                k[i[++j]] = k[i[++j]][k[i[++j]]];
                                break;

                              case 14:
                                throw k[i[++j]];
                                break;

                              case 15:
                                k[i[++j]] = k[i[++j]].call(k[i[++j]], k[i[++j]]);
                                break;

                              case 16:
                                k[i[++j]] = k[i[++j]].call(k[i[++j]], k[i[++j]]);
                                k[i[++j]] = m;
                                return k[i[++j]];
                                break;

                              case 17:
                                k[i[++j]] = {};
                                k[i[++j]] = k[i[++j]][i[++j]];
                                k[i[++j]] = "";
                                break;

                              case 18:
                                k[i[++j]][i[++j]] = k[i[++j]];
                                break;

                              case 19:
                                k[i[++j]] = "";
                                break;

                              case 20:
                                k[i[++j]] = k[i[++j]] === i[++j];
                                break;

                              case 21:
                                k[i[++j]] = k[i[++j]].call(m, k[i[++j]]);
                                break;

                              case 22:
                                k[i[++j]] = !k[i[++j]];
                                break;

                              case 23:
                                l.push(j + i[++j]);
                                break;

                              case 24:
                                j += k[i[++j]] ? i[++j] : i[(++j, ++j)];
                                break;

                              case 25:
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                break;

                              case 26:
                                k[i[++j]] = m;
                                return k[i[++j]];
                                break;

                              case 27:
                                k[i[++j]] = k[i[++j]][i[++j]];
                                k[i[++j]] = k[i[++j]][i[++j]];
                                k[i[++j]] = k[i[++j]][i[++j]];
                                break;

                              case 28:
                                k[i[++j]] = "";
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                break;

                              case 29:
                                k[i[++j]][k[i[++j]]] = k[i[++j]];
                                break;

                              case 30:
                                k[i[++j]] = q;
                                break;

                              case 31:
                                k[i[++j]] = {};
                                break;

                              case 32:
                                k[i[++j]] = k[i[++j]].call(k[i[++j]], k[i[++j]], k[i[++j]]);
                                break;

                              case 33:
                                k[i[++j]] = k[i[++j]] == k[i[++j]];
                                break;

                              case 34:
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                break;

                              case 35:
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                k[i[++j]] = k[i[++j]][i[++j]];
                                break;

                              case 36:
                                k[i[++j]][k[i[++j]]] = k[i[++j]];
                                k[i[++j]] = k[i[++j]][i[++j]];
                                break;
                            }
                        }
                    } catch (p) {
                        p = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(p);
                        if (l.length > 0) {
                            f = j;
                            e = [];
                        }
                        q = p;
                        e.push(j);
                        if (0 === l.length) {
                            throw h ? h(p, k, e) : p;
                        }
                        j = l.pop();
                        e.pop();
                    }
                }
            };
        };
        return c ? d : a;
    };
}();

function a(b, a) {
    if (null != a && "undefined" != typeof Symbol && a[Symbol.hasInstance]) {
        return !!a[Symbol.hasInstance](b);
    }
    return b instanceof a;
}

__TENCENT_CHAOS_VM("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", false)(1715, [], {
    get Page() {
        return "undefined" == typeof Page ? void 0 : Page;
    },
    set Page(_Page) {
        Page = _Page;
    },
    get console() {
        return "undefined" == typeof console ? void 0 : console;
    },
    set console(_console) {
        console = _console;
    },
    get wx() {
        return "undefined" == typeof wx ? void 0 : wx;
    },
    set wx(_wx) {
        wx = _wx;
    },
    get Object() {
        return "undefined" == typeof Object ? void 0 : Object;
    },
    set Object(_Object) {
        Object = _Object;
    }
}, [ "Page", "grids1", "grids2", "game", "ak", "loadmore", "gameid", "isEmpty", "type", "data", "setData", "console", "log", "wx", "request", "xilie", "url", "amiibolist", "amiibojiangli", "id", "Object", "keys", "length", void 0, "success", "error", "fail", "onLoad", "onReady", "onShow", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "currentTarget", "dataset", "jiangliid", "navigateTo", "concat", "name", "onNaviCard", "gotoam" ], function h(c, e, d) {
    if (!a(c, Error) || !d || 0 == d.length) return c;
    var f = " [DEBUG pages/amiibolist/amiibolist.js:";
    var g = f + d[0] + "]";
    var e = c.stack.split("\n");
    if (c.message.indexOf(g) < 0 && c.message.indexOf(f) >= 0) {
        for (var b = 0; b < d.length; b++) e.splice(b + 1, 0, "    throw again (guess)" + f + d[b] + "]");
    } else {
        if (c.message.indexOf(g) < 0) {
            c.message += g;
            e[0] += g;
        }
        for (var b = 0; b < d.length; b++) if (e[b + 1].indexOf(f) < 0) e[b + 1] += f + d[b] + "]";
    }
    c.stack = e.join("\n");
    return c;
})();