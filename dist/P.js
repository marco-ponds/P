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

/***/ "./src/P/constants.js":
/*!****************************!*\
  !*** ./src/P/constants.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// gravity\nvar G = exports.G = 10;\nvar GRAVITATIONAL_CONSTANT = exports.GRAVITATIONAL_CONSTANT = 1;\n\n// time related constants\nvar TIME_FRACTION = exports.TIME_FRACTION = 0.005;\nvar MINIMUM_TIME_DIFFERENCE = exports.MINIMUM_TIME_DIFFERENCE = 0.2;\n\nvar AIR_DRAG = exports.AIR_DRAG = 0.005;\n\nvar COULOMB = exports.COULOMB = 1;\n\n//# sourceURL=webpack://P/./src/P/constants.js?");

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

/***/ "./src/P/entities/ball.js":
/*!********************************!*\
  !*** ./src/P/entities/ball.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _particle = __webpack_require__(/*! ./particle */ \"./src/P/entities/particle.js\");\n\nvar _particle2 = _interopRequireDefault(_particle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Ball = function (_Particle) {\n    _inherits(Ball, _Particle);\n\n    function Ball() {\n        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n            radius = _ref.radius,\n            color = _ref.color,\n            mass = _ref.mass,\n            charge = _ref.charge,\n            gradient = _ref.gradient;\n\n        _classCallCheck(this, Ball);\n\n        var _this = _possibleConstructorReturn(this, (Ball.__proto__ || Object.getPrototypeOf(Ball)).call(this, { mass: mass, charge: charge }));\n\n        _this.radius = radius === undefined ? 20 : radius;\n        _this.color = color === undefined ? '#333333' : color;\n        _this.gradient = gradient === undefined ? false : gradient;\n        return _this;\n    }\n\n    _createClass(Ball, [{\n        key: 'draw',\n        value: function draw(context) {\n            var _position = this.position,\n                x = _position.x,\n                y = _position.y;\n\n            context.strokeStyle = this.color;\n            context.fillStyle = '#ffffff';\n            context.beginPath();\n            context.arc(x, y, this.radius, 0, 2 * Math.PI, true);\n            context.closePath();\n            context.stroke();\n            context.fill();\n        }\n    }]);\n\n    return Ball;\n}(_particle2.default);\n\nexports.default = Ball;\n\n//# sourceURL=webpack://P/./src/P/entities/ball.js?");

/***/ }),

/***/ "./src/P/entities/box.js":
/*!*******************************!*\
  !*** ./src/P/entities/box.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _particle = __webpack_require__(/*! ./particle */ \"./src/P/entities/particle.js\");\n\nvar _particle2 = _interopRequireDefault(_particle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Box = function (_Particle) {\n    _inherits(Box, _Particle);\n\n    function Box(_ref) {\n        var _ref$width = _ref.width,\n            width = _ref$width === undefined ? 20 : _ref$width,\n            _ref$height = _ref.height,\n            height = _ref$height === undefined ? 20 : _ref$height,\n            _ref$color = _ref.color,\n            color = _ref$color === undefined ? '#333333' : _ref$color,\n            _ref$mass = _ref.mass,\n            mass = _ref$mass === undefined ? 1 : _ref$mass,\n            _ref$charge = _ref.charge,\n            charge = _ref$charge === undefined ? 1 : _ref$charge;\n\n        _classCallCheck(this, Box);\n\n        var _this = _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this, mass, charge));\n\n        _this.width = width;\n        _this.height = height;\n        _this.color = color;\n        _this.mass = mass;\n        return _this;\n    }\n\n    _createClass(Box, [{\n        key: 'draw',\n        value: function draw(context) {\n            var _position = this.position,\n                x = _position.x,\n                y = _position.y;\n\n            context.strokeStyle = this.color;\n            context.fillStyle = '#ffffff';\n            context.beginPath();\n            context.rect(x, y, this.width, this.height);\n            context.closePath();\n            context.stroke();\n            context.fill();\n        }\n    }]);\n\n    return Box;\n}(_particle2.default);\n\nexports.default = Box;\n\n//# sourceURL=webpack://P/./src/P/entities/box.js?");

/***/ }),

