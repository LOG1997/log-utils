var g = function() {
  return g = Object.assign || function(n) {
    for (var t, a = 1, e = arguments.length; a < e; a++) {
      t = arguments[a];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, g.apply(this, arguments);
};
function M(r, n, t) {
  if (t || arguments.length === 2)
    for (var a = 0, e = n.length, i; a < e; a++)
      (i || !(a in n)) && (i || (i = Array.prototype.slice.call(n, 0, a)), i[a] = n[a]);
  return r.concat(i || Array.prototype.slice.call(n));
}
var B = function(r) {
  return Array.isArray(r);
}, y = function(r) {
  return typeof r > "u";
}, _ = function(r) {
  return r === null;
}, b = function(r) {
  return y(r) || _(r);
};
function I(r, n) {
  var t = n.id, a = t === void 0 ? "id" : t, e = n.pid, i = e === void 0 ? "pid" : e, u = n.children, o = u === void 0 ? "children" : u, v = /* @__PURE__ */ new Map(), f = [];
  return r.forEach(function(s) {
    var l, c = s[a], h = s[i];
    if (b(c) || b(h))
      throw new Error("".concat(JSON.stringify(s), ":").concat(a, " or ").concat(i, " format is undefined"));
    v.set(c, g(g({}, s), (l = {}, l[o] = [], l)));
  }), r.forEach(function(s) {
    var l, c = s[a], h = s[i], d = v.get(h), m = v.get(c);
    d && (d[o] = M(M([], (l = d[o]) !== null && l !== void 0 ? l : [], !0), [v.get(c)], !1)), h || f.push(m);
  }), f;
}
function O(r, n) {
  var t = n.children, a = t === void 0 ? "children" : t, e = [], i = function(u) {
    u.forEach(function(o) {
      e.push(o);
      var v = o[a];
      B(v) && o[a].length > 0 && i(o[a]), delete o[a];
    });
  };
  return i(r), e;
}
function w(r) {
  var n = r.r, t = r.g, a = r.b, e = Math.max(n, t, a), i = Math.min(n, t, a), u = 100 * e / 255, o = e === 0 ? 0 : 100 * (e - i) / e, v = 0;
  return e === n && t >= a ? v = 60 * (t - a) / (e - i) : e === n && t < a ? v = 60 * (t - a) / (e - i) + 360 : e === t ? v = 60 * (a - n) / (e - i) + 120 : e === a && (v = 60 * (n - t) / (e - i) + 240), {
    h: Math.round(v),
    s: Math.round(o),
    v: Math.round(u)
  };
}
function F(r) {
  var n = r.r, t = r.g, a = r.b, e = Math.max(n, t, a), i = Math.min(n, t, a), u = (e + i) / 2, o = 0;
  e === i || u === 0 ? o = 0 : u > 0 && u <= 0.5 ? o = (e - i) / (e + i) : u > 0.5 && (o = (e - i) / (2 - e - i));
  var v = 0;
  return e == i ? v = 0 : e === n && t >= a ? v = 60 * (t - a) / (e - i) : e === n && t < a ? v = 60 * (t - a) / (e - i) + 360 : e === t ? v = 60 * (a - n) / (e - i) + 120 : e === a && (v = 60 * (n - t) / (e - i) + 240), { h: Math.round(v), s: Math.round(o * 100), l: Math.round(u * 100) };
}
function A(r) {
  var n = r.r, t = r.g, a = r.b, e = (n << 16 | t << 8 | a).toString(16);
  return "#" + new Array(Math.abs(e.length - 7)).join("0") + e;
}
function T(r) {
  for (var n = [], t = 1; t < 7; t += 2)
    n.push(parseInt("0x" + r.slice(t, t + 2)));
  return { r: n[0], g: n[1], b: n[2] };
}
function k(r) {
  var n = r.h, t = r.s, a = r.v, e = n % 360, i = t / 100, u = a / 100, o = 0, v = 0, f = 0;
  if (i === 0)
    o = v = f = u;
  else {
    var s = Math.floor(e / 60), l = e / 60 - s, c = u * (1 - i), h = u * (1 - i * l), d = u * (1 - i * (1 - l));
    switch (s) {
      case 0:
        o = u, v = d, f = c;
        break;
      case 1:
        o = h, v = u, f = c;
        break;
      case 2:
        o = c, v = u, f = d;
        break;
      case 3:
        o = c, v = h, f = u;
        break;
      case 4:
        o = d, v = c, f = u;
        break;
      case 5:
        o = u, v = c, f = h;
        break;
    }
  }
  return { r: Math.round(o * 255), g: Math.round(v * 255), b: Math.round(f * 255) };
}
function x(r, n) {
  n === void 0 && (n = 30);
  var t = T(r), a = w(t), e = a.h, i = a.s, u = a.v, o = e + n;
  o > 360 ? o = o - 360 : o < 0 && (o = 360 + o);
  var v = k({ h: o, s: i, v: u }), f = A(v);
  return f;
}
function H() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0");
}
var G = function(r, n, t) {
  r === void 0 && (r = ""), n === void 0 && (n = 0), t === void 0 && (t = 30), n = n == 0 ? Math.floor(Math.random() * 360) : n;
  var a = r || H(), e = x(a, t);
  return "linear-gradient(".concat(n, "deg, ").concat(a, " 100%, ").concat(e, " 100%)");
};
function N(r, n, t) {
  n === void 0 && (n = ""), t === void 0 && (t = 2);
  var a = n || E(r);
  return a == "B" ? r + "B" : a == "KB" ? (r / 1024).toFixed(t) + "KB" : a == "MB" ? (r / 1024 / 1024).toFixed(t) + "MB" : a == "GB" ? (r / 1024 / 1024 / 1024).toFixed(t) + "GB" : (r / 1024 / 1024 / 1024 / 1024).toFixed(t) + "TB";
}
function E(r) {
  return r < 1024 ? "B" : r < 1024 * 1024 ? "KB" : r < 1024 * 1024 * 1024 ? "MB" : r < 1024 * 1024 * 1024 * 1024 ? "GB" : "TB";
}
export {
  I as arrayToTree,
  N as byteToUnit,
  G as getRandomGradientColor,
  T as hex2Rgb,
  k as hsv2Rgb,
  H as randomColor,
  A as rgb2Hex,
  F as rgb2Hsl,
  w as rgb2Hsv,
  x as rotateHsv,
  O as treeToArr
};
