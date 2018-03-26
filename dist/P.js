(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("P", [], factory);
	else if(typeof exports === 'object')
		exports["P"] = factory();
	else
		root["P"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/P/ball.js":
/*!***********************!*\
  !*** ./src/P/ball.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _particle = __webpack_require__(/*! ./particle */ \"./src/P/particle.js\");\n\nvar _particle2 = _interopRequireDefault(_particle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Ball = function (_Particle) {\n   _inherits(Ball, _Particle);\n\n   function Ball() {\n      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n          radius = _ref.radius,\n          color = _ref.color,\n          mass = _ref.mass,\n          charge = _ref.charge,\n          gradient = _ref.gradient;\n\n      _classCallCheck(this, Ball);\n\n      var _this = _possibleConstructorReturn(this, (Ball.__proto__ || Object.getPrototypeOf(Ball)).call(this, { mass: mass, charge: charge }));\n\n      _this.radius = radius === undefined ? 20 : radius;\n      _this.color = color === undefined ? '#0000ff' : color;\n      _this.gradient = gradient === undefined ? false : gradient;\n      return _this;\n   }\n\n   _createClass(Ball, [{\n      key: 'draw',\n      value: function draw(context) {\n         var _position = this.position,\n             x = _position.x,\n             y = _position.y;\n\n\n         if (this.gradient) {\n            var grad = context.createRadialGradient(x, y, 0, x, y, this.radius);\n            grad.addColorStop(0, '#ffffff');\n            grad.addColorStop(1, this.color);\n            context.fillStyle = grad;\n         } else {\n            context.fillStyle = this.color;\n         }\n         context.beginPath();\n         context.arc(x, y, this.radius, 0, 2 * Math.PI, true);\n         context.closePath();\n         context.fill();\n      }\n   }]);\n\n   return Ball;\n}(_particle2.default);\n\nexports.default = Ball;\n\n//# sourceURL=webpack://P/./src/P/ball.js?");

/***/ }),

/***/ "./src/P/constants.js":
/*!****************************!*\
  !*** ./src/P/constants.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// gravity\nvar G = exports.G = 10;\nvar GRAVITATIONAL_CONSTANT = exports.GRAVITATIONAL_CONSTANT = 1;\n\n// time related constants\nvar TIME_FRACTION = exports.TIME_FRACTION = 0.005;\nvar MINIMUM_TIME_DIFFERENCE = exports.MINIMUM_TIME_DIFFERENCE = 0.2;\n\nvar AIR_DRAG = exports.AIR_DRAG = 0.005;\n\n//# sourceURL=webpack://P/./src/P/constants.js?");

/***/ }),

/***/ "./src/P/core.js":
/*!***********************!*\
  !*** ./src/P/core.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/P/constants.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Core = function () {\n    function Core() {\n        _classCallCheck(this, Core);\n\n        this.time = {\n            initial: 0,\n            elapsed: 0,\n            dt: 0\n        };\n    }\n\n    _createClass(Core, [{\n        key: 'init',\n        value: function init() {\n            this.time.initial = new Date().getTime();\n        }\n    }, {\n        key: 'update',\n        value: function update() {\n            var t1 = new Date().getTime();\n            this.time.dt = _constants.TIME_FRACTION * (t1 - this.time.initial);\n            this.time.initial = t1;\n            if (this.time.dt > _constants.MINIMUM_TIME_DIFFERENCE) {\n                this.time.dt = 0;\n            }\n            this.time.elapsed += this.time.dt;\n        }\n    }]);\n\n    return Core;\n}();\n\nexports.default = new Core();\n\n//# sourceURL=webpack://P/./src/P/core.js?");

/***/ }),

