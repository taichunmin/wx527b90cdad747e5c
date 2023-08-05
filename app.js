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
                var o = void 0;
                var j = b;
                var n = [];
                var q, l, m, s;
                while (true) {
                    try {
                        while (true) {
                            switch (i[++j]) {
                              case 0:
                                k[i[++j]] = k[i[++j]][i[++j]];
                                break;

                              case 1:
                                k[i[++j]] = k[i[++j]].call(k[i[++j]], k[i[++j]], k[i[++j]]);
                                break;

                              case 2:
                                j += i[++j];
                                break;

                              case 3:
                                k[i[++j]] = k[i[++j]] >= i[++j];
                                break;

                              case 4:
                                k[i[++j]] = {};
                                break;

                              case 5:
                                k[i[++j]] = i[++j];
                                k[i[++j]] = !k[i[++j]];
                                k[i[++j]] = k[i[++j]];
                                break;

                              case 6:
                                k[i[++j]] = k[i[++j]] < i[++j];
                                break;

                              case 7:
                                k[i[++j]] = k[i[++j]][k[i[++j]]];
                                k[i[++j]] = k[i[++j]];
                                k[i[++j]][k[i[++j]]] = k[i[++j]];
                                break;

                              case 8:
                                k[i[++j]] = k[i[++j]][i[++j]];
                                k[i[++j]] = k[i[++j]][i[++j]];
                                break;

                              case 9:
                                n.pop();
                                break;

                              case 10:
                                j += k[i[++j]] ? i[++j] : i[(++j, ++j)];
                                break;

                              case 11:
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                break;

                              case 12:
                                k[i[++j]] = {};
                                k[i[++j]] = k[i[++j]][i[++j]];
                                break;

                              case 13:
                                l = [];
                                for (m = i[++j]; m > 0; m--) l.push(k[i[++j]]);
                                k[i[++j]] = a(j + i[++j], l, d, g, h);
                                try {
                                    Object.defineProperty(k[i[j - 1]], "length", {
                                        value: i[++j],
                                        configurable: true,
                                        writable: false,
                                        enumerable: false
                                    });
                                } catch (t) {}
                                break;

                              case 14:
                                k[i[++j]][k[i[++j]]] = k[i[++j]];
                                break;

                              case 15:
                                k[i[++j]] = k[i[++j]][i[++j]];
                                k[i[++j]] = k[i[++j]][k[i[++j]]];
                                break;

                              case 16:
                                k[i[++j]] = k[i[++j]].call(o);
                                break;

                              case 17:
                                k[i[++j]] = k[i[++j]] - 0;
                                break;

                              case 18:
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                break;

                              case 19:
                                k[i[++j]] = ++k[i[++j]];
                                break;

                              case 20:
                                k[i[++j]] = !k[i[++j]];
                                break;

                              case 21:
                                k[i[++j]] = i[++j];
                                break;

                              case 22:
                                k[i[++j]] = Array(i[++j]);
                                break;

                              case 23:
                                k[i[++j]] = k[i[++j]];
                                k[i[++j]][k[i[++j]]] = k[i[++j]];
                                break;

                              case 24:
                                k[i[++j]] = q;
                                break;

                              case 25:
                                k[i[++j]][i[++j]] = k[i[++j]];
                                break;

                              case 26:
                                k[i[++j]] = k[i[++j]] + k[i[++j]];
                                break;

                              case 27:
                                n.push(j + i[++j]);
                                break;

                              case 28:
                                k[i[++j]] = k[i[++j]].call(k[i[++j]], k[i[++j]]);
                                break;

                              case 29:
                                k[i[++j]] = k[i[++j]][i[++j]];
                                l = [];
                                for (m = i[++j]; m > 0; m--) l.push(k[i[++j]]);
                                k[i[++j]] = a(j + i[++j], l, d, g, h);
                                try {
                                    Object.defineProperty(k[i[j - 1]], "length", {
                                        value: i[++j],
                                        configurable: true,
                                        writable: false,
                                        enumerable: false
                                    });
                                } catch (u) {}
                                k[i[++j]][k[i[++j]]] = k[i[++j]];
                                break;

                              case 30:
                                k[i[++j]] = k[i[++j]];
                                break;

                              case 31:
                                k[i[++j]] = k[i[++j]][k[i[++j]]];
                                break;

                              case 32:
                                k[i[++j]] = "";
                                break;

                              case 33:
                                k[i[++j]] = k[i[++j]] > i[++j];
                                break;

                              case 34:
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                break;

                              case 35:
                                k[i[++j]] += String.fromCharCode(i[++j]);
                                k[i[++j]] = k[i[++j]].call(k[i[++j]], k[i[++j]]);
                                break;

                              case 36:
                                k[i[++j]] = o;
                                return k[i[++j]];
                                break;

                              case 37:
                                k[i[++j]] = k[i[++j]].call(o, k[i[++j]], k[i[++j]]);
                                break;

                              case 38:
                                k[i[++j]] = k[i[++j]].call(o, k[i[++j]]);
                                break;

                              case 39:
                                throw k[i[++j]];
                                break;
                            }
                        }
                    } catch (p) {
                        p = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(p);
                        if (n.length > 0) {
                            f = j;
                            e = [];
                        }
                        q = p;
                        e.push(j);
                        if (0 === n.length) {
                            throw h ? h(p, k, e) : p;
                        }
                        j = n.pop();
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

__TENCENT_CHAOS_VM("SB4eHj4CFj4APiAWPh4+AgJAFj4AFgIgHhICFDogEh4yAhxGOjIqOgA+SEY6HkYCIiRIRi5GJEAWJB4kAhYkACQgFiQeLAICJBY+ABYCJB4mAhRAIBIeGAIcSEAyPkBIOh5IAiYcQEguRhwkFhweHAIWHAAcIBYcHjACAhwWPgBWAhweEAIUFiASHjgCHBIWMg4WEjpGFhwyFjxCRkhQUAAUFgAMHBQoFBy6CYQEABgIAB4UAgQUABQeHAIGHhQcQBwWHPbZAxyq/QIcyo4DFhzGzwIc4uQCHMq0BDQWHBg4Gh4UFkgWFhQc1gigAywgABAUBAAiBAIyIAAKChoCJBoQJDIUACQeJAIIJAAkHhoCChIkGggaOigCKgIUHvYJAhooHjoeAiwCFCjIBAIaHig6KAI0BhQiIB6CBAAaKB44EBIkGkgaGo4BROYDfooBzAKcAhAWKBZQBiwiACwQADwUCh4SAgQSABIeFgIGGBIWQCgWKJ7wAiiW6AMonvoCRCiA/AIolucCOBwYEigeKAIEKAAoHh4CBhgoFkAWFhaA/AIWlucCFvbZA0YWqv0CHBgoFioWAigYFjIiABgqGAAyEAAYGgQiEBiDAwAgFhgoJhZIFhYAEhYABiASKBQgBucGHhICBBIAEh4UAi4QEhRAFBYU5PcCFPy+BBTgyAIWFICcAxTO5AIUmscEFhSqrwQUwqwDFOCVAxYUmPwHFPbZAxSq/QIWFJq7AhTUnAMUzokDFhSYoQQUQBTmARYU6gEUxgEUxgEWFMoBFOYBFOYBFhRAFKyIAxRAFhTMARTCARTSAUYU2AEgEBIUSB4eNtoFEgS0ARAQBAASEAAgFBJIEhIQIgQAFgQCECgEBBQiACgcFBQctQbBBRAUCAAeBAAKIgAcIhocMh4AHB4cAgQcABweIgIuIBwiQCIWIvbZAyKq/QIi4uQCRCLKtAQidAIaIBwiFEgiIh4WAgAWABYYEBQCAggYHBAUGDoYAjYAFJUFABAYFEwSFhBIEBAAIAgAHjoCFjoAOiBAOh46AgI+QDoAQAIYHhYCFDIgFh5EAhgSMkAuQhI+QBIeEgIWEgASIEASHkwCAhJAOgBAAhoKOgA+OkI+HBJAPh4eAhQ+IBYeFgIcQD4WHhYCHj5AFkJCPgAUQvkLBkhQUB4UAgQUABQeJAIwEBQkQCQWJPbZAySq/QIk1JwDFiTOiQMkmKEEJEAWJOYBJOoBJMYBFiTGASTKASTmARYk5gEkQCSsiAMWJEAkzAEkwgEWJNIBJNgBJJj8BxYkxq0DJNDcAiSaxwQWJKqvBCRcJFxGJFwSEBQkACQWACISJCYkJDIWACQeJAIyJAAkGgIoELEFACoUyAFKEiQQFDwgEkgeHjAWThYQLAgAJgQACiQAKCQuKDImACgeKAIEKAAoHiQCBhooJEAkFiT22QMkqv0CJKCIA0QkvsoCJHQCLhooJCweJAIIJAAkHhoCDCgkGhgaFAIOQB4WHtABHugBHugBFh7gAR7mAR50Fh5eHl4e7gEWHu4BHu4BHlwWHtwBHuYBHtABFh7eAR7aAR7KARYeXB7GAR7cARYeXh7CAR7qARYe6AEe0AEeXhYe7gEeygEexgEWHtABHsIBHugBFh5aHtoBHtIBFh7cAR7SAR5aFh7gAR7kAR7eARYezgEe5AEewgEkHtoBHBoUHgAeAhBAFBYUoAEUngEUpgEkFKgBHBoeFAAUAhQYHiICEh4qAhIcLCIcHiIcHBoUHjoeAioAFLUHAhoeFDoUAiwAHqUPAhoUHjguKCQaSBoa", false)(534, [], {
    get App() {
        return "undefined" == typeof App ? void 0 : App;
    },
    set App(_App) {
        App = _App;
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
    get getApp() {
        return "undefined" == typeof getApp ? void 0 : getApp;
    },
    set getApp(_getApp) {
        getApp = _getApp;
    },
    get setTimeout() {
        return "undefined" == typeof setTimeout ? void 0 : setTimeout;
    },
    set setTimeout(_setTimeout) {
        setTimeout = _setTimeout;
    }
}, [ "App", "globalData", "console", "log", "wx", "login", "request", "url", "method", "code", "data", "getApp", "token", "isLoggedIn", "device", "length", "deviceId", "deviceid", "devicetype", "type", void 0, "success", "fail", "error", "warn", "setTimeout", "complete", "onLaunch" ], function h(c, e, d) {
    if (!a(c, Error) || !d || 0 == d.length) return c;
    var f = " [DEBUG app.js:";
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