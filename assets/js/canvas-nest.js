!(function () {
  "use strict";
  function e(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function t(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var n = t(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = 1;
    (t.default = function () {
      return "" + n++;
    }),
      (e.exports = t.default);
  });
  e(n);
  var o = t(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
          n = null;
        return function () {
          for (var o = this, i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
          clearTimeout(n),
            (n = setTimeout(function () {
              e.apply(o, r);
            }, t));
        };
      }),
      (e.exports = t.default);
  });
  e(o);
  var i = t(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    (t.SizeSensorId = "size-sensor-id"),
      (t.SensorStyle =
        "display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),
      (t.SensorClassName = "size-sensor-object");
  });
  e(i);
  i.SizeSensorId, i.SensorStyle, i.SensorClassName;
  var r = t(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.createSensor = void 0);
    var n,
      r = (n = o) && n.__esModule ? n : { default: n };
    t.createSensor = function (e) {
      var t = void 0,
        n = [],
        o = (0, r.default)(function () {
          n.forEach(function (t) {
            t(e);
          });
        }),
        a = function () {
          t && t.parentNode && (t.contentDocument.defaultView.removeEventListener("resize", o), t.parentNode.removeChild(t), (t = void 0), (n = []));
        };
      return {
        element: e,
        bind: function (r) {
          t ||
            (t = (function () {
              "static" === getComputedStyle(e).position && (e.style.position = "relative");
              var t = document.createElement("object");
              return (
                (t.onload = function () {
                  t.contentDocument.defaultView.addEventListener("resize", o), o();
                }),
                t.setAttribute("style", i.SensorStyle),
                t.setAttribute("class", i.SensorClassName),
                (t.type = "text/html"),
                e.appendChild(t),
                (t.data = "about:blank"),
                t
              );
            })()),
            -1 === n.indexOf(r) && n.push(r);
        },
        destroy: a,
        unbind: function (e) {
          var o = n.indexOf(e);
          -1 !== o && n.splice(o, 1), 0 === n.length && t && a();
        },
      };
    };
  });
  e(r);
  r.createSensor;
  var a = t(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.createSensor = void 0);
    var n,
      i = (n = o) && n.__esModule ? n : { default: n };
    t.createSensor = function (e) {
      var t = void 0,
        n = [],
        o = (0, i.default)(function () {
          n.forEach(function (t) {
            t(e);
          });
        }),
        r = function () {
          t.disconnect(), (n = []), (t = void 0);
        };
      return {
        element: e,
        bind: function (i) {
          t ||
            (t = (function () {
              var t = new ResizeObserver(o);
              return t.observe(e), o(), t;
            })()),
            -1 === n.indexOf(i) && n.push(i);
        },
        destroy: r,
        unbind: function (e) {
          var o = n.indexOf(e);
          -1 !== o && n.splice(o, 1), 0 === n.length && t && r();
        },
      };
    };
  });
  e(a);
  a.createSensor;
  var s = t(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.createSensor = void 0);
    t.createSensor = "undefined" != typeof ResizeObserver ? a.createSensor : r.createSensor;
  });
  e(s);
  s.createSensor;
  var u = t(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.removeSensor = t.getSensor = void 0);
    var o,
      r = (o = n) && o.__esModule ? o : { default: o };
    var a = {};
    (t.getSensor = function (e) {
      var t = e.getAttribute(i.SizeSensorId);
      if (t && a[t]) return a[t];
      var n = (0, r.default)();
      e.setAttribute(i.SizeSensorId, n);
      var o = (0, s.createSensor)(e);
      return (a[n] = o), o;
    }),
      (t.removeSensor = function (e) {
        var t = e.element.getAttribute(i.SizeSensorId);
        e.element.removeAttribute(i.SizeSensorId), e.destroy(), t && a[t] && delete a[t];
      });
  });
  e(u);
  u.removeSensor, u.getSensor;
  var c = t(function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.clear = t.bind = void 0);
    (t.bind = function (e, t) {
      var n = (0, u.getSensor)(e);
      return (
        n.bind(t),
        function () {
          n.unbind(t);
        }
      );
    }),
      (t.clear = function (e) {
        var t = (0, u.getSensor)(e);
        (0, u.removeSensor)(t);
      });
  });
  e(c);
  var l = c.clear,
    d = c.bind,
    v =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      function (e) {
        return window.setTimeout(e, 1e3 / 60);
      },
    f =
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.msCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      window.clearTimeout,
    m = function (e) {
      return new Array(e).fill(0).map(function (e, t) {
        return t;
      });
    },
    h =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      },
    p = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    })();
  var y = (function () {
    function e(t, n) {
      var o = this;
      !(function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (this.randomPoints = function () {
          var centerX = o.canvas.width / 2;
          var centerY = o.canvas.height / 2;
          return m(o.c.count).map(function () {
            return {
              x: centerX + (Math.random() - 0.5) * o.canvas.width,
              y: centerY + (Math.random() - 0.5) * o.canvas.height,
              xa: (2 * Math.random() - 1) / 3, // Halve the x velocity
              ya: (2 * Math.random() - 1) / 3, // Halve the y velocity
              max: 6e3,
            };
          });
        });

      (this.el = t),
        (this.c = h({ zIndex: -1, opacity: 0.5, color: "0,0,0", pointColor: "0,0,0", count: 99 }, n)),
        (this.canvas = this.newCanvas()),
        (this.context = this.canvas.getContext("2d")),
        this.clipCanvasToCircle(),
        (this.points = this.randomPoints()),
        (this.current = { x: null, y: null, max: 2e4 }),
        (this.all = this.points.concat([this.current])),
        this.bindEvent(),
        this.requestFrame(this.drawCanvas);
    }
    return (
      p(e, [
        {
          key: "bindEvent",
          value: function () {
            var e = this;
            d(this.el, function () {
              (e.canvas.width = 333), (e.canvas.height = 333);
            }),
              (this.onmousemove = window.onmousemove),
              (window.onmousemove = function (t) {
                var rect = e.canvas.getBoundingClientRect();
                (e.current.x = t.clientX - rect.left), (e.current.y = t.clientY - rect.top), e.onmousemove && e.onmousemove(t);
              }),
              (this.onmouseout = window.onmouseout),
              (window.onmouseout = function () {
                (e.current.x = null), (e.current.y = null), e.onmouseout && e.onmouseout();
              });
          },
        },
        {
          key: "newCanvas",
          value: function () {
            "static" === getComputedStyle(this.el).position && (this.el.style.position = "relative");
            var e,
              t = document.createElement("canvas");
            return (
              (t.style.cssText =
                "display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);height:333px;width:333px;border-radius:50%;overflow:hidden;pointer-events:none;z-index:" +
                (e = this.c).zIndex +
                ";opacity:" +
                e.opacity),
              (t.width = 333),
              (t.height = 333),
              this.el.appendChild(t),
              t
            );
          },
        },
        {
          key: "clipCanvasToCircle",
          value: function () {
            this.context.beginPath();
            this.context.arc(166.5, 166.5, 166.5, 0, Math.PI * 2);
            this.context.clip();
          },
        },
        {
          key: "requestFrame",
          value: function (e) {
            var t = this;
            this.tid = v(function () {
              return e.call(t);
            });
          },
        },

        {
          key: "drawCanvas",
          value: function () {
            var e = this,
              t = this.context,
              n = this.canvas.width,
              o = this.canvas.height,
              i = this.current,
              r = this.points,
              a = this.all;
            t.clearRect(0, 0, n, o);
            var s = void 0,
              u = void 0,
              c = void 0,
              l = void 0,
              d = void 0,
              v = void 0;

            document.addEventListener("DOMContentLoaded", function () {
              const mode_toggle = document.getElementById("light-toggle");

              // Function to update the color of the lines
              function updateLineColor() {
                // Get the value of the CSS variable --global-text-color
                var globalTextColor = getComputedStyle(document.documentElement).getPropertyValue("--global-text-color").trim();

                // Convert the CSS variable value to RGB format if necessary
                function hexToRgb(hex) {
                  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
                    return r + r + g + g + b + b;
                  });

                  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                  return result ? parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) : null;
                }

                // Check if the color is in hex format and convert it to RGB
                var rgbColor = globalTextColor.startsWith("#") ? hexToRgb(globalTextColor) : globalTextColor;

                // Update the strokeStyle with the new color
                t.strokeStyle = "rgba(" + rgbColor + "," + (c + 0.2) + ")";
              }

              // Function to update the color of the lines
              function updateLineColor() {
                // Get the value of the CSS variable --global-theme-color
                var globalThemeColor = getComputedStyle(document.documentElement).getPropertyValue("--global-theme-color").trim();

                // Convert the CSS variable value to RGB format if necessary
                function hexToRgb(hex) {
                  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
                    return r + r + g + g + b + b;
                  });

                  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                  return result ? parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) : null;
                }

                // Check if the color is in hex format and convert it to RGB
                var rgbColor = globalThemeColor.startsWith("#") ? hexToRgb(globalThemeColor) : globalThemeColor;

                // Update the strokeStyle with the new color
                t.strokeStyle = "rgba(" + rgbColor + ",0.8)";
              }

              // Initial call to set the color on page load
              updateLineColor();

              // Add event listener to the toggle button to update the color when the theme is switched
              document.addEventListener("DOMContentLoaded", function () {
                const mode_toggle = document.getElementById("light-toggle");
                if (mode_toggle) {
                  mode_toggle.addEventListener("click", function () {
                    toggleThemeSetting();
                    updateLineColor();
                  });
                }
              });
            });

            var circleFormationThreshold = 0.9; // 90%
            var explosionTriggered = false;
            var settledTime = 0;
            var settleDuration = 30000; // 30 seconds in milliseconds

            function checkCircleFormation() {
              var dotsInCircle = 0;
              var totalDots = r.length;
              var distances = [];

              // Calculate distances of each dot to the cursor
              r.forEach(function (dot) {
                var distToCursor = Math.sqrt(Math.pow(dot.x - i.x, 2) + Math.pow(dot.y - i.y, 2));
                if (distToCursor <= 166.5) {
                  dotsInCircle++;
                  distances.push(distToCursor);
                }
              });

              // Check if the radius difference between each dot is not greater than 10%
              var withinRadiusDifference = true;
              if (distances.length > 1) {
                var minDist = Math.min(...distances);
                var maxDist = Math.max(...distances);
                var radiusDifference = (maxDist - minDist) / minDist;
                withinRadiusDifference = radiusDifference <= 0.1;
              }

              return dotsInCircle / totalDots >= circleFormationThreshold && withinRadiusDifference;
            }

            function animateExplosion() {
              var angleStep = (2 * Math.PI) / r.length;
              r.forEach(function (dot, index) {
                var angle = index * angleStep;
                dot.x = i.x + 166.5 * Math.cos(angle);
                dot.y = i.y + 166.5 * Math.sin(angle);
                dot.xa = (Math.random() - 0.5) * 10;
                dot.ya = (Math.random() - 0.5) * 10;
              });
            }

            r.forEach(function (r, f) {
              (r.x += r.xa), (r.y += r.ya);
              var dist = Math.sqrt(Math.pow(r.x - 166.5, 2) + Math.pow(r.y - 166.5, 2));
              if (dist > 166.5) {
                var angle = Math.atan2(r.y - 166.5, r.x - 166.5);
                r.x = 166.5 + 166.5 * Math.cos(angle);
                r.y = 166.5 + 166.5 * Math.sin(angle);
                r.xa *= -1;
                r.ya *= -1;
              }
              (t.fillStyle = "rgba(" + e.c.pointColor + ")"), t.fillRect(r.x - 0.5, r.y - 0.5, 1, 1);
              for (u = f + 1; u < a.length; u++) {
                s = a[u];
                if (null !== s.x && null !== s.y) {
                  (l = r.x - s.x), (d = r.y - s.y);
                  if ((v = l * l + d * d) < s.max) {
                    var cursorDist = Math.sqrt(Math.pow(i.x - 166.5, 2) + Math.pow(i.y - 166.5, 2));
                    if (s === i && cursorDist <= 166.5 && v >= s.max / 2) {
                      r.x -= 0.01 * l;
                      r.y -= 0.01 * d;
                    }
                    c = (s.max - v) / s.max;
                    t.beginPath();
                    t.lineWidth = c / 2;

                    // Get the value of the CSS variable --global-text-color
                    var globalTextColor = getComputedStyle(document.documentElement).getPropertyValue("--global-text-color").trim();

                    // Convert the CSS variable value to RGB format if necessary
                    function hexToRgb(hex) {
                      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
                        return r + r + g + g + b + b;
                      });

                      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                      return result ? parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) : null;
                    }

                    // Check if the color is in hex format and convert it to RGB
                    var rgbColor = globalTextColor.startsWith("#") ? hexToRgb(globalTextColor) : globalTextColor;

                    t.strokeStyle = "rgba(" + rgbColor + "," + (c + 0.2) + ")";

                    t.moveTo(r.x, r.y);
                    t.lineTo(s.x, s.y);
                    t.stroke();
                  }
                }
              }
            });

            var settledTime = 0;
            var settleDuration = 10000; // 10 seconds in milliseconds

            // Check for circle formation and trigger explosion
            if (!explosionTriggered && checkCircleFormation()) {
              settledTime += 16.67; // Approximate time for one frame at 60fps
              if (settledTime >= settleDuration) {
                explosionTriggered = true;
                animateExplosion();
              }
            } else {
              settledTime = 0; // Reset the timer if the condition is not met
            }

            this.requestFrame(this.drawCanvas);
          },
        },

        {
          key: "destroy",
          value: function () {
            l(this.el),
              (window.onmousemove = this.onmousemove),
              (window.onmouseout = this.onmouseout),
              f(this.tid),
              this.canvas.parentNode.removeChild(this.canvas);
          },
        },
      ]),
      e
    );
  })();
  y.version = "2.0.4";
  var w, b;
  new y(
    document.body,
    ((w = document.getElementsByTagName("script")),
    {
      zIndex: (b = w[w.length - 1]).getAttribute("zIndex"),
      opacity: b.getAttribute("opacity"),
      color: b.getAttribute("color"),
      pointColor: b.getAttribute("pointColor"),
      count: Number(b.getAttribute("count")) || 75,
    })
  );
})();
