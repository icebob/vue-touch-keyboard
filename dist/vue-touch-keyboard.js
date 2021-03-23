/**
 * vue-touch-keyboard v0.3.10
 * https://github.com/icebob/vue-touch-keyboard
 * Released under the MIT License.
 */

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueTouchKeyboard=e():t.VueTouchKeyboard=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(1);t.exports={component:r,layouts:n(72),install:function(t){t.component("VueTouchKeyboard",r)}}},function(t,e,n){n(2);var r=n(3)(n(4),n(83),null,null);t.exports=r.exports},function(t,e){},function(t,e){t.exports=function(t,e,n,r){var o,c=t=t||{},i=typeof t["default"];"object"!==i&&"function"!==i||(o=t,c=t["default"]);var s="function"==typeof c?c.options:c;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),r){var a=Object.create(s.computed||null);Object.keys(r).forEach(function(t){var e=r[t];a[t]=function(){return e}}),s.computed=a}return{esModule:o,exports:c,options:s}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),c=r(o),i=n(72),s=r(i),a=n(73),u=r(a),f=n(82),l=r(f);e["default"]={props:{input:[HTMLInputElement,HTMLTextAreaElement],layout:[String,Object],defaultKeySet:{type:String,"default":"default"},accept:Function,cancel:Function,change:Function,next:Function,enter:Function,options:{type:Object,"default":function(){return{}}}},data:function(){return{currentKeySet:this.defaultKeySet,inputScrollLeft:0}},computed:{keySet:function p(){var t=this.getLayout();if(t){var p=t[this.currentKeySet];if(p){var e=[],n=t._meta||{};return p.forEach(function(t){var r=[];t.split(" ").forEach(function(t){if((0,l["default"])(t))r.push(t);else if((0,u["default"])(t))if(t.length>2&&"{"==t[0]&&"}"==t[t.length-1]){var e=t.substring(1,t.length-1);n[e]?r.push(n[e]):console.warn("Missing named key from meta: "+e)}else""==t?r.push({placeholder:!0}):r.push({key:t,text:t})}),e.push(r)}),e}}}},watch:{layout:function(){this.currentKeySet="default"}},methods:{getLayout:function(){return(0,u["default"])(this.layout)?s["default"][this.layout]:this.layout},changeKeySet:function(t){var e=this.getLayout();null!=e[t]&&(this.currentKeySet=t)},toggleKeySet:function(t){this.currentKeySet=this.currentKeySet==t?this.currentKeySet:t},getCaptionOfKey:function(t){return t.text||t.key||""},getClassesOfKey:function(t){if(t.placeholder)return"placeholder";var e="key "+(t.func||"")+" "+(t.classes||"");return t.keySet&&this.currentKeySet==t.keySet&&(e+=" activated"),e},getKeyStyle:function(t){if(t.width)return{flex:t.width}},supportsSelection:function(){return/text|password|search|tel|url/.test(this.input.type)},getCaret:function(){if(this.supportsSelection()){var t={start:this.input.selectionStart||0,end:this.input.selectionEnd||0};return t.end<t.start&&(t.end=t.start),t}var e=this.input.value;return{start:e.length,end:e.length}},backspace:function(t,e){return t.start<t.end?e=e.substring(0,t.start)+e.substring(t.end):(e=e.substring(0,t.start-1)+e.substring(t.start),t.start-=1),t.end=t.start,e},insertChar:function(t,e,n){return e=t.start<t.end?e.substring(0,t.start)+n.toString()+e.substring(t.end):e.substr(0,t.start)+n.toString()+e.substr(t.start),t.start+=n.length,t.end=t.start,e},mousedown:function(t){this.input&&(this.options.preventClickEvent&&t.preventDefault(),this.inputScrollLeft=this.input.scrollLeft)},clickKey:function(t,e){if(this.input){this.options.preventClickEvent&&t.preventDefault();var n=this.getCaret(),r=this.input.value,o=null;if("object"==("undefined"==typeof e?"undefined":(0,c["default"])(e)))if(e.keySet)this.toggleKeySet(e.keySet);else if(e.func)switch(e.func){case"backspace":r=this.backspace(n,r);break;case"accept":return void(this.accept&&(this.accept(r),console.log("accept have been called with ",r)));case"cancel":return void(this.cancel&&(this.cancel(),console.log("cancel have been called")));case"next":return void(this.next&&(this.next(),console.log("next have been called")));case"enter":return void(this.enter&&(this.enter(),console.log("next have been called")));default:console.log("emit key func"),this.$emit(e.func)}else console.log("key 241 = ",e),o=e.key;else console.log("key 244 = ",e),o=e;if(o){if(this.input.maxLength<=0||r.length<this.input.maxLength)if(this.options.useKbEvents){var i=document.createEvent("Event");i.initEvent("keydown",!0,!0),i.which=i.keyCode=o.charCodeAt(),this.input.dispatchEvent(i)&&(r=this.insertChar(n,r,o))}else r=this.insertChar(n,r,o),console.log("text after call insertChar",r);"shifted"==this.currentKeySet&&this.changeKeySet(this.currentKeySet)}this.input.value=r,this.setFocusToInput(n),this.change&&(this.change(r,o),console.log("in change section"),console.log("text = ",r),console.log("addChar = ",o)),this.input.maxLength>0&&r.length>=this.input.maxLength&&this.next&&this.next(),this.input.dispatchEvent(new Event("input",{bubbles:!0}))}},setFocusToInput:function(t){this.input.focus(),t&&this.supportsSelection()&&(this.input.selectionStart=t.start,this.input.selectionEnd=t.end)}},mounted:function(){this.input&&this.setFocusToInput()}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(6),c=r(o),i=n(57),s=r(i),a="function"==typeof s["default"]&&"symbol"==typeof c["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof s["default"]&&t.constructor===s["default"]&&t!==s["default"].prototype?"symbol":typeof t};e["default"]="function"==typeof s["default"]&&"symbol"===a(c["default"])?function(t){return"undefined"==typeof t?"undefined":a(t)}:function(t){return t&&"function"==typeof s["default"]&&t.constructor===s["default"]&&t!==s["default"].prototype?"symbol":"undefined"==typeof t?"undefined":a(t)}},function(t,e,n){t.exports={"default":n(7),__esModule:!0}},function(t,e,n){n(8),n(52),t.exports=n(56).f("iterator")},function(t,e,n){"use strict";var r=n(9)(!0);n(12)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(10),o=n(11);t.exports=function(t){return function(e,n){var c,i,s=String(o(e)),a=r(n),u=s.length;return a<0||a>=u?t?"":void 0:(c=s.charCodeAt(a),c<55296||c>56319||a+1===u||(i=s.charCodeAt(a+1))<56320||i>57343?t?s.charAt(a):c:t?s.slice(a,a+2):(c-55296<<10)+(i-56320)+65536)}}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var r=n(13),o=n(14),c=n(29),i=n(19),s=n(30),a=n(31),u=n(32),f=n(48),l=n(50),p=n(49)("iterator"),h=!([].keys&&"next"in[].keys()),d="@@iterator",y="keys",b="values",v=function(){return this};t.exports=function(t,e,n,x,g,S,m){u(n,e,x);var k,w,_,O=function(t){if(!h&&t in L)return L[t];switch(t){case y:return function(){return new n(this,t)};case b:return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",E=g==b,C=!1,L=t.prototype,T=L[p]||L[d]||g&&L[g],P=!h&&T||O(g),M=g?E?O("entries"):P:void 0,K="Array"==e?L.entries||T:T;if(K&&(_=l(K.call(new t)),_!==Object.prototype&&_.next&&(f(_,j,!0),r||s(_,p)||i(_,p,v))),E&&T&&T.name!==b&&(C=!0,P=function(){return T.call(this)}),r&&!m||!h&&!C&&L[p]||i(L,p,P),a[e]=P,a[j]=v,g)if(k={values:E?P:O(b),keys:S?P:O(y),entries:M},m)for(w in k)w in L||c(L,w,k[w]);else o(o.P+o.F*(h||C),e,k);return k}},function(t,e){t.exports=!0},function(t,e,n){var r=n(15),o=n(16),c=n(17),i=n(19),s="prototype",a=function(t,e,n){var u,f,l,p=t&a.F,h=t&a.G,d=t&a.S,y=t&a.P,b=t&a.B,v=t&a.W,x=h?o:o[e]||(o[e]={}),g=x[s],S=h?r:d?r[e]:(r[e]||{})[s];h&&(n=e);for(u in n)f=!p&&S&&void 0!==S[u],f&&u in x||(l=f?S[u]:n[u],x[u]=h&&"function"!=typeof S[u]?n[u]:b&&f?c(l,r):v&&S[u]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[s]=t[s],e}(l):y&&"function"==typeof l?c(Function.call,l):l,y&&((x.virtual||(x.virtual={}))[u]=l,t&a.R&&g&&!g[u]&&i(g,u,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(18);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(20),o=n(28);t.exports=n(24)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(21),o=n(23),c=n(27),i=Object.defineProperty;e.f=n(24)?Object.defineProperty:function(t,e,n){if(r(t),e=c(e,!0),r(n),o)try{return i(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(22);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(24)&&!n(25)(function(){return 7!=Object.defineProperty(n(26)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(25)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var r=n(22),o=n(15).document,c=r(o)&&r(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},function(t,e,n){var r=n(22);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports=n(19)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports={}},function(t,e,n){"use strict";var r=n(33),o=n(28),c=n(48),i={};n(19)(i,n(49)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(i,{next:o(1,n)}),c(t,e+" Iterator")}},function(t,e,n){var r=n(21),o=n(34),c=n(46),i=n(43)("IE_PROTO"),s=function(){},a="prototype",u=function(){var t,e=n(26)("iframe"),r=c.length,o="<",i=">";for(e.style.display="none",n(47).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+i+"document.F=Object"+o+"/script"+i),t.close(),u=t.F;r--;)delete u[a][c[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[a]=r(t),n=new s,s[a]=null,n[i]=t):n=u(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(20),o=n(21),c=n(35);t.exports=n(24)?Object.defineProperties:function(t,e){o(t);for(var n,i=c(e),s=i.length,a=0;s>a;)r.f(t,n=i[a++],e[n]);return t}},function(t,e,n){var r=n(36),o=n(46);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(30),o=n(37),c=n(40)(!1),i=n(43)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),a=0,u=[];for(n in s)n!=i&&r(s,n)&&u.push(n);for(;e.length>a;)r(s,n=e[a++])&&(~c(u,n)||u.push(n));return u}},function(t,e,n){var r=n(38),o=n(11);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(39);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(37),o=n(41),c=n(42);t.exports=function(t){return function(e,n,i){var s,a=r(e),u=o(a.length),f=c(i,u);if(t&&n!=n){for(;u>f;)if(s=a[f++],s!=s)return!0}else for(;u>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(10),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(10),o=Math.max,c=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):c(t,e)}},function(t,e,n){var r=n(44)("keys"),o=n(45);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(15),o="__core-js_shared__",c=r[o]||(r[o]={});t.exports=function(t){return c[t]||(c[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(15).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(20).f,o=n(30),c=n(49)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,c)&&r(t,c,{configurable:!0,value:e})}},function(t,e,n){var r=n(44)("wks"),o=n(45),c=n(15).Symbol,i="function"==typeof c,s=t.exports=function(t){return r[t]||(r[t]=i&&c[t]||(i?c:o)("Symbol."+t))};s.store=r},function(t,e,n){var r=n(30),o=n(51),c=n(43)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,e,n){var r=n(11);t.exports=function(t){return Object(r(t))}},function(t,e,n){n(53);for(var r=n(15),o=n(19),c=n(31),i=n(49)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<s.length;a++){var u=s[a],f=r[u],l=f&&f.prototype;l&&!l[i]&&o(l,i,u),c[u]=c.Array}},function(t,e,n){"use strict";var r=n(54),o=n(55),c=n(31),i=n(37);t.exports=n(12)(Array,"Array",function(t,e){this._t=i(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),c.Arguments=c.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){e.f=n(49)},function(t,e,n){t.exports={"default":n(58),__esModule:!0}},function(t,e,n){n(59),n(69),n(70),n(71),t.exports=n(16).Symbol},function(t,e,n){"use strict";var r=n(15),o=n(30),c=n(24),i=n(14),s=n(29),a=n(60).KEY,u=n(25),f=n(44),l=n(48),p=n(45),h=n(49),d=n(56),y=n(61),b=n(62),v=n(65),x=n(21),g=n(22),S=n(37),m=n(27),k=n(28),w=n(33),_=n(66),O=n(68),j=n(20),E=n(35),C=O.f,L=j.f,T=_.f,P=r.Symbol,M=r.JSON,K=M&&M.stringify,F="prototype",A=h("_hidden"),I=h("toPrimitive"),N={}.propertyIsEnumerable,R=f("symbol-registry"),D=f("symbols"),V=f("op-symbols"),z=Object[F],G="function"==typeof P,H=r.QObject,W=!H||!H[F]||!H[F].findChild,B=c&&u(function(){return 7!=w(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=C(z,e);r&&delete z[e],L(t,e,n),r&&t!==z&&L(z,e,r)}:L,J=function(t){var e=D[t]=w(P[F]);return e._k=t,e},U=G&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},Y=function(t,e,n){return t===z&&Y(V,e,n),x(t),e=m(e,!0),x(n),o(D,e)?(n.enumerable?(o(t,A)&&t[A][e]&&(t[A][e]=!1),n=w(n,{enumerable:k(0,!1)})):(o(t,A)||L(t,A,k(1,{})),t[A][e]=!0),B(t,e,n)):L(t,e,n)},Q=function(t,e){x(t);for(var n,r=b(e=S(e)),o=0,c=r.length;c>o;)Y(t,n=r[o++],e[n]);return t},q=function(t,e){return void 0===e?w(t):Q(w(t),e)},X=function(t){var e=N.call(this,t=m(t,!0));return!(this===z&&o(D,t)&&!o(V,t))&&(!(e||!o(this,t)||!o(D,t)||o(this,A)&&this[A][t])||e)},Z=function(t,e){if(t=S(t),e=m(e,!0),t!==z||!o(D,e)||o(V,e)){var n=C(t,e);return!n||!o(D,e)||o(t,A)&&t[A][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=T(S(t)),r=[],c=0;n.length>c;)o(D,e=n[c++])||e==A||e==a||r.push(e);return r},tt=function(t){for(var e,n=t===z,r=T(n?V:S(t)),c=[],i=0;r.length>i;)!o(D,e=r[i++])||n&&!o(z,e)||c.push(D[e]);return c};G||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===z&&e.call(V,n),o(this,A)&&o(this[A],t)&&(this[A][t]=!1),B(this,t,k(1,n))};return c&&W&&B(z,t,{configurable:!0,set:e}),J(t)},s(P[F],"toString",function(){return this._k}),O.f=Z,j.f=Y,n(67).f=_.f=$,n(64).f=X,n(63).f=tt,c&&!n(13)&&s(z,"propertyIsEnumerable",X,!0),d.f=function(t){return J(h(t))}),i(i.G+i.W+i.F*!G,{Symbol:P});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)h(et[nt++]);for(var rt=E(h.store),ot=0;rt.length>ot;)y(rt[ot++]);i(i.S+i.F*!G,"Symbol",{"for":function(t){return o(R,t+="")?R[t]:R[t]=P(t)},keyFor:function(t){if(!U(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),i(i.S+i.F*!G,"Object",{create:q,defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt}),M&&i(i.S+i.F*(!G||u(function(){var t=P();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!U(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!U(e))return e}),r[1]=e,K.apply(M,r)}}),P[F][I]||n(19)(P[F],I,P[F].valueOf),l(P,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(45)("meta"),o=n(22),c=n(30),i=n(20).f,s=0,a=Object.isExtensible||function(){return!0},u=!n(25)(function(){return a(Object.preventExtensions({}))}),f=function(t){i(t,r,{value:{i:"O"+ ++s,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!c(t,r)){if(!a(t))return"F";if(!e)return"E";f(t)}return t[r].i},p=function(t,e){if(!c(t,r)){if(!a(t))return!0;if(!e)return!1;f(t)}return t[r].w},h=function(t){return u&&d.NEED&&a(t)&&!c(t,r)&&f(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:h}},function(t,e,n){var r=n(15),o=n(16),c=n(13),i=n(56),s=n(20).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=c?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:i.f(t)})}},function(t,e,n){var r=n(35),o=n(63),c=n(64);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var i,s=n(t),a=c.f,u=0;s.length>u;)a.call(t,i=s[u++])&&e.push(i);return e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(39);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(37),o=n(67).f,c={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==c.call(t)?s(t):o(r(t))}},function(t,e,n){var r=n(36),o=n(46).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(64),o=n(28),c=n(37),i=n(27),s=n(30),a=n(23),u=Object.getOwnPropertyDescriptor;e.f=n(24)?u:function(t,e){if(t=c(t),e=i(e,!0),a)try{return u(t,e)}catch(n){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){},function(t,e,n){n(61)("asyncIterator")},function(t,e,n){n(61)("observable")},function(t,e){"use strict";t.exports={normal:{_meta:{tab:{key:"\t",text:"Tab",width:60,classes:"control"},shiftl:{keySet:"shifted",text:"Shift",width:100,classes:"control"},shiftr:{keySet:"shifted",text:"Shift",width:100,classes:"control"},caps:{keySet:"capsed",text:"Caps lock",width:80,classes:"control"},space:{key:" ",text:"Space",width:180},enter:{func:"enter",key:"\r\n",text:"Enter",width:80,classes:"control"},backspace:{func:"backspace",classes:"control backspace",width:65},accept:{func:"accept",text:"Close",classes:"control featured"},next:{func:"next",text:"Next",classes:"control featured"}},"default":["` 1 2 3 4 5 6 7 8 9 0 - = {backspace}","{tab} q w e r t y u i o p [ ] \\","{caps} a s d f g h j k l ; ' {enter}","{shiftl} z x c v b n m , . / {shiftr}","{next} {space} {accept}"],default_next_off:["` 1 2 3 4 5 6 7 8 9 0 - = {backspace}","{tab} q w e r t y u i o p [ ] \\","{caps} a s d f g h j k l ; ' {enter}","{shiftl} z x c v b n m , . / {shiftr}","{space} {accept}"],default_ru:["` 1 2 3 4 5 6 7 8 9 0 - = {backspace}","{tab} й ц у к е н г ш щ з х ъ \\","{caps} ф ы в а п р о л д ж э {enter}","{shiftl} я ч с м и т ь б ю . {shiftr}","{next} {space} {accept}"],shifted:["~ ! @ # $ % ^ & * ( ) _ + {backspace}","{tab} Q W E R T Y U I O P { } |",'{caps} A S D F G H J K L : " {enter}',"{shiftl} Z X C V B N M < > ? {shiftr}","{next} {space} {accept}"],shifted_ru:['Ё ! " № ; % : ? * ( ) _ + {backspace}',"{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ |","{caps} Ф Ы В А П Р О Л Д Ж Э {enter}","{shiftl} Я Ч С М И Т Ь Б Ю , {shiftr}","{next} {space} {accept}"],capsed:["` 1 2 3 4 5 6 7 8 9 0 - = {backspace}","{tab} Q W E R T Y U I O P [ ] \\","{caps} A S D F G H J K L ; ' {enter}","{shiftl} Z X C V B N M , . / {shiftr}","{next} {space} {accept}"],capsed_ru:["Ё 1 2 3 4 5 6 7 8 9 0 - = {backspace}","{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ \\","{caps} Ф Ы В А П Р О Л Д Ж Э {enter}","{shiftl} Я Ч С М И Т Ь Б Ю . {shiftr}","{next} {space} {accept}"]},normal_next_off:{_meta:{tab:{key:"\t",text:"Tab",width:60,classes:"control"},shiftl:{keySet:"shifted",text:"Shift",width:100,classes:"control"},shiftr:{keySet:"shifted",text:"Shift",width:100,classes:"control"},caps:{keySet:"capsed",text:"Caps lock",width:80,classes:"control"},space:{key:" ",text:"Space",width:180},enter:{func:"enter",key:"\r\n",text:"Enter",width:80,classes:"control"},backspace:{func:"backspace",classes:"control backspace",width:65},accept:{func:"accept",text:"Close",classes:"control featured"}},"default":["` 1 2 3 4 5 6 7 8 9 0 - = {backspace}","{tab} q w e r t y u i o p [ ] \\","{caps} a s d f g h j k l ; ' {enter}","{shiftl} z x c v b n m , . / {shiftr}","{space} {accept}"],default_ru:["ё 1 2 3 4 5 6 7 8 9 0 - = {backspace}","{tab} й ц у к е н г ш щ з х ъ \\","{caps} ф ы в а п р о л д ж э {enter}","{shiftl} я ч с м и т ь б ю . {shiftr}","{space} {accept}"],shifted:["~ ! @ # $ % ^ & * ( ) _ + {backspace}","{tab} Q W E R T Y U I O P { } |",'{caps} A S D F G H J K L : " {enter}',"{shiftl} Z X C V B N M < > ? {shiftr}","{space} {accept}"],shifted_ru:['Ё ! " № ; % : ? * ( ) _ + {backspace}',"{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ |","{caps} Ф Ы В А П Р О Л Д Ж Э {enter}","{shiftl} Я Ч С М И Т Ь Б Ю , {shiftr}","{space} {accept}"],capsed:["` 1 2 3 4 5 6 7 8 9 0 - = {backspace}","{tab} Q W E R T Y U I O P [ ] \\","{caps} A S D F G H J K L ; ' {enter}","{shiftl} Z X C V B N M , . / {shiftr}","{space} {accept}"],capsed_ru:["Ё 1 2 3 4 5 6 7 8 9 0 - = {backspace}","{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ \\","{caps} Ф Ы В А П Р О Л Д Ж Э {enter}","{shiftl} Я Ч С М И Т Ь Б Ю . {shiftr}","{space} {accept}"]},compact:{_meta:{"default":{keySet:"default",text:"abc",classes:"control"},alpha:{keySet:"default",text:"Abc",classes:"control"},shift:{keySet:"shifted",text:"ABC",classes:"control"},numbers:{keySet:"numbers",text:"123",classes:"control"},space:{key:" ",text:"Space",width:200},backspace:{func:"backspace",classes:"control"},accept:{func:"accept",text:"Close",classes:"control featured"},next:{func:"next",text:"Next",classes:"featured"},zero:{key:"0",width:130}},"default":["q w e r t y u i o p"," a s d f g h j k l ","{shift} z x c v b n m {backspace}","{numbers} , {space} . {next} {accept}"],default_ru:["й ц у к е н г ш щ з"," ф ы в а п р о л д ","{shift} я ч с м и т ь {backspace}","{numbers} , {space} . {next} {accept}"],shifted:["Q W E R T Y U I O P"," A S D F G H J K L ","{default} Z X C V B N M ","{numbers} _ {space} {backspace} {next} {accept}"],shifted_ru:["Й Ц У К Е Y U I O P"," Ф Ы В А П Р О Л Д ","{default} Я Ч С М И Т Ь ","{numbers} _ {space} {backspace} {next} {accept}"],numbers:["1 2 3","4 5 6","7 8 9","  {alpha} . {zero} {backspace} {next} {accept}"]},compact_next_off:{_meta:{"default":{keySet:"default",text:"abc",classes:"control"},alpha:{keySet:"default",text:"Abc",classes:"control"},shift:{keySet:"shifted",text:"ABC",classes:"control"},numbers:{keySet:"numbers",text:"123",classes:"control"},space:{key:" ",text:"Space",width:200},backspace:{func:"backspace",classes:"control"},accept:{func:"accept",text:"Close",classes:"control featured"},zero:{key:"0",width:130}},"default":["q w e r t y u i o p"," a s d f g h j k l ","{shift} z x c v b n m {backspace}","{numbers} , {space} . {accept}"],default_ru:["й ц у к е н г ш щ з"," ф ы в а п р о л д ","{shift} я ч с м и т ь {backspace}","{numbers} , {space} . {accept}"],shifted:["Q W E R T Y U I O P"," A S D F G H J K L ","{default} Z X C V B N M ","{numbers} _ {space} {backspace} {accept}"],shifted_ru:["Й Ц У К Е Y U I O P"," Ф Ы В А П Р О Л Д ","{default} Я Ч С М И Т Ь ","{numbers} _ {space} {backspace} {accept}"],numbers:["1 2 3","4 5 6","7 8 9","  {alpha} . {zero} {backspace} {accept}"]},numeric:{_meta:{backspace:{func:"backspace",classes:"control"},accept:{func:"accept",text:"Close",classes:"control featured"},next:{func:"next",text:"Next",classes:"control featured"},zero:{key:"0",width:130}},"default":["1 2 3","4 5 6","7 8 9","_ - . {zero} {backspace} {next} {accept}"]},numeric_next_off:{_meta:{backspace:{func:"backspace",classes:"control"},accept:{func:"accept",text:"Close",classes:"control featured"},zero:{key:"0",width:130}},"default":["1 2 3","4 5 6","7 8 9","_ - . {zero} {backspace} {accept}"]}}},function(t,e,n){function r(t){return"string"==typeof t||!c(t)&&i(t)&&o(t)==s}var o=n(74),c=n(80),i=n(81),s="[object String]";t.exports=r},function(t,e,n){function r(t){return null==t?void 0===t?a:s:u&&u in Object(t)?c(t):i(t)}var o=n(75),c=n(78),i=n(79),s="[object Null]",a="[object Undefined]",u=o?o.toStringTag:void 0;t.exports=r},function(t,e,n){var r=n(76),o=r.Symbol;t.exports=o},function(t,e,n){var r=n(77),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();t.exports=c},function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},function(t,e,n){function r(t){var e=i.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(o){}var c=s.call(t);return r&&(e?t[a]=n:delete t[a]),c}var o=n(75),c=Object.prototype,i=c.hasOwnProperty,s=c.toString,a=o?o.toStringTag:void 0;t.exports=r},function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-touch-keyboard"},[n("div",{staticClass:"keyboard"},t._l(t.keySet,function(e,r){return n("div",{key:r,staticClass:"line"},t._l(e,function(e,r){return n("span",{key:r,"class":t.getClassesOfKey(e),style:t.getKeyStyle(e),domProps:{textContent:t._s(t.getCaptionOfKey(e))},on:{click:function(n){return t.clickKey(n,e)},mousedown:t.mousedown}})}),0)}),0)])},staticRenderFns:[]}}])});