// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/core-js-pure/internals/global.js":[function(require,module,exports) {
var global = arguments[3];
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

},{}],"../node_modules/core-js-pure/internals/fails.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

},{}],"../node_modules/core-js-pure/internals/descriptors.js":[function(require,module,exports) {
var fails = require('../internals/fails');

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

},{"../internals/fails":"../node_modules/core-js-pure/internals/fails.js"}],"../node_modules/core-js-pure/internals/object-property-is-enumerable.js":[function(require,module,exports) {
'use strict';
var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

},{}],"../node_modules/core-js-pure/internals/create-property-descriptor.js":[function(require,module,exports) {
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],"../node_modules/core-js-pure/internals/classof-raw.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],"../node_modules/core-js-pure/internals/indexed-object.js":[function(require,module,exports) {
var fails = require('../internals/fails');
var classof = require('../internals/classof-raw');

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

},{"../internals/fails":"../node_modules/core-js-pure/internals/fails.js","../internals/classof-raw":"../node_modules/core-js-pure/internals/classof-raw.js"}],"../node_modules/core-js-pure/internals/require-object-coercible.js":[function(require,module,exports) {
// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

},{}],"../node_modules/core-js-pure/internals/to-indexed-object.js":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require('../internals/indexed-object');
var requireObjectCoercible = require('../internals/require-object-coercible');

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":"../node_modules/core-js-pure/internals/indexed-object.js","../internals/require-object-coercible":"../node_modules/core-js-pure/internals/require-object-coercible.js"}],"../node_modules/core-js-pure/internals/is-object.js":[function(require,module,exports) {
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"../node_modules/core-js-pure/internals/to-primitive.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"../internals/is-object":"../node_modules/core-js-pure/internals/is-object.js"}],"../node_modules/core-js-pure/internals/has.js":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],"../node_modules/core-js-pure/internals/document-create-element.js":[function(require,module,exports) {