/***/ "./src/P/entities/index.js":
/*!*********************************!*\
  !*** ./src/P/entities/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Wall = exports.Wheel = exports.Particle = exports.Box = exports.Ball = undefined;\n\nvar _ball = __webpack_require__(/*! ./ball */ \"./src/P/entities/ball.js\");\n\nvar _ball2 = _interopRequireDefault(_ball);\n\nvar _box = __webpack_require__(/*! ./box */ \"./src/P/entities/box.js\");\n\nvar _box2 = _interopRequireDefault(_box);\n\nvar _particle = __webpack_require__(/*! ./particle */ \"./src/P/entities/particle.js\");\n\nvar _particle2 = _interopRequireDefault(_particle);\n\nvar _wheel = __webpack_require__(/*! ./wheel */ \"./src/P/entities/wheel.js\");\n\nvar _wheel2 = _interopRequireDefault(_wheel);\n\nvar _wall = __webpack_require__(/*! ./wall */ \"./src/P/entities/wall.js\");\n\nvar _wall2 = _interopRequireDefault(_wall);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Ball = _ball2.default;\nexports.Box = _box2.default;\nexports.Particle = _particle2.default;\nexports.Wheel = _wheel2.default;\nexports.Wall = _wall2.default;\n\n//# sourceURL=webpack://P/./src/P/entities/index.js?");

/***/ }),

/***/ "./src/P/entities/particle.js":
/*!************************************!*\
  !*** ./src/P/entities/particle.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _math = __webpack_require__(/*! ../math */ \"./src/P/math/index.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Particle = function () {\n    function Particle() {\n        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n            mass = _ref.mass,\n            charge = _ref.charge;\n\n        _classCallCheck(this, Particle);\n\n        this.mass = mass === undefined ? 1 : mass;\n        this.charge = charge === undefined ? 0 : charge;\n        this._position = new _math.Vector(0, 0);\n        this._velocity = new _math.Vector(0, 0);\n        this._acceleration = new _math.Vector(0, 0);\n        this._force = new _math.Vector(0, 0);\n    }\n\n    _createClass(Particle, [{\n        key: 'update',\n        value: function update(dt) {\n            if (dt) {\n                this.updateAcceleration(dt);\n                this.updateVelocity(dt);\n                this.updatePosition(dt);\n            }\n        }\n    }, {\n        key: 'updateAcceleration',\n        value: function updateAcceleration(dt) {\n            if (this.force) {\n                this.acceleration = this.force.clone().scale(1 / this.mass);\n            }\n\n            return this;\n        }\n    }, {\n        key: 'updatePosition',\n        value: function updatePosition(dt) {\n            var scaled = this.velocity.clone().scale(dt);\n            this.position = this.position.add(scaled);\n\n            return this;\n        }\n    }, {\n        key: 'updateVelocity',\n        value: function updateVelocity(dt) {\n            var scaled = this.acceleration.clone().scale(dt);\n            this.velocity = this.velocity.add(scaled);\n\n            return this;\n        }\n    }, {\n        key: 'position',\n        set: function set(pos) {\n            if (pos) {\n                this._position.set(pos.x, pos.y);\n            }\n        },\n        get: function get() {\n            return this._position;\n        }\n    }, {\n        key: 'acceleration',\n        set: function set(acc) {\n            if (acc) {\n                this._acceleration.set(acc.x, acc.y);\n            }\n        },\n        get: function get() {\n            return this._acceleration;\n        }\n    }, {\n        key: 'velocity',\n        set: function set(v) {\n            if (v) {\n                this._velocity.set(v.x, v.y);\n            }\n        },\n        get: function get() {\n            return this._velocity;\n        }\n    }]);\n\n    return Particle;\n}();\n\nexports.default = Particle;\n\n//# sourceURL=webpack://P/./src/P/entities/particle.js?");

/***/ }),

