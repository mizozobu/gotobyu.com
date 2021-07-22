import { FC, HTMLAttributes } from 'react';
import Script from 'next/script';

export interface Props extends HTMLAttributes<SVGElement> {
  animated?: boolean;
}

export const CirculatingCircles: FC<Props> = ({
  animated = false,
  ...props
}: Props) => (
  <svg
    {...props}
    id={animated ? 'animated-circulating-circles' : 'circulating-circles'}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 700 700'
    shapeRendering='geometricPrecision'
    textRendering='geometricPrecision'
    width='100%'
    height='100%'
  >
    <ellipse
      id='byui'
      rx='50'
      ry='50'
      transform='matrix(1 0 0 1 550 250.00000000000006)'
      fill='rgb(0,118,182)'
      stroke='none'
      strokeWidth='0'
      strokeMiterlimit='1'
    />
    <ellipse
      id='byuh'
      rx='50'
      ry='50'
      transform='matrix(1 0 0 1 149.99999999999983 250)'
      fill='rgb(158,27,52)'
      stroke='none'
      strokeWidth='0'
      strokeMiterlimit='1'
    />
    <ellipse
      id='byu'
      rx='50'
      ry='50'
      transform='matrix(1 0 0 1 349.99999999999994 550)'
      fill='rgb(0,46,93)'
      stroke='none'
      strokeWidth='0'
      strokeLinecap='round'
      strokeMiterlimit='1'
      strokeDashoffset='100'
    />
    <Script strategy='lazyOnload'>{`
      ! function (t, n) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define &&
          define.amd ? define(n) : (t = "undefined" != typeof globalThis ? globalThis : t || self).__SVGATOR_PLAYER__ =
          n()
      }(this, (function () {
        "use strict";

        function t(n) {
          return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
              "symbol" : typeof t
          })(n)
        }

        function n(t, n) {
          if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function e(t, n) {
          for (var e = 0; e < n.length; e++) {
            var r = n[e];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object
              .defineProperty(t, r.key, r)
          }
        }

        function r(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }

        function i(t) {
          return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          })(t)
        }

        function o(t, n) {
          return (o = Object.setPrototypeOf || function (t, n) {
            return t.__proto__ = n, t
          })(t, n)
        }

        function u(t, n) {
          return !n || "object" != typeof n && "function" != typeof n ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
          }(t) : n
        }

        function a(t) {
          var n = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (t) {
              return !1
            }
          }();
          return function () {
            var e, r = i(t);
            if (n) {
              var o = i(this).constructor;
              e = Reflect.construct(r, arguments, o)
            } else e = r.apply(this, arguments);
            return u(this, e)
          }
        }

        function l(t, n, e) {
          return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, n, e) {
            var r = function (t, n) {
              for (; !Object.prototype.hasOwnProperty.call(t, n) && null !== (t = i(t)););
              return t
            }(t, n);
            if (r) {
              var o = Object.getOwnPropertyDescriptor(r, n);
              return o.get ? o.get.call(e) : o.value
            }
          })(t, n, e || t)
        }
        var f = Math.abs;

        function s(t) {
          return t
        }

        function c(t, n, e) {
          var r = 1 - e;
          return 3 * e * r * (t * r + n * e) + e * e * e
        }

        function h() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          return t < 0 || t > 1 || e < 0 || e > 1 ? null : f(t - n) <= 1e-5 && f(e - r) <= 1e-5 ? s : function (i) {
            if (i <= 0) return t > 0 ? i * n / t : 0 === n && e > 0 ? i * r / e : 0;
            if (i >= 1) return e < 1 ? 1 + (i - 1) * (r - 1) / (e - 1) : 1 === e && t < 1 ? 1 + (i - 1) * (n - 1) /
              (t - 1) : 1;
            for (var o, u = 0, a = 1; u < a;) {
              var l = c(t, e, o = (u + a) / 2);
              if (f(i - l) < 1e-5) break;
              l < i ? u = o : a = o
            }
            return c(n, r, o)
          }
        }

        function v() {
          return 1
        }

        function y(t) {
          return 1 === t ? 1 : 0
        }

        function d() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (1 === t) {
            if (0 === n) return y;
            if (1 === n) return v
          }
          var e = 1 / t;
          return function (t) {
            return t >= 1 ? 1 : (t += n * e) - t % e
          }
        }

        function g(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          if (Number.isInteger(t)) return t;
          var e = Math.pow(10, n);
          return Math.round(t * e) / e
        }
        var p = Math.PI / 180;

        function m(t, n, e) {
          return t >= .5 ? e : n
        }

        function b(t, n, e) {
          return 0 === t || n === e ? n : t * (e - n) + n
        }

        function w(t, n, e) {
          var r = b(t, n, e);
          return r <= 0 ? 0 : r
        }

        function x(t, n, e) {
          return 0 === t ? n : 1 === t ? e : {
            x: b(t, n.x, e.x),
            y: b(t, n.y, e.y)
          }
        }

        function k(t, n, e) {
          var r = function (t, n, e) {
            return Math.round(b(t, n, e))
          }(t, n, e);
          return r <= 0 ? 0 : r >= 255 ? 255 : r
        }

        function A(t, n, e) {
          return 0 === t ? n : 1 === t ? e : {
            r: k(t, n.r, e.r),
            g: k(t, n.g, e.g),
            b: k(t, n.b, e.b),
            a: b(t, null == n.a ? 1 : n.a, null == e.a ? 1 : e.a)
          }
        }

        function _(t, n, e) {
          if (0 === t) return n;
          if (1 === t) return e;
          var r = n.length;
          if (r !== e.length) return m(t, n, e);
          for (var i = [], o = 0; o < r; o++) i.push(A(t, n[o], e[o]));
          return i
        }

        function S(t, n) {
          for (var e = [], r = 0; r < t; r++) e.push(n);
          return e
        }

        function O(t, n) {
          if (--n <= 0) return t;
          var e = (t = Object.assign([], t)).length;
          do {
            for (var r = 0; r < e; r++) t.push(t[r])
          } while (--n > 0);
          return t
        }
        var M, j = function () {
            function t(e) {
              n(this, t), this.list = e, this.length = e.length
            }
            return r(t, [{
              key: "setAttribute",
              value: function (t, n) {
                for (var e = this.list, r = 0; r < this.length; r++) e[r].setAttribute(t, n)
              }
            }, {
              key: "removeAttribute",
              value: function (t) {
                for (var n = this.list, e = 0; e < this.length; e++) n[e].removeAttribute(t)
              }
            }, {
              key: "style",
              value: function (t, n) {
                for (var e = this.list, r = 0; r < this.length; r++) e[r].style[t] = n
              }
            }]), t
          }(),
          F = /-./g,
          P = function (t, n) {
            return n.toUpperCase()
          };

        function B(t) {
          return "function" == typeof t ? t : m
        }

        function I(t) {
          return t ? "function" == typeof t ? t : Array.isArray(t) ? function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
            if (!Array.isArray(t)) return n;
            switch (t.length) {
              case 1:
                return d(t[0]) || n;
              case 2:
                return d(t[0], t[1]) || n;
              case 4:
                return h(t[0], t[1], t[2], t[3]) || n
            }
            return n
          }(t, null) : function (t, n) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s;
            switch (t) {
              case "linear":
                return s;
              case "steps":
                return d(n.steps || 1, n.jump || 0) || e;
              case "bezier":
              case "cubic-bezier":
                return h(n.x1 || 0, n.y1 || 0, n.x2 || 0, n.y2 || 0) || e
            }
            return e
          }(t.type, t.value, null) : null
        }

        function E(t, n, e) {
          var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = n.length - 1;
          if (t <= n[0].t) return r ? [0, 0, n[0].v] : n[0].v;
          if (t >= n[i].t) return r ? [i, 1, n[i].v] : n[i].v;
          var o, u = n[0],
            a = null;
          for (o = 1; o <= i; o++) {
            if (!(t > n[o].t)) {
              a = n[o];
              break
            }
            u = n[o]
          }
          return null == a ? r ? [i, 1, n[i].v] : n[i].v : u.t === a.t ? r ? [o, 1, a.v] : a.v : (t = (t - u.t) / (a
            .t - u.t), u.e && (t = u.e(t)), r ? [o, t, e(t, u.v, a.v)] : e(t, u.v, a.v))
        }

        function R(t, n) {
          var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          return t && t.length ? "function" != typeof n ? null : ("function" != typeof e && (e = null), function (r) {
            var i = E(r, t, n);
            return null != i && e && (i = e(i)), i
          }) : null
        }

        function q(t, n) {
          return t.t - n.t
        }

        function T(n, e, r, i, o) {
          var u, a = "@" === r[0],
            l = "#" === r[0],
            f = M[r],
            s = m;
          switch (a ? (u = r.substr(1), r = u.replace(F, P)) : l && (r = r.substr(1)), t(f)) {
            case "function":
              if (s = f(i, o, E, I, r, a, e, n), l) return s;
              break;
            case "string":
              s = R(i, B(f));
              break;
            case "object":
              if ((s = R(i, B(f.i), f.f)) && "function" == typeof f.u) return f.u(e, s, r, a, n)
          }
          return s ? function (t, n, e) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (r) return t instanceof j ? function (r) {
              return t.style(n, e(r))
            } : function (r) {
              return t.style[n] = e(r)
            };
            if (Array.isArray(n)) {
              var i = n.length;
              return function (r) {
                var o = e(r);
                if (null == o)
                  for (var u = 0; u < i; u++) t[u].removeAttribute(n);
                else
                  for (var a = 0; a < i; a++) t[a].setAttribute(n, o)
              }
            }
            return function (r) {
              var i = e(r);
              null == i ? t.removeAttribute(n) : t.setAttribute(n, i)
            }
          }(e, r, s, a) : null
        }

        function N(n, e, r, i) {
          if (!i || "object" !== t(i)) return null;
          var o = null,
            u = null;
          return Array.isArray(i) ? u = function (t) {
            if (!t || !t.length) return null;
            for (var n = 0; n < t.length; n++) t[n].e && (t[n].e = I(t[n].e));
            return t.sort(q)
          }(i) : (u = i.keys, o = i.data || null), u ? T(n, e, r, u, o) : null
        }

        function C(t, n, e) {
          if (!e) return null;
          var r = [];
          for (var i in e)
            if (e.hasOwnProperty(i)) {
              var o = N(t, n, i, e[i]);
              o && r.push(o)
            } return r.length ? r : null
        }

        function z(t, n) {
          if (!n.duration || n.duration < 0) return null;
          var e = function (t, n) {
            if (!n) return null;
            var e = [];
            if (Array.isArray(n))
              for (var r = n.length, i = 0; i < r; i++) {
                var o = n[i];
                if (2 === o.length) {
                  var u = null;
                  if ("string" == typeof o[0]) u = t.getElementById(o[0]);
                  else if (Array.isArray(o[0])) {
                    u = [];
                    for (var a = 0; a < o[0].length; a++)
                      if ("string" == typeof o[0][a]) {
                        var l = t.getElementById(o[0][a]);
                        l && u.push(l)
                      } u = u.length ? 1 === u.length ? u[0] : new j(u) : null
                  }
                  if (u) {
                    var f = C(t, u, o[1]);
                    f && (e = e.concat(f))
                  }
                }
              } else
                for (var s in n)
                  if (n.hasOwnProperty(s)) {
                    var c = t.getElementById(s);
                    if (c) {
                      var h = C(t, c, n[s]);
                      h && (e = e.concat(h))
                    }
                  } return e.length ? e : null
          }(t, n.elements);
          return e ? function (t, n) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
              i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
              u = t.length,
              a = r > 0 ? n : 0;
            i && e % 2 == 0 && (a = n - a);
            var l = null;
            return function (f, s) {
              var c = f % n,
                h = 1 + (f - c) / n;
              s *= r, i && h % 2 == 0 && (s = -s);
              var v = !1;
              if (h > e) c = a, v = !0, -1 === o && (c = r > 0 ? 0 : n);
              else if (s < 0 && (c = n - c), c === l) return !1;
              l = c;
              for (var y = 0; y < u; y++) t[y](c);
              return v
            }
          }(e, n.duration, n.iterations || 1 / 0, n.direction || 1, !!n.alternate, n.fill || 1) : null
        }
        var L = function () {
          function t(e, r) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            n(this, t), this._id = 0, this._running = !1, this._rollingBack = !1, this._animations = e, this
              .duration = r.duration, this.alternate = r.alternate, this.fill = r.fill, this.iterations = r
              .iterations, this.direction = i.direction || 1, this.speed = i.speed || 1, this.fps = i.fps || 100,
              this.offset = i.offset || 0, this.rollbackStartOffset = 0
          }
          return r(t, [{
            key: "_rollback",
            value: function () {
              var t = this,
                n = 1 / 0,
                e = null;
              this.rollbackStartOffset = this.offset, this._rollingBack || (this._rollingBack = !0, this
                ._running = !0);
              this._id = window.requestAnimationFrame((function r(i) {
                if (t._rollingBack) {
                  null == e && (e = i);
                  var o = i - e,
                    u = t.rollbackStartOffset - o,
                    a = Math.round(u * t.speed);
                  if (a > t.duration && n != 1 / 0) {
                    var l = !!t.alternate && a / t.duration % 2 > 1,
                      f = a % t.duration;
                    a = (f += l ? t.duration : 0) || t.duration
                  }
                  var s = t.fps ? 1e3 / t.fps : 0,
                    c = Math.max(0, a);
                  if (c < n - s) {
                    t.offset = c, n = c;
                    for (var h = t._animations, v = h.length, y = 0; y < v; y++) h[y](c, t.direction)
                  }
                  var d = !1;
                  if (t.iterations > 0 && -1 === t.fill) {
                    var g = t.iterations * t.duration,
                      p = g == a;
                    a = p ? 0 : a, t.offset = p ? 0 : t.offset, d = a > g
                  }
                  a > 0 && t.offset >= a && !d ? t._id = window.requestAnimationFrame(r) : t.stop()
                }
              }))
            }
          }, {
            key: "_start",
            value: function () {
              var t = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = -1 / 0,
                r = null,
                i = {},
                o = function o(u) {
                  t._running = !0, null == r && (r = u);
                  var a = Math.round((u - r + n) * t.speed),
                    l = t.fps ? 1e3 / t.fps : 0;
                  if (a > e + l && !t._rollingBack) {
                    t.offset = a, e = a;
                    for (var f = t._animations, s = f.length, c = 0, h = 0; h < s; h++) i[h] ? c++ : (i[h] =
                      f[h](a, t.direction), i[h] && c++);
                    if (c === s) return void t._stop()
                  }
                  t._id = window.requestAnimationFrame(o)
                };
              this._id = window.requestAnimationFrame(o)
            }
          }, {
            key: "_stop",
            value: function () {
              this._id && window.cancelAnimationFrame(this._id), this._running = !1, this._rollingBack = !1
            }
          }, {
            key: "play",
            value: function () {
              !this._rollingBack && this._running || (this._rollingBack = !1, this.rollbackStartOffset >
                this.duration && (this.offset = this.rollbackStartOffset - (this.rollbackStartOffset -
                  this.offset) % this.duration, this.rollbackStartOffset = 0), this._start(this.offset))
            }
          }, {
            key: "stop",
            value: function () {
              this._stop(), this.offset = 0, this.rollbackStartOffset = 0;
              var t = this.direction,
                n = this._animations;
              window.requestAnimationFrame((function () {
                for (var e = 0; e < n.length; e++) n[e](0, t)
              }))
            }
          }, {
            key: "reachedToEnd",
            value: function () {
              return this.iterations > 0 && this.offset >= this.iterations * this.duration
            }
          }, {
            key: "restart",
            value: function () {
              this._stop(), this.offset = 0, this._start()
            }
          }, {
            key: "pause",
            value: function () {
              this._stop()
            }
          }, {
            key: "reverse",
            value: function () {
              this.direction = -this.direction
            }
          }], [{
            key: "build",
            value: function (n, e) {
              return (n = function (t, n) {
                if (M = n, !t || !t.root || !Array.isArray(t.animations)) return null;
                for (var e = document.getElementsByTagName("svg"), r = !1, i = 0; i < e.length; i++)
                  if (e[i].id === t.root && !e[i].svgatorAnimation) {
                    (r = e[i]).svgatorAnimation = !0;
                    break
                  } if (!r) return null;
                var o = t.animations.map((function (t) {
                  return z(r, t)
                })).filter((function (t) {
                  return !!t
                }));
                return o.length ? {
                  element: r,
                  animations: o,
                  animationSettings: t.animationSettings,
                  options: t.options || void 0
                } : null
              }(n, e)) ? {
                el: n.element,
                options: n.options || {},
                player: new t(n.animations, n.animationSettings, n.options)
              } : null
            }
          }]), t
        }();
        ! function () {
          for (var t = 0, n = ["ms", "moz", "webkit", "o"], e = 0; e < n.length && !window.requestAnimationFrame; ++e)
            window.requestAnimationFrame = window[n[e] + "RequestAnimationFrame"], window.cancelAnimationFrame =
            window[n[e] + "CancelAnimationFrame"] || window[n[e] + "CancelRequestAnimationFrame"];
          window.requestAnimationFrame || (window.requestAnimationFrame = function (n) {
            var e = Date.now(),
              r = Math.max(0, 16 - (e - t)),
              i = window.setTimeout((function () {
                n(e + r)
              }), r);
            return t = e + r, i
          }, window.cancelAnimationFrame = window.clearTimeout)
        }();
        var D = /\\.0+$/g;

        function Q(t) {
          return Number.isInteger(t) ? t + "" : t.toFixed(6).replace(D, "")
        }

        function U(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
          return t && t.length ? t.map(Q).join(n) : ""
        }

        function V(t) {
          return t ? null == t.a || t.a >= 1 ? "rgb(" + t.r + "," + t.g + "," + t.b + ")" : "rgba(" + t.r + "," + t
            .g + "," + t.b + "," + t.a + ")" : "transparent"
        }
        var $ = {
            f: null,
            i: function (t, n, e) {
              return 0 === t ? n : 1 === t ? e : {
                x: w(t, n.x, e.x),
                y: w(t, n.y, e.y)
              }
            },
            u: function (t, n) {
              return function (e) {
                var r = n(e);
                t.setAttribute("rx", Q(r.x)), t.setAttribute("ry", Q(r.y))
              }
            }
          },
          G = {
            f: null,
            i: function (t, n, e) {
              return 0 === t ? n : 1 === t ? e : {
                width: w(t, n.width, e.width),
                height: w(t, n.height, e.height)
              }
            },
            u: function (t, n) {
              return function (e) {
                var r = n(e);
                t.setAttribute("width", Q(r.width)), t.setAttribute("height", Q(r.height))
              }
            }
          },
          H = Math.sin,
          Y = Math.cos,
          Z = Math.acos,
          J = Math.asin,
          K = Math.tan,
          W = Math.atan2,
          X = Math.PI / 180,
          tt = 180 / Math.PI,
          nt = Math.sqrt,
          et = function () {
            function t() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
              n(this, t), this.m = [e, r, i, o, u, a], this.i = null, this.w = null, this.s = null
            }
            return r(t, [{
              key: "determinant",
              get: function () {
                var t = this.m;
                return t[0] * t[3] - t[1] * t[2]
              }
            }, {
              key: "isIdentity",
              get: function () {
                if (null === this.i) {
                  var t = this.m;
                  this.i = 1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3] && 0 === t[4] && 0 === t[5]
                }
                return this.i
              }
            }, {
              key: "point",
              value: function (t, n) {
                var e = this.m;
                return {
                  x: e[0] * t + e[2] * n + e[4],
                  y: e[1] * t + e[3] * n + e[5]
                }
              }
            }, {
              key: "translateSelf",
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (!t && !n) return this;
                var e = this.m;
                return e[4] += e[0] * t + e[2] * n, e[5] += e[1] * t + e[3] * n, this.w = this.s = this.i =
                  null, this
              }
            }, {
              key: "rotateSelf",
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (t %= 360) {
                  var n = H(t *= X),
                    e = Y(t),
                    r = this.m,
                    i = r[0],
                    o = r[1];
                  r[0] = i * e + r[2] * n, r[1] = o * e + r[3] * n, r[2] = r[2] * e - i * n, r[3] = r[3] * e -
                    o * n, this.w = this.s = this.i = null
                }
                return this
              }
            }, {
              key: "scaleSelf",
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                if (1 !== t || 1 !== n) {
                  var e = this.m;
                  e[0] *= t, e[1] *= t, e[2] *= n, e[3] *= n, this.w = this.s = this.i = null
                }
                return this
              }
            }, {
              key: "skewSelf",
              value: function (t, n) {
                if (n %= 360, (t %= 360) || n) {
                  var e = this.m,
                    r = e[0],
                    i = e[1],
                    o = e[2],
                    u = e[3];
                  t && (t = K(t * X), e[2] += r * t, e[3] += i * t), n && (n = K(n * X), e[0] += o * n, e[
                    1] += u * n), this.w = this.s = this.i = null
                }
                return this
              }
            }, {
              key: "resetSelf",
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                  r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                  i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                  o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                  u = this.m;
                return u[0] = t, u[1] = n, u[2] = e, u[3] = r, u[4] = i, u[5] = o, this.w = this.s = this.i =
                  null, this
              }
            }, {
              key: "recomposeSelf",
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                  e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                  r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                  i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                return this.isIdentity || this.resetSelf(), t && (t.x || t.y) && this.translateSelf(t.x, t.y),
                  n && this.rotateSelf(n), e && (e.x && this.skewSelf(e.x, 0), e.y && this.skewSelf(0, e.y)),
                  !r || 1 === r.x && 1 === r.y || this.scaleSelf(r.x, r.y), i && (i.x || i.y) && this
                  .translateSelf(i.x, i.y), this
              }
            }, {
              key: "decompose",
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  e = this.m,
                  r = e[0] * e[0] + e[1] * e[1],
                  i = [
                    [e[0], e[1]],
                    [e[2], e[3]]
                  ],
                  o = nt(r);
                if (0 === o) return {
                  origin: {
                    x: e[4],
                    y: e[5]
                  },
                  translate: {
                    x: t,
                    y: n
                  },
                  scale: {
                    x: 0,
                    y: 0
                  },
                  skew: {
                    x: 0,
                    y: 0
                  },
                  rotate: 0
                };
                i[0][0] /= o, i[0][1] /= o;
                var u = e[0] * e[3] - e[1] * e[2] < 0;
                u && (o = -o);
                var a = i[0][0] * i[1][0] + i[0][1] * i[1][1];
                i[1][0] -= i[0][0] * a, i[1][1] -= i[0][1] * a;
                var l = nt(i[1][0] * i[1][0] + i[1][1] * i[1][1]);
                if (0 === l) return {
                  origin: {
                    x: e[4],
                    y: e[5]
                  },
                  translate: {
                    x: t,
                    y: n
                  },
                  scale: {
                    x: o,
                    y: 0
                  },
                  skew: {
                    x: 0,
                    y: 0
                  },
                  rotate: 0
                };
                i[1][0] /= l, i[1][1] /= l, a /= l;
                var f = 0;
                return i[1][1] < 0 ? (f = Z(i[1][1]) * tt, i[0][1] < 0 && (f = 360 - f)) : f = J(i[0][1]) *
                  tt, u && (f = -f), a = W(a, nt(i[0][0] * i[0][0] + i[0][1] * i[0][1])) * tt, u && (a = -
                  a), {
                    origin: {
                      x: e[4],
                      y: e[5]
                    },
                    translate: {
                      x: t,
                      y: n
                    },
                    scale: {
                      x: o,
                      y: l
                    },
                    skew: {
                      x: a,
                      y: 0
                    },
                    rotate: f
                  }
              }
            }, {
              key: "toString",
              value: function () {
                return null === this.s && (this.s = "matrix(" + this.m.map(it).join(" ") + ")"), this.s
              }
            }]), t
          }(),
          rt = /\\.0+$/;

        function it(t) {
          return Number.isInteger(t) ? t : t.toFixed(14).replace(rt, "")
        }
        Object.freeze({
          M: 2,
          L: 2,
          Z: 0,
          H: 1,
          V: 1,
          C: 6,
          Q: 4,
          T: 2,
          S: 4,
          A: 7
        });
        var ot = {},
          ut = null;

        function at(n) {
          var e = function () {
            if (ut) return ut;
            if ("object" !== ("undefined" == typeof document ? "undefined" : t(document)) || !document
              .createElementNS) return {};
            var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            return n && n.style ? (n.style.position = "absolute", n.style.opacity = "0.01", n.style.zIndex =
              "-9999", n.style.left = "-9999px", n.style.width = "1px", n.style.height = "1px", ut = {
                svg: n
              }) : {}
          }().svg;
          if (!e) return function (t) {
            return null
          };
          var r = document.createElementNS(e.namespaceURI, "path");
          r.setAttributeNS(null, "d", n), r.setAttributeNS(null, "fill", "none"), r.setAttributeNS(null, "stroke",
            "none"), e.appendChild(r);
          var i = r.getTotalLength();
          return function (t) {
            var n = r.getPointAtLength(i * t);
            return {
              x: n.x,
              y: n.y
            }
          }
        }

        function lt(t) {
          return ot[t] ? ot[t] : ot[t] = at(t)
        }

        function ft(t, n, e, r) {
          if (!t || !r) return !1;
          var i = ["M", t.x, t.y];
          if (n && e && (i.push("C"), i.push(n.x), i.push(n.y), i.push(e.x), i.push(e.y)), n ? !e : e) {
            var o = n || e;
            i.push("Q"), i.push(o.x), i.push(o.y)
          }
          return n || e || i.push("L"), i.push(r.x), i.push(r.y), i.join(" ")
        }

        function st(t, n, e, r) {
          var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
            o = ft(t, n, e, r),
            u = lt(o);
          try {
            return u(i)
          } catch (t) {
            return null
          }
        }

        function ct(t, n, e, r) {
          var i = 1 - r;
          return i * i * t + 2 * i * r * n + r * r * e
        }

        function ht(t, n, e, r) {
          return 2 * (1 - r) * (n - t) + 2 * r * (e - n)
        }

        function vt(t, n, e, r) {
          var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = st(t, n, null, e, r);
          return o || (o = {
            x: ct(t.x, n.x, e.x, r),
            y: ct(t.y, n.y, e.y, r)
          }), i && (o.a = yt(t, n, e, r)), o
        }

        function yt(t, n, e, r) {
          return Math.atan2(ht(t.y, n.y, e.y, r), ht(t.x, n.x, e.x, r))
        }

        function dt(t, n, e, r, i) {
          var o = i * i;
          return i * o * (r - t + 3 * (n - e)) + 3 * o * (t + e - 2 * n) + 3 * i * (n - t) + t
        }

        function gt(t, n, e, r, i) {
          var o = 1 - i;
          return 3 * (o * o * (n - t) + 2 * o * i * (e - n) + i * i * (r - e))
        }

        function pt(t, n, e, r, i) {
          var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            u = st(t, n, e, r, i);
          return u || (u = {
            x: dt(t.x, n.x, e.x, r.x, i),
            y: dt(t.y, n.y, e.y, r.y, i)
          }), o && (u.a = mt(t, n, e, r, i)), u
        }

        function mt(t, n, e, r, i) {
          return Math.atan2(gt(t.y, n.y, e.y, r.y, i), gt(t.x, n.x, e.x, r.x, i))
        }

        function bt(t, n, e) {
          return t + (n - t) * e
        }

        function wt(t, n, e) {
          var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = {
              x: bt(t.x, n.x, e),
              y: bt(t.y, n.y, e)
            };
          return r && (i.a = xt(t, n)), i
        }

        function xt(t, n) {
          return Math.atan2(n.y - t.y, n.x - t.x)
        }

        function kt(t, n, e) {
          var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (_t(n)) {
            if (St(e)) return vt(n, e.start, e, t, r)
          } else if (_t(e)) {
            if (n.end) return vt(n, n.end, e, t, r)
          } else {
            if (n.end) return e.start ? pt(n, n.end, e.start, e, t, r) : vt(n, n.end, e, t, r);
            if (e.start) return vt(n, e.start, e, t, r)
          }
          return wt(n, e, t, r)
        }

        function At(t, n, e) {
          var r = kt(t, n, e, !0);
          return r.a = function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return n ? t + Math.PI : t
          }(r.a) / p, r
        }

        function _t(t) {
          return !t.type || "corner" === t.type
        }

        function St(t) {
          return null != t.start && !_t(t)
        }
        var Ot = new et;
        var Mt = {
            f: Q,
            i: b
          },
          jt = {
            f: Q,
            i: function (t, n, e) {
              var r = b(t, n, e);
              return r <= 0 ? 0 : r >= 1 ? 1 : r
            }
          };

        function Ft(t, n, e, r, i, o, u, a) {
          return n = function (t, n, e) {
              for (var r, i, o, u = t.length - 1, a = {}, l = 0; l <= u; l++)(r = t[l]).e && (r.e = n(r.e)), r.v &&
                "g" === (i = r.v).t && i.r && (o = e.getElementById(i.r)) && (a[i.r] = o.querySelectorAll("stop"));
              return a
            }(t, r, a),
            function (r) {
              var i, o = e(r, t, Pt);
              return o ? "c" === o.t ? V(o.v) : "g" === o.t ? (n[o.r] && function (t, n) {
                for (var e = 0, r = t.length; e < r; e++) t[e].setAttribute("stop-color", V(n[e]))
              }(n[o.r], o.v), (i = o.r) ? "url(#" + i + ")" : "none") : "none" : "none"
            }
        }

        function Pt(t, n, e) {
          if (0 === t) return n;
          if (1 === t) return e;
          if (n && e) {
            var r = n.t;
            if (r === e.t) switch (n.t) {
              case "c":
                return {
                  t: r, v: A(t, n.v, e.v)
                };
              case "g":
                if (n.r === e.r) return {
                  t: r,
                  v: _(t, n.v, e.v),
                  r: n.r
                }
            }
          }
          return m(t, n, e)
        }
        var Bt = {
          fill: Ft,
          "fill-opacity": jt,
          stroke: Ft,
          "stroke-opacity": jt,
          "stroke-width": Mt,
          "stroke-dashoffset": {
            f: Q,
            i: b
          },
          "stroke-dasharray": {
            f: function (t) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
              return t && t.length > 0 && (t = t.map((function (t) {
                return Math.floor(1e4 * t) / 1e4
              }))), U(t, n)
            },
            i: function (t, n, e) {
              var r, i, o, u = n.length,
                a = e.length;
              if (u !== a)
                if (0 === u) n = S(u = a, 0);
                else if (0 === a) a = u, e = S(u, 0);
              else {
                var l = (o = (r = u) * (i = a) / function (t, n) {
                  for (var e; n;) e = n, n = t % n, t = e;
                  return t || 1
                }(r, i)) < 0 ? -o : o;
                n = O(n, Math.floor(l / u)), e = O(e, Math.floor(l / a)), u = a = l
              }
              for (var f = [], s = 0; s < u; s++) f.push(g(w(t, n[s], e[s]), 6));
              return f
            }
          },
          opacity: jt,
          transform: function (n, e, r, i) {
            if (!(n = function (n, e) {
                if (!n || "object" !== t(n)) return null;
                var r = !1;
                for (var i in n) n.hasOwnProperty(i) && (n[i] && n[i].length ? (n[i].forEach((function (t) {
                  t.e && (t.e = e(t.e))
                })), r = !0) : delete n[i]);
                return r ? n : null
              }(n, i))) return null;
            var o = function (t, i, o) {
              var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              return n[t] ? r(i, n[t], o) : e && e[t] ? e[t] : u
            };
            return e && e.a && n.o ? function (t) {
              var e = r(t, n.o, At);
              return Ot.recomposeSelf(e, o("r", t, b, 0) + e.a, o("k", t, x), o("s", t, x), o("t", t, x))
                .toString()
            } : function (t) {
              return Ot.recomposeSelf(o("o", t, kt, null), o("r", t, b, 0), o("k", t, x), o("s", t, x), o("t",
                t, x)).toString()
            }
          },
          r: Mt,
          "#size": G,
          "#radius": $,
          _: function (t, n) {
            if (Array.isArray(t))
              for (var e = 0; e < t.length; e++) this[t[e]] = n;
            else this[t] = n
          }
        };
        return function (t) {
          ! function (t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError(
              "Super expression must either be null or a function");
            t.prototype = Object.create(n && n.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), n && o(t, n)
          }(u, t);
          var e = a(u);

          function u() {
            return n(this, u), e.apply(this, arguments)
          }
          return r(u, null, [{
            key: "build",
            value: function (t) {
              var n = l(i(u), "build", this).call(this, t, Bt);
              if (!n) return null;
              n.el, n.options;
              var e = n.player;
              return function (t, n, e) {
                t.play()
              }(e), e
            }
          }]), u
        }(L)
      }));
      __SVGATOR_PLAYER__.build({
        "root": "animated-circulating-circles",
        "animations": [{
          "duration": 2400,
          "direction": 1,
          "iterations": 0,
          "fill": 1,
          "alternate": false,
          "speed": 1,
          "elements": {
            "byui": {
              "transform": {
                "keys": {
                  "o": [{
                    "t": 0,
                    "v": {
                      "x": 550,
                      "y": 250.00000000000006,
                      "type": "cusp",
                      "end": {
                        "x": 551.0917393023715,
                        "y": 351.1022426942422
                      }
                    },
                    "e": [0.42, 0, 0.58, 1]
                  }, {
                    "t": 800,
                    "v": {
                      "x": 349.99999999999994,
                      "y": 550,
                      "type": "cusp",
                      "start": {
                        "x": 497.11625766873493,
                        "y": 550.3623151834229
                      },
                      "end": {
                        "x": 200.4148096496908,
                        "y": 550.1092584250202
                      }
                    },
                    "e": [0.42, 0, 0.58, 1]
                  }, {
                    "t": 1600,
                    "v": {
                      "x": 149.99999999999994,
                      "y": 250,
                      "type": "cusp",
                      "start": {
                        "x": 149.47874117695622,
                        "y": 350.1606727450993
                      },
                      "end": {
                        "x": 222.77398109758377,
                        "y": 176.44371444136877
                      }
                    },
                    "e": [0.42, 0, 0.58, 1]
                  }, {
                    "t": 2400,
                    "v": {
                      "x": 549.9999999999999,
                      "y": 250.0000000000001,
                      "type": "cusp",
                      "start": {
                        "x": 475.72457401537645,
                        "y": 176.62601374472266
                      }
                    }
                  }]
                }
              }
            },
            "byuh": {
              "transform": {
                "keys": {
                  "o": [{
                    "t": 0,
                    "v": {
                      "x": 149.99999999999983,
                      "y": 250,
                      "type": "cusp",
                      "end": {
                        "x": 222.91709984807665,
                        "y": 177.22497659397914
                      }
                    },
                    "e": [0.42, 0, 0.58, 1]
                  }, {
                    "t": 800,
                    "v": {
                      "x": 550,
                      "y": 250,
                      "type": "cusp",
                      "start": {
                        "x": 477.2743178161895,
                        "y": 177.3377112505439
                      },
                      "end": {
                        "x": 550.9514835113838,
                        "y": 352.0788388597766
                      }
                    },
                    "e": [0.42, 0, 0.58, 1]
                  }, {
                    "t": 1600,
                    "v": {
                      "x": 349.99999999999994,
                      "y": 550.0000000000001,
                      "type": "cusp",
                      "start": {
                        "x": 449.5396433331858,
                        "y": 550.388630890673
                      },
                      "end": {
                        "x": 249.28206574886238,
                        "y": 551.3159846327593
                      }
                    },
                    "e": [0.42, 0, 0.58, 1]
                  }, {
                    "t": 2400,
                    "v": {
                      "x": 149.99999999999994,
                      "y": 250.00000000000006,
                      "type": "cusp",
                      "start": {
                        "x": 150.4480244020144,
                        "y": 352.6537129515405
                      }
                    }
                  }]
                }
              }
            },
            "byu": {
              "transform": {
                "data": {
                  "t": {
                    "x": -5.684341886080802e-14,
                    "y": 0
                  }
                },
                "keys": {
                  "o": [{
                    "t": 0,
                    "v": {
                      "x": 350,
                      "y": 550,
                      "type": "cusp",
                      "end": {
                        "x": 251.00485541232376,
                        "y": 550.9975487134113
                      }
                    },
                    "e": [0.42, 0, 0.58, 1]
                  }, {
                    "t": 800,
                    "v": {
                      "x": 149.99999999999997,
                      "y": 250,
                      "type": "cusp",
                      "start": {
                        "x": 150.85610697514994,
                        "y": 349.8038859902615
                      },
                      "end": {
                        "x": 223.65047003914515,
                        "y": 175.62757516047367
                      }
                    },
                    "e": [0.42, 0, 0.58, 1]
                  }, {
                    "t": 1600,
                    "v": {
                      "x": 550,
                      "y": 249.99999999999994,
                      "type": "cusp",
                      "start": {
                        "x": 477.4154861205025,
                        "y": 177.86703848216914
                      },
                      "end": {
                        "x": 551.0606047354634,
                        "y": 350.1760309395294
                      }
                    },
                    "e": [0.42, 0, 0.58, 1]
                  }, {
                    "t": 2400,
                    "v": {
                      "x": 350,
                      "y": 551.098544,
                      "type": "cusp",
                      "start": {
                        "x": 452.8544612257602,
                        "y": 549.570907716811
                      }
                    }
                  }]
                }
              }
            }
          }
        }],
        "options": {
          "start": "load",
          "hover": null,
          "click": null,
          "scroll": null,
          "font": "embed",
          "exportedIds": "unique",
          "svgFormat": "animated",
          "title": "BYUMS-Tokyo"
        },
        "animationSettings": {
          "duration": 2400,
          "direction": 1,
          "iterations": 0,
          "fill": 1,
          "alternate": false,
          "speed": 1
        }
      })
    `}</Script>
  </svg>
);
