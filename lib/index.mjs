var H = function(e, a, v, n) {
  a === void 0 && (a = "id"), v === void 0 && (v = "pid"), n === void 0 && (n = "children");
  for (var r = [], o = e.reduce(function(s, b) {
    return s[b[a]] = b, s;
  }, {}), f = 0, i = e; f < i.length; f++) {
    var t = i[f], h = o[t[v]];
    h ? (h[n] || (h[n] = [])).push(t) : r.push(t);
  }
  return r;
};
function M(e) {
  var a = e.r, v = e.g, n = e.b, r = Math.max(a, v, n), o = Math.min(a, v, n), f = 100 * r / 255, i = r === 0 ? 0 : 100 * (r - o) / r, t = 0;
  return r === a && v >= n ? t = 60 * (v - n) / (r - o) : r === a && v < n ? t = 60 * (v - n) / (r - o) + 360 : r === v ? t = 60 * (n - a) / (r - o) + 120 : r === n && (t = 60 * (a - v) / (r - o) + 240), {
    h: Math.round(t),
    s: Math.round(i),
    v: Math.round(f)
  };
}
function w(e) {
  var a = e.r, v = e.g, n = e.b, r = Math.max(a, v, n), o = Math.min(a, v, n), f = (r + o) / 2, i = 0;
  r === o || f === 0 ? i = 0 : f > 0 && f <= 0.5 ? i = (r - o) / (r + o) : f > 0.5 && (i = (r - o) / (2 - r - o));
  var t = 0;
  return r == o ? t = 0 : r === a && v >= n ? t = 60 * (v - n) / (r - o) : r === a && v < n ? t = 60 * (v - n) / (r - o) + 360 : r === v ? t = 60 * (n - a) / (r - o) + 120 : r === n && (t = 60 * (a - v) / (r - o) + 240), { h: Math.round(t), s: Math.round(i * 100), l: Math.round(f * 100) };
}
function d(e) {
  var a = e.r, v = e.g, n = e.b, r = (a << 16 | v << 8 | n).toString(16);
  return "#" + new Array(Math.abs(r.length - 7)).join("0") + r;
}
function g(e) {
  for (var a = [], v = 1; v < 7; v += 2)
    a.push(parseInt("0x" + e.slice(v, v + 2)));
  return { r: a[0], g: a[1], b: a[2] };
}
function m(e) {
  var a = e.h, v = e.s, n = e.v, r = a % 360, o = v / 100, f = n / 100, i = 0, t = 0, h = 0;
  if (o === 0)
    i = t = h = f;
  else {
    var s = Math.floor(r / 60), b = r / 60 - s, u = f * (1 - o), c = f * (1 - o * b), l = f * (1 - o * (1 - b));
    switch (s) {
      case 0:
        i = f, t = l, h = u;
        break;
      case 1:
        i = c, t = f, h = u;
        break;
      case 2:
        i = u, t = f, h = l;
        break;
      case 3:
        i = u, t = c, h = f;
        break;
      case 4:
        i = l, t = u, h = f;
        break;
      case 5:
        i = f, t = u, h = c;
        break;
    }
  }
  return { r: Math.round(i * 255), g: Math.round(t * 255), b: Math.round(h * 255) };
}
function x(e, a) {
  a === void 0 && (a = 30);
  var v = g(e), n = M(v), r = n.h, o = n.s, f = n.v, i = r + a;
  i > 360 ? i = i - 360 : i < 0 && (i = 360 + i);
  var t = m({ h: i, s: o, v: f }), h = d(t);
  return h;
}
function k() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0");
}
var R = function(e, a, v) {
  e === void 0 && (e = ""), a === void 0 && (a = 0), v === void 0 && (v = 30), a = a == 0 ? Math.floor(Math.random() * 360) : a;
  var n = e || k(), r = x(n, v);
  return "linear-gradient(".concat(a, "deg, ").concat(n, " 100%, ").concat(r, " 100%)");
};
export {
  H as arrayToTree,
  R as getRandomGradientColor,
  g as hex2Rgb,
  m as hsv2Rgb,
  k as randomColor,
  d as rgb2Hex,
  w as rgb2Hsl,
  M as rgb2Hsv,
  x as rotateHsv
};