/***/ "./src/P/entities/wall.js":
/*!********************************!*\
  !*** ./src/P/entities/wall.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _particle = __webpack_require__(/*! ./particle */ \"./src/P/entities/particle.js\");\n\nvar _particle2 = _interopRequireDefault(_particle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Wall = function (_Particle) {\n    _inherits(Wall, _Particle);\n\n    function Wall(p1, p2) {\n        _classCallCheck(this, Wall);\n\n        var _this = _possibleConstructorReturn(this, (Wall.__proto__ || Object.getPrototypeOf(Wall)).call(this, { mass: 1, charge: 1 }));\n\n        _this.p1 = p1;\n        _this.p2 = p2;\n        _this.side = 1;\n        return _this;\n    }\n\n    _createClass(Wall, [{\n        key: 'draw',\n        value: function draw(context) {\n            context.save();\n            context.strokeStyle = '#000000';\n            context.lineWidth = 1;\n            context.beginPath();\n            context.moveTo(this.p1.x, this.p1.y);\n            context.lineTo(this.p2.x, this.p2.y);\n            context.closePath();\n            context.stroke();\n            context.restore();\n        }\n    }, {\n        key: 'direction',\n        get: function get() {\n            return this.p2.subtract(this.p1);\n        }\n    }, {\n        key: 'normal',\n        get: function get() {\n            return this.dir.perp(1);\n        }\n    }]);\n\n    return Wall;\n}(_particle2.default);\n\nexports.default = Wall;\n\n//# sourceURL=webpack://P/./src/P/entities/wall.js?");

/***/ }),

/***/ "./src/P/entities/wheel.js":
/*!*********************************!*\
  !*** ./src/P/entities/wheel.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _math = __webpack_require__(/*! ../math */ \"./src/P/math/index.js\");\n\nvar _particle = __webpack_require__(/*! ./particle */ \"./src/P/entities/particle.js\");\n\nvar _particle2 = _interopRequireDefault(_particle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Wheel = function (_Particle) {\n    _inherits(Wheel, _Particle);\n\n    function Wheel(_ref) {\n        var mass = _ref.mass,\n            charge = _ref.charge,\n            _ref$color = _ref.color,\n            color = _ref$color === undefined ? '#333333' : _ref$color,\n            _ref$innerRadius = _ref.innerRadius,\n            innerRadius = _ref$innerRadius === undefined ? 10 : _ref$innerRadius,\n            _ref$outerRadius = _ref.outerRadius,\n            outerRadius = _ref$outerRadius === undefined ? 15 : _ref$outerRadius,\n            _ref$numSpokes = _ref.numSpokes,\n            numSpokes = _ref$numSpokes === undefined ? 12 : _ref$numSpokes;\n\n        _classCallCheck(this, Wheel);\n\n        var _this = _possibleConstructorReturn(this, (Wheel.__proto__ || Object.getPrototypeOf(Wheel)).call(this, mass, charge));\n\n        _this.color = color;\n        _this.radius = {\n            inner: innerRadius,\n            outer: outerRadius\n        };\n\n        _this.nums = numSpokes;\n        return _this;\n    }\n\n    _createClass(Wheel, [{\n        key: 'draw',\n        value: function draw(context) {\n            var _position = this.position,\n                x = _position.x,\n                y = _position.y;\n            var _radius = this.radius,\n                inner = _radius.inner,\n                outer = _radius.outer;\n\n\n            context.save();\n            context.fillStyle = this.color;\n            context.beginPath();\n            context.arc(x, y, outer, 0, 2 * Math.PI, true);\n            context.closePath();\n            context.fill();\n            context.fillStyle = '#ffffff';\n            context.beginPath();\n            context.arc(x, y, inner, 0, 2 * Math.PI, true);\n            context.closePath();\n            context.fill();\n            context.strokeStyle = this.color;\n            context.lineWidth = 4;\n            context.beginPath();\n\n            for (var n = 0; n < this.nums; n++) {\n                context.moveTo(x, y);\n                context.lineTo(x + inner * Math.cos(2 * Math.PI * n / this.nums), y + inner * Math.sin(2 * Math.PI * n / this.nums));\n            }\n            context.closePath();\n            context.stroke();\n            context.restore();\n        }\n    }]);\n\n    return Wheel;\n}(_particle2.default);\n\nexports.default = Wheel;\n\n//# sourceURL=webpack://P/./src/P/entities/wheel.js?");

/***/ }),

