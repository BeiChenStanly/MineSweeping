var gif = [];
gif[0] = "img/smile.gif";
gif[1] = "img/win.gif";
gif[2] = "img/fail.gif";

var gfs = [];
for (var i = 0;
    i < 4;
    i++) {
    gfs[i] = new Image();
} gfs[0].src = "img/block.gif";
gfs[1].src = "img/flags.gif";
gfs[2].src = "img/explosion.gif";
gfs[3].src = "img/ray.gif";

var gfd = [];
for (var i = 0;
    i < 10;
    i++) {
    gfd[i] = new Image();
} gfd[0].src = "img/zero.gif";
gfd[1].src = "img/one.gif";
gfd[2].src = "img/two.gif";
gfd[3].src = "img/three.gif";
gfd[4].src = "img/four.gif";
gfd[5].src = "img/five.gif";
gfd[6].src = "img/six.gif";
gfd[7].src = "img/seven.gif";
gfd[8].src = "img/eight.gif";
gfd[9].src = "img/nine.gif";

var gfb = [];
for (var i = 0;
    i < 9;
    i++) {
    gfb[i] = new Image();
} gfb[0].src = "img/em.gif";
gfb[1].src = "img/1.gif";
gfb[2].src = "img/2.gif";
gfb[3].src = "img/3.gif";
gfb[4].src = "img/4.gif";
gfb[5].src = "img/5.gif";
gfb[6].src = "img/6.gif";
gfb[7].src = "img/7.gif";
gfb[8].src = "img/8.gif";

function bcolor() {
    var dbs = document.body.style;

    var xa = document.getElementsByTagName("a");

    if ($("bcolor").checked) {
        localStorage.setItem("night", "1");

        dbs.backgroundColor = "black";

        dbs.color = "silver";

        for (var i = 0;
            i < xa.length;
            i++) {
            xa[i].style.color = '#fdefef';

        }
    }
    else {
        localStorage.removeItem("night");

        dbs.backgroundColor = "#f7f7f0";

        dbs.color = "";

        for (var i = 0;
            i < xa.length;
            i++) {
            xa[i].style.color = '';

        }
    }
}
function ifnight() {
    if (localStorage.getItem("night") != null) {
        $("bcolor").checked = true;

        bcolor();

    }
}


