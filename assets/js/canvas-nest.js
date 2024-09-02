!function(){"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=1;t["default"]=function(){return""+n++},e.exports=t["default"]});e(n);var o=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=null;return function(){for(var o=this,r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];clearTimeout(n),n=setTimeout(function(){e.apply(o,i)},t)}},e.exports=t["default"]});e(o);var r=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SizeSensorId="size-sensor-id",t.SensorStyle="display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0",t.SensorClassName="size-sensor-object"});e(r),r.SizeSensorId,r.SensorStyle,r.SensorClassName;var i=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var n,i=(n=o)&&n.__esModule?n:{"default":n};t.createSensor=function(e){var t=void 0,n=[],o=(0,i["default"])(function(){n.forEach(function(t){t(e)})}),a=function(){t&&t.parentNode&&(t.contentDocument.defaultView.removeEventListener("resize",o),t.parentNode.removeChild(t),t=void 0,n=[])};return{element:e,bind:function(i){t||(t=function(){"static"===getComputedStyle(e).position&&(e.style.position="relative");var t=document.createElement("object");return t.onload=function(){t.contentDocument.defaultView.addEventListener("resize",o),o()},t.setAttribute("style",r.SensorStyle),t.setAttribute("class",r.SensorClassName),t.type="text/html",e.appendChild(t),t.data="about:blank",t}()),-1===n.indexOf(i)&&n.push(i)},destroy:a,unbind:function(e){var o=n.indexOf(e);-1!==o&&n.splice(o,1),0===n.length&&t&&a()}}}});e(i),i.createSensor;var a=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var n,r=(n=o)&&n.__esModule?n:{"default":n};t.createSensor=function(e){var t=void 0,n=[],o=(0,r["default"])(function(){n.forEach(function(t){t(e)})}),i=function(){t.disconnect(),n=[],t=void 0};return{element:e,bind:function(r){t||(t=function(){var t=new ResizeObserver(o);return t.observe(e),o(),t}()),-1===n.indexOf(r)&&n.push(r)},destroy:i,unbind:function(e){var o=n.indexOf(e);-1!==o&&n.splice(o,1),0===n.length&&t&&i()}}}});e(a),a.createSensor;var s=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0,t.createSensor="undefined"!=typeof ResizeObserver?a.createSensor:i.createSensor});e(s),s.createSensor;var u=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.removeSensor=t.getSensor=void 0;var o,i=(o=n)&&o.__esModule?o:{"default":o},a={};t.getSensor=function(e){var t=e.getAttribute(r.SizeSensorId);if(t&&a[t])return a[t];var n=(0,i["default"])();e.setAttribute(r.SizeSensorId,n);var o=(0,s.createSensor)(e);return a[n]=o,o},t.removeSensor=function(e){var t=e.element.getAttribute(r.SizeSensorId);e.element.removeAttribute(r.SizeSensorId),e.destroy(),t&&a[t]&&delete a[t]}});e(u),u.removeSensor,u.getSensor;var c=t(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.clear=t.bind=void 0,t.bind=function(e,t){var n=(0,u.getSensor)(e);return n.bind(t),function(){n.unbind(t)}},t.clear=function(e){var t=(0,u.getSensor)(e);(0,u.removeSensor)(t)}});e(c);var l,d,v=c.clear,f=c.bind,h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)},m=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.msCancelAnimationFrame||window.oCancelAnimationFrame||window.clearTimeout,p=function(e){return new Array(e).fill(0).map(function(e,t){return t})},y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),x=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.randomPoints=function(){var e=o.canvas.width/2,t=o.canvas.height/2;return p(o.c.count).map(function(){return{x:e+(Math.random()-.5)*o.canvas.width,y:t+(Math.random()-.5)*o.canvas.height,xa:(2*Math.random()-1)/3,ya:(2*Math.random()-1)/3,max:6e3}})},this.el=t,this.c=y({zIndex:-1,opacity:.5,color:"0,0,0",pointColor:"0,0,0",count:99},n),this.canvas=this.newCanvas(),this.context=this.canvas.getContext("2d"),this.clipCanvasToCircle(),this.points=this.randomPoints(),this.current={x:null,y:null,max:2e4},this.all=this.points.concat([this.current]),this.bindEvent(),this.requestFrame(this.drawCanvas)}return w(e,[{key:"bindEvent",value:function(){var e=this;f(this.el,function(){e.canvas.width=333,e.canvas.height=333}),this.onmousemove=window.onmousemove,window.onmousemove=function(t){var n=e.canvas.getBoundingClientRect();e.current.x=t.clientX-n.left,e.current.y=t.clientY-n.top,e.onmousemove&&e.onmousemove(t)},this.onmouseout=window.onmouseout,window.onmouseout=function(){e.current.x=null,e.current.y=null,e.onmouseout&&e.onmouseout()}}},{key:"newCanvas",value:function(){"static"===getComputedStyle(this.el).position&&(this.el.style.position="relative");var e,t=document.createElement("canvas");return t.style.cssText="display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);height:333px;width:333px;border-radius:50%;overflow:hidden;pointer-events:none;z-index:"+(e=this.c).zIndex+";opacity:"+e.opacity,t.width=333,t.height=333,this.el.appendChild(t),t}},{key:"clipCanvasToCircle",value:function(){this.context.beginPath(),this.context.arc(166.5,166.5,166.5,0,2*Math.PI),this.context.clip()}},{key:"requestFrame",value:function(e){var t=this;this.tid=h(function(){return e.call(t)})}},{key:"drawCanvas",value:function(){function e(){var e=0,t=s.length,n=[];s.forEach(function(t){var o=Math.sqrt(Math.pow(t.x-a.x,2)+Math.pow(t.y-a.y,2));o<=166.5&&(e++,n.push(o))});var o=!0;if(n.length>1){var r=Math.min(...n);o=(Math.max(...n)-r)/r<=.1}return e/t>=m&&o}function t(){var e=2*Math.PI/s.length;s.forEach(function(t,n){var o=n*e;t.x=a.x+166.5*Math.cos(o),t.y=a.y+166.5*Math.sin(o),t.xa=10*(Math.random()-.5),t.ya=10*(Math.random()-.5)})}var n=this,o=this.context,r=this.canvas.width,i=this.canvas.height,a=this.current,s=this.points,u=this.all;o.clearRect(0,0,r,i);var c=void 0,l=void 0,d=void 0,v=void 0,f=void 0,h=void 0;document.addEventListener("DOMContentLoaded",function(){function e(){function e(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,function(e,t,n,o){return t+t+n+n+o+o});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16):null}var t=getComputedStyle(document.documentElement).getPropertyValue("--global-text-color").trim(),n=t.startsWith("#")?e(t):t;o.strokeStyle="rgba("+n+","+(d+.2)+")"}const t=document.getElementById("light-toggle");e(),t.addEventListener("click",function(){toggleThemeSetting(),e()})});var m=.9,p=!1,y=0,w=3e4;s.forEach(function(e,t){if(e.x+=e.xa,e.y+=e.ya,Math.sqrt(Math.pow(e.x-166.5,2)+Math.pow(e.y-166.5,2))>166.5){var r=Math.atan2(e.y-166.5,e.x-166.5);e.x=166.5+166.5*Math.cos(r),e.y=166.5+166.5*Math.sin(r),e.xa*=-1,e.ya*=-1}for(o.fillStyle="rgba("+n.c.pointColor+")",o.fillRect(e.x-.5,e.y-.5,1,1),l=t+1;l<u.length;l++)if(null!==(c=u[l]).x&&null!==c.y&&(v=e.x-c.x,f=e.y-c.y,(h=v*v+f*f)<c.max)){var i=Math.sqrt(Math.pow(a.x-166.5,2)+Math.pow(a.y-166.5,2));c===a&&i<=166.5&&h>=c.max/2&&(e.x-=.01*v,e.y-=.01*f),d=(c.max-h)/c.max,o.beginPath(),o.lineWidth=d/2;var s=getComputedStyle(document.documentElement).getPropertyValue("--global-text-color").trim();function m(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(t,function(e,t,n,o){return t+t+n+n+o+o});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16):null}var p=s.startsWith("#")?m(s):s;o.strokeStyle="rgba("+p+","+(d+.2)+")",o.moveTo(e.x,e.y),o.lineTo(c.x,c.y),o.stroke()}});y=0,w=1e4;!p&&e()?(y+=16.67)>=w&&(p=!0,t()):y=0,this.requestFrame(this.drawCanvas)}},{key:"destroy",value:function(){v(this.el),window.onmousemove=this.onmousemove,window.onmouseout=this.onmouseout,m(this.tid),this.canvas.parentNode.removeChild(this.canvas)}}]),e}();x.version="2.0.4",new x(document.body,{zIndex:(d=(l=document.getElementsByTagName("script"))[l.length-1]).getAttribute("zIndex"),opacity:d.getAttribute("opacity"),color:d.getAttribute("color"),pointColor:d.getAttribute("pointColor"),count:Number(d.getAttribute("count"))||75})}();