/***/ "./src/P/forces.js":
/*!*************************!*\
  !*** ./src/P/forces.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _vector = __webpack_require__(/*! ./vector */ \"./src/P/vector.js\");\n\nvar _vector2 = _interopRequireDefault(_vector);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/P/constants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Forces = function () {\n    function Forces() {\n        _classCallCheck(this, Forces);\n    }\n\n    _createClass(Forces, null, [{\n        key: 'zero',\n        value: function zero() {\n            return new _vector2.default(0, 0);\n        }\n    }, {\n        key: 'constantGravity',\n        value: function constantGravity(mass, g) {\n            return new _vector2.default(0, mass * _constants.G);\n        }\n    }, {\n        key: 'gravity',\n        value: function gravity(m1, m2, r) {\n            return r.clone().scale(-_constants.GRAVITATIONAL_CONSTANT * m1 * m2 / (r.lengthSquared() * r.length()));\n        }\n    }, {\n        key: 'upthrust',\n        value: function upthrust(rho, volume) {\n            return new _vector2.default(0, -rho * volume * _constants.G);\n        }\n    }, {\n        key: 'linearDrag',\n        value: function linearDrag(constant, object) {\n            var k = 6 * Math.PI * constant * object.radius;\n            var force = void 0,\n                velMag = object.velocity.length();\n\n            if (velMag > 0) {\n                force = object.velocity.clone().scale(-k);\n            } else {\n                force = new _vector2.default(0, 0);\n            }\n\n            return force;\n        }\n    }, {\n        key: 'drag',\n        value: function drag(constant, object) {\n            var force = void 0;\n\n            //const k = 1/2 * rho * Area of object * Drag coeff;\n            var magnitude = object.velocity.length();\n\n            if (magnitude > 0) {\n                force = object.velocity.clone().scale(-constant * magnitude);\n            } else {\n                force = new _vector2.default(0, 0);\n            }\n\n            return force;\n        }\n    }, {\n        key: 'add',\n        value: function add(forces) {\n            var sum = new _vector2.default(0, 0);\n\n            for (var i = 0; i < forces.length; i++) {\n                sum.incrementBy(forces[i]);\n            }\n\n            return sum;\n        }\n    }, {\n        key: 'DRAG_TYPES',\n        get: function get() {\n            return {\n                SPHERE: 1\n            };\n        }\n    }]);\n\n    return Forces;\n}();\n\nexports.default = Forces;\n\n//# sourceURL=webpack://P/./src/P/forces.js?");

/***/ }),

/***/ "./src/P/particle.js":
/*!***************************!*\
  !*** ./src/P/particle.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _vector = __webpack_require__(/*! ./vector */ \"./src/P/vector.js\");\n\nvar _vector2 = _interopRequireDefault(_vector);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Particle = function () {\n    function Particle() {\n        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n            mass = _ref.mass,\n            charge = _ref.charge;\n\n        _classCallCheck(this, Particle);\n\n        this.mass = mass === undefined ? 1 : mass;\n        this.charge = charge === undefined ? 0 : charge;\n        this._position = new _vector2.default(0, 0);\n        this._velocity = new _vector2.default(0, 0);\n        this._acceleration = new _vector2.default(0, 0);\n        this._force = new _vector2.default(0, 0);\n    }\n\n    _createClass(Particle, [{\n        key: 'update',\n        value: function update(dt) {\n            if (dt) {\n                this.updateAcceleration(dt);\n                this.updateVelocity(dt);\n                this.updatePosition(dt);\n            }\n        }\n    }, {\n        key: 'updateAcceleration',\n        value: function updateAcceleration(dt) {\n            this.acceleration = this.force.clone().scale(1 / this.mass);\n\n            return this;\n        }\n    }, {\n        key: 'updatePosition',\n        value: function updatePosition(dt) {\n            var scaled = this.velocity.clone().scale(dt);\n            this.position = this.position.add(scaled);\n\n            return this;\n        }\n    }, {\n        key: 'updateVelocity',\n        value: function updateVelocity(dt) {\n            var scaled = this.acceleration.clone().scale(dt);\n            this.velocity = this.velocity.add(scaled);\n\n            return this;\n        }\n    }, {\n        key: 'position',\n        set: function set(pos) {\n            if (pos) {\n                this._position.set(pos.x, pos.y);\n            }\n        },\n        get: function get() {\n            return this._position;\n        }\n    }, {\n        key: 'acceleration',\n        set: function set(acc) {\n            if (acc) {\n                this._acceleration.set(acc.x, acc.y);\n            }\n        },\n        get: function get() {\n            return this._acceleration;\n        }\n    }, {\n        key: 'velocity',\n        set: function set(v) {\n            if (v) {\n                this._velocity.set(v.x, v.y);\n            }\n        },\n        get: function get() {\n            return this._velocity;\n        }\n    }]);\n\n    return Particle;\n}();\n\nexports.default = Particle;\n\n//# sourceURL=webpack://P/./src/P/particle.js?");

/***/ }),

