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

                              case 1:
                                j += i[++j];
                                break;

                              case 2:
                                k[i[++j]] = k[i[++j]][i[++j]];
                                k[i[++j]] = k[i[++j]][k[i[++j]]];
                                break;

                              case 3:
                                j += k[i[++j]] ? i[++j] : i[(++j, ++j)];
                                break;

                              case 4:
                                k[i[++j]] = m;
                                return k[i[++j]];
                                break;

                              case 5:
                                l.push(j + i[++j]);
                                break;

                              case 6:
                                k[i[++j]] = q;
                                break;

                              case 7:
                                l.pop();
                                break;

                              case 8:
                                k[i[++j]] = "";
                                break;

                              case 9:
                                throw k[i[++j]];
                                break;

                              case 10:
                                k[i[++j]] = {};
                                k[i[++j]] = k[i[++j]][i[++j]];
                                break;

                              case 11:
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                break;

                              case 12:
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                break;

                              case 13:
                                k[i[++j]] = k[i[++j]];
                                break;

                              case 14:
                                k[i[++j]] = k[i[++j]].call(m, k[i[++j]]);
                                break;

                              case 15:
                                k[i[++j]] = k[i[++j]];
                                k[i[++j]] = m;
                                return k[i[++j]];
                                break;

                              case 16:
                                k[i[++j]][k[i[++j]]] = k[i[++j]];
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

__TENCENT_CHAOS_VM("GiAsBBwCBhwAHBQaEgIKFBQWAggEHgIEJiAeIBQWJiAaEhQAFAIOABLkAQAaFBIAEgIQABTuAQAaEhQAFAISABKUBAAaFBIAEgIUABSEAQAaEhQAFAIWABJ4ABoUEgASAhgAFEQAGhIUABQCGgASqgMAGhQSABICHAAUsAMAGhIUHCQcGggaGh4UChISCqwDDgJKHhYKEhIeEAoUFBosEAKzAh4QChYWFCwcAgQgLBwQAtMCHhYKFBQEEgIAEgASEBoWGlwaXBpeFhpcGlwaXhYaaBpqGooBFhpwGmgaggEWGoQBGmQacBYaigEachpsFhqKARqMARqIARYajAEaZBpmFhpwGooBGmQWGmQahAEaahYabhpqGmQWGmoaahpkFhqGARpsGlwYGtQBGBrmARwcEhoaKBwaEBwGKFxAsAG+Ad4B0AOQAWqAA6wC5gGOA16KAtQBtgIIcgJKwgEi0gGAATYMHhYKFBQGKN8CywIeEAoSEh4QChISBBwCAigQHAYoiQP1AgwSEhI=", false)(134, [], {
    get require() {
        return "undefined" == typeof require ? void 0 : require;
    },
    set require(_require) {
        require = _require;
    },
    get Page() {
        return "undefined" == typeof Page ? void 0 : Page;
    },
    set Page(_Page) {
        Page = _Page;
    }
}, [ "require", "__esModule", "default", "Page", "list", "data", void 0, "onLoad", "onReady", "onShow", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage" ], function h(c, e, d) {
    if (!a(c, Error) || !d || 0 == d.length) return c;
    var f = " [DEBUG pages/game/game.js:";
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