var global = require('../internals/global');
var isObject = require('../internals/is-object');

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

},{"../internals/global":"../node_modules/core-js-pure/internals/global.js","../internals/is-object":"../node_modules/core-js-pure/internals/is-object.js"}],"../node_modules/core-js-pure/internals/ie8-dom-define.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var createElement = require('../internals/document-create-element');

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

},{"../internals/descriptors":"../node_modules/core-js-pure/internals/descriptors.js","../internals/fails":"../node_modules/core-js-pure/internals/fails.js","../internals/document-create-element":"../node_modules/core-js-pure/internals/document-create-element.js"}],"../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var propertyIsEnumerableModule = require('../internals/object-property-is-enumerable');
var createPropertyDescriptor = require('../internals/create-property-descriptor');
var toIndexedObject = require('../internals/to-indexed-object');
var toPrimitive = require('../internals/to-primitive');
var has = require('../internals/has');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

},{"../internals/descriptors":"../node_modules/core-js-pure/internals/descriptors.js","../internals/object-property-is-enumerable":"../node_modules/core-js-pure/internals/object-property-is-enumerable.js","../internals/create-property-descriptor":"../node_modules/core-js-pure/internals/create-property-descriptor.js","../internals/to-indexed-object":"../node_modules/core-js-pure/internals/to-indexed-object.js","../internals/to-primitive":"../node_modules/core-js-pure/internals/to-primitive.js","../internals/has":"../node_modules/core-js-pure/internals/has.js","../internals/ie8-dom-define":"../node_modules/core-js-pure/internals/ie8-dom-define.js"}],"../node_modules/core-js-pure/internals/is-forced.js":[function(require,module,exports) {
var fails = require('../internals/fails');

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;

},{"../internals/fails":"../node_modules/core-js-pure/internals/fails.js"}],"../node_modules/core-js-pure/internals/path.js":[function(require,module,exports) {
module.exports = {};

},{}],"../node_modules/core-js-pure/internals/a-function.js":[function(require,module,exports) {
module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

},{}],"../node_modules/core-js-pure/internals/function-bind-context.js":[function(require,module,exports) {
var aFunction = require('../internals/a-function');

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"../internals/a-function":"../node_modules/core-js-pure/internals/a-function.js"}],"../node_modules/core-js-pure/internals/an-object.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

},{"../internals/is-object":"../node_modules/core-js-pure/internals/is-object.js"}],"../node_modules/core-js-pure/internals/object-define-property.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var IE8_DOM_DEFINE = require('../internals/ie8-dom-define');
var anObject = require('../internals/an-object');
var toPrimitive = require('../internals/to-primitive');

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"../internals/descriptors":"../node_modules/core-js-pure/internals/descriptors.js","../internals/ie8-dom-define":"../node_modules/core-js-pure/internals/ie8-dom-define.js","../internals/an-object":"../node_modules/core-js-pure/internals/an-object.js","../internals/to-primitive":"../node_modules/core-js-pure/internals/to-primitive.js"}],"../node_modules/core-js-pure/internals/create-non-enumerable-property.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var definePropertyModule = require('../internals/object-define-property');
var createPropertyDescriptor = require('../internals/create-property-descriptor');

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"../internals/descriptors":"../node_modules/core-js-pure/internals/descriptors.js","../internals/object-define-property":"../node_modules/core-js-pure/internals/object-define-property.js","../internals/create-property-descriptor":"../node_modules/core-js-pure/internals/create-property-descriptor.js"}],"../node_modules/core-js-pure/internals/export.js":[function(require,module,exports) {

'use strict';
var global = require('../internals/global');
var getOwnPropertyDescriptor = require('../internals/object-get-own-property-descriptor').f;
var isForced = require('../internals/is-forced');
var path = require('../internals/path');
var bind = require('../internals/function-bind-context');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var has = require('../internals/has');

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};

},{"../internals/global":"../node_modules/core-js-pure/internals/global.js","../internals/object-get-own-property-descriptor":"../node_modules/core-js-pure/internals/object-get-own-property-descriptor.js","../internals/is-forced":"../node_modules/core-js-pure/internals/is-forced.js","../internals/path":"../node_modules/core-js-pure/internals/path.js","../internals/function-bind-context":"../node_modules/core-js-pure/internals/function-bind-context.js","../internals/create-non-enumerable-property":"../node_modules/core-js-pure/internals/create-non-enumerable-property.js","../internals/has":"../node_modules/core-js-pure/internals/has.js"}],"../node_modules/core-js-pure/internals/to-object.js":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":"../node_modules/core-js-pure/internals/require-object-coercible.js"}],"../node_modules/core-js-pure/internals/to-integer.js":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

},{}],"../node_modules/core-js-pure/internals/to-length.js":[function(require,module,exports) {
var toInteger = require('../internals/to-integer');

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer":"../node_modules/core-js-pure/internals/to-integer.js"}],"../node_modules/core-js-pure/internals/is-array.js":[function(require,module,exports) {
var classof = require('../internals/classof-raw');

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

},{"../internals/classof-raw":"../node_modules/core-js-pure/internals/classof-raw.js"}],"../node_modules/core-js-pure/internals/is-pure.js":[function(require,module,exports) {
module.exports = true;

},{}],"../node_modules/core-js-pure/internals/set-global.js":[function(require,module,exports) {

var global = require('../internals/global');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};

},{"../internals/global":"../node_modules/core-js-pure/internals/global.js","../internals/create-non-enumerable-property":"../node_modules/core-js-pure/internals/create-non-enumerable-property.js"}],"../node_modules/core-js-pure/internals/shared-store.js":[function(require,module,exports) {

var global = require('../internals/global');
var setGlobal = require('../internals/set-global');

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;

},{"../internals/global":"../node_modules/core-js-pure/internals/global.js","../internals/set-global":"../node_modules/core-js-pure/internals/set-global.js"}],"../node_modules/core-js-pure/internals/shared.js":[function(require,module,exports) {
var IS_PURE = require('../internals/is-pure');
var store = require('../internals/shared-store');

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});

},{"../internals/is-pure":"../node_modules/core-js-pure/internals/is-pure.js","../internals/shared-store":"../node_modules/core-js-pure/internals/shared-store.js"}],"../node_modules/core-js-pure/internals/uid.js":[function(require,module,exports) {
var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

},{}],"../node_modules/core-js-pure/internals/native-symbol.js":[function(require,module,exports) {
var fails = require('../internals/fails');

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

},{"../internals/fails":"../node_modules/core-js-pure/internals/fails.js"}],"../node_modules/core-js-pure/internals/use-symbol-as-uid.js":[function(require,module,exports) {
var NATIVE_SYMBOL = require('../internals/native-symbol');

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';

},{"../internals/native-symbol":"../node_modules/core-js-pure/internals/native-symbol.js"}],"../node_modules/core-js-pure/internals/well-known-symbol.js":[function(require,module,exports) {

var global = require('../internals/global');
var shared = require('../internals/shared');
var has = require('../internals/has');
var uid = require('../internals/uid');
var NATIVE_SYMBOL = require('../internals/native-symbol');
var USE_SYMBOL_AS_UID = require('../internals/use-symbol-as-uid');

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

},{"../internals/global":"../node_modules/core-js-pure/internals/global.js","../internals/shared":"../node_modules/core-js-pure/internals/shared.js","../internals/has":"../node_modules/core-js-pure/internals/has.js","../internals/uid":"../node_modules/core-js-pure/internals/uid.js","../internals/native-symbol":"../node_modules/core-js-pure/internals/native-symbol.js","../internals/use-symbol-as-uid":"../node_modules/core-js-pure/internals/use-symbol-as-uid.js"}],"../node_modules/core-js-pure/internals/array-species-create.js":[function(require,module,exports) {
var isObject = require('../internals/is-object');
var isArray = require('../internals/is-array');
var wellKnownSymbol = require('../internals/well-known-symbol');

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

},{"../internals/is-object":"../node_modules/core-js-pure/internals/is-object.js","../internals/is-array":"../node_modules/core-js-pure/internals/is-array.js","../internals/well-known-symbol":"../node_modules/core-js-pure/internals/well-known-symbol.js"}],"../node_modules/core-js-pure/internals/array-iteration.js":[function(require,module,exports) {
var bind = require('../internals/function-bind-context');
var IndexedObject = require('../internals/indexed-object');
var toObject = require('../internals/to-object');
var toLength = require('../internals/to-length');
var arraySpeciesCreate = require('../internals/array-species-create');

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};

},{"../internals/function-bind-context":"../node_modules/core-js-pure/internals/function-bind-context.js","../internals/indexed-object":"../node_modules/core-js-pure/internals/indexed-object.js","../internals/to-object":"../node_modules/core-js-pure/internals/to-object.js","../internals/to-length":"../node_modules/core-js-pure/internals/to-length.js","../internals/array-species-create":"../node_modules/core-js-pure/internals/array-species-create.js"}],"../node_modules/core-js-pure/internals/add-to-unscopables.js":[function(require,module,exports) {
module.exports = function () { /* empty */ };

},{}],"../node_modules/core-js-pure/internals/array-method-uses-to-length.js":[function(require,module,exports) {
var DESCRIPTORS = require('../internals/descriptors');
var fails = require('../internals/fails');
var has = require('../internals/has');

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};

},{"../internals/descriptors":"../node_modules/core-js-pure/internals/descriptors.js","../internals/fails":"../node_modules/core-js-pure/internals/fails.js","../internals/has":"../node_modules/core-js-pure/internals/has.js"}],"../node_modules/core-js-pure/modules/es.array.find.js":[function(require,module,exports) {
'use strict';
var $ = require('../internals/export');
var $find = require('../internals/array-iteration').find;
var addToUnscopables = require('../internals/add-to-unscopables');
var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length');

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);

},{"../internals/export":"../node_modules/core-js-pure/internals/export.js","../internals/array-iteration":"../node_modules/core-js-pure/internals/array-iteration.js","../internals/add-to-unscopables":"../node_modules/core-js-pure/internals/add-to-unscopables.js","../internals/array-method-uses-to-length":"../node_modules/core-js-pure/internals/array-method-uses-to-length.js"}],"../node_modules/core-js-pure/internals/entry-virtual.js":[function(require,module,exports) {
var path = require('../internals/path');

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};

},{"../internals/path":"../node_modules/core-js-pure/internals/path.js"}],"../node_modules/core-js-pure/es/array/virtual/find.js":[function(require,module,exports) {
require('../../../modules/es.array.find');
var entryVirtual = require('../../../internals/entry-virtual');

module.exports = entryVirtual('Array').find;

},{"../../../modules/es.array.find":"../node_modules/core-js-pure/modules/es.array.find.js","../../../internals/entry-virtual":"../node_modules/core-js-pure/internals/entry-virtual.js"}],"../node_modules/core-js-pure/es/instance/find.js":[function(require,module,exports) {
var find = require('../array/virtual/find');

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.find;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.find) ? find : own;
};

},{"../array/virtual/find":"../node_modules/core-js-pure/es/array/virtual/find.js"}],"../node_modules/core-js-pure/stable/instance/find.js":[function(require,module,exports) {
var parent = require('../../es/instance/find');

module.exports = parent;

},{"../../es/instance/find":"../node_modules/core-js-pure/es/instance/find.js"}],"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/instance/find");
},{"core-js-pure/stable/instance/find":"../node_modules/core-js-pure/stable/instance/find.js"}],"../src/js/style4.js":[function(require,module,exports) {
jQuery(document).ready(function () {
  var text1 = jQuery('.transaction_activity_text1').height() + 4;
  var text2 = jQuery('.transaction_activity_text2').height() + 4;
  var text3 = jQuery('.transaction_activity_text3').height() + 4;
  var text4 = jQuery('.transaction_activity_text4').height() + 4;
  jQuery('.transaction_activity_text1, .transaction_activity_image_dots1').click(function () {
    jQuery('.transaction_activity_text_click').css({
      'top': '0',
      'height': text1
    });
    jQuery('.transaction_activity_text div').css({
      'color': '#2c3f5733'
    });
    jQuery('.transaction_activity_text1').css({
      'color': '#fff'
    });
    jQuery('.transaction_activity_image_dots div').css({
      'background-color': '#c5c7ca'
    });
    jQuery('.transaction_activity_image_dots1').css({
      'background-color': '#31d317'
    });
  });
  jQuery('.transaction_activity_text2, .transaction_activity_image_dots2').click(function () {
    jQuery('.transaction_activity_text_click').css({
      'top': text1,
      'height': text2
    });
    jQuery('.transaction_activity_text div').css({
      'color': '#2c3f5733'
    });
    jQuery('.transaction_activity_text2').css({
      'color': '#fff'
    });
    jQuery('.transaction_activity_image_dots div').css({
      'background-color': '#c5c7ca'
    });
    jQuery('.transaction_activity_image_dots2').css({
      'background-color': '#31d317'
    });
  });
  jQuery('.transaction_activity_text3, .transaction_activity_image_dots3').click(function () {
    jQuery('.transaction_activity_text_click').css({
      'top': text1 + text2,
      'height': text3
    });
    jQuery('.transaction_activity_text div').css({
      'color': '#2c3f5733'
    });
    jQuery('.transaction_activity_text3').css({
      'color': '#fff'
    });
    jQuery('.transaction_activity_image_dots div').css({
      'background-color': '#c5c7ca'
    });
    jQuery('.transaction_activity_image_dots3').css({
      'background-color': '#31d317'
    });
  });
  jQuery('.transaction_activity_text4, .transaction_activity_image_dots4').click(function () {
    jQuery('.transaction_activity_text_click').css({
      'top': text1 + text2 + text3,
      'height': text4
    });
    jQuery('.transaction_activity_text div').css({
      'color': '#2c3f5733'
    });
    jQuery('.transaction_activity_text4').css({
      'color': '#fff'
    });
    jQuery('.transaction_activity_image_dots div').css({
      'background-color': '#c5c7ca'
    });
    jQuery('.transaction_activity_image_dots4').css({
      'background-color': '#31d317'
    });
  });
});
},{}],"../src/js/style.js":[function(require,module,exports) {
var navbar = document.querySelector('nav');
var navbarCollapse = document.querySelector('navbar-collapse');
var navbarToggler = document.getElementById('burger');
var shadow = document.getElementById('shadow');

window.onscroll = function () {
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white');
  } else {
    navbar.classList.remove('bg-white');
  }
};

navbarToggler.onclick = function () {
  if (!$(".navbar-collapse").hasClass("show")) {
    $(".navbar").addClass("bg-white");
  } else {
    if ($(window).scrollTop() < 50) {
      $(".navbar").removeClass("bg-white");
    }
  }
};
},{}],"../src/js/style2.js":[function(require,module,exports) {
// Video Modal
$(document).ready(function () {
  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
    console.log($videoSrc);
  });
  console.log($videoSrc);
  $('#vModal-1').on('shown.bs.modal', function (e) {
    $("#video-1").attr('src', $videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1");
  });
  $('#vModal-1').on('hide.bs.modal', function (e) {
    $("#video-1").attr('src', $videoSrc);
  });
  $('#vModal-2').on('shown.bs.modal', function (e) {
    $("#video-2").attr('src', $videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1");
  });
  $('#vModal-2').on('hide.bs.modal', function (e) {
    $("#video-2").attr('src', $videoSrc);
  });
  $('#vModal-3').on('shown.bs.modal', function (e) {
    $("#video-3").attr('src', $videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1");
  });
  $('#vModal-3').on('hide.bs.modal', function (e) {
    $("#video-3").attr('src', $videoSrc);
  });
  $('#vModal-4').on('shown.bs.modal', function (e) {
    $("#video-4").attr('src', $videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1");
  });
  $('#vModal-4').on('hide.bs.modal', function (e) {
    $("#video-4").attr('src', $videoSrc);
  });
  $('#vModal-4').on('shown.bs.modal', function (e) {
    $("#video-5").attr('src', $videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1");
  });
  $('#vModal-5').on('hide.bs.modal', function (e) {
    $("#video-5").attr('src', $videoSrc);
  });
  $('#vModal-6').on('shown.bs.modal', function (e) {
    $("#video-6").attr('src', $videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1");
  });
  $('#vModal-6').on('hide.bs.modal', function (e) {
    $("#video-6").attr('src', $videoSrc);
  });
});
},{}],"../node_modules/core-js-pure/internals/whitespaces.js":[function(require,module,exports) {
// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],"../node_modules/core-js-pure/internals/string-trim.js":[function(require,module,exports) {
var requireObjectCoercible = require('../internals/require-object-coercible');
var whitespaces = require('../internals/whitespaces');

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};

},{"../internals/require-object-coercible":"../node_modules/core-js-pure/internals/require-object-coercible.js","../internals/whitespaces":"../node_modules/core-js-pure/internals/whitespaces.js"}],"../node_modules/core-js-pure/internals/number-parse-int.js":[function(require,module,exports) {

var global = require('../internals/global');
var trim = require('../internals/string-trim').trim;
var whitespaces = require('../internals/whitespaces');

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;

},{"../internals/global":"../node_modules/core-js-pure/internals/global.js","../internals/string-trim":"../node_modules/core-js-pure/internals/string-trim.js","../internals/whitespaces":"../node_modules/core-js-pure/internals/whitespaces.js"}],"../node_modules/core-js-pure/modules/es.parse-int.js":[function(require,module,exports) {
var $ = require('../internals/export');
var parseIntImplementation = require('../internals/number-parse-int');

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});

},{"../internals/export":"../node_modules/core-js-pure/internals/export.js","../internals/number-parse-int":"../node_modules/core-js-pure/internals/number-parse-int.js"}],"../node_modules/core-js-pure/es/parse-int.js":[function(require,module,exports) {
require('../modules/es.parse-int');
var path = require('../internals/path');

module.exports = path.parseInt;

},{"../modules/es.parse-int":"../node_modules/core-js-pure/modules/es.parse-int.js","../internals/path":"../node_modules/core-js-pure/internals/path.js"}],"../node_modules/core-js-pure/stable/parse-int.js":[function(require,module,exports) {
var parent = require('../es/parse-int');

module.exports = parent;

},{"../es/parse-int":"../node_modules/core-js-pure/es/parse-int.js"}],"../node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js":[function(require,module,exports) {
module.exports = require("core-js-pure/stable/parse-int");
},{"core-js-pure/stable/parse-int":"../node_modules/core-js-pure/stable/parse-int.js"}],"../src/js/style3.js":[function(require,module,exports) {
"use strict";

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Cache
var $card = $('.js-card'),
    $cardGrid = $('.js-card-grid'); //Generate the content

function generateContent(targetId) {
  var $target = $('#card' + targetId),
      targetContentClone = (0, _find.default)($target).call($target, '.js-more-container').clone().html();
  return '<div id="content' + targetId + '" data-id="' + targetId + '" class="more-container js-generated-content">' + targetContentClone + '</div>';
} //Determine the last element of the current row to append the generated content


function determineRow(targetPosition) {
  //no need to determine all the row, we can stop at the first row found
  var rowIsFound = false;
  $card.each(function () {
    var currentCardPosition = $(this).position().top;

    if (currentCardPosition === targetPosition && rowIsFound === false) {
      //If the element is at the same top position than our target element, then it belongs to the same row
      //Before adding the specific class, we can remove it on all element since we only want to determine the last element of the row
      $card.removeClass('currentRow');
      $(this).addClass('currentRow');
    } else if (currentCardPosition > targetPosition && rowIsFound === false) {
      //if the element is below our target element, then it belongs to the next row
      //Then we can change the counter since we don't have to calculate other element
      rowIsFound = true;
    } else if (rowIsFound === true) {
      //break the loop
      return false;
    }
  });
} //Manage the closing of the generated content


function closeGeneratedContent() {
  $(".js-generated-content").remove();
  $card.removeClass('active');
  $card.removeClass('currentRow');
} //Manage click


$cardGrid.on('click', '.js-card', function (event) {
  //Get former position
  var $previousCard = $('.card.active'),
      previousPosition = 0,
      scrollPosition = $('body').scrollTop();

  if ($previousCard.length) {
    previousPosition = $previousCard.position().top;
  } //close current content


  closeGeneratedContent(); //set the informations of cliked card

  var $target = $(event.currentTarget),
      targetId = $target.attr('data-id'),
      targetPosition = $target.position().top; //set current active class

  $target.addClass('active'); //determine new position for generated content

  determineRow(targetPosition); //insert generated content

  $('.currentRow').after(generateContent(targetId)); //scroll to generated content if not in the same place than before

  if (previousPosition != targetPosition) {
    //console.log('scroll !');
    $('html, body').animate({
      scrollTop: $('#content' + targetId).offset().top - 50
    }, 500);
  } else {
    $('body').scrollTop(scrollPosition);
  }
}); //Add event listener to the newly created component

$cardGrid.on('click', '.js-close-content', function (event) {
  closeGeneratedContent();
  var targetId = $(event.currentTarget).closest('.js-generated-content').attr('data-id');
  $('#card' + targetId).removeClass('lastClick'); //scroll back to the closed card

  $('html, body').animate({
    scrollTop: $('#card' + targetId).offset().top - 50
  }, 500);
}); //Next arrow

$cardGrid.on('click', '.js-next-content', function (event) {
  var $currentContent = $(event.currentTarget).closest('.js-generated-content'),
      currentCardId = (0, _parseInt2.default)($currentContent.attr('data-id')),
      nextCardId = currentCardId + 1,
      nextCardPosition;
  var $nextCardTarget = $('#card' + nextCardId);

  if ($nextCardTarget.length) {
    //Get former position
    var $previousCard = $('.card.active'),
        previousPosition = 0,
        scrollPosition = $('body').scrollTop();

    if ($previousCard.length) {
      previousPosition = $previousCard.position().top;
    }

    closeGeneratedContent();
    nextCardPosition = $('#card' + nextCardId).position().top;
    $nextCardTarget.addClass('active');
    determineRow(nextCardPosition);
    $('.currentRow').after(generateContent(nextCardId)); //scroll to generated content if not in the same place than before

    if (previousPosition != nextCardPosition) {
      //console.log('scroll !');
      $('html, body').animate({
        scrollTop: $('#content' + nextCardId).offset().top - 50
      }, 500);
    } else {
      $('body').scrollTop(scrollPosition);
    }
  }
}); //Previous arrow

$cardGrid.on('click', '.js-previous-content', function (event) {
  var $currentContent = $(event.currentTarget).closest('.js-generated-content'),
      currentCardId = (0, _parseInt2.default)($currentContent.attr('data-id')),
      previousCardId = currentCardId - 1,
      previousCardPosition;
  var $previousCardTarget = $('#card' + previousCardId);

  if ($previousCardTarget.length) {
    //Get former position
    var $previousCard = $('.card.active'),
        previousPosition = 0,
        scrollPosition = $('body').scrollTop();

    if ($previousCard.length) {
      previousPosition = $previousCard.position().top;
    }

    closeGeneratedContent();
    previousCardPosition = $('#card' + previousCardId).position().top;
    $previousCardTarget.addClass('active');
    determineRow(previousCardPosition);
    $('.currentRow').after(generateContent(previousCardId)); //scroll to generated content if not in the same place than before

    if (previousPosition != previousCardPosition) {
      //console.log('scroll !');
      $('html, body').animate({
        scrollTop: $('#content' + previousCardId).offset().top - 50
      }, 500);
    } else {
      $('body').scrollTop(scrollPosition);
    }
  }
});
$('.responsive').slick({
  dots: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  } // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});
},{"@babel/runtime-corejs3/core-js-stable/parse-int":"../node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js","@babel/runtime-corejs3/core-js-stable/instance/find":"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js"}],"../src/js/main.js":[function(require,module,exports) {
"use strict";

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

require("./style4");

require("./style");

require("./style2");

require("./style3");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  // init the validator
  // validator files are included in the download package
  $("#contact-form").validator(); // when the form is submitted

  $("#contact-form").on("submit", function (e) {
    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "contact.php";
      var messageAlert = "alert-success";
      var messageText = "Your message was sent, thank you. I will get back to you soon."; // compose Bootstrap alert box HTML

      var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + "</div>"; // If we have messageAlert and messageText

      if (messageAlert && messageText) {
        var _context;

        // inject the alert to .messages div in our form
        (0, _find.default)(_context = $("#contact-form")).call(_context, ".messages").html(alertBox); // empty the form

        $("#contact-form")[0].reset();
      }

      return false;
    }
  });
});
},{"@babel/runtime-corejs3/core-js-stable/instance/find":"../node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js","./style4":"../src/js/style4.js","./style":"../src/js/style.js","./style2":"../src/js/style2.js","./style3":"../src/js/style3.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50439" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/js/main.js"], null)
//# sourceMappingURL=/main.5936f934.js.map