parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"G5Xn":[function(require,module,exports) {

},{}],"n3er":[function(require,module,exports) {

},{"./..\\images\\SmilingStudent.jpg":[["SmilingStudent.6c79f414.jpg","U3VQ"],"U3VQ"]}],"rhL8":[function(require,module,exports) {
$(document).ready(function(){$(window).scroll(function(){$(window).scrollTop()>56?$(".navbar").addClass("bg-white"):$(".navbar").removeClass("bg-white")}),$(".navbar-toggler").click(function(){$(".navbar-collapse").hasClass("show")?$(window).scrollTop()<56&&$(".navbar").removeClass("bg-white"):$(".navbar").addClass("bg-white")})});
},{}],"ffN9":[function(require,module,exports) {
"use strict";require("./scss/app.scss"),require("./scss/style.scss"),require("./js/main.js");
},{"./scss/app.scss":"G5Xn","./scss/style.scss":"n3er","./js/main.js":"rhL8"}]},{},["ffN9"], null)
//# sourceMappingURL=app.027f7cbe.js.map