/***/ "./src/P/forces/forces.js":
/*!********************************!*\
  !*** ./src/P/forces/forces.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _math = __webpack_require__(/*! ../math */ \"./src/P/math/index.js\");\n\nvar _constants = __webpack_require__(/*! ../constants */ \"./src/P/constants.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Forces = function () {\n    function Forces() {\n        _classCallCheck(this, Forces);\n    }\n\n    _createClass(Forces, null, [{\n        key: 'zero',\n        value: function zero() {\n            return new _math.Vector(0, 0);\n        }\n    }, {\n        key: 'constantGravity',\n        value: function constantGravity(mass) {\n            return new _math.Vector(0, mass * _constants.G);\n        }\n    }, {\n        key: 'gravity',\n        value: function gravity(m1, m2, r) {\n            return r.clone().scale(-_constants.GRAVITATIONAL_CONSTANT * m1 * m2 / (r.lengthSquared() * r.length()));\n        }\n    }, {\n        key: 'upthrust',\n        value: function upthrust(rho, volume) {\n            return new _math.Vector(0, -rho * volume * _constants.G);\n        }\n    }, {\n        key: 'linearDrag',\n        value: function linearDrag(constant, velocity) {\n            var k = 6 * Math.PI * constant * object.radius;\n            var force = void 0,\n                velMag = velocity.length();\n\n            if (velMag > 0) {\n                force = velocity.clone().scale(-k);\n            } else {\n                force = new _math.Vector(0, 0);\n            }\n\n            return force;\n        }\n    }, {\n        key: 'drag',\n        value: function drag(constant, velocity) {\n            var force = void 0;\n\n            //const k = 1/2 * rho * Area of object * Drag coeff;\n            var magnitude = velocity.length();\n\n            if (magnitude > 0) {\n                force = velocity.clone().scale(-constant * magnitude);\n            } else {\n                force = new _math.Vector(0, 0);\n            }\n\n            return force;\n        }\n    }, {\n        key: 'lift',\n        value: function lift(constant, velocity) {\n            var force = void 0;\n\n            var magnitude = velocity.length();\n\n            if (magnitude > 0) {\n                force = velocity.perp(constant * magnitude);\n            } else {\n                force = new _math.Vector(0, 0);\n            }\n\n            return force;\n        }\n    }, {\n        key: 'wind',\n        value: function wind(constant, velocity, _wind2, turbolence) {\n\n            var _wind = _wind2;\n            if (turbolence) {\n                _wind = new _math.Vector(20 + (Math.random() - 0.5) * 1000, (Math.random() - 0.5) * 1000);\n            }\n\n            var relwind = _wind.subtract(velocity);\n\n            return Forces.drag(-constant, relwind);\n        }\n    }, {\n        key: 'spring',\n        value: function spring(constant, vector) {\n            // restoring force of a spring\n            return vector.clone().scale(-constant);\n        }\n    }, {\n        key: 'damping',\n        value: function damping(constant, velocity) {\n            var magnitude = velocity.length();\n\n            if (magnitude > 0) {\n                return velocity.clone().scale(-constant);\n            } else {\n                return new _math.Vector(0, 0);\n            }\n        }\n    }, {\n        key: 'centripetal',\n        value: function centripetal(distance, obj) {\n            var unit = distance.unit().clone();\n            var mass = obj.mass;\n            var velMagnitude = obj.velocity.length();\n\n            return unit.scale(-mass * velMagnitude * velMagnitude / distance.length());\n        }\n    }, {\n        key: 'maxFriction',\n        value: function maxFriction(constant, distance, _ref) {\n            var _ref$mass = _ref.mass,\n                mass = _ref$mass === undefined ? 1 : _ref$mass;\n\n            var unit = distance.unit().clone();\n\n            return unit.scale(-constant * mass * _constants.G);\n        }\n    }, {\n        key: 'tension',\n        value: function tension(distance, length, gravity, object) {\n            var unit = distance.unit().clone();\n            var magnitude = object.velocity.lengthSquared();\n            var mass = object.mass,\n                velocity = object.velocity;\n\n\n            return unit.scale(-(gravity.projection(distance) + mass * velocity.lengthSquared() / lengthP));\n        }\n    }, {\n        key: 'electric',\n        value: function electric(q1, q2, distance) {\n            // same charge repels, diff charge attracts\n            return distance.clone().scale(_constants.COULOMB * q1 * q2 / (distance.lengthSquared() * distance.length()));\n        }\n    }, {\n        key: 'lorentz',\n        value: function lorentz(E, B, object) {\n            // Lorentz = qE + vB ( we can assume B is pointing out of the screen);\n            var charge = object.charge,\n                velocity = object.velocity;\n\n            return E.clone().scale(charge).add(velocity.perp(charge * B * velocity.length()));\n        }\n    }, {\n        key: 'central',\n        value: function central(k, n, distance) {\n            // k > 0 repulsive, k < 0 attractive\n            // n > 0 increase with distance, n < 0 decrease\n            return distance.clone().scale(k * Math.pow(distance.length(), n - 1));\n        }\n    }, {\n        key: 'field',\n        value: function field(k, F) {\n            // force produced by a force field on a particle\n            // GRAVITY      particle.force = P.Forces.forceField(m, G); G = P.Vector(0, 9.8);\n            // ELECTRIC     particle.force = P.Forces.forceFIeld(q, E)\n            return F.clone().scale(k);\n        }\n    }, {\n        key: 'add',\n        value: function add(forces) {\n            var sum = new _math.Vector(0, 0);\n\n            for (var i = 0; i < forces.length; i++) {\n                sum.incrementBy(forces[i]);\n            }\n\n            return sum;\n        }\n    }, {\n        key: 'DRAG_TYPES',\n        get: function get() {\n            return {\n                SPHERE: 1\n            };\n        }\n    }]);\n\n    return Forces;\n}();\n\nexports.default = Forces;\n\n//# sourceURL=webpack://P/./src/P/forces/forces.js?");

