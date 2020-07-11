!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("jscolor")):"function"==typeof define&&define.amd?define(["jscolor"],e):"object"==typeof exports?exports.highliter=e(require("jscolor")):t.highliter=e(t.jscolor)}(window,(function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return a(t,arguments,s(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),u(o,t)})(t)}function a(t,e,n){return(a=l()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&u(r,n.prototype),r}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e);var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(f,t);var e,n,o,c,a=(e=f,function(){var t,n=s(e);if(l()){var o=s(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return i(this,t)});function f(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(o=a.call(this)).id=t,o.highlightColor=e,o.hoverColor=n,o.setAttribute("data-highlight-id",t),o}return n=f,(o=[{key:"connectedCallback",value:function(){this.setCSSVars(this.highlightColor,this.hoverColor)}},{key:"setCSSVars",value:function(t,e){this.style="\n      --snippet-highlight-color: ".concat(t,";\n      --snippet-hover-color: ").concat(e,";\n    ")}}])&&r(n.prototype,o),c&&r(n,c),f}(c(HTMLElement));function h(t){customElements.define(t.customTagName,f)}function d(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var g=["SCRIPT","STYLE","NOSCRIPT"];function v(t){var e=t.exclude;return e||(e=[]),Array.isArray(e)||(e=[e]),e=e.map((function(t){return t.toUpperCase()})),{originalHighlightColor:t.highlightColor||"#FAFF60",originalHoverColor:t.hoverColor||"#F1F73B",customTagName:t.customTagName||"highlight-snippet",exclude:[].concat(d(e),g)}}function m(t){return t.match(/^\s*$/)}function y(t){return t.dataset&&t.dataset.highlightId}function b(t){return 8===t.nodeType||3===t.nodeType&&m(t.data)||1===t.nodeType}function E(t){return 1===t.nodeType&&!m(t.textContent)}function C(t){for(var e=t,n=0;e.previousSibling;)n+=(e=e.previousSibling).textContent.length;return n}function S(t,e){for(var n=t.parentElement,o=0;y(n);)o+=C(n),n=n.parentElement;var r=n.tagName.toLowerCase(),i=document.querySelectorAll(r);return{parentTag:r,parentOffset:Array.from(i).indexOf(n),absOffset:o+C(t)+e}}function O(t,e){return document.querySelectorAll(t)[e]}function w(t,e){for(var n,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=[t],i=null,c=0;0!==r.length;)if(3!==(i=r.pop()).nodeType)for(var a=i.childNodes.length-1;a>=0;a--)r.push(i.childNodes[a]);else{if(n=c+i.length,o){if(e<n)break}else if(e<=n)break;c=n}var l=e-c;return{node:i,offset:l}}function _(t){return t.match(/^\s*$/)}function H(t){var e=new Range;return e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset),e.collapsed}function x(t,e,n){for(var o=t.startContainer,r=t.endContainer,i=t.startOffset,c=t.endOffset,a=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode:function(e){return function(t,e,n){return null!=e&&!_(e.data)&&!n.includes(e.parentElement.tagName)&&"none"!==window.getComputedStyle(e.parentElement).getPropertyValue("display")&&t.intersectsNode(e)}(t,e,n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}}),l=[];a.nextNode();){var u=a.currentNode,s=new Range;u===o&&u===r?(s.setStart(u,i),s.setEnd(u,c)):u===o?(s.setStart(u,i),s.setEnd(u,u.data.length)):u===r?(s.setStart(u,0),s.setEnd(u,c)):s.selectNode(u),s.collapsed||l.push(s)}return l}function L(t){if(_(t.toString()))return null;if(t.startOffset===t.startContainer.length||3!==t.startContainer.nodeType){var e=function t(e,n){for(var o=n?e:e.nextSibling||e.parentElement.nextSibling;o;){if(E(o))return t(o.firstChild,!0);if(!b(o))return o;o=o.nextSibling||o.parentElement.nextSibling}return null}(t.startContainer,!1);t.setStart(e,0)}if(0===t.endOffset||3!==t.endContainer.nodeType){var n=function t(e,n){for(var o=n?e:e.previousSibling||e.parentElement.previousSibling;o;){if(E(o))return t(o.lastChild,!0);if(!b(o))return o;o=o.previousSibling||o.parentElement.previousSibling}return null}(t.endContainer,!1);t.setEnd(n,n.data.length)}return t}function R(t,e,n,o){var r=S(e.startContainer,e.startOffset),i=S(e.endContainer,e.endOffset);return{id:t,text:e.toString(),startData:r,endData:i,highlightColor:n,hoverColor:o}}function D(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var I=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.highlightColor=e.originalHighlightColor,this.hoverColor=e.originalHoverColor,this.customTagName=e.customTagName,this.exclude=e.exclude}var e,n,o;return e=t,(n=[{key:"setHighlightColor",value:function(t){this.highlightColor=t}},{key:"setHoverColor",value:function(t){this.hoverColor=t}},{key:"highlight",value:function(t,e){var n=this,o=window.customElements.get(this.customTagName);return x(e,function(t){var e=t.commonAncestorContainer;return 1!==e.nodeType&&(e=e.parentElement),e}(e),this.exclude).map((function(e){var r=new o(t,n.highlightColor,n.hoverColor);return document.body.appendChild(r),e.surroundContents(r),r}))}},{key:"restoreHighlight",value:function(t){if(!function(t){var e=t.id,n=t.text,o=t.startData,r=t.endData,i=t.highlightColor,c=t.hoverColor,a=o&&o.parentTag&&void 0!==o.parentOffset&&void 0!==o.absOffset,l=r&&r.parentTag&&void 0!==r.parentOffset&&void 0!==r.absOffset;return e&&n&&a&&l&&i&&c}(t))throw new Error("Malformed highlight data");var e=document.createRange(),n=t.id,o=t.startData,r=t.endData,i=t.highlightColor,c=t.hoverColor,a=O(o.parentTag,o.parentOffset),l=O(r.parentTag,r.parentOffset);if(!a||!l)throw new Error("Invalid parentTag or parentOffset");var u=w(a,o.absOffset,!0),s=u.node,f=u.offset,h=w(l,r.absOffset),d=h.node,p=h.offset;if(e.setStart(s,f),e.setEnd(d,p),e.collapsed)throw new Error("Invalid range described by highlight data");this.setHighlightColor(i),this.setHoverColor(c),this.highlight(n,e)}}])&&D(e.prototype,n),o&&D(e,o),t}(),T={HOVER:"_hover",HOVER_OUT:"_hover_out",CLICKED:"_clicked",CLICKED_OUT:"_clicked_out",CREATED:"_created",LOADED:"_loaded",REMOVED:"_removed",ERROR_LOADING:"_error_loading",SHOW_MENU:"_show_menu",HIDE_MENU:"_hide_menu"},k=navigator.maxTouchPoints||"ontouchstart"in document.documentElement,j={MOUSE_UP:k?"contextmenu":"mouseup",MOUSE_DOWN:k?"touchstart":"mousedown",HOVER:k?"touchstart":"mouseover",CLICK:k?"touchstart":"click",HIGHLIGHT:"highlight"};function M(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function N(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))}function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function U(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function F(t,e){return(F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function V(t,e){return!e||"object"!==A(e)&&"function"!=typeof e?q(t):e}function q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function G(t){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&F(t,e)}(c,t);var e,n,o,r,i=(e=c,function(){var t,n=G(e);if(W()){var o=G(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return V(this,t)});function c(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return P(this,c),B(q(t=i.call(this)),"start",(function(){t._initDocumentListeners()})),B(q(t),"pause",(function(){document.removeEventListener(j.MOUSE_UP,t._onSelection),document.removeEventListener(j.HIGHLIGHT,t._createHighlight)})),B(q(t),"terminate",(function(){document.removeEventListener(j.MOUSE_UP,t._onSelection),document.removeEventListener(j.CLICK,t._onMouseClick),document.removeEventListener(j.HIGHLIGHT,t._createHighlight),document.removeEventListener(j.HOVER,t._onSnippetHover),t.clearAll()})),B(q(t),"_initDocumentListeners",(function(){document.addEventListener(j.MOUSE_DOWN,(function(){return window.getSelection().removeAllRanges()})),document.addEventListener(j.MOUSE_UP,t._onSelection),document.addEventListener(j.HOVER,t._onSnippetHover),document.addEventListener(j.CLICK,t._onMouseClick),document.addEventListener(j.HIGHLIGHT,t._createHighlight)})),B(q(t),"_onSelection",(function(){var e=window.getSelection();if(e&&e.rangeCount>0){var n=H(e),o=e.getRangeAt(0);if(o.collapsed)return void t.emit(T.HIDE_MENU);var r=L(o);if(!r)return void t.emit(T.HIDE_MENU);t.currentRange={range:r,isSelectionBackwards:n},t.emit(T.SHOW_MENU)}})),B(q(t),"_onMouseClick",(function(e){var n=e.target;if(y(n)){var o=n.dataset.highlightId;t.prevClickedHighlightID!==o&&(t.prevClickedHighlightID&&t.emit(T.CLICKED_OUT,{highlightID:t.prevClickedHighlightID}),t.emit(T.CLICKED,{highlightID:o}),t.prevClickedHighlightID=o)}else t.prevClickedHighlightID&&(t.emit(T.CLICKED_OUT,{highlightID:t.prevClickedHighlightID}),t.prevClickedHighlightID=null)})),B(q(t),"_createHighlight",(function(){var e=N(),n=R(e,t.currentRange.range,t.currentHighlightColor,t.currentHoverColor);0!==t._DOMPainter.highlight(e,t.currentRange.range).length?t.emit(T.CREATED,{highlight:n}):console.error("Invalid highlight selection - no text nodes selected")})),B(q(t),"_onSnippetHover",(function(e){var n=e.target;if(y(n)){var o=n.dataset.highlightId;t.currentHoverHighlightID!==o&&(t.currentHoverHighlightID&&t.emit(T.HOVER_OUT,{highlightID:t.currentHoverHighlightID}),t.emit(T.HOVER,{highlightID:o}),t.currentHoverHighlightID=o)}else t.currentHoverHighlightID&&(t.emit(T.HOVER_OUT,{highlightID:t.currentHoverHighlightID}),t.currentHoverHighlightID=null)})),B(q(t),"setHighlightColor",(function(e){t.currentHighlightColor=e,t._DOMPainter.setHighlightColor(e)})),B(q(t),"setHoverColor",(function(e){t.currentHoverColor=e,t._DOMPainter.setHoverColor(e)})),B(q(t),"remove",(function(e){if(e){var n=document.querySelectorAll("".concat(t.options.customTagName,"[data-highlight-id='").concat(e,"']"));0!==n.length&&(n.forEach((function(t){var e=t.parentElement;Array.from(t.childNodes).forEach((function(n){e.insertBefore(n,t)})),e.removeChild(t),e.normalize()})),t.emit(T.REMOVED,{highlightID:e}))}})),B(q(t),"clearAll",(function(){var e=new Set;document.querySelectorAll("".concat(t.options.customTagName)).forEach((function(n){var o=n.dataset.highlightId;e.has(o)||(t.remove(o),e.add(o))}))})),t.options=v(e),t.currentHighlightColor=t.options.originalHighlightColor,t.currentHoverColor=t.options.originalHoverColor,t._DOMPainter=new I(t.options),h(t.options),t.start(),t}return n=c,(o=[{key:"restoreHighlights",value:function(t){var e=this;t&&t.forEach((function(t){try{e._DOMPainter.restoreHighlight(t)}catch(n){return void e.emit(T.ERROR_LOADING,{highlight:t,error:n.message})}e.emit(T.LOADED,{highlight:t})})),this.setHighlightColor(this.options.originalHighlightColor),this.setHoverColor(this.options.originalHoverColor)}}])&&U(n.prototype,o),r&&U(n,r),c}(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.events=new Map}var e,n,o;return e=t,(n=[{key:"on",value:function(t,e){return this.events.has(t)||this.events.set(t,new Set),this.events.get(t).add(e),this}},{key:"emit",value:function(t){for(var e=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.events.has(t)&&this.events.get(t).forEach((function(t){t.apply(e,o)}))}},{key:"unlisten",value:function(t,e){this.events.has(t)&&this.events.get(t).delete(e)}}])&&M(e.prototype,n),o&&M(e,o),t}());B(K,"Events",T);e.default=K},function(e,n){e.exports=t},function(t,e,n){n(0),t.exports=n(7)},function(t,e,n){var o=n(4),r=n(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);t.exports=r.locals||{}},function(t,e,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),c=[];function a(t){for(var e=-1,n=0;n<c.length;n++)if(c[n].identifier===t){e=n;break}return e}function l(t,e){for(var n={},o=[],r=0;r<t.length;r++){var i=t[r],l=e.base?i[0]+e.base:i[0],u=n[l]||0,s="".concat(l," ").concat(u);n[l]=u+1;var f=a(s),h={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(c[f].references++,c[f].updater(h)):c.push({identifier:s,updater:v(h,e),references:1}),o.push(s)}return o}function u(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var c=i(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var s,f=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function h(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=f(e,r);else{var i=document.createTextNode(r),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}function d(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var p=null,g=0;function v(t,e){var n,o,r;if(e.singleton){var i=g++;n=p||(p=u(e)),o=h.bind(null,n,i,!1),r=h.bind(null,n,i,!0)}else n=u(e),o=d.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=a(n[o]);c[r].references--}for(var i=l(t,e),u=0;u<n.length;u++){var s=a(n[u]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}n=i}}}},function(t,e,n){(e=n(6)(!1)).push([t.i,"body {\n  font-family: 'Lucida Grande';\n}\n\nmain {\n  max-width: 600px;\n  margin: 1% auto;\n}\n\n@media screen and (max-width: 992px) {\n  main {\n    padding: 1px 10px;\n  }\n}\n\n.color-panel {\n  position: fixed;\n  top: 30px;\n  left: 12px;\n  padding: 8px 15px;\n  background-color: rgb(250, 250, 250);\n  border: 1px dotted rgb(54, 54, 54);\n  border-radius: 5px;\n  cursor: grab;\n}\n\n.panel-row {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 10px;\n  user-select: none;\n}\n\n.panel-row:last-child {\n  margin-bottom: 0;\n}\n\n.c-text {\n  color: #292929;\n  font-size: 0.8rem;\n  margin-right: 5px;\n  flex: 20%;\n}\n\n.del-prompt {\n  display: block;\n  position: absolute;\n  color: #f8f8f5;\n  cursor: pointer;\n  padding: 2px 4px;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  background-color: #252525;\n  opacity: 0.9;\n}\n\n.del-prompt:hover {\n  color: rgb(197, 197, 197);\n}\n\n.del-prompt:after {\n  top: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: ' ';\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-color: rgba(136, 183, 213, 0);\n  border-top-color: #464644;\n  border-width: 5px;\n  margin-left: -5px;\n}\n\n.hidden {\n  display: none;\n}\n\n.jscolor {\n  width: 100px;\n}\n\ncustom-elem {\n  transition: all 0.2s ease;\n  background-color: var(--snippet-highlight-color);\n  cursor: pointer;\n}\n\n.hl-hover {\n  background-color: var(--snippet-hover-color);\n}\n\n.hl-clicked {\n  background-color: var(--snippet-hover-color);\n}\n\nbutton {\n  background-color: white;\n  border: 1px solid #363636;\n  border-radius: 3px;\n  padding: 2px 4px;\n  cursor: pointer;\n}\n\nbutton:first-child {\n  margin-right: 5px;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(c=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([r]).join("\n")}var c,a,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<t.length;a++){var l=[].concat(t[a]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),i=n(0);n(3);function c(t){localStorage.setItem("highlights",JSON.stringify(t))}function a(){var t,e=localStorage.getItem("highlights");if(!e)return[];try{t=JSON.parse(e)}catch(t){return console.error("Could not get highlights"),c([]),[]}return t}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){var e="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return h(t,arguments,g(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),p(o,t)})(t)}function h(t,e,n){return(h=d()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&p(r,n.prototype),r}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(c,t);var e,n,o,r,i=(e=c,function(){var t,n=g(e);if(d()){var o=g(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return s(this,t)});function c(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this)).attachShadow({mode:"open"}),t}return n=c,(o=[{key:"connectedCallback",value:function(){this.shadowRoot.innerHTML="\n      <style>\n        :host {\n          --bg-color: rgba(37, 37, 37, 0.9);\n          position: absolute;\n          z-index: 9999;\n          border-radius: 4px;\n          display: block;\n          position: absolute;\n          background-color: var(--bg-color);\n          color: #f8f8f5;\n          cursor: pointer;\n          padding: 2px 4px;\n          border-radius: 4px;\n          font-size: 0.8rem;\n        }\n        \n        :host(:hover) {\n          color: rgb(197, 197, 197);\n        }\n        \n        .menu-pointer {\n          position: absolute;\n          left: 50%;\n          border: solid transparent;\n          height: 0;\n          width: 0;\n          pointer-events: none;\n          border-width: 5px;\n          margin-left: -5px;\n        }\n        \n        .down-pointer {\n          border-top-color: var(--bg-color);\n          top: 100%;\n        }\n        \n        .up-pointer {\n          border-bottom-color: var(--bg-color);\n          bottom: 100%;\n        }\n      </style>\n      <div class='menu-pointer'></div>\n      <div>highlight</div>\n    ",this.addEventListener("click",this._dispatchClick)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this._dispatchClick)}},{key:"_dispatchClick",value:function(){this.dispatchEvent(new CustomEvent("highlight",{bubbles:!0,composed:!0}))}},{key:"isVisible",value:function(){return"none"!==this.style.display}},{key:"hide",value:function(){this.isVisible()&&(this.style.display="none")}},{key:"show",value:function(t){var e=t.range,n=t.isSelectionBackwards,o=e.getClientRects();0!==o.length?(this.style.display="flex",n?(this.style.left="".concat(o[0].left-this.offsetWidth/2,"px"),this.style.top="".concat(o[0].top-this.offsetHeight/2-13,"px"),this.shadowRoot.querySelector(".menu-pointer").classList.remove("up-pointer"),this.shadowRoot.querySelector(".menu-pointer").classList.add("down-pointer")):(this.style.left="".concat(o[o.length-1].right-this.offsetWidth/2,"px"),this.style.top="".concat(o[o.length-1].bottom+5,"px"),this.shadowRoot.querySelector(".menu-pointer").classList.remove("down-pointer"),this.shadowRoot.querySelector(".menu-pointer").classList.add("up-pointer"))):console.error("nothing is selected")}}])&&u(n.prototype,o),r&&u(n,r),c}(f(HTMLElement));!function(){var t,e,n=document.querySelector(".color-panel"),o=!1;function r(o,r){var i=o-t,c=r-e;i<0&&(i=0),i>document.documentElement.clientWidth-n.offsetWidth&&(i=document.documentElement.clientWidth-n.offsetWidth),c<0&&(c=0),c>document.documentElement.clientHeight-n.offsetHeight&&(c=document.documentElement.clientHeight-n.offsetHeight),n.style.left="".concat(i,"px"),n.style.top="".concat(c,"px")}function i(n){var i=n.target;if(i.classList.contains("color-panel")){o=!0;var c=i.getBoundingClientRect();"touchstart"===n.type?(t=n.touches[0].clientX-c.left,e=n.touches[0].clientY-c.top):(t=n.clientX-c.left,e=n.clientY-c.top),i.style.position="fixed",r(n.clientX,n.clientY)}}function c(t){o&&("touchstart"===t.type?r(t.touches[0].clientX,t.touches[0].clientY):r(t.clientX,t.clientY))}function a(){o&&(o=!1)}document.addEventListener("touchstart",i),document.addEventListener("touchend",a),document.addEventListener("touchmove",c),document.addEventListener("mousedown",i),document.addEventListener("mouseup",a),document.addEventListener("mousemove",c)}();var m=function(){customElements.define("highlight-menu",v);var t=document.createElement("highlight-menu");return document.body.append(t),t.hide(),t}(),y=document.createElement("div");document.body.appendChild(y),y.classList.add("del-prompt"),y.classList.add("hidden"),y.textContent="delete";function b(t){return document.querySelectorAll("".concat("custom-elem","[data-highlight-id='").concat(t,"']"))}function E(t,e){b(t).forEach((function(t){t.classList.add(e),t.querySelectorAll("custom-elem").forEach((function(n){n.setCSSVars(t.highlightColor,t.hoverColor),n.classList.add(e)}))}))}function C(t,e){b(t).forEach((function(t){t.classList.remove(e),t.querySelectorAll("custom-elem").forEach((function(t){t.setCSSVars(t.highlightColor,t.hoverColor),t.classList.remove(e)}))}))}var S=new i.default({highlightColor:"#FBFF75",hoverColor:"#F9D186",customTagName:"custom-elem",exclude:[]}),O=!1;S.on(i.default.Events.HOVER,(function(t){var e=t.highlightID;O||E(e,"hl-hover")})).on(i.default.Events.HOVER_OUT,(function(t){var e=t.highlightID;O||C(e,"hl-hover")})).on(i.default.Events.CLICKED_OUT,(function(t){var e=t.highlightID;C(e,"hl-clicked"),C(e,"hl-hover"),O=!1})).on(i.default.Events.CLICKED,(function(t){var e=t.highlightID,n=b(e)[0];E(e,"hl-clicked"),function(t){y.classList.remove("hidden");var e=function(t){var e=t,n=0,o=0;do{n+=e.offsetLeft,o+=e.offsetTop,e=e.offsetParent}while(e);return{left:n,top:o}}(t),n=e.left,o=e.top;y.style.left="".concat(n-y.offsetWidth/2,"px"),y.style.top="".concat(o-y.offsetHeight-5,"px"),y.dataset.id=t.dataset.highlightId}(n),O=!0})).on(i.default.Events.REMOVED,(function(t){var e,n,o=t.highlightID;e=o,(n=a())||(n=[]),c(n.filter((function(t){return t.id!==e}))),console.log("Removed all highlights with id ".concat(o))})).on(i.default.Events.HIDE_MENU,(function(){m.hide()})).on(i.default.Events.SHOW_MENU,(function(){m.show(S.currentRange)})).on(i.default.Events.CREATED,(function(t){!function(t){var e=a();e||(e=[]),e.some((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?t:e})):e.push(t),c(e)}(t.highlight)})).on(i.default.Events.ERROR_LOADING,(function(t){var e=t.highlight,n=t.error;console.error("Failed loading highlight: ",e),console.error("Reason: ",n)})).on(i.default.Events.LOADED,(function(t){var e=t.highlight;console.log("Successfully loaded the following highlight: ",e)}));var w=a();S.restoreHighlights(w),window.addEventListener("resize",(function(){S.currentRange&&m.isVisible()&&m.show(S.currentRange)})),document.addEventListener("click",(function(t){var e=t.target;if(e.classList.contains("del-prompt")){var n=e.dataset.id;C(n,"highlight-hover"),S.remove(n),y.classList.add("hidden")}else e.dataset.highlightId||y.classList.add("hidden")})),document.querySelector("#clear_hl").addEventListener("click",(function(){S.clearAll()})),document.querySelector("#start_hl").addEventListener("click",(function(){S.start()})),document.querySelector("#pause_hl").addEventListener("click",(function(){S.pause()})),document.querySelector("#terminate_hl").addEventListener("click",(function(){S.terminate()}));var _=document.querySelector("#hl-color");_.addEventListener("change",(function(t){var e;e=t.target.jscolor,S.setHighlightColor(e.toHEXString())}));var H=document.querySelector("#hover-color");H.addEventListener("change",(function(t){var e;e=t.target.jscolor,S.setHoverColor(e.toHEXString())})),_.dataset.jscolor="{\n  value: '".concat("#FBFF75","'\n}"),H.dataset.jscolor="{\n  value: '".concat("#F9D186","'\n}"),r.a.trigger("change")}]).default}));