/*! For license information please see main.30b465f1ecb0f64ae994.js.LICENSE.txt */
/* eslint-disable */
!(function () {
  var e = {
      760: function (e) {
        'use strict';
        function t(e) {
          (this._maxSize = e), this.clear();
        }
        (t.prototype.clear = function () {
          (this._size = 0), (this._values = Object.create(null));
        }),
          (t.prototype.get = function (e) {
            return this._values[e];
          }),
          (t.prototype.set = function (e, t) {
            return (
              this._size >= this._maxSize && this.clear(),
              e in this._values || this._size++,
              (this._values[e] = t)
            );
          });
        var n = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
          i = /^\d+$/,
          s = /^\d/,
          r = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
          o = /^\s*(['"]?)(.*?)(\1)\s*$/,
          a = new t(512),
          l = new t(512),
          c = new t(512);
        function u(e) {
          return (
            a.get(e) ||
            a.set(
              e,
              h(e).map(function (e) {
                return e.replace(o, '$2');
              }),
            )
          );
        }
        function h(e) {
          return e.match(n) || [''];
        }
        function d(e) {
          return 'string' == typeof e && e && -1 !== ["'", '"'].indexOf(e.charAt(0));
        }
        function f(e) {
          return (
            !d(e) &&
            ((function (e) {
              return e.match(s) && !e.match(i);
            })(e) ||
              (function (e) {
                return r.test(e);
              })(e))
          );
        }
        e.exports = {
          Cache: t,
          split: h,
          normalizePath: u,
          setter: function (e) {
            var t = u(e);
            return (
              l.get(e) ||
              l.set(e, function (e, n) {
                for (var i = 0, s = t.length, r = e; i < s - 1; ) {
                  var o = t[i];
                  if ('__proto__' === o || 'constructor' === o || 'prototype' === o) return e;
                  r = r[t[i++]];
                }
                r[t[i]] = n;
              })
            );
          },
          getter: function (e, t) {
            var n = u(e);
            return (
              c.get(e) ||
              c.set(e, function (e) {
                for (var i = 0, s = n.length; i < s; ) {
                  if (null == e && t) return;
                  e = e[n[i++]];
                }
                return e;
              })
            );
          },
          join: function (e) {
            return e.reduce(function (e, t) {
              return e + (d(t) || i.test(t) ? '[' + t + ']' : (e ? '.' : '') + t);
            }, '');
          },
          forEach: function (e, t, n) {
            !(function (e, t, n) {
              var i,
                s,
                r,
                o,
                a = e.length;
              for (s = 0; s < a; s++)
                (i = e[s]) &&
                  (f(i) && (i = '"' + i + '"'),
                  (r = !(o = d(i)) && /^\d+$/.test(i)),
                  t.call(n, i, o, r, s, e));
            })(Array.isArray(e) ? e : h(e), t, n);
          },
        };
      },
      885: function (e) {
        const t =
            /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
          n = (e) => e.match(t) || [],
          i = (e) => e[0].toUpperCase() + e.slice(1),
          s = (e, t) => n(e).join(t).toLowerCase(),
          r = (e) =>
            n(e).reduce(
              (e, t) =>
                `${e}${e ? t[0].toUpperCase() + t.slice(1).toLowerCase() : t.toLowerCase()}`,
              '',
            );
        e.exports = {
          words: n,
          upperFirst: i,
          camelCase: r,
          pascalCase: (e) => i(r(e)),
          snakeCase: (e) => s(e, '_'),
          kebabCase: (e) => s(e, '-'),
          sentenceCase: (e) => i(s(e, ' ')),
          titleCase: (e) => n(e).map(i).join(' '),
        };
      },
      633: function (e) {
        function t(e, t) {
          var n = e.length,
            i = new Array(n),
            s = {},
            r = n,
            o = (function (e) {
              for (var t = new Map(), n = 0, i = e.length; n < i; n++) {
                var s = e[n];
                t.has(s[0]) || t.set(s[0], new Set()),
                  t.has(s[1]) || t.set(s[1], new Set()),
                  t.get(s[0]).add(s[1]);
              }
              return t;
            })(t),
            a = (function (e) {
              for (var t = new Map(), n = 0, i = e.length; n < i; n++) t.set(e[n], n);
              return t;
            })(e);
          for (
            t.forEach(function (e) {
              if (!a.has(e[0]) || !a.has(e[1]))
                throw new Error('Unknown node. There is an unknown node in the supplied edges.');
            });
            r--;

          )
            s[r] || l(e[r], r, new Set());
          return i;
          function l(e, t, r) {
            if (r.has(e)) {
              var c;
              try {
                c = ', node was:' + JSON.stringify(e);
              } catch (e) {
                c = '';
              }
              throw new Error('Cyclic dependency' + c);
            }
            if (!a.has(e))
              throw new Error(
                'Found unknown node. Make sure to provided all involved nodes. Unknown node: ' +
                  JSON.stringify(e),
              );
            if (!s[t]) {
              s[t] = !0;
              var u = o.get(e) || new Set();
              if ((t = (u = Array.from(u)).length)) {
                r.add(e);
                do {
                  var h = u[--t];
                  l(h, a.get(h), r);
                } while (t);
                r.delete(e);
              }
              i[--n] = e;
            }
          }
        }
        (e.exports = function (e) {
          return t(
            (function (e) {
              for (var t = new Set(), n = 0, i = e.length; n < i; n++) {
                var s = e[n];
                t.add(s[0]), t.add(s[1]);
              }
              return Array.from(t);
            })(e),
            e,
          );
        }),
          (e.exports.array = t);
      },
    },
    t = {};
  function n(i) {
    var s = t[i];
    if (void 0 !== s) return s.exports;
    var r = (t[i] = { exports: {} });
    return e[i](r, r.exports, n), r.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var i in t)
        n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (function () {
      'use strict';
      var e = {};
      n.r(e),
        n.d(e, {
          afterMain: function () {
            return w;
          },
          afterRead: function () {
            return b;
          },
          afterWrite: function () {
            return A;
          },
          applyStyles: function () {
            return D;
          },
          arrow: function () {
            return X;
          },
          auto: function () {
            return o;
          },
          basePlacements: function () {
            return a;
          },
          beforeMain: function () {
            return v;
          },
          beforeRead: function () {
            return g;
          },
          beforeWrite: function () {
            return x;
          },
          bottom: function () {
            return i;
          },
          clippingParents: function () {
            return u;
          },
          computeStyles: function () {
            return te;
          },
          createPopper: function () {
            return $e;
          },
          createPopperBase: function () {
            return Se;
          },
          createPopperLite: function () {
            return De;
          },
          detectOverflow: function () {
            return ge;
          },
          end: function () {
            return c;
          },
          eventListeners: function () {
            return ie;
          },
          flip: function () {
            return _e;
          },
          hide: function () {
            return ye;
          },
          left: function () {
            return r;
          },
          main: function () {
            return y;
          },
          modifierPhases: function () {
            return O;
          },
          offset: function () {
            return we;
          },
          placements: function () {
            return m;
          },
          popper: function () {
            return d;
          },
          popperGenerator: function () {
            return Te;
          },
          popperOffsets: function () {
            return xe;
          },
          preventOverflow: function () {
            return Ee;
          },
          read: function () {
            return _;
          },
          reference: function () {
            return f;
          },
          right: function () {
            return s;
          },
          start: function () {
            return l;
          },
          top: function () {
            return t;
          },
          variationPlacements: function () {
            return p;
          },
          viewport: function () {
            return h;
          },
          write: function () {
            return E;
          },
        });
      var t = 'top',
        i = 'bottom',
        s = 'right',
        r = 'left',
        o = 'auto',
        a = [t, i, s, r],
        l = 'start',
        c = 'end',
        u = 'clippingParents',
        h = 'viewport',
        d = 'popper',
        f = 'reference',
        p = a.reduce(function (e, t) {
          return e.concat([t + '-' + l, t + '-' + c]);
        }, []),
        m = [].concat(a, [o]).reduce(function (e, t) {
          return e.concat([t, t + '-' + l, t + '-' + c]);
        }, []),
        g = 'beforeRead',
        _ = 'read',
        b = 'afterRead',
        v = 'beforeMain',
        y = 'main',
        w = 'afterMain',
        x = 'beforeWrite',
        E = 'write',
        A = 'afterWrite',
        O = [g, _, b, v, y, w, x, E, A];
      function k(e) {
        return e ? (e.nodeName || '').toLowerCase() : null;
      }
      function C(e) {
        if (null == e) return window;
        if ('[object Window]' !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function T(e) {
        return e instanceof C(e).Element || e instanceof Element;
      }
      function S(e) {
        return e instanceof C(e).HTMLElement || e instanceof HTMLElement;
      }
      function $(e) {
        return (
          'undefined' != typeof ShadowRoot &&
          (e instanceof C(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var D = {
        name: 'applyStyles',
        enabled: !0,
        phase: 'write',
        fn: function (e) {
          var t = e.state;
          Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
              i = t.attributes[e] || {},
              s = t.elements[e];
            S(s) &&
              k(s) &&
              (Object.assign(s.style, n),
              Object.keys(i).forEach(function (e) {
                var t = i[e];
                !1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? '' : t);
              }));
          });
        },
        effect: function (e) {
          var t = e.state,
            n = {
              popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
              arrow: { position: 'absolute' },
              reference: {},
            };
          return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
              Object.keys(t.elements).forEach(function (e) {
                var i = t.elements[e],
                  s = t.attributes[e] || {},
                  r = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (
                    e,
                    t,
                  ) {
                    return (e[t] = ''), e;
                  },
                  {});
                S(i) &&
                  k(i) &&
                  (Object.assign(i.style, r),
                  Object.keys(s).forEach(function (e) {
                    i.removeAttribute(e);
                  }));
              });
            }
          );
        },
        requires: ['computeStyles'],
      };
      function F(e) {
        return e.split('-')[0];
      }
      var j = Math.max,
        L = Math.min,
        P = Math.round;
      function I() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + '/' + e.version;
              })
              .join(' ')
          : navigator.userAgent;
      }
      function M() {
        return !/^((?!chrome|android).)*safari/i.test(I());
      }
      function N(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var i = e.getBoundingClientRect(),
          s = 1,
          r = 1;
        t &&
          S(e) &&
          ((s = (e.offsetWidth > 0 && P(i.width) / e.offsetWidth) || 1),
          (r = (e.offsetHeight > 0 && P(i.height) / e.offsetHeight) || 1));
        var o = (T(e) ? C(e) : window).visualViewport,
          a = !M() && n,
          l = (i.left + (a && o ? o.offsetLeft : 0)) / s,
          c = (i.top + (a && o ? o.offsetTop : 0)) / r,
          u = i.width / s,
          h = i.height / r;
        return { width: u, height: h, top: c, right: l + u, bottom: c + h, left: l, x: l, y: c };
      }
      function V(e) {
        var t = N(e),
          n = e.offsetWidth,
          i = e.offsetHeight;
        return (
          Math.abs(t.width - n) <= 1 && (n = t.width),
          Math.abs(t.height - i) <= 1 && (i = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
        );
      }
      function z(e, t) {
        var n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && $(n)) {
          var i = t;
          do {
            if (i && e.isSameNode(i)) return !0;
            i = i.parentNode || i.host;
          } while (i);
        }
        return !1;
      }
      function R(e) {
        return C(e).getComputedStyle(e);
      }
      function H(e) {
        return ['table', 'td', 'th'].indexOf(k(e)) >= 0;
      }
      function q(e) {
        return ((T(e) ? e.ownerDocument : e.document) || window.document).documentElement;
      }
      function W(e) {
        return 'html' === k(e)
          ? e
          : e.assignedSlot || e.parentNode || ($(e) ? e.host : null) || q(e);
      }
      function B(e) {
        return S(e) && 'fixed' !== R(e).position ? e.offsetParent : null;
      }
      function U(e) {
        for (var t = C(e), n = B(e); n && H(n) && 'static' === R(n).position; ) n = B(n);
        return n && ('html' === k(n) || ('body' === k(n) && 'static' === R(n).position))
          ? t
          : n ||
              (function (e) {
                var t = /firefox/i.test(I());
                if (/Trident/i.test(I()) && S(e) && 'fixed' === R(e).position) return null;
                var n = W(e);
                for ($(n) && (n = n.host); S(n) && ['html', 'body'].indexOf(k(n)) < 0; ) {
                  var i = R(n);
                  if (
                    'none' !== i.transform ||
                    'none' !== i.perspective ||
                    'paint' === i.contain ||
                    -1 !== ['transform', 'perspective'].indexOf(i.willChange) ||
                    (t && 'filter' === i.willChange) ||
                    (t && i.filter && 'none' !== i.filter)
                  )
                    return n;
                  n = n.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function K(e) {
        return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
      }
      function Y(e, t, n) {
        return j(e, L(t, n));
      }
      function Z(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function Q(e, t) {
        return t.reduce(function (t, n) {
          return (t[n] = e), t;
        }, {});
      }
      var X = {
        name: 'arrow',
        enabled: !0,
        phase: 'main',
        fn: function (e) {
          var n,
            o = e.state,
            l = e.name,
            c = e.options,
            u = o.elements.arrow,
            h = o.modifiersData.popperOffsets,
            d = F(o.placement),
            f = K(d),
            p = [r, s].indexOf(d) >= 0 ? 'height' : 'width';
          if (u && h) {
            var m = (function (e, t) {
                return Z(
                  'number' !=
                    typeof (e =
                      'function' == typeof e
                        ? e(Object.assign({}, t.rects, { placement: t.placement }))
                        : e)
                    ? e
                    : Q(e, a),
                );
              })(c.padding, o),
              g = V(u),
              _ = 'y' === f ? t : r,
              b = 'y' === f ? i : s,
              v = o.rects.reference[p] + o.rects.reference[f] - h[f] - o.rects.popper[p],
              y = h[f] - o.rects.reference[f],
              w = U(u),
              x = w ? ('y' === f ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
              E = v / 2 - y / 2,
              A = m[_],
              O = x - g[p] - m[b],
              k = x / 2 - g[p] / 2 + E,
              C = Y(A, k, O),
              T = f;
            o.modifiersData[l] = (((n = {})[T] = C), (n.centerOffset = C - k), n);
          }
        },
        effect: function (e) {
          var t = e.state,
            n = e.options.element,
            i = void 0 === n ? '[data-popper-arrow]' : n;
          null != i &&
            ('string' != typeof i || (i = t.elements.popper.querySelector(i))) &&
            z(t.elements.popper, i) &&
            (t.elements.arrow = i);
        },
        requires: ['popperOffsets'],
        requiresIfExists: ['preventOverflow'],
      };
      function J(e) {
        return e.split('-')[1];
      }
      var G = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
      function ee(e) {
        var n,
          o = e.popper,
          a = e.popperRect,
          l = e.placement,
          u = e.variation,
          h = e.offsets,
          d = e.position,
          f = e.gpuAcceleration,
          p = e.adaptive,
          m = e.roundOffsets,
          g = e.isFixed,
          _ = h.x,
          b = void 0 === _ ? 0 : _,
          v = h.y,
          y = void 0 === v ? 0 : v,
          w = 'function' == typeof m ? m({ x: b, y: y }) : { x: b, y: y };
        (b = w.x), (y = w.y);
        var x = h.hasOwnProperty('x'),
          E = h.hasOwnProperty('y'),
          A = r,
          O = t,
          k = window;
        if (p) {
          var T = U(o),
            S = 'clientHeight',
            $ = 'clientWidth';
          T === C(o) &&
            'static' !== R((T = q(o))).position &&
            'absolute' === d &&
            ((S = 'scrollHeight'), ($ = 'scrollWidth')),
            (l === t || ((l === r || l === s) && u === c)) &&
              ((O = i),
              (y -= (g && T === k && k.visualViewport ? k.visualViewport.height : T[S]) - a.height),
              (y *= f ? 1 : -1)),
            (l !== r && ((l !== t && l !== i) || u !== c)) ||
              ((A = s),
              (b -= (g && T === k && k.visualViewport ? k.visualViewport.width : T[$]) - a.width),
              (b *= f ? 1 : -1));
        }
        var D,
          F = Object.assign({ position: d }, p && G),
          j =
            !0 === m
              ? (function (e, t) {
                  var n = e.x,
                    i = e.y,
                    s = t.devicePixelRatio || 1;
                  return { x: P(n * s) / s || 0, y: P(i * s) / s || 0 };
                })({ x: b, y: y }, C(o))
              : { x: b, y: y };
        return (
          (b = j.x),
          (y = j.y),
          f
            ? Object.assign(
                {},
                F,
                (((D = {})[O] = E ? '0' : ''),
                (D[A] = x ? '0' : ''),
                (D.transform =
                  (k.devicePixelRatio || 1) <= 1
                    ? 'translate(' + b + 'px, ' + y + 'px)'
                    : 'translate3d(' + b + 'px, ' + y + 'px, 0)'),
                D),
              )
            : Object.assign(
                {},
                F,
                (((n = {})[O] = E ? y + 'px' : ''),
                (n[A] = x ? b + 'px' : ''),
                (n.transform = ''),
                n),
              )
        );
      }
      var te = {
          name: 'computeStyles',
          enabled: !0,
          phase: 'beforeWrite',
          fn: function (e) {
            var t = e.state,
              n = e.options,
              i = n.gpuAcceleration,
              s = void 0 === i || i,
              r = n.adaptive,
              o = void 0 === r || r,
              a = n.roundOffsets,
              l = void 0 === a || a,
              c = {
                placement: F(t.placement),
                variation: J(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: s,
                isFixed: 'fixed' === t.options.strategy,
              };
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                ee(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: o,
                    roundOffsets: l,
                  }),
                ),
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  {},
                  t.styles.arrow,
                  ee(
                    Object.assign({}, c, {
                      offsets: t.modifiersData.arrow,
                      position: 'absolute',
                      adaptive: !1,
                      roundOffsets: l,
                    }),
                  ),
                )),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                'data-popper-placement': t.placement,
              }));
          },
          data: {},
        },
        ne = { passive: !0 },
        ie = {
          name: 'eventListeners',
          enabled: !0,
          phase: 'write',
          fn: function () {},
          effect: function (e) {
            var t = e.state,
              n = e.instance,
              i = e.options,
              s = i.scroll,
              r = void 0 === s || s,
              o = i.resize,
              a = void 0 === o || o,
              l = C(t.elements.popper),
              c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return (
              r &&
                c.forEach(function (e) {
                  e.addEventListener('scroll', n.update, ne);
                }),
              a && l.addEventListener('resize', n.update, ne),
              function () {
                r &&
                  c.forEach(function (e) {
                    e.removeEventListener('scroll', n.update, ne);
                  }),
                  a && l.removeEventListener('resize', n.update, ne);
              }
            );
          },
          data: {},
        },
        se = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      function re(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return se[e];
        });
      }
      var oe = { start: 'end', end: 'start' };
      function ae(e) {
        return e.replace(/start|end/g, function (e) {
          return oe[e];
        });
      }
      function le(e) {
        var t = C(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function ce(e) {
        return N(q(e)).left + le(e).scrollLeft;
      }
      function ue(e) {
        var t = R(e),
          n = t.overflow,
          i = t.overflowX,
          s = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + s + i);
      }
      function he(e) {
        return ['html', 'body', '#document'].indexOf(k(e)) >= 0
          ? e.ownerDocument.body
          : S(e) && ue(e)
          ? e
          : he(W(e));
      }
      function de(e, t) {
        var n;
        void 0 === t && (t = []);
        var i = he(e),
          s = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
          r = C(i),
          o = s ? [r].concat(r.visualViewport || [], ue(i) ? i : []) : i,
          a = t.concat(o);
        return s ? a : a.concat(de(W(o)));
      }
      function fe(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function pe(e, t, n) {
        return t === h
          ? fe(
              (function (e, t) {
                var n = C(e),
                  i = q(e),
                  s = n.visualViewport,
                  r = i.clientWidth,
                  o = i.clientHeight,
                  a = 0,
                  l = 0;
                if (s) {
                  (r = s.width), (o = s.height);
                  var c = M();
                  (c || (!c && 'fixed' === t)) && ((a = s.offsetLeft), (l = s.offsetTop));
                }
                return { width: r, height: o, x: a + ce(e), y: l };
              })(e, n),
            )
          : T(t)
          ? (function (e, t) {
              var n = N(e, !1, 'fixed' === t);
              return (
                (n.top = n.top + e.clientTop),
                (n.left = n.left + e.clientLeft),
                (n.bottom = n.top + e.clientHeight),
                (n.right = n.left + e.clientWidth),
                (n.width = e.clientWidth),
                (n.height = e.clientHeight),
                (n.x = n.left),
                (n.y = n.top),
                n
              );
            })(t, n)
          : fe(
              (function (e) {
                var t,
                  n = q(e),
                  i = le(e),
                  s = null == (t = e.ownerDocument) ? void 0 : t.body,
                  r = j(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                  o = j(
                    n.scrollHeight,
                    n.clientHeight,
                    s ? s.scrollHeight : 0,
                    s ? s.clientHeight : 0,
                  ),
                  a = -i.scrollLeft + ce(e),
                  l = -i.scrollTop;
                return (
                  'rtl' === R(s || n).direction &&
                    (a += j(n.clientWidth, s ? s.clientWidth : 0) - r),
                  { width: r, height: o, x: a, y: l }
                );
              })(q(e)),
            );
      }
      function me(e) {
        var n,
          o = e.reference,
          a = e.element,
          u = e.placement,
          h = u ? F(u) : null,
          d = u ? J(u) : null,
          f = o.x + o.width / 2 - a.width / 2,
          p = o.y + o.height / 2 - a.height / 2;
        switch (h) {
          case t:
            n = { x: f, y: o.y - a.height };
            break;
          case i:
            n = { x: f, y: o.y + o.height };
            break;
          case s:
            n = { x: o.x + o.width, y: p };
            break;
          case r:
            n = { x: o.x - a.width, y: p };
            break;
          default:
            n = { x: o.x, y: o.y };
        }
        var m = h ? K(h) : null;
        if (null != m) {
          var g = 'y' === m ? 'height' : 'width';
          switch (d) {
            case l:
              n[m] = n[m] - (o[g] / 2 - a[g] / 2);
              break;
            case c:
              n[m] = n[m] + (o[g] / 2 - a[g] / 2);
          }
        }
        return n;
      }
      function ge(e, n) {
        void 0 === n && (n = {});
        var r = n,
          o = r.placement,
          l = void 0 === o ? e.placement : o,
          c = r.strategy,
          p = void 0 === c ? e.strategy : c,
          m = r.boundary,
          g = void 0 === m ? u : m,
          _ = r.rootBoundary,
          b = void 0 === _ ? h : _,
          v = r.elementContext,
          y = void 0 === v ? d : v,
          w = r.altBoundary,
          x = void 0 !== w && w,
          E = r.padding,
          A = void 0 === E ? 0 : E,
          O = Z('number' != typeof A ? A : Q(A, a)),
          C = y === d ? f : d,
          $ = e.rects.popper,
          D = e.elements[x ? C : y],
          F = (function (e, t, n, i) {
            var s =
                'clippingParents' === t
                  ? (function (e) {
                      var t = de(W(e)),
                        n = ['absolute', 'fixed'].indexOf(R(e).position) >= 0 && S(e) ? U(e) : e;
                      return T(n)
                        ? t.filter(function (e) {
                            return T(e) && z(e, n) && 'body' !== k(e);
                          })
                        : [];
                    })(e)
                  : [].concat(t),
              r = [].concat(s, [n]),
              o = r[0],
              a = r.reduce(function (t, n) {
                var s = pe(e, n, i);
                return (
                  (t.top = j(s.top, t.top)),
                  (t.right = L(s.right, t.right)),
                  (t.bottom = L(s.bottom, t.bottom)),
                  (t.left = j(s.left, t.left)),
                  t
                );
              }, pe(e, o, i));
            return (
              (a.width = a.right - a.left),
              (a.height = a.bottom - a.top),
              (a.x = a.left),
              (a.y = a.top),
              a
            );
          })(T(D) ? D : D.contextElement || q(e.elements.popper), g, b, p),
          P = N(e.elements.reference),
          I = me({ reference: P, element: $, strategy: 'absolute', placement: l }),
          M = fe(Object.assign({}, $, I)),
          V = y === d ? M : P,
          H = {
            top: F.top - V.top + O.top,
            bottom: V.bottom - F.bottom + O.bottom,
            left: F.left - V.left + O.left,
            right: V.right - F.right + O.right,
          },
          B = e.modifiersData.offset;
        if (y === d && B) {
          var K = B[l];
          Object.keys(H).forEach(function (e) {
            var n = [s, i].indexOf(e) >= 0 ? 1 : -1,
              r = [t, i].indexOf(e) >= 0 ? 'y' : 'x';
            H[e] += K[r] * n;
          });
        }
        return H;
      }
      var _e = {
        name: 'flip',
        enabled: !0,
        phase: 'main',
        fn: function (e) {
          var n = e.state,
            c = e.options,
            u = e.name;
          if (!n.modifiersData[u]._skip) {
            for (
              var h = c.mainAxis,
                d = void 0 === h || h,
                f = c.altAxis,
                g = void 0 === f || f,
                _ = c.fallbackPlacements,
                b = c.padding,
                v = c.boundary,
                y = c.rootBoundary,
                w = c.altBoundary,
                x = c.flipVariations,
                E = void 0 === x || x,
                A = c.allowedAutoPlacements,
                O = n.options.placement,
                k = F(O),
                C =
                  _ ||
                  (k !== O && E
                    ? (function (e) {
                        if (F(e) === o) return [];
                        var t = re(e);
                        return [ae(e), t, ae(t)];
                      })(O)
                    : [re(O)]),
                T = [O].concat(C).reduce(function (e, t) {
                  return e.concat(
                    F(t) === o
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var n = t,
                            i = n.placement,
                            s = n.boundary,
                            r = n.rootBoundary,
                            o = n.padding,
                            l = n.flipVariations,
                            c = n.allowedAutoPlacements,
                            u = void 0 === c ? m : c,
                            h = J(i),
                            d = h
                              ? l
                                ? p
                                : p.filter(function (e) {
                                    return J(e) === h;
                                  })
                              : a,
                            f = d.filter(function (e) {
                              return u.indexOf(e) >= 0;
                            });
                          0 === f.length && (f = d);
                          var g = f.reduce(function (t, n) {
                            return (
                              (t[n] = ge(e, {
                                placement: n,
                                boundary: s,
                                rootBoundary: r,
                                padding: o,
                              })[F(n)]),
                              t
                            );
                          }, {});
                          return Object.keys(g).sort(function (e, t) {
                            return g[e] - g[t];
                          });
                        })(n, {
                          placement: t,
                          boundary: v,
                          rootBoundary: y,
                          padding: b,
                          flipVariations: E,
                          allowedAutoPlacements: A,
                        })
                      : t,
                  );
                }, []),
                S = n.rects.reference,
                $ = n.rects.popper,
                D = new Map(),
                j = !0,
                L = T[0],
                P = 0;
              P < T.length;
              P++
            ) {
              var I = T[P],
                M = F(I),
                N = J(I) === l,
                V = [t, i].indexOf(M) >= 0,
                z = V ? 'width' : 'height',
                R = ge(n, {
                  placement: I,
                  boundary: v,
                  rootBoundary: y,
                  altBoundary: w,
                  padding: b,
                }),
                H = V ? (N ? s : r) : N ? i : t;
              S[z] > $[z] && (H = re(H));
              var q = re(H),
                W = [];
              if (
                (d && W.push(R[M] <= 0),
                g && W.push(R[H] <= 0, R[q] <= 0),
                W.every(function (e) {
                  return e;
                }))
              ) {
                (L = I), (j = !1);
                break;
              }
              D.set(I, W);
            }
            if (j)
              for (
                var B = function (e) {
                    var t = T.find(function (t) {
                      var n = D.get(t);
                      if (n)
                        return n.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (L = t), 'break';
                  },
                  U = E ? 3 : 1;
                U > 0 && 'break' !== B(U);
                U--
              );
            n.placement !== L &&
              ((n.modifiersData[u]._skip = !0), (n.placement = L), (n.reset = !0));
          }
        },
        requiresIfExists: ['offset'],
        data: { _skip: !1 },
      };
      function be(e, t, n) {
        return (
          void 0 === n && (n = { x: 0, y: 0 }),
          {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
          }
        );
      }
      function ve(e) {
        return [t, s, i, r].some(function (t) {
          return e[t] >= 0;
        });
      }
      var ye = {
          name: 'hide',
          enabled: !0,
          phase: 'main',
          requiresIfExists: ['preventOverflow'],
          fn: function (e) {
            var t = e.state,
              n = e.name,
              i = t.rects.reference,
              s = t.rects.popper,
              r = t.modifiersData.preventOverflow,
              o = ge(t, { elementContext: 'reference' }),
              a = ge(t, { altBoundary: !0 }),
              l = be(o, i),
              c = be(a, s, r),
              u = ve(l),
              h = ve(c);
            (t.modifiersData[n] = {
              referenceClippingOffsets: l,
              popperEscapeOffsets: c,
              isReferenceHidden: u,
              hasPopperEscaped: h,
            }),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                'data-popper-reference-hidden': u,
                'data-popper-escaped': h,
              }));
          },
        },
        we = {
          name: 'offset',
          enabled: !0,
          phase: 'main',
          requires: ['popperOffsets'],
          fn: function (e) {
            var n = e.state,
              i = e.options,
              o = e.name,
              a = i.offset,
              l = void 0 === a ? [0, 0] : a,
              c = m.reduce(function (e, i) {
                return (
                  (e[i] = (function (e, n, i) {
                    var o = F(e),
                      a = [r, t].indexOf(o) >= 0 ? -1 : 1,
                      l = 'function' == typeof i ? i(Object.assign({}, n, { placement: e })) : i,
                      c = l[0],
                      u = l[1];
                    return (
                      (c = c || 0),
                      (u = (u || 0) * a),
                      [r, s].indexOf(o) >= 0 ? { x: u, y: c } : { x: c, y: u }
                    );
                  })(i, n.rects, l)),
                  e
                );
              }, {}),
              u = c[n.placement],
              h = u.x,
              d = u.y;
            null != n.modifiersData.popperOffsets &&
              ((n.modifiersData.popperOffsets.x += h), (n.modifiersData.popperOffsets.y += d)),
              (n.modifiersData[o] = c);
          },
        },
        xe = {
          name: 'popperOffsets',
          enabled: !0,
          phase: 'read',
          fn: function (e) {
            var t = e.state,
              n = e.name;
            t.modifiersData[n] = me({
              reference: t.rects.reference,
              element: t.rects.popper,
              strategy: 'absolute',
              placement: t.placement,
            });
          },
          data: {},
        },
        Ee = {
          name: 'preventOverflow',
          enabled: !0,
          phase: 'main',
          fn: function (e) {
            var n = e.state,
              o = e.options,
              a = e.name,
              c = o.mainAxis,
              u = void 0 === c || c,
              h = o.altAxis,
              d = void 0 !== h && h,
              f = o.boundary,
              p = o.rootBoundary,
              m = o.altBoundary,
              g = o.padding,
              _ = o.tether,
              b = void 0 === _ || _,
              v = o.tetherOffset,
              y = void 0 === v ? 0 : v,
              w = ge(n, { boundary: f, rootBoundary: p, padding: g, altBoundary: m }),
              x = F(n.placement),
              E = J(n.placement),
              A = !E,
              O = K(x),
              k = 'x' === O ? 'y' : 'x',
              C = n.modifiersData.popperOffsets,
              T = n.rects.reference,
              S = n.rects.popper,
              $ =
                'function' == typeof y
                  ? y(Object.assign({}, n.rects, { placement: n.placement }))
                  : y,
              D =
                'number' == typeof $
                  ? { mainAxis: $, altAxis: $ }
                  : Object.assign({ mainAxis: 0, altAxis: 0 }, $),
              P = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null,
              I = { x: 0, y: 0 };
            if (C) {
              if (u) {
                var M,
                  N = 'y' === O ? t : r,
                  z = 'y' === O ? i : s,
                  R = 'y' === O ? 'height' : 'width',
                  H = C[O],
                  q = H + w[N],
                  W = H - w[z],
                  B = b ? -S[R] / 2 : 0,
                  Z = E === l ? T[R] : S[R],
                  Q = E === l ? -S[R] : -T[R],
                  X = n.elements.arrow,
                  G = b && X ? V(X) : { width: 0, height: 0 },
                  ee = n.modifiersData['arrow#persistent']
                    ? n.modifiersData['arrow#persistent'].padding
                    : { top: 0, right: 0, bottom: 0, left: 0 },
                  te = ee[N],
                  ne = ee[z],
                  ie = Y(0, T[R], G[R]),
                  se = A ? T[R] / 2 - B - ie - te - D.mainAxis : Z - ie - te - D.mainAxis,
                  re = A ? -T[R] / 2 + B + ie + ne + D.mainAxis : Q + ie + ne + D.mainAxis,
                  oe = n.elements.arrow && U(n.elements.arrow),
                  ae = oe ? ('y' === O ? oe.clientTop || 0 : oe.clientLeft || 0) : 0,
                  le = null != (M = null == P ? void 0 : P[O]) ? M : 0,
                  ce = H + re - le,
                  ue = Y(b ? L(q, H + se - le - ae) : q, H, b ? j(W, ce) : W);
                (C[O] = ue), (I[O] = ue - H);
              }
              if (d) {
                var he,
                  de = 'x' === O ? t : r,
                  fe = 'x' === O ? i : s,
                  pe = C[k],
                  me = 'y' === k ? 'height' : 'width',
                  _e = pe + w[de],
                  be = pe - w[fe],
                  ve = -1 !== [t, r].indexOf(x),
                  ye = null != (he = null == P ? void 0 : P[k]) ? he : 0,
                  we = ve ? _e : pe - T[me] - S[me] - ye + D.altAxis,
                  xe = ve ? pe + T[me] + S[me] - ye - D.altAxis : be,
                  Ee =
                    b && ve
                      ? (function (e, t, n) {
                          var i = Y(e, t, n);
                          return i > n ? n : i;
                        })(we, pe, xe)
                      : Y(b ? we : _e, pe, b ? xe : be);
                (C[k] = Ee), (I[k] = Ee - pe);
              }
              n.modifiersData[a] = I;
            }
          },
          requiresIfExists: ['offset'],
        };
      function Ae(e, t, n) {
        void 0 === n && (n = !1);
        var i,
          s,
          r = S(t),
          o =
            S(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                n = P(t.width) / e.offsetWidth || 1,
                i = P(t.height) / e.offsetHeight || 1;
              return 1 !== n || 1 !== i;
            })(t),
          a = q(t),
          l = N(e, o, n),
          c = { scrollLeft: 0, scrollTop: 0 },
          u = { x: 0, y: 0 };
        return (
          (r || (!r && !n)) &&
            (('body' !== k(t) || ue(a)) &&
              (c =
                (i = t) !== C(i) && S(i)
                  ? { scrollLeft: (s = i).scrollLeft, scrollTop: s.scrollTop }
                  : le(i)),
            S(t) ? (((u = N(t, !0)).x += t.clientLeft), (u.y += t.clientTop)) : a && (u.x = ce(a))),
          {
            x: l.left + c.scrollLeft - u.x,
            y: l.top + c.scrollTop - u.y,
            width: l.width,
            height: l.height,
          }
        );
      }
      function Oe(e) {
        var t = new Map(),
          n = new Set(),
          i = [];
        function s(e) {
          n.add(e.name),
            [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
              if (!n.has(e)) {
                var i = t.get(e);
                i && s(i);
              }
            }),
            i.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            n.has(e.name) || s(e);
          }),
          i
        );
      }
      var ke = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
      function Ce() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return !t.some(function (e) {
          return !(e && 'function' == typeof e.getBoundingClientRect);
        });
      }
      function Te(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.defaultModifiers,
          i = void 0 === n ? [] : n,
          s = t.defaultOptions,
          r = void 0 === s ? ke : s;
        return function (e, t, n) {
          void 0 === n && (n = r);
          var s,
            o,
            a = {
              placement: 'bottom',
              orderedModifiers: [],
              options: Object.assign({}, ke, r),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            l = [],
            c = !1,
            u = {
              state: a,
              setOptions: function (n) {
                var s = 'function' == typeof n ? n(a.options) : n;
                h(),
                  (a.options = Object.assign({}, r, a.options, s)),
                  (a.scrollParents = {
                    reference: T(e) ? de(e) : e.contextElement ? de(e.contextElement) : [],
                    popper: de(t),
                  });
                var o,
                  c,
                  d = (function (e) {
                    var t = Oe(e);
                    return O.reduce(function (e, n) {
                      return e.concat(
                        t.filter(function (e) {
                          return e.phase === n;
                        }),
                      );
                    }, []);
                  })(
                    ((o = [].concat(i, a.options.modifiers)),
                    (c = o.reduce(function (e, t) {
                      var n = e[t.name];
                      return (
                        (e[t.name] = n
                          ? Object.assign({}, n, t, {
                              options: Object.assign({}, n.options, t.options),
                              data: Object.assign({}, n.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {})),
                    Object.keys(c).map(function (e) {
                      return c[e];
                    })),
                  );
                return (
                  (a.orderedModifiers = d.filter(function (e) {
                    return e.enabled;
                  })),
                  a.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      n = e.options,
                      i = void 0 === n ? {} : n,
                      s = e.effect;
                    if ('function' == typeof s) {
                      var r = s({ state: a, name: t, instance: u, options: i });
                      l.push(r || function () {});
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = a.elements,
                    t = e.reference,
                    n = e.popper;
                  if (Ce(t, n)) {
                    (a.rects = {
                      reference: Ae(t, U(n), 'fixed' === a.options.strategy),
                      popper: V(n),
                    }),
                      (a.reset = !1),
                      (a.placement = a.options.placement),
                      a.orderedModifiers.forEach(function (e) {
                        return (a.modifiersData[e.name] = Object.assign({}, e.data));
                      });
                    for (var i = 0; i < a.orderedModifiers.length; i++)
                      if (!0 !== a.reset) {
                        var s = a.orderedModifiers[i],
                          r = s.fn,
                          o = s.options,
                          l = void 0 === o ? {} : o,
                          h = s.name;
                        'function' == typeof r &&
                          (a = r({ state: a, options: l, name: h, instance: u }) || a);
                      } else (a.reset = !1), (i = -1);
                  }
                }
              },
              update:
                ((s = function () {
                  return new Promise(function (e) {
                    u.forceUpdate(), e(a);
                  });
                }),
                function () {
                  return (
                    o ||
                      (o = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (o = void 0), e(s());
                        });
                      })),
                    o
                  );
                }),
              destroy: function () {
                h(), (c = !0);
              },
            };
          if (!Ce(e, t)) return u;
          function h() {
            l.forEach(function (e) {
              return e();
            }),
              (l = []);
          }
          return (
            u.setOptions(n).then(function (e) {
              !c && n.onFirstUpdate && n.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var Se = Te(),
        $e = Te({ defaultModifiers: [ie, xe, te, D, we, _e, Ee, X, ye] }),
        De = Te({ defaultModifiers: [ie, xe, te, D] });
      const Fe = new Map(),
        je = {
          set(e, t, n) {
            Fe.has(e) || Fe.set(e, new Map());
            const i = Fe.get(e);
            i.has(t) || 0 === i.size
              ? i.set(t, n)
              : console.error(
                  `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                    Array.from(i.keys())[0]
                  }.`,
                );
          },
          get(e, t) {
            return (Fe.has(e) && Fe.get(e).get(t)) || null;
          },
          remove(e, t) {
            if (!Fe.has(e)) return;
            const n = Fe.get(e);
            n.delete(t), 0 === n.size && Fe.delete(e);
          },
        },
        Le = 'transitionend',
        Pe = (e) => (
          e &&
            window.CSS &&
            window.CSS.escape &&
            (e = e.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)),
          e
        ),
        Ie = (e) =>
          null == e
            ? `${e}`
            : Object.prototype.toString
                .call(e)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase(),
        Me = (e) => {
          e.dispatchEvent(new Event(Le));
        },
        Ne = (e) =>
          !(!e || 'object' != typeof e) &&
          (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
        Ve = (e) =>
          Ne(e)
            ? e.jquery
              ? e[0]
              : e
            : 'string' == typeof e && e.length > 0
            ? document.querySelector(Pe(e))
            : null,
        ze = (e) => {
          if (!Ne(e) || 0 === e.getClientRects().length) return !1;
          const t = 'visible' === getComputedStyle(e).getPropertyValue('visibility'),
            n = e.closest('details:not([open])');
          if (!n) return t;
          if (n !== e) {
            const t = e.closest('summary');
            if (t && t.parentNode !== n) return !1;
            if (null === t) return !1;
          }
          return t;
        },
        Re = (e) =>
          !e ||
          e.nodeType !== Node.ELEMENT_NODE ||
          !!e.classList.contains('disabled') ||
          (void 0 !== e.disabled
            ? e.disabled
            : e.hasAttribute('disabled') && 'false' !== e.getAttribute('disabled')),
        He = (e) => {
          if (!document.documentElement.attachShadow) return null;
          if ('function' == typeof e.getRootNode) {
            const t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null;
          }
          return e instanceof ShadowRoot ? e : e.parentNode ? He(e.parentNode) : null;
        },
        qe = () => {},
        We = (e) => {
          e.offsetHeight;
        },
        Be = () =>
          window.jQuery && !document.body.hasAttribute('data-bs-no-jquery') ? window.jQuery : null,
        Ue = [],
        Ke = () => 'rtl' === document.documentElement.dir,
        Ye = (e) => {
          var t;
          (t = () => {
            const t = Be();
            if (t) {
              const n = e.NAME,
                i = t.fn[n];
              (t.fn[n] = e.jQueryInterface),
                (t.fn[n].Constructor = e),
                (t.fn[n].noConflict = () => ((t.fn[n] = i), e.jQueryInterface));
            }
          }),
            'loading' === document.readyState
              ? (Ue.length ||
                  document.addEventListener('DOMContentLoaded', () => {
                    for (const e of Ue) e();
                  }),
                Ue.push(t))
              : t();
        },
        Ze = (e, t = [], n = e) => ('function' == typeof e ? e(...t) : n),
        Qe = (e, t, n = !0) => {
          if (!n) return void Ze(e);
          const i =
            ((e) => {
              if (!e) return 0;
              let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
              const i = Number.parseFloat(t),
                s = Number.parseFloat(n);
              return i || s
                ? ((t = t.split(',')[0]),
                  (n = n.split(',')[0]),
                  1e3 * (Number.parseFloat(t) + Number.parseFloat(n)))
                : 0;
            })(t) + 5;
          let s = !1;
          const r = ({ target: n }) => {
            n === t && ((s = !0), t.removeEventListener(Le, r), Ze(e));
          };
          t.addEventListener(Le, r),
            setTimeout(() => {
              s || Me(t);
            }, i);
        },
        Xe = (e, t, n, i) => {
          const s = e.length;
          let r = e.indexOf(t);
          return -1 === r
            ? !n && i
              ? e[s - 1]
              : e[0]
            : ((r += n ? 1 : -1), i && (r = (r + s) % s), e[Math.max(0, Math.min(r, s - 1))]);
        },
        Je = /[^.]*(?=\..*)\.|.*/,
        Ge = /\..*/,
        et = /::\d+$/,
        tt = {};
      let nt = 1;
      const it = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
        st = new Set([
          'click',
          'dblclick',
          'mouseup',
          'mousedown',
          'contextmenu',
          'mousewheel',
          'DOMMouseScroll',
          'mouseover',
          'mouseout',
          'mousemove',
          'selectstart',
          'selectend',
          'keydown',
          'keypress',
          'keyup',
          'orientationchange',
          'touchstart',
          'touchmove',
          'touchend',
          'touchcancel',
          'pointerdown',
          'pointermove',
          'pointerup',
          'pointerleave',
          'pointercancel',
          'gesturestart',
          'gesturechange',
          'gestureend',
          'focus',
          'blur',
          'change',
          'reset',
          'select',
          'submit',
          'focusin',
          'focusout',
          'load',
          'unload',
          'beforeunload',
          'resize',
          'move',
          'DOMContentLoaded',
          'readystatechange',
          'error',
          'abort',
          'scroll',
        ]);
      function rt(e, t) {
        return (t && `${t}::${nt++}`) || e.uidEvent || nt++;
      }
      function ot(e) {
        const t = rt(e);
        return (e.uidEvent = t), (tt[t] = tt[t] || {}), tt[t];
      }
      function at(e, t, n = null) {
        return Object.values(e).find((e) => e.callable === t && e.delegationSelector === n);
      }
      function lt(e, t, n) {
        const i = 'string' == typeof t,
          s = i ? n : t || n;
        let r = dt(e);
        return st.has(r) || (r = e), [i, s, r];
      }
      function ct(e, t, n, i, s) {
        if ('string' != typeof t || !e) return;
        let [r, o, a] = lt(t, n, i);
        if (t in it) {
          const e = (e) =>
            function (t) {
              if (
                !t.relatedTarget ||
                (t.relatedTarget !== t.delegateTarget &&
                  !t.delegateTarget.contains(t.relatedTarget))
              )
                return e.call(this, t);
            };
          o = e(o);
        }
        const l = ot(e),
          c = l[a] || (l[a] = {}),
          u = at(c, o, r ? n : null);
        if (u) return void (u.oneOff = u.oneOff && s);
        const h = rt(o, t.replace(Je, '')),
          d = r
            ? (function (e, t, n) {
                return function i(s) {
                  const r = e.querySelectorAll(t);
                  for (let { target: o } = s; o && o !== this; o = o.parentNode)
                    for (const a of r)
                      if (a === o)
                        return (
                          pt(s, { delegateTarget: o }),
                          i.oneOff && ft.off(e, s.type, t, n),
                          n.apply(o, [s])
                        );
                };
              })(e, n, o)
            : (function (e, t) {
                return function n(i) {
                  return (
                    pt(i, { delegateTarget: e }), n.oneOff && ft.off(e, i.type, t), t.apply(e, [i])
                  );
                };
              })(e, o);
        (d.delegationSelector = r ? n : null),
          (d.callable = o),
          (d.oneOff = s),
          (d.uidEvent = h),
          (c[h] = d),
          e.addEventListener(a, d, r);
      }
      function ut(e, t, n, i, s) {
        const r = at(t[n], i, s);
        r && (e.removeEventListener(n, r, Boolean(s)), delete t[n][r.uidEvent]);
      }
      function ht(e, t, n, i) {
        const s = t[n] || {};
        for (const [r, o] of Object.entries(s))
          r.includes(i) && ut(e, t, n, o.callable, o.delegationSelector);
      }
      function dt(e) {
        return (e = e.replace(Ge, '')), it[e] || e;
      }
      const ft = {
        on(e, t, n, i) {
          ct(e, t, n, i, !1);
        },
        one(e, t, n, i) {
          ct(e, t, n, i, !0);
        },
        off(e, t, n, i) {
          if ('string' != typeof t || !e) return;
          const [s, r, o] = lt(t, n, i),
            a = o !== t,
            l = ot(e),
            c = l[o] || {},
            u = t.startsWith('.');
          if (void 0 === r) {
            if (u) for (const n of Object.keys(l)) ht(e, l, n, t.slice(1));
            for (const [n, i] of Object.entries(c)) {
              const s = n.replace(et, '');
              (a && !t.includes(s)) || ut(e, l, o, i.callable, i.delegationSelector);
            }
          } else {
            if (!Object.keys(c).length) return;
            ut(e, l, o, r, s ? n : null);
          }
        },
        trigger(e, t, n) {
          if ('string' != typeof t || !e) return null;
          const i = Be();
          let s = null,
            r = !0,
            o = !0,
            a = !1;
          t !== dt(t) &&
            i &&
            ((s = i.Event(t, n)),
            i(e).trigger(s),
            (r = !s.isPropagationStopped()),
            (o = !s.isImmediatePropagationStopped()),
            (a = s.isDefaultPrevented()));
          const l = pt(new Event(t, { bubbles: r, cancelable: !0 }), n);
          return (
            a && l.preventDefault(),
            o && e.dispatchEvent(l),
            l.defaultPrevented && s && s.preventDefault(),
            l
          );
        },
      };
      function pt(e, t = {}) {
        for (const [n, i] of Object.entries(t))
          try {
            e[n] = i;
          } catch (t) {
            Object.defineProperty(e, n, {
              configurable: !0,
              get() {
                return i;
              },
            });
          }
        return e;
      }
      function mt(e) {
        if ('true' === e) return !0;
        if ('false' === e) return !1;
        if (e === Number(e).toString()) return Number(e);
        if ('' === e || 'null' === e) return null;
        if ('string' != typeof e) return e;
        try {
          return JSON.parse(decodeURIComponent(e));
        } catch (t) {
          return e;
        }
      }
      function gt(e) {
        return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
      }
      const _t = {
        setDataAttribute(e, t, n) {
          e.setAttribute(`data-bs-${gt(t)}`, n);
        },
        removeDataAttribute(e, t) {
          e.removeAttribute(`data-bs-${gt(t)}`);
        },
        getDataAttributes(e) {
          if (!e) return {};
          const t = {},
            n = Object.keys(e.dataset).filter(
              (e) => e.startsWith('bs') && !e.startsWith('bsConfig'),
            );
          for (const i of n) {
            let n = i.replace(/^bs/, '');
            (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)), (t[n] = mt(e.dataset[i]));
          }
          return t;
        },
        getDataAttribute(e, t) {
          return mt(e.getAttribute(`data-bs-${gt(t)}`));
        },
      };
      class bt {
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(e) {
          return (
            (e = this._mergeConfigObj(e)),
            (e = this._configAfterMerge(e)),
            this._typeCheckConfig(e),
            e
          );
        }
        _configAfterMerge(e) {
          return e;
        }
        _mergeConfigObj(e, t) {
          const n = Ne(t) ? _t.getDataAttribute(t, 'config') : {};
          return {
            ...this.constructor.Default,
            ...('object' == typeof n ? n : {}),
            ...(Ne(t) ? _t.getDataAttributes(t) : {}),
            ...('object' == typeof e ? e : {}),
          };
        }
        _typeCheckConfig(e, t = this.constructor.DefaultType) {
          for (const [n, i] of Object.entries(t)) {
            const t = e[n],
              s = Ne(t) ? 'element' : Ie(t);
            if (!new RegExp(i).test(s))
              throw new TypeError(
                `${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${s}" but expected type "${i}".`,
              );
          }
        }
      }
      class vt extends bt {
        constructor(e, t) {
          super(),
            (e = Ve(e)) &&
              ((this._element = e),
              (this._config = this._getConfig(t)),
              je.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
          je.remove(this._element, this.constructor.DATA_KEY),
            ft.off(this._element, this.constructor.EVENT_KEY);
          for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
        }
        _queueCallback(e, t, n = !0) {
          Qe(e, t, n);
        }
        _getConfig(e) {
          return (
            (e = this._mergeConfigObj(e, this._element)),
            (e = this._configAfterMerge(e)),
            this._typeCheckConfig(e),
            e
          );
        }
        static getInstance(e) {
          return je.get(Ve(e), this.DATA_KEY);
        }
        static getOrCreateInstance(e, t = {}) {
          return this.getInstance(e) || new this(e, 'object' == typeof t ? t : null);
        }
        static get VERSION() {
          return '5.3.1';
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
        static eventName(e) {
          return `${e}${this.EVENT_KEY}`;
        }
      }
      const yt = (e) => {
          let t = e.getAttribute('data-bs-target');
          if (!t || '#' === t) {
            let n = e.getAttribute('href');
            if (!n || (!n.includes('#') && !n.startsWith('.'))) return null;
            n.includes('#') && !n.startsWith('#') && (n = `#${n.split('#')[1]}`),
              (t = n && '#' !== n ? n.trim() : null);
          }
          return Pe(t);
        },
        wt = {
          find(e, t = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(t, e));
          },
          findOne(e, t = document.documentElement) {
            return Element.prototype.querySelector.call(t, e);
          },
          children(e, t) {
            return [].concat(...e.children).filter((e) => e.matches(t));
          },
          parents(e, t) {
            const n = [];
            let i = e.parentNode.closest(t);
            for (; i; ) n.push(i), (i = i.parentNode.closest(t));
            return n;
          },
          prev(e, t) {
            let n = e.previousElementSibling;
            for (; n; ) {
              if (n.matches(t)) return [n];
              n = n.previousElementSibling;
            }
            return [];
          },
          next(e, t) {
            let n = e.nextElementSibling;
            for (; n; ) {
              if (n.matches(t)) return [n];
              n = n.nextElementSibling;
            }
            return [];
          },
          focusableChildren(e) {
            const t = [
              'a',
              'button',
              'input',
              'textarea',
              'select',
              'details',
              '[tabindex]',
              '[contenteditable="true"]',
            ]
              .map((e) => `${e}:not([tabindex^="-"])`)
              .join(',');
            return this.find(t, e).filter((e) => !Re(e) && ze(e));
          },
          getSelectorFromElement(e) {
            const t = yt(e);
            return t && wt.findOne(t) ? t : null;
          },
          getElementFromSelector(e) {
            const t = yt(e);
            return t ? wt.findOne(t) : null;
          },
          getMultipleElementsFromSelector(e) {
            const t = yt(e);
            return t ? wt.find(t) : [];
          },
        },
        xt = (e, t = 'hide') => {
          const n = `click.dismiss${e.EVENT_KEY}`,
            i = e.NAME;
          ft.on(document, n, `[data-bs-dismiss="${i}"]`, function (n) {
            if ((['A', 'AREA'].includes(this.tagName) && n.preventDefault(), Re(this))) return;
            const s = wt.getElementFromSelector(this) || this.closest(`.${i}`);
            e.getOrCreateInstance(s)[t]();
          });
        },
        Et = '.bs.alert',
        At = `close${Et}`,
        Ot = `closed${Et}`;
      class kt extends vt {
        static get NAME() {
          return 'alert';
        }
        close() {
          if (ft.trigger(this._element, At).defaultPrevented) return;
          this._element.classList.remove('show');
          const e = this._element.classList.contains('fade');
          this._queueCallback(() => this._destroyElement(), this._element, e);
        }
        _destroyElement() {
          this._element.remove(), ft.trigger(this._element, Ot), this.dispose();
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = kt.getOrCreateInstance(this);
            if ('string' == typeof e) {
              if (void 0 === t[e] || e.startsWith('_') || 'constructor' === e)
                throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      xt(kt, 'close'), Ye(kt);
      const Ct = '[data-bs-toggle="button"]';
      class Tt extends vt {
        static get NAME() {
          return 'button';
        }
        toggle() {
          this._element.setAttribute('aria-pressed', this._element.classList.toggle('active'));
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Tt.getOrCreateInstance(this);
            'toggle' === e && t[e]();
          });
        }
      }
      ft.on(document, 'click.bs.button.data-api', Ct, (e) => {
        e.preventDefault();
        const t = e.target.closest(Ct);
        Tt.getOrCreateInstance(t).toggle();
      }),
        Ye(Tt);
      const St = '.bs.swipe',
        $t = `touchstart${St}`,
        Dt = `touchmove${St}`,
        Ft = `touchend${St}`,
        jt = `pointerdown${St}`,
        Lt = `pointerup${St}`,
        Pt = { endCallback: null, leftCallback: null, rightCallback: null },
        It = {
          endCallback: '(function|null)',
          leftCallback: '(function|null)',
          rightCallback: '(function|null)',
        };
      class Mt extends bt {
        constructor(e, t) {
          super(),
            (this._element = e),
            e &&
              Mt.isSupported() &&
              ((this._config = this._getConfig(t)),
              (this._deltaX = 0),
              (this._supportPointerEvents = Boolean(window.PointerEvent)),
              this._initEvents());
        }
        static get Default() {
          return Pt;
        }
        static get DefaultType() {
          return It;
        }
        static get NAME() {
          return 'swipe';
        }
        dispose() {
          ft.off(this._element, St);
        }
        _start(e) {
          this._supportPointerEvents
            ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
            : (this._deltaX = e.touches[0].clientX);
        }
        _end(e) {
          this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX),
            this._handleSwipe(),
            Ze(this._config.endCallback);
        }
        _move(e) {
          this._deltaX =
            e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
          const e = Math.abs(this._deltaX);
          if (e <= 40) return;
          const t = e / this._deltaX;
          (this._deltaX = 0),
            t && Ze(t > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
          this._supportPointerEvents
            ? (ft.on(this._element, jt, (e) => this._start(e)),
              ft.on(this._element, Lt, (e) => this._end(e)),
              this._element.classList.add('pointer-event'))
            : (ft.on(this._element, $t, (e) => this._start(e)),
              ft.on(this._element, Dt, (e) => this._move(e)),
              ft.on(this._element, Ft, (e) => this._end(e)));
        }
        _eventIsPointerPenTouch(e) {
          return (
            this._supportPointerEvents && ('pen' === e.pointerType || 'touch' === e.pointerType)
          );
        }
        static isSupported() {
          return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
        }
      }
      const Nt = '.bs.carousel',
        Vt = '.data-api',
        zt = 'next',
        Rt = 'prev',
        Ht = 'left',
        qt = 'right',
        Wt = `slide${Nt}`,
        Bt = `slid${Nt}`,
        Ut = `keydown${Nt}`,
        Kt = `mouseenter${Nt}`,
        Yt = `mouseleave${Nt}`,
        Zt = `dragstart${Nt}`,
        Qt = `load${Nt}${Vt}`,
        Xt = `click${Nt}${Vt}`,
        Jt = 'carousel',
        Gt = 'active',
        en = '.active',
        tn = '.carousel-item',
        nn = en + tn,
        sn = { ArrowLeft: qt, ArrowRight: Ht },
        rn = { interval: 5e3, keyboard: !0, pause: 'hover', ride: !1, touch: !0, wrap: !0 },
        on = {
          interval: '(number|boolean)',
          keyboard: 'boolean',
          pause: '(string|boolean)',
          ride: '(boolean|string)',
          touch: 'boolean',
          wrap: 'boolean',
        };
      class an extends vt {
        constructor(e, t) {
          super(e, t),
            (this._interval = null),
            (this._activeElement = null),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._swipeHelper = null),
            (this._indicatorsElement = wt.findOne('.carousel-indicators', this._element)),
            this._addEventListeners(),
            this._config.ride === Jt && this.cycle();
        }
        static get Default() {
          return rn;
        }
        static get DefaultType() {
          return on;
        }
        static get NAME() {
          return 'carousel';
        }
        next() {
          this._slide(zt);
        }
        nextWhenVisible() {
          !document.hidden && ze(this._element) && this.next();
        }
        prev() {
          this._slide(Rt);
        }
        pause() {
          this._isSliding && Me(this._element), this._clearInterval();
        }
        cycle() {
          this._clearInterval(),
            this._updateInterval(),
            (this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval));
        }
        _maybeEnableCycle() {
          this._config.ride &&
            (this._isSliding ? ft.one(this._element, Bt, () => this.cycle()) : this.cycle());
        }
        to(e) {
          const t = this._getItems();
          if (e > t.length - 1 || e < 0) return;
          if (this._isSliding) return void ft.one(this._element, Bt, () => this.to(e));
          const n = this._getItemIndex(this._getActive());
          if (n === e) return;
          const i = e > n ? zt : Rt;
          this._slide(i, t[e]);
        }
        dispose() {
          this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(e) {
          return (e.defaultInterval = e.interval), e;
        }
        _addEventListeners() {
          this._config.keyboard && ft.on(this._element, Ut, (e) => this._keydown(e)),
            'hover' === this._config.pause &&
              (ft.on(this._element, Kt, () => this.pause()),
              ft.on(this._element, Yt, () => this._maybeEnableCycle())),
            this._config.touch && Mt.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
          for (const e of wt.find('.carousel-item img', this._element))
            ft.on(e, Zt, (e) => e.preventDefault());
          const e = {
            leftCallback: () => this._slide(this._directionToOrder(Ht)),
            rightCallback: () => this._slide(this._directionToOrder(qt)),
            endCallback: () => {
              'hover' === this._config.pause &&
                (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                (this.touchTimeout = setTimeout(
                  () => this._maybeEnableCycle(),
                  500 + this._config.interval,
                )));
            },
          };
          this._swipeHelper = new Mt(this._element, e);
        }
        _keydown(e) {
          if (/input|textarea/i.test(e.target.tagName)) return;
          const t = sn[e.key];
          t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
        }
        _getItemIndex(e) {
          return this._getItems().indexOf(e);
        }
        _setActiveIndicatorElement(e) {
          if (!this._indicatorsElement) return;
          const t = wt.findOne(en, this._indicatorsElement);
          t.classList.remove(Gt), t.removeAttribute('aria-current');
          const n = wt.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
          n && (n.classList.add(Gt), n.setAttribute('aria-current', 'true'));
        }
        _updateInterval() {
          const e = this._activeElement || this._getActive();
          if (!e) return;
          const t = Number.parseInt(e.getAttribute('data-bs-interval'), 10);
          this._config.interval = t || this._config.defaultInterval;
        }
        _slide(e, t = null) {
          if (this._isSliding) return;
          const n = this._getActive(),
            i = e === zt,
            s = t || Xe(this._getItems(), n, i, this._config.wrap);
          if (s === n) return;
          const r = this._getItemIndex(s),
            o = (t) =>
              ft.trigger(this._element, t, {
                relatedTarget: s,
                direction: this._orderToDirection(e),
                from: this._getItemIndex(n),
                to: r,
              });
          if (o(Wt).defaultPrevented) return;
          if (!n || !s) return;
          const a = Boolean(this._interval);
          this.pause(),
            (this._isSliding = !0),
            this._setActiveIndicatorElement(r),
            (this._activeElement = s);
          const l = i ? 'carousel-item-start' : 'carousel-item-end',
            c = i ? 'carousel-item-next' : 'carousel-item-prev';
          s.classList.add(c),
            We(s),
            n.classList.add(l),
            s.classList.add(l),
            this._queueCallback(
              () => {
                s.classList.remove(l, c),
                  s.classList.add(Gt),
                  n.classList.remove(Gt, c, l),
                  (this._isSliding = !1),
                  o(Bt);
              },
              n,
              this._isAnimated(),
            ),
            a && this.cycle();
        }
        _isAnimated() {
          return this._element.classList.contains('slide');
        }
        _getActive() {
          return wt.findOne(nn, this._element);
        }
        _getItems() {
          return wt.find(tn, this._element);
        }
        _clearInterval() {
          this._interval && (clearInterval(this._interval), (this._interval = null));
        }
        _directionToOrder(e) {
          return Ke() ? (e === Ht ? Rt : zt) : e === Ht ? zt : Rt;
        }
        _orderToDirection(e) {
          return Ke() ? (e === Rt ? Ht : qt) : e === Rt ? qt : Ht;
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = an.getOrCreateInstance(this, e);
            if ('number' != typeof e) {
              if ('string' == typeof e) {
                if (void 0 === t[e] || e.startsWith('_') || 'constructor' === e)
                  throw new TypeError(`No method named "${e}"`);
                t[e]();
              }
            } else t.to(e);
          });
        }
      }
      ft.on(document, Xt, '[data-bs-slide], [data-bs-slide-to]', function (e) {
        const t = wt.getElementFromSelector(this);
        if (!t || !t.classList.contains(Jt)) return;
        e.preventDefault();
        const n = an.getOrCreateInstance(t),
          i = this.getAttribute('data-bs-slide-to');
        return i
          ? (n.to(i), void n._maybeEnableCycle())
          : 'next' === _t.getDataAttribute(this, 'slide')
          ? (n.next(), void n._maybeEnableCycle())
          : (n.prev(), void n._maybeEnableCycle());
      }),
        ft.on(window, Qt, () => {
          const e = wt.find('[data-bs-ride="carousel"]');
          for (const t of e) an.getOrCreateInstance(t);
        }),
        Ye(an);
      const ln = '.bs.collapse',
        cn = `show${ln}`,
        un = `shown${ln}`,
        hn = `hide${ln}`,
        dn = `hidden${ln}`,
        fn = `click${ln}.data-api`,
        pn = 'show',
        mn = 'collapse',
        gn = 'collapsing',
        _n = `:scope .${mn} .${mn}`,
        bn = '[data-bs-toggle="collapse"]',
        vn = { parent: null, toggle: !0 },
        yn = { parent: '(null|element)', toggle: 'boolean' };
      class wn extends vt {
        constructor(e, t) {
          super(e, t), (this._isTransitioning = !1), (this._triggerArray = []);
          const n = wt.find(bn);
          for (const e of n) {
            const t = wt.getSelectorFromElement(e),
              n = wt.find(t).filter((e) => e === this._element);
            null !== t && n.length && this._triggerArray.push(e);
          }
          this._initializeChildren(),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle();
        }
        static get Default() {
          return vn;
        }
        static get DefaultType() {
          return yn;
        }
        static get NAME() {
          return 'collapse';
        }
        toggle() {
          this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (this._isTransitioning || this._isShown()) return;
          let e = [];
          if (
            (this._config.parent &&
              (e = this._getFirstLevelChildren('.collapse.show, .collapse.collapsing')
                .filter((e) => e !== this._element)
                .map((e) => wn.getOrCreateInstance(e, { toggle: !1 }))),
            e.length && e[0]._isTransitioning)
          )
            return;
          if (ft.trigger(this._element, cn).defaultPrevented) return;
          for (const t of e) t.hide();
          const t = this._getDimension();
          this._element.classList.remove(mn),
            this._element.classList.add(gn),
            (this._element.style[t] = 0),
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            (this._isTransitioning = !0);
          const n = `scroll${t[0].toUpperCase() + t.slice(1)}`;
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove(gn),
                this._element.classList.add(mn, pn),
                (this._element.style[t] = ''),
                ft.trigger(this._element, un);
            },
            this._element,
            !0,
          ),
            (this._element.style[t] = `${this._element[n]}px`);
        }
        hide() {
          if (this._isTransitioning || !this._isShown()) return;
          if (ft.trigger(this._element, hn).defaultPrevented) return;
          const e = this._getDimension();
          (this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`),
            We(this._element),
            this._element.classList.add(gn),
            this._element.classList.remove(mn, pn);
          for (const e of this._triggerArray) {
            const t = wt.getElementFromSelector(e);
            t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1);
          }
          (this._isTransitioning = !0),
            (this._element.style[e] = ''),
            this._queueCallback(
              () => {
                (this._isTransitioning = !1),
                  this._element.classList.remove(gn),
                  this._element.classList.add(mn),
                  ft.trigger(this._element, dn);
              },
              this._element,
              !0,
            );
        }
        _isShown(e = this._element) {
          return e.classList.contains(pn);
        }
        _configAfterMerge(e) {
          return (e.toggle = Boolean(e.toggle)), (e.parent = Ve(e.parent)), e;
        }
        _getDimension() {
          return this._element.classList.contains('collapse-horizontal') ? 'width' : 'height';
        }
        _initializeChildren() {
          if (!this._config.parent) return;
          const e = this._getFirstLevelChildren(bn);
          for (const t of e) {
            const e = wt.getElementFromSelector(t);
            e && this._addAriaAndCollapsedClass([t], this._isShown(e));
          }
        }
        _getFirstLevelChildren(e) {
          const t = wt.find(_n, this._config.parent);
          return wt.find(e, this._config.parent).filter((e) => !t.includes(e));
        }
        _addAriaAndCollapsedClass(e, t) {
          if (e.length)
            for (const n of e)
              n.classList.toggle('collapsed', !t), n.setAttribute('aria-expanded', t);
        }
        static jQueryInterface(e) {
          const t = {};
          return (
            'string' == typeof e && /show|hide/.test(e) && (t.toggle = !1),
            this.each(function () {
              const n = wn.getOrCreateInstance(this, t);
              if ('string' == typeof e) {
                if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                n[e]();
              }
            })
          );
        }
      }
      ft.on(document, fn, bn, function (e) {
        ('A' === e.target.tagName || (e.delegateTarget && 'A' === e.delegateTarget.tagName)) &&
          e.preventDefault();
        for (const e of wt.getMultipleElementsFromSelector(this))
          wn.getOrCreateInstance(e, { toggle: !1 }).toggle();
      }),
        Ye(wn);
      const xn = 'dropdown',
        En = '.bs.dropdown',
        An = '.data-api',
        On = 'ArrowUp',
        kn = 'ArrowDown',
        Cn = `hide${En}`,
        Tn = `hidden${En}`,
        Sn = `show${En}`,
        $n = `shown${En}`,
        Dn = `click${En}${An}`,
        Fn = `keydown${En}${An}`,
        jn = `keyup${En}${An}`,
        Ln = 'show',
        Pn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        In = `${Pn}.${Ln}`,
        Mn = '.dropdown-menu',
        Nn = Ke() ? 'top-end' : 'top-start',
        Vn = Ke() ? 'top-start' : 'top-end',
        zn = Ke() ? 'bottom-end' : 'bottom-start',
        Rn = Ke() ? 'bottom-start' : 'bottom-end',
        Hn = Ke() ? 'left-start' : 'right-start',
        qn = Ke() ? 'right-start' : 'left-start',
        Wn = {
          autoClose: !0,
          boundary: 'clippingParents',
          display: 'dynamic',
          offset: [0, 2],
          popperConfig: null,
          reference: 'toggle',
        },
        Bn = {
          autoClose: '(boolean|string)',
          boundary: '(string|element)',
          display: 'string',
          offset: '(array|string|function)',
          popperConfig: '(null|object|function)',
          reference: '(string|element|object)',
        };
      class Un extends vt {
        constructor(e, t) {
          super(e, t),
            (this._popper = null),
            (this._parent = this._element.parentNode),
            (this._menu =
              wt.next(this._element, Mn)[0] ||
              wt.prev(this._element, Mn)[0] ||
              wt.findOne(Mn, this._parent)),
            (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
          return Wn;
        }
        static get DefaultType() {
          return Bn;
        }
        static get NAME() {
          return xn;
        }
        toggle() {
          return this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (Re(this._element) || this._isShown()) return;
          const e = { relatedTarget: this._element };
          if (!ft.trigger(this._element, Sn, e).defaultPrevented) {
            if (
              (this._createPopper(),
              'ontouchstart' in document.documentElement && !this._parent.closest('.navbar-nav'))
            )
              for (const e of [].concat(...document.body.children)) ft.on(e, 'mouseover', qe);
            this._element.focus(),
              this._element.setAttribute('aria-expanded', !0),
              this._menu.classList.add(Ln),
              this._element.classList.add(Ln),
              ft.trigger(this._element, $n, e);
          }
        }
        hide() {
          if (Re(this._element) || !this._isShown()) return;
          const e = { relatedTarget: this._element };
          this._completeHide(e);
        }
        dispose() {
          this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
          (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
        }
        _completeHide(e) {
          if (!ft.trigger(this._element, Cn, e).defaultPrevented) {
            if ('ontouchstart' in document.documentElement)
              for (const e of [].concat(...document.body.children)) ft.off(e, 'mouseover', qe);
            this._popper && this._popper.destroy(),
              this._menu.classList.remove(Ln),
              this._element.classList.remove(Ln),
              this._element.setAttribute('aria-expanded', 'false'),
              _t.removeDataAttribute(this._menu, 'popper'),
              ft.trigger(this._element, Tn, e);
          }
        }
        _getConfig(e) {
          if (
            'object' == typeof (e = super._getConfig(e)).reference &&
            !Ne(e.reference) &&
            'function' != typeof e.reference.getBoundingClientRect
          )
            throw new TypeError(
              `${xn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`,
            );
          return e;
        }
        _createPopper() {
          if (void 0 === e)
            throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
          let t = this._element;
          'parent' === this._config.reference
            ? (t = this._parent)
            : Ne(this._config.reference)
            ? (t = Ve(this._config.reference))
            : 'object' == typeof this._config.reference && (t = this._config.reference);
          const n = this._getPopperConfig();
          this._popper = $e(t, this._menu, n);
        }
        _isShown() {
          return this._menu.classList.contains(Ln);
        }
        _getPlacement() {
          const e = this._parent;
          if (e.classList.contains('dropend')) return Hn;
          if (e.classList.contains('dropstart')) return qn;
          if (e.classList.contains('dropup-center')) return 'top';
          if (e.classList.contains('dropdown-center')) return 'bottom';
          const t = 'end' === getComputedStyle(this._menu).getPropertyValue('--bs-position').trim();
          return e.classList.contains('dropup') ? (t ? Vn : Nn) : t ? Rn : zn;
        }
        _detectNavbar() {
          return null !== this._element.closest('.navbar');
        }
        _getOffset() {
          const { offset: e } = this._config;
          return 'string' == typeof e
            ? e.split(',').map((e) => Number.parseInt(e, 10))
            : 'function' == typeof e
            ? (t) => e(t, this._element)
            : e;
        }
        _getPopperConfig() {
          const e = {
            placement: this._getPlacement(),
            modifiers: [
              { name: 'preventOverflow', options: { boundary: this._config.boundary } },
              { name: 'offset', options: { offset: this._getOffset() } },
            ],
          };
          return (
            (this._inNavbar || 'static' === this._config.display) &&
              (_t.setDataAttribute(this._menu, 'popper', 'static'),
              (e.modifiers = [{ name: 'applyStyles', enabled: !1 }])),
            { ...e, ...Ze(this._config.popperConfig, [e]) }
          );
        }
        _selectMenuItem({ key: e, target: t }) {
          const n = wt
            .find('.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)', this._menu)
            .filter((e) => ze(e));
          n.length && Xe(n, t, e === kn, !n.includes(t)).focus();
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Un.getOrCreateInstance(this, e);
            if ('string' == typeof e) {
              if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
        static clearMenus(e) {
          if (2 === e.button || ('keyup' === e.type && 'Tab' !== e.key)) return;
          const t = wt.find(In);
          for (const n of t) {
            const t = Un.getInstance(n);
            if (!t || !1 === t._config.autoClose) continue;
            const i = e.composedPath(),
              s = i.includes(t._menu);
            if (
              i.includes(t._element) ||
              ('inside' === t._config.autoClose && !s) ||
              ('outside' === t._config.autoClose && s)
            )
              continue;
            if (
              t._menu.contains(e.target) &&
              (('keyup' === e.type && 'Tab' === e.key) ||
                /input|select|option|textarea|form/i.test(e.target.tagName))
            )
              continue;
            const r = { relatedTarget: t._element };
            'click' === e.type && (r.clickEvent = e), t._completeHide(r);
          }
        }
        static dataApiKeydownHandler(e) {
          const t = /input|textarea/i.test(e.target.tagName),
            n = 'Escape' === e.key,
            i = [On, kn].includes(e.key);
          if (!i && !n) return;
          if (t && !n) return;
          e.preventDefault();
          const s = this.matches(Pn)
              ? this
              : wt.prev(this, Pn)[0] ||
                wt.next(this, Pn)[0] ||
                wt.findOne(Pn, e.delegateTarget.parentNode),
            r = Un.getOrCreateInstance(s);
          if (i) return e.stopPropagation(), r.show(), void r._selectMenuItem(e);
          r._isShown() && (e.stopPropagation(), r.hide(), s.focus());
        }
      }
      ft.on(document, Fn, Pn, Un.dataApiKeydownHandler),
        ft.on(document, Fn, Mn, Un.dataApiKeydownHandler),
        ft.on(document, Dn, Un.clearMenus),
        ft.on(document, jn, Un.clearMenus),
        ft.on(document, Dn, Pn, function (e) {
          e.preventDefault(), Un.getOrCreateInstance(this).toggle();
        }),
        Ye(Un);
      const Kn = 'backdrop',
        Yn = 'show',
        Zn = `mousedown.bs.${Kn}`,
        Qn = {
          className: 'modal-backdrop',
          clickCallback: null,
          isAnimated: !1,
          isVisible: !0,
          rootElement: 'body',
        },
        Xn = {
          className: 'string',
          clickCallback: '(function|null)',
          isAnimated: 'boolean',
          isVisible: 'boolean',
          rootElement: '(element|string)',
        };
      class Jn extends bt {
        constructor(e) {
          super(),
            (this._config = this._getConfig(e)),
            (this._isAppended = !1),
            (this._element = null);
        }
        static get Default() {
          return Qn;
        }
        static get DefaultType() {
          return Xn;
        }
        static get NAME() {
          return Kn;
        }
        show(e) {
          if (!this._config.isVisible) return void Ze(e);
          this._append();
          const t = this._getElement();
          this._config.isAnimated && We(t),
            t.classList.add(Yn),
            this._emulateAnimation(() => {
              Ze(e);
            });
        }
        hide(e) {
          this._config.isVisible
            ? (this._getElement().classList.remove(Yn),
              this._emulateAnimation(() => {
                this.dispose(), Ze(e);
              }))
            : Ze(e);
        }
        dispose() {
          this._isAppended &&
            (ft.off(this._element, Zn), this._element.remove(), (this._isAppended = !1));
        }
        _getElement() {
          if (!this._element) {
            const e = document.createElement('div');
            (e.className = this._config.className),
              this._config.isAnimated && e.classList.add('fade'),
              (this._element = e);
          }
          return this._element;
        }
        _configAfterMerge(e) {
          return (e.rootElement = Ve(e.rootElement)), e;
        }
        _append() {
          if (this._isAppended) return;
          const e = this._getElement();
          this._config.rootElement.append(e),
            ft.on(e, Zn, () => {
              Ze(this._config.clickCallback);
            }),
            (this._isAppended = !0);
        }
        _emulateAnimation(e) {
          Qe(e, this._getElement(), this._config.isAnimated);
        }
      }
      const Gn = '.bs.focustrap',
        ei = `focusin${Gn}`,
        ti = `keydown.tab${Gn}`,
        ni = 'backward',
        ii = { autofocus: !0, trapElement: null },
        si = { autofocus: 'boolean', trapElement: 'element' };
      class ri extends bt {
        constructor(e) {
          super(),
            (this._config = this._getConfig(e)),
            (this._isActive = !1),
            (this._lastTabNavDirection = null);
        }
        static get Default() {
          return ii;
        }
        static get DefaultType() {
          return si;
        }
        static get NAME() {
          return 'focustrap';
        }
        activate() {
          this._isActive ||
            (this._config.autofocus && this._config.trapElement.focus(),
            ft.off(document, Gn),
            ft.on(document, ei, (e) => this._handleFocusin(e)),
            ft.on(document, ti, (e) => this._handleKeydown(e)),
            (this._isActive = !0));
        }
        deactivate() {
          this._isActive && ((this._isActive = !1), ft.off(document, Gn));
        }
        _handleFocusin(e) {
          const { trapElement: t } = this._config;
          if (e.target === document || e.target === t || t.contains(e.target)) return;
          const n = wt.focusableChildren(t);
          0 === n.length
            ? t.focus()
            : this._lastTabNavDirection === ni
            ? n[n.length - 1].focus()
            : n[0].focus();
        }
        _handleKeydown(e) {
          'Tab' === e.key && (this._lastTabNavDirection = e.shiftKey ? ni : 'forward');
        }
      }
      const oi = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
        ai = '.sticky-top',
        li = 'padding-right',
        ci = 'margin-right';
      class ui {
        constructor() {
          this._element = document.body;
        }
        getWidth() {
          const e = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - e);
        }
        hide() {
          const e = this.getWidth();
          this._disableOverFlow(),
            this._setElementAttributes(this._element, li, (t) => t + e),
            this._setElementAttributes(oi, li, (t) => t + e),
            this._setElementAttributes(ai, ci, (t) => t - e);
        }
        reset() {
          this._resetElementAttributes(this._element, 'overflow'),
            this._resetElementAttributes(this._element, li),
            this._resetElementAttributes(oi, li),
            this._resetElementAttributes(ai, ci);
        }
        isOverflowing() {
          return this.getWidth() > 0;
        }
        _disableOverFlow() {
          this._saveInitialAttribute(this._element, 'overflow'),
            (this._element.style.overflow = 'hidden');
        }
        _setElementAttributes(e, t, n) {
          const i = this.getWidth();
          this._applyManipulationCallback(e, (e) => {
            if (e !== this._element && window.innerWidth > e.clientWidth + i) return;
            this._saveInitialAttribute(e, t);
            const s = window.getComputedStyle(e).getPropertyValue(t);
            e.style.setProperty(t, `${n(Number.parseFloat(s))}px`);
          });
        }
        _saveInitialAttribute(e, t) {
          const n = e.style.getPropertyValue(t);
          n && _t.setDataAttribute(e, t, n);
        }
        _resetElementAttributes(e, t) {
          this._applyManipulationCallback(e, (e) => {
            const n = _t.getDataAttribute(e, t);
            null !== n
              ? (_t.removeDataAttribute(e, t), e.style.setProperty(t, n))
              : e.style.removeProperty(t);
          });
        }
        _applyManipulationCallback(e, t) {
          if (Ne(e)) t(e);
          else for (const n of wt.find(e, this._element)) t(n);
        }
      }
      const hi = '.bs.modal',
        di = `hide${hi}`,
        fi = `hidePrevented${hi}`,
        pi = `hidden${hi}`,
        mi = `show${hi}`,
        gi = `shown${hi}`,
        _i = `resize${hi}`,
        bi = `click.dismiss${hi}`,
        vi = `mousedown.dismiss${hi}`,
        yi = `keydown.dismiss${hi}`,
        wi = `click${hi}.data-api`,
        xi = 'modal-open',
        Ei = 'show',
        Ai = 'modal-static',
        Oi = { backdrop: !0, focus: !0, keyboard: !0 },
        ki = { backdrop: '(boolean|string)', focus: 'boolean', keyboard: 'boolean' };
      class Ci extends vt {
        constructor(e, t) {
          super(e, t),
            (this._dialog = wt.findOne('.modal-dialog', this._element)),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            (this._isShown = !1),
            (this._isTransitioning = !1),
            (this._scrollBar = new ui()),
            this._addEventListeners();
        }
        static get Default() {
          return Oi;
        }
        static get DefaultType() {
          return ki;
        }
        static get NAME() {
          return 'modal';
        }
        toggle(e) {
          return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
          this._isShown ||
            this._isTransitioning ||
            ft.trigger(this._element, mi, { relatedTarget: e }).defaultPrevented ||
            ((this._isShown = !0),
            (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(xi),
            this._adjustDialog(),
            this._backdrop.show(() => this._showElement(e)));
        }
        hide() {
          this._isShown &&
            !this._isTransitioning &&
            (ft.trigger(this._element, di).defaultPrevented ||
              ((this._isShown = !1),
              (this._isTransitioning = !0),
              this._focustrap.deactivate(),
              this._element.classList.remove(Ei),
              this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
        }
        dispose() {
          ft.off(window, hi),
            ft.off(this._dialog, hi),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose();
        }
        handleUpdate() {
          this._adjustDialog();
        }
        _initializeBackDrop() {
          return new Jn({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated(),
          });
        }
        _initializeFocusTrap() {
          return new ri({ trapElement: this._element });
        }
        _showElement(e) {
          document.body.contains(this._element) || document.body.append(this._element),
            (this._element.style.display = 'block'),
            this._element.removeAttribute('aria-hidden'),
            this._element.setAttribute('aria-modal', !0),
            this._element.setAttribute('role', 'dialog'),
            (this._element.scrollTop = 0);
          const t = wt.findOne('.modal-body', this._dialog);
          t && (t.scrollTop = 0),
            We(this._element),
            this._element.classList.add(Ei),
            this._queueCallback(
              () => {
                this._config.focus && this._focustrap.activate(),
                  (this._isTransitioning = !1),
                  ft.trigger(this._element, gi, { relatedTarget: e });
              },
              this._dialog,
              this._isAnimated(),
            );
        }
        _addEventListeners() {
          ft.on(this._element, yi, (e) => {
            'Escape' === e.key &&
              (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
          }),
            ft.on(window, _i, () => {
              this._isShown && !this._isTransitioning && this._adjustDialog();
            }),
            ft.on(this._element, vi, (e) => {
              ft.one(this._element, bi, (t) => {
                this._element === e.target &&
                  this._element === t.target &&
                  ('static' !== this._config.backdrop
                    ? this._config.backdrop && this.hide()
                    : this._triggerBackdropTransition());
              });
            });
        }
        _hideModal() {
          (this._element.style.display = 'none'),
            this._element.setAttribute('aria-hidden', !0),
            this._element.removeAttribute('aria-modal'),
            this._element.removeAttribute('role'),
            (this._isTransitioning = !1),
            this._backdrop.hide(() => {
              document.body.classList.remove(xi),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                ft.trigger(this._element, pi);
            });
        }
        _isAnimated() {
          return this._element.classList.contains('fade');
        }
        _triggerBackdropTransition() {
          if (ft.trigger(this._element, fi).defaultPrevented) return;
          const e = this._element.scrollHeight > document.documentElement.clientHeight,
            t = this._element.style.overflowY;
          'hidden' === t ||
            this._element.classList.contains(Ai) ||
            (e || (this._element.style.overflowY = 'hidden'),
            this._element.classList.add(Ai),
            this._queueCallback(() => {
              this._element.classList.remove(Ai),
                this._queueCallback(() => {
                  this._element.style.overflowY = t;
                }, this._dialog);
            }, this._dialog),
            this._element.focus());
        }
        _adjustDialog() {
          const e = this._element.scrollHeight > document.documentElement.clientHeight,
            t = this._scrollBar.getWidth(),
            n = t > 0;
          if (n && !e) {
            const e = Ke() ? 'paddingLeft' : 'paddingRight';
            this._element.style[e] = `${t}px`;
          }
          if (!n && e) {
            const e = Ke() ? 'paddingRight' : 'paddingLeft';
            this._element.style[e] = `${t}px`;
          }
        }
        _resetAdjustments() {
          (this._element.style.paddingLeft = ''), (this._element.style.paddingRight = '');
        }
        static jQueryInterface(e, t) {
          return this.each(function () {
            const n = Ci.getOrCreateInstance(this, e);
            if ('string' == typeof e) {
              if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
              n[e](t);
            }
          });
        }
      }
      ft.on(document, wi, '[data-bs-toggle="modal"]', function (e) {
        const t = wt.getElementFromSelector(this);
        ['A', 'AREA'].includes(this.tagName) && e.preventDefault(),
          ft.one(t, mi, (e) => {
            e.defaultPrevented ||
              ft.one(t, pi, () => {
                ze(this) && this.focus();
              });
          });
        const n = wt.findOne('.modal.show');
        n && Ci.getInstance(n).hide(), Ci.getOrCreateInstance(t).toggle(this);
      }),
        xt(Ci),
        Ye(Ci);
      const Ti = '.bs.offcanvas',
        Si = '.data-api',
        $i = `load${Ti}${Si}`,
        Di = 'show',
        Fi = 'showing',
        ji = 'hiding',
        Li = '.offcanvas.show',
        Pi = `show${Ti}`,
        Ii = `shown${Ti}`,
        Mi = `hide${Ti}`,
        Ni = `hidePrevented${Ti}`,
        Vi = `hidden${Ti}`,
        zi = `resize${Ti}`,
        Ri = `click${Ti}${Si}`,
        Hi = `keydown.dismiss${Ti}`,
        qi = { backdrop: !0, keyboard: !0, scroll: !1 },
        Wi = { backdrop: '(boolean|string)', keyboard: 'boolean', scroll: 'boolean' };
      class Bi extends vt {
        constructor(e, t) {
          super(e, t),
            (this._isShown = !1),
            (this._backdrop = this._initializeBackDrop()),
            (this._focustrap = this._initializeFocusTrap()),
            this._addEventListeners();
        }
        static get Default() {
          return qi;
        }
        static get DefaultType() {
          return Wi;
        }
        static get NAME() {
          return 'offcanvas';
        }
        toggle(e) {
          return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
          this._isShown ||
            ft.trigger(this._element, Pi, { relatedTarget: e }).defaultPrevented ||
            ((this._isShown = !0),
            this._backdrop.show(),
            this._config.scroll || new ui().hide(),
            this._element.setAttribute('aria-modal', !0),
            this._element.setAttribute('role', 'dialog'),
            this._element.classList.add(Fi),
            this._queueCallback(
              () => {
                (this._config.scroll && !this._config.backdrop) || this._focustrap.activate(),
                  this._element.classList.add(Di),
                  this._element.classList.remove(Fi),
                  ft.trigger(this._element, Ii, { relatedTarget: e });
              },
              this._element,
              !0,
            ));
        }
        hide() {
          this._isShown &&
            (ft.trigger(this._element, Mi).defaultPrevented ||
              (this._focustrap.deactivate(),
              this._element.blur(),
              (this._isShown = !1),
              this._element.classList.add(ji),
              this._backdrop.hide(),
              this._queueCallback(
                () => {
                  this._element.classList.remove(Di, ji),
                    this._element.removeAttribute('aria-modal'),
                    this._element.removeAttribute('role'),
                    this._config.scroll || new ui().reset(),
                    ft.trigger(this._element, Vi);
                },
                this._element,
                !0,
              )));
        }
        dispose() {
          this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
          const e = Boolean(this._config.backdrop);
          return new Jn({
            className: 'offcanvas-backdrop',
            isVisible: e,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: e
              ? () => {
                  'static' !== this._config.backdrop ? this.hide() : ft.trigger(this._element, Ni);
                }
              : null,
          });
        }
        _initializeFocusTrap() {
          return new ri({ trapElement: this._element });
        }
        _addEventListeners() {
          ft.on(this._element, Hi, (e) => {
            'Escape' === e.key &&
              (this._config.keyboard ? this.hide() : ft.trigger(this._element, Ni));
          });
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Bi.getOrCreateInstance(this, e);
            if ('string' == typeof e) {
              if (void 0 === t[e] || e.startsWith('_') || 'constructor' === e)
                throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      ft.on(document, Ri, '[data-bs-toggle="offcanvas"]', function (e) {
        const t = wt.getElementFromSelector(this);
        if ((['A', 'AREA'].includes(this.tagName) && e.preventDefault(), Re(this))) return;
        ft.one(t, Vi, () => {
          ze(this) && this.focus();
        });
        const n = wt.findOne(Li);
        n && n !== t && Bi.getInstance(n).hide(), Bi.getOrCreateInstance(t).toggle(this);
      }),
        ft.on(window, $i, () => {
          for (const e of wt.find(Li)) Bi.getOrCreateInstance(e).show();
        }),
        ft.on(window, zi, () => {
          for (const e of wt.find('[aria-modal][class*=show][class*=offcanvas-]'))
            'fixed' !== getComputedStyle(e).position && Bi.getOrCreateInstance(e).hide();
        }),
        xt(Bi),
        Ye(Bi);
      const Ui = {
          '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
          a: ['target', 'href', 'title', 'rel'],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        Ki = new Set([
          'background',
          'cite',
          'href',
          'itemtype',
          'longdesc',
          'poster',
          'src',
          'xlink:href',
        ]),
        Yi = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        Zi = (e, t) => {
          const n = e.nodeName.toLowerCase();
          return t.includes(n)
            ? !Ki.has(n) || Boolean(Yi.test(e.nodeValue))
            : t.filter((e) => e instanceof RegExp).some((e) => e.test(n));
        },
        Qi = {
          allowList: Ui,
          content: {},
          extraClass: '',
          html: !1,
          sanitize: !0,
          sanitizeFn: null,
          template: '<div></div>',
        },
        Xi = {
          allowList: 'object',
          content: 'object',
          extraClass: '(string|function)',
          html: 'boolean',
          sanitize: 'boolean',
          sanitizeFn: '(null|function)',
          template: 'string',
        },
        Ji = { entry: '(string|element|function|null)', selector: '(string|element)' };
      class Gi extends bt {
        constructor(e) {
          super(), (this._config = this._getConfig(e));
        }
        static get Default() {
          return Qi;
        }
        static get DefaultType() {
          return Xi;
        }
        static get NAME() {
          return 'TemplateFactory';
        }
        getContent() {
          return Object.values(this._config.content)
            .map((e) => this._resolvePossibleFunction(e))
            .filter(Boolean);
        }
        hasContent() {
          return this.getContent().length > 0;
        }
        changeContent(e) {
          return (
            this._checkContent(e), (this._config.content = { ...this._config.content, ...e }), this
          );
        }
        toHtml() {
          const e = document.createElement('div');
          e.innerHTML = this._maybeSanitize(this._config.template);
          for (const [t, n] of Object.entries(this._config.content)) this._setContent(e, n, t);
          const t = e.children[0],
            n = this._resolvePossibleFunction(this._config.extraClass);
          return n && t.classList.add(...n.split(' ')), t;
        }
        _typeCheckConfig(e) {
          super._typeCheckConfig(e), this._checkContent(e.content);
        }
        _checkContent(e) {
          for (const [t, n] of Object.entries(e))
            super._typeCheckConfig({ selector: t, entry: n }, Ji);
        }
        _setContent(e, t, n) {
          const i = wt.findOne(n, e);
          i &&
            ((t = this._resolvePossibleFunction(t))
              ? Ne(t)
                ? this._putElementInTemplate(Ve(t), i)
                : this._config.html
                ? (i.innerHTML = this._maybeSanitize(t))
                : (i.textContent = t)
              : i.remove());
        }
        _maybeSanitize(e) {
          return this._config.sanitize
            ? (function (e, t, n) {
                if (!e.length) return e;
                if (n && 'function' == typeof n) return n(e);
                const i = new window.DOMParser().parseFromString(e, 'text/html'),
                  s = [].concat(...i.body.querySelectorAll('*'));
                for (const e of s) {
                  const n = e.nodeName.toLowerCase();
                  if (!Object.keys(t).includes(n)) {
                    e.remove();
                    continue;
                  }
                  const i = [].concat(...e.attributes),
                    s = [].concat(t['*'] || [], t[n] || []);
                  for (const t of i) Zi(t, s) || e.removeAttribute(t.nodeName);
                }
                return i.body.innerHTML;
              })(e, this._config.allowList, this._config.sanitizeFn)
            : e;
        }
        _resolvePossibleFunction(e) {
          return Ze(e, [this]);
        }
        _putElementInTemplate(e, t) {
          if (this._config.html) return (t.innerHTML = ''), void t.append(e);
          t.textContent = e.textContent;
        }
      }
      const es = new Set(['sanitize', 'allowList', 'sanitizeFn']),
        ts = 'fade',
        ns = 'show',
        is = '.modal',
        ss = 'hide.bs.modal',
        rs = 'hover',
        os = 'focus',
        as = {
          AUTO: 'auto',
          TOP: 'top',
          RIGHT: Ke() ? 'left' : 'right',
          BOTTOM: 'bottom',
          LEFT: Ke() ? 'right' : 'left',
        },
        ls = {
          allowList: Ui,
          animation: !0,
          boundary: 'clippingParents',
          container: !1,
          customClass: '',
          delay: 0,
          fallbackPlacements: ['top', 'right', 'bottom', 'left'],
          html: !1,
          offset: [0, 6],
          placement: 'top',
          popperConfig: null,
          sanitize: !0,
          sanitizeFn: null,
          selector: !1,
          template:
            '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          title: '',
          trigger: 'hover focus',
        },
        cs = {
          allowList: 'object',
          animation: 'boolean',
          boundary: '(string|element)',
          container: '(string|element|boolean)',
          customClass: '(string|function)',
          delay: '(number|object)',
          fallbackPlacements: 'array',
          html: 'boolean',
          offset: '(array|string|function)',
          placement: '(string|function)',
          popperConfig: '(null|object|function)',
          sanitize: 'boolean',
          sanitizeFn: '(null|function)',
          selector: '(string|boolean)',
          template: 'string',
          title: '(string|element|function)',
          trigger: 'string',
        };
      class us extends vt {
        constructor(t, n) {
          if (void 0 === e)
            throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
          super(t, n),
            (this._isEnabled = !0),
            (this._timeout = 0),
            (this._isHovered = null),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this._templateFactory = null),
            (this._newContent = null),
            (this.tip = null),
            this._setListeners(),
            this._config.selector || this._fixTitle();
        }
        static get Default() {
          return ls;
        }
        static get DefaultType() {
          return cs;
        }
        static get NAME() {
          return 'tooltip';
        }
        enable() {
          this._isEnabled = !0;
        }
        disable() {
          this._isEnabled = !1;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle() {
          this._isEnabled &&
            ((this._activeTrigger.click = !this._activeTrigger.click),
            this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
          clearTimeout(this._timeout),
            ft.off(this._element.closest(is), ss, this._hideModalHandler),
            this._element.getAttribute('data-bs-original-title') &&
              this._element.setAttribute(
                'title',
                this._element.getAttribute('data-bs-original-title'),
              ),
            this._disposePopper(),
            super.dispose();
        }
        show() {
          if ('none' === this._element.style.display)
            throw new Error('Please use show on visible elements');
          if (!this._isWithContent() || !this._isEnabled) return;
          const e = ft.trigger(this._element, this.constructor.eventName('show')),
            t = (He(this._element) || this._element.ownerDocument.documentElement).contains(
              this._element,
            );
          if (e.defaultPrevented || !t) return;
          this._disposePopper();
          const n = this._getTipElement();
          this._element.setAttribute('aria-describedby', n.getAttribute('id'));
          const { container: i } = this._config;
          if (
            (this._element.ownerDocument.documentElement.contains(this.tip) ||
              (i.append(n), ft.trigger(this._element, this.constructor.eventName('inserted'))),
            (this._popper = this._createPopper(n)),
            n.classList.add(ns),
            'ontouchstart' in document.documentElement)
          )
            for (const e of [].concat(...document.body.children)) ft.on(e, 'mouseover', qe);
          this._queueCallback(
            () => {
              ft.trigger(this._element, this.constructor.eventName('shown')),
                !1 === this._isHovered && this._leave(),
                (this._isHovered = !1);
            },
            this.tip,
            this._isAnimated(),
          );
        }
        hide() {
          if (
            this._isShown() &&
            !ft.trigger(this._element, this.constructor.eventName('hide')).defaultPrevented
          ) {
            if (
              (this._getTipElement().classList.remove(ns),
              'ontouchstart' in document.documentElement)
            )
              for (const e of [].concat(...document.body.children)) ft.off(e, 'mouseover', qe);
            (this._activeTrigger.click = !1),
              (this._activeTrigger[os] = !1),
              (this._activeTrigger[rs] = !1),
              (this._isHovered = null),
              this._queueCallback(
                () => {
                  this._isWithActiveTrigger() ||
                    (this._isHovered || this._disposePopper(),
                    this._element.removeAttribute('aria-describedby'),
                    ft.trigger(this._element, this.constructor.eventName('hidden')));
                },
                this.tip,
                this._isAnimated(),
              );
          }
        }
        update() {
          this._popper && this._popper.update();
        }
        _isWithContent() {
          return Boolean(this._getTitle());
        }
        _getTipElement() {
          return (
            this.tip ||
              (this.tip = this._createTipElement(
                this._newContent || this._getContentForTemplate(),
              )),
            this.tip
          );
        }
        _createTipElement(e) {
          const t = this._getTemplateFactory(e).toHtml();
          if (!t) return null;
          t.classList.remove(ts, ns), t.classList.add(`bs-${this.constructor.NAME}-auto`);
          const n = ((e) => {
            do {
              e += Math.floor(1e6 * Math.random());
            } while (document.getElementById(e));
            return e;
          })(this.constructor.NAME).toString();
          return t.setAttribute('id', n), this._isAnimated() && t.classList.add(ts), t;
        }
        setContent(e) {
          (this._newContent = e), this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(e) {
          return (
            this._templateFactory
              ? this._templateFactory.changeContent(e)
              : (this._templateFactory = new Gi({
                  ...this._config,
                  content: e,
                  extraClass: this._resolvePossibleFunction(this._config.customClass),
                })),
            this._templateFactory
          );
        }
        _getContentForTemplate() {
          return { '.tooltip-inner': this._getTitle() };
        }
        _getTitle() {
          return (
            this._resolvePossibleFunction(this._config.title) ||
            this._element.getAttribute('data-bs-original-title')
          );
        }
        _initializeOnDelegatedTarget(e) {
          return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
          return this._config.animation || (this.tip && this.tip.classList.contains(ts));
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(ns);
        }
        _createPopper(e) {
          const t = Ze(this._config.placement, [this, e, this._element]),
            n = as[t.toUpperCase()];
          return $e(this._element, e, this._getPopperConfig(n));
        }
        _getOffset() {
          const { offset: e } = this._config;
          return 'string' == typeof e
            ? e.split(',').map((e) => Number.parseInt(e, 10))
            : 'function' == typeof e
            ? (t) => e(t, this._element)
            : e;
        }
        _resolvePossibleFunction(e) {
          return Ze(e, [this._element]);
        }
        _getPopperConfig(e) {
          const t = {
            placement: e,
            modifiers: [
              { name: 'flip', options: { fallbackPlacements: this._config.fallbackPlacements } },
              { name: 'offset', options: { offset: this._getOffset() } },
              { name: 'preventOverflow', options: { boundary: this._config.boundary } },
              { name: 'arrow', options: { element: `.${this.constructor.NAME}-arrow` } },
              {
                name: 'preSetPlacement',
                enabled: !0,
                phase: 'beforeMain',
                fn: (e) => {
                  this._getTipElement().setAttribute('data-popper-placement', e.state.placement);
                },
              },
            ],
          };
          return { ...t, ...Ze(this._config.popperConfig, [t]) };
        }
        _setListeners() {
          const e = this._config.trigger.split(' ');
          for (const t of e)
            if ('click' === t)
              ft.on(
                this._element,
                this.constructor.eventName('click'),
                this._config.selector,
                (e) => {
                  this._initializeOnDelegatedTarget(e).toggle();
                },
              );
            else if ('manual' !== t) {
              const e =
                  t === rs
                    ? this.constructor.eventName('mouseenter')
                    : this.constructor.eventName('focusin'),
                n =
                  t === rs
                    ? this.constructor.eventName('mouseleave')
                    : this.constructor.eventName('focusout');
              ft.on(this._element, e, this._config.selector, (e) => {
                const t = this._initializeOnDelegatedTarget(e);
                (t._activeTrigger['focusin' === e.type ? os : rs] = !0), t._enter();
              }),
                ft.on(this._element, n, this._config.selector, (e) => {
                  const t = this._initializeOnDelegatedTarget(e);
                  (t._activeTrigger['focusout' === e.type ? os : rs] = t._element.contains(
                    e.relatedTarget,
                  )),
                    t._leave();
                });
            }
          (this._hideModalHandler = () => {
            this._element && this.hide();
          }),
            ft.on(this._element.closest(is), ss, this._hideModalHandler);
        }
        _fixTitle() {
          const e = this._element.getAttribute('title');
          e &&
            (this._element.getAttribute('aria-label') ||
              this._element.textContent.trim() ||
              this._element.setAttribute('aria-label', e),
            this._element.setAttribute('data-bs-original-title', e),
            this._element.removeAttribute('title'));
        }
        _enter() {
          this._isShown() || this._isHovered
            ? (this._isHovered = !0)
            : ((this._isHovered = !0),
              this._setTimeout(() => {
                this._isHovered && this.show();
              }, this._config.delay.show));
        }
        _leave() {
          this._isWithActiveTrigger() ||
            ((this._isHovered = !1),
            this._setTimeout(() => {
              this._isHovered || this.hide();
            }, this._config.delay.hide));
        }
        _setTimeout(e, t) {
          clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(e) {
          const t = _t.getDataAttributes(this._element);
          for (const e of Object.keys(t)) es.has(e) && delete t[e];
          return (
            (e = { ...t, ...('object' == typeof e && e ? e : {}) }),
            (e = this._mergeConfigObj(e)),
            (e = this._configAfterMerge(e)),
            this._typeCheckConfig(e),
            e
          );
        }
        _configAfterMerge(e) {
          return (
            (e.container = !1 === e.container ? document.body : Ve(e.container)),
            'number' == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }),
            'number' == typeof e.title && (e.title = e.title.toString()),
            'number' == typeof e.content && (e.content = e.content.toString()),
            e
          );
        }
        _getDelegateConfig() {
          const e = {};
          for (const [t, n] of Object.entries(this._config))
            this.constructor.Default[t] !== n && (e[t] = n);
          return (e.selector = !1), (e.trigger = 'manual'), e;
        }
        _disposePopper() {
          this._popper && (this._popper.destroy(), (this._popper = null)),
            this.tip && (this.tip.remove(), (this.tip = null));
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = us.getOrCreateInstance(this, e);
            if ('string' == typeof e) {
              if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      Ye(us);
      const hs = {
          ...us.Default,
          content: '',
          offset: [0, 8],
          placement: 'right',
          template:
            '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
          trigger: 'click',
        },
        ds = { ...us.DefaultType, content: '(null|string|element|function)' };
      class fs extends us {
        static get Default() {
          return hs;
        }
        static get DefaultType() {
          return ds;
        }
        static get NAME() {
          return 'popover';
        }
        _isWithContent() {
          return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
          return { '.popover-header': this._getTitle(), '.popover-body': this._getContent() };
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = fs.getOrCreateInstance(this, e);
            if ('string' == typeof e) {
              if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      Ye(fs);
      const ps = '.bs.scrollspy',
        ms = `activate${ps}`,
        gs = `click${ps}`,
        _s = `load${ps}.data-api`,
        bs = 'active',
        vs = '[href]',
        ys = '.nav-link',
        ws = `${ys}, .nav-item > ${ys}, .list-group-item`,
        xs = {
          offset: null,
          rootMargin: '0px 0px -25%',
          smoothScroll: !1,
          target: null,
          threshold: [0.1, 0.5, 1],
        },
        Es = {
          offset: '(number|null)',
          rootMargin: 'string',
          smoothScroll: 'boolean',
          target: 'element',
          threshold: 'array',
        };
      class As extends vt {
        constructor(e, t) {
          super(e, t),
            (this._targetLinks = new Map()),
            (this._observableSections = new Map()),
            (this._rootElement =
              'visible' === getComputedStyle(this._element).overflowY ? null : this._element),
            (this._activeTarget = null),
            (this._observer = null),
            (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
            this.refresh();
        }
        static get Default() {
          return xs;
        }
        static get DefaultType() {
          return Es;
        }
        static get NAME() {
          return 'scrollspy';
        }
        refresh() {
          this._initializeTargetsAndObservables(),
            this._maybeEnableSmoothScroll(),
            this._observer
              ? this._observer.disconnect()
              : (this._observer = this._getNewObserver());
          for (const e of this._observableSections.values()) this._observer.observe(e);
        }
        dispose() {
          this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(e) {
          return (
            (e.target = Ve(e.target) || document.body),
            (e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin),
            'string' == typeof e.threshold &&
              (e.threshold = e.threshold.split(',').map((e) => Number.parseFloat(e))),
            e
          );
        }
        _maybeEnableSmoothScroll() {
          this._config.smoothScroll &&
            (ft.off(this._config.target, gs),
            ft.on(this._config.target, gs, vs, (e) => {
              const t = this._observableSections.get(e.target.hash);
              if (t) {
                e.preventDefault();
                const n = this._rootElement || window,
                  i = t.offsetTop - this._element.offsetTop;
                if (n.scrollTo) return void n.scrollTo({ top: i, behavior: 'smooth' });
                n.scrollTop = i;
              }
            }));
        }
        _getNewObserver() {
          const e = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin,
          };
          return new IntersectionObserver((e) => this._observerCallback(e), e);
        }
        _observerCallback(e) {
          const t = (e) => this._targetLinks.get(`#${e.target.id}`),
            n = (e) => {
              (this._previousScrollData.visibleEntryTop = e.target.offsetTop), this._process(t(e));
            },
            i = (this._rootElement || document.documentElement).scrollTop,
            s = i >= this._previousScrollData.parentScrollTop;
          this._previousScrollData.parentScrollTop = i;
          for (const r of e) {
            if (!r.isIntersecting) {
              (this._activeTarget = null), this._clearActiveClass(t(r));
              continue;
            }
            const e = r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (s && e) {
              if ((n(r), !i)) return;
            } else s || e || n(r);
          }
        }
        _initializeTargetsAndObservables() {
          (this._targetLinks = new Map()), (this._observableSections = new Map());
          const e = wt.find(vs, this._config.target);
          for (const t of e) {
            if (!t.hash || Re(t)) continue;
            const e = wt.findOne(decodeURI(t.hash), this._element);
            ze(e) &&
              (this._targetLinks.set(decodeURI(t.hash), t),
              this._observableSections.set(t.hash, e));
          }
        }
        _process(e) {
          this._activeTarget !== e &&
            (this._clearActiveClass(this._config.target),
            (this._activeTarget = e),
            e.classList.add(bs),
            this._activateParents(e),
            ft.trigger(this._element, ms, { relatedTarget: e }));
        }
        _activateParents(e) {
          if (e.classList.contains('dropdown-item'))
            wt.findOne('.dropdown-toggle', e.closest('.dropdown')).classList.add(bs);
          else
            for (const t of wt.parents(e, '.nav, .list-group'))
              for (const e of wt.prev(t, ws)) e.classList.add(bs);
        }
        _clearActiveClass(e) {
          e.classList.remove(bs);
          const t = wt.find(`${vs}.${bs}`, e);
          for (const e of t) e.classList.remove(bs);
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = As.getOrCreateInstance(this, e);
            if ('string' == typeof e) {
              if (void 0 === t[e] || e.startsWith('_') || 'constructor' === e)
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      ft.on(window, _s, () => {
        for (const e of wt.find('[data-bs-spy="scroll"]')) As.getOrCreateInstance(e);
      }),
        Ye(As);
      const Os = '.bs.tab',
        ks = `hide${Os}`,
        Cs = `hidden${Os}`,
        Ts = `show${Os}`,
        Ss = `shown${Os}`,
        $s = `click${Os}`,
        Ds = `keydown${Os}`,
        Fs = `load${Os}`,
        js = 'ArrowLeft',
        Ls = 'ArrowRight',
        Ps = 'ArrowUp',
        Is = 'ArrowDown',
        Ms = 'Home',
        Ns = 'End',
        Vs = 'active',
        zs = 'fade',
        Rs = 'show',
        Hs = ':not(.dropdown-toggle)',
        qs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Ws = `.nav-link${Hs}, .list-group-item${Hs}, [role="tab"]${Hs}, ${qs}`,
        Bs = `.${Vs}[data-bs-toggle="tab"], .${Vs}[data-bs-toggle="pill"], .${Vs}[data-bs-toggle="list"]`;
      class Us extends vt {
        constructor(e) {
          super(e),
            (this._parent = this._element.closest('.list-group, .nav, [role="tablist"]')),
            this._parent &&
              (this._setInitialAttributes(this._parent, this._getChildren()),
              ft.on(this._element, Ds, (e) => this._keydown(e)));
        }
        static get NAME() {
          return 'tab';
        }
        show() {
          const e = this._element;
          if (this._elemIsActive(e)) return;
          const t = this._getActiveElem(),
            n = t ? ft.trigger(t, ks, { relatedTarget: e }) : null;
          ft.trigger(e, Ts, { relatedTarget: t }).defaultPrevented ||
            (n && n.defaultPrevented) ||
            (this._deactivate(t, e), this._activate(e, t));
        }
        _activate(e, t) {
          e &&
            (e.classList.add(Vs),
            this._activate(wt.getElementFromSelector(e)),
            this._queueCallback(
              () => {
                'tab' === e.getAttribute('role')
                  ? (e.removeAttribute('tabindex'),
                    e.setAttribute('aria-selected', !0),
                    this._toggleDropDown(e, !0),
                    ft.trigger(e, Ss, { relatedTarget: t }))
                  : e.classList.add(Rs);
              },
              e,
              e.classList.contains(zs),
            ));
        }
        _deactivate(e, t) {
          e &&
            (e.classList.remove(Vs),
            e.blur(),
            this._deactivate(wt.getElementFromSelector(e)),
            this._queueCallback(
              () => {
                'tab' === e.getAttribute('role')
                  ? (e.setAttribute('aria-selected', !1),
                    e.setAttribute('tabindex', '-1'),
                    this._toggleDropDown(e, !1),
                    ft.trigger(e, Cs, { relatedTarget: t }))
                  : e.classList.remove(Rs);
              },
              e,
              e.classList.contains(zs),
            ));
        }
        _keydown(e) {
          if (![js, Ls, Ps, Is, Ms, Ns].includes(e.key)) return;
          e.stopPropagation(), e.preventDefault();
          const t = this._getChildren().filter((e) => !Re(e));
          let n;
          if ([Ms, Ns].includes(e.key)) n = t[e.key === Ms ? 0 : t.length - 1];
          else {
            const i = [Ls, Is].includes(e.key);
            n = Xe(t, e.target, i, !0);
          }
          n && (n.focus({ preventScroll: !0 }), Us.getOrCreateInstance(n).show());
        }
        _getChildren() {
          return wt.find(Ws, this._parent);
        }
        _getActiveElem() {
          return this._getChildren().find((e) => this._elemIsActive(e)) || null;
        }
        _setInitialAttributes(e, t) {
          this._setAttributeIfNotExists(e, 'role', 'tablist');
          for (const e of t) this._setInitialAttributesOnChild(e);
        }
        _setInitialAttributesOnChild(e) {
          e = this._getInnerElement(e);
          const t = this._elemIsActive(e),
            n = this._getOuterElement(e);
          e.setAttribute('aria-selected', t),
            n !== e && this._setAttributeIfNotExists(n, 'role', 'presentation'),
            t || e.setAttribute('tabindex', '-1'),
            this._setAttributeIfNotExists(e, 'role', 'tab'),
            this._setInitialAttributesOnTargetPanel(e);
        }
        _setInitialAttributesOnTargetPanel(e) {
          const t = wt.getElementFromSelector(e);
          t &&
            (this._setAttributeIfNotExists(t, 'role', 'tabpanel'),
            e.id && this._setAttributeIfNotExists(t, 'aria-labelledby', `${e.id}`));
        }
        _toggleDropDown(e, t) {
          const n = this._getOuterElement(e);
          if (!n.classList.contains('dropdown')) return;
          const i = (e, i) => {
            const s = wt.findOne(e, n);
            s && s.classList.toggle(i, t);
          };
          i('.dropdown-toggle', Vs), i('.dropdown-menu', Rs), n.setAttribute('aria-expanded', t);
        }
        _setAttributeIfNotExists(e, t, n) {
          e.hasAttribute(t) || e.setAttribute(t, n);
        }
        _elemIsActive(e) {
          return e.classList.contains(Vs);
        }
        _getInnerElement(e) {
          return e.matches(Ws) ? e : wt.findOne(Ws, e);
        }
        _getOuterElement(e) {
          return e.closest('.nav-item, .list-group-item') || e;
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = Us.getOrCreateInstance(this);
            if ('string' == typeof e) {
              if (void 0 === t[e] || e.startsWith('_') || 'constructor' === e)
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          });
        }
      }
      ft.on(document, $s, qs, function (e) {
        ['A', 'AREA'].includes(this.tagName) && e.preventDefault(),
          Re(this) || Us.getOrCreateInstance(this).show();
      }),
        ft.on(window, Fs, () => {
          for (const e of wt.find(Bs)) Us.getOrCreateInstance(e);
        }),
        Ye(Us);
      const Ks = '.bs.toast',
        Ys = `mouseover${Ks}`,
        Zs = `mouseout${Ks}`,
        Qs = `focusin${Ks}`,
        Xs = `focusout${Ks}`,
        Js = `hide${Ks}`,
        Gs = `hidden${Ks}`,
        er = `show${Ks}`,
        tr = `shown${Ks}`,
        nr = 'hide',
        ir = 'show',
        sr = 'showing',
        rr = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
        or = { animation: !0, autohide: !0, delay: 5e3 };
      class ar extends vt {
        constructor(e, t) {
          super(e, t),
            (this._timeout = null),
            (this._hasMouseInteraction = !1),
            (this._hasKeyboardInteraction = !1),
            this._setListeners();
        }
        static get Default() {
          return or;
        }
        static get DefaultType() {
          return rr;
        }
        static get NAME() {
          return 'toast';
        }
        show() {
          ft.trigger(this._element, er).defaultPrevented ||
            (this._clearTimeout(),
            this._config.animation && this._element.classList.add('fade'),
            this._element.classList.remove(nr),
            We(this._element),
            this._element.classList.add(ir, sr),
            this._queueCallback(
              () => {
                this._element.classList.remove(sr),
                  ft.trigger(this._element, tr),
                  this._maybeScheduleHide();
              },
              this._element,
              this._config.animation,
            ));
        }
        hide() {
          this.isShown() &&
            (ft.trigger(this._element, Js).defaultPrevented ||
              (this._element.classList.add(sr),
              this._queueCallback(
                () => {
                  this._element.classList.add(nr),
                    this._element.classList.remove(sr, ir),
                    ft.trigger(this._element, Gs);
                },
                this._element,
                this._config.animation,
              )));
        }
        dispose() {
          this._clearTimeout(),
            this.isShown() && this._element.classList.remove(ir),
            super.dispose();
        }
        isShown() {
          return this._element.classList.contains(ir);
        }
        _maybeScheduleHide() {
          this._config.autohide &&
            (this._hasMouseInteraction ||
              this._hasKeyboardInteraction ||
              (this._timeout = setTimeout(() => {
                this.hide();
              }, this._config.delay)));
        }
        _onInteraction(e, t) {
          switch (e.type) {
            case 'mouseover':
            case 'mouseout':
              this._hasMouseInteraction = t;
              break;
            case 'focusin':
            case 'focusout':
              this._hasKeyboardInteraction = t;
          }
          if (t) return void this._clearTimeout();
          const n = e.relatedTarget;
          this._element === n || this._element.contains(n) || this._maybeScheduleHide();
        }
        _setListeners() {
          ft.on(this._element, Ys, (e) => this._onInteraction(e, !0)),
            ft.on(this._element, Zs, (e) => this._onInteraction(e, !1)),
            ft.on(this._element, Qs, (e) => this._onInteraction(e, !0)),
            ft.on(this._element, Xs, (e) => this._onInteraction(e, !1));
        }
        _clearTimeout() {
          clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(e) {
          return this.each(function () {
            const t = ar.getOrCreateInstance(this, e);
            if ('string' == typeof e) {
              if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
              t[e](this);
            }
          });
        }
      }
      xt(ar), Ye(ar);
      var lr = n(760),
        cr = n(885),
        ur = n(633),
        hr = n.n(ur);
      const dr = Object.prototype.toString,
        fr = Error.prototype.toString,
        pr = RegExp.prototype.toString,
        mr = 'undefined' != typeof Symbol ? Symbol.prototype.toString : () => '',
        gr = /^Symbol\((.*)\)(.*)$/;
      function _r(e, t = !1) {
        if (null == e || !0 === e || !1 === e) return '' + e;
        const n = typeof e;
        if ('number' === n)
          return (function (e) {
            return e != +e ? 'NaN' : 0 === e && 1 / e < 0 ? '-0' : '' + e;
          })(e);
        if ('string' === n) return t ? `"${e}"` : e;
        if ('function' === n) return '[Function ' + (e.name || 'anonymous') + ']';
        if ('symbol' === n) return mr.call(e).replace(gr, 'Symbol($1)');
        const i = dr.call(e).slice(8, -1);
        return 'Date' === i
          ? isNaN(e.getTime())
            ? '' + e
            : e.toISOString(e)
          : 'Error' === i || e instanceof Error
          ? '[' + fr.call(e) + ']'
          : 'RegExp' === i
          ? pr.call(e)
          : null;
      }
      function br(e, t) {
        let n = _r(e, t);
        return null !== n
          ? n
          : JSON.stringify(
              e,
              function (e, n) {
                let i = _r(this[e], t);
                return null !== i ? i : n;
              },
              2,
            );
      }
      function vr(e) {
        return null == e ? [] : [].concat(e);
      }
      let yr = /\$\{\s*(\w+)\s*\}/g;
      class wr extends Error {
        static formatError(e, t) {
          const n = t.label || t.path || 'this';
          return (
            n !== t.path && (t = Object.assign({}, t, { path: n })),
            'string' == typeof e
              ? e.replace(yr, (e, n) => br(t[n]))
              : 'function' == typeof e
              ? e(t)
              : e
          );
        }
        static isError(e) {
          return e && 'ValidationError' === e.name;
        }
        constructor(e, t, n, i) {
          super(),
            (this.value = void 0),
            (this.path = void 0),
            (this.type = void 0),
            (this.errors = void 0),
            (this.params = void 0),
            (this.inner = void 0),
            (this.name = 'ValidationError'),
            (this.value = t),
            (this.path = n),
            (this.type = i),
            (this.errors = []),
            (this.inner = []),
            vr(e).forEach((e) => {
              wr.isError(e)
                ? (this.errors.push(...e.errors),
                  (this.inner = this.inner.concat(e.inner.length ? e.inner : e)))
                : this.errors.push(e);
            }),
            (this.message =
              this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0]),
            Error.captureStackTrace && Error.captureStackTrace(this, wr);
        }
      }
      let xr = {
          default: '${path} is invalid',
          required: '${path} is a required field',
          defined: '${path} must be defined',
          notNull: '${path} cannot be null',
          oneOf: '${path} must be one of the following values: ${values}',
          notOneOf: '${path} must not be one of the following values: ${values}',
          notType: ({ path: e, type: t, value: n, originalValue: i }) => {
            const s = null != i && i !== n ? ` (cast from the value \`${br(i, !0)}\`).` : '.';
            return 'mixed' !== t
              ? `${e} must be a \`${t}\` type, but the final value was: \`${br(n, !0)}\`` + s
              : `${e} must match the configured type. The validated value was: \`${br(n, !0)}\`` +
                  s;
          },
        },
        Er = {
          length: '${path} must be exactly ${length} characters',
          min: '${path} must be at least ${min} characters',
          max: '${path} must be at most ${max} characters',
          matches: '${path} must match the following: "${regex}"',
          email: '${path} must be a valid email',
          url: '${path} must be a valid URL',
          uuid: '${path} must be a valid UUID',
          trim: '${path} must be a trimmed string',
          lowercase: '${path} must be a lowercase string',
          uppercase: '${path} must be a upper case string',
        },
        Ar = {
          min: '${path} field must be later than ${min}',
          max: '${path} field must be at earlier than ${max}',
        },
        Or = { noUnknown: '${path} field has unspecified keys: ${unknown}' };
      Object.assign(Object.create(null), {
        mixed: xr,
        string: Er,
        number: {
          min: '${path} must be greater than or equal to ${min}',
          max: '${path} must be less than or equal to ${max}',
          lessThan: '${path} must be less than ${less}',
          moreThan: '${path} must be greater than ${more}',
          positive: '${path} must be a positive number',
          negative: '${path} must be a negative number',
          integer: '${path} must be an integer',
        },
        date: Ar,
        object: Or,
        array: {
          min: '${path} field must have at least ${min} items',
          max: '${path} field must have less than or equal to ${max} items',
          length: '${path} must have ${length} items',
        },
        boolean: { isValue: '${path} field must be ${value}' },
      });
      const kr = (e) => e && e.__isYupSchema__;
      class Cr {
        static fromOptions(e, t) {
          if (!t.then && !t.otherwise)
            throw new TypeError(
              'either `then:` or `otherwise:` is required for `when()` conditions',
            );
          let { is: n, then: i, otherwise: s } = t,
            r = 'function' == typeof n ? n : (...e) => e.every((e) => e === n);
          return new Cr(e, (e, t) => {
            var n;
            let o = r(...e) ? i : s;
            return null != (n = null == o ? void 0 : o(t)) ? n : t;
          });
        }
        constructor(e, t) {
          (this.fn = void 0), (this.refs = e), (this.refs = e), (this.fn = t);
        }
        resolve(e, t) {
          let n = this.refs.map((e) =>
              e.getValue(
                null == t ? void 0 : t.value,
                null == t ? void 0 : t.parent,
                null == t ? void 0 : t.context,
              ),
            ),
            i = this.fn(n, e, t);
          if (void 0 === i || i === e) return e;
          if (!kr(i)) throw new TypeError('conditions must return a schema object');
          return i.resolve(t);
        }
      }
      class Tr {
        constructor(e, t = {}) {
          if (
            ((this.key = void 0),
            (this.isContext = void 0),
            (this.isValue = void 0),
            (this.isSibling = void 0),
            (this.path = void 0),
            (this.getter = void 0),
            (this.map = void 0),
            'string' != typeof e)
          )
            throw new TypeError('ref must be a string, got: ' + e);
          if (((this.key = e.trim()), '' === e))
            throw new TypeError('ref must be a non-empty string');
          (this.isContext = '$' === this.key[0]),
            (this.isValue = '.' === this.key[0]),
            (this.isSibling = !this.isContext && !this.isValue);
          let n = this.isContext ? '$' : this.isValue ? '.' : '';
          (this.path = this.key.slice(n.length)),
            (this.getter = this.path && (0, lr.getter)(this.path, !0)),
            (this.map = t.map);
        }
        getValue(e, t, n) {
          let i = this.isContext ? n : this.isValue ? e : t;
          return this.getter && (i = this.getter(i || {})), this.map && (i = this.map(i)), i;
        }
        cast(e, t) {
          return this.getValue(e, null == t ? void 0 : t.parent, null == t ? void 0 : t.context);
        }
        resolve() {
          return this;
        }
        describe() {
          return { type: 'ref', key: this.key };
        }
        toString() {
          return `Ref(${this.key})`;
        }
        static isRef(e) {
          return e && e.__isYupRef;
        }
      }
      Tr.prototype.__isYupRef = !0;
      const Sr = (e) => null == e;
      function $r(e) {
        function t({ value: t, path: n = '', options: i, originalValue: s, schema: r }, o, a) {
          const { name: l, test: c, params: u, message: h, skipAbsent: d } = e;
          let { parent: f, context: p, abortEarly: m = r.spec.abortEarly } = i;
          function g(e) {
            return Tr.isRef(e) ? e.getValue(t, f, p) : e;
          }
          function _(e = {}) {
            const i = Object.assign(
              { value: t, originalValue: s, label: r.spec.label, path: e.path || n, spec: r.spec },
              u,
              e.params,
            );
            for (const e of Object.keys(i)) i[e] = g(i[e]);
            const o = new wr(wr.formatError(e.message || h, i), t, i.path, e.type || l);
            return (o.params = i), o;
          }
          const b = m ? o : a;
          let v = {
            path: n,
            parent: f,
            type: l,
            from: i.from,
            createError: _,
            resolve: g,
            options: i,
            originalValue: s,
            schema: r,
          };
          const y = (e) => {
              wr.isError(e) ? b(e) : e ? a(null) : b(_());
            },
            w = (e) => {
              wr.isError(e) ? b(e) : o(e);
            },
            x = d && Sr(t);
          if (!i.sync) {
            try {
              Promise.resolve(!!x || c.call(v, t, v)).then(y, w);
            } catch (e) {
              w(e);
            }
            return;
          }
          let E;
          try {
            var A;
            if (
              ((E = !!x || c.call(v, t, v)),
              'function' == typeof (null == (A = E) ? void 0 : A.then))
            )
              throw new Error(
                `Validation test of type: "${v.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`,
              );
          } catch (e) {
            return void w(e);
          }
          y(E);
        }
        return (t.OPTIONS = e), t;
      }
      function Dr(e, t, n, i = n) {
        let s, r, o;
        return t
          ? ((0, lr.forEach)(t, (a, l, c) => {
              let u = l ? a.slice(1, a.length - 1) : a,
                h = 'tuple' === (e = e.resolve({ context: i, parent: s, value: n })).type,
                d = c ? parseInt(u, 10) : 0;
              if (e.innerType || h) {
                if (h && !c)
                  throw new Error(
                    `Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`,
                  );
                if (n && d >= n.length)
                  throw new Error(
                    `Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `,
                  );
                (s = n), (n = n && n[d]), (e = h ? e.spec.types[d] : e.innerType);
              }
              if (!c) {
                if (!e.fields || !e.fields[u])
                  throw new Error(
                    `The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`,
                  );
                (s = n), (n = n && n[u]), (e = e.fields[u]);
              }
              (r = u), (o = l ? '[' + a + ']' : '.' + a);
            }),
            { schema: e, parent: s, parentPath: r })
          : { parent: s, parentPath: t, schema: e };
      }
      class Fr extends Set {
        describe() {
          const e = [];
          for (const t of this.values()) e.push(Tr.isRef(t) ? t.describe() : t);
          return e;
        }
        resolveAll(e) {
          let t = [];
          for (const n of this.values()) t.push(e(n));
          return t;
        }
        clone() {
          return new Fr(this.values());
        }
        merge(e, t) {
          const n = this.clone();
          return e.forEach((e) => n.add(e)), t.forEach((e) => n.delete(e)), n;
        }
      }
      function jr(e, t = new Map()) {
        if (kr(e) || !e || 'object' != typeof e) return e;
        if (t.has(e)) return t.get(e);
        let n;
        if (e instanceof Date) (n = new Date(e.getTime())), t.set(e, n);
        else if (e instanceof RegExp) (n = new RegExp(e)), t.set(e, n);
        else if (Array.isArray(e)) {
          (n = new Array(e.length)), t.set(e, n);
          for (let i = 0; i < e.length; i++) n[i] = jr(e[i], t);
        } else if (e instanceof Map) {
          (n = new Map()), t.set(e, n);
          for (const [i, s] of e.entries()) n.set(i, jr(s, t));
        } else if (e instanceof Set) {
          (n = new Set()), t.set(e, n);
          for (const i of e) n.add(jr(i, t));
        } else {
          if (!(e instanceof Object)) throw Error(`Unable to clone ${e}`);
          (n = {}), t.set(e, n);
          for (const [i, s] of Object.entries(e)) n[i] = jr(s, t);
        }
        return n;
      }
      class Lr {
        constructor(e) {
          (this.type = void 0),
            (this.deps = []),
            (this.tests = void 0),
            (this.transforms = void 0),
            (this.conditions = []),
            (this._mutate = void 0),
            (this.internalTests = {}),
            (this._whitelist = new Fr()),
            (this._blacklist = new Fr()),
            (this.exclusiveTests = Object.create(null)),
            (this._typeCheck = void 0),
            (this.spec = void 0),
            (this.tests = []),
            (this.transforms = []),
            this.withMutation(() => {
              this.typeError(xr.notType);
            }),
            (this.type = e.type),
            (this._typeCheck = e.check),
            (this.spec = Object.assign(
              {
                strip: !1,
                strict: !1,
                abortEarly: !0,
                recursive: !0,
                nullable: !1,
                optional: !0,
                coerce: !0,
              },
              null == e ? void 0 : e.spec,
            )),
            this.withMutation((e) => {
              e.nonNullable();
            });
        }
        get _type() {
          return this.type;
        }
        clone(e) {
          if (this._mutate) return e && Object.assign(this.spec, e), this;
          const t = Object.create(Object.getPrototypeOf(this));
          return (
            (t.type = this.type),
            (t._typeCheck = this._typeCheck),
            (t._whitelist = this._whitelist.clone()),
            (t._blacklist = this._blacklist.clone()),
            (t.internalTests = Object.assign({}, this.internalTests)),
            (t.exclusiveTests = Object.assign({}, this.exclusiveTests)),
            (t.deps = [...this.deps]),
            (t.conditions = [...this.conditions]),
            (t.tests = [...this.tests]),
            (t.transforms = [...this.transforms]),
            (t.spec = jr(Object.assign({}, this.spec, e))),
            t
          );
        }
        label(e) {
          let t = this.clone();
          return (t.spec.label = e), t;
        }
        meta(...e) {
          if (0 === e.length) return this.spec.meta;
          let t = this.clone();
          return (t.spec.meta = Object.assign(t.spec.meta || {}, e[0])), t;
        }
        withMutation(e) {
          let t = this._mutate;
          this._mutate = !0;
          let n = e(this);
          return (this._mutate = t), n;
        }
        concat(e) {
          if (!e || e === this) return this;
          if (e.type !== this.type && 'mixed' !== this.type)
            throw new TypeError(
              `You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`,
            );
          let t = this,
            n = e.clone();
          const i = Object.assign({}, t.spec, n.spec);
          return (
            (n.spec = i),
            (n.internalTests = Object.assign({}, t.internalTests, n.internalTests)),
            (n._whitelist = t._whitelist.merge(e._whitelist, e._blacklist)),
            (n._blacklist = t._blacklist.merge(e._blacklist, e._whitelist)),
            (n.tests = t.tests),
            (n.exclusiveTests = t.exclusiveTests),
            n.withMutation((t) => {
              e.tests.forEach((e) => {
                t.test(e.OPTIONS);
              });
            }),
            (n.transforms = [...t.transforms, ...n.transforms]),
            n
          );
        }
        isType(e) {
          return null == e
            ? !(!this.spec.nullable || null !== e) || !(!this.spec.optional || void 0 !== e)
            : this._typeCheck(e);
        }
        resolve(e) {
          let t = this;
          if (t.conditions.length) {
            let n = t.conditions;
            (t = t.clone()),
              (t.conditions = []),
              (t = n.reduce((t, n) => n.resolve(t, e), t)),
              (t = t.resolve(e));
          }
          return t;
        }
        resolveOptions(e) {
          var t, n, i;
          return Object.assign({}, e, {
            from: e.from || [],
            strict: null != (t = e.strict) ? t : this.spec.strict,
            abortEarly: null != (n = e.abortEarly) ? n : this.spec.abortEarly,
            recursive: null != (i = e.recursive) ? i : this.spec.recursive,
          });
        }
        cast(e, t = {}) {
          let n = this.resolve(Object.assign({ value: e }, t)),
            i = 'ignore-optionality' === t.assert,
            s = n._cast(e, t);
          if (!1 !== t.assert && !n.isType(s)) {
            if (i && Sr(s)) return s;
            let r = br(e),
              o = br(s);
            throw new TypeError(
              `The value of ${
                t.path || 'field'
              } could not be cast to a value that satisfies the schema type: "${
                n.type
              }". \n\nattempted value: ${r} \n` + (o !== r ? `result of cast: ${o}` : ''),
            );
          }
          return s;
        }
        _cast(e, t) {
          let n = void 0 === e ? e : this.transforms.reduce((t, n) => n.call(this, t, e, this), e);
          return void 0 === n && (n = this.getDefault(t)), n;
        }
        _validate(e, t = {}, n, i) {
          let { path: s, originalValue: r = e, strict: o = this.spec.strict } = t,
            a = e;
          o || (a = this._cast(a, Object.assign({ assert: !1 }, t)));
          let l = [];
          for (let e of Object.values(this.internalTests)) e && l.push(e);
          this.runTests({ path: s, value: a, originalValue: r, options: t, tests: l }, n, (e) => {
            if (e.length) return i(e, a);
            this.runTests(
              { path: s, value: a, originalValue: r, options: t, tests: this.tests },
              n,
              i,
            );
          });
        }
        runTests(e, t, n) {
          let i = !1,
            { tests: s, value: r, originalValue: o, path: a, options: l } = e,
            c = (e) => {
              i || ((i = !0), t(e, r));
            },
            u = (e) => {
              i || ((i = !0), n(e, r));
            },
            h = s.length,
            d = [];
          if (!h) return u([]);
          let f = { value: r, originalValue: o, path: a, options: l, schema: this };
          for (let e = 0; e < s.length; e++)
            (0, s[e])(f, c, function (e) {
              e && (d = d.concat(e)), --h <= 0 && u(d);
            });
        }
        asNestedTest({
          key: e,
          index: t,
          parent: n,
          parentPath: i,
          originalParent: s,
          options: r,
        }) {
          const o = null != e ? e : t;
          if (null == o) throw TypeError('Must include `key` or `index` for nested validations');
          const a = 'number' == typeof o;
          let l = n[o];
          const c = Object.assign({}, r, {
            strict: !0,
            parent: n,
            value: l,
            originalValue: s[o],
            key: void 0,
            [a ? 'index' : 'key']: o,
            path: a || o.includes('.') ? `${i || ''}[${l ? o : `"${o}"`}]` : (i ? `${i}.` : '') + e,
          });
          return (e, t, n) => this.resolve(c)._validate(l, c, t, n);
        }
        validate(e, t) {
          let n = this.resolve(Object.assign({}, t, { value: e }));
          return new Promise((i, s) =>
            n._validate(
              e,
              t,
              (e, t) => {
                wr.isError(e) && (e.value = t), s(e);
              },
              (e, t) => {
                e.length ? s(new wr(e, t)) : i(t);
              },
            ),
          );
        }
        validateSync(e, t) {
          let n;
          return (
            this.resolve(Object.assign({}, t, { value: e }))._validate(
              e,
              Object.assign({}, t, { sync: !0 }),
              (e, t) => {
                throw (wr.isError(e) && (e.value = t), e);
              },
              (t, i) => {
                if (t.length) throw new wr(t, e);
                n = i;
              },
            ),
            n
          );
        }
        isValid(e, t) {
          return this.validate(e, t).then(
            () => !0,
            (e) => {
              if (wr.isError(e)) return !1;
              throw e;
            },
          );
        }
        isValidSync(e, t) {
          try {
            return this.validateSync(e, t), !0;
          } catch (e) {
            if (wr.isError(e)) return !1;
            throw e;
          }
        }
        _getDefault(e) {
          let t = this.spec.default;
          return null == t ? t : 'function' == typeof t ? t.call(this, e) : jr(t);
        }
        getDefault(e) {
          return this.resolve(e || {})._getDefault(e);
        }
        default(e) {
          return 0 === arguments.length ? this._getDefault() : this.clone({ default: e });
        }
        strict(e = !0) {
          return this.clone({ strict: e });
        }
        nullability(e, t) {
          const n = this.clone({ nullable: e });
          return (
            (n.internalTests.nullable = $r({
              message: t,
              name: 'nullable',
              test(e) {
                return null !== e || this.schema.spec.nullable;
              },
            })),
            n
          );
        }
        optionality(e, t) {
          const n = this.clone({ optional: e });
          return (
            (n.internalTests.optionality = $r({
              message: t,
              name: 'optionality',
              test(e) {
                return void 0 !== e || this.schema.spec.optional;
              },
            })),
            n
          );
        }
        optional() {
          return this.optionality(!0);
        }
        defined(e = xr.defined) {
          return this.optionality(!1, e);
        }
        nullable() {
          return this.nullability(!0);
        }
        nonNullable(e = xr.notNull) {
          return this.nullability(!1, e);
        }
        required(e = xr.required) {
          return this.clone().withMutation((t) => t.nonNullable(e).defined(e));
        }
        notRequired() {
          return this.clone().withMutation((e) => e.nullable().optional());
        }
        transform(e) {
          let t = this.clone();
          return t.transforms.push(e), t;
        }
        test(...e) {
          let t;
          if (
            ((t =
              1 === e.length
                ? 'function' == typeof e[0]
                  ? { test: e[0] }
                  : e[0]
                : 2 === e.length
                ? { name: e[0], test: e[1] }
                : { name: e[0], message: e[1], test: e[2] }),
            void 0 === t.message && (t.message = xr.default),
            'function' != typeof t.test)
          )
            throw new TypeError('`test` is a required parameters');
          let n = this.clone(),
            i = $r(t),
            s = t.exclusive || (t.name && !0 === n.exclusiveTests[t.name]);
          if (t.exclusive && !t.name)
            throw new TypeError(
              'Exclusive tests must provide a unique `name` identifying the test',
            );
          return (
            t.name && (n.exclusiveTests[t.name] = !!t.exclusive),
            (n.tests = n.tests.filter((e) => {
              if (e.OPTIONS.name === t.name) {
                if (s) return !1;
                if (e.OPTIONS.test === i.OPTIONS.test) return !1;
              }
              return !0;
            })),
            n.tests.push(i),
            n
          );
        }
        when(e, t) {
          Array.isArray(e) || 'string' == typeof e || ((t = e), (e = '.'));
          let n = this.clone(),
            i = vr(e).map((e) => new Tr(e));
          return (
            i.forEach((e) => {
              e.isSibling && n.deps.push(e.key);
            }),
            n.conditions.push('function' == typeof t ? new Cr(i, t) : Cr.fromOptions(i, t)),
            n
          );
        }
        typeError(e) {
          let t = this.clone();
          return (
            (t.internalTests.typeError = $r({
              message: e,
              name: 'typeError',
              skipAbsent: !0,
              test(e) {
                return (
                  !!this.schema._typeCheck(e) ||
                  this.createError({ params: { type: this.schema.type } })
                );
              },
            })),
            t
          );
        }
        oneOf(e, t = xr.oneOf) {
          let n = this.clone();
          return (
            e.forEach((e) => {
              n._whitelist.add(e), n._blacklist.delete(e);
            }),
            (n.internalTests.whiteList = $r({
              message: t,
              name: 'oneOf',
              skipAbsent: !0,
              test(e) {
                let t = this.schema._whitelist,
                  n = t.resolveAll(this.resolve);
                return (
                  !!n.includes(e) ||
                  this.createError({ params: { values: Array.from(t).join(', '), resolved: n } })
                );
              },
            })),
            n
          );
        }
        notOneOf(e, t = xr.notOneOf) {
          let n = this.clone();
          return (
            e.forEach((e) => {
              n._blacklist.add(e), n._whitelist.delete(e);
            }),
            (n.internalTests.blacklist = $r({
              message: t,
              name: 'notOneOf',
              test(e) {
                let t = this.schema._blacklist,
                  n = t.resolveAll(this.resolve);
                return (
                  !n.includes(e) ||
                  this.createError({ params: { values: Array.from(t).join(', '), resolved: n } })
                );
              },
            })),
            n
          );
        }
        strip(e = !0) {
          let t = this.clone();
          return (t.spec.strip = e), t;
        }
        describe(e) {
          const t = (e ? this.resolve(e) : this).clone(),
            { label: n, meta: i, optional: s, nullable: r } = t.spec;
          return {
            meta: i,
            label: n,
            optional: s,
            nullable: r,
            default: t.getDefault(e),
            type: t.type,
            oneOf: t._whitelist.describe(),
            notOneOf: t._blacklist.describe(),
            tests: t.tests
              .map((e) => ({ name: e.OPTIONS.name, params: e.OPTIONS.params }))
              .filter((e, t, n) => n.findIndex((t) => t.name === e.name) === t),
          };
        }
      }
      Lr.prototype.__isYupSchema__ = !0;
      for (const e of ['validate', 'validateSync'])
        Lr.prototype[`${e}At`] = function (t, n, i = {}) {
          const { parent: s, parentPath: r, schema: o } = Dr(this, t, n, i.context);
          return o[e](s && s[r], Object.assign({}, i, { parent: s, path: t }));
        };
      for (const e of ['equals', 'is']) Lr.prototype[e] = Lr.prototype.oneOf;
      for (const e of ['not', 'nope']) Lr.prototype[e] = Lr.prototype.notOneOf;
      let Pr =
          /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        Ir =
          /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
        Mr =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        Nr = (e) => Sr(e) || e === e.trim(),
        Vr = {}.toString();
      function zr() {
        return new Rr();
      }
      class Rr extends Lr {
        constructor() {
          super({
            type: 'string',
            check(e) {
              return e instanceof String && (e = e.valueOf()), 'string' == typeof e;
            },
          }),
            this.withMutation(() => {
              this.transform((e, t, n) => {
                if (!n.spec.coerce || n.isType(e)) return e;
                if (Array.isArray(e)) return e;
                const i = null != e && e.toString ? e.toString() : e;
                return i === Vr ? e : i;
              });
            });
        }
        required(e) {
          return super.required(e).withMutation((t) =>
            t.test({
              message: e || xr.required,
              name: 'required',
              skipAbsent: !0,
              test: (e) => !!e.length,
            }),
          );
        }
        notRequired() {
          return super
            .notRequired()
            .withMutation(
              (e) => ((e.tests = e.tests.filter((e) => 'required' !== e.OPTIONS.name)), e),
            );
        }
        length(e, t = Er.length) {
          return this.test({
            message: t,
            name: 'length',
            exclusive: !0,
            params: { length: e },
            skipAbsent: !0,
            test(t) {
              return t.length === this.resolve(e);
            },
          });
        }
        min(e, t = Er.min) {
          return this.test({
            message: t,
            name: 'min',
            exclusive: !0,
            params: { min: e },
            skipAbsent: !0,
            test(t) {
              return t.length >= this.resolve(e);
            },
          });
        }
        max(e, t = Er.max) {
          return this.test({
            name: 'max',
            exclusive: !0,
            message: t,
            params: { max: e },
            skipAbsent: !0,
            test(t) {
              return t.length <= this.resolve(e);
            },
          });
        }
        matches(e, t) {
          let n,
            i,
            s = !1;
          return (
            t &&
              ('object' == typeof t
                ? ({ excludeEmptyString: s = !1, message: n, name: i } = t)
                : (n = t)),
            this.test({
              name: i || 'matches',
              message: n || Er.matches,
              params: { regex: e },
              skipAbsent: !0,
              test: (t) => ('' === t && s) || -1 !== t.search(e),
            })
          );
        }
        email(e = Er.email) {
          return this.matches(Pr, { name: 'email', message: e, excludeEmptyString: !0 });
        }
        url(e = Er.url) {
          return this.matches(Ir, { name: 'url', message: e, excludeEmptyString: !0 });
        }
        uuid(e = Er.uuid) {
          return this.matches(Mr, { name: 'uuid', message: e, excludeEmptyString: !1 });
        }
        ensure() {
          return this.default('').transform((e) => (null === e ? '' : e));
        }
        trim(e = Er.trim) {
          return this.transform((e) => (null != e ? e.trim() : e)).test({
            message: e,
            name: 'trim',
            test: Nr,
          });
        }
        lowercase(e = Er.lowercase) {
          return this.transform((e) => (Sr(e) ? e : e.toLowerCase())).test({
            message: e,
            name: 'string_case',
            exclusive: !0,
            skipAbsent: !0,
            test: (e) => Sr(e) || e === e.toLowerCase(),
          });
        }
        uppercase(e = Er.uppercase) {
          return this.transform((e) => (Sr(e) ? e : e.toUpperCase())).test({
            message: e,
            name: 'string_case',
            exclusive: !0,
            skipAbsent: !0,
            test: (e) => Sr(e) || e === e.toUpperCase(),
          });
        }
      }
      zr.prototype = Rr.prototype;
      var Hr =
        /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
      let qr = new Date('');
      function Wr() {
        return new Br();
      }
      class Br extends Lr {
        constructor() {
          super({
            type: 'date',
            check(e) {
              return (
                (t = e),
                '[object Date]' === Object.prototype.toString.call(t) && !isNaN(e.getTime())
              );
              var t;
            },
          }),
            this.withMutation(() => {
              this.transform((e, t, n) =>
                !n.spec.coerce || n.isType(e) || null === e
                  ? e
                  : ((e = (function (e) {
                      var t,
                        n,
                        i = [1, 4, 5, 6, 7, 10, 11],
                        s = 0;
                      if ((n = Hr.exec(e))) {
                        for (var r, o = 0; (r = i[o]); ++o) n[r] = +n[r] || 0;
                        (n[2] = (+n[2] || 1) - 1),
                          (n[3] = +n[3] || 1),
                          (n[7] = n[7] ? String(n[7]).substr(0, 3) : 0),
                          (void 0 !== n[8] && '' !== n[8]) || (void 0 !== n[9] && '' !== n[9])
                            ? ('Z' !== n[8] &&
                                void 0 !== n[9] &&
                                ((s = 60 * n[10] + n[11]), '+' === n[9] && (s = 0 - s)),
                              (t = Date.UTC(n[1], n[2], n[3], n[4], n[5] + s, n[6], n[7])))
                            : (t = +new Date(n[1], n[2], n[3], n[4], n[5], n[6], n[7]));
                      } else t = Date.parse ? Date.parse(e) : NaN;
                      return t;
                    })(e)),
                    isNaN(e) ? Br.INVALID_DATE : new Date(e)),
              );
            });
        }
        prepareParam(e, t) {
          let n;
          if (Tr.isRef(e)) n = e;
          else {
            let i = this.cast(e);
            if (!this._typeCheck(i))
              throw new TypeError(
                `\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`,
              );
            n = i;
          }
          return n;
        }
        min(e, t = Ar.min) {
          let n = this.prepareParam(e, 'min');
          return this.test({
            message: t,
            name: 'min',
            exclusive: !0,
            params: { min: e },
            skipAbsent: !0,
            test(e) {
              return e >= this.resolve(n);
            },
          });
        }
        max(e, t = Ar.max) {
          let n = this.prepareParam(e, 'max');
          return this.test({
            message: t,
            name: 'max',
            exclusive: !0,
            params: { max: e },
            skipAbsent: !0,
            test(e) {
              return e <= this.resolve(n);
            },
          });
        }
      }
      function Ur(e, t) {
        let n = 1 / 0;
        return (
          e.some((e, i) => {
            var s;
            if (null != (s = t.path) && s.includes(e)) return (n = i), !0;
          }),
          n
        );
      }
      function Kr(e) {
        return (t, n) => Ur(e, t) - Ur(e, n);
      }
      (Br.INVALID_DATE = qr), (Wr.prototype = Br.prototype), (Wr.INVALID_DATE = qr);
      const Yr = (e, t, n) => {
        if ('string' != typeof e) return e;
        let i = e;
        try {
          i = JSON.parse(e);
        } catch (e) {}
        return n.isType(i) ? i : e;
      };
      function Zr(e) {
        if ('fields' in e) {
          const t = {};
          for (const [n, i] of Object.entries(e.fields)) t[n] = Zr(i);
          return e.setFields(t);
        }
        if ('array' === e.type) {
          const t = e.optional();
          return t.innerType && (t.innerType = Zr(t.innerType)), t;
        }
        return 'tuple' === e.type
          ? e.optional().clone({ types: e.spec.types.map(Zr) })
          : 'optional' in e
          ? e.optional()
          : e;
      }
      let Qr = (e) => '[object Object]' === Object.prototype.toString.call(e);
      const Xr = Kr([]);
      function Jr(e) {
        return new Gr(e);
      }
      class Gr extends Lr {
        constructor(e) {
          super({
            type: 'object',
            check(e) {
              return Qr(e) || 'function' == typeof e;
            },
          }),
            (this.fields = Object.create(null)),
            (this._sortErrors = Xr),
            (this._nodes = []),
            (this._excludedEdges = []),
            this.withMutation(() => {
              e && this.shape(e);
            });
        }
        _cast(e, t = {}) {
          var n;
          let i = super._cast(e, t);
          if (void 0 === i) return this.getDefault(t);
          if (!this._typeCheck(i)) return i;
          let s = this.fields,
            r = null != (n = t.stripUnknown) ? n : this.spec.noUnknown,
            o = [].concat(
              this._nodes,
              Object.keys(i).filter((e) => !this._nodes.includes(e)),
            ),
            a = {},
            l = Object.assign({}, t, { parent: a, __validating: t.__validating || !1 }),
            c = !1;
          for (const e of o) {
            let n = s[e],
              o = e in i;
            if (n) {
              let s,
                r = i[e];
              (l.path = (t.path ? `${t.path}.` : '') + e),
                (n = n.resolve({ value: r, context: t.context, parent: a }));
              let o = n instanceof Lr ? n.spec : void 0,
                u = null == o ? void 0 : o.strict;
              if (null != o && o.strip) {
                c = c || e in i;
                continue;
              }
              (s = t.__validating && u ? i[e] : n.cast(i[e], l)), void 0 !== s && (a[e] = s);
            } else o && !r && (a[e] = i[e]);
            (o === e in a && a[e] === i[e]) || (c = !0);
          }
          return c ? a : i;
        }
        _validate(e, t = {}, n, i) {
          let { from: s = [], originalValue: r = e, recursive: o = this.spec.recursive } = t;
          (t.from = [{ schema: this, value: r }, ...s]),
            (t.__validating = !0),
            (t.originalValue = r),
            super._validate(e, t, n, (e, s) => {
              if (!o || !Qr(s)) return void i(e, s);
              r = r || s;
              let a = [];
              for (let e of this._nodes) {
                let n = this.fields[e];
                n &&
                  !Tr.isRef(n) &&
                  a.push(
                    n.asNestedTest({
                      options: t,
                      key: e,
                      parent: s,
                      parentPath: t.path,
                      originalParent: r,
                    }),
                  );
              }
              this.runTests({ tests: a, value: s, originalValue: r, options: t }, n, (t) => {
                i(t.sort(this._sortErrors).concat(e), s);
              });
            });
        }
        clone(e) {
          const t = super.clone(e);
          return (
            (t.fields = Object.assign({}, this.fields)),
            (t._nodes = this._nodes),
            (t._excludedEdges = this._excludedEdges),
            (t._sortErrors = this._sortErrors),
            t
          );
        }
        concat(e) {
          let t = super.concat(e),
            n = t.fields;
          for (let [e, t] of Object.entries(this.fields)) {
            const i = n[e];
            n[e] = void 0 === i ? t : i;
          }
          return t.withMutation((t) =>
            t.setFields(n, [...this._excludedEdges, ...e._excludedEdges]),
          );
        }
        _getDefault(e) {
          if ('default' in this.spec) return super._getDefault(e);
          if (!this._nodes.length) return;
          let t = {};
          return (
            this._nodes.forEach((n) => {
              var i;
              const s = this.fields[n];
              let r = e;
              null != (i = r) &&
                i.value &&
                (r = Object.assign({}, r, { parent: r.value, value: r.value[n] })),
                (t[n] = s && 'getDefault' in s ? s.getDefault(r) : void 0);
            }),
            t
          );
        }
        setFields(e, t) {
          let n = this.clone();
          return (
            (n.fields = e),
            (n._nodes = (function (e, t = []) {
              let n = [],
                i = new Set(),
                s = new Set(t.map(([e, t]) => `${e}-${t}`));
              function r(e, t) {
                let r = (0, lr.split)(e)[0];
                i.add(r), s.has(`${t}-${r}`) || n.push([t, r]);
              }
              for (const t of Object.keys(e)) {
                let n = e[t];
                i.add(t),
                  Tr.isRef(n) && n.isSibling
                    ? r(n.path, t)
                    : kr(n) && 'deps' in n && n.deps.forEach((e) => r(e, t));
              }
              return hr().array(Array.from(i), n).reverse();
            })(e, t)),
            (n._sortErrors = Kr(Object.keys(e))),
            t && (n._excludedEdges = t),
            n
          );
        }
        shape(e, t = []) {
          return this.clone().withMutation((n) => {
            let i = n._excludedEdges;
            return (
              t.length && (Array.isArray(t[0]) || (t = [t]), (i = [...n._excludedEdges, ...t])),
              n.setFields(Object.assign(n.fields, e), i)
            );
          });
        }
        partial() {
          const e = {};
          for (const [t, n] of Object.entries(this.fields))
            e[t] = 'optional' in n && n.optional instanceof Function ? n.optional() : n;
          return this.setFields(e);
        }
        deepPartial() {
          return Zr(this);
        }
        pick(e) {
          const t = {};
          for (const n of e) this.fields[n] && (t[n] = this.fields[n]);
          return this.setFields(t);
        }
        omit(e) {
          const t = Object.assign({}, this.fields);
          for (const n of e) delete t[n];
          return this.setFields(t);
        }
        from(e, t, n) {
          let i = (0, lr.getter)(e, !0);
          return this.transform((s) => {
            if (!s) return s;
            let r = s;
            return (
              ((e, t) => {
                const n = [...(0, lr.normalizePath)(t)];
                if (1 === n.length) return n[0] in e;
                let i = n.pop(),
                  s = (0, lr.getter)((0, lr.join)(n), !0)(e);
                return !(!s || !(i in s));
              })(s, e) && ((r = Object.assign({}, s)), n || delete r[e], (r[t] = i(s))),
              r
            );
          });
        }
        json() {
          return this.transform(Yr);
        }
        noUnknown(e = !0, t = Or.noUnknown) {
          'boolean' != typeof e && ((t = e), (e = !0));
          let n = this.test({
            name: 'noUnknown',
            exclusive: !0,
            message: t,
            test(t) {
              if (null == t) return !0;
              const n = (function (e, t) {
                let n = Object.keys(e.fields);
                return Object.keys(t).filter((e) => -1 === n.indexOf(e));
              })(this.schema, t);
              return (
                !e || 0 === n.length || this.createError({ params: { unknown: n.join(', ') } })
              );
            },
          });
          return (n.spec.noUnknown = e), n;
        }
        unknown(e = !0, t = Or.noUnknown) {
          return this.noUnknown(!e, t);
        }
        transformKeys(e) {
          return this.transform((t) => {
            if (!t) return t;
            const n = {};
            for (const i of Object.keys(t)) n[e(i)] = t[i];
            return n;
          });
        }
        camelCase() {
          return this.transformKeys(cr.camelCase);
        }
        snakeCase() {
          return this.transformKeys(cr.snakeCase);
        }
        constantCase() {
          return this.transformKeys((e) => (0, cr.snakeCase)(e).toUpperCase());
        }
        describe(e) {
          let t = super.describe(e);
          t.fields = {};
          for (const [i, s] of Object.entries(this.fields)) {
            var n;
            let r = e;
            null != (n = r) &&
              n.value &&
              (r = Object.assign({}, r, { parent: r.value, value: r.value[i] })),
              (t.fields[i] = s.describe(r));
          }
          return t;
        }
      }
      Jr.prototype = Gr.prototype;
      const eo = '.',
        to = Symbol('target'),
        no = Symbol('unsubscribe');
      function io(e) {
        return (
          e instanceof Date ||
          e instanceof Set ||
          e instanceof Map ||
          e instanceof WeakSet ||
          e instanceof WeakMap ||
          ArrayBuffer.isView(e)
        );
      }
      var so = Array.isArray;
      function ro(e) {
        return 'symbol' == typeof e;
      }
      const oo = {
        after: (e, t) => (so(e) ? e.slice(t.length) : '' === t ? e : e.slice(t.length + 1)),
        concat: (e, t) =>
          so(e)
            ? ((e = [...e]), t && e.push(t), e)
            : t && void 0 !== t.toString
            ? ('' !== e && (e += eo), ro(t) ? e + t.toString() : e + t)
            : e,
        initial: (e) => {
          if (so(e)) return e.slice(0, -1);
          if ('' === e) return e;
          const t = e.lastIndexOf(eo);
          return -1 === t ? '' : e.slice(0, t);
        },
        last: (e) => {
          if (so(e)) return e[e.length - 1] || '';
          if ('' === e) return e;
          const t = e.lastIndexOf(eo);
          return -1 === t ? e : e.slice(t + 1);
        },
        walk: (e, t) => {
          if (so(e)) for (const n of e) t(n);
          else if ('' !== e) {
            let n = 0,
              i = e.indexOf(eo);
            if (-1 === i) t(e);
            else
              for (; n < e.length; )
                -1 === i && (i = e.length), t(e.slice(n, i)), (n = i + 1), (i = e.indexOf(eo, n));
          }
        },
        get(e, t) {
          return (
            this.walk(t, (t) => {
              e && (e = e[t]);
            }),
            e
          );
        },
      };
      var ao = oo;
      function lo(e, t, n) {
        return (
          e.isUnsubscribed ||
          (t.ignoreSymbols && ro(n)) ||
          (t.ignoreUnderscores && '_' === n.charAt(0)) ||
          ('ignoreKeys' in t && t.ignoreKeys.includes(n))
        );
      }
      class co {
        constructor(e) {
          (this._equals = e),
            (this._proxyCache = new WeakMap()),
            (this._pathCache = new WeakMap()),
            (this.isUnsubscribed = !1);
        }
        _getDescriptorCache() {
          return (
            void 0 === this._descriptorCache && (this._descriptorCache = new WeakMap()),
            this._descriptorCache
          );
        }
        _getProperties(e) {
          const t = this._getDescriptorCache();
          let n = t.get(e);
          return void 0 === n && ((n = {}), t.set(e, n)), n;
        }
        _getOwnPropertyDescriptor(e, t) {
          if (this.isUnsubscribed) return Reflect.getOwnPropertyDescriptor(e, t);
          const n = this._getProperties(e);
          let i = n[t];
          return void 0 === i && ((i = Reflect.getOwnPropertyDescriptor(e, t)), (n[t] = i)), i;
        }
        getProxy(e, t, n, i) {
          if (this.isUnsubscribed) return e;
          const s = e[i],
            r = s || e;
          this._pathCache.set(r, t);
          let o = this._proxyCache.get(r);
          return (
            void 0 === o && ((o = void 0 === s ? new Proxy(e, n) : e), this._proxyCache.set(r, o)),
            o
          );
        }
        getPath(e) {
          return this.isUnsubscribed ? void 0 : this._pathCache.get(e);
        }
        isDetached(e, t) {
          return !Object.is(e, ao.get(t, this.getPath(e)));
        }
        defineProperty(e, t, n) {
          return (
            !!Reflect.defineProperty(e, t, n) &&
            (this.isUnsubscribed || (this._getProperties(e)[t] = n), !0)
          );
        }
        setProperty(e, t, n, i, s) {
          if (!this._equals(s, n) || !(t in e)) {
            const s = this._getOwnPropertyDescriptor(e, t);
            return void 0 !== s && 'set' in s ? Reflect.set(e, t, n, i) : Reflect.set(e, t, n);
          }
          return !0;
        }
        deleteProperty(e, t, n) {
          if (Reflect.deleteProperty(e, t)) {
            if (!this.isUnsubscribed) {
              const i = this._getDescriptorCache().get(e);
              i && (delete i[t], this._pathCache.delete(n));
            }
            return !0;
          }
          return !1;
        }
        isSameDescriptor(e, t, n) {
          const i = this._getOwnPropertyDescriptor(t, n);
          return (
            void 0 !== e &&
            void 0 !== i &&
            Object.is(e.value, i.value) &&
            (e.writable || !1) === (i.writable || !1) &&
            (e.enumerable || !1) === (i.enumerable || !1) &&
            (e.configurable || !1) === (i.configurable || !1) &&
            e.get === i.get &&
            e.set === i.set
          );
        }
        isGetInvariant(e, t) {
          const n = this._getOwnPropertyDescriptor(e, t);
          return void 0 !== n && !0 !== n.configurable && !0 !== n.writable;
        }
        unsubscribe() {
          (this._descriptorCache = null),
            (this._pathCache = null),
            (this._proxyCache = null),
            (this.isUnsubscribed = !0);
        }
      }
      function uo(e) {
        return '[object Object]' === toString.call(e);
      }
      function ho() {
        return !0;
      }
      function fo(e, t) {
        return e.length !== t.length || e.some((e, n) => t[n] !== e);
      }
      const po = new Set([
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf',
        ]),
        mo = new Set(['concat', 'includes', 'indexOf', 'join', 'keys', 'lastIndexOf']),
        go = {
          push: ho,
          pop: ho,
          shift: ho,
          unshift: ho,
          copyWithin: fo,
          reverse: fo,
          sort: fo,
          splice: fo,
          flat: fo,
          fill: fo,
        },
        _o = new Set([...po, ...mo, ...Object.keys(go)]);
      function bo(e, t) {
        if (e.size !== t.size) return !0;
        for (const n of e) if (!t.has(n)) return !0;
        return !1;
      }
      const vo = ['keys', 'values', 'entries'],
        yo = new Set(['has', 'toString']),
        wo = { add: bo, clear: bo, delete: bo, forEach: bo },
        xo = new Set([...yo, ...Object.keys(wo), ...vo]);
      function Eo(e, t) {
        if (e.size !== t.size) return !0;
        let n;
        for (const [i, s] of e)
          if (((n = t.get(i)), n !== s || (void 0 === n && !t.has(i)))) return !0;
        return !1;
      }
      const Ao = new Set([...yo, 'get']),
        Oo = { set: Eo, clear: Eo, delete: Eo, forEach: Eo },
        ko = new Set([...Ao, ...Object.keys(Oo), ...vo]);
      class Co {
        constructor(e, t, n, i) {
          (this._path = t),
            (this._isChanged = !1),
            (this._clonedCache = new Set()),
            (this._hasOnValidate = i),
            (this._changes = i ? [] : null),
            (this.clone = void 0 === t ? e : this._shallowClone(e));
        }
        static isHandledMethod(e) {
          return po.has(e);
        }
        _shallowClone(e) {
          let t = e;
          if (uo(e)) t = { ...e };
          else if (so(e) || ArrayBuffer.isView(e)) t = [...e];
          else if (e instanceof Date) t = new Date(e);
          else if (e instanceof Set) t = new Set([...e].map((e) => this._shallowClone(e)));
          else if (e instanceof Map) {
            t = new Map();
            for (const [n, i] of e.entries()) t.set(n, this._shallowClone(i));
          }
          return this._clonedCache.add(t), t;
        }
        preferredThisArg(e, t, n, i) {
          return e
            ? (so(i)
                ? (this._onIsChanged = go[t])
                : i instanceof Set
                ? (this._onIsChanged = wo[t])
                : i instanceof Map && (this._onIsChanged = Oo[t]),
              i)
            : n;
        }
        update(e, t, n) {
          const i = ao.after(e, this._path);
          if ('length' !== t) {
            let e = this.clone;
            ao.walk(i, (t) => {
              e &&
                e[t] &&
                (this._clonedCache.has(e[t]) || (e[t] = this._shallowClone(e[t])), (e = e[t]));
            }),
              this._hasOnValidate && this._changes.push({ path: i, property: t, previous: n }),
              e && e[t] && (e[t] = n);
          }
          this._isChanged = !0;
        }
        undo(e) {
          let t;
          for (let n = this._changes.length - 1; -1 !== n; n--)
            (t = this._changes[n]), (ao.get(e, t.path)[t.property] = t.previous);
        }
        isChanged(e) {
          return void 0 === this._onIsChanged ? this._isChanged : this._onIsChanged(this.clone, e);
        }
      }
      class To extends Co {
        static isHandledMethod(e) {
          return _o.has(e);
        }
      }
      class So extends Co {
        undo(e) {
          e.setTime(this.clone.getTime());
        }
        isChanged(e, t) {
          return !t(this.clone.valueOf(), e.valueOf());
        }
      }
      class $o extends Co {
        static isHandledMethod(e) {
          return xo.has(e);
        }
        undo(e) {
          for (const t of this.clone) e.add(t);
          for (const t of e) this.clone.has(t) || e.delete(t);
        }
      }
      class Do extends Co {
        static isHandledMethod(e) {
          return ko.has(e);
        }
        undo(e) {
          for (const [t, n] of this.clone.entries()) e.set(t, n);
          for (const t of e.keys()) this.clone.has(t) || e.delete(t);
        }
      }
      class Fo extends Co {
        constructor(e, t, n, i) {
          super(void 0, t, n, i), (this._arg1 = n[0]), (this._weakValue = e.has(this._arg1));
        }
        isChanged(e) {
          return this._weakValue !== e.has(this._arg1);
        }
        undo(e) {
          this._weakValue && !e.has(this._arg1) ? e.add(this._arg1) : e.delete(this._arg1);
        }
      }
      class jo extends Co {
        constructor(e, t, n, i) {
          super(void 0, t, n, i),
            (this._weakKey = n[0]),
            (this._weakHas = e.has(this._weakKey)),
            (this._weakValue = e.get(this._weakKey));
        }
        isChanged(e) {
          return this._weakValue !== e.get(this._weakKey);
        }
        undo(e) {
          const t = e.has(this._weakKey);
          this._weakHas && !t
            ? e.set(this._weakKey, this._weakValue)
            : !this._weakHas && t
            ? e.delete(this._weakKey)
            : this._weakValue !== e.get(this._weakKey) && e.set(this._weakKey, this._weakValue);
        }
      }
      class Lo {
        constructor(e) {
          (this._stack = []), (this._hasOnValidate = e);
        }
        static isHandledType(e) {
          return uo(e) || so(e) || io(e);
        }
        static isHandledMethod(e, t) {
          return uo(e)
            ? Co.isHandledMethod(t)
            : so(e)
            ? To.isHandledMethod(t)
            : e instanceof Set
            ? $o.isHandledMethod(t)
            : e instanceof Map
            ? Do.isHandledMethod(t)
            : io(e);
        }
        get isCloning() {
          return this._stack.length > 0;
        }
        start(e, t, n) {
          let i = Co;
          so(e)
            ? (i = To)
            : e instanceof Date
            ? (i = So)
            : e instanceof Set
            ? (i = $o)
            : e instanceof Map
            ? (i = Do)
            : e instanceof WeakSet
            ? (i = Fo)
            : e instanceof WeakMap && (i = jo),
            this._stack.push(new i(e, t, n, this._hasOnValidate));
        }
        update(e, t, n) {
          this._stack[this._stack.length - 1].update(e, t, n);
        }
        preferredThisArg(e, t, n) {
          const { name: i } = e,
            s = Lo.isHandledMethod(n, i);
          return this._stack[this._stack.length - 1].preferredThisArg(s, i, t, n);
        }
        isChanged(e, t, n) {
          return this._stack[this._stack.length - 1].isChanged(e, t, n);
        }
        undo(e) {
          void 0 !== this._previousClone && this._previousClone.undo(e);
        }
        stop() {
          return (this._previousClone = this._stack.pop()), this._previousClone.clone;
        }
      }
      const Po = {
          equals: Object.is,
          isShallow: !1,
          pathAsArray: !1,
          ignoreSymbols: !1,
          ignoreUnderscores: !1,
          ignoreDetached: !1,
          details: !1,
        },
        Io = (e, t, n = {}) => {
          n = { ...Po, ...n };
          const i = Symbol('ProxyTarget'),
            { equals: s, isShallow: r, ignoreDetached: o, details: a } = n,
            l = new co(s),
            c = 'function' == typeof n.onValidate,
            u = new Lo(c),
            h = (e, t, i, s, r) =>
              !c || u.isCloning || !0 === n.onValidate(ao.concat(l.getPath(e), t), i, s, r),
            d = (t, i, s, r) => {
              lo(l, n, i) || (o && l.isDetached(t, e)) || f(l.getPath(t), i, s, r);
            },
            f = (e, n, i, s, r) => {
              u.isCloning ? u.update(e, n, s) : t(ao.concat(e, n), i, s, r);
            },
            p = (e) => (e && e[i]) || e,
            m = (t, s, a, c) =>
              (function (e) {
                return (
                  ('object' == typeof e ? null === e : 'function' != typeof e) ||
                  e instanceof RegExp
                );
              })(t) ||
              'constructor' === a ||
              (r && !Lo.isHandledMethod(s, a)) ||
              lo(l, n, a) ||
              l.isGetInvariant(s, a) ||
              (o && l.isDetached(s, e))
                ? t
                : (void 0 === c && (c = l.getPath(s)), l.getProxy(t, ao.concat(c, a), g, i)),
            g = {
              get(e, t, n) {
                if (ro(t)) {
                  if (t === i || t === to) return e;
                  if (t === no && !l.isUnsubscribed && 0 === l.getPath(e).length)
                    return l.unsubscribe(), e;
                }
                const s = io(e) ? Reflect.get(e, t) : Reflect.get(e, t, n);
                return m(s, e, t);
              },
              set(e, t, n, r) {
                n = p(n);
                const o = e[i] || e,
                  a = o[t];
                if (s(a, n) && t in e) return !0;
                const c = h(e, t, n, a);
                return c && l.setProperty(o, t, n, r, a) ? (d(e, t, e[t], a), !0) : !c;
              },
              defineProperty(e, t, n) {
                if (!l.isSameDescriptor(n, e, t)) {
                  const i = e[t];
                  h(e, t, n.value, i) && l.defineProperty(e, t, n, i) && d(e, t, n.value, i);
                }
                return !0;
              },
              deleteProperty(e, t) {
                if (!Reflect.has(e, t)) return !0;
                const n = Reflect.get(e, t),
                  i = h(e, t, void 0, n);
                return i && l.deleteProperty(e, t, n) ? (d(e, t, void 0, n), !0) : !i;
              },
              apply(t, n, r) {
                const o = n[i] || n;
                if (l.isUnsubscribed) return Reflect.apply(t, o, r);
                if ((!1 === a || (!0 !== a && !a.includes(t.name))) && Lo.isHandledType(o)) {
                  let i = ao.initial(l.getPath(t));
                  const a = Lo.isHandledMethod(o, t.name);
                  u.start(o, i, r);
                  let d = Reflect.apply(t, u.preferredThisArg(t, n, o), a ? r.map((e) => p(e)) : r);
                  const _ = u.isChanged(o, s),
                    b = u.stop();
                  if (
                    (Lo.isHandledType(d) &&
                      a &&
                      (n instanceof Map && 'get' === t.name && (i = ao.concat(i, r[0])),
                      (d = l.getProxy(d, i, g))),
                    _)
                  ) {
                    const n = { name: t.name, args: r, result: d },
                      s = u.isCloning ? ao.initial(i) : i,
                      a = u.isCloning ? ao.last(i) : '';
                    h(ao.get(e, s), a, o, b, n) ? f(s, a, o, b, n) : u.undo(o);
                  }
                  return (n instanceof Map || n instanceof Set) &&
                    'object' == typeof (c = d) &&
                    'function' == typeof c.next
                    ? (function (e, t, n, i, s) {
                        const r = e.next;
                        if ('entries' === t.name)
                          e.next = function () {
                            const e = r.call(this);
                            return (
                              !1 === e.done &&
                                ((e.value[0] = s(e.value[0], t, e.value[0], i)),
                                (e.value[1] = s(e.value[1], t, e.value[0], i))),
                              e
                            );
                          };
                        else if ('values' === t.name) {
                          const o = n[to].keys();
                          e.next = function () {
                            const e = r.call(this);
                            return !1 === e.done && (e.value = s(e.value, t, o.next().value, i)), e;
                          };
                        } else
                          e.next = function () {
                            const e = r.call(this);
                            return !1 === e.done && (e.value = s(e.value, t, e.value, i)), e;
                          };
                        return e;
                      })(d, t, n, i, m)
                    : d;
                }
                var c;
                return Reflect.apply(t, n, r);
              },
            },
            _ = l.getProxy(e, n.pathAsArray ? [] : '', g);
          return (t = t.bind(_)), c && (n.onValidate = n.onValidate.bind(_)), _;
        };
      (Io.target = (e) => (e && e[to]) || e), (Io.unsubscribe = (e) => e[no] || e);
      var Mo = Io;
      (() => {
        const e = { rssForm: {} };
        (e.rssForm.feedsList = []), (e.rssForm.input = { value: '', valid: !0, status: 'waiting' });
        const t = document.querySelector('form[name="Rss manager form"]'),
          n = t.querySelector('input[type="text"]'),
          i =
            ((s = e.rssForm.feedsList),
            Jr().shape({
              link: zr()
                .url('Must be a valid URL')
                .test('Must have .rss link format', 'Ресурс не содержит валидный RSS', (e) =>
                  /\.rss$/i.test(e),
                )
                .test('Must not be listed in feeList', 'RSS уже существует', (e) => !s.includes(e)),
            }));
        var s;
        const r = ((e, t) => {
          const n = Mo(e, () => {
            ((e, t) => {
              const n = e.rssForm.input.valid;
              switch ((console.log(t), n)) {
                case !0:
                  t.classList.remove('is-invalid');
                  break;
                case !1:
                  t.classList.add('is-invalid');
                  break;
                case null:
                  break;
                default:
                  throw new Error('Wrong state property');
              }
            })(e, t);
          });
          return n;
        })(e, n);
        t.addEventListener('submit', (t) => {
          t.preventDefault(),
            i
              .validate({ link: n.value })
              .then((t) => {
                (r.rssForm.input.valid = !0),
                  e.rssForm.feedsList.push(t.link),
                  (n.value = ''),
                  n.focus();
              })
              .catch((e) => {
                (r.rssForm.input.valid = !1), console.log('Validation error, ', e);
              });
        }),
          n.focus();
      })();
    })();
})();