/***/ }),

/***/ "./src/P/forces/index.js":
/*!*******************************!*\
  !*** ./src/P/forces/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Forces = undefined;\n\nvar _forces = __webpack_require__(/*! ./forces */ \"./src/P/forces/forces.js\");\n\nvar _forces2 = _interopRequireDefault(_forces);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Forces = _forces2.default;\n\n//# sourceURL=webpack://P/./src/P/forces/index.js?");

/***/ }),

/***/ "./src/P/math/graph.js":
/*!*****************************!*\
  !*** ./src/P/math/graph.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nfunction Graph(context, xmin, xmax, ymin, ymax, x0, y0, xwidth, ywidth) {\n\t// VARIABLE DECLARATIONS\n\t// canvas context on which to draw graph instance\n\tvar ctx = context;\n\t// location of origin (in pixels) in parent document\n\tvar x_orig;\n\tvar y_orig;\n\t// overall width and height of graph in pixels\n\tvar x_width;\n\tvar y_width;\n\t// min and max of x and y relative to origin (in pixels)\n\tvar x_min_rel;\n\tvar x_max_rel;\n\tvar y_min_rel;\n\tvar y_max_rel;\n\t// obvious\n\tvar x_tick_major;\n\tvar x_tick_minor;\n\tvar y_tick_major;\n\tvar y_tick_minor;\n\t// scaling used in displaying values on the axes\n\tvar x_displ_scal;\n\tvar y_displ_scal;\n\t// width and height of textbox used for displaying values on the axes\n\t// this should not have to be tampered with (I hope)\n\tvar tw = 15;\n\tvar th = 20;\n\t// declarations for quantities to be used later\n\tvar x_min;\n\tvar x_max;\n\tvar y_min;\n\tvar y_max;\n\tvar xx;\n\tvar yy;\n\tvar x_displ;\n\tvar y_displ;\n\tvar txpos;\n\tvar typos;\n\n\t// PARAMETER ASSIGNMENTS\n\t// assign parameter values based on specified arguments\n\tx_orig = x0;\n\ty_orig = y0;\n\tx_width = xwidth;\n\ty_width = ywidth;\n\t//\n\tx_displ_scal = (xmax - xmin) / xwidth;\n\ty_displ_scal = (ymax - ymin) / ywidth;\n\t//\n\tx_min_rel = xmin / x_displ_scal;\n\tx_max_rel = xmax / x_displ_scal;\n\ty_min_rel = ymin / y_displ_scal;\n\ty_max_rel = ymax / y_displ_scal;\n\t// convert to absolute coordinates\n\tx_min = x_min_rel + x_orig;\n\tx_max = x_max_rel + x_orig;\n\ty_min = y_orig - y_min_rel;\n\ty_max = y_orig - y_max_rel;\n\ttxpos = x_orig - tw;\n\ttypos = y_orig;\n\n\t// METHODS\n\t// DRAW GRID: draw major, minor lines and display values\n\tthis.drawgrid = function (xmajor, xminor, ymajor, yminor) {\n\t\tx_tick_major = xmajor / x_displ_scal;\n\t\tx_tick_minor = xminor / x_displ_scal;\n\t\ty_tick_major = ymajor / y_displ_scal;\n\t\ty_tick_minor = yminor / y_displ_scal;\n\t\t// draw major grid lines\n\t\tctx.strokeStyle = '#999999';\n\t\tctx.lineWidth = 1;\n\t\tctx.beginPath();\n\t\tyy = y_max;\n\t\tdo {\n\t\t\tctx.moveTo(x_min, yy);\n\t\t\tctx.lineTo(x_max, yy);\n\t\t\tyy += y_tick_major;\n\t\t} while (yy <= y_min);\n\t\txx = x_min;\n\t\tdo {\n\t\t\tctx.moveTo(xx, y_min);\n\t\t\tctx.lineTo(xx, y_max);\n\t\t\txx += x_tick_major;\n\t\t} while (xx <= x_max);\n\t\tctx.stroke();\n\t\t// draw minor grid lines\n\t\tctx.strokeStyle = '#cccccc';\n\t\tctx.lineWidth = 1;\n\t\tctx.beginPath();\n\t\tyy = y_max;\n\t\tdo {\n\t\t\tctx.moveTo(x_min, yy);\n\t\t\tctx.lineTo(x_max, yy);\n\t\t\tyy += y_tick_minor;\n\t\t} while (yy <= y_min);\n\t\txx = x_min;\n\t\tdo {\n\t\t\tctx.moveTo(xx, y_min);\n\t\t\tctx.lineTo(xx, y_max);\n\t\t\txx += x_tick_minor;\n\t\t} while (xx <= x_max);\n\t\tctx.stroke();\n\t\t//display values\n\t\tctx.font = \"10pt Arial\";\n\t\tctx.fillStyle = '#000000';\n\t\tctx.textAlign = \"right\";\n\t\tctx.textBaseline = \"top\";\n\t\tyy = y_max;\n\t\tdo {\n\t\t\ty_displ = (y_orig - yy) * y_displ_scal;\n\t\t\tctx.fillText(y_displ, txpos + 5, yy - th / 2);\n\t\t\tyy += y_tick_major;\n\t\t} while (yy <= y_min);\n\t\tctx.textAlign = \"left\";\n\t\tctx.textBaseline = \"top\";\n\t\txx = x_min;\n\t\tdo {\n\t\t\tx_displ = (xx - x_orig) * x_displ_scal;\n\t\t\tctx.fillText(x_displ, xx - tw + 10, typos + 5);\n\t\t\txx += x_tick_major;\n\t\t} while (xx <= x_max);\n\t};\n\n\t// DRAW AXES: draw axes and labels\n\tthis.drawaxes = function (xlabel, ylabel) {\n\t\tif (typeof xlabel === 'undefined') xlabel = 'x';\n\t\tif (typeof ylabel === 'undefined') ylabel = 'y';\n\t\tctx.strokeStyle = '#000000';\n\t\tctx.lineWidth = 2;\n\t\tctx.beginPath();\n\t\tctx.moveTo(x_min, y_orig);\n\t\tctx.lineTo(x_max, y_orig);\n\t\tctx.moveTo(x_orig, y_min);\n\t\tctx.lineTo(x_orig, y_max);\n\t\tctx.stroke();\n\t\t//axis labels\n\t\tctx.font = \"12pt Arial\";\n\t\tctx.fillStyle = '#000000';\n\t\tctx.textAlign = \"left\";\n\t\tctx.textBaseline = \"top\";\n\t\tctx.fillText(xlabel, x_max + 0.75 * tw, typos - th / 2);\n\t\tctx.fillText(ylabel, txpos + tw / 2 + 5, y_max - 1.5 * th);\n\t};\n\n\t// PLOT DATA: plot data\n\tthis.plot = function (xArr, yArr, pColor, pDots, pLine) {\n\t\t// the last three arguments have default values\n\t\tif (typeof pColor === 'undefined') pColor = '#0000ff';\n\t\tif (typeof pDots === 'undefined') pDots = true;\n\t\tif (typeof pLine === 'undefined') pLine = true;\n\t\tvar xpos = x_orig + xArr[0] / x_displ_scal;\n\t\tvar ypos = y_orig - yArr[0] / y_displ_scal;\n\t\tctx.strokeStyle = pColor;\n\t\tctx.lineWidth = 1;\n\t\tctx.beginPath();\n\t\tctx.moveTo(xpos, ypos);\n\t\tctx.arc(xpos, ypos, 1, 0, 2 * Math.PI, true);\n\t\tfor (var i = 1; i < xArr.length; i++) {\n\t\t\txpos = x_orig + xArr[i] / x_displ_scal;\n\t\t\typos = y_orig - yArr[i] / y_displ_scal;\n\t\t\tif (pLine) {\n\t\t\t\tctx.lineTo(xpos, ypos);\n\t\t\t} else {\n\t\t\t\tctx.moveTo(xpos, ypos);\n\t\t\t}\n\t\t\tif (pDots) {\n\t\t\t\tctx.arc(xpos, ypos, 1, 0, 2 * Math.PI, true);\n\t\t\t}\n\t\t}\n\t\tctx.stroke();\n\t};\n}\n\nexports.default = Graph;\n\n//# sourceURL=webpack://P/./src/P/math/graph.js?");

/***/ }),

