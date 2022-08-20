/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,r)=>{var n=r(698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=d(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h={};function v(){}function p(){}function m(){}var y={};l(y,c,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(j([])));x&&x!==r&&i.call(x,c)&&(y=x);var L=m.prototype=v.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,c,u){var s=d(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:q}}function q(){return{value:void 0,done:!0}}return p.prototype=m,l(L,"constructor",m),l(m,"constructor",p),p.displayName=l(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},w(E.prototype),l(E.prototype,u,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(L),l(L,s,"Generator"),l(L,c,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,r)=>{var n=r(61)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,r){var n=document.documentElement,o="data-outside";function i(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((function(t){n.removeEventListener(t,i)})),r())}t.hasAttribute(o)||(e.forEach((function(t){setTimeout((function(){return n.addEventListener(t,i)}))})),t.setAttribute(o,""))}function e(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}var o,i,a,c,u,s,l,f,d=r(687),h=r.n(d);function v(){var t;t=new MutationObserver((function(e){e[0].target.classList.contains("ativo")&&(t.disconnect(),document.querySelectorAll("[data-numero]").forEach((function(t){var e=+t.innerText,r=Math.floor(e/100),n=0,o=setInterval((function(){n+=r,t.innerText=n,n>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())})))}));var e=document.querySelector(".numeros");t.observe(e,{attributes:!0})}!function(){function t(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('[data-menu="suave"] a[href^="#"]').forEach((function(e){return e.addEventListener("click",t)}))}(),function(){var t=document.querySelectorAll('[data-anime="scroll"]'),e=.5*window.innerHeight;function r(){t.forEach((function(t){t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t.length&&(r(),window.addEventListener("scroll",r))}(),function(){var t=document.querySelectorAll('[data-anime="accordion"] dt');function e(){this.classList.toggle("dd-ativo"),this.nextElementSibling.classList.toggle("dd-ativo")}t.length&&(t[0].classList.add("dd-ativo"),t[0].nextElementSibling.classList.add("dd-ativo"),t.forEach((function(t){return t.addEventListener("click",e)})))}(),function(){document.documentElement.className+=" js";var t=document.querySelectorAll('[data-tab="menu"] li'),e=document.querySelectorAll('[data-tab="content"] section');e[0].classList.add("ativo"),t.length&&e.length&&t.forEach((function(t,r){t.addEventListener("click",(function(){!function(t){e.forEach((function(t){return t.classList.remove("ativo")}));var r=e[t].dataset.anime;e[t].classList.add("ativo",r)}(r)}))}))}(),function(){var t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),r=document.querySelector('[data-modal="container"]');function n(t){t.preventDefault(),r.classList.toggle("ativo")}t&&e&&r&&(t.addEventListener("click",n),e.addEventListener("click",n),r.addEventListener("click",(function(t){t.target===this&&n(t)})))}(),function(){var t=document.querySelectorAll("[data-tooltip]"),e={handleEvent:function(t){this.tooltipBox.style.top="".concat(t.pageY+20,"px"),this.tooltipBox.style.left="".concat(t.pageX+20,"px")}},r={handleEvent:function(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",r),this.element.removeEventListener("mousemove",e)}};function n(){var t=function(t){var e=document.createElement("div"),r=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=r,document.body.appendChild(e),e}(this);e.tooltipBox=t,this.addEventListener("mousemove",e),r.tooltipBox=t,r.element=this,this.addEventListener("mouseleave",r)}t.forEach((function(t){t.addEventListener("mouseover",n)}))}(),function(){function e(e){var r=this;e.preventDefault(),this.classList.add("active"),t(this,["touchstart","click"],(function(){r.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((function(t){["touchstart","click"].forEach((function(r){t.addEventListener(r,e)}))}))}(),function(){var e=document.querySelector('[data-menu="button"]'),r=document.querySelector('[data-menu="list"]'),n=["click","touchstart"];function o(){r.classList.add("active"),e.classList.add("active"),t(r,n,(function(){e.classList.remove("active"),r.classList.remove("active")}))}e&&n.forEach((function(t){return e.addEventListener(t,o)}))}(),i=(o=document.querySelector("[data-semana]")).dataset.semana.split(",").map(Number),a=o.dataset.horario.split(",").map(Number),u=(c=new Date).getDay(),s=c.getHours(),l=-1!==i.indexOf(u),f=s>=a[0]&&s<a[1],l&&f&&o.classList.add("aberto"),function(){function t(){return(t=n(h().mark((function t(e){var r,n,o,i;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.especie,"</h3><span data-numero>").concat(t.total,"</span>"),e},t.next=3,fetch(e);case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,o=document.querySelector(".numeros-grid"),n.forEach((function(t){var e=i(t);o.appendChild(e)})),v();case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}("./animaisapi.json")}(),function(){function t(){return(t=n(h().mark((function t(){var e,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://blockchain.info/ticker");case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,document.querySelector(".btc-preco").innerText=(1e3/r.BRL.sell).toFixed(4),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}()})()})();