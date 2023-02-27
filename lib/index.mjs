var H = function(e, r, a, t) {
  r === void 0 && (r = "id"), a === void 0 && (a = "pid"), t === void 0 && (t = "children");
  for (var n = [], i = e.reduce(function(h, c) {
    return h[c[r]] = c, h;
  }, {}), f = 0, o = e; f < o.length; f++) {
    var v = o[f], u = i[v[a]];
    u ? (u[t] || (u[t] = [])).push(v) : n.push(v);
  }
  return n;
};
function M(e) {
  var r = e.r, a = e.g, t = e.b, n = Math.max(r, a, t), i = Math.min(r, a, t), f = 100 * n / 255, o = n === 0 ? 0 : 100 * (n - i) / n, v = 0;
  return n === r && a >= t ? v = 60 * (a - t) / (n - i) : n === r && a < t ? v = 60 * (a - t) / (n - i) + 360 : n === a ? v = 60 * (t - r) / (n - i) + 120 : n === t && (v = 60 * (r - a) / (n - i) + 240), {
    h: Math.round(v),
    s: Math.round(o),
    v: Math.round(f)
  };
}
function T(e) {
  var r = e.r, a = e.g, t = e.b, n = Math.max(r, a, t), i = Math.min(r, a, t), f = (n + i) / 2, o = 0;
  n === i || f === 0 ? o = 0 : f > 0 && f <= 0.5 ? o = (n - i) / (n + i) : f > 0.5 && (o = (n - i) / (2 - n - i));
  var v = 0;
  return n == i ? v = 0 : n === r && a >= t ? v = 60 * (a - t) / (n - i) : n === r && a < t ? v = 60 * (a - t) / (n - i) + 360 : n === a ? v = 60 * (t - r) / (n - i) + 120 : n === t && (v = 60 * (r - a) / (n - i) + 240), { h: Math.round(v), s: Math.round(o * 100), l: Math.round(f * 100) };
}
function b(e) {
  var r = e.r, a = e.g, t = e.b, n = (r << 16 | a << 8 | t).toString(16);
  return "#" + new Array(Math.abs(n.length - 7)).join("0") + n;
}
function g(e) {
  for (var r = [], a = 1; a < 7; a += 2)
    r.push(parseInt("0x" + e.slice(a, a + 2)));
  return { r: r[0], g: r[1], b: r[2] };
}
function B(e) {
  var r = e.h, a = e.s, t = e.v, n = r % 360, i = a / 100, f = t / 100, o = 0, v = 0, u = 0;
  if (i === 0)
    o = v = u = f;
  else {
    var h = Math.floor(n / 60), c = n / 60 - h, s = f * (1 - i), l = f * (1 - i * c), d = f * (1 - i * (1 - c));
    switch (h) {
      case 0:
        o = f, v = d, u = s;
        break;
      case 1:
        o = l, v = f, u = s;
        break;
      case 2:
        o = s, v = f, u = d;
        break;
      case 3:
        o = s, v = l, u = f;
        break;
      case 4:
        o = d, v = s, u = f;
        break;
      case 5:
        o = f, v = s, u = l;
        break;
    }
  }
  return { r: Math.round(o * 255), g: Math.round(v * 255), b: Math.round(u * 255) };
}
function m(e, r) {
  r === void 0 && (r = 30);
  var a = g(e), t = M(a), n = t.h, i = t.s, f = t.v, o = n + r;
  o > 360 ? o = o - 360 : o < 0 && (o = 360 + o);
  var v = B({ h: o, s: i, v: f }), u = b(v);
  return u;
}
function x() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0");
}
var w = function(e, r, a) {
  e === void 0 && (e = ""), r === void 0 && (r = 0), a === void 0 && (a = 30), r = r == 0 ? Math.floor(Math.random() * 360) : r;
  var t = e || x(), n = m(t, a);
  return "linear-gradient(".concat(r, "deg, ").concat(t, " 100%, ").concat(n, " 100%)");
};
function F(e, r) {
  r === void 0 && (r = "");
  var a = r || k(e);
  return a == "B" ? e + "B" : a == "KB" ? (e / 1024).toFixed(2) + "KB" : a == "MB" ? (e / 1024 / 1024).toFixed(2) + "MB" : a == "GB" ? (e / 1024 / 1024 / 1024).toFixed(2) + "GB" : (e / 1024 / 1024 / 1024 / 1024).toFixed(2) + "TB";
}
function k(e) {
  return e < 1024 ? "B" : e < 1024 * 1024 ? "KB" : e < 1024 * 1024 * 1024 ? "MB" : e < 1024 * 1024 * 1024 * 1024 ? "GB" : "TB";
}
export {
  H as arrayToTree,
  F as byteToUnit,
  w as getRandomGradientColor,
  g as hex2Rgb,
  B as hsv2Rgb,
  x as randomColor,
  b as rgb2Hex,
  T as rgb2Hsl,
  M as rgb2Hsv,
  m as rotateHsv
};