/***/ "./src/P/math/index.js":
/*!*****************************!*\
  !*** ./src/P/math/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Vector = exports.Graph = undefined;\n\nvar _graph = __webpack_require__(/*! ./graph */ \"./src/P/math/graph.js\");\n\nvar _graph2 = _interopRequireDefault(_graph);\n\nvar _vector = __webpack_require__(/*! ./vector */ \"./src/P/math/vector.js\");\n\nvar _vector2 = _interopRequireDefault(_vector);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Graph = _graph2.default;\nexports.Vector = _vector2.default;\n\n//# sourceURL=webpack://P/./src/P/math/index.js?");

/***/ }),

/***/ "./src/P/math/vector.js":
/*!******************************!*\
  !*** ./src/P/math/vector.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Vector = function () {\n    _createClass(Vector, null, [{\n        key: \"distance\",\n        value: function distance(v1, v2) {\n            return v1.subtract(v2).length();\n        }\n    }, {\n        key: \"angleBetween\",\n        value: function angleBetween(v1, v2) {\n            return Math.acos(v1.dotProduct(v2) / (v1.length() * v2.length()));\n        }\n    }, {\n        key: \"vector\",\n        value: function vector(_ref) {\n            var mag = _ref.mag,\n                angle = _ref.angle,\n                _ref$clockwise = _ref.clockwise,\n                clockwise = _ref$clockwise === undefined ? true : _ref$clockwise;\n\n            var vec = new Vector(0, 0);\n            vec.x = mag * Math.cos(angle);\n            vec.y = mag * Math.sin(angle);\n\n            if (!clockwise) {\n                vec.y *= -1;\n            }\n\n            return vec;\n        }\n    }, {\n        key: \"components\",\n        value: function components(vector) {\n            return {\n                x: new Vector(vector.x, 0),\n                y: new Vector(0, vector.y)\n            };\n        }\n    }]);\n\n    function Vector(x, y) {\n        _classCallCheck(this, Vector);\n\n        this.x = x;\n        this.y = y;\n    }\n\n    _createClass(Vector, [{\n        key: \"set\",\n        value: function set(x, y) {\n            this.x = !isNaN(x) && x;\n            this.y = !isNaN(y) && y;\n\n            return this;\n        }\n    }, {\n        key: \"lengthSquared\",\n        value: function lengthSquared() {\n            return this.x * this.x + this.y * this.y;\n        }\n    }, {\n        key: \"length\",\n        value: function length() {\n            return Math.sqrt(this.lengthSquared());\n        }\n    }, {\n        key: \"clone\",\n        value: function clone() {\n            return new Vector(this.x, this.y);\n        }\n    }, {\n        key: \"negate\",\n        value: function negate() {\n            this.x = -this.x;\n            this.y = -this.y;\n\n            return this;\n        }\n    }, {\n        key: \"normalize\",\n        value: function normalize() {\n            var length = this.length();\n            if (length > 0) {\n                this.x /= length;\n                this.y /= length;\n            }\n            return this.length();\n        }\n    }, {\n        key: \"add\",\n        value: function add(vec) {\n            // doesn't change the existing vector, returns sum of two vectors\n            return new Vector(this.x + vec.x, this.y + vec.y);\n        }\n    }, {\n        key: \"incrementBy\",\n        value: function incrementBy(vec) {\n            this.x += vec.x;\n            this.y += vec.y;\n\n            return this;\n        }\n    }, {\n        key: \"subtract\",\n        value: function subtract(vec) {\n            // returns a new vector which is the difference between this and vec.\n            return new Vector(this.x - vec.x, this.y - vec.y);\n        }\n    }, {\n        key: \"decrementBy\",\n        value: function decrementBy(vec) {\n            this.x -= vec.x;\n            this.y -= vec.y;\n\n            return this;\n        }\n    }, {\n        key: \"scale\",\n        value: function scale(k) {\n            this.x *= k;\n            this.y *= k;\n\n            return this;\n        }\n    }, {\n        key: \"projection\",\n        value: function projection(vec) {\n            var length = this.length();\n            var lengthVec = vec.length();\n            var proj = void 0;\n            if (length == 0 || lengthVec == 0) {\n                proj = 0;\n            } else {\n                proj = (this.x * vec.x + this.y * vec.y) / lengthVec;\n            }\n\n            return proj;\n        }\n    }, {\n        key: \"unit\",\n        value: function unit() {\n            var length = this.length();\n            if (length > 0) {\n                return new Vector(this.x / length, this.y / length);\n            } else {\n                return new Vector(0, 0);\n            }\n        }\n    }, {\n        key: \"addScaled\",\n        value: function addScaled(vec, scale) {\n            return this.add(vec.clone().scale(scale));\n        }\n    }, {\n        key: \"dotProduct\",\n        value: function dotProduct(vec) {\n            // also called scalar product\n            return this.x * vec.x + this.y * vec.y;\n        }\n    }, {\n        key: \"perp\",\n        value: function perp(coeff) {\n            var anticlockwise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n            var length = this.length();\n            var vec = new Vector(this.y, -this.x);\n            if (length > 0) {\n                if (anticlockwise) {\n                    // anticlockwise with respect to canvas coordinate system\n                    vec.scale(coeff / length);\n                } else {\n                    vec.scale(-coeff / length);\n                }\n            } else {\n                vec = new Vector(0, 0);\n            }\n            return vec;\n        }\n    }, {\n        key: \"parallel\",\n        value: function parallel(coeff) {\n            var positive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n            var length = this.length();\n            var vec = new Vector(this.x, this.y);\n            if (length > 0) {\n                if (positive) {\n                    vec.scale(coeff / length);\n                } else {\n                    vec.scale(-coeff / length);\n                }\n            } else {\n                vec = new Vector(0, 0);\n            }\n        }\n    }, {\n        key: \"project\",\n        value: function project(vec) {\n            return vec.parallel(this.projection(vec));\n        }\n    }]);\n\n    return Vector;\n}();\n\nexports.default = Vector;\n\n//# sourceURL=webpack://P/./src/P/math/vector.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Core = exports.CONSTANTS = exports.Forces = exports.Wall = exports.Wheel = exports.Box = exports.Ball = exports.Particle = exports.Vector = undefined;\n\nvar _constants = __webpack_require__(/*! ./P/constants */ \"./src/P/constants.js\");\n\nvar CONSTANTS = _interopRequireWildcard(_constants);\n\nvar _core = __webpack_require__(/*! ./P/core */ \"./src/P/core.js\");\n\nvar _core2 = _interopRequireDefault(_core);\n\nvar _math = __webpack_require__(/*! ./P/math */ \"./src/P/math/index.js\");\n\nvar _entities = __webpack_require__(/*! ./P/entities */ \"./src/P/entities/index.js\");\n\nvar _forces = __webpack_require__(/*! ./P/forces */ \"./src/P/forces/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nexports.Vector = _math.Vector;\nexports.Particle = _entities.Particle;\nexports.Ball = _entities.Ball;\nexports.Box = _entities.Box;\nexports.Wheel = _entities.Wheel;\nexports.Wall = _entities.Wall;\nexports.Forces = _forces.Forces;\nexports.CONSTANTS = CONSTANTS;\nexports.Core = _core2.default;\n\n//# sourceURL=webpack://P/./src/index.js?");

/***/ })

/******/ });
});