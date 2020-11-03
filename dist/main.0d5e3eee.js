parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IJ8E":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3],o=function(t){return t&&t.Math==Math&&t};module.exports=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof t&&t)||Function("return this")();
},{}],"rtOw":[function(require,module,exports) {
module.exports=function(r){try{return!!r()}catch(t){return!0}};
},{}],"RA6A":[function(require,module,exports) {
var e=require("../internals/fails");module.exports=!e(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});
},{"../internals/fails":"rtOw"}],"vkXE":[function(require,module,exports) {
"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,t=e&&!r.call({1:2},1);exports.f=t?function(r){var t=e(this,r);return!!t&&t.enumerable}:r;
},{}],"v6Vm":[function(require,module,exports) {
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};
},{}],"UNYT":[function(require,module,exports) {
var r={}.toString;module.exports=function(t){return r.call(t).slice(8,-1)};
},{}],"dEmU":[function(require,module,exports) {
var r=require("../internals/fails"),e=require("../internals/classof-raw"),t="".split;module.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(r){return"String"==e(r)?t.call(r,""):Object(r)}:Object;
},{"../internals/fails":"rtOw","../internals/classof-raw":"UNYT"}],"CnUG":[function(require,module,exports) {
module.exports=function(o){if(null==o)throw TypeError("Can't call method on "+o);return o};
},{}],"M0Be":[function(require,module,exports) {
var e=require("../internals/indexed-object"),r=require("../internals/require-object-coercible");module.exports=function(i){return e(r(i))};
},{"../internals/indexed-object":"dEmU","../internals/require-object-coercible":"CnUG"}],"FS7x":[function(require,module,exports) {
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};
},{}],"UzHL":[function(require,module,exports) {
var t=require("../internals/is-object");module.exports=function(r,e){if(!t(r))return r;var n,o;if(e&&"function"==typeof(n=r.toString)&&!t(o=n.call(r)))return o;if("function"==typeof(n=r.valueOf)&&!t(o=n.call(r)))return o;if(!e&&"function"==typeof(n=r.toString)&&!t(o=n.call(r)))return o;throw TypeError("Can't convert object to primitive value")};
},{"../internals/is-object":"FS7x"}],"mKeN":[function(require,module,exports) {
var r={}.hasOwnProperty;module.exports=function(e,n){return r.call(e,n)};
},{}],"mGtY":[function(require,module,exports) {

var e=require("../internals/global"),r=require("../internals/is-object"),t=e.document,n=r(t)&&r(t.createElement);module.exports=function(e){return n?t.createElement(e):{}};
},{"../internals/global":"IJ8E","../internals/is-object":"FS7x"}],"DSHT":[function(require,module,exports) {
var e=require("../internals/descriptors"),r=require("../internals/fails"),n=require("../internals/document-create-element");module.exports=!e&&!r(function(){return 7!=Object.defineProperty(n("div"),"a",{get:function(){return 7}}).a});
},{"../internals/descriptors":"RA6A","../internals/fails":"rtOw","../internals/document-create-element":"mGtY"}],"HtdO":[function(require,module,exports) {
var e=require("../internals/descriptors"),r=require("../internals/object-property-is-enumerable"),i=require("../internals/create-property-descriptor"),t=require("../internals/to-indexed-object"),n=require("../internals/to-primitive"),s=require("../internals/has"),a=require("../internals/ie8-dom-define"),o=Object.getOwnPropertyDescriptor;exports.f=e?o:function(e,c){if(e=t(e),c=n(c,!0),a)try{return o(e,c)}catch(u){}if(s(e,c))return i(!r.f.call(e,c),e[c])};
},{"../internals/descriptors":"RA6A","../internals/object-property-is-enumerable":"vkXE","../internals/create-property-descriptor":"v6Vm","../internals/to-indexed-object":"M0Be","../internals/to-primitive":"UzHL","../internals/has":"mKeN","../internals/ie8-dom-define":"DSHT"}],"Ohll":[function(require,module,exports) {
var r=require("../internals/fails"),e=/#|\.prototype\./,t=function(e,t){var u=o[n(e)];return u==i||u!=a&&("function"==typeof t?r(t):!!t)},n=t.normalize=function(r){return String(r).replace(e,".").toLowerCase()},o=t.data={},a=t.NATIVE="N",i=t.POLYFILL="P";module.exports=t;
},{"../internals/fails":"rtOw"}],"iXvo":[function(require,module,exports) {
module.exports={};
},{}],"USpF":[function(require,module,exports) {
module.exports=function(n){if("function"!=typeof n)throw TypeError(String(n)+" is not a function");return n};
},{}],"PPXG":[function(require,module,exports) {
var n=require("../internals/a-function");module.exports=function(r,t,e){if(n(r),void 0===t)return r;switch(e){case 0:return function(){return r.call(t)};case 1:return function(n){return r.call(t,n)};case 2:return function(n,e){return r.call(t,n,e)};case 3:return function(n,e,u){return r.call(t,n,e,u)}}return function(){return r.apply(t,arguments)}};
},{"../internals/a-function":"USpF"}],"kalM":[function(require,module,exports) {
var r=require("../internals/is-object");module.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e};
},{"../internals/is-object":"FS7x"}],"y7Dx":[function(require,module,exports) {
var e=require("../internals/descriptors"),r=require("../internals/ie8-dom-define"),i=require("../internals/an-object"),t=require("../internals/to-primitive"),n=Object.defineProperty;exports.f=e?n:function(e,o,s){if(i(e),o=t(o,!0),i(s),r)try{return n(e,o,s)}catch(u){}if("get"in s||"set"in s)throw TypeError("Accessors not supported");return"value"in s&&(e[o]=s.value),e};
},{"../internals/descriptors":"RA6A","../internals/ie8-dom-define":"DSHT","../internals/an-object":"kalM","../internals/to-primitive":"UzHL"}],"yNEm":[function(require,module,exports) {
var r=require("../internals/descriptors"),e=require("../internals/object-define-property"),t=require("../internals/create-property-descriptor");module.exports=r?function(r,n,i){return e.f(r,n,t(1,i))}:function(r,e,t){return r[e]=t,r};
},{"../internals/descriptors":"RA6A","../internals/object-define-property":"y7Dx","../internals/create-property-descriptor":"v6Vm"}],"SNRl":[function(require,module,exports) {

"use strict";var e=require("../internals/global"),r=require("../internals/object-get-own-property-descriptor").f,t=require("../internals/is-forced"),n=require("../internals/path"),o=require("../internals/function-bind-context"),a=require("../internals/create-non-enumerable-property"),i=require("../internals/has"),s=function(e){var r=function(r,t,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,t)}return new e(r,t,n)}return e.apply(this,arguments)};return r.prototype=e.prototype,r};module.exports=function(p,u){var c,l,f,y,h,q,w,b,d=p.target,g=p.global,m=p.stat,v=p.proto,x=g?e:m?e[d]:(e[d]||{}).prototype,j=g?n:n[d]||(n[d]={}),F=j.prototype;for(f in u)c=!t(g?f:d+(m?".":"#")+f,p.forced)&&x&&i(x,f),h=j[f],c&&(q=p.noTargetGet?(b=r(x,f))&&b.value:x[f]),y=c&&q?q:u[f],c&&typeof h==typeof y||(w=p.bind&&c?o(y,e):p.wrap&&c?s(y):v&&"function"==typeof y?o(Function.call,y):y,(p.sham||y&&y.sham||h&&h.sham)&&a(w,"sham",!0),j[f]=w,v&&(i(n,l=d+"Prototype")||a(n,l,{}),n[l][f]=y,p.real&&F&&!F[f]&&a(F,f,y)))};
},{"../internals/global":"IJ8E","../internals/object-get-own-property-descriptor":"HtdO","../internals/is-forced":"Ohll","../internals/path":"iXvo","../internals/function-bind-context":"PPXG","../internals/create-non-enumerable-property":"yNEm","../internals/has":"mKeN"}],"Nvz5":[function(require,module,exports) {
var e=require("../internals/require-object-coercible");module.exports=function(r){return Object(e(r))};
},{"../internals/require-object-coercible":"CnUG"}],"nqqY":[function(require,module,exports) {
var o=Math.ceil,r=Math.floor;module.exports=function(t){return isNaN(t=+t)?0:(t>0?r:o)(t)};
},{}],"upEt":[function(require,module,exports) {
var e=require("../internals/to-integer"),r=Math.min;module.exports=function(n){return n>0?r(e(n),9007199254740991):0};
},{"../internals/to-integer":"nqqY"}],"h9JO":[function(require,module,exports) {
var r=require("../internals/classof-raw");module.exports=Array.isArray||function(a){return"Array"==r(a)};
},{"../internals/classof-raw":"UNYT"}],"oj7W":[function(require,module,exports) {
module.exports=!0;
},{}],"RHRM":[function(require,module,exports) {

var e=require("../internals/global"),r=require("../internals/create-non-enumerable-property");module.exports=function(n,t){try{r(e,n,t)}catch(a){e[n]=t}return t};
},{"../internals/global":"IJ8E","../internals/create-non-enumerable-property":"yNEm"}],"kERb":[function(require,module,exports) {

var e=require("../internals/global"),r=require("../internals/set-global"),l="__core-js_shared__",a=e[l]||r(l,{});module.exports=a;
},{"../internals/global":"IJ8E","../internals/set-global":"RHRM"}],"yAEX":[function(require,module,exports) {
var r=require("../internals/is-pure"),e=require("../internals/shared-store");(module.exports=function(r,i){return e[r]||(e[r]=void 0!==i?i:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});
},{"../internals/is-pure":"oj7W","../internals/shared-store":"kERb"}],"MCkq":[function(require,module,exports) {
var o=0,r=Math.random();module.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++o+r).toString(36)};
},{}],"qRXg":[function(require,module,exports) {
var r=require("../internals/fails");module.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())});
},{"../internals/fails":"rtOw"}],"HGpA":[function(require,module,exports) {
var e=require("../internals/native-symbol");module.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;
},{"../internals/native-symbol":"qRXg"}],"G69i":[function(require,module,exports) {

var e=require("../internals/global"),r=require("../internals/shared"),i=require("../internals/has"),n=require("../internals/uid"),s=require("../internals/native-symbol"),t=require("../internals/use-symbol-as-uid"),l=r("wks"),u=e.Symbol,a=t?u:u&&u.withoutSetter||n;module.exports=function(e){return i(l,e)||(s&&i(u,e)?l[e]=u[e]:l[e]=a("Symbol."+e)),l[e]};
},{"../internals/global":"IJ8E","../internals/shared":"yAEX","../internals/has":"mKeN","../internals/uid":"MCkq","../internals/native-symbol":"qRXg","../internals/use-symbol-as-uid":"HGpA"}],"zaTs":[function(require,module,exports) {
var r=require("../internals/is-object"),e=require("../internals/is-array"),n=require("../internals/well-known-symbol"),o=n("species");module.exports=function(n,i){var t;return e(n)&&("function"!=typeof(t=n.constructor)||t!==Array&&!e(t.prototype)?r(t)&&null===(t=t[o])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===i?0:i)};
},{"../internals/is-object":"FS7x","../internals/is-array":"h9JO","../internals/well-known-symbol":"G69i"}],"ONJB":[function(require,module,exports) {
var e=require("../internals/function-bind-context"),r=require("../internals/indexed-object"),n=require("../internals/to-object"),i=require("../internals/to-length"),t=require("../internals/array-species-create"),a=[].push,s=function(s){var u=1==s,c=2==s,o=3==s,l=4==s,f=6==s,d=5==s||f;return function(h,q,v,p){for(var x,b,m=n(h),g=r(m),j=e(q,v,3),y=i(g.length),w=0,E=p||t,I=u?E(h,y):c?E(h,0):void 0;y>w;w++)if((d||w in g)&&(b=j(x=g[w],w,m),s))if(u)I[w]=b;else if(b)switch(s){case 3:return!0;case 5:return x;case 6:return w;case 2:a.call(I,x)}else if(l)return!1;return f?-1:o||l?l:I}};module.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)};
},{"../internals/function-bind-context":"PPXG","../internals/indexed-object":"dEmU","../internals/to-object":"Nvz5","../internals/to-length":"upEt","../internals/array-species-create":"zaTs"}],"aXzn":[function(require,module,exports) {
module.exports=function(){};
},{}],"SRrv":[function(require,module,exports) {
var r=require("../internals/descriptors"),e=require("../internals/fails"),n=require("../internals/has"),t=Object.defineProperty,i={},u=function(r){throw r};module.exports=function(a,l){if(n(i,a))return i[a];l||(l={});var o=[][a],s=!!n(l,"ACCESSORS")&&l.ACCESSORS,f=n(l,0)?l[0]:u,c=n(l,1)?l[1]:void 0;return i[a]=!!o&&!e(function(){if(s&&!r)return!0;var e={length:-1};s?t(e,1,{enumerable:!0,get:u}):e[1]=1,o.call(e,f,c)})};
},{"../internals/descriptors":"RA6A","../internals/fails":"rtOw","../internals/has":"mKeN"}],"Iznr":[function(require,module,exports) {
"use strict";var r=require("../internals/export"),e=require("../internals/array-iteration").find,n=require("../internals/add-to-unscopables"),t=require("../internals/array-method-uses-to-length"),i="find",a=!0,o=t(i);i in[]&&Array(1)[i](function(){a=!1}),r({target:"Array",proto:!0,forced:a||!o},{find:function(r){return e(this,r,arguments.length>1?arguments[1]:void 0)}}),n(i);
},{"../internals/export":"SNRl","../internals/array-iteration":"ONJB","../internals/add-to-unscopables":"aXzn","../internals/array-method-uses-to-length":"SRrv"}],"IHDx":[function(require,module,exports) {
var r=require("../internals/path");module.exports=function(e){return r[e+"Prototype"]};
},{"../internals/path":"iXvo"}],"I4Bs":[function(require,module,exports) {
require("../../../modules/es.array.find");var r=require("../../../internals/entry-virtual");module.exports=r("Array").find;
},{"../../../modules/es.array.find":"Iznr","../../../internals/entry-virtual":"IHDx"}],"kjMr":[function(require,module,exports) {
var r=require("../array/virtual/find"),a=Array.prototype;module.exports=function(n){var e=n.find;return n===a||n instanceof Array&&e===a.find?r:e};
},{"../array/virtual/find":"I4Bs"}],"ou1i":[function(require,module,exports) {
var e=require("../../es/instance/find");module.exports=e;
},{"../../es/instance/find":"kjMr"}],"CoUx":[function(require,module,exports) {
module.exports=require("core-js-pure/stable/instance/find");
},{"core-js-pure/stable/instance/find":"ou1i"}],"fjED":[function(require,module,exports) {
jQuery(document).ready(function(){var t=jQuery(".transaction_activity_text1").height()+4,c=jQuery(".transaction_activity_text2").height()+4,i=jQuery(".transaction_activity_text3").height()+4,a=jQuery(".transaction_activity_text4").height()+4;jQuery(".transaction_activity_text1, .transaction_activity_image_dots1").click(function(){jQuery(".transaction_activity_text_click").css({top:"0",height:t}),jQuery(".transaction_activity_text div").css({color:"#2c3f5733"}),jQuery(".transaction_activity_text1").css({color:"#fff"}),jQuery(".transaction_activity_image_dots div").css({"background-color":"#c5c7ca"}),jQuery(".transaction_activity_image_dots1").css({"background-color":"#31d317"})}),jQuery(".transaction_activity_text2, .transaction_activity_image_dots2").click(function(){jQuery(".transaction_activity_text_click").css({top:t,height:c}),jQuery(".transaction_activity_text div").css({color:"#2c3f5733"}),jQuery(".transaction_activity_text2").css({color:"#fff"}),jQuery(".transaction_activity_image_dots div").css({"background-color":"#c5c7ca"}),jQuery(".transaction_activity_image_dots2").css({"background-color":"#31d317"})}),jQuery(".transaction_activity_text3, .transaction_activity_image_dots3").click(function(){jQuery(".transaction_activity_text_click").css({top:t+c,height:i}),jQuery(".transaction_activity_text div").css({color:"#2c3f5733"}),jQuery(".transaction_activity_text3").css({color:"#fff"}),jQuery(".transaction_activity_image_dots div").css({"background-color":"#c5c7ca"}),jQuery(".transaction_activity_image_dots3").css({"background-color":"#31d317"})}),jQuery(".transaction_activity_text4, .transaction_activity_image_dots4").click(function(){jQuery(".transaction_activity_text_click").css({top:t+c+i,height:a}),jQuery(".transaction_activity_text div").css({color:"#2c3f5733"}),jQuery(".transaction_activity_text4").css({color:"#fff"}),jQuery(".transaction_activity_image_dots div").css({"background-color":"#c5c7ca"}),jQuery(".transaction_activity_image_dots4").css({"background-color":"#31d317"})})});
},{}],"FVon":[function(require,module,exports) {
var e=document.querySelector("nav"),o=document.querySelector("navbar-collapse"),a=document.getElementById("burger"),l=document.getElementById("shadow");window.onscroll=function(){window.scrollY>50?e.classList.add("bg-white"):e.classList.remove("bg-white")},a.onclick=function(){$(".navbar-collapse").hasClass("show")?$(window).scrollTop()<50&&$(".navbar").removeClass("bg-white"):$(".navbar").addClass("bg-white")};
},{}],"z3aH":[function(require,module,exports) {
$(document).ready(function(){var o;$(".video-btn").click(function(){o=$(this).data("src"),console.log(o)}),console.log(o),$("#vModal-1").on("shown.bs.modal",function(n){$("#video-1").attr("src",o+"?rel=0&showinfo=0&modestbranding=1&autoplay=1")}),$("#vModal-1").on("hide.bs.modal",function(n){$("#video-1").attr("src",o)}),$("#vModal-2").on("shown.bs.modal",function(n){$("#video-2").attr("src",o+"?rel=0&showinfo=0&modestbranding=1&autoplay=1")}),$("#vModal-2").on("hide.bs.modal",function(n){$("#video-2").attr("src",o)}),$("#vModal-3").on("shown.bs.modal",function(n){$("#video-3").attr("src",o+"?rel=0&showinfo=0&modestbranding=1&autoplay=1")}),$("#vModal-3").on("hide.bs.modal",function(n){$("#video-3").attr("src",o)}),$("#vModal-4").on("shown.bs.modal",function(n){$("#video-4").attr("src",o+"?rel=0&showinfo=0&modestbranding=1&autoplay=1")}),$("#vModal-4").on("hide.bs.modal",function(n){$("#video-4").attr("src",o)}),$("#vModal-4").on("shown.bs.modal",function(n){$("#video-5").attr("src",o+"?rel=0&showinfo=0&modestbranding=1&autoplay=1")}),$("#vModal-5").on("hide.bs.modal",function(n){$("#video-5").attr("src",o)}),$("#vModal-6").on("shown.bs.modal",function(n){$("#video-6").attr("src",o+"?rel=0&showinfo=0&modestbranding=1&autoplay=1")}),$("#vModal-6").on("hide.bs.modal",function(n){$("#video-6").attr("src",o)})});
},{}],"gJF1":[function(require,module,exports) {
module.exports="\t\n\v\f\r                　\u2028\u2029\ufeff";
},{}],"K86Y":[function(require,module,exports) {
var e=require("../internals/require-object-coercible"),r=require("../internals/whitespaces"),t="["+r+"]",n=RegExp("^"+t+t+"*"),i=RegExp(t+t+"*$"),a=function(r){return function(t){var a=String(e(t));return 1&r&&(a=a.replace(n,"")),2&r&&(a=a.replace(i,"")),a}};module.exports={start:a(1),end:a(2),trim:a(3)};
},{"../internals/require-object-coercible":"CnUG","../internals/whitespaces":"gJF1"}],"R330":[function(require,module,exports) {

var r=require("../internals/global"),e=require("../internals/string-trim").trim,t=require("../internals/whitespaces"),i=r.parseInt,n=/^[+-]?0[Xx]/,s=8!==i(t+"08")||22!==i(t+"0x16");module.exports=s?function(r,t){var s=e(String(r));return i(s,t>>>0||(n.test(s)?16:10))}:i;
},{"../internals/global":"IJ8E","../internals/string-trim":"K86Y","../internals/whitespaces":"gJF1"}],"udyR":[function(require,module,exports) {
var r=require("../internals/export"),e=require("../internals/number-parse-int");r({global:!0,forced:parseInt!=e},{parseInt:e});
},{"../internals/export":"SNRl","../internals/number-parse-int":"R330"}],"bu5G":[function(require,module,exports) {
require("../modules/es.parse-int");var e=require("../internals/path");module.exports=e.parseInt;
},{"../modules/es.parse-int":"udyR","../internals/path":"iXvo"}],"MIil":[function(require,module,exports) {
var e=require("../es/parse-int");module.exports=e;
},{"../es/parse-int":"bu5G"}],"LSYy":[function(require,module,exports) {
module.exports=require("core-js-pure/stable/parse-int");
},{"core-js-pure/stable/parse-int":"MIil"}],"boJk":[function(require,module,exports) {
"use strict";var t=o(require("@babel/runtime-corejs3/core-js-stable/parse-int")),e=o(require("@babel/runtime-corejs3/core-js-stable/instance/find"));function o(t){return t&&t.__esModule?t:{default:t}}var r=$(".js-card"),n=$(".js-card-grid");function s(t){var o=$("#card"+t);return'<div id="content'+t+'" data-id="'+t+'" class="more-container js-generated-content">'+(0,e.default)(o).call(o,".js-more-container").clone().html()+"</div>"}function a(t){var e=!1;r.each(function(){var o=$(this).position().top;if(o===t&&!1===e)r.removeClass("currentRow"),$(this).addClass("currentRow");else if(o>t&&!1===e)e=!0;else if(!0===e)return!1})}function c(){$(".js-generated-content").remove(),r.removeClass("active"),r.removeClass("currentRow")}n.on("click",".js-card",function(t){var e=$(".card.active"),o=0,r=$("body").scrollTop();e.length&&(o=e.position().top),c();var n=$(t.currentTarget),i=n.attr("data-id"),l=n.position().top;n.addClass("active"),a(l),$(".currentRow").after(s(i)),o!=l?$("html, body").animate({scrollTop:$("#content"+i).offset().top-50},500):$("body").scrollTop(r)}),n.on("click",".js-close-content",function(t){c();var e=$(t.currentTarget).closest(".js-generated-content").attr("data-id");$("#card"+e).removeClass("lastClick"),$("html, body").animate({scrollTop:$("#card"+e).offset().top-50},500)}),n.on("click",".js-next-content",function(e){var o,r=$(e.currentTarget).closest(".js-generated-content"),n=(0,t.default)(r.attr("data-id"))+1,i=$("#card"+n);if(i.length){var l=$(".card.active"),d=0,p=$("body").scrollTop();l.length&&(d=l.position().top),c(),o=$("#card"+n).position().top,i.addClass("active"),a(o),$(".currentRow").after(s(n)),d!=o?$("html, body").animate({scrollTop:$("#content"+n).offset().top-50},500):$("body").scrollTop(p)}}),n.on("click",".js-previous-content",function(e){var o,r=$(e.currentTarget).closest(".js-generated-content"),n=(0,t.default)(r.attr("data-id"))-1,i=$("#card"+n);if(i.length){var l=$(".card.active"),d=0,p=$("body").scrollTop();l.length&&(d=l.position().top),c(),o=$("#card"+n).position().top,i.addClass("active"),a(o),$(".currentRow").after(s(n)),d!=o?$("html, body").animate({scrollTop:$("#content"+n).offset().top-50},500):$("body").scrollTop(p)}}),$(".responsive").slick({dots:!0,prevArrow:$(".prev"),nextArrow:$(".next"),infinite:!1,speed:300,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});
},{"@babel/runtime-corejs3/core-js-stable/parse-int":"LSYy","@babel/runtime-corejs3/core-js-stable/instance/find":"CoUx"}],"rhL8":[function(require,module,exports) {
"use strict";var e=t(require("@babel/runtime-corejs3/core-js-stable/instance/find"));function t(e){return e&&e.__esModule?e:{default:e}}require("./style4"),require("./style"),require("./style2"),require("./style3"),$(function(){$("#contact-form").validator(),$("#contact-form").on("submit",function(t){if(!t.isDefaultPrevented()){var s;return(0,e.default)(s=$("#contact-form")).call(s,".messages").html('<div class="alert alert-success alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>Your message was sent, thank you. I will get back to you soon.</div>'),$("#contact-form")[0].reset(),!1}})});
},{"@babel/runtime-corejs3/core-js-stable/instance/find":"CoUx","./style4":"fjED","./style":"FVon","./style2":"z3aH","./style3":"boJk"}]},{},["rhL8"], null)
//# sourceMappingURL=main.0d5e3eee.js.map