/***/ "./src/P/vector.js":
/*!*************************!*\
  !*** ./src/P/vector.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Vector = function () {\n    _createClass(Vector, null, [{\n        key: \"distance\",\n        value: function distance(v1, v2) {\n            return v1.subtract(v2).length();\n        }\n    }, {\n        key: \"angleBetween\",\n        value: function angleBetween(v1, v2) {\n            return Math.acos(v1.dotProduct(v2) / (v1.length() * v2.length()));\n        }\n    }, {\n        key: \"vector\",\n        value: function vector(_ref) {\n            var mag = _ref.mag,\n                angle = _ref.angle,\n                _ref$clockwise = _ref.clockwise,\n                clockwise = _ref$clockwise === undefined ? true : _ref$clockwise;\n\n            var vec = new Vector(0, 0);\n            vec.x = mag * Math.cos(angle);\n            vec.y = mag * Math.sin(angle);\n\n            if (!clockwise) {\n                vec.y *= -1;\n            }\n\n            return vec;\n        }\n    }]);\n\n    function Vector(x, y) {\n        _classCallCheck(this, Vector);\n\n        this.x = x;\n        this.y = y;\n    }\n\n    _createClass(Vector, [{\n        key: \"set\",\n        value: function set(x, y) {\n            this.x = x || this.x;\n            this.y = y || this.y;\n\n            return this;\n        }\n    }, {\n        key: \"lengthSquared\",\n        value: function lengthSquared() {\n            return this.x * this.x + this.y * this.y;\n        }\n    }, {\n        key: \"length\",\n        value: function length() {\n            return Math.sqrt(this.lengthSquared());\n        }\n    }, {\n        key: \"clone\",\n        value: function clone() {\n            return new Vector(this.x, this.y);\n        }\n    }, {\n        key: \"negate\",\n        value: function negate() {\n            this.x = -this.x;\n            this.y = -this.y;\n\n            return this;\n        }\n    }, {\n        key: \"normalize\",\n        value: function normalize() {\n            var length = this.length();\n            if (length > 0) {\n                this.x /= length;\n                this.y /= length;\n            }\n            return this.length();\n        }\n    }, {\n        key: \"add\",\n        value: function add(vec) {\n            // doesn't change the existing vector, returns sum of two vectors\n            return new Vector(this.x + vec.x, this.y + vec.y);\n        }\n    }, {\n        key: \"incrementBy\",\n        value: function incrementBy(vec) {\n            this.x += vec.x;\n            this.y += vec.y;\n\n            return this;\n        }\n    }, {\n        key: \"subtract\",\n        value: function subtract(vec) {\n            // returns a new vector which is the difference between this and vec.\n            return new Vector(this.x - vec.x, this.y - vec.y);\n        }\n    }, {\n        key: \"decrementBy\",\n        value: function decrementBy(vec) {\n            this.x -= vec.x;\n            this.y -= vec.y;\n\n            return this;\n        }\n    }, {\n        key: \"scale\",\n        value: function scale(k) {\n            this.x *= k;\n            this.y *= k;\n\n            return this;\n        }\n    }, {\n        key: \"addScaled\",\n        value: function addScaled(vec, scale) {\n            return this.add(vec.clone().scale(scale));\n        }\n    }, {\n        key: \"dotProduct\",\n        value: function dotProduct(vec) {\n            // also called scalar product\n            return this.x * vec.x + this.y * vec.y;\n        }\n    }, {\n        key: \"perp\",\n        value: function perp(coeff) {\n            var anticlockwise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n            var length = this.length();\n            var vec = new Vector(this.y, -this.x);\n            if (length > 0) {\n                if (anticlockwise) {\n                    // anticlockwise with respect to canvas coordinate system\n                    vec.scale(coeff / length);\n                } else {\n                    vec.scale(-coeff / length);\n                }\n            } else {\n                vec = new Vector(0, 0);\n            }\n            return vec;\n        }\n    }]);\n\n    return Vector;\n}();\n\nexports.default = Vector;\n\n//# sourceURL=webpack://P/./src/P/vector.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Core = exports.CONSTANTS = exports.Forces = exports.Ball = exports.Particle = exports.Vector = undefined;\n\nvar _vector = __webpack_require__(/*! ./P/vector */ \"./src/P/vector.js\");\n\nvar _vector2 = _interopRequireDefault(_vector);\n\nvar _particle = __webpack_require__(/*! ./P/particle */ \"./src/P/particle.js\");\n\nvar _particle2 = _interopRequireDefault(_particle);\n\nvar _ball = __webpack_require__(/*! ./P/ball */ \"./src/P/ball.js\");\n\nvar _ball2 = _interopRequireDefault(_ball);\n\nvar _forces = __webpack_require__(/*! ./P/forces */ \"./src/P/forces.js\");\n\nvar _forces2 = _interopRequireDefault(_forces);\n\nvar _constants = __webpack_require__(/*! ./P/constants */ \"./src/P/constants.js\");\n\nvar CONSTANTS = _interopRequireWildcard(_constants);\n\nvar _core = __webpack_require__(/*! ./P/core */ \"./src/P/core.js\");\n\nvar _core2 = _interopRequireDefault(_core);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Vector = _vector2.default;\nexports.Particle = _particle2.default;\nexports.Ball = _ball2.default;\nexports.Forces = _forces2.default;\nexports.CONSTANTS = CONSTANTS;\nexports.Core = _core2.default;\n\n//# sourceURL=webpack://P/./src/index.js?");

/***/ })

/******/ });
});