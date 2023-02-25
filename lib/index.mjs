var T = function(s, r, f, o) {
  r === void 0 && (r = "id"), f === void 0 && (f = "pid"), o === void 0 && (o = "children");
  for (var a = [], t = s.reduce(function(g, l) {
    return g[l[r]] = l, g;
  }, {}), e = 0, n = s; e < n.length; e++) {
    var u = n[e], v = t[u[f]];
    console.log("😎parent:", v), v ? (v[o] || (v[o] = [])).push(u) : a.push(u);
  }
  return a;
};
export {
  T as arrayToTree
};