function $(a) {
    return document.getElementById(a)
}
function gets(bb, Z, ba) {
    var bc = new XMLHttpRequest();
    bc.open(Z != null ? "POST" : "GET", bb, true);
    bc.onreadystatechange = function () { if (bc.readyState == 4 && (bc.status == 200 || bc.status == 304)) { ba(bc.responseText) } };
    bc.send(Z)
}
var d31 = [];
var X, Y, M;
var CX = [-1, -1, -1, 0, 0, 1, 1, 1, 0];
var CY = [-1, 0, 1, -1, 1, -1, 0, 1, 0];
var _gs;
function S98(h, j) {
    ctx.drawImage(gfb[0], h * 25, j * 25);
    setTimeout(function () { if (d31[j][h][0] == 0) { ctx.drawImage(gfs[0], h * 25, j * 25) } }, 120)
}
function c67(h, j) {
    var I = 0, J = 0;
    var q, s;
    var E;
    var u, A;
    for (E = 0;E < 8;E++) {
        s = j + CY[E];
        q = h + CX[E];
        if (s >= 0 && s < Y && q >= 0 && q < X) {
            u = d31[s][q];
            A = u[0];
            if (A == 2) { I++ } else { if (A == 0) { if (u[1] == 1) { J = 1 } } }
        }
    };
    var t = d31[j][h];
    var K = I >= t[2];
    for (E = 0;E < 8;E++) {
        s = j + CY[E];
        q = h + CX[E];
        if (s >= 0 && s < Y && q >= 0 && q < X) {
            var u = d31[s][q];
            if (u[0] == 0) {
                if (K) {
                    if (J) {
                        if (u[1] == 1) {
                            ctx.drawImage(gfs[2], q * 25, s * 25);
                            u[0] = 1
                        }
                    } else { o0o(q, s) }
                } else { S98(q, s) }
            }
        }
    };
    if (K && J) { f17() }
}
function f17() {
    _edn();
    $("face").src = gif[2];
    _gs = 3;
    var h, j;
    var t;
    for (j = 0;
        j < Y;
        j++) {
        for (h = 0;
            h < X;
            h++) {
            t = d31[j][h];
            if (t[0] == 0) { if (t[1] == 1) { ctx.drawImage(gfs[3], h * 25, j * 25) } } else {
                if (t[0] == 2) {
                    if (t[1] == 0) {
                        h_f[f_n++] = setInterval(function (h, j) {
                            var W = 0;
                            return function () {
                                ctx.drawImage(W == 0 ? gfb[d31[j][h][2]] : gfs[1], h * 25, j * 25);
                                W = !W
                            }
                        }(h, j), 800)
                    }
                }
            }
        }
    }
}
var _ln;
function see() {
    _ln = [];
    var h, j, t;
    var bk = 0, bl = 0;
    for (j = 0;
        j < Y;
        j++) {
        for (h = 0;
            h < X;
            h++) {
            t = d31[j][h];
            if (t[0] == 2 && t[1] != 1) { return 1 };
            if (t[0] == 0 && t[3] == 0) {
                if (t[1] == 1) { bk++ } else { bl++ };
                _ln.push([h, j])
            }
        }
    };
    if (bk != bl) { return 2 };
    return 0
}
function gtm(h, j) {
    var w = 0;
    var q, s;
    for (var E = 0;
        E < 8;
        E++) {
        s = j + CY[E];
        q = h + CX[E];
        if (s >= 0 && s < Y && q >= 0 && q < X) { if (d31[s][q][1] == 1) { w++ } }
    };
    return w
}
function rv() {
    var c, d, u;
    for (d = 0;
        d < _ln.length;
        d++) {
        c = _ln[d];
        u = d31[c[1]][c[0]];
        u[1] = (u[1] == 0 ? 1 : 0)
    }
}
function ck() {
    if (see() != 0) { return 1 };
    rv();
    var h, j, t;
    var w;
    for (j = 0;
        j < Y;
        j++) {
        for (h = 0;
            h < X;
            h++) {
            t = d31[j][h];
            w = t[2];
            if (t[0] == 1 && w != 0) {
                if (gtm(h, j) != w) {
                    rv();
                    return 2
                }
            }
        }
    };
    for (j = 0;
        j < Y;
        j++) {
        for (h = 0;
            h < X;
            h++) {
            t = d31[j][h];
            if (t[0] != 1) { t[2] = gtm(h, j) }
        }
    };
    return 0
}
function ab(C, D) {
    var t, u;
    var s, q;
    var A;
    var B, w;
    var h, j;
    var E, c;
    for (c = 0;
        c < 9;
        c++) {
        j = D + CY[c];
        h = C + CX[c];
        if (j >= 0 && j < Y && h >= 0 && h < X) {
            t = d31[j][h];
            w = t[2];
            if (t[0] == 1 && w > 0) {
                B = 0;
                for (E = 0;
                    E < 8;
                    E++) {
                    s = j + CY[E];
                    q = h + CX[E];
                    if (s >= 0 && s < Y && q >= 0 && q < X) {
                        u = d31[s][q];
                        A = u[0];
                        if (A == 0) { B++ } else { if (A == 2) { if (u[1] == 1) { w-- } } }
                    }
                };
                if (B > 0 && w == B) {
                    for (E = 0;
                        E < 8;
                        E++) {
                        s = j + CY[E];
                        q = h + CX[E];
                        if (s >= 0 && s < Y && q >= 0 && q < X) {
                            u = d31[s][q];
                            A = u[0];
                            if (A != 1) { u[3] = 1 };
                            if (A == 0) { if (_af == 1) { M5k(q, s) } }
                        }
                    }
                }
            }
        }
    }
}
function o0o(h, j) {
    var t = d31[j][h];
    if (t[1] == 1) {
        if (_gs == 1) { ck() };
        if (t[1] == 1) {
            ctx.drawImage(gfs[2], h * 25, j * 25);
            t[0] = 1;
            f17();
            return 1
        }
    };
    t[0] = 1;
    ctx.drawImage(gfb[t[2]], h * 25, j * 25);
    RB--;
    if (RB == 0) { scs() } else {
        if (t[2] == 0) {
            var E, s, q;
            for (E = 0;
                E < 8;
                E++) {
                s = j + CY[E];
                q = h + CX[E];
                if (s >= 0 && s < Y && q >= 0 && q < X) { if (d31[s][q][0] == 0) { o0o(q, s) } }
            }
        }
    };
    ab(h, j);
    return 0
}
function scs() {
    _gs = 2;
    _edn();
    var h, j, t;
    for (j = 0;
        j < Y;
        j++) {
        for (h = 0;
            h < X;
            h++) {
            t = d31[j][h];
            if (t[0] == 0) { if (t[1] != 1) { bug(1, h, j) } else { M5k(h, j) } }
        }
    };
    if (RM != 0) { bug(2, h, j) };
    crm(M);
    $("face").src = gif[1];
    up()
}
var _v;
function up() {
    if (_v > 3 && _t0 < 10) { return };
    var bg = lid();
    if (bg == null) {
        guid();
        return
    };
    var G = _v + '\x1E' + bg + '\x1F' + _t0 + '.' + _af;
    if (_v > 3) { G += '\x1F' + X + '\x1F' + Y + '\x1F' + M };
    gets("up4.php", G, function (H) { })
}
function bug(F, h, j) {
    var G = VER + ':' + F;
    gets("bug.php", G, function (H) { })
}
function DS(L) {
    var N = $(L);
    var P = N.getContext("2d");
    var O = 3;
    return function (R) {
        if (R < 10) { R = "00" + R } else { if (R < 100) { R = "0" + R } else { R = R.toString() } };
        var Q = R.length;
        if (Q != O) {
            N.width = Q * 13;
            O = Q
        };
        for (var d = 0;
            d < Q;
            d++) { P.drawImage(gfd[parseInt(R.charAt(d))], d * 13, 0) }
    }
}
function kai(be, bf) {
    var E;
    var j, h;
    var bd = RB;
    for (E = 8;
        E >= 0 && bd > 0;
        E--) {
        j = bf + CY[E];
        h = be + CX[E];
        if (j >= 0 && j < Y && h >= 0 && h < X) {
            var V = p32[j * X + h];
            if (d31[j][h][1] == 1) {
                var U = Math.floor(Math.random() * bd);
                mplus(V, -1);
                mplus(U, 1);
                bd--;
                ex(U, bd)
            } else {
                bd--;
                ex(V, bd)
            }
        }
    };
    _es()
}
var d32 = [];
var p32 = [];
function _gnt() {
    var h, j;
    var o;
    var p;
    for (j = 0;
        j < Y;
        j++) {
        d31[j] = [];
        for (h = 0;
            h < X;
            h++) { d31[j][h] = [0, 0, 0, 0] }
    };
    for (p = 0;
        p < XY;
        p++) {
        d32[p] = p;
        p32[p] = p
    };
    RB = XY;
    for (o = 0;
        o < M;
        o++) {
        p = Math.floor(Math.random() * RB);
        RB--;
        ex(p, RB)
    };
    for (p = RB;
        p < XY;
        p++) { mplus(p, 1) };
    RM = M;
    RB = XY - M
}
function ex(U, V) {
    var S = d32[U];
    var T = d32[V];
    d32[U] = T;
    d32[V] = S;
    p32[S] = V;
    p32[T] = U
}
function mplus(p, bh) {
    var bj, bi;
    var rv = d32[p];
    bj = Math.floor(rv / X);
    bi = rv % X;
    d31[bj][bi][1] += bh;
    for (z = 0;
        z < 8;
        z++) {
        cy = bj + CY[z];
        cx = bi + CX[z];
        if (cy >= 0 && cy < Y && cx >= 0 && cx < X) { d31[cy][cx][2] += bh }
    }
}
var h_f = [];
var f_n = 0;
function _45() {
    if (he > 0) {
        clearInterval(he);
        he = 0
    };
    for (var d = 0;
        d < f_n;
        d++) { clearInterval(h_f[d]) };
    f_n = 0;
    _gnt();
    _d46();
    _x0 = -1;
    _y0 = -1;
    _gs = 0
}
var _mp1, _mp2;
var _x0;
var _y0;
function _65(e) {
    if (_tch || _gs > 1) { return };
    var f = paf.getBoundingClientRect();
    var h = Math.floor((e.clientX - f.left) / 25);
    var j = Math.floor((e.clientY - f.top) / 25);
    if (h < 0 || h == X || j < 0 || j == Y) { return };
    _x0 = h;
    _y0 = j;
    var g = d31[j][h][0];
    if (e.button == 2) { if (_mp2 != 1) { if (g == 1) { c67(h, j) } else { M5k(h, j) } } } else {
        if (_mp1 != 1) {
            if (g == 0) {
                if (_gs == 0) { kai(h, j) };
                o0o(h, j)
            } else { if (g == 1) { c67(h, j) } else { M5k(h, j) } }
        }
    }
}
function _67(e) {
    if (_tch || _gs > 1) { return };
    var f = paf.getBoundingClientRect();
    var h = Math.floor((e.clientX - f.left) / 25);
    var j = Math.floor((e.clientY - f.top) / 25);
    if (h < 0 || h == X || j < 0 || j == Y) { return };
    var g = d31[j][h][0];
    if (e.button == 2) {
        if (_mp2 != null) {
            if (_mp2 == 2 && h == _x0 && j == _y0) { return };
            if (g == 1) { c67(h, j) } else { M5k(h, j) }
        }
    } else {
        if (_mp1 != null) {
            if (_mp1 == 2 && h == _x0 && j == _y0) { return };
            if (g == 0) {
                if (_gs == 0) { kai(h, j) };
                o0o(h, j)
            } else { if (g == 1) { c67(h, j) } else { M5k(h, j) } }
        }
    }
}
function _77(e) {
    if (_gs > 1) { return };
    _tch = 1;
    var f = paf.getBoundingClientRect();
    var h = Math.floor((e.touches[0].clientX - f.left) / 25);
    var j = Math.floor((e.touches[0].clientY - f.top) / 25);
    if (h < 0 || h == X || j < 0 || j == Y) { return };
    if (d31[j][h][0] == 1) { c67(h, j) } else { _hl = setTimeout(function () { return lgt(h, j) }, 320) }
}
var _hl;
function lgt(h, j) {
    if (_opn == 1 && _tpn == null) { return };
    if (_gs == 0) {
        kai(h, j);
        o0o(h, j);
        return
    };
    _tch = 3;
    if (_tpn == null) {
        if (d31[j][h][0] == 2) { M5k(h, j) };
        if (d31[j][h][0] == 0) { o0o(h, j) }
    } else { M5k(h, j) }
}
var tc0 = 0;
function _75(e) {
    if (_tch == 1) {
        var f = paf.getBoundingClientRect();
        var h = Math.floor((e.changedTouches[0].clientX - f.left) / 25);
        var j = Math.floor((e.changedTouches[0].clientY - f.top) / 25);
        if (h < 0 || h == X || j < 0 || j == Y) { return };
        var g = d31[j][h][0];
        if (_gs == 0) {
            kai(h, j);
            o0o(h, j);
            return
        };
        if (_tpn == null) {
            if (g != 1) {
                var k = Date.now();
                var l;
                if (h == _x0 && j == _y0) { l = k - tc0 } else {
                    _x0 = h;
                    _y0 = j;
                    tc0 = Date.now();
                    l = 1000
                };
                if (_opn == 1 && l < 400 && g == 0) { o0o(h, j) } else { M5k(h, j) }
            }
        } else { if (g == 0) { o0o(h, j) } else { if (g == 2) { M5k(h, j) } } };
        _tch = 4;
        clearTimeout(_hl);
        tc0 = k
    };
    if (e.preventDefault) { e.preventDefault() } else { window.event.returnValue = false }
}
function saf() {
    _af = $("af").checked ? 1 : 0;
    localStorage.setItem("af", _af);
    _45()
}
var _af;
function _d46() {
    _edn();
    he = 0;
    _tch = 0;
    _mp1 = localStorage.getItem("mp1");
    _mp2 = localStorage.getItem("mp2");
    _tpn = localStorage.getItem("tpn");
    _opn = localStorage.getItem("opn");
    _af = localStorage.getItem("af");
    if (_af == null) { _af = 0 };
    var n = X * 25;
    $("p42").style.width = n + 4 + "px";
    paf.width = n;
    paf.height = Y * 25;
    $("face").src = gif[0];
    for (var d = 0;
        d < X;
        d++) {
        for (var m = 0;
            m < Y;
            m++) { ctx.drawImage(gfs[0], d * 25, m * 25) }
    };
    paf.onmousedown = function (e) { _65(e) };
    paf.onmouseup = function (e) { _67(e) };
    ;
    ;
    paf.ontouchstart = function (e) { _77(e) };
    paf.ontouchmove = function () {
        _tch = 2;
        clearTimeout(_hl)
    };
    paf.ontouchend = function (e) { _75(e) };
    crm(RM);
    ces(0);
    $("af").checked = parseInt(_af)
}
function sopen() {
    var bo = 0;
    var bp = -1, bq = -1;
    for (var d = 0; d < X; d++) {
        var br = 0;
        for (var m = 0; m < Y; m++) {
            if (d31[m][d][2] == 0 && d31[m][d][1] == 0) { br++ } else {
                if (br > bo) {
                    bo = br;
                    bp = d;
                    bq = m - 1
                };
                br = 0
            }
        };
        if (br > bo) {
            bo = br;
            bp = d;
            bq = m - 1
        }
    };
    if (bp >= 0 && bq >= 0) { o0o(bp, bq) }
}
function _edn() {
    if (he > 0) {
        clearInterval(he);
        he = 0;
        _t0 = Date.now() - _t0;
        ces(parseInt(_t0 / 1000));
        _t0 = Math.ceil(_t0 / 100)
    } else { _t0 = 0 }
}
var he = 0;
var _t0;
var e33;
function _es() {
    _t0 = Date.now();
    e33 = 0;
    _gs = 1;
    he = setInterval(function () { ces(++e33) }, 1000)
}
var _tpn;
var _opn;
var _tch;
var RM;
var RB;
function M5k(h, j) {
    var t = d31[j][h];
    if (t[0] == 0) {
        if (RM > 0) {
            if (t[1] == 0) { ck() };
            ctx.drawImage(gfs[1], h * 25, j * 25);
            t[0] = 2;
            crm(--RM)
        }
    } else {
        if (t[0] == 2) {
            ctx.drawImage(gfs[0], h * 25, j * 25);
            t[0] = 0;
            crm(++RM)
        }
    }
}
var paf;
var ctx;
var crm;
var ces;
function start() {
    var bt = localStorage.getItem("df5");
    if (bt == null) {
        $("hm").value = 15;
        $("vm").value = 15;
        $("mm").value = 20
    } else {
        var bs = bt.split(";");
        $("hm").value = bs[0];
        $("vm").value = bs[1];
        $("mm").value = bs[2]
    };
    document.oncontextmenu = function () { return false };
    document.onselectstart = function () { return false };
    paf = $("paf");
    ctx = paf.getContext("2d");
    crm = DS("rm");
    ces = DS("es");
    _123(localStorage.getItem("ch7"));
    $("uid").innerHTML = lid();
    $("ver").innerHTML = VER;
}
function lid() {
    var bg = localStorage.getItem("uid");
    if (bg != null) { if (isNaN(bg)) { bg = null } };
    return bg
}
function guid() {
    gets("uid2.php", null, function (H) {
        localStorage.setItem("uid", H);
        if (H.length > 1) {
            up();
            $("uid").innerHTML = H
        } else { alert("id fail") }
    })
}
var XY;
var SW, SH;
function _123(c) {
    _gs = 0;
    SW = document.body.clientWidth;
    SH = document.body.clientHeight;
    if (c == null) { c = SW < 560 ? 1 : 2 };
    _v = c;
    $("custom").style.display = c == 5 ? "" : "none";
    if (c == 1) {
        X = 9;
        Y = 9;
        M = 10;
        XY = 81
    } else {
        if (c == 2) {
            X = 16;
            Y = 16;
            M = 40;
            XY = 256
        } else {
            if (c == 3) {
                M = 99;
                if (SW > SH) {
                    X = 30;
                    Y = 16
                } else {
                    X = 16;
                    Y = 30
                };
                XY = 480
            } else {
                if (c == 4) {
                    X = parseInt((SW - 18) / 25);
                    Y = parseInt((SH - 54) / 25);
                    XY = X * Y;
                    if (XY >= 480) { M = XY * 0.20625 } else { M = XY * XY / 5760 + XY / 8 };
                    M = parseInt(M)
                } else {
                    if (c == 5) {
                        X = parseInt($("hm").value);
                        Y = parseInt($("vm").value);
                        XY = X * Y;
                        M = parseInt($("mm").value);
                        if (M > XY) { M = XY }
                    } else { return }
                }
            }
        }
    };
    _45();
    localStorage.setItem("ch7", c);
    $("ss").href = "scores.htm#" + _v
}
function udf() {
    _123(5);
    localStorage.setItem("df5", $("hm").value + ";" + $("vm").value + ";" + $("mm").value)
}
function sload(bm) {
    var rv = localStorage.getItem(bm);
    if (rv == null) { rv = 0 };
    var bn = document.getElementsByName(bm);
    for (i = 0; i < bn.length; i++) { if (bn[i].value == rv) { bn[i].checked = true } };
    return rv
}
function ssave(bm, rv) {
    if (rv == 0) {
        localStorage.removeItem(bm);
        rv = null
    } else { localStorage.setItem(bm, rv) };
    eval("_" + bm + "=" + rv)
}
function smore(c) {
    if (c == 0) {
        $("topen").style.display = "block";
        $("thint").style.display = "none"
    } else {
        $("thint").style.display = "block";
        $("topen").style.display = "none"
    }
}
var mouse2 = function () {
    var b = 0;
    return function () {
        sload("mp1");
        sload("mp2");
        if (b == 0) {
            $("_mouse").style.display = "block";
            $("setm").innerText = "\u6536\u8d77";
            b = 1
        } else {
            $("_mouse").style.display = "none";
            $("setm").innerText = "\u8bbe\u7f6e";
            b = 0
        }
    }
}();
var touch2 = function () {
    var b = 0;
    return function () {
        var rv = sload("tpn");
        sload("opn");
        smore(rv);
        if (b == 0) {
            $("_touch").style.display = "block";
            $("sett").innerText = "\u6536\u8d77";
            b = 1
        } else {
            $("_touch").style.display = "none";
            $("sett").innerText = "\u8bbe\u7f6e";
            b = 0
        }
    }
}()