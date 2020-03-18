/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/WebComponent.js":
/*!****************************************!*\
  !*** ./src/components/WebComponent.js ***!
  \****************************************/
/*! exports provided: WebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebComponent", function() { return WebComponent; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebComponent = function WebComponent() {
  _classCallCheck(this, WebComponent);
};



/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: WebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebComponent */ "./src/components/WebComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebComponent", function() { return _WebComponent__WEBPACK_IMPORTED_MODULE_0__["WebComponent"]; });



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Kernel, WebComponent, WebComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kernel */ "./src/kernel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Kernel", function() { return _kernel__WEBPACK_IMPORTED_MODULE_0__["Kernel"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["WebComponent"]; });

/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules */ "./src/modules/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebComponents", function() { return _modules__WEBPACK_IMPORTED_MODULE_2__["WebComponents"]; });

// eslint-disable-next-line no-global-assign




/***/ }),

/***/ "./src/kernel.js":
/*!***********************!*\
  !*** ./src/kernel.js ***!
  \***********************/
/*! exports provided: Kernel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kernel", function() { return Kernel; });
/* harmony import */ var _modules_Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Module */ "./src/modules/Module.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Kernel = /*#__PURE__*/function () {
  function Kernel() {
    _classCallCheck(this, Kernel);

    this.modules = new Map();
  }
  /**
   *
   * @param {Module} _module
   */


  _createClass(Kernel, [{
    key: "add",
    value: function add(_module) {
      this.modules.set(_module.name, new _module(this));
    }
    /**
     * @param {string} moduleName
     * @returns {Module}
     */

  }, {
    key: "get",
    value: function get(moduleName) {
      return this.modules.get(moduleName);
    }
  }, {
    key: "list",
    value: function list() {
      return _toConsumableArray(this.modules);
    }
  }]);

  return Kernel;
}();



/***/ }),

/***/ "./src/modules/Module.js":
/*!*******************************!*\
  !*** ./src/modules/Module.js ***!
  \*******************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = function Module() {
  _classCallCheck(this, Module);
};



/***/ }),

/***/ "./src/modules/WebComponents.js":
/*!**************************************!*\
  !*** ./src/modules/WebComponents.js ***!
  \**************************************/
/*! exports provided: WebComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebComponents", function() { return WebComponents; });
/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Module */ "./src/modules/Module.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var WebComponents = /*#__PURE__*/function (_Module) {
  _inherits(WebComponents, _Module);

  function WebComponents() {
    var _this;

    _classCallCheck(this, WebComponents);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WebComponents).call(this));
    /** @type {HTMLElement} **/

    console.log('lol');
    /** @type {MutationObserverInit} **/

    _this.observerConfig = {
      attributes: true,
      childList: true,
      subtree: true
    };

    _this.observe();

    return _this;
  }
  /**
   * Callback for DOM Mutation Observer
   *
   * @param {MutationRecord} mutationList
   * @param {MutationObserver} mutationObserver
   */


  _createClass(WebComponents, [{
    key: "domCallback",
    value: function domCallback(mutationList, mutationObserver) {
      console.log(mutationList);
    }
  }, {
    key: "observe",
    value: function observe() {
      this.observer = new MutationObserver(this.domCallback);
      this.observer.observe(this.$root, this.observerConfig);
    }
  }]);

  return WebComponents;
}(_Module__WEBPACK_IMPORTED_MODULE_0__["Module"]);

_defineProperty(WebComponents, "$root", document.getElementById('#root'));



/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! exports provided: WebComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WebComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebComponents */ "./src/modules/WebComponents.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebComponents", function() { return _WebComponents__WEBPACK_IMPORTED_MODULE_0__["WebComponents"]; });



/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/@nebrob/libs/src/index.js */"./src/index.js");


/***/ })

/******/ });