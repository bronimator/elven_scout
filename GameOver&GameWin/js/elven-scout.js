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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/*! exports provided: AI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AI", function() { return AI; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AI =
/*#__PURE__*/
function () {
  //Базовые класс, здесь хранится общий функционал. Расширяющий класс - Dummy, тупой ИИ
  function AI() {
    _classCallCheck(this, AI);

    this.body = null;
  }

  _createClass(AI, [{
    key: "control",
    value: function control(body) {
      this.body = body;
    }
  }, {
    key: "update",
    value: function update(time) {}
  }]);

  return AI;
}();

/***/ }),

/***/ "./src/ais/dummy.js":
/*!**************************!*\
  !*** ./src/ais/dummy.js ***!
  \**************************/
/*! exports provided: Dummy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dummy", function() { return Dummy; });
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ai */ "./src/ai.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Dummy =
/*#__PURE__*/
function (_AI) {
  _inherits(Dummy, _AI);

  function Dummy() {
    var _this;

    _classCallCheck(this, Dummy);

    //Здесь хранятся все параметры, например, какие задачи у персонажа, его память, что делает прямо сейчас и т.д.
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dummy).call(this));
    _this.duration = 1000; //Меняет направление каждые 1000 мс

    _this.direction = "down";
    _this.lastTime = 0; //Когда в последний раз менял направление

    return _this;
  }

  _createClass(Dummy, [{
    key: "changeDirection",
    value: function changeDirection() {
      //Один из блоков принятия решений
      this.direction = "down,up,left,right".split(',')[Math.floor(Math.random() * 4)];
    }
  }, {
    key: "update",
    value: function update(time) {
      if (time - this.lastTime > this.duration) {
        this.changeDirection();
        this.lastTime = time;
      }

      this.body.walk(this.direction);

      _get(_getPrototypeOf(Dummy.prototype), "update", this).call(this, time);
    }
  }]);

  return Dummy;
}(_ai__WEBPACK_IMPORTED_MODULE_0__["AI"]);

/***/ }),

/***/ "./src/ais/endScript.js":
/*!******************************!*\
  !*** ./src/ais/endScript.js ***!
  \******************************/
/*! exports provided: EndScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndScript", function() { return EndScript; });
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ai */ "./src/ai.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var EndScript =
/*#__PURE__*/
function (_AI) {
  _inherits(EndScript, _AI);

  function EndScript() {
    var _this;

    _classCallCheck(this, EndScript);

    //Здесь хранятся все параметры, например, какие задачи у персонажа, его память, что делает прямо сейчас и т.д.
    _this = _possibleConstructorReturn(this, _getPrototypeOf(EndScript).call(this));
    _this.direction = 'left';
    _this.eventTime = 1500;
    _this.lastTime = 0;
    _this.eventStart = false;
    return _this;
  }

  _createClass(EndScript, [{
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
      }

      this.eventTime -= time - this.lastTime;

      if (!this.eventStart) {
        //Если событие ешё не началось
        if (this.eventTime < 0) {
          this.eventStart = true; //Врубаем событие

          this.body.hit(this.direction); //Событие - орк бьёт
        }

        this.body.walk(this.direction);
      } else {
        this.body.stand(this.direction);
      }

      this.lastTime = time;

      _get(_getPrototypeOf(EndScript.prototype), "update", this).call(this, time);
    }
  }]);

  return EndScript;
}(_ai__WEBPACK_IMPORTED_MODULE_0__["AI"]);

/***/ }),

/***/ "./src/ais/isAgressive.js":
/*!********************************!*\
  !*** ./src/ais/isAgressive.js ***!
  \********************************/
/*! exports provided: isAgressive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAgressive", function() { return isAgressive; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var isAgressive =
/*#__PURE__*/
function () {
  function isAgressive() {
    _classCallCheck(this, isAgressive);
  }

  _createClass(isAgressive, null, [{
    key: "becomeAgressive",
    value: function becomeAgressive() {
      this.agressive = true;
    }
  }, {
    key: "becomePeaceful",
    value: function becomePeaceful() {
      this.agressive = false;
    }
  }, {
    key: "isOrcAgressive",
    value: function isOrcAgressive() {
      return this.agressive;
    }
  }]);

  return isAgressive;
}();

/***/ }),

/***/ "./src/ais/peaceful.js":
/*!*****************************!*\
  !*** ./src/ais/peaceful.js ***!
  \*****************************/
/*! exports provided: Peaceful */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Peaceful", function() { return Peaceful; });
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ai */ "./src/ai.js");
/* harmony import */ var _isAgressive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isAgressive */ "./src/ais/isAgressive.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Peaceful =
/*#__PURE__*/
function (_AI) {
  _inherits(Peaceful, _AI);

  function Peaceful(player) {
    var _this;

    _classCallCheck(this, Peaceful);

    //Здесь хранятся все параметры, например, какие задачи у персонажа, его память, что делает прямо сейчас и т.д.
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Peaceful).call(this));
    _this.duration = 1050; //Меняет направление каждые 1000 мс

    _this.direction = "left";
    _this.lastTimeDumb = 0; //Когда в последний раз менял направление

    _this.lastTime = 0;
    _this.player = player; //Передаём игрока, чтобы орк мог следить за ним и атаковать его

    _this.stuck = false; //Если true, орк уперся в стену

    _this.changeWayInit = 500; //Если уперся в препятствие, это время он двигается в любом другом направлении в надежде обойти препятствие

    _this.changeWay = _this.changeWayInit;
    _this.oldX = 0; //В эти переменные будем писать старые координаты. Если новые координаты равны старым, значит орк уперся в препятствие

    _this.oldY = 0;
    _this.lastTimeAgressive = 0;
    _this.durationAgressive = 500; //Насколько часто меняют направление агрессивные орки

    _this.timeOfMarch = 4560; //Когда орк только появился, это время он просто движется в одном направлении. После - начинает действовать самостоятельно

    return _this;
  }

  _createClass(Peaceful, [{
    key: "changeDirection",
    value: function changeDirection() {
      //Один из блоков принятия решений
      this.direction = "up,left".split(',')[Math.floor(Math.random() * 2)]; // this.direction = "down,up,left,right".split(',')[Math.floor(Math.random()*4)];
      // //Уменьшим вероятность перемещения орка вправо или вниз
      // if(this.direction == 'down'){
      //     if(Math.random()>0.9){
      //         this.changeDirection();
      //     }
      // }
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
      }

      if (this.timeOfMarch > 0) {
        //Орк ещё марширует, т.е. заходит на локацию
        this.timeOfMarch -= time - this.lastTime;
      } else if (this.stuck) {
        //Если орк застрял, дальнейших проверок else if не будет
        this.changeWay -= time - this.lastTime;

        if (this.changeWay < 0) {
          this.changeWay = this.changeWayInit;
          this.stuck = false;
        }
      } else if (_isAgressive__WEBPACK_IMPORTED_MODULE_1__["isAgressive"].isOrcAgressive()) {
        //Проверка орка на агрессию
        this.agressiveBehaviour(time);
        this.isStuck();
      } else {
        this.dumbBehaviour(time);
        this.isStuck();
      }

      this.lastTime = time;
      this.body.walk(this.direction);

      _get(_getPrototypeOf(Peaceful.prototype), "update", this).call(this, time);
    }
  }, {
    key: "dumbBehaviour",
    value: function dumbBehaviour(time) {
      if (time - this.lastTimeDumb > this.duration) {
        this.changeDirection();
        this.lastTimeDumb = time;
      }
    }
  }, {
    key: "agressiveBehaviour",
    value: function agressiveBehaviour(time) {
      // if(this.body.gotPlayer){
      var correction = 10; //орк бьёт на расстоянии 5, ему не нужно быть вплотную к игроку (иначе орк бьёт только при столкновении с игроком, а орки избегают столкновений)

      if (this.body.x + this.body.collisionShape.x - correction < this.player.x + this.player.collisionShape.x + this.player.collisionShape.width && this.body.x + this.body.collisionShape.x + this.body.collisionShape.width + correction > this.player.x + this.player.collisionShape.x && this.body.y + this.body.collisionShape.y - correction < this.player.y + this.player.collisionShape.y + this.player.collisionShape.height && this.body.y + this.body.collisionShape.y + this.body.collisionShape.height + correction > this.player.y + this.player.collisionShape.y) this.attack(); // }

      if (time - this.lastTimeAgressive > this.durationAgressive) {
        this.changeAgressiveDirection();
        this.lastTimeAgressive = time;
      }
    }
  }, {
    key: "changeAgressiveDirection",
    value: function changeAgressiveDirection() {
      if (this.body.x >= this.player.x && this.body.y >= this.player.y) {
        if (Math.random() > 0.5) {
          this.direction = 'left';
        } else {
          this.direction = 'up';
        }
      }

      if (this.body.x < this.player.x && this.body.y >= this.player.y) {
        if (Math.random() > 0.5) {
          this.direction = 'right';
        } else {
          this.direction = 'up';
        }
      }

      if (this.body.x < this.player.x && this.body.y < this.player.y) {
        if (Math.random() > 0.5) {
          this.direction = 'right';
        } else {
          this.direction = 'down';
        }
      }

      if (this.body.x >= this.player.x && this.body.y < this.player.y) {
        if (Math.random() > 0.5) {
          this.direction = 'left';
        } else {
          this.direction = 'down';
        }
      }
    }
  }, {
    key: "isStuck",
    value: function isStuck() {
      //Проверка, возможно орк уперся в препятствие
      if (this.body.x == this.oldX && this.body.y == this.oldY) {
        this.stuck = true;

        if (this.direction == 'up' || this.direction == 'down') {
          if (Math.random() > 0.5) {
            this.direction = 'right';
          } else {
            this.direction = 'left';
          }

          return;
        }

        if (this.direction == 'right' || this.direction == 'left') {
          if (Math.random() > 0.5) {
            this.direction = 'up';
          } else {
            this.direction = 'down';
          }

          return;
        }
      }

      this.oldX = this.body.x;
      this.oldY = this.body.y;
    }
  }, {
    key: "attack",
    value: function attack() {
      this.body.hit(); // this.body.gotPlayer = false;

      this.player.getHit();
    }
  }]);

  return Peaceful;
}(_ai__WEBPACK_IMPORTED_MODULE_0__["AI"]);

/***/ }),

/***/ "./src/animation.js":
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Animation =
/*#__PURE__*/
function (_Sprite) {
  _inherits(Animation, _Sprite);

  function Animation(_ref) {
    var _this;

    var imageName = _ref.imageName,
        frames = _ref.frames,
        speed = _ref.speed,
        _ref$repeat = _ref.repeat,
        repeat = _ref$repeat === void 0 ? true : _ref$repeat,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? true : _ref$autorun,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this, {
      imageName: imageName,
      sourceX: frames[0].sx,
      sourceY: frames[0].sy,
      width: width,
      height: height
    }));
    _this.frames = frames;
    _this.speed = speed;
    _this.repeat = repeat;
    _this.running = autorun;
    _this.lastTime = 0; //время от последнего фрейма анимации

    _this.currentFrame = 0;
    _this.totalFrames = _this.frames.length;
    /*Для отслеживания последнего кадра. Например, после последнего кадра анимации стрельбы, персонаж перестаёт стрелять
    Эта переменная задается в классе Body. Например: this.view.onEnd = ()=>this.isShooting = false;*/

    _this.onEnd = null;
    return _this;
  }

  _createClass(Animation, [{
    key: "setFrame",
    value: function setFrame(index) {
      this.currentFrame = index;
      this.sourceX = this.frames[index].sx;
      this.sourceY = this.frames[index].sy;
    }
  }, {
    key: "run",
    value: function run() {
      //Старт анимации с самого начала
      if (!this.running) {
        this.setFrame(0);
        this.running = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
    }
  }, {
    key: "nextFrame",
    value: function nextFrame() {
      if (this.currentFrame + 1 == this.totalFrames) {
        //Если это последний кадр, то...
        if (this.onEnd) {
          //...если задана концовка, запускаем. Например: this.view.onEnd = ()=>this.isShooting = false;
          this.onEnd();
        }

        if (this.repeat) {
          //... если задан повтор, повторяем
          this.setFrame(0);
          return;
        }

        this.stop(); //... иначе - стоп анимация

        return;
      }

      this.setFrame(this.currentFrame + 1);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (!this.running) {
        return;
      }

      if (this.lastTime == 0) {
        //Эта проверка нужна только для первого вызова update(), чтобы инициализировать this.lastTime
        this.lastTime = time;
        return;
      }

      if (time - this.lastTime > this.speed) {
        //Разница по времени между прошлым и текущим кадром: (11-2)>10, (12-2)>10, (13-2)>10 - здесь прошло 10мс, а speed в этом примере как раз равен 10мс, значит меняем кадр
        this.nextFrame();
        this.lastTime = time;
      }
    }
  }]);

  return Animation;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]);

/***/ }),

/***/ "./src/body.js":
/*!*********************!*\
  !*** ./src/body.js ***!
  \*********************/
/*! exports provided: Body */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
/* harmony import */ var _character_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-sheet */ "./src/character-sheet.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Основа всех персонажей


var Body =
/*#__PURE__*/
function () {
  //Player -> Body ~ CharacterSheet -> SpriteSheet ~ Sprite
  function Body(_ref) {
    var _this = this;

    var imageName = _ref.imageName,
        speed = _ref.speed;

    _classCallCheck(this, Body);

    this.x = -100; //Положение объекта

    this.y = -100;
    this.speed = speed; //Скорость перемещения

    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]("left", 0); //Направление перемещения

    this.lastTime = 0; //Время последнего кадра

    this.animations = {}; //Контейнер для хранения анимаций {walk_down: .., walk_up: .. и т.д. }
    //Форма, которая будет использоваться для коллизии. Она начинается не от левого верхнего угла спрайта, а от x: 18, y: 15

    this.collisionShape = {
      x: 18,
      y: 15,
      width: 28,
      height: 49
    };
    this.isShooting = false;
    this.isHitting = false; //Загружаем необходмые анимации для данного персонажа

    var animationSheet = new _character_sheet__WEBPACK_IMPORTED_MODULE_1__["CharacterSheet"]({
      imageName: imageName
    });
    "walk_down,walk_up,walk_left,walk_right".split(",").forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name); //В итоге this.animations = {walk_down: .., walk_up: .. и т.д. }
    });
    "shoot_down,shoot_up,shoot_left,shoot_right".split(",").forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name, 50, false); //второй аргумен - скорость, false - отменить повтор
    });
    "cut_down,cut_up,cut_left,cut_right".split(",").forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name, 50, false); //второй аргумен - скорость, false - отменить повтор
    });
    ["death"].forEach(function (name) {
      _this.animations[name] = animationSheet.getAnimation(name, 50, false); //второй аргумен - скорость, false - отменить повтор
    });
    this.stand("left");
  }

  _createClass(Body, [{
    key: "shoot",
    value: function shoot(arrow) {
      var _this2 = this;

      if (!this.isShooting) {
        this.isShooting = true;
        this.view = this.animations['shoot_' + this.velocity.direction];

        this.view.onEnd = function () {
          _this2.isShooting = false;
          arrow.fly(_this2.x, _this2.y, _this2.velocity.direction);
        };

        this.view.run(); //Запустить анимацию
      }
    }
  }, {
    key: "hit",
    value: function hit() {
      var _this3 = this;

      if (!this.isHitting) {
        this.isHitting = true;
        this.view = this.animations['cut_' + this.velocity.direction];

        this.view.onEnd = function () {
          _this3.isHitting = false;
        };

        this.view.run(); //Запустить анимацию
      }
    }
  }, {
    key: "walk",
    value: function walk(direction) {
      if (this.isShooting || this.isHitting) return; //Во время стрельбы нельзя идти. НЕ ПОНИМАЮ КАК РАБОТАЕТ. ЕСЛИ УБРАТЬ ЭТУ СТРОКУ, ПЕРСОНАЖЕМ НЕЛЬЗЯ УПРАВЛЯТЬ

      this.velocity.setDirection(direction, this.speed);
      this.view = this.animations['walk_' + direction]; //Здесь хранится текущая анимация.   this.view хранит объект CharacterSheet

      this.view.run(); //Запустить анимацию
    }
  }, {
    key: "stand",
    value: function stand(direction) {
      //Стоять
      if (this.isShooting || this.isHitting) return; //НЕ ПОНИМАЮ КАК РАБОТАЕТ. ЕСЛИ УБРАТЬ ЭТУ СТРОКУ, ПЕРСОНАЖЕМ НЕЛЬЗЯ УПРАВЛЯТЬ

      this.velocity.setDirection(direction, 0);
      this.view = this.animations['walk_' + direction];
      this.view.stop();
    }
  }, {
    key: "death",
    value: function death() {
      this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"]("down", 0); //Останавливаем персонажа

      this.view = this.animations['death']; // this.view.stop();
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
        return;
      } //Перемещение персонажа
      // if(!this.isShooting){//Во время стрельбы и ударов нельзя идти
      //     this.velocity.move(this, time-this.lastTime);
      // }


      if (this.isShooting || this.isHitting) {
        //Во время стрельбы и ударов нельзя идти
        this.velocity.move(this, 0);
      } else {
        this.velocity.move(this, time - this.lastTime);
      }

      this.lastTime = time; //Координаты для анимации; this.view хранит объект CharacterSheet

      this.view.setXY(Math.trunc(this.x), Math.trunc(this.y)); //В переменной this.view хранится this.animations = {}. Метод trunc отбрасывет дробную часть

      this.view.update(time);
    }
  }]);

  return Body;
}();

/***/ }),

/***/ "./src/camera.js":
/*!***********************!*\
  !*** ./src/camera.js ***!
  \***********************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Camera =
/*#__PURE__*/
function () {
  function Camera() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 480 : _ref$height,
        _ref$limitX = _ref.limitX,
        limitX = _ref$limitX === void 0 ? 50000 : _ref$limitX,
        _ref$limitY = _ref.limitY,
        limitY = _ref$limitY === void 0 ? 50000 : _ref$limitY,
        _ref$scrollEdge = _ref.scrollEdge,
        scrollEdge = _ref$scrollEdge === void 0 ? 200 : _ref$scrollEdge;

    _classCallCheck(this, Camera);

    this.x = 0; //Положение камеры

    this.y = 0;
    this.width = width; //Размер камеры (у нас совпадает с размером экрана)

    this.height = height;
    this.limitX = limitX; //Предел перемещения камеры (в нашем случае это размер карты)

    this.limitY = limitY;
    this.watchObject = false; //Один из режимов карты для следования за объектом

    this.obj = null; //Указатель на объект, за которым камера следует

    this.scrollEdge = scrollEdge; //Камера начинает движение только если персонаж подходит к краю кадра. scrollEdge определяет отступ от края, когда камера начинает движение
  }

  _createClass(Camera, [{
    key: "watch",
    value: function watch(obj) {
      this.watchObject = true;
      this.obj = obj;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.watchObject) {
        if (this.obj.x > this.x + this.width - this.scrollEdge) //Если персонаж вышел за правый край кадра, двигаем камеру вслед за персонажем
          this.x = Math.min(this.limitX, this.obj.x - this.width + this.scrollEdge); //Двигаем камеру. Если камера достигла предела, то this.x = this.limitX

        if (this.obj.x < this.x + this.scrollEdge) this.x = Math.max(0, this.obj.x - this.scrollEdge);
        if (this.obj.y > this.y + this.height - this.scrollEdge) //Персонаж идёт вниз
          this.y = Math.min(this.limitY, this.obj.y - this.height + this.scrollEdge);
        if (this.obj.y < this.y + this.scrollEdge) //Персонаж идёт вверх
          this.y = Math.max(0, this.obj.y - this.scrollEdge);
      }
    }
  }, {
    key: "specialPosition",
    value: function specialPosition() {
      this.x = this.width;
      this.y = this.height;
    }
  }]);

  return Camera;
}();

/***/ }),

/***/ "./src/character-sheet.js":
/*!********************************!*\
  !*** ./src/character-sheet.js ***!
  \********************************/
/*! exports provided: CharacterSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterSheet", function() { return CharacterSheet; });
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite-sheet */ "./src/sprite-sheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var CharacterSheet =
/*#__PURE__*/
function (_SpriteSheet) {
  _inherits(CharacterSheet, _SpriteSheet);

  function CharacterSheet(_ref) {
    var _this;

    var imageName = _ref.imageName;

    _classCallCheck(this, CharacterSheet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterSheet).call(this, {
      imageName: imageName,
      imageWidth: 832,
      imageHeight: 1344
    }));
    _this.sequences = _this.getSequences();
    return _this;
  }

  _createClass(CharacterSheet, [{
    key: "getSequences",
    value: function getSequences() {
      var data = __webpack_require__(/*! ./maps/animations.json */ "./src/maps/animations.json");

      var sequences = {};
      data.layers.forEach(function (layer) {
        //Ширину брали по самой большой последовательности, поэтому на некоторых последовательностях поменьше в конце есть нули. Их убираем, фильтруем
        sequences[layer.name] = layer.data.filter(function (i) {
          return i > 0;
        });
      });
      return sequences;
    }
  }, {
    key: "getAnimation",
    value: function getAnimation(name) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 70;
      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var autorun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return _get(_getPrototypeOf(CharacterSheet.prototype), "getAnimation", this).call(this, this.sequences[name], speed, repeat, autorun);
    }
  }]);

  return CharacterSheet;
}(_sprite_sheet__WEBPACK_IMPORTED_MODULE_0__["SpriteSheet"]);

/***/ }),

/***/ "./src/collider.js":
/*!*************************!*\
  !*** ./src/collider.js ***!
  \*************************/
/*! exports provided: Collider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collider", function() { return Collider; });
/* harmony import */ var _remove_from_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-from-array */ "./src/remove-from-array.js");
/* harmony import */ var _ais_isAgressive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ais/isAgressive */ "./src/ais/isAgressive.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Collider =
/*#__PURE__*/
function () {
  function Collider() {
    _classCallCheck(this, Collider);

    this.staticShapes = []; //Массив статичных объектов. Мы используем следующие свойства объекта: {x, y, width, height}

    this.bodies = [];
  }

  _createClass(Collider, [{
    key: "addStaticShapes",
    value: function addStaticShapes(data) {
      var _this = this;

      data.layers.forEach(function (layer) {
        var _this$staticShapes;

        if (layer.type == 'objectgroup')
          /*objects это массив с набором объектов [{...},{...}, и т.д.]0
          Думаю, конструкция (...layer.objects) создает массив  this.staticShapes = [{...},{...}, и т.д.]*/
          (_this$staticShapes = _this.staticShapes).push.apply(_this$staticShapes, _toConsumableArray(layer.objects));
      }); //Добавим ограничение по краям карты. За карту нельзя выйти

      this.staticShapes.push({
        x: 0,
        y: 0,
        width: 1300,
        height: 1
      });
      this.staticShapes.push({
        x: 0,
        y: 0,
        width: 1,
        height: 1300
      }); // this.staticShapes.push({x:1280,y:0,width:1,height:1300});

      this.staticShapes.push({
        x: 1280,
        y: 0,
        width: 1300,
        height: 1
      });
    }
  }, {
    key: "addKinematicBody",
    value: function addKinematicBody(body) {
      this.bodies.push({
        x: body.x,
        //старые координаты персонажа
        y: body.y,
        obj: body //сохраняем персонажа с новыми координатами, будем сравнивать новые и старые координаты персонажа

      });
    }
  }, {
    key: "update",
    value: function update(time) {
      this.checkCollision(time); //рассчёт коллизии персонажей со статичными объектами и персонажей между собой
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(time) {
      var _this2 = this;

      var _loop = function _loop(i) {
        var body = _this2.bodies[i];
        var oldX = body.x;
        var oldY = body.y;
        var x = body.obj.x;
        var y = body.obj.y;

        if (x > oldX) {
          //moving right
          _this2.staticShapes.forEach(function (shape) {
            if ( //Если старые координаты находятся перед объектом***
            oldX - //координата персонажа
            1 + //Перемещение между кадрами занимает дробную часть пикселя, чтобы код работал округлим прошлую точку на 1 пиксель              
            body.obj.collisionShape.x + //координата формы коллизии внутри персонажа (началом отсчёта служит левый верхний угол персонажа)
            body.obj.collisionShape.width < shape.x && //***и новые координаты находятся после объекта, значит персонаж столкнулся с препятствием
            x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x && //Персонаж должен касаться препятствия
            y + body.obj.collisionShape.y < shape.y + shape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y) {
              //Берем ближайший объект, где остановим персонажа 
              x = Math.min(x + body.obj.collisionShape.x + body.obj.collisionShape.width, shape.x) //(наверное можно было просто оставить один shape.x)
              - body.obj.collisionShape.x - body.obj.collisionShape.width;

              _this2.checkInteractiveWithStatic(body, i); //Проверяем интерактив со статичными объектами (например после попадания в дерево, стрела не движется)

            }
          }); //Коллизия персонажей между собой


          for (var j = 0; j < _this2.bodies.length; j++) {
            var shape = _this2.bodies[j];

            if (body != shape) {
              //Если это не тот же самый объект
              if (oldX - 1 + body.obj.collisionShape.x + body.obj.collisionShape.width < shape.obj.x + shape.obj.collisionShape.x && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.obj.x + shape.obj.collisionShape.x && y + body.obj.collisionShape.y < shape.obj.y + shape.obj.collisionShape.y + shape.obj.collisionShape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.obj.y + shape.obj.collisionShape.y) {
                x = Math.min(x + body.obj.collisionShape.x + body.obj.collisionShape.width, shape.obj.x + shape.obj.collisionShape.x) - body.obj.collisionShape.x - body.obj.collisionShape.width;

                _this2.checkInteractive(body, shape, i, j); //Проверяем интерактив (например стрела бьёт орка, орк бьёт игрока и т.д.)

              }
            }
          }
        }

        if (x < oldX) {
          //moving left
          _this2.staticShapes.forEach(function (shape) {
            if (oldX + 1 + body.obj.collisionShape.x > shape.x + shape.width && x + body.obj.collisionShape.x < shape.x + shape.width && y + body.obj.collisionShape.y < shape.y + shape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y) {
              x = Math.max(x + body.obj.collisionShape.x, shape.x + shape.width) - body.obj.collisionShape.x;

              _this2.checkInteractiveWithStatic(body, i);
            }
          }); //Коллизия персонажей между собой


          for (var _j = 0; _j < _this2.bodies.length; _j++) {
            var _shape = _this2.bodies[_j];

            if (body != _shape) {
              //Если это не тот же самый объект
              if (oldX + 1 + body.obj.collisionShape.x > _shape.obj.x + _shape.obj.collisionShape.x + _shape.obj.collisionShape.width && x + body.obj.collisionShape.x < _shape.obj.x + _shape.obj.collisionShape.x + _shape.obj.collisionShape.width && y + body.obj.collisionShape.y < _shape.obj.y + _shape.obj.collisionShape.y + _shape.obj.collisionShape.height && y + body.obj.collisionShape.y + body.obj.collisionShape.height > _shape.obj.y + _shape.obj.collisionShape.y) {
                x = Math.max(x + body.obj.collisionShape.x, _shape.obj.x + _shape.obj.collisionShape.x + _shape.obj.collisionShape.width) - body.obj.collisionShape.x;

                _this2.checkInteractive(body, _shape, i, _j);
              }
            }
          }
        }

        if (y > oldY) {
          //moving down
          _this2.staticShapes.forEach(function (shape) {
            if (oldY - 1 + body.obj.collisionShape.y + body.obj.collisionShape.height < shape.y && y + body.obj.collisionShape.y + body.obj.collisionShape.height > shape.y && x + body.obj.collisionShape.x < shape.x + shape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x) {
              y = Math.min(y + body.obj.collisionShape.y + body.obj.collisionShape.height, shape.y) - body.obj.collisionShape.y - body.obj.collisionShape.height;

              _this2.checkInteractiveWithStatic(body, i);
            }
          }); //Коллизия персонажей между собой


          for (var _j2 = 0; _j2 < _this2.bodies.length; _j2++) {
            var _shape2 = _this2.bodies[_j2];

            if (body != _shape2) {
              //Если это не тот же самый объект
              if (oldY - 1 + body.obj.collisionShape.y + body.obj.collisionShape.height < _shape2.obj.y + _shape2.obj.collisionShape.y && y + body.obj.collisionShape.y + body.obj.collisionShape.height > _shape2.obj.y + _shape2.obj.collisionShape.y && x + body.obj.collisionShape.x < _shape2.obj.x + _shape2.obj.collisionShape.x + _shape2.obj.collisionShape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.height > _shape2.obj.x + _shape2.obj.collisionShape.x) {
                y = Math.min(y + body.obj.collisionShape.y + body.obj.collisionShape.height, _shape2.obj.y + _shape2.obj.collisionShape.y) - body.obj.collisionShape.y - body.obj.collisionShape.height;

                _this2.checkInteractive(body, _shape2, i, _j2);
              }
            }
          }
        }

        if (y < oldY) {
          //moving up
          _this2.staticShapes.forEach(function (shape) {
            if (oldY + 1 + body.obj.collisionShape.y > shape.y + shape.height && y + body.obj.collisionShape.y < shape.y + shape.height && x + body.obj.collisionShape.x < shape.x + shape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > shape.x) {
              y = Math.max(y + body.obj.collisionShape.y, shape.y + shape.height) - body.obj.collisionShape.y;

              _this2.checkInteractiveWithStatic(body, i);
            }
          });

          for (var _j3 = 0; _j3 < _this2.bodies.length; _j3++) {
            var _shape3 = _this2.bodies[_j3];

            if (body != _shape3) {
              //Если это не тот же самый объект
              if (oldY + 1 + body.obj.collisionShape.y > _shape3.obj.y + _shape3.obj.collisionShape.y + _shape3.obj.collisionShape.height && y + body.obj.collisionShape.y < _shape3.obj.y + _shape3.obj.collisionShape.y + _shape3.obj.collisionShape.height && x + body.obj.collisionShape.x < _shape3.obj.x + _shape3.obj.collisionShape.x + _shape3.obj.collisionShape.width && x + body.obj.collisionShape.x + body.obj.collisionShape.width > _shape3.obj.x + _shape3.obj.collisionShape.x) {
                y = Math.max(y + body.obj.collisionShape.y, _shape3.obj.y + _shape3.obj.collisionShape.y + _shape3.obj.collisionShape.height) - body.obj.collisionShape.y;

                _this2.checkInteractive(body, _shape3, i, _j3);
              }
            }
          }
        }

        body.x = x;
        body.y = y;
        body.obj.x = x;
        body.obj.y = y;
      };

      for (var i = 0; i < this.bodies.length; i++) {
        _loop(i);
      } //this.bodies cycle

    } //checkStatic

  }, {
    key: "checkInteractive",
    value: function checkInteractive(body, shape, indexOfBody, indexOfShape) {
      if (body.obj.hasOwnProperty('name') && shape.obj.hasOwnProperty('name')) {
        //Проверка на случай, если попадётся объект без названия
        if (body.obj.name == 'arrow' && shape.obj.name == 'orc') {
          //Если стрела коснулась орка
          //На самом деле вместо двух, можно сделать один вызов this.remove(this.bodies,indexOfBody,indexOfShape). Но мне так удобнее отлаживать
          this.bodies = _remove_from_array__WEBPACK_IMPORTED_MODULE_0__["RemoveFromArray"].remove(this.bodies, indexOfBody); //Стрела исчезает, удалить из коллайдера, удалить сам объект

          body.obj["delete"](); //Удаляем стрелу

          this.bodies = _remove_from_array__WEBPACK_IMPORTED_MODULE_0__["RemoveFromArray"].remove(this.bodies, indexOfShape); //Отключить его от коллайдера (удалить элемент по индексу из массива this.bodies)

          shape.obj.death(); //Орк погибает
        } // if(body.obj.name == 'player' && shape.obj.name == 'orc'){
        //     shape.obj.gotPlayer = true;
        // }

      }
    } //checkInteractive

  }, {
    key: "checkInteractiveWithStatic",
    value: function checkInteractiveWithStatic(body, indexOfBody) {
      //
      if (body.obj.hasOwnProperty('name')) {
        //Проверка на случай, если попадётся объект без названия
        if (body.obj.name == 'arrow') {
          body.obj.stop(); //Стрела перестаёт двигаться

          this.bodies = _remove_from_array__WEBPACK_IMPORTED_MODULE_0__["RemoveFromArray"].remove(this.bodies, indexOfBody); //удалить из коллайдера
        }
      }
    }
  }]);

  return Collider;
}();

/***/ }),

/***/ "./src/control-state.js":
/*!******************************!*\
  !*** ./src/control-state.js ***!
  \******************************/
/*! exports provided: ControlState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlState", function() { return ControlState; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ControlState =
/*#__PURE__*/
function () {
  function ControlState() {
    var _this = this;

    _classCallCheck(this, ControlState);

    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.fire = false; //Объект Map преобразует массив и в итоге: this.keyMap = {37 => "left", 39 => "right", 38 => "up", 40 => "down", 32 => "fire"}

    this.keyMap = new Map([[37, 'left'], [39, 'right'], [38, 'up'], [40, 'down'], [32, 'fire']]);
    document.addEventListener('keydown', function (event) {
      return _this.update(event, true);
    });
    document.addEventListener('keyup', function (event) {
      return _this.update(event, false);
    });
  }

  _createClass(ControlState, [{
    key: "update",
    value: function update(event, pressed) {
      if (this.keyMap.has(event.keyCode)) {
        event.preventDefault();
        event.stopPropagation();
        this[this.keyMap.get(event.keyCode)] = pressed; //this в данном случае это   ControlState = {up: true, down: false, …}
      }
    }
  }]);

  return ControlState;
}();

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/screen.js");
/* harmony import */ var _scene_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene/loading */ "./src/scene/loading.js");
/* harmony import */ var _scene_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene/menu */ "./src/scene/menu.js");
/* harmony import */ var _scene_game_level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene/game-level */ "./src/scene/game-level.js");
/* harmony import */ var _scene_game_over__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scene/game-over */ "./src/scene/game-over.js");
/* harmony import */ var _scene_game_win__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scene/game-win */ "./src/scene/game-win.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
/* harmony import */ var _control_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./control-state */ "./src/control-state.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 //потомок класса Scene

 //потомок класса Scene

 //потомок класса Scene

 //потомок класса Scene

 //потомок класса Scene



var Game =
/*#__PURE__*/
function () {
  //объект props не обязателен, если в конструктор не передавать никаких объектов, он возьмёт объект {} по умолчанию
  //Это {width = 640, height = 480}  деструктурирующее присваивание
  function Game() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 640 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 480 : _ref$height;

    _classCallCheck(this, Game);

    this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__["Screen"](width, height);
    this.screen.loadImages({
      orc: 'img/orc.png',
      player: 'img/player.png',
      title: 'img/title.jpg',
      tiles: 'img/tiles.png'
    });
    this.control = new _control_state__WEBPACK_IMPORTED_MODULE_7__["ControlState"]();
    this.scenes = {
      loading: new _scene_loading__WEBPACK_IMPORTED_MODULE_1__["Loading"](this),
      menu: new _scene_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](this),
      gameLevel: new _scene_game_level__WEBPACK_IMPORTED_MODULE_3__["GameLevel"](this),
      gameOver: new _scene_game_over__WEBPACK_IMPORTED_MODULE_4__["GameOver"](this),
      gameWin: new _scene_game_win__WEBPACK_IMPORTED_MODULE_5__["GameWin"](this)
    };
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  _createClass(Game, [{
    key: "changeScene",
    value: function changeScene(status) {
      switch (status) {
        case _scene__WEBPACK_IMPORTED_MODULE_6__["Scene"].LOADED:
          return this.scenes.menu;

        case _scene__WEBPACK_IMPORTED_MODULE_6__["Scene"].START_GAME:
          return this.scenes.gameLevel;

        case _scene__WEBPACK_IMPORTED_MODULE_6__["Scene"].GAME_OVER:
          return this.scenes.gameOver;

        case _scene__WEBPACK_IMPORTED_MODULE_6__["Scene"].GAME_WIN:
          return this.scenes.gameWin;

        default:
          return this.scenes.menu;
      }
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.status != _scene__WEBPACK_IMPORTED_MODULE_6__["Scene"].WORKING) {
        this.currentScene = this.changeScene(this.currentScene.status);
        this.currentScene.init();
      }

      this.currentScene.render(time);
      requestAnimationFrame(function (time) {
        return _this.frame(time);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      requestAnimationFrame(function (time) {
        return _this2.frame(time);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/image-loader.js":
/*!*****************************!*\
  !*** ./src/image-loader.js ***!
  \*****************************/
/*! exports provided: ImageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return ImageLoader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageLoader =
/*#__PURE__*/
function () {
  //- В конструктор передается объект с путями к файлам
  //- this.screen.loadImages({
  //-     orc: 'img/orc.png',
  //-     player: 'img/player.png',
  //-     title: 'img/title.jpg',
  //-     tiles: 'img/tiles.png'            
  //- });
  function ImageLoader(imageFiles) {
    _classCallCheck(this, ImageLoader);

    this.imageFiles = imageFiles;
    this.images = {};
  }

  _createClass(ImageLoader, [{
    key: "load",
    value: function load() {
      var promises = [];

      for (var name in this.imageFiles) {
        promises.push(this.loadImage(name, this.imageFiles[name]));
      }

      return Promise.all(promises); //Благодаря методу all удобно работать с массивом объектов Promise. Например: Promise.all([p1,p2]).then(()=>console.log('done'))
    }
  }, {
    key: "loadImage",
    value: function loadImage(name, src) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var image = new Image();
        _this.images[name] = image;

        image.onload = function () {
          return resolve(name);
        };

        image.src = src;
      });
    }
  }]);

  return ImageLoader;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


window.onload = function () {
  var elvenScout = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
  elvenScout.run();
}; // 5-16 --12

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/*! exports provided: Interface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interface", function() { return Interface; });
/* harmony import */ var _ais_isAgressive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ais/isAgressive */ "./src/ais/isAgressive.js");
/* harmony import */ var _text_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-info */ "./src/text-info.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Interface =
/*#__PURE__*/
function () {
  function Interface(game, waves) {
    _classCallCheck(this, Interface);

    this.game = game;
    this.waves = waves;
    this.textInfo = new _text_info__WEBPACK_IMPORTED_MODULE_1__["TextInfo"](game.screen);
    this.context = this.game.screen.context;
    this.lastTime = 0;
    this.player = game.currentScene.player;
    this.fightTextShowed = false; //надпись Fight покажется лишь один раз

    this.timeToSurvive = 20000; //Если это время выйдет в ноль, то игра закончится победой

    this.widthHealthLine = 150;
    this.endOpacity = 0; //При проигрыше экран дискретно, ступенчато, темнеет. 0 - абсолютно светло, 1 - абсолютно темно
  }

  _createClass(Interface, [{
    key: "update",
    value: function update(time) {
      if (this.lastTime === 0) {
        this.lastTime = time;
      }

      this.showHealthLine();

      if (this.player.health === 0) {
        this.endGame(time, 'lose'); //Проиграл
      }

      if (_ais_isAgressive__WEBPACK_IMPORTED_MODULE_0__["isAgressive"].isOrcAgressive()) {
        this.fightText(time);
      } else {
        this.showTimer(); //Обратный отсчёт

        this.timeToSurvive -= time - this.lastTime;

        if (this.timeToSurvive < 0) {
          this.timeToSurvive = 0;
          this.endGame(time, 'win');
        }
      }

      this.textInfo.update(time);
      this.lastTime = time;
    }
  }, {
    key: "fightText",
    value: function fightText(time) {
      if (!this.fightTextShowed) {
        this.fightTextShowed = true;
        this.textInfo.showText('FIGHT', time);
      }
    }
  }, {
    key: "showHealthLine",
    value: function showHealthLine() {
      this.context.strokeStyle = '#852727';
      this.context.fillStyle = '#b23d3d';
      this.context.lineWidth = 2;
      this.context.rect(20, 15, this.widthHealthLine, 10);
      this.context.fillRect(20, 15, this.widthHealthLine * (this.player.health / this.player.healthStart), 10); // this.context.fill();

      this.context.stroke();
    }
  }, {
    key: "showTimer",
    value: function showTimer() {
      this.game.screen.print(this.game.screen.width - 50, 30, //х, y
      Math.floor(this.timeToSurvive / 1000), //'text'
      22); //fontsize
    }
  }, {
    key: "endGame",
    value: function endGame(time, status) {
      //Постепенно появляется черная заставка и сообщаем сцене, что игра закончена
      this.endOpacity += (time - this.lastTime) / 1000;

      if (this.endOpacity > 1.5) {
        //1.5, а не 1, чтобы черная заставка ещё повисела немного
        this.changeScene(status);
      }

      var opacity = 0;
      if (this.endOpacity > 0.25) opacity = 0.25;
      if (this.endOpacity > 0.5) opacity = 0.5;
      if (this.endOpacity > 0.75) opacity = 0.75;
      if (this.endOpacity > 1) opacity = 1;
      this.context.fillStyle = 'rgb(0,0,0,' + opacity + ')';
      this.context.fillRect(0, 0, this.game.screen.width, this.game.screen.height);
    }
  }, {
    key: "changeScene",
    value: function changeScene(status) {
      switch (status) {
        case 'lose':
          return this.game.currentScene.gameOverTrigger = true;

        case 'win':
          return this.game.currentScene.winTrigger = true;
      }
    }
  }]);

  return Interface;
}();

/***/ }),

/***/ "./src/maps/animations.json":
/*!**********************************!*\
  !*** ./src/maps/animations.json ***!
  \**********************************/
/*! exports provided: height, layers, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"height\":1,\"layers\":[{\"data\":[1,2,3,4,5,6,7,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"spell_up\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[15,16,17,18,19,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"spell_left\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[27,28,29,30,31,32,33,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"spell_down\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[40,41,42,43,44,45,46,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"spell_right\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[53,54,55,56,57,58,59,60,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"stab_up\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[66,67,68,69,70,71,72,73,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"stab_left\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[79,80,81,82,83,84,85,86,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"stab_down\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[92,93,94,95,96,97,98,99,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"stab_right\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[105,106,107,108,109,110,111,112,113,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"walk_up\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[118,119,120,121,122,123,124,125,126,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"walk_left\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[131,132,133,134,135,136,137,138,139,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"walk_down\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[144,145,146,147,148,149,150,151,152,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"walk_right\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[157,158,159,160,161,162,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"cut_up\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[170,171,172,173,174,175,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"cut_left\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[183,184,185,186,187,188,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"cut_down\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[196,197,198,199,200,201,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"cut_right\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[209,210,211,212,213,214,215,216,217,218,219,220,221,0,0,0,0,0,0,0],\"height\":1,\"name\":\"shoot_up\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[222,223,224,225,226,227,228,229,230,231,232,233,234,0,0,0,0,0,0,0],\"height\":1,\"name\":\"shoot_left\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[235,236,237,238,239,240,241,242,243,244,245,246,247,0,0,0,0,0,0,0],\"height\":1,\"name\":\"shoot_down\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[248,249,250,251,252,253,254,255,256,257,258,259,260,0,0,0,0,0,0,0],\"height\":1,\"name\":\"shoot_right\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":false,\"width\":20,\"x\":0,\"y\":0},{\"data\":[261,262,263,264,265,266,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\"height\":1,\"name\":\"death\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0}],\"nextobjectid\":1,\"orientation\":\"orthogonal\",\"renderorder\":\"left-up\",\"tiledversion\":\"1.0.3\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"../../resources/playertiles.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1,\"width\":20}");

/***/ }),

/***/ "./src/maps/level1.json":
/*!******************************!*\
  !*** ./src/maps/level1.json ***!
  \******************************/
/*! exports provided: height, layers, nextobjectid, orientation, properties, propertytypes, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"height\":20,\"layers\":[{\"data\":[1,22,22,22,1,1,1,16,45,45,45,45,45,45,1,18,1,1,1,1,1,22,22,22,1,1,1,16,45,45,45,45,45,45,1,18,1,1,1,1,1,22,22,22,1,1,1,16,1,1,1,1,1,1,1,18,1,1,1,1,1,22,22,22,1,1,1,26,27,27,27,27,17,27,27,28,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,1,1,1,1,1,1,1,22,22,22,22,22,22,22,22,22,22,22,22,22,1,1,1,1,1,1,1,22,22,22,22,22,22,22,22,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,34,34,34,34,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,34,34,34,34,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,22,22,22,22,22,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],\"height\":20,\"name\":\"layer1\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"data\":[7,21,0,23,7,0,7,3,11,12,12,12,12,13,0,2,7,7,7,7,7,21,0,23,0,0,7,3,31,32,32,32,32,33,4,0,2,2,2,7,7,21,0,23,7,0,7,5,4,2,3,0,0,3,3,5,2,7,2,7,7,21,0,23,0,0,7,0,0,0,0,0,0,0,0,0,2,2,2,7,7,21,0,23,7,7,2,2,2,2,2,21,0,23,2,4,2,2,2,7,7,21,0,23,0,0,0,0,0,0,0,21,0,23,0,6,6,6,4,7,7,21,5,23,6,6,6,6,6,6,5,21,0,23,0,6,5,6,4,7,7,21,0,24,12,12,12,12,12,12,12,25,0,23,0,6,6,6,4,7,7,31,32,32,32,32,32,32,32,32,32,32,32,33,2,0,0,0,4,7,7,7,7,0,7,7,7,7,7,7,7,0,0,0,0,11,12,12,13,7,6,2,0,0,0,0,0,0,0,0,0,0,0,2,0,21,14,15,23,7,7,0,0,2,0,7,0,2,7,0,0,7,0,0,0,21,24,25,23,7,6,0,0,7,0,0,0,0,0,0,0,0,0,7,0,31,32,32,33,7,7,7,7,0,0,0,2,0,0,7,0,11,12,12,13,6,0,0,0,6,6,6,6,0,6,6,6,0,6,6,3,31,32,32,33,0,0,0,6,7,6,3,0,0,6,0,0,0,6,6,0,7,0,0,3,0,6,0,0,7,6,6,2,0,6,0,6,0,0,0,0,0,0,7,4,11,12,12,12,12,6,6,6,3,3,3,6,0,6,6,0,0,0,0,0,31,32,32,32,32,5,2,6,6,3,3,3,0,0,7,7,7,7,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],\"height\":20,\"name\":\"layer2\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":20,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"name\":\"hitboxes\",\"objects\":[{\"height\":1279,\"id\":1,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":61,\"x\":1,\"y\":1},{\"height\":59,\"id\":4,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":1276,\"x\":1,\"y\":1218},{\"height\":65,\"id\":5,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":127,\"x\":129,\"y\":1153},{\"height\":57,\"id\":6,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":117,\"x\":67,\"y\":1090},{\"height\":55,\"id\":7,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":52,\"x\":71,\"y\":1027},{\"height\":184,\"id\":8,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":59,\"x\":257,\"y\":899},{\"height\":54,\"id\":9,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":117,\"x\":323,\"y\":900},{\"height\":118,\"id\":11,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":122,\"x\":515,\"y\":899},{\"height\":63,\"id\":12,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":61,\"x\":577,\"y\":831},{\"height\":62,\"id\":13,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":63,\"x\":705,\"y\":961},{\"height\":60,\"id\":14,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":62,\"x\":834,\"y\":1026},{\"height\":58,\"id\":15,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":121,\"x\":515,\"y\":1090},{\"height\":59,\"id\":16,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":247,\"x\":579,\"y\":1154},{\"height\":120,\"id\":17,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":55,\"x\":387,\"y\":1027},{\"height\":120,\"id\":18,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":123,\"x\":66,\"y\":834},{\"height\":60,\"id\":19,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":59,\"x\":193,\"y\":771},{\"height\":63,\"id\":20,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":62,\"x\":321,\"y\":703},{\"height\":62,\"id\":21,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":57,\"x\":514,\"y\":706},{\"height\":58,\"id\":22,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":56,\"x\":707,\"y\":705},{\"height\":61,\"id\":23,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":58,\"x\":835,\"y\":769},{\"height\":58,\"id\":24,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":59,\"x\":960,\"y\":835},{\"height\":54,\"id\":25,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":50,\"x\":1031,\"y\":965},{\"height\":55,\"id\":26,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":56,\"x\":1152,\"y\":899},{\"height\":63,\"id\":27,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":58,\"x\":1218,\"y\":1151},{\"height\":1019,\"id\":28,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":57,\"x\":1219,\"y\":4},{\"height\":183,\"id\":29,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":183,\"x\":964,\"y\":324},{\"height\":64,\"id\":30,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":193,\"x\":1024,\"y\":-1},{\"height\":60,\"id\":31,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":59,\"x\":1089,\"y\":127},{\"height\":130,\"id\":32,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":11,\"x\":1016,\"y\":63},{\"height\":64,\"id\":33,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":381,\"x\":385,\"y\":192},{\"height\":62,\"id\":34,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":186,\"x\":833,\"y\":190},{\"height\":188,\"id\":35,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":64,\"x\":384,\"y\":1},{\"height\":61,\"id\":36,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":120,\"x\":259,\"y\":257},{\"height\":61,\"id\":37,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":61,\"x\":255,\"y\":129},{\"height\":60,\"id\":38,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":58,\"x\":259,\"y\":2},{\"height\":56,\"id\":39,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":371,\"x\":262,\"y\":387},{\"height\":61,\"id\":40,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":125,\"x\":63,\"y\":577},{\"height\":65,\"id\":41,\"name\":\"\",\"rotation\":0,\"type\":\"\",\"visible\":true,\"width\":446,\"x\":257,\"y\":578}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0}],\"nextobjectid\":42,\"orientation\":\"orthogonal\",\"properties\":{\"name\":\"level1\"},\"propertytypes\":{\"name\":\"string\"},\"renderorder\":\"left-up\",\"tiledversion\":\"1.0.3\",\"tileheight\":64,\"tilesets\":[{\"firstgid\":1,\"source\":\"../../resources/tileset.tsx\"}],\"tilewidth\":64,\"type\":\"map\",\"version\":1,\"width\":20}");

/***/ }),

/***/ "./src/orc.js":
/*!********************!*\
  !*** ./src/orc.js ***!
  \********************/
/*! exports provided: Orc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orc", function() { return Orc; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
/* harmony import */ var _ais_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ais/dummy */ "./src/ais/dummy.js");
/* harmony import */ var _ais_endScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ais/endScript */ "./src/ais/endScript.js");
/* harmony import */ var _ais_peaceful__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ais/peaceful */ "./src/ais/peaceful.js");
/* harmony import */ var _ais_isAgressive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ais/isAgressive */ "./src/ais/isAgressive.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Orc =
/*#__PURE__*/
function (_Body) {
  _inherits(Orc, _Body);

  function Orc(player) {
    var _this;

    var aiType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'peaceful';

    _classCallCheck(this, Orc);

    //Передаём игрока, чтобы орк мог следить за ним и атаковать его 
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Orc).call(this, {
      imageName: "orc",
      speed: 80
    }));
    if (aiType == 'dummy') _this.ai = new _ais_dummy__WEBPACK_IMPORTED_MODULE_1__["Dummy"]();
    if (aiType == 'endScript') _this.ai = new _ais_endScript__WEBPACK_IMPORTED_MODULE_2__["EndScript"]();
    if (aiType == 'peaceful') _this.ai = new _ais_peaceful__WEBPACK_IMPORTED_MODULE_3__["Peaceful"](player);
    _this.name = 'orc'; //Для коллайдера, что опознать этот объект

    _this.ai.control(_assertThisInitialized(_this)); // this.gotPlayer = false;//Если орк возле игрока, то true


    return _this;
  }

  _createClass(Orc, [{
    key: "update",
    value: function update(time) {
      if (this.ai) {
        this.ai.update(time); //Если ИИ не отключен
      }

      _get(_getPrototypeOf(Orc.prototype), "update", this).call(this, time);
    }
  }, {
    key: "death",
    value: function death() {
      this.ai = null; //Отключаем ИИ

      _ais_isAgressive__WEBPACK_IMPORTED_MODULE_4__["isAgressive"].becomeAgressive();

      _get(_getPrototypeOf(Orc.prototype), "death", this).call(this);
    }
  }]);

  return Orc;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Player =
/*#__PURE__*/
function (_Body) {
  _inherits(Player, _Body);

  //Player -> Body ~ CharacterSheet -> SpriteSheet ~ Sprite
  function Player(control, game_level) {
    var _this;

    _classCallCheck(this, Player);

    //control - управление клавиатурой
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, {
      imageName: 'player',
      speed: 150
    }));
    _this.control = control;
    _this.game_level = game_level;
    _this.arrow = false; //Позволяем стрелять только если на руках есть стрела

    _this.timeArrow = 1000; // Константа, время между появлением следующей стрелы, чтобы стрелы не создавались как из пулемёта

    _this.timerForCreatingArrow = 0; //Таймер для стрел

    _this.lastTimeForArrow = 0;
    _this.name = 'player'; //Для коллайдера, что опознать этот объект

    _this.healthStart = 3; //Начальное количество жизней

    _this.health = _this.healthStart;
    _this.undead = 1000; //Константа времени бессмертия, после получения урона игрок бессмертен

    _this.timerUndead = -1;
    /*Таймер для обратного отсчёта. Если он равен диапазону от 0 до this.undead, значит идёт обратный отсчёт и игрок бессмертен
      Если -1, игрок может получить урон*/

    _this.lastTimeForUndead = 0;
    return _this;
  }

  _createClass(Player, [{
    key: "addArrow",
    value: function addArrow(arrow) {
      this.arrow = arrow;
    }
  }, {
    key: "getHit",
    value: function getHit() {
      //Игрок получил удар
      if (this.timerUndead === -1) {
        //Если игрок смертен
        if (this.health > 0) this.health -= 1;
        this.timerUndead = this.undead; //Делаем игрока бессмертным на время
      }
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTimeForArrow === 0) {
        this.lastTimeForArrow = time;
      }

      if (this.lastTimeForUndead === 0) {
        this.lastTimeForUndead = time;
      }

      if (this.control.fire) {
        if (this.timerForCreatingArrow === 0) {
          //Если стрелу можно создавать
          this.timerForCreatingArrow = this.timeArrow;
          this.game_level.shooting();
          if (this.arrow) this.shoot(this.arrow); //Использовать именно эту стрелу, т.к. персонаж может иметь разные стрелы
        }
      } else if (this.control.up) {
        this.walk("up");
      } else if (this.control.down) {
        this.walk("down");
      } else if (this.control.left) {
        this.walk("left");
      } else if (this.control.right) {
        this.walk("right");
      } else {
        this.stand(this.velocity.direction);
      }

      if (this.timerForCreatingArrow > 0) this.timerForCreatingArrow -= time - this.lastTimeForArrow;else this.timerForCreatingArrow = 0;
      this.lastTimeForArrow = time;

      if (this.timerUndead != -1) {
        //Игрок бессмертен, this.timerUndead > 0
        this.timerUndead -= time - this.lastTime;

        if (this.timerUndead < 0) {
          this.timerUndead = -1; //Игрок снова смертен
        }
      }

      this.lastTimeForUndead = time;

      _get(_getPrototypeOf(Player.prototype), "update", this).call(this, time);
    } //update

  }]);

  return Player;
}(_body__WEBPACK_IMPORTED_MODULE_0__["Body"]);

/***/ }),

/***/ "./src/projectile.js":
/*!***************************!*\
  !*** ./src/projectile.js ***!
  \***************************/
/*! exports provided: Projectile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projectile", function() { return Projectile; });
/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector */ "./src/vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Projectile =
/*#__PURE__*/
function () {
  //Его расширяет projectiles/arrow.js
  function Projectile(direction, speed, x, y) {
    _classCallCheck(this, Projectile);

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.direction = direction;
    this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](this.direction, speed);
    this.lastTime = 0;
    this.active = false; //Если стрела активна, она отображается через this.game.screen.drawSprite и летит в цель. А вообще стрела в невидимом состоянии всегда находится на экране

    this.collisionShape = {
      x: 27,
      y: 27,
      width: 10,
      height: 10
    }; //Нужно для коллайдера (расчёт столкновений). Размер спрайта 64х64

    this.deleted = false; //Родитель будет отслеживать эту переменную, если она true, значит родитель удалит этот объект
  }

  _createClass(Projectile, [{
    key: "fly",
    value: function fly(x, y, direction) {
      this.x = x;
      this.y = y;
      this.velocity.setDirection(direction, this.speed);
      this.active = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      //При попадании в статичное препятствие, projectile теряет скорость
      this.speed = 0;
      this.velocity = new _vector__WEBPACK_IMPORTED_MODULE_0__["Vector"](this.direction, this.speed);
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.deleted = true;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        //Инициализация  this.lastTime
        this.lastTime = time;
        return;
      }

      this.velocity.move(this, time - this.lastTime);
      this.view.setXY(Math.trunc(this.x), Math.trunc(this.y)); //На этом этапе пока не известно что это будет спрайт или анимация

      this.lastTime = time;
    }
  }]);

  return Projectile;
}();

/***/ }),

/***/ "./src/projectiles/arrow.js":
/*!**********************************!*\
  !*** ./src/projectiles/arrow.js ***!
  \**********************************/
/*! exports provided: Arrow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return Arrow; });
/* harmony import */ var _projectile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projectile */ "./src/projectile.js");
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprite-sheet */ "./src/sprite-sheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Arrow =
/*#__PURE__*/
function (_Projectile) {
  _inherits(Arrow, _Projectile);

  function Arrow(direction, speed, x, y) {
    var _this;

    _classCallCheck(this, Arrow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Arrow).call(this, direction, speed, x, y));
    _this.sprites = {};
    _this.name = 'arrow'; //Для коллайдера, что опознать этот объект

    var tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    });
    _this.sprites['left'] = tiles.getSprite(36);
    _this.sprites['right'] = tiles.getSprite(37);
    _this.sprites['down'] = tiles.getSprite(46);
    _this.sprites['up'] = tiles.getSprite(47);
    _this.view = _this.sprites[direction]; //Какой спрайт стрелы отобразить зависит от направления персонажа

    return _this;
  }

  _createClass(Arrow, [{
    key: "fly",
    value: function fly(x, y, direction) {
      _get(_getPrototypeOf(Arrow.prototype), "fly", this).call(this, x, y, direction);

      this.view = this.sprites[direction];
    }
  }]);

  return Arrow;
}(_projectile__WEBPACK_IMPORTED_MODULE_0__["Projectile"]);

/***/ }),

/***/ "./src/remove-from-array.js":
/*!**********************************!*\
  !*** ./src/remove-from-array.js ***!
  \**********************************/
/*! exports provided: RemoveFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveFromArray", function() { return RemoveFromArray; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RemoveFromArray =
/*#__PURE__*/
function () {
  function RemoveFromArray() {
    _classCallCheck(this, RemoveFromArray);
  }

  _createClass(RemoveFromArray, null, [{
    key: "remove",
    value: function remove(arr, indexes) {
      //Удалить элементы из массива по индексу
      //arguments - псевдо массив, в котором хранятся все аргументы, переданные в функцию
      //[].slice() - создает пустой массив

      /*arrayOfIndexes - массив, который содержит все аргументы (кроме первого) переданные в функцию
         Это массив индексов, которые нужно удалить из основного массива arr*/
      var arrayOfIndexes = [].slice.call(arguments, 1); //Вернуть отфильтрованный массив

      return arr.filter(function (item, index) {
        //Например arrayOfIndexes = [1], то есть нужно удалить один элемент по индексу 1
        //indexOf - возвращает индекс искомого элемента. Например: ['a','b'].indexOf('b') //-> 1
        //Каждый элемент массива arr сверяет свой индекс с индексами в arrayOfIndexes.
        //Если его индекса в arrayOfIndexes нет, то метод indexOf вернёт -1, значит будет true и элемент не будет удалён из массива
        return arrayOfIndexes.indexOf(index) == -1;
      });
    } //remove

  }]);

  return RemoveFromArray;
}();

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scene =
/*#__PURE__*/
function () {
  //Базовый класс всех сцен
  function Scene(game) {
    _classCallCheck(this, Scene);

    this.game = game;
    this.status = this.constructor.WORKING;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      //Для запуска и перезапуска сцены, чтобы вернуть параметры в певоначальное состояние
      this.status = this.constructor.WORKING;
    }
  }, {
    key: "finish",
    value: function finish(status) {
      //Метод для завершения сцены
      this.status = status;
    }
  }, {
    key: "render",
    value: function render(time) {//отрисовка для всех сцен (например счетчик fps)
    }
  }], [{
    key: "WORKING",
    get: function get() {
      return 'WORKING';
    }
  }, {
    key: "LOADED",
    get: function get() {
      return 'LOADED';
    }
  }, {
    key: "START_GAME",
    get: function get() {
      return 'START_GAME';
    }
  }, {
    key: "GAME_OVER",
    get: function get() {
      return 'GAME_OVER';
    }
  }, {
    key: "GAME_WIN",
    get: function get() {
      return 'GAME_WIN';
    }
  }, {
    key: "FINISHED",
    get: function get() {
      return 'FINISHED';
    }
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/scene/game-level.js":
/*!*********************************!*\
  !*** ./src/scene/game-level.js ***!
  \*********************************/
/*! exports provided: GameLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLevel", function() { return GameLevel; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprite-sheet */ "./src/sprite-sheet.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/player.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../camera */ "./src/camera.js");
/* harmony import */ var _collider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../collider */ "./src/collider.js");
/* harmony import */ var _projectiles_arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projectiles/arrow */ "./src/projectiles/arrow.js");
/* harmony import */ var _waves__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../waves */ "./src/waves.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../interface */ "./src/interface.js");
/* harmony import */ var _remove_from_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../remove-from-array */ "./src/remove-from-array.js");
/* harmony import */ var _ais_isAgressive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ais/isAgressive */ "./src/ais/isAgressive.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






 // import {TextInfo} from '../text-info';





var GameLevel =
/*#__PURE__*/
function (_Scene) {
  _inherits(GameLevel, _Scene);

  function GameLevel(game) {
    var _this;

    _classCallCheck(this, GameLevel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameLevel).call(this, game));
    _this.tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    }); // this.tree = this.tiles.getSprite(7);
    // this.tree.setXY(10,10);
    // this.orc = new Orc();
    // this.orc.x = 100;
    // this.orc.y = 100;

    return _this;
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);

      _ais_isAgressive__WEBPACK_IMPORTED_MODULE_9__["isAgressive"].becomePeaceful(); //Сделать орков мирными

      this.player = new _player__WEBPACK_IMPORTED_MODULE_2__["Player"](this.game.control, this);
      this.player.x = 990;
      this.player.y = 1040;
      this.collider = new _collider__WEBPACK_IMPORTED_MODULE_4__["Collider"](); //Учитывает взаимодействие между объектами, например, не даёт проходить объектам сквозь друг друга
      //Используем webpack поэтому загрузчик json файлов работает по умолчанию

      var mapData = __webpack_require__(/*! ../maps/level1.json */ "./src/maps/level1.json");

      this.map = this.game.screen.createMap('level1', mapData, this.tiles); //createMap возвращает объект TileMap

      this.mainCamera = new _camera__WEBPACK_IMPORTED_MODULE_3__["Camera"]({
        width: this.game.screen.width,
        height: this.game.screen.height,
        limitX: this.map.width - this.game.screen.width,
        limitY: this.map.height - this.game.screen.height
      });
      this.mainCamera.specialPosition(); //Загнать камеру в самый угол

      this.mainCamera.watch(this.player);
      this.game.screen.setCamera(this.mainCamera);
      this.collider.addStaticShapes(mapData);
      this.collider.addKinematicBody(this.player);
      this.orcArmy = []; //Массив орков, новые стрелы будут добавляться сюда, а метод render будет отрисовывать все объекты из этого массива

      this.waves = new _waves__WEBPACK_IMPORTED_MODULE_6__["Waves"](this.game); //Контролирует появление противников

      this.waves.init(); // this.textInfo = new TextInfo(this.game.screen);//Выскакивающие текстовые надписи, например "Wave#1"

      this["interface"] = new _interface__WEBPACK_IMPORTED_MODULE_7__["Interface"](this.game, this.waves); //Шкала здоровья, таймер в углу экрана

      this.projectiles = []; //Массив стрел, новые стрелы будут добавляться сюда, а метод render будет отрисовывать все объекты из этого массива

      this.gameOverTrigger = false; //Если interface сделает эту переменную true, переходим к проигрышной сцене

      this.winTrigger = false; //Если interface сделает эту переменную true, переходим к победной сцене
    }
  }, {
    key: "update",
    value: function update(time) {
      var _this2 = this;

      if (this.gameOverTrigger) {
        //Закончим игру
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].GAME_OVER);
      }

      if (this.winTrigger) {
        //Закончим игру
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].GAME_WIN);
      } // this.orc.update(time);


      this.player.update(time);

      if (this.projectiles.length > 0) {
        this.projectiles.forEach(function (arrow, index) {
          if (arrow.active) {
            //active становится true в методе Player -> Body.shoot()
            arrow.update(time);
          }

          if (arrow.deleted) {
            _this2.projectiles = _remove_from_array__WEBPACK_IMPORTED_MODULE_8__["RemoveFromArray"].remove(_this2.projectiles, index);
          }
        });
      }

      if (this.orcArmy.length > 0) {
        this.orcArmy.forEach(function (orc) {
          orc.update(time); // if(!this.orcAgressive){//Если орки не агрессивны, проверяем не спровоцированы ли они
          //     if(!orc.ai){//Если у кого-то из орков отключен ИИ, значит он убит
          //         this.orcAgressive = true;
          //     }
          // }
        });
      }

      this.collider.update(time);
      this.mainCamera.update(time);
    }
  }, {
    key: "render",
    value: function render(time) {
      var _this3 = this;

      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.drawSprite(this.map); // this.game.screen.drawSprite(this.tree);
      // this.game.screen.drawSprite(this.orc.view);

      if (this.orcArmy.length > 0) {
        this.orcArmy.forEach(function (orc) {
          _this3.game.screen.drawSprite(orc.view);
        });
      }

      this.game.screen.drawSprite(this.player.view);

      if (this.projectiles.length > 0) {
        //Отрисовка стрел
        this.projectiles.forEach(function (arrow) {
          if (arrow.active) {
            //active становится true в методе Player -> Body.shoot()
            _this3.game.screen.drawSprite(arrow.view);
          }
        });
      }

      this.waves.update(time);

      _get(_getPrototypeOf(GameLevel.prototype), "render", this).call(this, time);

      this["interface"].update(time);
    }
  }, {
    key: "shooting",
    value: function shooting() {
      //Стрельба игрока
      var arrow = new _projectiles_arrow__WEBPACK_IMPORTED_MODULE_5__["Arrow"]('down', 400, this.player.x, this.player.y);
      this.player.addArrow(arrow);
      this.projectiles.push(arrow); //Все объекты из этого массива будут отрисованы в методе render

      this.collider.addKinematicBody(arrow);
    }
  }]);

  return GameLevel;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scene/game-over.js":
/*!********************************!*\
  !*** ./src/scene/game-over.js ***!
  \********************************/
/*! exports provided: GameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOver", function() { return GameOver; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
/* harmony import */ var _orc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orc */ "./src/orc.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/player.js");
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sprite-sheet */ "./src/sprite-sheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var GameOver =
/*#__PURE__*/
function (_Scene) {
  _inherits(GameOver, _Scene);

  function GameOver(game) {
    _classCallCheck(this, GameOver);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameOver).call(this, game)); //Вызов родительского конструктора
  }

  _createClass(GameOver, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameOver.prototype), "init", this).call(this);

      this.loadedAt = 0;
      this.orc = new _orc__WEBPACK_IMPORTED_MODULE_1__["Orc"](null, 'endScript'); //(player, aiType = 'peaceful')

      this.orc.x = 420;
      this.orc.y = 200;
      this.scriptTime = 1700; //Время когда орк бьёт игрока

      this.scriptSpeedPlayer = -10; //Начальная скорость игрока
      // this.player = new Player(null,null);
      // this.player.stand('right');
      // this.player.x = 350;
      // this.player.y = 200;

      this.tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_3__["SpriteSheet"]({
        imageName: 'player',
        imageWidth: 640,
        imageHeight: 640
      });
      this.player = this.tiles.getSprite(31);
      this.playerCoord = {
        x: 270,
        y: 200
      };
      this.player.setXY(this.playerCoord.x, this.playerCoord.y);
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.loadedAt == 0) {
        this.loadedAt = time;
      }

      if (this.loadedAt != 0 && time - this.loadedAt > 500) {
        if (this.game.control.fire) {
          //При нажатии на "огонь" начать игру
          // this.finish(Scene.LOADED);
          this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].GAME_WIN);
        }
      }

      if (this.loadedAt != 0 && time - this.loadedAt > this.scriptTime) {
        this.player = this.tiles.getSprite(36);
        this.playerCoord.x -= 5;
        this.scriptSpeedPlayer += 0.5;
        this.playerCoord.y += this.scriptSpeedPlayer;
        this.player.setXY(this.playerCoord.x, this.playerCoord.y);
      }

      this.orc.update(time);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('black');
      this.game.screen.print(150, 320, 'ОРКИ БЕЗОБИДНЫ. НЕ ОБИЖАй СЛАБЫХ ОРКОВ', 15);
      this.game.screen.drawSprite(this.orc.view); // this.game.screen.drawSprite(this.player.view);

      this.game.screen.drawSprite(this.player);

      _get(_getPrototypeOf(GameOver.prototype), "render", this).call(this, time);
    }
  }]);

  return GameOver;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scene/game-win.js":
/*!*******************************!*\
  !*** ./src/scene/game-win.js ***!
  \*******************************/
/*! exports provided: GameWin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameWin", function() { return GameWin; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprite-sheet */ "./src/sprite-sheet.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var GameWin =
/*#__PURE__*/
function (_Scene) {
  _inherits(GameWin, _Scene);

  function GameWin(game) {
    var _this;

    _classCallCheck(this, GameWin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameWin).call(this, game)); //Вызов родительского конструктора

    _this.tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'player',
      imageWidth: 640,
      imageHeight: 640
    });
    _this.orcTiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'orc',
      imageWidth: 640,
      imageHeight: 640
    });
    return _this;
  }

  _createClass(GameWin, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameWin.prototype), "init", this).call(this);

      this.loadedAt = 0;
      this.player = this.tiles.getSprite(31);
      this.startPositionY = 200;
      this.playerCoord = {
        x: 300,
        y: this.startPositionY
      };
      this.player.setXY(this.playerCoord.x, this.playerCoord.y);
      this.startImpulse = -8; //стартовый импульс для подбрасывания игрока орками

      this.speedPlayer = this.startImpulse;
      this.orcs = [];

      for (var i = 0; i < 4; i++) {
        var x1 = 150 + i * 100;
        this.orcs.push({
          x: x1,
          y: 200,
          sprite: this.orcTiles.getSprite(31),
          speed: this.startImpulse
        });
      }

      this.orcs.forEach(function (orc) {
        orc.sprite.setXY(orc.x, orc.y);
      });
    }
  }, {
    key: "update",
    value: function update(time) {
      var _this2 = this;

      if (this.loadedAt == 0) {
        this.loadedAt = time;
      }

      if (this.loadedAt != 0 && time - this.loadedAt > 500) {
        if (this.game.control.fire) {
          //При нажатии на "огонь" начать игру
          // this.finish(Scene.LOADED);
          this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].START_GAME);
        }
      }

      this.speedPlayer += 0.5;
      this.playerCoord.y += this.speedPlayer;

      if (this.playerCoord.y > this.startPositionY) {
        this.playerCoord.y = this.startPositionY;
        this.speedPlayer = this.startImpulse + Math.random() - 0.5;
      }

      this.player.setXY(this.playerCoord.x, this.playerCoord.y);
      this.orcs.forEach(function (orc) {
        orc.speed += 0.5;
        orc.y += orc.speed;

        if (orc.y > _this2.startPositionY) {
          orc.y = _this2.startPositionY;
          orc.speed = _this2.startImpulse + Math.random() - 0.5;
        }

        orc.sprite.setXY(orc.x, orc.y);
      });
    }
  }, {
    key: "render",
    value: function render(time) {
      var _this3 = this;

      this.update(time);
      this.game.screen.fill('black');
      this.game.screen.print(240, 320, 'И НИКТО НЕ ПОСТРАДАЛ', 15);
      this.game.screen.drawSprite(this.player);
      this.orcs.forEach(function (orc) {
        _this3.game.screen.drawSprite(orc.sprite);
      });

      _get(_getPrototypeOf(GameWin.prototype), "render", this).call(this, time);
    }
  }]);

  return GameWin;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scene/loading.js":
/*!******************************!*\
  !*** ./src/scene/loading.js ***!
  \******************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Loading =
/*#__PURE__*/
function (_Scene) {
  _inherits(Loading, _Scene);

  function Loading(game) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this, game)); //Вызов родительского конструктора

    _this.loadedAt = 0; //Здесь запишется время, на котором все картинки загрузились

    return _this;
  }

  _createClass(Loading, [{
    key: "init",
    value: function init() {
      //Для запуска и перезапуска сцены, чтобы вернуть параметры в певоначальное состояние
      _get(_getPrototypeOf(Loading.prototype), "init", this).call(this);

      this.loadedAt = 0; //обнуляем
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.loadedAt == 0 && this.game.screen.isImagesLoaded == true) {
        //Если картинки загрузились и время загрузки ещё не фиксировалось...
        this.loadedAt = time; //..запишем время, на котором все картинки загрузились
      }

      if (this.loadedAt != 0 && time - this.loadedAt > 500) {
        //Выжидаем 500 мс
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].LOADED); //Сцена загружена
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill('#000000');
      this.game.screen.print(50, 70, 'Загрузка мигрирующих орков...');

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
    }
  }]);

  return Loading;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scene/menu.js":
/*!***************************!*\
  !*** ./src/scene/menu.js ***!
  \***************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Menu =
/*#__PURE__*/
function (_Scene) {
  _inherits(Menu, _Scene);

  function Menu(game) {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, game)); //Вызов родительского конструктора
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Menu.prototype), "init", this).call(this);

      this.loadedAt = 0; //В начале это время кнопка "огонь" не доступна, чтобы при переходе в меню по кнопке "огонь" игра внезапно не запустилась
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.loadedAt == 0) {
        this.loadedAt = time;
      }

      if (this.loadedAt != 0 && time - this.loadedAt > 500) {
        if (this.game.control.fire) {
          //При нажатии на "огонь" начать игру
          this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].GAME_OVER); // this.finish(Scene.START_GAME);
        }
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.drawImage(0, 0, 'title');
      this.game.screen.print(200, 390, 'НАЖМИТЕ ПРОБЕЛ', 25);
      this.game.screen.print(80, 470, 'УПРАВЛЕНИЕ СТРЕЛКАМИ. ДЛЯ СТРЕЛЬБЫ ИСПОЛЬЗУЙТЕ ПРОБЕЛ.', 15);

      _get(_getPrototypeOf(Menu.prototype), "render", this).call(this, time);
    }
  }]);

  return Menu;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/*! exports provided: Screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return Screen; });
/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-loader */ "./src/image-loader.js");
/* harmony import */ var _tile_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tile-map */ "./src/tile-map.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Screen =
/*#__PURE__*/
function () {
  function Screen(width, height) {
    _classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas(width, height);
    this.context = this.canvas.getContext('2d');
    this.images = {};
    this.isImagesLoaded = false;
    this.camera = null;
    this.isCameraSet = false;
    this.addStylesToCanvas();
  }

  _createClass(Screen, [{
    key: "addStylesToCanvas",
    value: function addStylesToCanvas() {
      this.canvas.style.display = 'block';
      this.canvas.style.position = 'absolute';
      this.canvas.style.left = '0';
      this.canvas.style.right = '0';
      this.canvas.style.top = '0';
      this.canvas.style.bottom = '0';
      this.canvas.style.margin = 'auto';
      document.body.style.background = 'black';
    }
  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.camera = camera;
      this.isCameraSet = true;
    }
  }, {
    key: "loadImages",
    value: function loadImages(imagesFiles) {
      var _this = this;

      var loader = new _image_loader__WEBPACK_IMPORTED_MODULE_0__["ImageLoader"](imagesFiles);
      loader.load().then(function (names) {
        //Object.assign копирует в первый объект свойства остальных объектов. В loader.images сейчас {orc: img, player: img, title: img, tiles: img}
        //img - это объект Image, в нём есть свойство src, в котором записан путь к картинке
        _this.images = Object.assign(_this.images, loader.images);
        _this.isImagesLoaded = true;
      });
    }
  }, {
    key: "createCanvas",
    value: function createCanvas(width, height) {
      var elements = document.getElementsByTagName('canvas');
      var canvas = elements[0] || document.createElement('canvas');
      document.body.appendChild(canvas);
      canvas.width = width;
      canvas.height = height;
      return canvas;
    } //На карте много объектов, для оптимизации делаем пререндер (заранее отрисовать карту и использовать как картинку)

  }, {
    key: "createMap",
    value: function createMap(name, mapData, tileset) {
      var _this2 = this;

      var mapImage = document.createElement('canvas');
      mapImage.width = mapData.width * mapData.tilewidth; //данные  mapData.width и mapData.tilewidth берутся из level1.json

      mapImage.height = mapData.height * mapData.tileheight;
      var mapContext = mapImage.getContext('2d');
      var hitboxes = [];
      var row, col;
      mapData.layers.forEach(function (layer) {
        //Все необходимые данные лежат в mapData.layers (level1.json)
        if (layer.type == "tilelayer") {
          //У слоев type == "tilelayer"
          row = 0;
          col = 0;
          layer.data.forEach(function (index) {
            if (index > 0) {
              //layer.data - это массив [7, 21, 0, 23, 7, 0 и т.д.]. Index = 0 значит, что ячейка пустая
              mapContext.drawImage(_this2.images[tileset.imageName], tileset.getSourceX(index), tileset.getSourceY(index), mapData.tilewidth, mapData.tileheight, col * mapData.tilewidth, row * mapData.tileheight, mapData.tilewidth, mapData.tileheight);
            }

            col++;

            if (col > mapData.width - 1) {
              //Если дошли до конца строки, переходим на новую строку
              col = 0;
              row++;
            }
          });
        }

        if (layer.type == "objectgroup") {
          //У объектов type == "tilelayer"
          hitboxes.push.apply(hitboxes, _toConsumableArray(layer.objects.map(function (obj) {
            return {
              x1: obj.x,
              x2: obj.x + obj.width,
              y1: obj.y,
              y2: obj.y + obj.height
            };
          })));
        }
      }); //mapData.layers.forEach

      this.images[name] = mapImage; //Добавить полученное изображение карты в загруженные изображения

      return new _tile_map__WEBPACK_IMPORTED_MODULE_1__["TileMap"]({
        //TileMap extends Sprite - карта представляет из себя один большой спрайт
        imageName: name,
        sourceX: 0,
        sourceY: 0,
        width: mapImage.width,
        height: mapImage.height,
        hitboxes: hitboxes
      });
    } //createMap

  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }, {
    key: "print",
    value: function print(x, y, text) {
      var fontSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 22;
      // this.context.shadowOffsetX = 4; //Не работает
      // this.context.shadowOffsetY = 4;
      // this.context.shadowBlur = 3;
      // this.contextshadowColor = 'black';
      this.context.fillStyle = '#FFFFFF';
      this.context.font = fontSize + 'px Arial';
      this.context.fillText(text, x, y);
    }
  }, {
    key: "drawImage",
    value: function drawImage(x, y, imageName) {
      this.context.drawImage(this.images[imageName], x, y);
    }
  }, {
    key: "drawSprite",
    value: function drawSprite(sprite) {
      this.context;
      var spriteX = sprite.x;
      var spriteY = sprite.y;

      if (this.isCameraSet) {
        spriteX -= this.camera.x;
        spriteY -= this.camera.y;
      } //Спрайты, которые не попадают в область видимости камеры, не отрисовываем


      if (spriteX >= this.width || spriteY >= this.height || spriteX + sprite.width <= 0 || spriteY + sprite.height <= 0) {
        return;
      } //Если спрайт лишь частично попадает в область видимости камеры, отрисовываем только видимую часть спрайта


      var sourceX = sprite.sourceX + Math.abs(Math.min(0, spriteX) //При выходе за левый край получается sprite.sourceX + |spriteX|
      );
      var sourceY = sprite.sourceY + Math.abs(Math.min(0, spriteY));
      ;
      var width = Math.min(this.width, //ширина экрана
      spriteX + sprite.width) - Math.max(0, spriteX);
      /*Если spriteX + sprite.width будет больше this.width (если спрайт выйдет за правый край), 
      ширина спрайта let width получится отрицательной. Отрицательная ширина захватывает изображение не вправо как обычно, а влево*/

      var height = Math.min(this.height, spriteY + sprite.height) - Math.max(0, spriteY);
      this.context.drawImage(this.images[sprite.imageName], sourceX, //Координаты спрайта на исходном изображении
      sourceY, width, //Размеры спрайта на исходном изображении
      height, Math.max(0, spriteX), //Рисование спрайта на холсте. Если задана камера, она повлияет на эти координаты
      Math.max(0, spriteY), width, //Размеры спрайта на холсте
      height);
    } //drawSprite

  }]);

  return Screen;
}();

/***/ }),

/***/ "./src/sprite-sheet.js":
/*!*****************************!*\
  !*** ./src/sprite-sheet.js ***!
  \*****************************/
/*! exports provided: SpriteSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteSheet", function() { return SpriteSheet; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/animation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SpriteSheet =
/*#__PURE__*/
function () {
  //Фабрика спрайтов. Чтобы вручную не создавать спрайты (объекты Sprite) и анимацию (Animation extends Sprite)
  function SpriteSheet(_ref) {
    var imageName = _ref.imageName,
        imageWidth = _ref.imageWidth,
        imageHeight = _ref.imageHeight,
        _ref$spriteWidth = _ref.spriteWidth,
        spriteWidth = _ref$spriteWidth === void 0 ? 64 : _ref$spriteWidth,
        _ref$spriteHeight = _ref.spriteHeight,
        spriteHeight = _ref$spriteHeight === void 0 ? 64 : _ref$spriteHeight;

    _classCallCheck(this, SpriteSheet);

    this.imageName = imageName;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  }

  _createClass(SpriteSheet, [{
    key: "getAnimation",
    value: function getAnimation(indexes, speed) {
      var _this = this;

      var repeat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var autorun = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return new _animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]({
        imageName: this.imageName,
        frames: indexes.map(function (index) {
          return {
            sx: _this.getSourceX(index),
            sy: _this.getSourceY(index)
          };
        }),
        //[1,2] => [{sx:this.getSourceX(1), sy:this.getSourceY(1)},  {sx:this.getSourceX(2), sy:this.getSourceY(2)}]  
        speed: speed,
        repeat: repeat,
        autorun: autorun,
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getSprite",
    value: function getSprite(index) {
      //Находим координаты спрайта по порядковому номеру
      return new _sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]({
        imageName: this.imageName,
        sourceX: this.getSourceX(index),
        sourceY: this.getSourceY(index),
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getSourceX",
    value: function getSourceX(index) {
      //Спрайты получаем по порядковому номеру. index будет начинаться с единицы, а внутри функции нумирация начинается с нуля, поэтому --index
      return --index * this.spriteWidth % this.imageWidth;
    }
  }, {
    key: "getSourceY",
    value: function getSourceY(index) {
      return Math.trunc(--index * this.spriteWidth / this.imageWidth) * this.spriteHeight; //Math.trunc - возвращает целую часть числа путём удаления всех дробных знаков
    }
  }]);

  return SpriteSheet;
}();

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite =
/*#__PURE__*/
function () {
  //Вручную спрайты через этот класс не создаются. С этим классом работает "фабрика" спрайтов sprite-sheet.js
  function Sprite(_ref) {
    var imageName = _ref.imageName,
        sourceX = _ref.sourceX,
        sourceY = _ref.sourceY,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Sprite);

    this.imageName = imageName;
    this.sourceX = sourceX; //Координаты нужного спрайта на исходной картинке

    this.sourceY = sourceY;
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
  }

  _createClass(Sprite, [{
    key: "setXY",
    value: function setXY(x, y) {
      this.x = x;
      this.y = y;
    }
  }]);

  return Sprite;
}();

/***/ }),

/***/ "./src/text-info.js":
/*!**************************!*\
  !*** ./src/text-info.js ***!
  \**************************/
/*! exports provided: TextInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInfo", function() { return TextInfo; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextInfo =
/*#__PURE__*/
function () {
  function TextInfo(screen) {
    _classCallCheck(this, TextInfo);

    this.x = 0;
    this.y = 0;
    this.screen = screen;
    this.showTextBoolean = false; //Показывать ли текст

    this.text = '';
    this.lastTime = 0;
    this.howLongToShow = 1000; //Сколько времени показывать текст

    this.timeToStop = 0; //Время когда нужно завершить показ

    this.fontSize = 0;
    this.startFontSize = 150;
  }

  _createClass(TextInfo, [{
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
      }

      if (this.showTextBoolean) {
        this.fontSize -= (time - this.lastTime) / 10;
        this.setXY();
        this.screen.print(this.x, this.y, this.text, this.fontSize);

        if (time > this.timeToStop) {
          this.showTextBoolean = false;
        }
      }

      this.lastTime = time;
    }
  }, {
    key: "showText",
    value: function showText(text, time) {
      this.text = text;
      this.showTextBoolean = true;
      this.timeToStop = time + this.howLongToShow;
      this.fontSize = this.startFontSize;
      this.setXY();
    }
  }, {
    key: "setXY",
    value: function setXY() {
      this.x = this.screen.width / 2 - this.fontSize * 1.5;
      this.y = this.screen.height / 2 + this.fontSize / 4.5;
    }
  }]);

  return TextInfo;
}();

/***/ }),

/***/ "./src/tile-map.js":
/*!*************************!*\
  !*** ./src/tile-map.js ***!
  \*************************/
/*! exports provided: TileMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMap", function() { return TileMap; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TileMap =
/*#__PURE__*/
function (_Sprite) {
  _inherits(TileMap, _Sprite);

  //Подключим карту, это просто спрайт с контейнером данных для коллизий (массив hitboxes)
  function TileMap(props) {
    var _this;

    _classCallCheck(this, TileMap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TileMap).call(this, props));
    _this.hitboxes = props.hitboxes || [];
    return _this;
  }

  return TileMap;
}(_sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]); //На карте много объектов, для оптимизации делаем пререндер (заранее отрисовать карту и использовать как картинку). Для этого удобно использовать screen.js

/***/ }),

/***/ "./src/vector.js":
/*!***********************!*\
  !*** ./src/vector.js ***!
  \***********************/
/*! exports provided: Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return Vector; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Vector отвечает за перемещение персонажей по направлению
var Vector =
/*#__PURE__*/
function () {
  function Vector(direction, speed) {
    _classCallCheck(this, Vector);

    this.setDirection(direction, speed);
  }

  _createClass(Vector, [{
    key: "setDirection",
    value: function setDirection(direction, speed) {
      this.direction = direction;
      this.speed = speed;
      this.x = 0;
      this.y = 0;

      switch (direction) {
        case "up":
          this.y = -speed;
          break;

        case "down":
          this.y = speed;
          break;

        case "right":
          this.x = speed;
          break;

        case "left":
          this.x = -speed;
          break;
      }
    }
  }, {
    key: "move",
    value: function move(object, dt) {
      //dt - время между последними фреймами (time-this.lastTime)
      object.x += dt * (this.x / 1000);
      object.y += dt * (this.y / 1000);
    }
  }]);

  return Vector;
}();

/***/ }),

/***/ "./src/waves.js":
/*!**********************!*\
  !*** ./src/waves.js ***!
  \**********************/
/*! exports provided: Waves */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Waves", function() { return Waves; });
/* harmony import */ var _text_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-info */ "./src/text-info.js");
/* harmony import */ var _orc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orc */ "./src/orc.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Waves =
/*#__PURE__*/
function () {
  function Waves(game) {
    _classCallCheck(this, Waves);

    this.game = game; // this.waves;
    // this.textInfo = new TextInfo(this.game.screen);

    this.orcArmy = game.currentScene.orcArmy; //Массив, содержащий всех существующих орков. Этот класс пополняет этот массив новыми орками

    this.collider = game.currentScene.collider; //Будем добавлять орков в коллайдер

    this.player = game.currentScene.player; //Передаём игрока, чтобы орк мог следить за ним и атаковать его

    this.lastTime = 0;
    this.timeLeftForNextWave = 500; //Таймер для обратного отсчёта. Первая волна начнётся через 1000 мс

    this.timeForNextWave = 2000; //Константа, следующая волная будет через это время
  }

  _createClass(Waves, [{
    key: "init",
    value: function init() {// this.waves = 0;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.lastTime == 0) {
        this.lastTime = time;
      }

      if (this.timeLeftForNextWave < 0) {
        this.nextWave(time);
      }

      this.timeLeftForNextWave -= time - this.lastTime;
      this.lastTime = time; // this.textInfo.update(time);
    }
  }, {
    key: "nextWave",
    value: function nextWave(time) {
      var _this = this;

      // this.waves +=1;
      // let text = 'Wave #'+this.waves;
      // this.textInfo.showText(text,time);
      var orcSquad = []; //Создать за один раз нескольких орков

      for (var i = 0; i < 2; i++) {
        var orc = new _orc__WEBPACK_IMPORTED_MODULE_1__["Orc"](this.player); //Передаём игрока, чтобы орк мог следить за ним и атаковать его

        orc.x = 1350; //После отладки сделай 1350

        orc.y = 1015 + i * 70;
        orcSquad.push(orc);
      }

      orcSquad.forEach(function (orc) {
        _this.collider.addKinematicBody(orc);

        _this.orcArmy.push(orc);
      });
      this.timeLeftForNextWave = this.timeForNextWave;
    }
  }]);

  return Waves;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FpLmpzIiwid2VicGFjazovLy8uL3NyYy9haXMvZHVtbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fpcy9lbmRTY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fpcy9pc0FncmVzc2l2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWlzL3BlYWNlZnVsLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVyLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9vcmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZXMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbW92ZS1mcm9tLWFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvZ2FtZS1sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvZ2FtZS1vdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9nYW1lLXdpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUtc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dC1pbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy93YXZlcy5qcyJdLCJuYW1lcyI6WyJBSSIsImJvZHkiLCJ0aW1lIiwiRHVtbXkiLCJkdXJhdGlvbiIsImRpcmVjdGlvbiIsImxhc3RUaW1lIiwic3BsaXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGFuZ2VEaXJlY3Rpb24iLCJ3YWxrIiwiRW5kU2NyaXB0IiwiZXZlbnRUaW1lIiwiZXZlbnRTdGFydCIsImhpdCIsInN0YW5kIiwiaXNBZ3Jlc3NpdmUiLCJhZ3Jlc3NpdmUiLCJQZWFjZWZ1bCIsInBsYXllciIsImxhc3RUaW1lRHVtYiIsInN0dWNrIiwiY2hhbmdlV2F5SW5pdCIsImNoYW5nZVdheSIsIm9sZFgiLCJvbGRZIiwibGFzdFRpbWVBZ3Jlc3NpdmUiLCJkdXJhdGlvbkFncmVzc2l2ZSIsInRpbWVPZk1hcmNoIiwiaXNPcmNBZ3Jlc3NpdmUiLCJhZ3Jlc3NpdmVCZWhhdmlvdXIiLCJpc1N0dWNrIiwiZHVtYkJlaGF2aW91ciIsImNvcnJlY3Rpb24iLCJ4IiwiY29sbGlzaW9uU2hhcGUiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJhdHRhY2siLCJjaGFuZ2VBZ3Jlc3NpdmVEaXJlY3Rpb24iLCJnZXRIaXQiLCJBbmltYXRpb24iLCJpbWFnZU5hbWUiLCJmcmFtZXMiLCJzcGVlZCIsInJlcGVhdCIsImF1dG9ydW4iLCJzb3VyY2VYIiwic3giLCJzb3VyY2VZIiwic3kiLCJydW5uaW5nIiwiY3VycmVudEZyYW1lIiwidG90YWxGcmFtZXMiLCJsZW5ndGgiLCJvbkVuZCIsImluZGV4Iiwic2V0RnJhbWUiLCJzdG9wIiwibmV4dEZyYW1lIiwiU3ByaXRlIiwiQm9keSIsInZlbG9jaXR5IiwiVmVjdG9yIiwiYW5pbWF0aW9ucyIsImlzU2hvb3RpbmciLCJpc0hpdHRpbmciLCJhbmltYXRpb25TaGVldCIsIkNoYXJhY3RlclNoZWV0IiwiZm9yRWFjaCIsIm5hbWUiLCJnZXRBbmltYXRpb24iLCJhcnJvdyIsInZpZXciLCJmbHkiLCJydW4iLCJzZXREaXJlY3Rpb24iLCJtb3ZlIiwic2V0WFkiLCJ0cnVuYyIsInVwZGF0ZSIsIkNhbWVyYSIsImxpbWl0WCIsImxpbWl0WSIsInNjcm9sbEVkZ2UiLCJ3YXRjaE9iamVjdCIsIm9iaiIsIm1pbiIsIm1heCIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsInNlcXVlbmNlcyIsImdldFNlcXVlbmNlcyIsImRhdGEiLCJyZXF1aXJlIiwibGF5ZXJzIiwibGF5ZXIiLCJmaWx0ZXIiLCJpIiwiU3ByaXRlU2hlZXQiLCJDb2xsaWRlciIsInN0YXRpY1NoYXBlcyIsImJvZGllcyIsInR5cGUiLCJwdXNoIiwib2JqZWN0cyIsImNoZWNrQ29sbGlzaW9uIiwic2hhcGUiLCJjaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyIsImoiLCJjaGVja0ludGVyYWN0aXZlIiwiaW5kZXhPZkJvZHkiLCJpbmRleE9mU2hhcGUiLCJoYXNPd25Qcm9wZXJ0eSIsIlJlbW92ZUZyb21BcnJheSIsInJlbW92ZSIsImRlYXRoIiwiQ29udHJvbFN0YXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiZmlyZSIsImtleU1hcCIsIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJlc3NlZCIsImhhcyIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImdldCIsIkdhbWUiLCJzY3JlZW4iLCJTY3JlZW4iLCJsb2FkSW1hZ2VzIiwib3JjIiwidGl0bGUiLCJ0aWxlcyIsImNvbnRyb2wiLCJzY2VuZXMiLCJsb2FkaW5nIiwiTG9hZGluZyIsIm1lbnUiLCJNZW51IiwiZ2FtZUxldmVsIiwiR2FtZUxldmVsIiwiZ2FtZU92ZXIiLCJHYW1lT3ZlciIsImdhbWVXaW4iLCJHYW1lV2luIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIlNjZW5lIiwiTE9BREVEIiwiU1RBUlRfR0FNRSIsIkdBTUVfT1ZFUiIsIkdBTUVfV0lOIiwiV09SS0lORyIsImNoYW5nZVNjZW5lIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnJhbWUiLCJJbWFnZUxvYWRlciIsImltYWdlRmlsZXMiLCJpbWFnZXMiLCJwcm9taXNlcyIsImxvYWRJbWFnZSIsIlByb21pc2UiLCJhbGwiLCJzcmMiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIndpbmRvdyIsImVsdmVuU2NvdXQiLCJJbnRlcmZhY2UiLCJnYW1lIiwid2F2ZXMiLCJ0ZXh0SW5mbyIsIlRleHRJbmZvIiwiY29udGV4dCIsImZpZ2h0VGV4dFNob3dlZCIsInRpbWVUb1N1cnZpdmUiLCJ3aWR0aEhlYWx0aExpbmUiLCJlbmRPcGFjaXR5Iiwic2hvd0hlYWx0aExpbmUiLCJoZWFsdGgiLCJlbmRHYW1lIiwiZmlnaHRUZXh0Iiwic2hvd1RpbWVyIiwic2hvd1RleHQiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImxpbmVXaWR0aCIsInJlY3QiLCJmaWxsUmVjdCIsImhlYWx0aFN0YXJ0Iiwic3Ryb2tlIiwicHJpbnQiLCJvcGFjaXR5IiwiZ2FtZU92ZXJUcmlnZ2VyIiwid2luVHJpZ2dlciIsIk9yYyIsImFpVHlwZSIsImFpIiwiYmVjb21lQWdyZXNzaXZlIiwiUGxheWVyIiwiZ2FtZV9sZXZlbCIsInRpbWVBcnJvdyIsInRpbWVyRm9yQ3JlYXRpbmdBcnJvdyIsImxhc3RUaW1lRm9yQXJyb3ciLCJ1bmRlYWQiLCJ0aW1lclVuZGVhZCIsImxhc3RUaW1lRm9yVW5kZWFkIiwic2hvb3RpbmciLCJzaG9vdCIsIlByb2plY3RpbGUiLCJhY3RpdmUiLCJkZWxldGVkIiwiQXJyb3ciLCJzcHJpdGVzIiwiZ2V0U3ByaXRlIiwiYXJyIiwiaW5kZXhlcyIsImFycmF5T2ZJbmRleGVzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiaXRlbSIsImluZGV4T2YiLCJjb25zdHJ1Y3RvciIsImJlY29tZVBlYWNlZnVsIiwiY29sbGlkZXIiLCJtYXBEYXRhIiwibWFwIiwiY3JlYXRlTWFwIiwibWFpbkNhbWVyYSIsInNwZWNpYWxQb3NpdGlvbiIsIndhdGNoIiwic2V0Q2FtZXJhIiwiYWRkU3RhdGljU2hhcGVzIiwiYWRkS2luZW1hdGljQm9keSIsIm9yY0FybXkiLCJXYXZlcyIsInByb2plY3RpbGVzIiwiZmluaXNoIiwiZmlsbCIsImRyYXdTcHJpdGUiLCJhZGRBcnJvdyIsImxvYWRlZEF0Iiwic2NyaXB0VGltZSIsInNjcmlwdFNwZWVkUGxheWVyIiwicGxheWVyQ29vcmQiLCJvcmNUaWxlcyIsInN0YXJ0UG9zaXRpb25ZIiwic3RhcnRJbXB1bHNlIiwic3BlZWRQbGF5ZXIiLCJvcmNzIiwieDEiLCJzcHJpdGUiLCJpc0ltYWdlc0xvYWRlZCIsImRyYXdJbWFnZSIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImdldENvbnRleHQiLCJjYW1lcmEiLCJpc0NhbWVyYVNldCIsImFkZFN0eWxlc1RvQ2FudmFzIiwic3R5bGUiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiaW1hZ2VzRmlsZXMiLCJsb2FkZXIiLCJsb2FkIiwidGhlbiIsIm5hbWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInRpbGVzZXQiLCJtYXBJbWFnZSIsInRpbGV3aWR0aCIsInRpbGVoZWlnaHQiLCJtYXBDb250ZXh0IiwiaGl0Ym94ZXMiLCJyb3ciLCJjb2wiLCJnZXRTb3VyY2VYIiwiZ2V0U291cmNlWSIsIngyIiwieTEiLCJ5MiIsIlRpbGVNYXAiLCJjb2xvciIsInRleHQiLCJmb250U2l6ZSIsImZvbnQiLCJmaWxsVGV4dCIsInNwcml0ZVgiLCJzcHJpdGVZIiwiYWJzIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJzaG93VGV4dEJvb2xlYW4iLCJob3dMb25nVG9TaG93IiwidGltZVRvU3RvcCIsInN0YXJ0Rm9udFNpemUiLCJwcm9wcyIsIm9iamVjdCIsImR0IiwidGltZUxlZnRGb3JOZXh0V2F2ZSIsInRpbWVGb3JOZXh0V2F2ZSIsIm5leHRXYXZlIiwib3JjU3F1YWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxJQUFNQSxFQUFiO0FBQUE7QUFBQTtBQUFpQjtBQUNiLGdCQUFjO0FBQUE7O0FBQ1YsU0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDSDs7QUFITDtBQUFBO0FBQUEsNEJBS1lBLElBTFosRUFLa0I7QUFDVixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDSDtBQVBMO0FBQUE7QUFBQSwyQkFTV0MsSUFUWCxFQVNpQixDQUVaO0FBWEw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFTyxJQUFNQyxLQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLG1CQUFjO0FBQUE7O0FBQUE7O0FBQUM7QUFDWDtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsSUFBaEIsQ0FGVSxDQUVXOztBQUNyQixVQUFLQyxTQUFMLEdBQWlCLE1BQWpCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixDQUFoQixDQUpVLENBSVE7O0FBSlI7QUFLYjs7QUFOTDtBQUFBO0FBQUEsc0NBUXNCO0FBQUM7QUFDZixXQUFLRCxTQUFMLEdBQWlCLHFCQUFxQkUsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0NDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBYyxDQUF6QixDQUFoQyxDQUFqQjtBQUNIO0FBVkw7QUFBQTtBQUFBLDJCQVlXUixJQVpYLEVBWWdCO0FBQ1IsVUFBSUEsSUFBSSxHQUFHLEtBQUtJLFFBQWIsR0FBeUIsS0FBS0YsUUFBakMsRUFBMkM7QUFDdkMsYUFBS08sZUFBTDtBQUNBLGFBQUtMLFFBQUwsR0FBZ0JKLElBQWhCO0FBQ0g7O0FBQ0QsV0FBS0QsSUFBTCxDQUFVVyxJQUFWLENBQWUsS0FBS1AsU0FBcEI7O0FBQ0Esd0VBQWFILElBQWI7QUFDSDtBQW5CTDs7QUFBQTtBQUFBLEVBQTJCRixzQ0FBM0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBRU8sSUFBTWEsU0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFDSSx1QkFBYztBQUFBOztBQUFBOztBQUFDO0FBQ1g7QUFDQSxVQUFLUixTQUFMLEdBQWlCLE1BQWpCO0FBQ0EsVUFBS1MsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFVBQUtSLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxVQUFLUyxVQUFMLEdBQWtCLEtBQWxCO0FBTFU7QUFNYjs7QUFQTDtBQUFBO0FBQUEsMkJBU1diLElBVFgsRUFTZ0I7QUFDUixVQUFHLEtBQUtJLFFBQUwsSUFBaUIsQ0FBcEIsRUFBc0I7QUFDbEIsYUFBS0EsUUFBTCxHQUFnQkosSUFBaEI7QUFDSDs7QUFDRCxXQUFLWSxTQUFMLElBQWtCWixJQUFJLEdBQUcsS0FBS0ksUUFBOUI7O0FBRUEsVUFBRyxDQUFDLEtBQUtTLFVBQVQsRUFBb0I7QUFBQztBQUNqQixZQUFHLEtBQUtELFNBQUwsR0FBaUIsQ0FBcEIsRUFBdUI7QUFDbkIsZUFBS0MsVUFBTCxHQUFrQixJQUFsQixDQURtQixDQUNJOztBQUN2QixlQUFLZCxJQUFMLENBQVVlLEdBQVYsQ0FBYyxLQUFLWCxTQUFuQixFQUZtQixDQUVXO0FBQ2pDOztBQUNELGFBQUtKLElBQUwsQ0FBVVcsSUFBVixDQUFlLEtBQUtQLFNBQXBCO0FBQ0gsT0FORCxNQU1LO0FBQ0QsYUFBS0osSUFBTCxDQUFVZ0IsS0FBVixDQUFnQixLQUFLWixTQUFyQjtBQUNIOztBQUdELFdBQUtDLFFBQUwsR0FBZ0JKLElBQWhCOztBQUNBLDRFQUFhQSxJQUFiO0FBQ0g7QUE1Qkw7O0FBQUE7QUFBQSxFQUErQkYsc0NBQS9CLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRk8sSUFBTWtCLFdBQWI7QUFBQTtBQUFBO0FBQ0kseUJBQWE7QUFBQTtBQUNaOztBQUZMO0FBQUE7QUFBQSxzQ0FJNEI7QUFDcEIsV0FBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNIO0FBTkw7QUFBQTtBQUFBLHFDQVEyQjtBQUNuQixXQUFLQSxTQUFMLEdBQWlCLEtBQWpCO0FBQ0g7QUFWTDtBQUFBO0FBQUEscUNBWTJCO0FBQ25CLGFBQU8sS0FBS0EsU0FBWjtBQUNIO0FBZEw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFTyxJQUFNQyxRQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLG9CQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBQUM7QUFDakI7QUFDQSxVQUFLakIsUUFBTCxHQUFnQixJQUFoQixDQUZnQixDQUVLOztBQUNyQixVQUFLQyxTQUFMLEdBQWlCLE1BQWpCO0FBQ0EsVUFBS2lCLFlBQUwsR0FBb0IsQ0FBcEIsQ0FKZ0IsQ0FJTTs7QUFDdEIsVUFBS2hCLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxVQUFLZSxNQUFMLEdBQWNBLE1BQWQsQ0FOZ0IsQ0FNSzs7QUFFckIsVUFBS0UsS0FBTCxHQUFhLEtBQWIsQ0FSZ0IsQ0FRRzs7QUFDbkIsVUFBS0MsYUFBTCxHQUFxQixHQUFyQixDQVRnQixDQVNTOztBQUN6QixVQUFLQyxTQUFMLEdBQWlCLE1BQUtELGFBQXRCO0FBQ0EsVUFBS0UsSUFBTCxHQUFZLENBQVosQ0FYZ0IsQ0FXRjs7QUFDZCxVQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUVBLFVBQUtDLGlCQUFMLEdBQXlCLENBQXpCO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsR0FBekIsQ0FmZ0IsQ0FlYTs7QUFDN0IsVUFBS0MsV0FBTCxHQUFtQixJQUFuQixDQWhCZ0IsQ0FnQlE7O0FBaEJSO0FBaUJuQjs7QUFsQkw7QUFBQTtBQUFBLHNDQW9Cc0I7QUFBQztBQUNmLFdBQUt6QixTQUFMLEdBQWlCLFVBQVVFLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBYyxDQUF6QixDQUFyQixDQUFqQixDQURjLENBRWQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQTlCTDtBQUFBO0FBQUEsMkJBbUNXUixJQW5DWCxFQW1DZ0I7QUFDUixVQUFHLEtBQUtJLFFBQUwsSUFBaUIsQ0FBcEIsRUFBc0I7QUFDbEIsYUFBS0EsUUFBTCxHQUFnQkosSUFBaEI7QUFDSDs7QUFHRCxVQUFHLEtBQUs0QixXQUFMLEdBQW1CLENBQXRCLEVBQXdCO0FBQUM7QUFDckIsYUFBS0EsV0FBTCxJQUFvQjVCLElBQUksR0FBRyxLQUFLSSxRQUFoQztBQUNILE9BRkQsTUFFTSxJQUFHLEtBQUtpQixLQUFSLEVBQWM7QUFBQztBQUNqQixhQUFLRSxTQUFMLElBQWtCdkIsSUFBSSxHQUFHLEtBQUtJLFFBQTlCOztBQUNBLFlBQUcsS0FBS21CLFNBQUwsR0FBaUIsQ0FBcEIsRUFBc0I7QUFDbEIsZUFBS0EsU0FBTCxHQUFpQixLQUFLRCxhQUF0QjtBQUNBLGVBQUtELEtBQUwsR0FBYSxLQUFiO0FBQ0g7QUFDSixPQU5LLE1BTUEsSUFBR0wsd0RBQVcsQ0FBQ2EsY0FBWixFQUFILEVBQWdDO0FBQUM7QUFDbkMsYUFBS0Msa0JBQUwsQ0FBd0I5QixJQUF4QjtBQUNBLGFBQUsrQixPQUFMO0FBQ0gsT0FISyxNQUdEO0FBQ0QsYUFBS0MsYUFBTCxDQUFtQmhDLElBQW5CO0FBQ0EsYUFBSytCLE9BQUw7QUFDSDs7QUFHRCxXQUFLM0IsUUFBTCxHQUFnQkosSUFBaEI7QUFDQSxXQUFLRCxJQUFMLENBQVVXLElBQVYsQ0FBZSxLQUFLUCxTQUFwQjs7QUFDQSwyRUFBYUgsSUFBYjtBQUNIO0FBN0RMO0FBQUE7QUFBQSxrQ0FrRWtCQSxJQWxFbEIsRUFrRXVCO0FBQ2YsVUFBSUEsSUFBSSxHQUFHLEtBQUtvQixZQUFiLEdBQTZCLEtBQUtsQixRQUFyQyxFQUErQztBQUMzQyxhQUFLTyxlQUFMO0FBQ0EsYUFBS1csWUFBTCxHQUFvQnBCLElBQXBCO0FBQ0g7QUFDSjtBQXZFTDtBQUFBO0FBQUEsdUNBMkV1QkEsSUEzRXZCLEVBMkU0QjtBQUNwQjtBQUNJLFVBQUlpQyxVQUFVLEdBQUcsRUFBakIsQ0FGZ0IsQ0FFSTs7QUFDcEIsVUFBRyxLQUFLbEMsSUFBTCxDQUFVbUMsQ0FBVixHQUFjLEtBQUtuQyxJQUFMLENBQVVvQyxjQUFWLENBQXlCRCxDQUF2QyxHQUEyQ0QsVUFBM0MsR0FBd0QsS0FBS2QsTUFBTCxDQUFZZSxDQUFaLEdBQWdCLEtBQUtmLE1BQUwsQ0FBWWdCLGNBQVosQ0FBMkJELENBQTNDLEdBQStDLEtBQUtmLE1BQUwsQ0FBWWdCLGNBQVosQ0FBMkJDLEtBQWxJLElBQ0MsS0FBS3JDLElBQUwsQ0FBVW1DLENBQVYsR0FBYyxLQUFLbkMsSUFBTCxDQUFVb0MsY0FBVixDQUF5QkQsQ0FBdkMsR0FBMkMsS0FBS25DLElBQUwsQ0FBVW9DLGNBQVYsQ0FBeUJDLEtBQXBFLEdBQTRFSCxVQUE1RSxHQUF5RixLQUFLZCxNQUFMLENBQVllLENBQVosR0FBZ0IsS0FBS2YsTUFBTCxDQUFZZ0IsY0FBWixDQUEyQkQsQ0FEckksSUFFQyxLQUFLbkMsSUFBTCxDQUFVc0MsQ0FBVixHQUFjLEtBQUt0QyxJQUFMLENBQVVvQyxjQUFWLENBQXlCRSxDQUF2QyxHQUEwQ0osVUFBMUMsR0FBdUQsS0FBS2QsTUFBTCxDQUFZa0IsQ0FBWixHQUFnQixLQUFLbEIsTUFBTCxDQUFZZ0IsY0FBWixDQUEyQkUsQ0FBM0MsR0FBK0MsS0FBS2xCLE1BQUwsQ0FBWWdCLGNBQVosQ0FBMkJHLE1BRmxJLElBR0MsS0FBS3ZDLElBQUwsQ0FBVXNDLENBQVYsR0FBYyxLQUFLdEMsSUFBTCxDQUFVb0MsY0FBVixDQUF5QkUsQ0FBdkMsR0FBMkMsS0FBS3RDLElBQUwsQ0FBVW9DLGNBQVYsQ0FBeUJHLE1BQXBFLEdBQTRFTCxVQUE1RSxHQUF3RixLQUFLZCxNQUFMLENBQVlrQixDQUFaLEdBQWdCLEtBQUtsQixNQUFMLENBQVlnQixjQUFaLENBQTJCRSxDQUh2SSxFQUlJLEtBQUtFLE1BQUwsR0FQWSxDQVFwQjs7QUFDQSxVQUFJdkMsSUFBSSxHQUFHLEtBQUswQixpQkFBYixHQUFrQyxLQUFLQyxpQkFBMUMsRUFBNkQ7QUFDekQsYUFBS2Esd0JBQUw7QUFDQSxhQUFLZCxpQkFBTCxHQUF5QjFCLElBQXpCO0FBQ0g7QUFHSjtBQTFGTDtBQUFBO0FBQUEsK0NBNkY4QjtBQUN0QixVQUFHLEtBQUtELElBQUwsQ0FBVW1DLENBQVYsSUFBZSxLQUFLZixNQUFMLENBQVllLENBQTNCLElBQWdDLEtBQUtuQyxJQUFMLENBQVVzQyxDQUFWLElBQWUsS0FBS2xCLE1BQUwsQ0FBWWtCLENBQTlELEVBQWdFO0FBQzVELFlBQUcvQixJQUFJLENBQUNFLE1BQUwsS0FBYyxHQUFqQixFQUFxQjtBQUNqQixlQUFLTCxTQUFMLEdBQWlCLE1BQWpCO0FBQ0gsU0FGRCxNQUVLO0FBQ0QsZUFBS0EsU0FBTCxHQUFpQixJQUFqQjtBQUNIO0FBQ0o7O0FBQ0QsVUFBRyxLQUFLSixJQUFMLENBQVVtQyxDQUFWLEdBQWMsS0FBS2YsTUFBTCxDQUFZZSxDQUExQixJQUErQixLQUFLbkMsSUFBTCxDQUFVc0MsQ0FBVixJQUFlLEtBQUtsQixNQUFMLENBQVlrQixDQUE3RCxFQUErRDtBQUMzRCxZQUFHL0IsSUFBSSxDQUFDRSxNQUFMLEtBQWMsR0FBakIsRUFBcUI7QUFDakIsZUFBS0wsU0FBTCxHQUFpQixPQUFqQjtBQUNILFNBRkQsTUFFSztBQUNELGVBQUtBLFNBQUwsR0FBaUIsSUFBakI7QUFDSDtBQUNKOztBQUNELFVBQUcsS0FBS0osSUFBTCxDQUFVbUMsQ0FBVixHQUFjLEtBQUtmLE1BQUwsQ0FBWWUsQ0FBMUIsSUFBK0IsS0FBS25DLElBQUwsQ0FBVXNDLENBQVYsR0FBYyxLQUFLbEIsTUFBTCxDQUFZa0IsQ0FBNUQsRUFBOEQ7QUFDMUQsWUFBRy9CLElBQUksQ0FBQ0UsTUFBTCxLQUFjLEdBQWpCLEVBQXFCO0FBQ2pCLGVBQUtMLFNBQUwsR0FBaUIsT0FBakI7QUFDSCxTQUZELE1BRUs7QUFDRCxlQUFLQSxTQUFMLEdBQWlCLE1BQWpCO0FBQ0g7QUFDSjs7QUFDRCxVQUFHLEtBQUtKLElBQUwsQ0FBVW1DLENBQVYsSUFBZSxLQUFLZixNQUFMLENBQVllLENBQTNCLElBQWdDLEtBQUtuQyxJQUFMLENBQVVzQyxDQUFWLEdBQWMsS0FBS2xCLE1BQUwsQ0FBWWtCLENBQTdELEVBQStEO0FBQzNELFlBQUcvQixJQUFJLENBQUNFLE1BQUwsS0FBYyxHQUFqQixFQUFxQjtBQUNqQixlQUFLTCxTQUFMLEdBQWlCLE1BQWpCO0FBQ0gsU0FGRCxNQUVLO0FBQ0QsZUFBS0EsU0FBTCxHQUFpQixNQUFqQjtBQUNIO0FBQ0o7QUFDSjtBQTFITDtBQUFBO0FBQUEsOEJBNkhhO0FBQUM7QUFDTixVQUFHLEtBQUtKLElBQUwsQ0FBVW1DLENBQVYsSUFBZSxLQUFLVixJQUFwQixJQUE0QixLQUFLekIsSUFBTCxDQUFVc0MsQ0FBVixJQUFlLEtBQUtaLElBQW5ELEVBQXlEO0FBQ3JELGFBQUtKLEtBQUwsR0FBYSxJQUFiOztBQUNBLFlBQUcsS0FBS2xCLFNBQUwsSUFBa0IsSUFBbEIsSUFBMEIsS0FBS0EsU0FBTCxJQUFrQixNQUEvQyxFQUFzRDtBQUNsRCxjQUFHRyxJQUFJLENBQUNFLE1BQUwsS0FBZSxHQUFsQixFQUFzQjtBQUNsQixpQkFBS0wsU0FBTCxHQUFpQixPQUFqQjtBQUNILFdBRkQsTUFFSztBQUNELGlCQUFLQSxTQUFMLEdBQWlCLE1BQWpCO0FBQ0g7O0FBQ0Q7QUFDSDs7QUFDRCxZQUFHLEtBQUtBLFNBQUwsSUFBa0IsT0FBbEIsSUFBNkIsS0FBS0EsU0FBTCxJQUFrQixNQUFsRCxFQUF5RDtBQUNyRCxjQUFHRyxJQUFJLENBQUNFLE1BQUwsS0FBZSxHQUFsQixFQUFzQjtBQUNsQixpQkFBS0wsU0FBTCxHQUFpQixJQUFqQjtBQUNILFdBRkQsTUFFSztBQUNELGlCQUFLQSxTQUFMLEdBQWlCLE1BQWpCO0FBQ0g7O0FBQ0Q7QUFDSDtBQUNKOztBQUNELFdBQUtxQixJQUFMLEdBQVksS0FBS3pCLElBQUwsQ0FBVW1DLENBQXRCO0FBQ0EsV0FBS1QsSUFBTCxHQUFZLEtBQUsxQixJQUFMLENBQVVzQyxDQUF0QjtBQUNIO0FBbkpMO0FBQUE7QUFBQSw2QkFxSlk7QUFDSixXQUFLdEMsSUFBTCxDQUFVZSxHQUFWLEdBREksQ0FFSjs7QUFDQSxXQUFLSyxNQUFMLENBQVlzQixNQUFaO0FBQ0g7QUF6Skw7O0FBQUE7QUFBQSxFQUE4QjNDLHNDQUE5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUVPLElBQU00QyxTQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLDJCQUFnRztBQUFBOztBQUFBLFFBQW5GQyxTQUFtRixRQUFuRkEsU0FBbUY7QUFBQSxRQUF4RUMsTUFBd0UsUUFBeEVBLE1BQXdFO0FBQUEsUUFBaEVDLEtBQWdFLFFBQWhFQSxLQUFnRTtBQUFBLDJCQUF6REMsTUFBeUQ7QUFBQSxRQUF6REEsTUFBeUQsNEJBQWhELElBQWdEO0FBQUEsNEJBQTFDQyxPQUEwQztBQUFBLFFBQTFDQSxPQUEwQyw2QkFBaEMsSUFBZ0M7QUFBQSwwQkFBMUJYLEtBQTBCO0FBQUEsUUFBMUJBLEtBQTBCLDJCQUFsQixFQUFrQjtBQUFBLDJCQUFkRSxNQUFjO0FBQUEsUUFBZEEsTUFBYyw0QkFBTCxFQUFLOztBQUFBOztBQUM1RixtRkFBTTtBQUNGSyxlQUFTLEVBQUVBLFNBRFQ7QUFFRkssYUFBTyxFQUFFSixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVLLEVBRmpCO0FBR0ZDLGFBQU8sRUFBRU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVTyxFQUhqQjtBQUlGZixXQUFLLEVBQUVBLEtBSkw7QUFLRkUsWUFBTSxFQUFFQTtBQUxOLEtBQU47QUFRQSxVQUFLTSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLTSxPQUFMLEdBQWVMLE9BQWY7QUFDQSxVQUFLM0MsUUFBTCxHQUFnQixDQUFoQixDQWI0RixDQWExRTs7QUFDbEIsVUFBS2lELFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtWLE1BQUwsQ0FBWVcsTUFBL0I7QUFFQTs7O0FBRUEsVUFBS0MsS0FBTCxHQUFhLElBQWI7QUFuQjRGO0FBb0IvRjs7QUFyQkw7QUFBQTtBQUFBLDZCQXVCYUMsS0F2QmIsRUF1Qm9CO0FBQ1osV0FBS0osWUFBTCxHQUFvQkksS0FBcEI7QUFDQSxXQUFLVCxPQUFMLEdBQWUsS0FBS0osTUFBTCxDQUFZYSxLQUFaLEVBQW1CUixFQUFsQztBQUNBLFdBQUtDLE9BQUwsR0FBZSxLQUFLTixNQUFMLENBQVlhLEtBQVosRUFBbUJOLEVBQWxDO0FBQ0g7QUEzQkw7QUFBQTtBQUFBLDBCQTZCVTtBQUFDO0FBQ0gsVUFBRyxDQUFDLEtBQUtDLE9BQVQsRUFBaUI7QUFDYixhQUFLTSxRQUFMLENBQWMsQ0FBZDtBQUNBLGFBQUtOLE9BQUwsR0FBZSxJQUFmO0FBQ0g7QUFDSjtBQWxDTDtBQUFBO0FBQUEsMkJBb0NXO0FBQ0gsV0FBS0EsT0FBTCxHQUFlLEtBQWY7QUFDSDtBQXRDTDtBQUFBO0FBQUEsZ0NBeUNnQjtBQUNSLFVBQUksS0FBS0MsWUFBTCxHQUFvQixDQUFyQixJQUEyQixLQUFLQyxXQUFuQyxFQUFnRDtBQUFDO0FBQzdDLFlBQUcsS0FBS0UsS0FBUixFQUFlO0FBQUM7QUFDWixlQUFLQSxLQUFMO0FBQ0g7O0FBQ0QsWUFBRyxLQUFLVixNQUFSLEVBQWdCO0FBQUM7QUFDYixlQUFLWSxRQUFMLENBQWMsQ0FBZDtBQUNBO0FBQ0g7O0FBQ0QsYUFBS0MsSUFBTCxHQVI0QyxDQVFoQzs7QUFDWjtBQUNIOztBQUNELFdBQUtELFFBQUwsQ0FBYyxLQUFLTCxZQUFMLEdBQW9CLENBQWxDO0FBQ0g7QUF0REw7QUFBQTtBQUFBLDJCQXdEV3JELElBeERYLEVBd0RpQjtBQUNULFVBQUcsQ0FBQyxLQUFLb0QsT0FBVCxFQUFrQjtBQUNkO0FBQ0g7O0FBQ0QsVUFBRyxLQUFLaEQsUUFBTCxJQUFpQixDQUFwQixFQUF1QjtBQUFDO0FBQ3BCLGFBQUtBLFFBQUwsR0FBZ0JKLElBQWhCO0FBQ0E7QUFDSDs7QUFFRCxVQUFJQSxJQUFJLEdBQUcsS0FBS0ksUUFBYixHQUF5QixLQUFLeUMsS0FBakMsRUFBd0M7QUFBQztBQUNyQyxhQUFLZSxTQUFMO0FBQ0EsYUFBS3hELFFBQUwsR0FBZ0JKLElBQWhCO0FBQ0g7QUFDSjtBQXJFTDs7QUFBQTtBQUFBLEVBQStCNkQsOENBQS9CLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQyxJQUFiO0FBQUE7QUFBQTtBQUFtQjtBQUNmLHNCQUFnQztBQUFBOztBQUFBLFFBQW5CbkIsU0FBbUIsUUFBbkJBLFNBQW1CO0FBQUEsUUFBUkUsS0FBUSxRQUFSQSxLQUFROztBQUFBOztBQUM1QixTQUFLWCxDQUFMLEdBQVMsQ0FBQyxHQUFWLENBRDRCLENBQ2Q7O0FBQ2QsU0FBS0csQ0FBTCxHQUFTLENBQUMsR0FBVjtBQUNBLFNBQUtRLEtBQUwsR0FBYUEsS0FBYixDQUg0QixDQUdUOztBQUNuQixTQUFLa0IsUUFBTCxHQUFnQixJQUFJQyw4Q0FBSixDQUFXLE1BQVgsRUFBbUIsQ0FBbkIsQ0FBaEIsQ0FKNEIsQ0FJVTs7QUFDdEMsU0FBSzVELFFBQUwsR0FBZ0IsQ0FBaEIsQ0FMNEIsQ0FLVjs7QUFDbEIsU0FBSzZELFVBQUwsR0FBa0IsRUFBbEIsQ0FONEIsQ0FNUDtBQUVyQjs7QUFDQSxTQUFLOUIsY0FBTCxHQUFzQjtBQUFDRCxPQUFDLEVBQUUsRUFBSjtBQUFRRyxPQUFDLEVBQUUsRUFBWDtBQUFlRCxXQUFLLEVBQUUsRUFBdEI7QUFBMEJFLFlBQU0sRUFBRTtBQUFsQyxLQUF0QjtBQUVBLFNBQUs0QixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFqQixDQVo0QixDQWM1Qjs7QUFDQSxRQUFNQyxjQUFjLEdBQUcsSUFBSUMsK0RBQUosQ0FBbUI7QUFBQzFCLGVBQVMsRUFBRUE7QUFBWixLQUFuQixDQUF2QjtBQUNBLDZDQUF5Q3RDLEtBQXpDLENBQStDLEdBQS9DLEVBQW9EaUUsT0FBcEQsQ0FBNEQsVUFBQUMsSUFBSSxFQUFJO0FBQ2hFLFdBQUksQ0FBQ04sVUFBTCxDQUFnQk0sSUFBaEIsSUFBd0JILGNBQWMsQ0FBQ0ksWUFBZixDQUE0QkQsSUFBNUIsQ0FBeEIsQ0FEZ0UsQ0FDTjtBQUM3RCxLQUZEO0FBR0EsaURBQTZDbEUsS0FBN0MsQ0FBbUQsR0FBbkQsRUFBd0RpRSxPQUF4RCxDQUFnRSxVQUFBQyxJQUFJLEVBQUk7QUFDcEUsV0FBSSxDQUFDTixVQUFMLENBQWdCTSxJQUFoQixJQUF3QkgsY0FBYyxDQUFDSSxZQUFmLENBQTRCRCxJQUE1QixFQUFrQyxFQUFsQyxFQUFzQyxLQUF0QyxDQUF4QixDQURvRSxDQUNDO0FBQ3hFLEtBRkQ7QUFHQSx5Q0FBcUNsRSxLQUFyQyxDQUEyQyxHQUEzQyxFQUFnRGlFLE9BQWhELENBQXdELFVBQUFDLElBQUksRUFBSTtBQUM1RCxXQUFJLENBQUNOLFVBQUwsQ0FBZ0JNLElBQWhCLElBQXdCSCxjQUFjLENBQUNJLFlBQWYsQ0FBNEJELElBQTVCLEVBQWtDLEVBQWxDLEVBQXNDLEtBQXRDLENBQXhCLENBRDRELENBQ1M7QUFDeEUsS0FGRDtBQUdBLEtBQUMsT0FBRCxFQUFVRCxPQUFWLENBQWtCLFVBQUFDLElBQUksRUFBSTtBQUN0QixXQUFJLENBQUNOLFVBQUwsQ0FBZ0JNLElBQWhCLElBQXdCSCxjQUFjLENBQUNJLFlBQWYsQ0FBNEJELElBQTVCLEVBQWtDLEVBQWxDLEVBQXNDLEtBQXRDLENBQXhCLENBRHNCLENBQytDO0FBQ3hFLEtBRkQ7QUFHQSxTQUFLeEQsS0FBTCxDQUFXLE1BQVg7QUFDSDs7QUE5Qkw7QUFBQTtBQUFBLDBCQWdDVTBELEtBaENWLEVBZ0NnQjtBQUFBOztBQUNSLFVBQUcsQ0FBQyxLQUFLUCxVQUFULEVBQW9CO0FBQ2hCLGFBQUtBLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxhQUFLUSxJQUFMLEdBQVksS0FBS1QsVUFBTCxDQUFpQixXQUFTLEtBQUtGLFFBQUwsQ0FBYzVELFNBQXhDLENBQVo7O0FBQ0EsYUFBS3VFLElBQUwsQ0FBVWxCLEtBQVYsR0FBa0IsWUFBSTtBQUNsQixnQkFBSSxDQUFDVSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0FPLGVBQUssQ0FBQ0UsR0FBTixDQUFVLE1BQUksQ0FBQ3pDLENBQWYsRUFBa0IsTUFBSSxDQUFDRyxDQUF2QixFQUEwQixNQUFJLENBQUMwQixRQUFMLENBQWM1RCxTQUF4QztBQUNILFNBSEQ7O0FBSUEsYUFBS3VFLElBQUwsQ0FBVUUsR0FBVixHQVBnQixDQU9BO0FBQ25CO0FBQ0o7QUExQ0w7QUFBQTtBQUFBLDBCQTRDUztBQUFBOztBQUNELFVBQUcsQ0FBQyxLQUFLVCxTQUFULEVBQW1CO0FBQ2YsYUFBS0EsU0FBTCxHQUFpQixJQUFqQjtBQUNBLGFBQUtPLElBQUwsR0FBWSxLQUFLVCxVQUFMLENBQWlCLFNBQU8sS0FBS0YsUUFBTCxDQUFjNUQsU0FBdEMsQ0FBWjs7QUFDQSxhQUFLdUUsSUFBTCxDQUFVbEIsS0FBVixHQUFrQixZQUFJO0FBQ2xCLGdCQUFJLENBQUNXLFNBQUwsR0FBaUIsS0FBakI7QUFDSCxTQUZEOztBQUdBLGFBQUtPLElBQUwsQ0FBVUUsR0FBVixHQU5lLENBTUM7QUFDbkI7QUFDSjtBQXJETDtBQUFBO0FBQUEseUJBdURTekUsU0F2RFQsRUF1RG1CO0FBQ1gsVUFBRyxLQUFLK0QsVUFBTCxJQUFtQixLQUFLQyxTQUEzQixFQUFxQyxPQUQxQixDQUNrQzs7QUFDN0MsV0FBS0osUUFBTCxDQUFjYyxZQUFkLENBQTJCMUUsU0FBM0IsRUFBc0MsS0FBSzBDLEtBQTNDO0FBQ0EsV0FBSzZCLElBQUwsR0FBWSxLQUFLVCxVQUFMLENBQWlCLFVBQVE5RCxTQUF6QixDQUFaLENBSFcsQ0FHcUM7O0FBQ2hELFdBQUt1RSxJQUFMLENBQVVFLEdBQVYsR0FKVyxDQUlLO0FBQ25CO0FBNURMO0FBQUE7QUFBQSwwQkE4RFV6RSxTQTlEVixFQThEb0I7QUFBQztBQUNiLFVBQUcsS0FBSytELFVBQUwsSUFBbUIsS0FBS0MsU0FBM0IsRUFBcUMsT0FEekIsQ0FDZ0M7O0FBQzVDLFdBQUtKLFFBQUwsQ0FBY2MsWUFBZCxDQUEyQjFFLFNBQTNCLEVBQXNDLENBQXRDO0FBQ0EsV0FBS3VFLElBQUwsR0FBWSxLQUFLVCxVQUFMLENBQWlCLFVBQVE5RCxTQUF6QixDQUFaO0FBQ0EsV0FBS3VFLElBQUwsQ0FBVWYsSUFBVjtBQUNIO0FBbkVMO0FBQUE7QUFBQSw0QkFxRVc7QUFDSCxXQUFLSSxRQUFMLEdBQWdCLElBQUlDLDhDQUFKLENBQVcsTUFBWCxFQUFtQixDQUFuQixDQUFoQixDQURHLENBQ21DOztBQUN0QyxXQUFLVSxJQUFMLEdBQVksS0FBS1QsVUFBTCxDQUFpQixPQUFqQixDQUFaLENBRkcsQ0FHSDtBQUNIO0FBekVMO0FBQUE7QUFBQSwyQkEyRVdqRSxJQTNFWCxFQTJFZ0I7QUFDUixVQUFHLEtBQUtJLFFBQUwsSUFBZ0IsQ0FBbkIsRUFBcUI7QUFDakIsYUFBS0EsUUFBTCxHQUFnQkosSUFBaEI7QUFDQTtBQUNILE9BSk8sQ0FNUjtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsVUFBRyxLQUFLa0UsVUFBTCxJQUFtQixLQUFLQyxTQUEzQixFQUFxQztBQUFDO0FBQ2xDLGFBQUtKLFFBQUwsQ0FBY2UsSUFBZCxDQUFtQixJQUFuQixFQUF3QixDQUF4QjtBQUNILE9BRkQsTUFFSztBQUNELGFBQUtmLFFBQUwsQ0FBY2UsSUFBZCxDQUFtQixJQUFuQixFQUF5QjlFLElBQUksR0FBQyxLQUFLSSxRQUFuQztBQUNIOztBQUVELFdBQUtBLFFBQUwsR0FBZ0JKLElBQWhCLENBakJRLENBbUJSOztBQUNBLFdBQUswRSxJQUFMLENBQVVLLEtBQVYsQ0FBZ0J6RSxJQUFJLENBQUMwRSxLQUFMLENBQVcsS0FBSzlDLENBQWhCLENBQWhCLEVBQW9DNUIsSUFBSSxDQUFDMEUsS0FBTCxDQUFXLEtBQUszQyxDQUFoQixDQUFwQyxFQXBCUSxDQW9CZ0Q7O0FBQ3hELFdBQUtxQyxJQUFMLENBQVVPLE1BQVYsQ0FBaUJqRixJQUFqQjtBQUNIO0FBakdMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKTyxJQUFNa0YsTUFBYjtBQUFBO0FBQUE7QUFDSSxvQkFBZ0c7QUFBQSxtRkFBSixFQUFJO0FBQUEsMEJBQW5GOUMsS0FBbUY7QUFBQSxRQUFuRkEsS0FBbUYsMkJBQTNFLEdBQTJFO0FBQUEsMkJBQXRFRSxNQUFzRTtBQUFBLFFBQXRFQSxNQUFzRSw0QkFBN0QsR0FBNkQ7QUFBQSwyQkFBeEQ2QyxNQUF3RDtBQUFBLFFBQXhEQSxNQUF3RCw0QkFBL0MsS0FBK0M7QUFBQSwyQkFBeENDLE1BQXdDO0FBQUEsUUFBeENBLE1BQXdDLDRCQUEvQixLQUErQjtBQUFBLCtCQUF4QkMsVUFBd0I7QUFBQSxRQUF4QkEsVUFBd0IsZ0NBQVgsR0FBVzs7QUFBQTs7QUFDNUYsU0FBS25ELENBQUwsR0FBUyxDQUFULENBRDRGLENBQ2pGOztBQUNYLFNBQUtHLENBQUwsR0FBUyxDQUFUO0FBQ0EsU0FBS0QsS0FBTCxHQUFhQSxLQUFiLENBSDRGLENBR3pFOztBQUNuQixTQUFLRSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLNkMsTUFBTCxHQUFjQSxNQUFkLENBTDRGLENBS3ZFOztBQUNyQixTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLRSxXQUFMLEdBQW1CLEtBQW5CLENBUDRGLENBT25FOztBQUN6QixTQUFLQyxHQUFMLEdBQVcsSUFBWCxDQVI0RixDQVE1RTs7QUFDaEIsU0FBS0YsVUFBTCxHQUFrQkEsVUFBbEIsQ0FUNEYsQ0FTL0Q7QUFDaEM7O0FBWEw7QUFBQTtBQUFBLDBCQWFVRSxHQWJWLEVBYWU7QUFDUCxXQUFLRCxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsV0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLDJCQWtCV3ZGLElBbEJYLEVBa0JnQjtBQUNSLFVBQUcsS0FBS3NGLFdBQVIsRUFBb0I7QUFDaEIsWUFBRyxLQUFLQyxHQUFMLENBQVNyRCxDQUFULEdBQWMsS0FBS0EsQ0FBTCxHQUFPLEtBQUtFLEtBQVosR0FBb0IsS0FBS2lELFVBQTFDLEVBQXNEO0FBQ2xELGVBQUtuRCxDQUFMLEdBQVM1QixJQUFJLENBQUNrRixHQUFMLENBQVMsS0FBS0wsTUFBZCxFQUFzQixLQUFLSSxHQUFMLENBQVNyRCxDQUFULEdBQVcsS0FBS0UsS0FBaEIsR0FBc0IsS0FBS2lELFVBQWpELENBQVQsQ0FGWSxDQUV5RDs7QUFDekUsWUFBRyxLQUFLRSxHQUFMLENBQVNyRCxDQUFULEdBQWMsS0FBS0EsQ0FBTCxHQUFTLEtBQUttRCxVQUEvQixFQUNJLEtBQUtuRCxDQUFMLEdBQVM1QixJQUFJLENBQUNtRixHQUFMLENBQVMsQ0FBVCxFQUFZLEtBQUtGLEdBQUwsQ0FBU3JELENBQVQsR0FBVyxLQUFLbUQsVUFBNUIsQ0FBVDtBQUVKLFlBQUcsS0FBS0UsR0FBTCxDQUFTbEQsQ0FBVCxHQUFjLEtBQUtBLENBQUwsR0FBTyxLQUFLQyxNQUFaLEdBQXFCLEtBQUsrQyxVQUEzQyxFQUF1RDtBQUNuRCxlQUFLaEQsQ0FBTCxHQUFTL0IsSUFBSSxDQUFDa0YsR0FBTCxDQUFTLEtBQUtKLE1BQWQsRUFBc0IsS0FBS0csR0FBTCxDQUFTbEQsQ0FBVCxHQUFXLEtBQUtDLE1BQWhCLEdBQXVCLEtBQUsrQyxVQUFsRCxDQUFUO0FBQ0osWUFBRyxLQUFLRSxHQUFMLENBQVNsRCxDQUFULEdBQWMsS0FBS0EsQ0FBTCxHQUFTLEtBQUtnRCxVQUEvQixFQUEyQztBQUN2QyxlQUFLaEQsQ0FBTCxHQUFTL0IsSUFBSSxDQUFDbUYsR0FBTCxDQUFTLENBQVQsRUFBWSxLQUFLRixHQUFMLENBQVNsRCxDQUFULEdBQVcsS0FBS2dELFVBQTVCLENBQVQ7QUFDUDtBQUNKO0FBOUJMO0FBQUE7QUFBQSxzQ0FnQ3FCO0FBQ2IsV0FBS25ELENBQUwsR0FBUyxLQUFLRSxLQUFkO0FBQ0EsV0FBS0MsQ0FBTCxHQUFTLEtBQUtDLE1BQWQ7QUFDSDtBQW5DTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVPLElBQU0rQixjQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLGdDQUF3QjtBQUFBOztBQUFBLFFBQVgxQixTQUFXLFFBQVhBLFNBQVc7O0FBQUE7O0FBQ3BCLHdGQUFNO0FBQ0ZBLGVBQVMsRUFBRUEsU0FEVDtBQUVGK0MsZ0JBQVUsRUFBRSxHQUZWO0FBR0ZDLGlCQUFXLEVBQUU7QUFIWCxLQUFOO0FBS0EsVUFBS0MsU0FBTCxHQUFpQixNQUFLQyxZQUFMLEVBQWpCO0FBTm9CO0FBT3ZCOztBQVJMO0FBQUE7QUFBQSxtQ0FVa0I7QUFDVixVQUFNQyxJQUFJLEdBQUdDLG1CQUFPLENBQUUsMERBQUYsQ0FBcEI7O0FBQ0EsVUFBTUgsU0FBUyxHQUFHLEVBQWxCO0FBQ0FFLFVBQUksQ0FBQ0UsTUFBTCxDQUFZMUIsT0FBWixDQUFvQixVQUFBMkIsS0FBSyxFQUFHO0FBRXhCO0FBQ0FMLGlCQUFTLENBQUNLLEtBQUssQ0FBQzFCLElBQVAsQ0FBVCxHQUF3QjBCLEtBQUssQ0FBQ0gsSUFBTixDQUFXSSxNQUFYLENBQWtCLFVBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxHQUFDLENBQU47QUFBQSxTQUFuQixDQUF4QjtBQUNILE9BSkQ7QUFLQSxhQUFPUCxTQUFQO0FBQ0g7QUFuQkw7QUFBQTtBQUFBLGlDQXFCaUJyQixJQXJCakIsRUFxQmlFO0FBQUEsVUFBMUMxQixLQUEwQyx1RUFBbEMsRUFBa0M7QUFBQSxVQUE5QkMsTUFBOEIsdUVBQXJCLElBQXFCO0FBQUEsVUFBZkMsT0FBZSx1RUFBTCxJQUFLO0FBQ3pELDhGQUEwQixLQUFLNkMsU0FBTCxDQUFlckIsSUFBZixDQUExQixFQUFnRDFCLEtBQWhELEVBQXVEQyxNQUF2RCxFQUErREMsT0FBL0Q7QUFDSDtBQXZCTDs7QUFBQTtBQUFBLEVBQW9DcUQseURBQXBDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFFTyxJQUFNQyxRQUFiO0FBQUE7QUFBQTtBQUNJLHNCQUFjO0FBQUE7O0FBQ1YsU0FBS0MsWUFBTCxHQUFvQixFQUFwQixDQURVLENBQ2E7O0FBQ3ZCLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0g7O0FBSkw7QUFBQTtBQUFBLG9DQU1vQlQsSUFOcEIsRUFNeUI7QUFBQTs7QUFDakJBLFVBQUksQ0FBQ0UsTUFBTCxDQUFZMUIsT0FBWixDQUFvQixVQUFBMkIsS0FBSyxFQUFJO0FBQUE7O0FBQ3pCLFlBQUdBLEtBQUssQ0FBQ08sSUFBTixJQUFhLGFBQWhCO0FBQ0k7O0FBRUEscUNBQUksQ0FBQ0YsWUFBTCxFQUFrQkcsSUFBbEIsOENBQTBCUixLQUFLLENBQUNTLE9BQWhDO0FBQ1AsT0FMRCxFQURpQixDQU9qQjs7QUFDQSxXQUFLSixZQUFMLENBQWtCRyxJQUFsQixDQUF1QjtBQUFDdkUsU0FBQyxFQUFDLENBQUg7QUFBS0csU0FBQyxFQUFDLENBQVA7QUFBU0QsYUFBSyxFQUFDLElBQWY7QUFBb0JFLGNBQU0sRUFBQztBQUEzQixPQUF2QjtBQUNBLFdBQUtnRSxZQUFMLENBQWtCRyxJQUFsQixDQUF1QjtBQUFDdkUsU0FBQyxFQUFDLENBQUg7QUFBS0csU0FBQyxFQUFDLENBQVA7QUFBU0QsYUFBSyxFQUFDLENBQWY7QUFBaUJFLGNBQU0sRUFBQztBQUF4QixPQUF2QixFQVRpQixDQVVqQjs7QUFDQSxXQUFLZ0UsWUFBTCxDQUFrQkcsSUFBbEIsQ0FBdUI7QUFBQ3ZFLFNBQUMsRUFBQyxJQUFIO0FBQVFHLFNBQUMsRUFBQyxDQUFWO0FBQVlELGFBQUssRUFBQyxJQUFsQjtBQUF1QkUsY0FBTSxFQUFDO0FBQTlCLE9BQXZCO0FBQ0g7QUFsQkw7QUFBQTtBQUFBLHFDQW9CcUJ2QyxJQXBCckIsRUFvQjBCO0FBQ2xCLFdBQUt3RyxNQUFMLENBQVlFLElBQVosQ0FBaUI7QUFDYnZFLFNBQUMsRUFBRW5DLElBQUksQ0FBQ21DLENBREs7QUFDSDtBQUNWRyxTQUFDLEVBQUV0QyxJQUFJLENBQUNzQyxDQUZLO0FBR2JrRCxXQUFHLEVBQUV4RixJQUhRLENBR0g7O0FBSEcsT0FBakI7QUFLSDtBQTFCTDtBQUFBO0FBQUEsMkJBNEJXQyxJQTVCWCxFQTRCZ0I7QUFDUixXQUFLMkcsY0FBTCxDQUFvQjNHLElBQXBCLEVBRFEsQ0FDa0I7QUFDN0I7QUE5Qkw7QUFBQTtBQUFBLG1DQWdDbUJBLElBaENuQixFQWdDd0I7QUFBQTs7QUFBQSxpQ0FDUm1HLENBRFE7QUFFWixZQUFJcEcsSUFBSSxHQUFHLE1BQUksQ0FBQ3dHLE1BQUwsQ0FBWUosQ0FBWixDQUFYO0FBQ0EsWUFBSTNFLElBQUksR0FBR3pCLElBQUksQ0FBQ21DLENBQWhCO0FBQ0EsWUFBSVQsSUFBSSxHQUFHMUIsSUFBSSxDQUFDc0MsQ0FBaEI7QUFDQSxZQUFJSCxDQUFDLEdBQUduQyxJQUFJLENBQUN3RixHQUFMLENBQVNyRCxDQUFqQjtBQUNBLFlBQUlHLENBQUMsR0FBR3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU2xELENBQWpCOztBQUNBLFlBQUdILENBQUMsR0FBQ1YsSUFBTCxFQUFVO0FBQUM7QUFDUCxnQkFBSSxDQUFDOEUsWUFBTCxDQUFrQmhDLE9BQWxCLENBQTBCLFVBQUFzQyxLQUFLLEVBQUU7QUFDN0IsaUJBQUs7QUFDQ3BGLGdCQUFJLEdBQUc7QUFDUCxhQURBLEdBQ0c7QUFDSHpCLGdCQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRCxDQUZ4QixHQUU0QjtBQUM1Qm5DLGdCQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCQyxLQUh6QixHQUdrQ3dFLEtBQUssQ0FBQzFFLENBSHpDLElBSUE7QUFDRUEsYUFBQyxHQUNEbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkQsQ0FEeEIsR0FFQW5DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JDLEtBRnpCLEdBRWtDd0UsS0FBSyxDQUFDMUUsQ0FQekMsSUFTQTtBQUNFRyxhQUFDLEdBQ0R0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUR6QixHQUMrQnVFLEtBQUssQ0FBQ3ZFLENBQU4sR0FBVXVFLEtBQUssQ0FBQ3RFLE1BWGhELElBYUVELENBQUMsR0FDRHRDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JFLENBRHhCLEdBRUF0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRyxNQUZ6QixHQUVtQ3NFLEtBQUssQ0FBQ3ZFLENBaEI5QyxFQWlCQztBQUFHO0FBQ0FILGVBQUMsR0FBRzVCLElBQUksQ0FBQ2tGLEdBQUwsQ0FBU3RELENBQUMsR0FBR25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQTVCLEdBQWdDbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkMsS0FBakUsRUFBd0V3RSxLQUFLLENBQUMxRSxDQUE5RSxFQUFnRjtBQUFoRixnQkFDRW5DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBRDFCLEdBQzhCbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkMsS0FEMUQ7O0FBRUEsb0JBQUksQ0FBQ3lFLDBCQUFMLENBQWdDOUcsSUFBaEMsRUFBcUNvRyxDQUFyQyxFQUhILENBRzJDOztBQUMzQztBQUNKLFdBdkJELEVBRE0sQ0EwQk47OztBQUNBLGVBQUksSUFBSVcsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDLE1BQUksQ0FBQ1AsTUFBTCxDQUFZaEQsTUFBM0IsRUFBa0N1RCxDQUFDLEVBQW5DLEVBQXNDO0FBQ2xDLGdCQUFJRixLQUFLLEdBQUcsTUFBSSxDQUFDTCxNQUFMLENBQVlPLENBQVosQ0FBWjs7QUFDQSxnQkFBRy9HLElBQUksSUFBSTZHLEtBQVgsRUFBaUI7QUFBQztBQUNkLGtCQUFLcEYsSUFBSSxHQUFHLENBQVAsR0FBV3pCLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQW5DLEdBQXVDbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkMsS0FBaEUsR0FBeUV3RSxLQUFLLENBQUNyQixHQUFOLENBQVVyRCxDQUFWLEdBQWMwRSxLQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCRCxDQUFqSCxJQUNHQSxDQUFDLEdBQUduQyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRCxDQUE1QixHQUFnQ25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JDLEtBQXpELEdBQWtFd0UsS0FBSyxDQUFDckIsR0FBTixDQUFVckQsQ0FBVixHQUFjMEUsS0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkQsQ0FEM0csSUFFR0csQ0FBQyxHQUFHdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkUsQ0FBN0IsR0FBbUN1RSxLQUFLLENBQUNyQixHQUFOLENBQVVsRCxDQUFWLEdBQWN1RSxLQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCRSxDQUF2QyxHQUEyQ3VFLEtBQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJHLE1BRnpHLElBR0dELENBQUMsR0FBR3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JFLENBQTVCLEdBQWdDdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkcsTUFBekQsR0FBbUVzRSxLQUFLLENBQUNyQixHQUFOLENBQVVsRCxDQUFWLEdBQWN1RSxLQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCRSxDQUgvRyxFQUlDO0FBQ0dILGlCQUFDLEdBQUc1QixJQUFJLENBQUNrRixHQUFMLENBQVN0RCxDQUFDLEdBQUduQyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRCxDQUE1QixHQUFnQ25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JDLEtBQWpFLEVBQXdFd0UsS0FBSyxDQUFDckIsR0FBTixDQUFVckQsQ0FBVixHQUFjMEUsS0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkQsQ0FBL0csSUFDVW5DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBRGxDLEdBQ3NDbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkMsS0FEbEU7O0FBRUEsc0JBQUksQ0FBQzJFLGdCQUFMLENBQXNCaEgsSUFBdEIsRUFBMkI2RyxLQUEzQixFQUFpQ1QsQ0FBakMsRUFBbUNXLENBQW5DLEVBSEgsQ0FHeUM7O0FBQ3pDO0FBQ0o7QUFDSjtBQUNKOztBQVNELFlBQUc1RSxDQUFDLEdBQUNWLElBQUwsRUFBVTtBQUFDO0FBQ1AsZ0JBQUksQ0FBQzhFLFlBQUwsQ0FBa0JoQyxPQUFsQixDQUEwQixVQUFBc0MsS0FBSyxFQUFFO0FBQzdCLGdCQUFLcEYsSUFBSSxHQUFHLENBQVAsR0FBV3pCLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQXBDLEdBQTBDMEUsS0FBSyxDQUFDMUUsQ0FBTixHQUFRMEUsS0FBSyxDQUFDeEUsS0FBekQsSUFDQ0YsQ0FBQyxHQUFHbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkQsQ0FBN0IsR0FBbUMwRSxLQUFLLENBQUMxRSxDQUFOLEdBQVEwRSxLQUFLLENBQUN4RSxLQURqRCxJQUVDQyxDQUFDLEdBQUd0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUE3QixHQUFtQ3VFLEtBQUssQ0FBQ3ZFLENBQU4sR0FBVXVFLEtBQUssQ0FBQ3RFLE1BRm5ELElBR0NELENBQUMsR0FBR3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JFLENBQTVCLEdBQThCdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkcsTUFBdkQsR0FBaUVzRSxLQUFLLENBQUN2RSxDQUgxRSxFQUlDO0FBQ0dILGVBQUMsR0FBRzVCLElBQUksQ0FBQ21GLEdBQUwsQ0FBU3ZELENBQUMsR0FBR25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQXJDLEVBQXdDMEUsS0FBSyxDQUFDMUUsQ0FBTixHQUFRMEUsS0FBSyxDQUFDeEUsS0FBdEQsSUFBOERyQyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRCxDQUExRjs7QUFDQSxvQkFBSSxDQUFDMkUsMEJBQUwsQ0FBZ0M5RyxJQUFoQyxFQUFxQ29HLENBQXJDO0FBQ0g7QUFDSixXQVRELEVBRE0sQ0FZTjs7O0FBQ0EsZUFBSSxJQUFJVyxFQUFDLEdBQUMsQ0FBVixFQUFhQSxFQUFDLEdBQUMsTUFBSSxDQUFDUCxNQUFMLENBQVloRCxNQUEzQixFQUFrQ3VELEVBQUMsRUFBbkMsRUFBc0M7QUFDbEMsZ0JBQUlGLE1BQUssR0FBRyxNQUFJLENBQUNMLE1BQUwsQ0FBWU8sRUFBWixDQUFaOztBQUNBLGdCQUFHL0csSUFBSSxJQUFJNkcsTUFBWCxFQUFpQjtBQUFDO0FBQ2Qsa0JBQUtwRixJQUFJLEdBQUcsQ0FBUCxHQUFXekIsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkQsQ0FBcEMsR0FBeUMwRSxNQUFLLENBQUNyQixHQUFOLENBQVVyRCxDQUFWLEdBQWMwRSxNQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCRCxDQUF2QyxHQUEyQzBFLE1BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJDLEtBQTlHLElBQ0dGLENBQUMsR0FBR25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQTdCLEdBQWtDMEUsTUFBSyxDQUFDckIsR0FBTixDQUFVckQsQ0FBVixHQUFjMEUsTUFBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkQsQ0FBdkMsR0FBMkMwRSxNQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCQyxLQUR4RyxJQUVHQyxDQUFDLEdBQUd0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUE3QixHQUFtQ3VFLE1BQUssQ0FBQ3JCLEdBQU4sQ0FBVWxELENBQVYsR0FBY3VFLE1BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJFLENBQXZDLEdBQTJDdUUsTUFBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkcsTUFGekcsSUFHR0QsQ0FBQyxHQUFHdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkUsQ0FBNUIsR0FBZ0N0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRyxNQUF6RCxHQUFtRXNFLE1BQUssQ0FBQ3JCLEdBQU4sQ0FBVWxELENBQVYsR0FBY3VFLE1BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJFLENBSC9HLEVBSUM7QUFDR0gsaUJBQUMsR0FBRzVCLElBQUksQ0FBQ21GLEdBQUwsQ0FBU3ZELENBQUMsR0FBR25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQXJDLEVBQXdDMEUsTUFBSyxDQUFDckIsR0FBTixDQUFVckQsQ0FBVixHQUFjMEUsTUFBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkQsQ0FBdkMsR0FBMkMwRSxNQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCQyxLQUE1RyxJQUFvSHJDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQWhKOztBQUNBLHNCQUFJLENBQUM2RSxnQkFBTCxDQUFzQmhILElBQXRCLEVBQTJCNkcsTUFBM0IsRUFBaUNULENBQWpDLEVBQW1DVyxFQUFuQztBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQU1ELFlBQUd6RSxDQUFDLEdBQUNaLElBQUwsRUFBVTtBQUFDO0FBQ1AsZ0JBQUksQ0FBQzZFLFlBQUwsQ0FBa0JoQyxPQUFsQixDQUEwQixVQUFBc0MsS0FBSyxFQUFFO0FBQzdCLGdCQUFLbkYsSUFBSSxHQUFHLENBQVAsR0FBVzFCLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JFLENBQW5DLEdBQXVDdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkcsTUFBaEUsR0FBMEVzRSxLQUFLLENBQUN2RSxDQUFqRixJQUNHQSxDQUFDLEdBQUd0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUE1QixHQUFnQ3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JHLE1BQXpELEdBQW1Fc0UsS0FBSyxDQUFDdkUsQ0FEM0UsSUFFR0gsQ0FBQyxHQUFHbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkQsQ0FBN0IsR0FBbUMwRSxLQUFLLENBQUMxRSxDQUFOLEdBQVUwRSxLQUFLLENBQUN4RSxLQUZyRCxJQUdHRixDQUFDLEdBQUduQyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRCxDQUE1QixHQUE4Qm5DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JDLEtBQXZELEdBQWdFd0UsS0FBSyxDQUFDMUUsQ0FIM0UsRUFJQztBQUNHRyxlQUFDLEdBQUcvQixJQUFJLENBQUNrRixHQUFMLENBQVNuRCxDQUFDLEdBQUd0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUE1QixHQUFnQ3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JHLE1BQWpFLEVBQXlFc0UsS0FBSyxDQUFDdkUsQ0FBL0UsSUFBbUZ0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUEzRyxHQUErR3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JHLE1BQTNJOztBQUNBLG9CQUFJLENBQUN1RSwwQkFBTCxDQUFnQzlHLElBQWhDLEVBQXFDb0csQ0FBckM7QUFDSDtBQUNKLFdBVEQsRUFETSxDQVlOOzs7QUFDQSxlQUFJLElBQUlXLEdBQUMsR0FBQyxDQUFWLEVBQWFBLEdBQUMsR0FBQyxNQUFJLENBQUNQLE1BQUwsQ0FBWWhELE1BQTNCLEVBQWtDdUQsR0FBQyxFQUFuQyxFQUFzQztBQUNsQyxnQkFBSUYsT0FBSyxHQUFHLE1BQUksQ0FBQ0wsTUFBTCxDQUFZTyxHQUFaLENBQVo7O0FBQ0EsZ0JBQUcvRyxJQUFJLElBQUk2RyxPQUFYLEVBQWlCO0FBQUM7QUFDZCxrQkFBS25GLElBQUksR0FBRyxDQUFQLEdBQVcxQixJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUFuQyxHQUF1Q3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JHLE1BQWhFLEdBQTBFc0UsT0FBSyxDQUFDckIsR0FBTixDQUFVbEQsQ0FBVixHQUFjdUUsT0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkUsQ0FBbEgsSUFDR0EsQ0FBQyxHQUFHdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkUsQ0FBNUIsR0FBZ0N0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRyxNQUF6RCxHQUFtRXNFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVWxELENBQVYsR0FBY3VFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJFLENBRDVHLElBRUdILENBQUMsR0FBR25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQTdCLEdBQW1DMEUsT0FBSyxDQUFDckIsR0FBTixDQUFVckQsQ0FBVixHQUFjMEUsT0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkQsQ0FBdkMsR0FBMkMwRSxPQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCQyxLQUZ6RyxJQUdHRixDQUFDLEdBQUduQyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRCxDQUE1QixHQUFnQ25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JHLE1BQXpELEdBQW1Fc0UsT0FBSyxDQUFDckIsR0FBTixDQUFVckQsQ0FBVixHQUFjMEUsT0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkQsQ0FIL0csRUFJQztBQUNHRyxpQkFBQyxHQUFHL0IsSUFBSSxDQUFDa0YsR0FBTCxDQUFTbkQsQ0FBQyxHQUFHdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkUsQ0FBNUIsR0FBZ0N0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRyxNQUFqRSxFQUF5RXNFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVWxELENBQVYsR0FBY3VFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJFLENBQWhILElBQ1V0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQURsQyxHQUNzQ3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JHLE1BRGxFOztBQUVBLHNCQUFJLENBQUN5RSxnQkFBTCxDQUFzQmhILElBQXRCLEVBQTJCNkcsT0FBM0IsRUFBaUNULENBQWpDLEVBQW1DVyxHQUFuQztBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQU9ELFlBQUd6RSxDQUFDLEdBQUNaLElBQUwsRUFBVTtBQUFDO0FBQ1AsZ0JBQUksQ0FBQzZFLFlBQUwsQ0FBa0JoQyxPQUFsQixDQUEwQixVQUFBc0MsS0FBSyxFQUFFO0FBQzdCLGdCQUFLbkYsSUFBSSxHQUFHLENBQVAsR0FBVzFCLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JFLENBQXBDLEdBQTBDdUUsS0FBSyxDQUFDdkUsQ0FBTixHQUFRdUUsS0FBSyxDQUFDdEUsTUFBekQsSUFDQ0QsQ0FBQyxHQUFHdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkUsQ0FBN0IsR0FBbUN1RSxLQUFLLENBQUN2RSxDQUFOLEdBQVF1RSxLQUFLLENBQUN0RSxNQURqRCxJQUVDSixDQUFDLEdBQUduQyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRCxDQUE3QixHQUFtQzBFLEtBQUssQ0FBQzFFLENBQU4sR0FBVTBFLEtBQUssQ0FBQ3hFLEtBRm5ELElBR0NGLENBQUMsR0FBR25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQTVCLEdBQThCbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkMsS0FBdkQsR0FBZ0V3RSxLQUFLLENBQUMxRSxDQUh6RSxFQUlDO0FBQ0dHLGVBQUMsR0FBRy9CLElBQUksQ0FBQ21GLEdBQUwsQ0FBU3BELENBQUMsR0FBR3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JFLENBQXJDLEVBQXdDdUUsS0FBSyxDQUFDdkUsQ0FBTixHQUFRdUUsS0FBSyxDQUFDdEUsTUFBdEQsSUFBK0R2QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUEzRjs7QUFDQSxvQkFBSSxDQUFDd0UsMEJBQUwsQ0FBZ0M5RyxJQUFoQyxFQUFxQ29HLENBQXJDO0FBQ0g7QUFDSixXQVREOztBQVdBLGVBQUksSUFBSVcsR0FBQyxHQUFDLENBQVYsRUFBYUEsR0FBQyxHQUFDLE1BQUksQ0FBQ1AsTUFBTCxDQUFZaEQsTUFBM0IsRUFBa0N1RCxHQUFDLEVBQW5DLEVBQXNDO0FBQ2xDLGdCQUFJRixPQUFLLEdBQUcsTUFBSSxDQUFDTCxNQUFMLENBQVlPLEdBQVosQ0FBWjs7QUFDQSxnQkFBRy9HLElBQUksSUFBSTZHLE9BQVgsRUFBaUI7QUFBQztBQUNkLGtCQUFLbkYsSUFBSSxHQUFHLENBQVAsR0FBVzFCLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JFLENBQXBDLEdBQXlDdUUsT0FBSyxDQUFDckIsR0FBTixDQUFVbEQsQ0FBVixHQUFjdUUsT0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkUsQ0FBdkMsR0FBMkN1RSxPQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCRyxNQUE5RyxJQUNHRCxDQUFDLEdBQUd0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUE3QixHQUFrQ3VFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVWxELENBQVYsR0FBY3VFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJFLENBQXZDLEdBQTJDdUUsT0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkcsTUFEeEcsSUFFR0osQ0FBQyxHQUFHbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkQsQ0FBN0IsR0FBbUMwRSxPQUFLLENBQUNyQixHQUFOLENBQVVyRCxDQUFWLEdBQWMwRSxPQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCRCxDQUF2QyxHQUEyQzBFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJDLEtBRnpHLElBR0dGLENBQUMsR0FBR25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQTVCLEdBQWdDbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkMsS0FBekQsR0FBa0V3RSxPQUFLLENBQUNyQixHQUFOLENBQVVyRCxDQUFWLEdBQWMwRSxPQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCRCxDQUg5RyxFQUlDO0FBQ0dHLGlCQUFDLEdBQUcvQixJQUFJLENBQUNtRixHQUFMLENBQVNwRCxDQUFDLEdBQUd0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUFyQyxFQUF3Q3VFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVWxELENBQVYsR0FBY3VFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJFLENBQXZDLEdBQTJDdUUsT0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkcsTUFBNUcsSUFBcUh2QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUFqSjs7QUFDQSxzQkFBSSxDQUFDMEUsZ0JBQUwsQ0FBc0JoSCxJQUF0QixFQUEyQjZHLE9BQTNCLEVBQWlDVCxDQUFqQyxFQUFtQ1csR0FBbkM7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFFRC9HLFlBQUksQ0FBQ21DLENBQUwsR0FBU0EsQ0FBVDtBQUNBbkMsWUFBSSxDQUFDc0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0F0QyxZQUFJLENBQUN3RixHQUFMLENBQVNyRCxDQUFULEdBQWFBLENBQWI7QUFDQW5DLFlBQUksQ0FBQ3dGLEdBQUwsQ0FBU2xELENBQVQsR0FBYUEsQ0FBYjtBQXpKWTs7QUFDaEIsV0FBSSxJQUFJOEQsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDLEtBQUtJLE1BQUwsQ0FBWWhELE1BQTNCLEVBQW1DNEMsQ0FBQyxFQUFwQyxFQUF1QztBQUFBLGNBQS9CQSxDQUErQjtBQXlKdEMsT0ExSmUsQ0EwSmY7O0FBQ0osS0EzTEwsQ0EyTEs7O0FBM0xMO0FBQUE7QUFBQSxxQ0FpTXFCcEcsSUFqTXJCLEVBaU0wQjZHLEtBak0xQixFQWlNZ0NJLFdBak1oQyxFQWlNNENDLFlBak01QyxFQWlNeUQ7QUFDakQsVUFBR2xILElBQUksQ0FBQ3dGLEdBQUwsQ0FBUzJCLGNBQVQsQ0FBd0IsTUFBeEIsS0FBbUNOLEtBQUssQ0FBQ3JCLEdBQU4sQ0FBVTJCLGNBQVYsQ0FBeUIsTUFBekIsQ0FBdEMsRUFBdUU7QUFBQztBQUNwRSxZQUFHbkgsSUFBSSxDQUFDd0YsR0FBTCxDQUFTaEIsSUFBVCxJQUFpQixPQUFqQixJQUE0QnFDLEtBQUssQ0FBQ3JCLEdBQU4sQ0FBVWhCLElBQVYsSUFBa0IsS0FBakQsRUFBdUQ7QUFBQztBQUNwRDtBQUNBLGVBQUtnQyxNQUFMLEdBQVlZLGtFQUFlLENBQUNDLE1BQWhCLENBQXVCLEtBQUtiLE1BQTVCLEVBQW1DUyxXQUFuQyxDQUFaLENBRm1ELENBRVE7O0FBQzNEakgsY0FBSSxDQUFDd0YsR0FBTCxhQUhtRCxDQUdqQzs7QUFDbEIsZUFBS2dCLE1BQUwsR0FBWVksa0VBQWUsQ0FBQ0MsTUFBaEIsQ0FBdUIsS0FBS2IsTUFBNUIsRUFBbUNVLFlBQW5DLENBQVosQ0FKbUQsQ0FJUzs7QUFDNURMLGVBQUssQ0FBQ3JCLEdBQU4sQ0FBVThCLEtBQVYsR0FMbUQsQ0FLaEM7QUFDdEIsU0FQa0UsQ0FRbkU7QUFDQTtBQUNBOztBQUNIO0FBQ0osS0E5TUwsQ0E4TUs7O0FBOU1MO0FBQUE7QUFBQSwrQ0FvTitCdEgsSUFwTi9CLEVBb05vQ2lILFdBcE5wQyxFQW9OZ0Q7QUFBQztBQUN6QyxVQUFHakgsSUFBSSxDQUFDd0YsR0FBTCxDQUFTMkIsY0FBVCxDQUF3QixNQUF4QixDQUFILEVBQW1DO0FBQUM7QUFDaEMsWUFBR25ILElBQUksQ0FBQ3dGLEdBQUwsQ0FBU2hCLElBQVQsSUFBaUIsT0FBcEIsRUFBNEI7QUFDeEJ4RSxjQUFJLENBQUN3RixHQUFMLENBQVM1QixJQUFULEdBRHdCLENBQ1I7O0FBQ2hCLGVBQUs0QyxNQUFMLEdBQVlZLGtFQUFlLENBQUNDLE1BQWhCLENBQXVCLEtBQUtiLE1BQTVCLEVBQW1DUyxXQUFuQyxDQUFaLENBRndCLENBRW9DO0FBQy9EO0FBQ0o7QUFDSjtBQTNOTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSE8sSUFBTU0sWUFBYjtBQUFBO0FBQUE7QUFDSSwwQkFBYztBQUFBOztBQUFBOztBQUNWLFNBQUtDLEVBQUwsR0FBVSxLQUFWO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksS0FBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVosQ0FMVSxDQU9WOztBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFJQyxHQUFKLENBQVEsQ0FDbEIsQ0FBQyxFQUFELEVBQUksTUFBSixDQURrQixFQUNOLENBQUMsRUFBRCxFQUFJLE9BQUosQ0FETSxFQUNPLENBQUMsRUFBRCxFQUFJLElBQUosQ0FEUCxFQUNpQixDQUFDLEVBQUQsRUFBSSxNQUFKLENBRGpCLEVBQzZCLENBQUMsRUFBRCxFQUFJLE1BQUosQ0FEN0IsQ0FBUixDQUFkO0FBSUFDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ0MsS0FBRDtBQUFBLGFBQVcsS0FBSSxDQUFDL0MsTUFBTCxDQUFZK0MsS0FBWixFQUFtQixJQUFuQixDQUFYO0FBQUEsS0FBckM7QUFDQUYsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxLQUFEO0FBQUEsYUFBVyxLQUFJLENBQUMvQyxNQUFMLENBQVkrQyxLQUFaLEVBQW1CLEtBQW5CLENBQVg7QUFBQSxLQUFuQztBQUNIOztBQWZMO0FBQUE7QUFBQSwyQkFpQldBLEtBakJYLEVBaUJrQkMsT0FqQmxCLEVBaUIyQjtBQUNuQixVQUFHLEtBQUtMLE1BQUwsQ0FBWU0sR0FBWixDQUFnQkYsS0FBSyxDQUFDRyxPQUF0QixDQUFILEVBQW1DO0FBQy9CSCxhQUFLLENBQUNJLGNBQU47QUFDQUosYUFBSyxDQUFDSyxlQUFOO0FBQ0EsYUFBSyxLQUFLVCxNQUFMLENBQVlVLEdBQVosQ0FBZ0JOLEtBQUssQ0FBQ0csT0FBdEIsQ0FBTCxJQUF1Q0YsT0FBdkMsQ0FIK0IsQ0FHZ0I7QUFDbEQ7QUFDSjtBQXZCTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtDQUN5Qzs7Q0FDTDs7Q0FDVzs7Q0FDRjs7Q0FDRjs7QUFDM0M7QUFDQTtBQUVPLElBQU1NLElBQWI7QUFBQTtBQUFBO0FBQ0k7QUFDQTtBQUNBLGtCQUE2QztBQUFBLG1GQUFILEVBQUc7QUFBQSwwQkFBaENuRyxLQUFnQztBQUFBLFFBQWhDQSxLQUFnQywyQkFBeEIsR0FBd0I7QUFBQSwyQkFBbkJFLE1BQW1CO0FBQUEsUUFBbkJBLE1BQW1CLDRCQUFWLEdBQVU7O0FBQUE7O0FBQ3pDLFNBQUtrRyxNQUFMLEdBQWMsSUFBSUMsOENBQUosQ0FBV3JHLEtBQVgsRUFBaUJFLE1BQWpCLENBQWQ7QUFDQSxTQUFLa0csTUFBTCxDQUFZRSxVQUFaLENBQXVCO0FBQzVCQyxTQUFHLEVBQUUsYUFEdUI7QUFFNUJ4SCxZQUFNLEVBQUUsZ0JBRm9CO0FBRzVCeUgsV0FBSyxFQUFFLGVBSHFCO0FBSTVCQyxXQUFLLEVBQUU7QUFKcUIsS0FBdkI7QUFNQSxTQUFLQyxPQUFMLEdBQWUsSUFBSXhCLDJEQUFKLEVBQWY7QUFDQSxTQUFLeUIsTUFBTCxHQUFjO0FBQ1ZDLGFBQU8sRUFBRSxJQUFJQyxzREFBSixDQUFZLElBQVosQ0FEQztBQUVWQyxVQUFJLEVBQUUsSUFBSUMsZ0RBQUosQ0FBUyxJQUFULENBRkk7QUFHVkMsZUFBUyxFQUFFLElBQUlDLDJEQUFKLENBQWMsSUFBZCxDQUhEO0FBSVZDLGNBQVEsRUFBRSxJQUFJQyx5REFBSixDQUFhLElBQWIsQ0FKQTtBQUtWQyxhQUFPLEVBQUUsSUFBSUMsdURBQUosQ0FBWSxJQUFaO0FBTEMsS0FBZDtBQU9BLFNBQUtDLFlBQUwsR0FBb0IsS0FBS1gsTUFBTCxDQUFZQyxPQUFoQztBQUNBLFNBQUtVLFlBQUwsQ0FBa0JDLElBQWxCO0FBQ0g7O0FBckJMO0FBQUE7QUFBQSxnQ0F1QmdCQyxNQXZCaEIsRUF1QndCO0FBQ2hCLGNBQVFBLE1BQVI7QUFDSSxhQUFLQyw0Q0FBSyxDQUFDQyxNQUFYO0FBQ0ksaUJBQU8sS0FBS2YsTUFBTCxDQUFZRyxJQUFuQjs7QUFDSixhQUFLVyw0Q0FBSyxDQUFDRSxVQUFYO0FBQ0ksaUJBQU8sS0FBS2hCLE1BQUwsQ0FBWUssU0FBbkI7O0FBQ0osYUFBS1MsNENBQUssQ0FBQ0csU0FBWDtBQUNJLGlCQUFPLEtBQUtqQixNQUFMLENBQVlPLFFBQW5COztBQUNKLGFBQUtPLDRDQUFLLENBQUNJLFFBQVg7QUFDSSxpQkFBTyxLQUFLbEIsTUFBTCxDQUFZUyxPQUFuQjs7QUFDSjtBQUNJLGlCQUFPLEtBQUtULE1BQUwsQ0FBWUcsSUFBbkI7QUFWUjtBQVlIO0FBcENMO0FBQUE7QUFBQSwwQkFzQ1VsSixJQXRDVixFQXNDZTtBQUFBOztBQUNQLFVBQUcsS0FBSzBKLFlBQUwsQ0FBa0JFLE1BQWxCLElBQTRCQyw0Q0FBSyxDQUFDSyxPQUFyQyxFQUE2QztBQUN6QyxhQUFLUixZQUFMLEdBQWtCLEtBQUtTLFdBQUwsQ0FBaUIsS0FBS1QsWUFBTCxDQUFrQkUsTUFBbkMsQ0FBbEI7QUFDQSxhQUFLRixZQUFMLENBQWtCQyxJQUFsQjtBQUNIOztBQUNELFdBQUtELFlBQUwsQ0FBa0JVLE1BQWxCLENBQXlCcEssSUFBekI7QUFDQXFLLDJCQUFxQixDQUFDLFVBQUFySyxJQUFJO0FBQUEsZUFBSSxLQUFJLENBQUNzSyxLQUFMLENBQVd0SyxJQUFYLENBQUo7QUFBQSxPQUFMLENBQXJCO0FBQ0g7QUE3Q0w7QUFBQTtBQUFBLDBCQStDUztBQUFBOztBQUNEcUssMkJBQXFCLENBQUMsVUFBQXJLLElBQUk7QUFBQSxlQUFJLE1BQUksQ0FBQ3NLLEtBQUwsQ0FBV3RLLElBQVgsQ0FBSjtBQUFBLE9BQUwsQ0FBckI7QUFDSDtBQWpETDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVE8sSUFBTXVLLFdBQWI7QUFBQTtBQUFBO0FBRUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBWUMsVUFBWixFQUF1QjtBQUFBOztBQUNuQixTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBWSxFQUFaO0FBQ0g7O0FBWkw7QUFBQTtBQUFBLDJCQWNVO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLEVBQWpCOztBQUNBLFdBQUssSUFBSW5HLElBQVQsSUFBaUIsS0FBS2lHLFVBQXRCLEVBQWlDO0FBQzdCRSxnQkFBUSxDQUFDakUsSUFBVCxDQUFjLEtBQUtrRSxTQUFMLENBQWVwRyxJQUFmLEVBQXFCLEtBQUtpRyxVQUFMLENBQWdCakcsSUFBaEIsQ0FBckIsQ0FBZDtBQUNIOztBQUNELGFBQU9xRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsUUFBWixDQUFQLENBTEUsQ0FLMkI7QUFDaEM7QUFwQkw7QUFBQTtBQUFBLDhCQXNCY25HLElBdEJkLEVBc0JtQnVHLEdBdEJuQixFQXNCdUI7QUFBQTs7QUFDZixhQUFPLElBQUlGLE9BQUosQ0FBWSxVQUFDRyxPQUFELEVBQVNDLE1BQVQsRUFBa0I7QUFDakMsWUFBTUMsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBZDtBQUNBLGFBQUksQ0FBQ1QsTUFBTCxDQUFZbEcsSUFBWixJQUFvQjBHLEtBQXBCOztBQUNBQSxhQUFLLENBQUNFLE1BQU4sR0FBZTtBQUFBLGlCQUFNSixPQUFPLENBQUN4RyxJQUFELENBQWI7QUFBQSxTQUFmOztBQUNBMEcsYUFBSyxDQUFDSCxHQUFOLEdBQVlBLEdBQVo7QUFDSCxPQUxNLENBQVA7QUFNSDtBQTdCTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7QUFFQU0sTUFBTSxDQUFDRCxNQUFQLEdBQWdCLFlBQUs7QUFDakIsTUFBTUUsVUFBVSxHQUFHLElBQUk5QywwQ0FBSixFQUFuQjtBQUNBOEMsWUFBVSxDQUFDekcsR0FBWDtBQUNILENBSEQsQyxDQUtBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBRU8sSUFBTTBHLFNBQWI7QUFBQTtBQUFBO0FBQ0kscUJBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXdCO0FBQUE7O0FBQ3BCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsbURBQUosQ0FBYUgsSUFBSSxDQUFDL0MsTUFBbEIsQ0FBaEI7QUFDQSxTQUFLbUQsT0FBTCxHQUFlLEtBQUtKLElBQUwsQ0FBVS9DLE1BQVYsQ0FBaUJtRCxPQUFoQztBQUNBLFNBQUt2TCxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS2UsTUFBTCxHQUFjb0ssSUFBSSxDQUFDN0IsWUFBTCxDQUFrQnZJLE1BQWhDO0FBQ0EsU0FBS3lLLGVBQUwsR0FBdUIsS0FBdkIsQ0FQb0IsQ0FPUzs7QUFDN0IsU0FBS0MsYUFBTCxHQUFxQixLQUFyQixDQVJvQixDQVFPOztBQUUzQixTQUFLQyxlQUFMLEdBQXVCLEdBQXZCO0FBRUEsU0FBS0MsVUFBTCxHQUFrQixDQUFsQixDQVpvQixDQVlBO0FBRXZCOztBQWZMO0FBQUE7QUFBQSwyQkFpQlcvTCxJQWpCWCxFQWlCZ0I7QUFDUixVQUFHLEtBQUtJLFFBQUwsS0FBa0IsQ0FBckIsRUFBdUI7QUFDbkIsYUFBS0EsUUFBTCxHQUFnQkosSUFBaEI7QUFDSDs7QUFFRCxXQUFLZ00sY0FBTDs7QUFFQSxVQUFHLEtBQUs3SyxNQUFMLENBQVk4SyxNQUFaLEtBQXVCLENBQTFCLEVBQTRCO0FBQ3hCLGFBQUtDLE9BQUwsQ0FBYWxNLElBQWIsRUFBa0IsTUFBbEIsRUFEd0IsQ0FDRTtBQUM3Qjs7QUFHRCxVQUFHZ0IsNERBQVcsQ0FBQ2EsY0FBWixFQUFILEVBQWdDO0FBQzVCLGFBQUtzSyxTQUFMLENBQWVuTSxJQUFmO0FBQ0gsT0FGRCxNQUVLO0FBQ0QsYUFBS29NLFNBQUwsR0FEQyxDQUNnQjs7QUFDakIsYUFBS1AsYUFBTCxJQUFzQjdMLElBQUksR0FBRyxLQUFLSSxRQUFsQzs7QUFDQSxZQUFHLEtBQUt5TCxhQUFMLEdBQXFCLENBQXhCLEVBQTJCO0FBQ3ZCLGVBQUtBLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxlQUFLSyxPQUFMLENBQWFsTSxJQUFiLEVBQWtCLEtBQWxCO0FBQ0g7QUFDSjs7QUFFRCxXQUFLeUwsUUFBTCxDQUFjeEcsTUFBZCxDQUFxQmpGLElBQXJCO0FBRUEsV0FBS0ksUUFBTCxHQUFnQkosSUFBaEI7QUFDSDtBQTNDTDtBQUFBO0FBQUEsOEJBK0NjQSxJQS9DZCxFQStDbUI7QUFDUCxVQUFHLENBQUMsS0FBSzRMLGVBQVQsRUFBeUI7QUFDckIsYUFBS0EsZUFBTCxHQUF1QixJQUF2QjtBQUNBLGFBQUtILFFBQUwsQ0FBY1ksUUFBZCxDQUF1QixPQUF2QixFQUErQnJNLElBQS9CO0FBQ0g7QUFDUjtBQXBETDtBQUFBO0FBQUEscUNBeURvQjtBQUNaLFdBQUsyTCxPQUFMLENBQWFXLFdBQWIsR0FBMkIsU0FBM0I7QUFDQSxXQUFLWCxPQUFMLENBQWFZLFNBQWIsR0FBeUIsU0FBekI7QUFDQSxXQUFLWixPQUFMLENBQWFhLFNBQWIsR0FBeUIsQ0FBekI7QUFDQSxXQUFLYixPQUFMLENBQWFjLElBQWIsQ0FBbUIsRUFBbkIsRUFBc0IsRUFBdEIsRUFBMEIsS0FBS1gsZUFBL0IsRUFBZ0QsRUFBaEQ7QUFDQSxXQUFLSCxPQUFMLENBQWFlLFFBQWIsQ0FBdUIsRUFBdkIsRUFBMEIsRUFBMUIsRUFBOEIsS0FBS1osZUFBTCxJQUFzQixLQUFLM0ssTUFBTCxDQUFZOEssTUFBWixHQUFtQixLQUFLOUssTUFBTCxDQUFhd0wsV0FBdEQsQ0FBOUIsRUFBa0csRUFBbEcsRUFMWSxDQU1aOztBQUNBLFdBQUtoQixPQUFMLENBQWFpQixNQUFiO0FBQ0g7QUFqRUw7QUFBQTtBQUFBLGdDQW1FZTtBQUNQLFdBQUtyQixJQUFMLENBQVUvQyxNQUFWLENBQWlCcUUsS0FBakIsQ0FBdUIsS0FBS3RCLElBQUwsQ0FBVS9DLE1BQVYsQ0FBaUJwRyxLQUFqQixHQUF5QixFQUFoRCxFQUFvRCxFQUFwRCxFQUF3RDtBQUNwQzlCLFVBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtzTCxhQUFMLEdBQW1CLElBQTlCLENBRHBCLEVBQ3dEO0FBQ3BDLFFBRnBCLEVBRE8sQ0FHaUI7QUFDM0I7QUF2RUw7QUFBQTtBQUFBLDRCQXlFWTdMLElBekVaLEVBeUVpQjRKLE1BekVqQixFQXlFd0I7QUFDWjtBQUNBLFdBQUttQyxVQUFMLElBQWtCLENBQUMvTCxJQUFJLEdBQUcsS0FBS0ksUUFBYixJQUF1QixJQUF6Qzs7QUFDQSxVQUFHLEtBQUsyTCxVQUFMLEdBQWtCLEdBQXJCLEVBQXlCO0FBQUM7QUFDdEIsYUFBSzVCLFdBQUwsQ0FBaUJQLE1BQWpCO0FBQ0g7O0FBR0QsVUFBSWtELE9BQU8sR0FBRyxDQUFkO0FBQ0EsVUFBRyxLQUFLZixVQUFMLEdBQWtCLElBQXJCLEVBQTRCZSxPQUFPLEdBQUUsSUFBVDtBQUM1QixVQUFHLEtBQUtmLFVBQUwsR0FBa0IsR0FBckIsRUFBMkJlLE9BQU8sR0FBRSxHQUFUO0FBQzNCLFVBQUcsS0FBS2YsVUFBTCxHQUFrQixJQUFyQixFQUE0QmUsT0FBTyxHQUFFLElBQVQ7QUFDNUIsVUFBRyxLQUFLZixVQUFMLEdBQWtCLENBQXJCLEVBQXlCZSxPQUFPLEdBQUUsQ0FBVDtBQUV6QixXQUFLbkIsT0FBTCxDQUFhWSxTQUFiLEdBQXlCLGVBQWFPLE9BQWIsR0FBcUIsR0FBOUM7QUFDQSxXQUFLbkIsT0FBTCxDQUFhZSxRQUFiLENBQXVCLENBQXZCLEVBQXlCLENBQXpCLEVBQTJCLEtBQUtuQixJQUFMLENBQVUvQyxNQUFWLENBQWlCcEcsS0FBNUMsRUFBbUQsS0FBS21KLElBQUwsQ0FBVS9DLE1BQVYsQ0FBaUJsRyxNQUFwRTtBQUNQO0FBekZMO0FBQUE7QUFBQSxnQ0EyRmdCc0gsTUEzRmhCLEVBMkZ1QjtBQUNmLGNBQU9BLE1BQVA7QUFDSSxhQUFLLE1BQUw7QUFBWSxpQkFBTyxLQUFLMkIsSUFBTCxDQUFVN0IsWUFBVixDQUF1QnFELGVBQXZCLEdBQXlDLElBQWhEOztBQUNaLGFBQUssS0FBTDtBQUFXLGlCQUFPLEtBQUt4QixJQUFMLENBQVU3QixZQUFWLENBQXVCc0QsVUFBdkIsR0FBb0MsSUFBM0M7QUFGZjtBQUlIO0FBaEdMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1DLEdBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0ksZUFBWTlMLE1BQVosRUFBeUM7QUFBQTs7QUFBQSxRQUFyQitMLE1BQXFCLHVFQUFaLFVBQVk7O0FBQUE7O0FBQUM7QUFDdEMsNkVBQU07QUFBQ3ZLLGVBQVMsRUFBRSxLQUFaO0FBQW1CRSxXQUFLLEVBQUU7QUFBMUIsS0FBTjtBQUNBLFFBQUlxSyxNQUFNLElBQUksT0FBZCxFQUFzQixNQUFLQyxFQUFMLEdBQVUsSUFBSWxOLGdEQUFKLEVBQVY7QUFDdEIsUUFBSWlOLE1BQU0sSUFBSSxXQUFkLEVBQTBCLE1BQUtDLEVBQUwsR0FBVSxJQUFJeE0sd0RBQUosRUFBVjtBQUMxQixRQUFJdU0sTUFBTSxJQUFJLFVBQWQsRUFBeUIsTUFBS0MsRUFBTCxHQUFVLElBQUlqTSxzREFBSixDQUFhQyxNQUFiLENBQVY7QUFFekIsVUFBS29ELElBQUwsR0FBWSxLQUFaLENBTnFDLENBTW5COztBQUNsQixVQUFLNEksRUFBTCxDQUFRckUsT0FBUixnQ0FQcUMsQ0FRckM7OztBQVJxQztBQVN4Qzs7QUFWTDtBQUFBO0FBQUEsMkJBWVc5SSxJQVpYLEVBWWlCO0FBQ1QsVUFBRyxLQUFLbU4sRUFBUixFQUFXO0FBQ1AsYUFBS0EsRUFBTCxDQUFRbEksTUFBUixDQUFlakYsSUFBZixFQURPLENBQ2M7QUFDeEI7O0FBQ0Qsc0VBQWFBLElBQWI7QUFDSDtBQWpCTDtBQUFBO0FBQUEsNEJBbUJXO0FBQ0gsV0FBS21OLEVBQUwsR0FBVSxJQUFWLENBREcsQ0FDWTs7QUFDZm5NLGtFQUFXLENBQUNvTSxlQUFaOztBQUNBO0FBQ0g7QUF2Qkw7O0FBQUE7QUFBQSxFQUF5QnRKLDBDQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFTyxJQUFNdUosTUFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBa0M7QUFDOUIsa0JBQVl2RSxPQUFaLEVBQXFCd0UsVUFBckIsRUFBZ0M7QUFBQTs7QUFBQTs7QUFBQztBQUM3QixnRkFBTTtBQUFDM0ssZUFBUyxFQUFDLFFBQVg7QUFBcUJFLFdBQUssRUFBRTtBQUE1QixLQUFOO0FBQ0EsVUFBS2lHLE9BQUwsR0FBYUEsT0FBYjtBQUNBLFVBQUt3RSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFVBQUs3SSxLQUFMLEdBQWEsS0FBYixDQUo0QixDQUlUOztBQUNuQixVQUFLOEksU0FBTCxHQUFpQixJQUFqQixDQUw0QixDQUtQOztBQUNyQixVQUFLQyxxQkFBTCxHQUE2QixDQUE3QixDQU40QixDQU1HOztBQUMvQixVQUFLQyxnQkFBTCxHQUF3QixDQUF4QjtBQUNBLFVBQUtsSixJQUFMLEdBQVksUUFBWixDQVI0QixDQVFQOztBQUVyQixVQUFLb0ksV0FBTCxHQUFtQixDQUFuQixDQVY0QixDQVVQOztBQUNyQixVQUFLVixNQUFMLEdBQWMsTUFBS1UsV0FBbkI7QUFFQSxVQUFLZSxNQUFMLEdBQWMsSUFBZCxDQWI0QixDQWFUOztBQUNuQixVQUFLQyxXQUFMLEdBQW1CLENBQUMsQ0FBcEI7QUFBc0I7OztBQUV0QixVQUFLQyxpQkFBTCxHQUF5QixDQUF6QjtBQWhCNEI7QUFpQi9COztBQWxCTDtBQUFBO0FBQUEsNkJBb0JhbkosS0FwQmIsRUFvQm1CO0FBQ1gsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7QUF0Qkw7QUFBQTtBQUFBLDZCQXdCWTtBQUFDO0FBQ0wsVUFBRyxLQUFLa0osV0FBTCxLQUFxQixDQUFDLENBQXpCLEVBQTJCO0FBQUM7QUFDeEIsWUFBRyxLQUFLMUIsTUFBTCxHQUFZLENBQWYsRUFDSSxLQUFLQSxNQUFMLElBQWMsQ0FBZDtBQUNKLGFBQUswQixXQUFMLEdBQW1CLEtBQUtELE1BQXhCLENBSHVCLENBR1E7QUFDbEM7QUFDSjtBQTlCTDtBQUFBO0FBQUEsMkJBZ0NXMU4sSUFoQ1gsRUFnQ2lCO0FBQ1QsVUFBRyxLQUFLeU4sZ0JBQUwsS0FBMEIsQ0FBN0IsRUFBK0I7QUFDM0IsYUFBS0EsZ0JBQUwsR0FBd0J6TixJQUF4QjtBQUNIOztBQUVELFVBQUcsS0FBSzROLGlCQUFMLEtBQTJCLENBQTlCLEVBQWdDO0FBQzVCLGFBQUtBLGlCQUFMLEdBQXlCNU4sSUFBekI7QUFDSDs7QUFFRCxVQUFHLEtBQUs4SSxPQUFMLENBQWFuQixJQUFoQixFQUFzQjtBQUNsQixZQUFHLEtBQUs2RixxQkFBTCxLQUErQixDQUFsQyxFQUFvQztBQUFDO0FBQ2pDLGVBQUtBLHFCQUFMLEdBQTZCLEtBQUtELFNBQWxDO0FBQ0EsZUFBS0QsVUFBTCxDQUFnQk8sUUFBaEI7QUFDQSxjQUFHLEtBQUtwSixLQUFSLEVBQ0ksS0FBS3FKLEtBQUwsQ0FBVyxLQUFLckosS0FBaEIsRUFKNEIsQ0FJTDtBQUM5QjtBQUVKLE9BUkQsTUFRTyxJQUFHLEtBQUtxRSxPQUFMLENBQWF2QixFQUFoQixFQUFvQjtBQUN2QixhQUFLN0csSUFBTCxDQUFVLElBQVY7QUFDSCxPQUZNLE1BRUEsSUFBRyxLQUFLb0ksT0FBTCxDQUFhdEIsSUFBaEIsRUFBc0I7QUFDekIsYUFBSzlHLElBQUwsQ0FBVSxNQUFWO0FBQ0gsT0FGTSxNQUVBLElBQUcsS0FBS29JLE9BQUwsQ0FBYXJCLElBQWhCLEVBQXNCO0FBQ3pCLGFBQUsvRyxJQUFMLENBQVUsTUFBVjtBQUNILE9BRk0sTUFFQSxJQUFHLEtBQUtvSSxPQUFMLENBQWFwQixLQUFoQixFQUF1QjtBQUMxQixhQUFLaEgsSUFBTCxDQUFVLE9BQVY7QUFDSCxPQUZNLE1BRUE7QUFDSCxhQUFLSyxLQUFMLENBQVcsS0FBS2dELFFBQUwsQ0FBYzVELFNBQXpCO0FBQ0g7O0FBRUQsVUFBRyxLQUFLcU4scUJBQUwsR0FBNkIsQ0FBaEMsRUFDSSxLQUFLQSxxQkFBTCxJQUE4QnhOLElBQUksR0FBRyxLQUFLeU4sZ0JBQTFDLENBREosS0FHSSxLQUFLRCxxQkFBTCxHQUE2QixDQUE3QjtBQUVKLFdBQUtDLGdCQUFMLEdBQXdCek4sSUFBeEI7O0FBRUEsVUFBRyxLQUFLMk4sV0FBTCxJQUFvQixDQUFDLENBQXhCLEVBQTBCO0FBQUM7QUFDdkIsYUFBS0EsV0FBTCxJQUFvQjNOLElBQUksR0FBRyxLQUFLSSxRQUFoQzs7QUFDQSxZQUFJLEtBQUt1TixXQUFMLEdBQW1CLENBQXZCLEVBQXlCO0FBQ3JCLGVBQUtBLFdBQUwsR0FBbUIsQ0FBQyxDQUFwQixDQURxQixDQUNDO0FBQ3pCO0FBQ0o7O0FBRUQsV0FBS0MsaUJBQUwsR0FBeUI1TixJQUF6Qjs7QUFFQSx5RUFBYUEsSUFBYjtBQUNILEtBOUVMLENBOEVLOztBQTlFTDs7QUFBQTtBQUFBLEVBQTRCOEQsMENBQTVCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBRU8sSUFBTWlLLFVBQWI7QUFBQTtBQUFBO0FBQXdCO0FBQ3BCLHNCQUFZNU4sU0FBWixFQUFzQjBDLEtBQXRCLEVBQTZCWCxDQUE3QixFQUFnQ0csQ0FBaEMsRUFBa0M7QUFBQTs7QUFDOUIsU0FBS0gsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0csQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS1EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBSzFDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBSzRELFFBQUwsR0FBZ0IsSUFBSUMsOENBQUosQ0FBVyxLQUFLN0QsU0FBaEIsRUFBMEIwQyxLQUExQixDQUFoQjtBQUNBLFNBQUt6QyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBSzROLE1BQUwsR0FBYyxLQUFkLENBUDhCLENBT1Y7O0FBQ3BCLFNBQUs3TCxjQUFMLEdBQXFCO0FBQUNELE9BQUMsRUFBQyxFQUFIO0FBQU1HLE9BQUMsRUFBQyxFQUFSO0FBQVdELFdBQUssRUFBQyxFQUFqQjtBQUFvQkUsWUFBTSxFQUFDO0FBQTNCLEtBQXJCLENBUjhCLENBUXNCOztBQUNwRCxTQUFLMkwsT0FBTCxHQUFlLEtBQWYsQ0FUOEIsQ0FTVDtBQUN4Qjs7QUFYTDtBQUFBO0FBQUEsd0JBYVEvTCxDQWJSLEVBYVVHLENBYlYsRUFhWWxDLFNBYlosRUFhc0I7QUFDZCxXQUFLK0IsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsV0FBS0csQ0FBTCxHQUFRQSxDQUFSO0FBQ0EsV0FBSzBCLFFBQUwsQ0FBY2MsWUFBZCxDQUEyQjFFLFNBQTNCLEVBQXNDLEtBQUswQyxLQUEzQztBQUNBLFdBQUttTCxNQUFMLEdBQWMsSUFBZDtBQUNIO0FBbEJMO0FBQUE7QUFBQSwyQkFvQlU7QUFBQztBQUNILFdBQUtuTCxLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUtrQixRQUFMLEdBQWdCLElBQUlDLDhDQUFKLENBQVcsS0FBSzdELFNBQWhCLEVBQTBCLEtBQUswQyxLQUEvQixDQUFoQjtBQUNIO0FBdkJMO0FBQUE7QUFBQSw4QkF5Qlk7QUFDSixXQUFLb0wsT0FBTCxHQUFlLElBQWY7QUFDSDtBQTNCTDtBQUFBO0FBQUEsMkJBNkJXak8sSUE3QlgsRUE2QmdCO0FBQ1IsVUFBRyxLQUFLSSxRQUFMLElBQWlCLENBQXBCLEVBQXNCO0FBQUM7QUFDbkIsYUFBS0EsUUFBTCxHQUFnQkosSUFBaEI7QUFDQTtBQUNIOztBQUNELFdBQUsrRCxRQUFMLENBQWNlLElBQWQsQ0FBbUIsSUFBbkIsRUFBeUI5RSxJQUFJLEdBQUcsS0FBS0ksUUFBckM7QUFDQSxXQUFLc0UsSUFBTCxDQUFVSyxLQUFWLENBQWdCekUsSUFBSSxDQUFDMEUsS0FBTCxDQUFXLEtBQUs5QyxDQUFoQixDQUFoQixFQUFvQzVCLElBQUksQ0FBQzBFLEtBQUwsQ0FBVyxLQUFLM0MsQ0FBaEIsQ0FBcEMsRUFOUSxDQU1nRDs7QUFDeEQsV0FBS2pDLFFBQUwsR0FBZ0JKLElBQWhCO0FBQ0g7QUFyQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFFTyxJQUFNa08sS0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFDSSxpQkFBWS9OLFNBQVosRUFBdUIwQyxLQUF2QixFQUE4QlgsQ0FBOUIsRUFBaUNHLENBQWpDLEVBQW1DO0FBQUE7O0FBQUE7O0FBQy9CLCtFQUFNbEMsU0FBTixFQUFnQjBDLEtBQWhCLEVBQXNCWCxDQUF0QixFQUF5QkcsQ0FBekI7QUFDQSxVQUFLOEwsT0FBTCxHQUFjLEVBQWQ7QUFDQSxVQUFLNUosSUFBTCxHQUFZLE9BQVosQ0FIK0IsQ0FHWDs7QUFDcEIsUUFBTXNFLEtBQUssR0FBRyxJQUFJekMseURBQUosQ0FBZ0I7QUFDMUJ6RCxlQUFTLEVBQUUsT0FEZTtBQUUxQitDLGdCQUFVLEVBQUMsR0FGZTtBQUcxQkMsaUJBQVcsRUFBQztBQUhjLEtBQWhCLENBQWQ7QUFLQSxVQUFLd0ksT0FBTCxDQUFhLE1BQWIsSUFBdUJ0RixLQUFLLENBQUN1RixTQUFOLENBQWlCLEVBQWpCLENBQXZCO0FBQ0EsVUFBS0QsT0FBTCxDQUFhLE9BQWIsSUFBd0J0RixLQUFLLENBQUN1RixTQUFOLENBQWlCLEVBQWpCLENBQXhCO0FBQ0EsVUFBS0QsT0FBTCxDQUFhLE1BQWIsSUFBdUJ0RixLQUFLLENBQUN1RixTQUFOLENBQWlCLEVBQWpCLENBQXZCO0FBQ0EsVUFBS0QsT0FBTCxDQUFhLElBQWIsSUFBcUJ0RixLQUFLLENBQUN1RixTQUFOLENBQWlCLEVBQWpCLENBQXJCO0FBQ0EsVUFBSzFKLElBQUwsR0FBWSxNQUFLeUosT0FBTCxDQUFhaE8sU0FBYixDQUFaLENBYitCLENBYUs7O0FBYkw7QUFjbEM7O0FBZkw7QUFBQTtBQUFBLHdCQWlCUStCLENBakJSLEVBaUJVRyxDQWpCVixFQWlCWWxDLFNBakJaLEVBaUJzQjtBQUNkLHFFQUFVK0IsQ0FBVixFQUFZRyxDQUFaLEVBQWNsQyxTQUFkOztBQUNBLFdBQUt1RSxJQUFMLEdBQVksS0FBS3lKLE9BQUwsQ0FBYWhPLFNBQWIsQ0FBWjtBQUNIO0FBcEJMOztBQUFBO0FBQUEsRUFBMkI0TixzREFBM0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNITyxJQUFNNUcsZUFBYjtBQUFBO0FBQUE7QUFDSSw2QkFBYTtBQUFBO0FBQ1o7O0FBRkw7QUFBQTtBQUFBLDJCQUdtQmtILEdBSG5CLEVBR3dCQyxPQUh4QixFQUdpQztBQUFDO0FBQzFCO0FBQ0E7O0FBQ0E7O0FBRUEsVUFBSUMsY0FBYyxHQUFHLEdBQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjQyxTQUFkLEVBQXlCLENBQXpCLENBQXJCLENBTHlCLENBT3pCOztBQUNBLGFBQU9MLEdBQUcsQ0FBQ25JLE1BQUosQ0FBVyxVQUFVeUksSUFBVixFQUFnQmxMLEtBQWhCLEVBQXVCO0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBTzhLLGNBQWMsQ0FBQ0ssT0FBZixDQUF1Qm5MLEtBQXZCLEtBQWlDLENBQUMsQ0FBekM7QUFDSCxPQVBNLENBQVA7QUFRSCxLQW5CTCxDQW1CSzs7QUFuQkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU1vRyxLQUFiO0FBQUE7QUFBQTtBQUFtQjtBQUNmLGlCQUFZMEIsSUFBWixFQUFpQjtBQUFBOztBQUNiLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUszQixNQUFMLEdBQWMsS0FBS2lGLFdBQUwsQ0FBaUIzRSxPQUEvQjtBQUNIOztBQUpMO0FBQUE7QUFBQSwyQkFhVTtBQUFDO0FBQ0gsV0FBS04sTUFBTCxHQUFjLEtBQUtpRixXQUFMLENBQWlCM0UsT0FBL0I7QUFDSDtBQWZMO0FBQUE7QUFBQSwyQkFpQldOLE1BakJYLEVBaUJtQjtBQUFDO0FBQ1osV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7QUFuQkw7QUFBQTtBQUFBLDJCQXFCWTVKLElBckJaLEVBcUJpQixDQUFDO0FBRWI7QUF2Qkw7QUFBQTtBQUFBLHdCQU15QjtBQUFFLGFBQU8sU0FBUDtBQUFtQjtBQU45QztBQUFBO0FBQUEsd0JBT3dCO0FBQUUsYUFBTyxRQUFQO0FBQWtCO0FBUDVDO0FBQUE7QUFBQSx3QkFRNEI7QUFBRSxhQUFPLFlBQVA7QUFBc0I7QUFScEQ7QUFBQTtBQUFBLHdCQVMyQjtBQUFFLGFBQU8sV0FBUDtBQUFxQjtBQVRsRDtBQUFBO0FBQUEsd0JBVTBCO0FBQUUsYUFBTyxVQUFQO0FBQW9CO0FBVmhEO0FBQUE7QUFBQSx3QkFXMEI7QUFBRSxhQUFPLFVBQVA7QUFBb0I7QUFYaEQ7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTXFKLFNBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0kscUJBQVlrQyxJQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2IsbUZBQU1BLElBQU47QUFDQSxVQUFLMUMsS0FBTCxHQUFhLElBQUl6Qyx5REFBSixDQUFnQjtBQUN6QnpELGVBQVMsRUFBRSxPQURjO0FBRXpCK0MsZ0JBQVUsRUFBQyxHQUZjO0FBR3pCQyxpQkFBVyxFQUFDO0FBSGEsS0FBaEIsQ0FBYixDQUZhLENBT2I7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFaYTtBQWNoQjs7QUFmTDtBQUFBO0FBQUEsMkJBaUJVO0FBQ0Y7O0FBRUEzRSxrRUFBVyxDQUFDOE4sY0FBWixHQUhFLENBRzJCOztBQUU3QixXQUFLM04sTUFBTCxHQUFjLElBQUlrTSw4Q0FBSixDQUFXLEtBQUs5QixJQUFMLENBQVV6QyxPQUFyQixFQUE4QixJQUE5QixDQUFkO0FBQ0EsV0FBSzNILE1BQUwsQ0FBWWUsQ0FBWixHQUFnQixHQUFoQjtBQUNBLFdBQUtmLE1BQUwsQ0FBWWtCLENBQVosR0FBZSxJQUFmO0FBRUEsV0FBSzBNLFFBQUwsR0FBZ0IsSUFBSTFJLGtEQUFKLEVBQWhCLENBVEUsQ0FTNkI7QUFFL0I7O0FBQ0EsVUFBTTJJLE9BQU8sR0FBR2pKLG1CQUFPLENBQUUsbURBQUYsQ0FBdkI7O0FBQ0EsV0FBS2tKLEdBQUwsR0FBVyxLQUFLMUQsSUFBTCxDQUFVL0MsTUFBVixDQUFpQjBHLFNBQWpCLENBQTJCLFFBQTNCLEVBQW9DRixPQUFwQyxFQUE0QyxLQUFLbkcsS0FBakQsQ0FBWCxDQWJFLENBYWlFOztBQUNuRSxXQUFLc0csVUFBTCxHQUFrQixJQUFJakssOENBQUosQ0FBVztBQUN6QjlDLGFBQUssRUFBRSxLQUFLbUosSUFBTCxDQUFVL0MsTUFBVixDQUFpQnBHLEtBREM7QUFFekJFLGNBQU0sRUFBRSxLQUFLaUosSUFBTCxDQUFVL0MsTUFBVixDQUFpQmxHLE1BRkE7QUFHekI2QyxjQUFNLEVBQUUsS0FBSzhKLEdBQUwsQ0FBUzdNLEtBQVQsR0FBaUIsS0FBS21KLElBQUwsQ0FBVS9DLE1BQVYsQ0FBaUJwRyxLQUhqQjtBQUl6QmdELGNBQU0sRUFBRSxLQUFLNkosR0FBTCxDQUFTM00sTUFBVCxHQUFrQixLQUFLaUosSUFBTCxDQUFVL0MsTUFBVixDQUFpQmxHO0FBSmxCLE9BQVgsQ0FBbEI7QUFNQSxXQUFLNk0sVUFBTCxDQUFnQkMsZUFBaEIsR0FwQkUsQ0FvQmdDOztBQUNsQyxXQUFLRCxVQUFMLENBQWdCRSxLQUFoQixDQUFzQixLQUFLbE8sTUFBM0I7QUFDQSxXQUFLb0ssSUFBTCxDQUFVL0MsTUFBVixDQUFpQjhHLFNBQWpCLENBQTJCLEtBQUtILFVBQWhDO0FBRUEsV0FBS0osUUFBTCxDQUFjUSxlQUFkLENBQThCUCxPQUE5QjtBQUNBLFdBQUtELFFBQUwsQ0FBY1MsZ0JBQWQsQ0FBK0IsS0FBS3JPLE1BQXBDO0FBRUEsV0FBS3NPLE9BQUwsR0FBYyxFQUFkLENBM0JFLENBMkJlOztBQUNqQixXQUFLakUsS0FBTCxHQUFhLElBQUlrRSw0Q0FBSixDQUFVLEtBQUtuRSxJQUFmLENBQWIsQ0E1QkUsQ0E0QmdDOztBQUNsQyxXQUFLQyxLQUFMLENBQVc3QixJQUFYLEdBN0JFLENBK0JGOztBQUNBLDBCQUFpQixJQUFJMkIsb0RBQUosQ0FBYyxLQUFLQyxJQUFuQixFQUF5QixLQUFLQyxLQUE5QixDQUFqQixDQWhDRSxDQWdDb0Q7O0FBQ3RELFdBQUttRSxXQUFMLEdBQW1CLEVBQW5CLENBakNFLENBaUNvQjs7QUFDdEIsV0FBSzVDLGVBQUwsR0FBdUIsS0FBdkIsQ0FsQ0UsQ0FrQzJCOztBQUM3QixXQUFLQyxVQUFMLEdBQWtCLEtBQWxCLENBbkNFLENBbUNzQjtBQUczQjtBQXZETDtBQUFBO0FBQUEsMkJBeURXaE4sSUF6RFgsRUF5RGdCO0FBQUE7O0FBQ1IsVUFBRyxLQUFLK00sZUFBUixFQUF3QjtBQUFDO0FBQ3JCLGFBQUs2QyxNQUFMLENBQVkvRiw0Q0FBSyxDQUFDRyxTQUFsQjtBQUNIOztBQUVELFVBQUcsS0FBS2dELFVBQVIsRUFBbUI7QUFBQztBQUNoQixhQUFLNEMsTUFBTCxDQUFZL0YsNENBQUssQ0FBQ0ksUUFBbEI7QUFDSCxPQVBPLENBU1I7OztBQUNBLFdBQUs5SSxNQUFMLENBQVk4RCxNQUFaLENBQW1CakYsSUFBbkI7O0FBRUEsVUFBRyxLQUFLMlAsV0FBTCxDQUFpQnBNLE1BQWpCLEdBQTBCLENBQTdCLEVBQStCO0FBQzNCLGFBQUtvTSxXQUFMLENBQWlCckwsT0FBakIsQ0FBeUIsVUFBQ0csS0FBRCxFQUFPaEIsS0FBUCxFQUFlO0FBQ3BDLGNBQUdnQixLQUFLLENBQUN1SixNQUFULEVBQWdCO0FBQUM7QUFDYnZKLGlCQUFLLENBQUNRLE1BQU4sQ0FBYWpGLElBQWI7QUFDSDs7QUFDRCxjQUFHeUUsS0FBSyxDQUFDd0osT0FBVCxFQUFpQjtBQUNiLGtCQUFJLENBQUMwQixXQUFMLEdBQW1CeEksa0VBQWUsQ0FBQ0MsTUFBaEIsQ0FBdUIsTUFBSSxDQUFDdUksV0FBNUIsRUFBd0NsTSxLQUF4QyxDQUFuQjtBQUNIO0FBQ0osU0FQRDtBQVFIOztBQUVELFVBQUcsS0FBS2dNLE9BQUwsQ0FBYWxNLE1BQWIsR0FBc0IsQ0FBekIsRUFBMkI7QUFDdkIsYUFBS2tNLE9BQUwsQ0FBYW5MLE9BQWIsQ0FBcUIsVUFBQXFFLEdBQUcsRUFBRTtBQUN0QkEsYUFBRyxDQUFDMUQsTUFBSixDQUFXakYsSUFBWCxFQURzQixDQUd0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsU0FSRDtBQVNIOztBQUlELFdBQUsrTyxRQUFMLENBQWM5SixNQUFkLENBQXFCakYsSUFBckI7QUFDQSxXQUFLbVAsVUFBTCxDQUFnQmxLLE1BQWhCLENBQXVCakYsSUFBdkI7QUFDSDtBQWhHTDtBQUFBO0FBQUEsMkJBa0dXQSxJQWxHWCxFQWtHZ0I7QUFBQTs7QUFDUixXQUFLaUYsTUFBTCxDQUFZakYsSUFBWjtBQUNBLFdBQUt1TCxJQUFMLENBQVUvQyxNQUFWLENBQWlCcUgsSUFBakIsQ0FBc0IsU0FBdEI7QUFDQSxXQUFLdEUsSUFBTCxDQUFVL0MsTUFBVixDQUFpQnNILFVBQWpCLENBQTRCLEtBQUtiLEdBQWpDLEVBSFEsQ0FJUjtBQUNBOztBQUNBLFVBQUcsS0FBS1EsT0FBTCxDQUFhbE0sTUFBYixHQUFzQixDQUF6QixFQUEyQjtBQUN2QixhQUFLa00sT0FBTCxDQUFhbkwsT0FBYixDQUFxQixVQUFBcUUsR0FBRyxFQUFFO0FBQ3RCLGdCQUFJLENBQUM0QyxJQUFMLENBQVUvQyxNQUFWLENBQWlCc0gsVUFBakIsQ0FBNEJuSCxHQUFHLENBQUNqRSxJQUFoQztBQUNILFNBRkQ7QUFHSDs7QUFFRCxXQUFLNkcsSUFBTCxDQUFVL0MsTUFBVixDQUFpQnNILFVBQWpCLENBQTRCLEtBQUszTyxNQUFMLENBQVl1RCxJQUF4Qzs7QUFFQSxVQUFHLEtBQUtpTCxXQUFMLENBQWlCcE0sTUFBakIsR0FBMEIsQ0FBN0IsRUFBK0I7QUFBQztBQUM1QixhQUFLb00sV0FBTCxDQUFpQnJMLE9BQWpCLENBQXlCLFVBQUFHLEtBQUssRUFBRTtBQUM1QixjQUFHQSxLQUFLLENBQUN1SixNQUFULEVBQWdCO0FBQUM7QUFDYixrQkFBSSxDQUFDekMsSUFBTCxDQUFVL0MsTUFBVixDQUFpQnNILFVBQWpCLENBQTRCckwsS0FBSyxDQUFDQyxJQUFsQztBQUNIO0FBQ0osU0FKRDtBQUtIOztBQUVELFdBQUs4RyxLQUFMLENBQVd2RyxNQUFYLENBQWtCakYsSUFBbEI7O0FBQ0EsNEVBQWFBLElBQWI7O0FBQ0Esd0JBQWVpRixNQUFmLENBQXNCakYsSUFBdEI7QUFDSDtBQTNITDtBQUFBO0FBQUEsK0JBNkhjO0FBQUM7QUFDUCxVQUFJeUUsS0FBSyxHQUFHLElBQUl5Six3REFBSixDQUFVLE1BQVYsRUFBaUIsR0FBakIsRUFBc0IsS0FBSy9NLE1BQUwsQ0FBWWUsQ0FBbEMsRUFBcUMsS0FBS2YsTUFBTCxDQUFZa0IsQ0FBakQsQ0FBWjtBQUNBLFdBQUtsQixNQUFMLENBQVk0TyxRQUFaLENBQXFCdEwsS0FBckI7QUFDQSxXQUFLa0wsV0FBTCxDQUFpQmxKLElBQWpCLENBQXNCaEMsS0FBdEIsRUFITSxDQUd1Qjs7QUFDN0IsV0FBS3NLLFFBQUwsQ0FBY1MsZ0JBQWQsQ0FBK0IvSyxLQUEvQjtBQUNIO0FBbElMOztBQUFBO0FBQUEsRUFBK0JvRiw0Q0FBL0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTU4sUUFBYjtBQUFBO0FBQUE7QUFBQTs7QUFDSSxvQkFBWWdDLElBQVosRUFBaUI7QUFBQTs7QUFBQSxpRkFDUEEsSUFETyxJQUNEO0FBQ2Y7O0FBSEw7QUFBQTtBQUFBLDJCQUtVO0FBQ0Y7O0FBQ0EsV0FBS3lFLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxXQUFLckgsR0FBTCxHQUFXLElBQUlzRSx3Q0FBSixDQUFRLElBQVIsRUFBYSxXQUFiLENBQVgsQ0FIRSxDQUdtQzs7QUFDckMsV0FBS3RFLEdBQUwsQ0FBU3pHLENBQVQsR0FBYSxHQUFiO0FBQ0EsV0FBS3lHLEdBQUwsQ0FBU3RHLENBQVQsR0FBYSxHQUFiO0FBRUEsV0FBSzROLFVBQUwsR0FBa0IsSUFBbEIsQ0FQRSxDQU9xQjs7QUFDdkIsV0FBS0MsaUJBQUwsR0FBeUIsQ0FBQyxFQUExQixDQVJFLENBUTJCO0FBRTdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQUtySCxLQUFMLEdBQWEsSUFBSXpDLHlEQUFKLENBQWdCO0FBQ3pCekQsaUJBQVMsRUFBRSxRQURjO0FBRXpCK0Msa0JBQVUsRUFBQyxHQUZjO0FBR3pCQyxtQkFBVyxFQUFDO0FBSGEsT0FBaEIsQ0FBYjtBQUtBLFdBQUt4RSxNQUFMLEdBQWMsS0FBSzBILEtBQUwsQ0FBV3VGLFNBQVgsQ0FBcUIsRUFBckIsQ0FBZDtBQUNBLFdBQUsrQixXQUFMLEdBQW1CO0FBQUNqTyxTQUFDLEVBQUUsR0FBSjtBQUFTRyxTQUFDLEVBQUM7QUFBWCxPQUFuQjtBQUNBLFdBQUtsQixNQUFMLENBQVk0RCxLQUFaLENBQWtCLEtBQUtvTCxXQUFMLENBQWlCak8sQ0FBbkMsRUFBcUMsS0FBS2lPLFdBQUwsQ0FBaUI5TixDQUF0RDtBQUNIO0FBNUJMO0FBQUE7QUFBQSwyQkE4QldyQyxJQTlCWCxFQThCZ0I7QUFDUixVQUFHLEtBQUtnUSxRQUFMLElBQWlCLENBQXBCLEVBQXNCO0FBQ2xCLGFBQUtBLFFBQUwsR0FBZ0JoUSxJQUFoQjtBQUNIOztBQUVELFVBQUcsS0FBS2dRLFFBQUwsSUFBaUIsQ0FBakIsSUFBdUJoUSxJQUFJLEdBQUcsS0FBS2dRLFFBQWIsR0FBd0IsR0FBakQsRUFBcUQ7QUFDakQsWUFBRyxLQUFLekUsSUFBTCxDQUFVekMsT0FBVixDQUFrQm5CLElBQXJCLEVBQTBCO0FBQUM7QUFDdkI7QUFDQSxlQUFLaUksTUFBTCxDQUFZL0YsNENBQUssQ0FBQ0ksUUFBbEI7QUFDSDtBQUNKOztBQUVELFVBQUcsS0FBSytGLFFBQUwsSUFBaUIsQ0FBakIsSUFBdUJoUSxJQUFJLEdBQUcsS0FBS2dRLFFBQWIsR0FBeUIsS0FBS0MsVUFBdkQsRUFBa0U7QUFDOUQsYUFBSzlPLE1BQUwsR0FBYyxLQUFLMEgsS0FBTCxDQUFXdUYsU0FBWCxDQUFxQixFQUFyQixDQUFkO0FBQ0EsYUFBSytCLFdBQUwsQ0FBaUJqTyxDQUFqQixJQUFzQixDQUF0QjtBQUNBLGFBQUtnTyxpQkFBTCxJQUF5QixHQUF6QjtBQUNBLGFBQUtDLFdBQUwsQ0FBaUI5TixDQUFqQixJQUFxQixLQUFLNk4saUJBQTFCO0FBQ0EsYUFBSy9PLE1BQUwsQ0FBWTRELEtBQVosQ0FBa0IsS0FBS29MLFdBQUwsQ0FBaUJqTyxDQUFuQyxFQUFxQyxLQUFLaU8sV0FBTCxDQUFpQjlOLENBQXREO0FBQ0g7O0FBRUQsV0FBS3NHLEdBQUwsQ0FBUzFELE1BQVQsQ0FBZ0JqRixJQUFoQjtBQUNIO0FBbkRMO0FBQUE7QUFBQSwyQkFxRFdBLElBckRYLEVBcURnQjtBQUNSLFdBQUtpRixNQUFMLENBQVlqRixJQUFaO0FBQ0EsV0FBS3VMLElBQUwsQ0FBVS9DLE1BQVYsQ0FBaUJxSCxJQUFqQixDQUFzQixPQUF0QjtBQUNBLFdBQUt0RSxJQUFMLENBQVUvQyxNQUFWLENBQWlCcUUsS0FBakIsQ0FBdUIsR0FBdkIsRUFBMkIsR0FBM0IsRUFBZ0Msd0NBQWhDLEVBQXlFLEVBQXpFO0FBRUEsV0FBS3RCLElBQUwsQ0FBVS9DLE1BQVYsQ0FBaUJzSCxVQUFqQixDQUE0QixLQUFLbkgsR0FBTCxDQUFTakUsSUFBckMsRUFMUSxDQU1SOztBQUVBLFdBQUs2RyxJQUFMLENBQVUvQyxNQUFWLENBQWlCc0gsVUFBakIsQ0FBNEIsS0FBSzNPLE1BQWpDOztBQUNBLDJFQUFhbkIsSUFBYjtBQUNIO0FBL0RMOztBQUFBO0FBQUEsRUFBOEI2Siw0Q0FBOUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBRU8sSUFBTUosT0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFDSSxtQkFBWThCLElBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDYixpRkFBTUEsSUFBTixHQURhLENBQ0Q7O0FBQ1osVUFBSzFDLEtBQUwsR0FBYSxJQUFJekMseURBQUosQ0FBZ0I7QUFDekJ6RCxlQUFTLEVBQUUsUUFEYztBQUV6QitDLGdCQUFVLEVBQUMsR0FGYztBQUd6QkMsaUJBQVcsRUFBQztBQUhhLEtBQWhCLENBQWI7QUFLQSxVQUFLeUssUUFBTCxHQUFnQixJQUFJaEsseURBQUosQ0FBZ0I7QUFDNUJ6RCxlQUFTLEVBQUUsS0FEaUI7QUFFNUIrQyxnQkFBVSxFQUFDLEdBRmlCO0FBRzVCQyxpQkFBVyxFQUFDO0FBSGdCLEtBQWhCLENBQWhCO0FBUGE7QUFZaEI7O0FBYkw7QUFBQTtBQUFBLDJCQWVVO0FBQ0Y7O0FBQ0EsV0FBS3FLLFFBQUwsR0FBZ0IsQ0FBaEI7QUFFQSxXQUFLN08sTUFBTCxHQUFjLEtBQUswSCxLQUFMLENBQVd1RixTQUFYLENBQXFCLEVBQXJCLENBQWQ7QUFDQSxXQUFLaUMsY0FBTCxHQUFzQixHQUF0QjtBQUNBLFdBQUtGLFdBQUwsR0FBbUI7QUFBQ2pPLFNBQUMsRUFBRSxHQUFKO0FBQVNHLFNBQUMsRUFBQyxLQUFLZ087QUFBaEIsT0FBbkI7QUFDQSxXQUFLbFAsTUFBTCxDQUFZNEQsS0FBWixDQUFrQixLQUFLb0wsV0FBTCxDQUFpQmpPLENBQW5DLEVBQXFDLEtBQUtpTyxXQUFMLENBQWlCOU4sQ0FBdEQ7QUFDQSxXQUFLaU8sWUFBTCxHQUFvQixDQUFDLENBQXJCLENBUkUsQ0FRcUI7O0FBQ3ZCLFdBQUtDLFdBQUwsR0FBbUIsS0FBS0QsWUFBeEI7QUFFQSxXQUFLRSxJQUFMLEdBQVksRUFBWjs7QUFDQSxXQUFJLElBQUlySyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUMsQ0FBakIsRUFBbUJBLENBQUMsRUFBcEIsRUFBdUI7QUFDbkIsWUFBSXNLLEVBQUUsR0FBRyxNQUFNdEssQ0FBQyxHQUFDLEdBQWpCO0FBQ0EsYUFBS3FLLElBQUwsQ0FBVS9KLElBQVYsQ0FBZTtBQUFDdkUsV0FBQyxFQUFDdU8sRUFBSDtBQUFNcE8sV0FBQyxFQUFDLEdBQVI7QUFBWXFPLGdCQUFNLEVBQUMsS0FBS04sUUFBTCxDQUFjaEMsU0FBZCxDQUF3QixFQUF4QixDQUFuQjtBQUFnRHZMLGVBQUssRUFBRSxLQUFLeU47QUFBNUQsU0FBZjtBQUNIOztBQUVELFdBQUtFLElBQUwsQ0FBVWxNLE9BQVYsQ0FBa0IsVUFBQXFFLEdBQUcsRUFBRTtBQUNuQkEsV0FBRyxDQUFDK0gsTUFBSixDQUFXM0wsS0FBWCxDQUFpQjRELEdBQUcsQ0FBQ3pHLENBQXJCLEVBQXVCeUcsR0FBRyxDQUFDdEcsQ0FBM0I7QUFDSCxPQUZEO0FBR0g7QUFuQ0w7QUFBQTtBQUFBLDJCQXFDV3JDLElBckNYLEVBcUNnQjtBQUFBOztBQUNSLFVBQUcsS0FBS2dRLFFBQUwsSUFBaUIsQ0FBcEIsRUFBc0I7QUFDbEIsYUFBS0EsUUFBTCxHQUFnQmhRLElBQWhCO0FBQ0g7O0FBRUQsVUFBRyxLQUFLZ1EsUUFBTCxJQUFpQixDQUFqQixJQUF1QmhRLElBQUksR0FBRyxLQUFLZ1EsUUFBYixHQUF5QixHQUFsRCxFQUFzRDtBQUNsRCxZQUFHLEtBQUt6RSxJQUFMLENBQVV6QyxPQUFWLENBQWtCbkIsSUFBckIsRUFBMEI7QUFBQztBQUN2QjtBQUNBLGVBQUtpSSxNQUFMLENBQVkvRiw0Q0FBSyxDQUFDRSxVQUFsQjtBQUNIO0FBQ0o7O0FBRUQsV0FBS3dHLFdBQUwsSUFBbUIsR0FBbkI7QUFDQSxXQUFLSixXQUFMLENBQWlCOU4sQ0FBakIsSUFBc0IsS0FBS2tPLFdBQTNCOztBQUNBLFVBQUcsS0FBS0osV0FBTCxDQUFpQjlOLENBQWpCLEdBQXFCLEtBQUtnTyxjQUE3QixFQUE0QztBQUN4QyxhQUFLRixXQUFMLENBQWlCOU4sQ0FBakIsR0FBcUIsS0FBS2dPLGNBQTFCO0FBQ0EsYUFBS0UsV0FBTCxHQUFtQixLQUFLRCxZQUFMLEdBQWtCaFEsSUFBSSxDQUFDRSxNQUFMLEVBQWxCLEdBQWdDLEdBQW5EO0FBQ0g7O0FBQ0QsV0FBS1csTUFBTCxDQUFZNEQsS0FBWixDQUFrQixLQUFLb0wsV0FBTCxDQUFpQmpPLENBQW5DLEVBQXFDLEtBQUtpTyxXQUFMLENBQWlCOU4sQ0FBdEQ7QUFFQSxXQUFLbU8sSUFBTCxDQUFVbE0sT0FBVixDQUFrQixVQUFBcUUsR0FBRyxFQUFFO0FBQ25CQSxXQUFHLENBQUM5RixLQUFKLElBQVksR0FBWjtBQUNBOEYsV0FBRyxDQUFDdEcsQ0FBSixJQUFRc0csR0FBRyxDQUFDOUYsS0FBWjs7QUFDQSxZQUFHOEYsR0FBRyxDQUFDdEcsQ0FBSixHQUFRLE1BQUksQ0FBQ2dPLGNBQWhCLEVBQStCO0FBQzNCMUgsYUFBRyxDQUFDdEcsQ0FBSixHQUFRLE1BQUksQ0FBQ2dPLGNBQWI7QUFDQTFILGFBQUcsQ0FBQzlGLEtBQUosR0FBWSxNQUFJLENBQUN5TixZQUFMLEdBQWtCaFEsSUFBSSxDQUFDRSxNQUFMLEVBQWxCLEdBQWdDLEdBQTVDO0FBQ0g7O0FBQ0RtSSxXQUFHLENBQUMrSCxNQUFKLENBQVczTCxLQUFYLENBQWlCNEQsR0FBRyxDQUFDekcsQ0FBckIsRUFBdUJ5RyxHQUFHLENBQUN0RyxDQUEzQjtBQUNILE9BUkQ7QUFTSDtBQWxFTDtBQUFBO0FBQUEsMkJBb0VXckMsSUFwRVgsRUFvRWdCO0FBQUE7O0FBQ1IsV0FBS2lGLE1BQUwsQ0FBWWpGLElBQVo7QUFDQSxXQUFLdUwsSUFBTCxDQUFVL0MsTUFBVixDQUFpQnFILElBQWpCLENBQXNCLE9BQXRCO0FBQ0EsV0FBS3RFLElBQUwsQ0FBVS9DLE1BQVYsQ0FBaUJxRSxLQUFqQixDQUF1QixHQUF2QixFQUEyQixHQUEzQixFQUFnQyxzQkFBaEMsRUFBdUQsRUFBdkQ7QUFFQSxXQUFLdEIsSUFBTCxDQUFVL0MsTUFBVixDQUFpQnNILFVBQWpCLENBQTRCLEtBQUszTyxNQUFqQztBQUNBLFdBQUtxUCxJQUFMLENBQVVsTSxPQUFWLENBQWtCLFVBQUFxRSxHQUFHLEVBQUU7QUFDbkIsY0FBSSxDQUFDNEMsSUFBTCxDQUFVL0MsTUFBVixDQUFpQnNILFVBQWpCLENBQTRCbkgsR0FBRyxDQUFDK0gsTUFBaEM7QUFDSCxPQUZEOztBQUdBLDBFQUFhMVEsSUFBYjtBQUNIO0FBOUVMOztBQUFBO0FBQUEsRUFBNkI2Siw0Q0FBN0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRU8sSUFBTVosT0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFDSSxtQkFBWXNDLElBQVosRUFBaUI7QUFBQTs7QUFBQTs7QUFDYixpRkFBTUEsSUFBTixHQURhLENBQ0Q7O0FBQ1osVUFBS3lFLFFBQUwsR0FBZ0IsQ0FBaEIsQ0FGYSxDQUVNOztBQUZOO0FBR2hCOztBQUpMO0FBQUE7QUFBQSwyQkFNVTtBQUFDO0FBQ0g7O0FBQ0EsV0FBS0EsUUFBTCxHQUFnQixDQUFoQixDQUZFLENBRWdCO0FBQ3JCO0FBVEw7QUFBQTtBQUFBLDJCQVdXaFEsSUFYWCxFQVdpQjtBQUNULFVBQUcsS0FBS2dRLFFBQUwsSUFBaUIsQ0FBakIsSUFBc0IsS0FBS3pFLElBQUwsQ0FBVS9DLE1BQVYsQ0FBaUJtSSxjQUFqQixJQUFtQyxJQUE1RCxFQUFrRTtBQUFDO0FBQy9ELGFBQUtYLFFBQUwsR0FBZ0JoUSxJQUFoQixDQUQ4RCxDQUN6QztBQUN4Qjs7QUFDRCxVQUFHLEtBQUtnUSxRQUFMLElBQWlCLENBQWpCLElBQXVCaFEsSUFBSSxHQUFHLEtBQUtnUSxRQUFiLEdBQXlCLEdBQWxELEVBQXVEO0FBQUM7QUFDcEQsYUFBS0osTUFBTCxDQUFZL0YsNENBQUssQ0FBQ0MsTUFBbEIsRUFEbUQsQ0FDekI7QUFDN0I7QUFDSjtBQWxCTDtBQUFBO0FBQUEsMkJBb0JXOUosSUFwQlgsRUFvQmdCO0FBQ1IsV0FBS2lGLE1BQUwsQ0FBWWpGLElBQVo7QUFDQSxXQUFLdUwsSUFBTCxDQUFVL0MsTUFBVixDQUFpQnFILElBQWpCLENBQXNCLFNBQXRCO0FBQ0EsV0FBS3RFLElBQUwsQ0FBVS9DLE1BQVYsQ0FBaUJxRSxLQUFqQixDQUF1QixFQUF2QixFQUEwQixFQUExQixFQUE2QiwrQkFBN0I7O0FBQ0EsMEVBQWE3TSxJQUFiO0FBQ0g7QUF6Qkw7O0FBQUE7QUFBQSxFQUE2QjZKLDRDQUE3QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFTyxJQUFNVixJQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLGdCQUFZb0MsSUFBWixFQUFpQjtBQUFBOztBQUFBLDZFQUNQQSxJQURPLElBQ0Q7QUFDZjs7QUFITDtBQUFBO0FBQUEsMkJBS1U7QUFDRjs7QUFDQSxXQUFLeUUsUUFBTCxHQUFnQixDQUFoQixDQUZFLENBRWdCO0FBQ3JCO0FBUkw7QUFBQTtBQUFBLDJCQVVXaFEsSUFWWCxFQVVnQjtBQUNSLFVBQUcsS0FBS2dRLFFBQUwsSUFBaUIsQ0FBcEIsRUFBc0I7QUFDbEIsYUFBS0EsUUFBTCxHQUFnQmhRLElBQWhCO0FBQ0g7O0FBRUQsVUFBRyxLQUFLZ1EsUUFBTCxJQUFpQixDQUFqQixJQUF1QmhRLElBQUksR0FBRyxLQUFLZ1EsUUFBYixHQUF5QixHQUFsRCxFQUFzRDtBQUNsRCxZQUFHLEtBQUt6RSxJQUFMLENBQVV6QyxPQUFWLENBQWtCbkIsSUFBckIsRUFBMEI7QUFBQztBQUMzQixlQUFLaUksTUFBTCxDQUFZL0YsNENBQUssQ0FBQ0csU0FBbEIsRUFEMEIsQ0FFdEI7QUFDSDtBQUNKO0FBQ0o7QUFyQkw7QUFBQTtBQUFBLDJCQXVCV2hLLElBdkJYLEVBdUJnQjtBQUNSLFdBQUtpRixNQUFMLENBQVlqRixJQUFaO0FBQ0EsV0FBS3VMLElBQUwsQ0FBVS9DLE1BQVYsQ0FBaUJvSSxTQUFqQixDQUEyQixDQUEzQixFQUE2QixDQUE3QixFQUErQixPQUEvQjtBQUNBLFdBQUtyRixJQUFMLENBQVUvQyxNQUFWLENBQWlCcUUsS0FBakIsQ0FBdUIsR0FBdkIsRUFBMkIsR0FBM0IsRUFBZ0MsZ0JBQWhDLEVBQWlELEVBQWpEO0FBQ0EsV0FBS3RCLElBQUwsQ0FBVS9DLE1BQVYsQ0FBaUJxRSxLQUFqQixDQUF1QixFQUF2QixFQUEwQixHQUExQixFQUErQix3REFBL0IsRUFBd0YsRUFBeEY7O0FBQ0EsdUVBQWE3TSxJQUFiO0FBQ0g7QUE3Qkw7O0FBQUE7QUFBQSxFQUEwQjZKLDRDQUExQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBRU8sSUFBTXBCLE1BQWI7QUFBQTtBQUFBO0FBQ0ksa0JBQVlyRyxLQUFaLEVBQW9CRSxNQUFwQixFQUEyQjtBQUFBOztBQUN2QixTQUFLRixLQUFMLEdBQVlBLEtBQVo7QUFDQSxTQUFLRSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLdU8sTUFBTCxHQUFjLEtBQUtDLFlBQUwsQ0FBa0IxTyxLQUFsQixFQUF5QkUsTUFBekIsQ0FBZDtBQUNBLFNBQUtxSixPQUFMLEdBQWUsS0FBS2tGLE1BQUwsQ0FBWUUsVUFBWixDQUF1QixJQUF2QixDQUFmO0FBQ0EsU0FBS3RHLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS2tHLGNBQUwsR0FBc0IsS0FBdEI7QUFDQSxTQUFLSyxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBbkI7QUFFQSxTQUFLQyxpQkFBTDtBQUNIOztBQVpMO0FBQUE7QUFBQSx3Q0FjdUI7QUFDZixXQUFLTCxNQUFMLENBQVlNLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLE9BQTVCO0FBQ0EsV0FBS1AsTUFBTCxDQUFZTSxLQUFaLENBQWtCRSxRQUFsQixHQUE2QixVQUE3QjtBQUNBLFdBQUtSLE1BQUwsQ0FBWU0sS0FBWixDQUFrQjFKLElBQWxCLEdBQXlCLEdBQXpCO0FBQ0EsV0FBS29KLE1BQUwsQ0FBWU0sS0FBWixDQUFrQnpKLEtBQWxCLEdBQTBCLEdBQTFCO0FBQ0EsV0FBS21KLE1BQUwsQ0FBWU0sS0FBWixDQUFrQkcsR0FBbEIsR0FBd0IsR0FBeEI7QUFDQSxXQUFLVCxNQUFMLENBQVlNLEtBQVosQ0FBa0JJLE1BQWxCLEdBQTJCLEdBQTNCO0FBQ0EsV0FBS1YsTUFBTCxDQUFZTSxLQUFaLENBQWtCSyxNQUFsQixHQUEyQixNQUEzQjtBQUNBMUosY0FBUSxDQUFDL0gsSUFBVCxDQUFjb1IsS0FBZCxDQUFvQk0sVUFBcEIsR0FBaUMsT0FBakM7QUFDSDtBQXZCTDtBQUFBO0FBQUEsOEJBeUJjVCxNQXpCZCxFQXlCcUI7QUFDYixXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxXQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0g7QUE1Qkw7QUFBQTtBQUFBLCtCQThCZVMsV0E5QmYsRUE4QjJCO0FBQUE7O0FBQ25CLFVBQU1DLE1BQU0sR0FBSSxJQUFJcEgseURBQUosQ0FBZ0JtSCxXQUFoQixDQUFoQjtBQUNBQyxZQUFNLENBQUNDLElBQVAsR0FBY0MsSUFBZCxDQUFtQixVQUFBQyxLQUFLLEVBQUU7QUFFdEI7QUFDQTtBQUNBLGFBQUksQ0FBQ3JILE1BQUwsR0FBY3NILE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEtBQUksQ0FBQ3ZILE1BQW5CLEVBQTJCa0gsTUFBTSxDQUFDbEgsTUFBbEMsQ0FBZDtBQUNBLGFBQUksQ0FBQ2tHLGNBQUwsR0FBc0IsSUFBdEI7QUFDSCxPQU5EO0FBT0g7QUF2Q0w7QUFBQTtBQUFBLGlDQXlDaUJ2TyxLQXpDakIsRUF5Q3dCRSxNQXpDeEIsRUF5QytCO0FBQ3ZCLFVBQUkyUCxRQUFRLEdBQUduSyxRQUFRLENBQUNvSyxvQkFBVCxDQUE4QixRQUE5QixDQUFmO0FBQ0EsVUFBSXJCLE1BQU0sR0FBR29CLFFBQVEsQ0FBQyxDQUFELENBQVIsSUFBZW5LLFFBQVEsQ0FBQ3FLLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBNUI7QUFDQXJLLGNBQVEsQ0FBQy9ILElBQVQsQ0FBY3FTLFdBQWQsQ0FBMEJ2QixNQUExQjtBQUNBQSxZQUFNLENBQUN6TyxLQUFQLEdBQWVBLEtBQWY7QUFDQXlPLFlBQU0sQ0FBQ3ZPLE1BQVAsR0FBZ0JBLE1BQWhCO0FBQ0EsYUFBT3VPLE1BQVA7QUFDSCxLQWhETCxDQXFEQTs7QUFyREE7QUFBQTtBQUFBLDhCQXNEY3RNLElBdERkLEVBc0RvQnlLLE9BdERwQixFQXNENkJxRCxPQXREN0IsRUFzRHNDO0FBQUE7O0FBQzlCLFVBQU1DLFFBQVEsR0FBR3hLLFFBQVEsQ0FBQ3FLLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBakI7QUFDQUcsY0FBUSxDQUFDbFEsS0FBVCxHQUFpQjRNLE9BQU8sQ0FBQzVNLEtBQVIsR0FBZ0I0TSxPQUFPLENBQUN1RCxTQUF6QyxDQUY4QixDQUVxQjs7QUFDbkRELGNBQVEsQ0FBQ2hRLE1BQVQsR0FBa0IwTSxPQUFPLENBQUMxTSxNQUFSLEdBQWlCME0sT0FBTyxDQUFDd0QsVUFBM0M7QUFDQSxVQUFNQyxVQUFVLEdBQUdILFFBQVEsQ0FBQ3ZCLFVBQVQsQ0FBb0IsSUFBcEIsQ0FBbkI7QUFDQSxVQUFNMkIsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsVUFBSUMsR0FBSixFQUFTQyxHQUFUO0FBQ0E1RCxhQUFPLENBQUNoSixNQUFSLENBQWUxQixPQUFmLENBQXVCLFVBQUEyQixLQUFLLEVBQUk7QUFBQztBQUM3QixZQUFHQSxLQUFLLENBQUNPLElBQU4sSUFBYyxXQUFqQixFQUE4QjtBQUFDO0FBQzNCbU0sYUFBRyxHQUFHLENBQU47QUFDQUMsYUFBRyxHQUFHLENBQU47QUFDQTNNLGVBQUssQ0FBQ0gsSUFBTixDQUFXeEIsT0FBWCxDQUFtQixVQUFBYixLQUFLLEVBQUk7QUFDeEIsZ0JBQUdBLEtBQUssR0FBRyxDQUFYLEVBQWM7QUFBQztBQUNYZ1Asd0JBQVUsQ0FBQzdCLFNBQVgsQ0FBcUIsTUFBSSxDQUFDbkcsTUFBTCxDQUFZNEgsT0FBTyxDQUFDMVAsU0FBcEIsQ0FBckIsRUFDSTBQLE9BQU8sQ0FBQ1EsVUFBUixDQUFtQnBQLEtBQW5CLENBREosRUFDK0I0TyxPQUFPLENBQUNTLFVBQVIsQ0FBbUJyUCxLQUFuQixDQUQvQixFQUVJdUwsT0FBTyxDQUFDdUQsU0FGWixFQUV1QnZELE9BQU8sQ0FBQ3dELFVBRi9CLEVBR0lJLEdBQUcsR0FBRzVELE9BQU8sQ0FBQ3VELFNBSGxCLEVBRzZCSSxHQUFHLEdBQUczRCxPQUFPLENBQUN3RCxVQUgzQyxFQUlJeEQsT0FBTyxDQUFDdUQsU0FKWixFQUl1QnZELE9BQU8sQ0FBQ3dELFVBSi9CO0FBTUg7O0FBQ0RJLGVBQUc7O0FBQ0gsZ0JBQUdBLEdBQUcsR0FBSTVELE9BQU8sQ0FBQzVNLEtBQVIsR0FBZ0IsQ0FBMUIsRUFBOEI7QUFBQztBQUMzQndRLGlCQUFHLEdBQUcsQ0FBTjtBQUNBRCxpQkFBRztBQUNOO0FBQ0osV0FkRDtBQWVIOztBQUNELFlBQUcxTSxLQUFLLENBQUNPLElBQU4sSUFBYyxhQUFqQixFQUFnQztBQUFDO0FBQzdCa00sa0JBQVEsQ0FBQ2pNLElBQVQsT0FBQWlNLFFBQVEscUJBQVN6TSxLQUFLLENBQUNTLE9BQU4sQ0FBY3VJLEdBQWQsQ0FBa0IsVUFBQTFKLEdBQUc7QUFBQSxtQkFBSztBQUFDa0wsZ0JBQUUsRUFBRWxMLEdBQUcsQ0FBQ3JELENBQVQ7QUFBWTZRLGdCQUFFLEVBQUV4TixHQUFHLENBQUNyRCxDQUFKLEdBQVFxRCxHQUFHLENBQUNuRCxLQUE1QjtBQUFtQzRRLGdCQUFFLEVBQUV6TixHQUFHLENBQUNsRCxDQUEzQztBQUE4QzRRLGdCQUFFLEVBQUUxTixHQUFHLENBQUNsRCxDQUFKLEdBQVFrRCxHQUFHLENBQUNqRDtBQUE5RCxhQUFMO0FBQUEsV0FBckIsQ0FBVCxFQUFSO0FBQ0g7QUFDSixPQXZCRCxFQVA4QixDQThCM0I7O0FBRUgsV0FBS21JLE1BQUwsQ0FBWWxHLElBQVosSUFBb0IrTixRQUFwQixDQWhDOEIsQ0FnQ0Q7O0FBQzdCLGFBQU8sSUFBSVksaURBQUosQ0FBWTtBQUFDO0FBQ2hCdlEsaUJBQVMsRUFBRTRCLElBREk7QUFFZnZCLGVBQU8sRUFBRSxDQUZNO0FBR2ZFLGVBQU8sRUFBRSxDQUhNO0FBSWZkLGFBQUssRUFBRWtRLFFBQVEsQ0FBQ2xRLEtBSkQ7QUFLZkUsY0FBTSxFQUFFZ1EsUUFBUSxDQUFDaFEsTUFMRjtBQU1mb1EsZ0JBQVEsRUFBRUE7QUFOSyxPQUFaLENBQVA7QUFRSCxLQS9GTCxDQStGSzs7QUEvRkw7QUFBQTtBQUFBLHlCQW1HU1MsS0FuR1QsRUFtR2U7QUFDUCxXQUFLeEgsT0FBTCxDQUFhWSxTQUFiLEdBQXlCNEcsS0FBekI7QUFDQSxXQUFLeEgsT0FBTCxDQUFhZSxRQUFiLENBQXVCLENBQXZCLEVBQXlCLENBQXpCLEVBQTRCLEtBQUt0SyxLQUFqQyxFQUF3QyxLQUFLRSxNQUE3QztBQUNIO0FBdEdMO0FBQUE7QUFBQSwwQkF3R1VKLENBeEdWLEVBd0dZRyxDQXhHWixFQXdHYytRLElBeEdkLEVBd0dpQztBQUFBLFVBQWRDLFFBQWMsdUVBQUgsRUFBRztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQUsxSCxPQUFMLENBQWFZLFNBQWIsR0FBeUIsU0FBekI7QUFDQSxXQUFLWixPQUFMLENBQWEySCxJQUFiLEdBQW9CRCxRQUFRLEdBQUMsVUFBN0I7QUFDQSxXQUFLMUgsT0FBTCxDQUFhNEgsUUFBYixDQUFzQkgsSUFBdEIsRUFBMkJsUixDQUEzQixFQUE2QkcsQ0FBN0I7QUFDSDtBQWhITDtBQUFBO0FBQUEsOEJBa0hjSCxDQWxIZCxFQWtIZ0JHLENBbEhoQixFQWtIa0JNLFNBbEhsQixFQWtINEI7QUFDcEIsV0FBS2dKLE9BQUwsQ0FBYWlGLFNBQWIsQ0FBdUIsS0FBS25HLE1BQUwsQ0FBWTlILFNBQVosQ0FBdkIsRUFBOENULENBQTlDLEVBQWdERyxDQUFoRDtBQUNIO0FBcEhMO0FBQUE7QUFBQSwrQkFzSGVxTyxNQXRIZixFQXNIc0I7QUFDZCxXQUFLL0UsT0FBTDtBQUNBLFVBQUk2SCxPQUFPLEdBQUc5QyxNQUFNLENBQUN4TyxDQUFyQjtBQUNBLFVBQUl1UixPQUFPLEdBQUcvQyxNQUFNLENBQUNyTyxDQUFyQjs7QUFFQSxVQUFHLEtBQUs0TyxXQUFSLEVBQW9CO0FBQ2hCdUMsZUFBTyxJQUFHLEtBQUt4QyxNQUFMLENBQVk5TyxDQUF0QjtBQUNBdVIsZUFBTyxJQUFHLEtBQUt6QyxNQUFMLENBQVkzTyxDQUF0QjtBQUNILE9BUmEsQ0FVZDs7O0FBQ0EsVUFDS21SLE9BQU8sSUFBSSxLQUFLcFIsS0FBakIsSUFDQ3FSLE9BQU8sSUFBSSxLQUFLblIsTUFEakIsSUFFRWtSLE9BQU8sR0FBRzlDLE1BQU0sQ0FBQ3RPLEtBQWxCLElBQTRCLENBRjdCLElBR0VxUixPQUFPLEdBQUcvQyxNQUFNLENBQUNwTyxNQUFsQixJQUE0QixDQUpqQyxFQUtDO0FBQ0c7QUFDSCxPQWxCYSxDQXNCZDs7O0FBQ0EsVUFBSVUsT0FBTyxHQUFDME4sTUFBTSxDQUFDMU4sT0FBUCxHQUNBMUMsSUFBSSxDQUFDb1QsR0FBTCxDQUNJcFQsSUFBSSxDQUFDa0YsR0FBTCxDQUFTLENBQVQsRUFBWWdPLE9BQVosQ0FESixDQUN3QjtBQUR4QixPQURaO0FBS0EsVUFBSXRRLE9BQU8sR0FBQ3dOLE1BQU0sQ0FBQ3hOLE9BQVAsR0FBaUI1QyxJQUFJLENBQUNvVCxHQUFMLENBQVNwVCxJQUFJLENBQUNrRixHQUFMLENBQVMsQ0FBVCxFQUFZaU8sT0FBWixDQUFULENBQTdCO0FBQTREO0FBRTVELFVBQUlyUixLQUFLLEdBQUM5QixJQUFJLENBQUNrRixHQUFMLENBQ1UsS0FBS3BELEtBRGYsRUFDcUI7QUFDWG9SLGFBQU8sR0FBRzlDLE1BQU0sQ0FBQ3RPLEtBRjNCLElBR0E5QixJQUFJLENBQUNtRixHQUFMLENBQVMsQ0FBVCxFQUFZK04sT0FBWixDQUhWO0FBRytCOzs7QUFHL0IsVUFBSWxSLE1BQU0sR0FBR2hDLElBQUksQ0FBQ2tGLEdBQUwsQ0FBUyxLQUFLbEQsTUFBZCxFQUFzQm1SLE9BQU8sR0FBRy9DLE1BQU0sQ0FBQ3BPLE1BQXZDLElBQWlEaEMsSUFBSSxDQUFDbUYsR0FBTCxDQUFTLENBQVQsRUFBWWdPLE9BQVosQ0FBOUQ7QUFJQSxXQUFLOUgsT0FBTCxDQUFhaUYsU0FBYixDQUF1QixLQUFLbkcsTUFBTCxDQUFZaUcsTUFBTSxDQUFDL04sU0FBbkIsQ0FBdkIsRUFDSUssT0FESixFQUNZO0FBQ1JFLGFBRkosRUFHSWQsS0FISixFQUdVO0FBQ05FLFlBSkosRUFLSWhDLElBQUksQ0FBQ21GLEdBQUwsQ0FBUyxDQUFULEVBQVcrTixPQUFYLENBTEosRUFLd0I7QUFDcEJsVCxVQUFJLENBQUNtRixHQUFMLENBQVMsQ0FBVCxFQUFXZ08sT0FBWCxDQU5KLEVBT0lyUixLQVBKLEVBT1U7QUFDTkUsWUFSSjtBQVVILEtBeEtMLENBd0tLOztBQXhLTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBRU8sSUFBTThELFdBQWI7QUFBQTtBQUFBO0FBQTBCO0FBQ3RCLDZCQUF1RjtBQUFBLFFBQTFFekQsU0FBMEUsUUFBMUVBLFNBQTBFO0FBQUEsUUFBL0QrQyxVQUErRCxRQUEvREEsVUFBK0Q7QUFBQSxRQUFuREMsV0FBbUQsUUFBbkRBLFdBQW1EO0FBQUEsZ0NBQXRDZ08sV0FBc0M7QUFBQSxRQUF0Q0EsV0FBc0MsaUNBQXhCLEVBQXdCO0FBQUEsaUNBQXBCQyxZQUFvQjtBQUFBLFFBQXBCQSxZQUFvQixrQ0FBTCxFQUFLOztBQUFBOztBQUNuRixTQUFLalIsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLK0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtnTyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0g7O0FBUEw7QUFBQTtBQUFBLGlDQVNpQnRGLE9BVGpCLEVBU3lCekwsS0FUekIsRUFTOEQ7QUFBQTs7QUFBQSxVQUE5QkMsTUFBOEIsdUVBQXJCLElBQXFCO0FBQUEsVUFBZkMsT0FBZSx1RUFBTCxJQUFLO0FBQ3RELGFBQU8sSUFBSUwsb0RBQUosQ0FBYztBQUNqQkMsaUJBQVMsRUFBRSxLQUFLQSxTQURDO0FBRWpCQyxjQUFNLEVBQUUwTCxPQUFPLENBQUNXLEdBQVIsQ0FBWSxVQUFBeEwsS0FBSztBQUFBLGlCQUFLO0FBQUNSLGNBQUUsRUFBQyxLQUFJLENBQUM0UCxVQUFMLENBQWdCcFAsS0FBaEIsQ0FBSjtBQUE0Qk4sY0FBRSxFQUFDLEtBQUksQ0FBQzJQLFVBQUwsQ0FBZ0JyUCxLQUFoQjtBQUEvQixXQUFMO0FBQUEsU0FBakIsQ0FGUztBQUVzRTtBQUN2RlosYUFBSyxFQUFFQSxLQUhVO0FBSWpCQyxjQUFNLEVBQUdBLE1BSlE7QUFLakJDLGVBQU8sRUFBRUEsT0FMUTtBQU1qQlgsYUFBSyxFQUFFLEtBQUt1UixXQU5LO0FBT2pCclIsY0FBTSxFQUFFLEtBQUtzUjtBQVBJLE9BQWQsQ0FBUDtBQVNIO0FBbkJMO0FBQUE7QUFBQSw4QkFxQmNuUSxLQXJCZCxFQXFCb0I7QUFBQztBQUNkLGFBQU8sSUFBSUksOENBQUosQ0FBVztBQUNqQmxCLGlCQUFTLEVBQUUsS0FBS0EsU0FEQztBQUVqQkssZUFBTyxFQUFFLEtBQUs2UCxVQUFMLENBQWdCcFAsS0FBaEIsQ0FGUTtBQUdqQlAsZUFBTyxFQUFFLEtBQUs0UCxVQUFMLENBQWdCclAsS0FBaEIsQ0FIUTtBQUlqQnJCLGFBQUssRUFBRSxLQUFLdVIsV0FKSztBQUtqQnJSLGNBQU0sRUFBRSxLQUFLc1I7QUFMSSxPQUFYLENBQVA7QUFPRjtBQTdCTDtBQUFBO0FBQUEsK0JBK0JlblEsS0EvQmYsRUErQnFCO0FBQUM7QUFDZCxhQUFRLEVBQUVBLEtBQUYsR0FBVSxLQUFLa1EsV0FBaEIsR0FBK0IsS0FBS2pPLFVBQTNDO0FBQ0g7QUFqQ0w7QUFBQTtBQUFBLCtCQW1DZWpDLEtBbkNmLEVBbUNxQjtBQUNiLGFBQU9uRCxJQUFJLENBQUMwRSxLQUFMLENBQVksRUFBRXZCLEtBQUYsR0FBVSxLQUFLa1EsV0FBaEIsR0FBK0IsS0FBS2pPLFVBQS9DLElBQTJELEtBQUtrTyxZQUF2RSxDQURhLENBQ3VFO0FBQ3ZGO0FBckNMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNITyxJQUFNL1AsTUFBYjtBQUFBO0FBQUE7QUFBcUI7QUFDakIsd0JBQW1FO0FBQUEsUUFBdERsQixTQUFzRCxRQUF0REEsU0FBc0Q7QUFBQSxRQUEzQ0ssT0FBMkMsUUFBM0NBLE9BQTJDO0FBQUEsUUFBbENFLE9BQWtDLFFBQWxDQSxPQUFrQztBQUFBLDBCQUF6QmQsS0FBeUI7QUFBQSxRQUF6QkEsS0FBeUIsMkJBQWpCLEVBQWlCO0FBQUEsMkJBQWJFLE1BQWE7QUFBQSxRQUFiQSxNQUFhLDRCQUFMLEVBQUs7O0FBQUE7O0FBQy9ELFNBQUtLLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0ssT0FBTCxHQUFlQSxPQUFmLENBRitELENBRXhDOztBQUN2QixTQUFLRSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLZCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLRSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLSixDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUtHLENBQUwsR0FBUyxDQUFUO0FBQ0g7O0FBVEw7QUFBQTtBQUFBLDBCQVdVSCxDQVhWLEVBV2FHLENBWGIsRUFXZ0I7QUFDUixXQUFLSCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxXQUFLRyxDQUFMLEdBQVNBLENBQVQ7QUFDSDtBQWRMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTyxJQUFNcUosUUFBYjtBQUFBO0FBQUE7QUFDSSxvQkFBWWxELE1BQVosRUFBbUI7QUFBQTs7QUFDZixTQUFLdEcsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLRyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUttRyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLcUwsZUFBTCxHQUF1QixLQUF2QixDQUplLENBSWM7O0FBQzdCLFNBQUtULElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBS2hULFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLMFQsYUFBTCxHQUFxQixJQUFyQixDQVBlLENBT1c7O0FBQzFCLFNBQUtDLFVBQUwsR0FBa0IsQ0FBbEIsQ0FSZSxDQVFLOztBQUNwQixTQUFLVixRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS1csYUFBTCxHQUFxQixHQUFyQjtBQUNIOztBQVpMO0FBQUE7QUFBQSwyQkFjV2hVLElBZFgsRUFjZ0I7QUFDUixVQUFHLEtBQUtJLFFBQUwsSUFBaUIsQ0FBcEIsRUFBc0I7QUFDbEIsYUFBS0EsUUFBTCxHQUFnQkosSUFBaEI7QUFDSDs7QUFJRCxVQUFHLEtBQUs2VCxlQUFSLEVBQXdCO0FBQ3BCLGFBQUtSLFFBQUwsSUFBZ0IsQ0FBQ3JULElBQUksR0FBRyxLQUFLSSxRQUFiLElBQXVCLEVBQXZDO0FBQ0EsYUFBSzJFLEtBQUw7QUFDQSxhQUFLeUQsTUFBTCxDQUFZcUUsS0FBWixDQUFrQixLQUFLM0ssQ0FBdkIsRUFBMEIsS0FBS0csQ0FBL0IsRUFBa0MsS0FBSytRLElBQXZDLEVBQTZDLEtBQUtDLFFBQWxEOztBQUNBLFlBQUdyVCxJQUFJLEdBQUMsS0FBSytULFVBQWIsRUFBd0I7QUFDcEIsZUFBS0YsZUFBTCxHQUF1QixLQUF2QjtBQUNIO0FBQ0o7O0FBQ0QsV0FBS3pULFFBQUwsR0FBZ0JKLElBQWhCO0FBQ0g7QUE5Qkw7QUFBQTtBQUFBLDZCQWdDYW9ULElBaENiLEVBZ0NrQnBULElBaENsQixFQWdDdUI7QUFDWCxXQUFLb1QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsV0FBS1MsZUFBTCxHQUF1QixJQUF2QjtBQUNBLFdBQUtFLFVBQUwsR0FBa0IvVCxJQUFJLEdBQUcsS0FBSzhULGFBQTlCO0FBQ0EsV0FBS1QsUUFBTCxHQUFnQixLQUFLVyxhQUFyQjtBQUNBLFdBQUtqUCxLQUFMO0FBQ1A7QUF0Q0w7QUFBQTtBQUFBLDRCQXdDVztBQUNILFdBQUs3QyxDQUFMLEdBQVMsS0FBS3NHLE1BQUwsQ0FBWXBHLEtBQVosR0FBa0IsQ0FBbEIsR0FBc0IsS0FBS2lSLFFBQUwsR0FBYyxHQUE3QztBQUNBLFdBQUtoUixDQUFMLEdBQVMsS0FBS21HLE1BQUwsQ0FBWWxHLE1BQVosR0FBbUIsQ0FBbkIsR0FBdUIsS0FBSytRLFFBQUwsR0FBYyxHQUE5QztBQUNIO0FBM0NMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVPLElBQU1ILE9BQWI7QUFBQTtBQUFBO0FBQUE7O0FBQXFDO0FBQ2pDLG1CQUFZZSxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsaUZBQU1BLEtBQU47QUFDQSxVQUFLdkIsUUFBTCxHQUFnQnVCLEtBQUssQ0FBQ3ZCLFFBQU4sSUFBa0IsRUFBbEM7QUFGZTtBQUdsQjs7QUFKTDtBQUFBLEVBQTZCN08sOENBQTdCLEUsQ0FNQSwySjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNPLElBQU1HLE1BQWI7QUFBQTtBQUFBO0FBQ0ksa0JBQVk3RCxTQUFaLEVBQXVCMEMsS0FBdkIsRUFBOEI7QUFBQTs7QUFDMUIsU0FBS2dDLFlBQUwsQ0FBa0IxRSxTQUFsQixFQUE2QjBDLEtBQTdCO0FBQ0g7O0FBSEw7QUFBQTtBQUFBLGlDQUtpQjFDLFNBTGpCLEVBSzRCMEMsS0FMNUIsRUFLbUM7QUFDM0IsV0FBSzFDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsV0FBSzBDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUtYLENBQUwsR0FBUyxDQUFUO0FBQ0EsV0FBS0csQ0FBTCxHQUFTLENBQVQ7O0FBQ0EsY0FBT2xDLFNBQVA7QUFDSSxhQUFLLElBQUw7QUFDSSxlQUFLa0MsQ0FBTCxHQUFTLENBQUNRLEtBQVY7QUFDSjs7QUFFQSxhQUFLLE1BQUw7QUFDSSxlQUFLUixDQUFMLEdBQVNRLEtBQVQ7QUFDSjs7QUFFQSxhQUFLLE9BQUw7QUFDSSxlQUFLWCxDQUFMLEdBQVNXLEtBQVQ7QUFDSjs7QUFFQSxhQUFLLE1BQUw7QUFDSSxlQUFLWCxDQUFMLEdBQVMsQ0FBQ1csS0FBVjtBQUNKO0FBZko7QUFrQkg7QUE1Qkw7QUFBQTtBQUFBLHlCQThCU3FSLE1BOUJULEVBOEJpQkMsRUE5QmpCLEVBOEJxQjtBQUFDO0FBQ2RELFlBQU0sQ0FBQ2hTLENBQVAsSUFBWWlTLEVBQUUsSUFBSSxLQUFLalMsQ0FBTCxHQUFTLElBQWIsQ0FBZDtBQUNBZ1MsWUFBTSxDQUFDN1IsQ0FBUCxJQUFZOFIsRUFBRSxJQUFJLEtBQUs5UixDQUFMLEdBQVMsSUFBYixDQUFkO0FBQ0g7QUFqQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUdPLElBQU1xTixLQUFiO0FBQUE7QUFBQTtBQUNJLGlCQUFZbkUsSUFBWixFQUFpQjtBQUFBOztBQUNiLFNBQUtBLElBQUwsR0FBWUEsSUFBWixDQURhLENBRWI7QUFDQTs7QUFDQSxTQUFLa0UsT0FBTCxHQUFlbEUsSUFBSSxDQUFDN0IsWUFBTCxDQUFrQitGLE9BQWpDLENBSmEsQ0FJNEI7O0FBQ3pDLFNBQUtWLFFBQUwsR0FBZ0J4RCxJQUFJLENBQUM3QixZQUFMLENBQWtCcUYsUUFBbEMsQ0FMYSxDQUs4Qjs7QUFDM0MsU0FBSzVOLE1BQUwsR0FBY29LLElBQUksQ0FBQzdCLFlBQUwsQ0FBa0J2SSxNQUFoQyxDQU5hLENBTTBCOztBQUN2QyxTQUFLZixRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS2dVLG1CQUFMLEdBQTJCLEdBQTNCLENBUmEsQ0FRa0I7O0FBQy9CLFNBQUtDLGVBQUwsR0FBdUIsSUFBdkIsQ0FUYSxDQVNlO0FBQy9COztBQVhMO0FBQUE7QUFBQSwyQkFhVSxDQUNGO0FBQ0g7QUFmTDtBQUFBO0FBQUEsMkJBaUJXclUsSUFqQlgsRUFpQmdCO0FBQ1IsVUFBRyxLQUFLSSxRQUFMLElBQWdCLENBQW5CLEVBQXFCO0FBQ2pCLGFBQUtBLFFBQUwsR0FBZ0JKLElBQWhCO0FBQ0g7O0FBQ0QsVUFBRyxLQUFLb1UsbUJBQUwsR0FBMkIsQ0FBOUIsRUFBZ0M7QUFDNUIsYUFBS0UsUUFBTCxDQUFjdFUsSUFBZDtBQUNIOztBQUNELFdBQUtvVSxtQkFBTCxJQUE0QnBVLElBQUksR0FBQyxLQUFLSSxRQUF0QztBQUNBLFdBQUtBLFFBQUwsR0FBZ0JKLElBQWhCLENBUlEsQ0FTUjtBQUNIO0FBM0JMO0FBQUE7QUFBQSw2QkE2QmFBLElBN0JiLEVBNkJrQjtBQUFBOztBQUNWO0FBQ0E7QUFDQTtBQUVBLFVBQUl1VSxRQUFRLEdBQUcsRUFBZixDQUxVLENBS1E7O0FBQ2xCLFdBQUksSUFBSXBPLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBRyxDQUFqQixFQUFtQkEsQ0FBQyxFQUFwQixFQUF1QjtBQUNuQixZQUFJd0MsR0FBRyxHQUFHLElBQUlzRSx3Q0FBSixDQUFRLEtBQUs5TCxNQUFiLENBQVYsQ0FEbUIsQ0FDWTs7QUFDL0J3SCxXQUFHLENBQUN6RyxDQUFKLEdBQVEsSUFBUixDQUZtQixDQUVOOztBQUNieUcsV0FBRyxDQUFDdEcsQ0FBSixHQUFRLE9BQU04RCxDQUFDLEdBQUMsRUFBaEI7QUFDQW9PLGdCQUFRLENBQUM5TixJQUFULENBQWNrQyxHQUFkO0FBQ0g7O0FBRUQ0TCxjQUFRLENBQUNqUSxPQUFULENBQWlCLFVBQUFxRSxHQUFHLEVBQUU7QUFDbEIsYUFBSSxDQUFDb0csUUFBTCxDQUFjUyxnQkFBZCxDQUErQjdHLEdBQS9COztBQUNBLGFBQUksQ0FBQzhHLE9BQUwsQ0FBYWhKLElBQWIsQ0FBa0JrQyxHQUFsQjtBQUNILE9BSEQ7QUFLQSxXQUFLeUwsbUJBQUwsR0FBNEIsS0FBS0MsZUFBakM7QUFDSDtBQWhETDs7QUFBQTtBQUFBLEkiLCJmaWxlIjoianMvZWx2ZW4tc2NvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjbGFzcyBBSSB7Ly/QkdCw0LfQvtCy0YvQtSDQutC70LDRgdGBLCDQt9C00LXRgdGMINGF0YDQsNC90LjRgtGB0Y8g0L7QsdGJ0LjQuSDRhNGD0L3QutGG0LjQvtC90LDQuy4g0KDQsNGB0YjQuNGA0Y/RjtGJ0LjQuSDQutC70LDRgdGBIC0gRHVtbXksINGC0YPQv9C+0Lkg0JjQmFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbnRyb2woYm9keSkge1xuICAgICAgICB0aGlzLmJvZHkgPSBib2R5O1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKSB7XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQge0FJIH0gZnJvbSBcIi4uL2FpXCI7XG5cbmV4cG9ydCBjbGFzcyBEdW1teSBleHRlbmRzIEFJIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsvL9CX0LTQtdGB0Ywg0YXRgNCw0L3Rj9GC0YHRjyDQstGB0LUg0L/QsNGA0LDQvNC10YLRgNGLLCDQvdCw0L/RgNC40LzQtdGALCDQutCw0LrQuNC1INC30LDQtNCw0YfQuCDRgyDQv9C10YDRgdC+0L3QsNC20LAsINC10LPQviDQv9Cw0LzRj9GC0YwsINGH0YLQviDQtNC10LvQsNC10YIg0L/RgNGP0LzQviDRgdC10LnRh9Cw0YEg0Lgg0YIu0LQuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAxMDAwOy8v0JzQtdC90Y/QtdGCINC90LDQv9GA0LDQstC70LXQvdC40LUg0LrQsNC20LTRi9C1IDEwMDAg0LzRgVxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiZG93blwiO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDsvL9Ca0L7Qs9C00LAg0LIg0L/QvtGB0LvQtdC00L3QuNC5INGA0LDQtyDQvNC10L3Rj9C7INC90LDQv9GA0LDQstC70LXQvdC40LVcbiAgICB9XG5cbiAgICBjaGFuZ2VEaXJlY3Rpb24oKSB7Ly/QntC00LjQvSDQuNC3INCx0LvQvtC60L7QsiDQv9GA0LjQvdGP0YLQuNGPINGA0LXRiNC10L3QuNC5XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duLHVwLGxlZnQscmlnaHRcIi5zcGxpdCgnLCcpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KV07XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWUpe1xuICAgICAgICBpZigodGltZSAtIHRoaXMubGFzdFRpbWUpID4gdGhpcy5kdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9keS53YWxrKHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWUpO1xuICAgIH1cbn0iLCJpbXBvcnQge0FJIH0gZnJvbSBcIi4uL2FpXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW5kU2NyaXB0IGV4dGVuZHMgQUkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7Ly/Ql9C00LXRgdGMINGF0YDQsNC90Y/RgtGB0Y8g0LLRgdC1INC/0LDRgNCw0LzQtdGC0YDRiywg0L3QsNC/0YDQuNC80LXRgCwg0LrQsNC60LjQtSDQt9Cw0LTQsNGH0Lgg0YMg0L/QtdGA0YHQvtC90LDQttCwLCDQtdCz0L4g0L/QsNC80Y/RgtGMLCDRh9GC0L4g0LTQtdC70LDQtdGCINC/0YDRj9C80L4g0YHQtdC50YfQsNGBINC4INGCLtC0LlxyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICAgICAgdGhpcy5ldmVudFRpbWUgPSAxNTAwO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuZXZlbnRTdGFydCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKXtcclxuICAgICAgICBpZih0aGlzLmxhc3RUaW1lID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudFRpbWUgLT0gdGltZSAtIHRoaXMubGFzdFRpbWU7XHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmV2ZW50U3RhcnQpey8v0JXRgdC70Lgg0YHQvtCx0YvRgtC40LUg0LXRiNGRINC90LUg0L3QsNGH0LDQu9C+0YHRjFxyXG4gICAgICAgICAgICBpZih0aGlzLmV2ZW50VGltZSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRTdGFydCA9IHRydWU7Ly/QktGA0YPQsdCw0LXQvCDRgdC+0LHRi9GC0LjQtVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5LmhpdCh0aGlzLmRpcmVjdGlvbik7Ly/QodC+0LHRi9GC0LjQtSAtINC+0YDQuiDQsdGM0ZHRglxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS53YWxrKHRoaXMuZGlyZWN0aW9uKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnN0YW5kKHRoaXMuZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBpc0FncmVzc2l2ZXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGJlY29tZUFncmVzc2l2ZSgpe1xyXG4gICAgICAgIHRoaXMuYWdyZXNzaXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYmVjb21lUGVhY2VmdWwoKXtcclxuICAgICAgICB0aGlzLmFncmVzc2l2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc09yY0FncmVzc2l2ZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFncmVzc2l2ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QUkgfSBmcm9tIFwiLi4vYWlcIjtcclxuaW1wb3J0IHtpc0FncmVzc2l2ZX0gZnJvbSAnLi9pc0FncmVzc2l2ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGVhY2VmdWwgZXh0ZW5kcyBBSSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHsvL9CX0LTQtdGB0Ywg0YXRgNCw0L3Rj9GC0YHRjyDQstGB0LUg0L/QsNGA0LDQvNC10YLRgNGLLCDQvdCw0L/RgNC40LzQtdGALCDQutCw0LrQuNC1INC30LDQtNCw0YfQuCDRgyDQv9C10YDRgdC+0L3QsNC20LAsINC10LPQviDQv9Cw0LzRj9GC0YwsINGH0YLQviDQtNC10LvQsNC10YIg0L/RgNGP0LzQviDRgdC10LnRh9Cw0YEg0Lgg0YIu0LQuXHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMTA1MDsvL9Cc0LXQvdGP0LXRgiDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC60LDQttC00YvQtSAxMDAwINC80YFcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwibGVmdFwiO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWVEdW1iID0gMDsvL9Ca0L7Qs9C00LAg0LIg0L/QvtGB0LvQtdC00L3QuNC5INGA0LDQtyDQvNC10L3Rj9C7INC90LDQv9GA0LDQstC70LXQvdC40LVcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjsvL9Cf0LXRgNC10LTQsNGR0Lwg0LjQs9GA0L7QutCwLCDRh9GC0L7QsdGLINC+0YDQuiDQvNC+0LMg0YHQu9C10LTQuNGC0Ywg0LfQsCDQvdC40Lwg0Lgg0LDRgtCw0LrQvtCy0LDRgtGMINC10LPQvlxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3R1Y2sgPSBmYWxzZTsvL9CV0YHQu9C4IHRydWUsINC+0YDQuiDRg9C/0LXRgNGB0Y8g0LIg0YHRgtC10L3Rg1xyXG4gICAgICAgIHRoaXMuY2hhbmdlV2F5SW5pdCA9IDUwMDsvL9CV0YHQu9C4INGD0L/QtdGA0YHRjyDQsiDQv9GA0LXQv9GP0YLRgdGC0LLQuNC1LCDRjdGC0L4g0LLRgNC10LzRjyDQvtC9INC00LLQuNCz0LDQtdGC0YHRjyDQsiDQu9GO0LHQvtC8INC00YDRg9Cz0L7QvCDQvdCw0L/RgNCw0LLQu9C10L3QuNC4INCyINC90LDQtNC10LbQtNC1INC+0LHQvtC50YLQuCDQv9GA0LXQv9GP0YLRgdGC0LLQuNC1XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VXYXkgPSB0aGlzLmNoYW5nZVdheUluaXQ7XHJcbiAgICAgICAgdGhpcy5vbGRYID0gMDsvL9CSINGN0YLQuCDQv9C10YDQtdC80LXQvdC90YvQtSDQsdGD0LTQtdC8INC/0LjRgdCw0YLRjCDRgdGC0LDRgNGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0YsuINCV0YHQu9C4INC90L7QstGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0YDQsNCy0L3RiyDRgdGC0LDRgNGL0LwsINC30L3QsNGH0LjRgiDQvtGA0Log0YPQv9C10YDRgdGPINCyINC/0YDQtdC/0Y/RgtGB0YLQstC40LVcclxuICAgICAgICB0aGlzLm9sZFkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmxhc3RUaW1lQWdyZXNzaXZlID0gMDtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uQWdyZXNzaXZlID0gNTAwOy8v0J3QsNGB0LrQvtC70YzQutC+INGH0LDRgdGC0L4g0LzQtdC90Y/RjtGCINC90LDQv9GA0LDQstC70LXQvdC40LUg0LDQs9GA0LXRgdGB0LjQstC90YvQtSDQvtGA0LrQuFxyXG4gICAgICAgIHRoaXMudGltZU9mTWFyY2ggPSA0NTYwOy8v0JrQvtCz0LTQsCDQvtGA0Log0YLQvtC70YzQutC+INC/0L7Rj9Cy0LjQu9GB0Y8sINGN0YLQviDQstGA0LXQvNGPINC+0L0g0L/RgNC+0YHRgtC+INC00LLQuNC20LXRgtGB0Y8g0LIg0L7QtNC90L7QvCDQvdCw0L/RgNCw0LLQu9C10L3QuNC4LiDQn9C+0YHQu9C1IC0g0L3QsNGH0LjQvdCw0LXRgiDQtNC10LnRgdGC0LLQvtCy0LDRgtGMINGB0LDQvNC+0YHRgtC+0Y/RgtC10LvRjNC90L5cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VEaXJlY3Rpb24oKSB7Ly/QntC00LjQvSDQuNC3INCx0LvQvtC60L7QsiDQv9GA0LjQvdGP0YLQuNGPINGA0LXRiNC10L3QuNC5XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInVwLGxlZnRcIi5zcGxpdCgnLCcpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKV07XHJcbiAgICAgICAgLy8gdGhpcy5kaXJlY3Rpb24gPSBcImRvd24sdXAsbGVmdCxyaWdodFwiLnNwbGl0KCcsJylbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjQpXTtcclxuXHJcbiAgICAgICAgLy8gLy/Qo9C80LXQvdGM0YjQuNC8INCy0LXRgNC+0Y/RgtC90L7RgdGC0Ywg0L/QtdGA0LXQvNC10YnQtdC90LjRjyDQvtGA0LrQsCDQstC/0YDQsNCy0L4g0LjQu9C4INCy0L3QuNC3XHJcbiAgICAgICAgLy8gaWYodGhpcy5kaXJlY3Rpb24gPT0gJ2Rvd24nKXtcclxuICAgICAgICAvLyAgICAgaWYoTWF0aC5yYW5kb20oKT4wLjkpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24oKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAgdXBkYXRlKHRpbWUpe1xyXG4gICAgICAgIGlmKHRoaXMubGFzdFRpbWUgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmKHRoaXMudGltZU9mTWFyY2ggPiAwKXsvL9Ce0YDQuiDQtdGJ0ZEg0LzQsNGA0YjQuNGA0YPQtdGCLCDRgi7QtS4g0LfQsNGF0L7QtNC40YIg0L3QsCDQu9C+0LrQsNGG0LjRjlxyXG4gICAgICAgICAgICB0aGlzLnRpbWVPZk1hcmNoIC09IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc3R1Y2spey8v0JXRgdC70Lgg0L7RgNC6INC30LDRgdGC0YDRj9C7LCDQtNCw0LvRjNC90LXQudGI0LjRhSDQv9GA0L7QstC10YDQvtC6IGVsc2UgaWYg0L3QtSDQsdGD0LTQtdGCXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlV2F5IC09IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgICAgICBpZih0aGlzLmNoYW5nZVdheSA8IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VXYXkgPSB0aGlzLmNoYW5nZVdheUluaXQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0dWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihpc0FncmVzc2l2ZS5pc09yY0FncmVzc2l2ZSgpKXsvL9Cf0YDQvtCy0LXRgNC60LAg0L7RgNC60LAg0L3QsCDQsNCz0YDQtdGB0YHQuNGOXHJcbiAgICAgICAgICAgIHRoaXMuYWdyZXNzaXZlQmVoYXZpb3VyKHRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmlzU3R1Y2soKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5kdW1iQmVoYXZpb3VyKHRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmlzU3R1Y2soKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgICB0aGlzLmJvZHkud2Fsayh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGR1bWJCZWhhdmlvdXIodGltZSl7XHJcbiAgICAgICAgaWYoKHRpbWUgLSB0aGlzLmxhc3RUaW1lRHVtYikgPiB0aGlzLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWVEdW1iID0gdGltZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBhZ3Jlc3NpdmVCZWhhdmlvdXIodGltZSl7XHJcbiAgICAgICAgLy8gaWYodGhpcy5ib2R5LmdvdFBsYXllcil7XHJcbiAgICAgICAgICAgIGxldCBjb3JyZWN0aW9uID0gMTA7Ly/QvtGA0Log0LHRjNGR0YIg0L3QsCDRgNCw0YHRgdGC0L7Rj9C90LjQuCA1LCDQtdC80YMg0L3QtSDQvdGD0LbQvdC+INCx0YvRgtGMINCy0L/Qu9C+0YLQvdGD0Y4g0Log0LjQs9GA0L7QutGDICjQuNC90LDRh9C1INC+0YDQuiDQsdGM0ZHRgiDRgtC+0LvRjNC60L4g0L/RgNC4INGB0YLQvtC70LrQvdC+0LLQtdC90LjQuCDRgSDQuNCz0YDQvtC60L7QvCwg0LAg0L7RgNC60Lgg0LjQt9Cx0LXQs9Cw0Y7RgiDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LkpXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYm9keS54ICsgdGhpcy5ib2R5LmNvbGxpc2lvblNoYXBlLnggLSBjb3JyZWN0aW9uIDwgdGhpcy5wbGF5ZXIueCArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLnggKyB0aGlzLnBsYXllci5jb2xsaXNpb25TaGFwZS53aWR0aCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5LnggKyB0aGlzLmJvZHkuY29sbGlzaW9uU2hhcGUueCArIHRoaXMuYm9keS5jb2xsaXNpb25TaGFwZS53aWR0aCArIGNvcnJlY3Rpb24gPiB0aGlzLnBsYXllci54ICsgdGhpcy5wbGF5ZXIuY29sbGlzaW9uU2hhcGUueCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5LnkgKyB0aGlzLmJvZHkuY29sbGlzaW9uU2hhcGUueSAtY29ycmVjdGlvbiA8IHRoaXMucGxheWVyLnkgKyB0aGlzLnBsYXllci5jb2xsaXNpb25TaGFwZS55ICsgdGhpcy5wbGF5ZXIuY29sbGlzaW9uU2hhcGUuaGVpZ2h0ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHkueSArIHRoaXMuYm9keS5jb2xsaXNpb25TaGFwZS55ICsgdGhpcy5ib2R5LmNvbGxpc2lvblNoYXBlLmhlaWdodCArY29ycmVjdGlvbj4gdGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLnkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaygpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZigodGltZSAtIHRoaXMubGFzdFRpbWVBZ3Jlc3NpdmUpID4gdGhpcy5kdXJhdGlvbkFncmVzc2l2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFncmVzc2l2ZURpcmVjdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lQWdyZXNzaXZlID0gdGltZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY2hhbmdlQWdyZXNzaXZlRGlyZWN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5ib2R5LnggPj0gdGhpcy5wbGF5ZXIueCAmJiB0aGlzLmJvZHkueSA+PSB0aGlzLnBsYXllci55KXtcclxuICAgICAgICAgICAgaWYoTWF0aC5yYW5kb20oKT4wLjUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAndXAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuYm9keS54IDwgdGhpcy5wbGF5ZXIueCAmJiB0aGlzLmJvZHkueSA+PSB0aGlzLnBsYXllci55KXtcclxuICAgICAgICAgICAgaWYoTWF0aC5yYW5kb20oKT4wLjUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3VwJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmJvZHkueCA8IHRoaXMucGxheWVyLnggJiYgdGhpcy5ib2R5LnkgPCB0aGlzLnBsYXllci55KXtcclxuICAgICAgICAgICAgaWYoTWF0aC5yYW5kb20oKT4wLjUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2Rvd24nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuYm9keS54ID49IHRoaXMucGxheWVyLnggJiYgdGhpcy5ib2R5LnkgPCB0aGlzLnBsYXllci55KXtcclxuICAgICAgICAgICAgaWYoTWF0aC5yYW5kb20oKT4wLjUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnZG93bic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlzU3R1Y2soKXsvL9Cf0YDQvtCy0LXRgNC60LAsINCy0L7Qt9C80L7QttC90L4g0L7RgNC6INGD0L/QtdGA0YHRjyDQsiDQv9GA0LXQv9GP0YLRgdGC0LLQuNC1XHJcbiAgICAgICAgaWYodGhpcy5ib2R5LnggPT0gdGhpcy5vbGRYICYmIHRoaXMuYm9keS55ID09IHRoaXMub2xkWSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0dWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT0gJ3VwJyB8fCB0aGlzLmRpcmVjdGlvbiA9PSAnZG93bicpe1xyXG4gICAgICAgICAgICAgICAgaWYoTWF0aC5yYW5kb20oKSA+MC41KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCc7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiA9PSAncmlnaHQnIHx8IHRoaXMuZGlyZWN0aW9uID09ICdsZWZ0Jyl7XHJcbiAgICAgICAgICAgICAgICBpZihNYXRoLnJhbmRvbSgpID4wLjUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3VwJztcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2Rvd24nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub2xkWCA9IHRoaXMuYm9keS54O1xyXG4gICAgICAgIHRoaXMub2xkWSA9IHRoaXMuYm9keS55O1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaygpe1xyXG4gICAgICAgIHRoaXMuYm9keS5oaXQoKTtcclxuICAgICAgICAvLyB0aGlzLmJvZHkuZ290UGxheWVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0SGl0KCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtTcHJpdGV9IGZyb20gJy4vc3ByaXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb24gZXh0ZW5kcyBTcHJpdGV7XHJcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lLCBmcmFtZXMsIHNwZWVkLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjR9KSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBpbWFnZU5hbWU6IGltYWdlTmFtZSxcclxuICAgICAgICAgICAgc291cmNlWDogZnJhbWVzWzBdLnN4LFxyXG4gICAgICAgICAgICBzb3VyY2VZOiBmcmFtZXNbMF0uc3ksXHJcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGF1dG9ydW47XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7Ly/QstGA0LXQvNGPINC+0YIg0L/QvtGB0LvQtdC00L3QtdCz0L4g0YTRgNC10LnQvNCwINCw0L3QuNC80LDRhtC40LhcclxuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbEZyYW1lcyA9IHRoaXMuZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICBcclxuICAgICAgICAvKtCU0LvRjyDQvtGC0YHQu9C10LbQuNCy0LDQvdC40Y8g0L/QvtGB0LvQtdC00L3QtdCz0L4g0LrQsNC00YDQsC4g0J3QsNC/0YDQuNC80LXRgCwg0L/QvtGB0LvQtSDQv9C+0YHQu9C10LTQvdC10LPQviDQutCw0LTRgNCwINCw0L3QuNC80LDRhtC40Lgg0YHRgtGA0LXQu9GM0LHRiywg0L/QtdGA0YHQvtC90LDQtiDQv9C10YDQtdGB0YLQsNGR0YIg0YHRgtGA0LXQu9GP0YLRjFxyXG4gICAgICAgINCt0YLQsCDQv9C10YDQtdC80LXQvdC90LDRjyDQt9Cw0LTQsNC10YLRgdGPINCyINC60LvQsNGB0YHQtSBCb2R5LiDQndCw0L/RgNC40LzQtdGAOiB0aGlzLnZpZXcub25FbmQgPSAoKT0+dGhpcy5pc1Nob290aW5nID0gZmFsc2U7Ki9cclxuICAgICAgICB0aGlzLm9uRW5kID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGcmFtZShpbmRleCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VYID0gdGhpcy5mcmFtZXNbaW5kZXhdLnN4O1xyXG4gICAgICAgIHRoaXMuc291cmNlWSA9IHRoaXMuZnJhbWVzW2luZGV4XS5zeTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKSB7Ly/QodGC0LDRgNGCINCw0L3QuNC80LDRhtC40Lgg0YEg0YHQsNC80L7Qs9C+INC90LDRh9Cw0LvQsFxyXG4gICAgICAgIGlmKCF0aGlzLnJ1bm5pbmcpe1xyXG4gICAgICAgICAgICB0aGlzLnNldEZyYW1lKDApO1xyXG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgbmV4dEZyYW1lKCkge1xyXG4gICAgICAgIGlmKCh0aGlzLmN1cnJlbnRGcmFtZSArIDEpID09IHRoaXMudG90YWxGcmFtZXMpIHsvL9CV0YHQu9C4INGN0YLQviDQv9C+0YHQu9C10LTQvdC40Lkg0LrQsNC00YAsINGC0L4uLi5cclxuICAgICAgICAgICAgaWYodGhpcy5vbkVuZCkgey8vLi4u0LXRgdC70Lgg0LfQsNC00LDQvdCwINC60L7QvdGG0L7QstC60LAsINC30LDQv9GD0YHQutCw0LXQvC4g0J3QsNC/0YDQuNC80LXRgDogdGhpcy52aWV3Lm9uRW5kID0gKCk9PnRoaXMuaXNTaG9vdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMucmVwZWF0KSB7Ly8uLi4g0LXRgdC70Lgg0LfQsNC00LDQvSDQv9C+0LLRgtC+0YAsINC/0L7QstGC0L7RgNGP0LXQvFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTsvLy4uLiDQuNC90LDRh9C1IC0g0YHRgtC+0L8g0LDQvdC40LzQsNGG0LjRj1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0RnJhbWUodGhpcy5jdXJyZW50RnJhbWUgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIGlmKCF0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmxhc3RUaW1lID09IDApIHsvL9Ct0YLQsCDQv9GA0L7QstC10YDQutCwINC90YPQttC90LAg0YLQvtC70YzQutC+INC00LvRjyDQv9C10YDQstC+0LPQviDQstGL0LfQvtCy0LAgdXBkYXRlKCksINGH0YLQvtCx0Ysg0LjQvdC40YbQuNCw0LvQuNC30LjRgNC+0LLQsNGC0YwgdGhpcy5sYXN0VGltZVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSA+IHRoaXMuc3BlZWQpIHsvL9Cg0LDQt9C90LjRhtCwINC/0L4g0LLRgNC10LzQtdC90Lgg0LzQtdC20LTRgyDQv9GA0L7RiNC70YvQvCDQuCDRgtC10LrRg9GJ0LjQvCDQutCw0LTRgNC+0Lw6ICgxMS0yKT4xMCwgKDEyLTIpPjEwLCAoMTMtMik+MTAgLSDQt9C00LXRgdGMINC/0YDQvtGI0LvQviAxMNC80YEsINCwIHNwZWVkINCyINGN0YLQvtC8INC/0YDQuNC80LXRgNC1INC60LDQuiDRgNCw0Lcg0YDQsNCy0LXQvSAxMNC80YEsINC30L3QsNGH0LjRgiDQvNC10L3Rj9C10Lwg0LrQsNC00YBcclxuICAgICAgICAgICAgdGhpcy5uZXh0RnJhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8v0J7RgdC90L7QstCwINCy0YHQtdGFINC/0LXRgNGB0L7QvdCw0LbQtdC5XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gXCIuL3ZlY3RvclwiO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJTaGVldCB9IGZyb20gXCIuL2NoYXJhY3Rlci1zaGVldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvZHkgey8vUGxheWVyIC0+IEJvZHkgfiBDaGFyYWN0ZXJTaGVldCAtPiBTcHJpdGVTaGVldCB+IFNwcml0ZVxyXG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgc3BlZWR9KSB7XHJcbiAgICAgICAgdGhpcy54ID0gLTEwMDsvL9Cf0L7Qu9C+0LbQtdC90LjQtSDQvtCx0YrQtdC60YLQsFxyXG4gICAgICAgIHRoaXMueSA9IC0xMDA7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkOy8v0KHQutC+0YDQvtGB0YLRjCDQv9C10YDQtdC80LXRidC10L3QuNGPXHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoXCJsZWZ0XCIsIDApOy8v0J3QsNC/0YDQsNCy0LvQtdC90LjQtSDQv9C10YDQtdC80LXRidC10L3QuNGPXHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7Ly/QktGA0LXQvNGPINC/0L7RgdC70LXQtNC90LXQs9C+INC60LDQtNGA0LBcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSB7fTsvL9Ca0L7QvdGC0LXQudC90LXRgCDQtNC70Y8g0YXRgNCw0L3QtdC90LjRjyDQsNC90LjQvNCw0YbQuNC5IHt3YWxrX2Rvd246IC4uLCB3YWxrX3VwOiAuLiDQuCDRgi7QtC4gfVxyXG5cclxuICAgICAgICAvL9Ck0L7RgNC80LAsINC60L7RgtC+0YDQsNGPINCx0YPQtNC10YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGM0YHRjyDQtNC70Y8g0LrQvtC70LvQuNC30LjQuC4g0J7QvdCwINC90LDRh9C40L3QsNC10YLRgdGPINC90LUg0L7RgiDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDRgdC/0YDQsNC50YLQsCwg0LAg0L7RgiB4OiAxOCwgeTogMTVcclxuICAgICAgICB0aGlzLmNvbGxpc2lvblNoYXBlID0ge3g6IDE4LCB5OiAxNSwgd2lkdGg6IDI4LCBoZWlnaHQ6IDQ5fTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1Nob290aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0hpdHRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy/Ql9Cw0LPRgNGD0LbQsNC10Lwg0L3QtdC+0LHRhdC+0LTQvNGL0LUg0LDQvdC40LzQsNGG0LjQuCDQtNC70Y8g0LTQsNC90L3QvtCz0L4g0L/QtdGA0YHQvtC90LDQttCwXHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9uU2hlZXQgPSBuZXcgQ2hhcmFjdGVyU2hlZXQoe2ltYWdlTmFtZTogaW1hZ2VOYW1lfSk7XHJcbiAgICAgICAgXCJ3YWxrX2Rvd24sd2Fsa191cCx3YWxrX2xlZnQsd2Fsa19yaWdodFwiLnNwbGl0KFwiLFwiKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSk7Ly/QkiDQuNGC0L7Qs9C1IHRoaXMuYW5pbWF0aW9ucyA9IHt3YWxrX2Rvd246IC4uLCB3YWxrX3VwOiAuLiDQuCDRgi7QtC4gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFwic2hvb3RfZG93bixzaG9vdF91cCxzaG9vdF9sZWZ0LHNob290X3JpZ2h0XCIuc3BsaXQoXCIsXCIpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uc1tuYW1lXSA9IGFuaW1hdGlvblNoZWV0LmdldEFuaW1hdGlvbihuYW1lLCA1MCwgZmFsc2UpOy8v0LLRgtC+0YDQvtC5INCw0YDQs9GD0LzQtdC9IC0g0YHQutC+0YDQvtGB0YLRjCwgZmFsc2UgLSDQvtGC0LzQtdC90LjRgtGMINC/0L7QstGC0L7RgFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFwiY3V0X2Rvd24sY3V0X3VwLGN1dF9sZWZ0LGN1dF9yaWdodFwiLnNwbGl0KFwiLFwiKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSwgNTAsIGZhbHNlKTsvL9Cy0YLQvtGA0L7QuSDQsNGA0LPRg9C80LXQvSAtINGB0LrQvtGA0L7RgdGC0YwsIGZhbHNlIC0g0L7RgtC80LXQvdC40YLRjCDQv9C+0LLRgtC+0YBcclxuICAgICAgICB9KTtcclxuICAgICAgICBbXCJkZWF0aFwiXS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSwgNTAsIGZhbHNlKTsvL9Cy0YLQvtGA0L7QuSDQsNGA0LPRg9C80LXQvSAtINGB0LrQvtGA0L7RgdGC0YwsIGZhbHNlIC0g0L7RgtC80LXQvdC40YLRjCDQv9C+0LLRgtC+0YBcclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgdGhpcy5zdGFuZChcImxlZnRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvb3QoYXJyb3cpe1xyXG4gICAgICAgIGlmKCF0aGlzLmlzU2hvb3Rpbmcpe1xyXG4gICAgICAgICAgICB0aGlzLmlzU2hvb3RpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnMgWydzaG9vdF8nK3RoaXMudmVsb2NpdHkuZGlyZWN0aW9uXTtcclxuICAgICAgICAgICAgdGhpcy52aWV3Lm9uRW5kID0gKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTaG9vdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYXJyb3cuZmx5KHRoaXMueCwgdGhpcy55LCB0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy52aWV3LnJ1bigpOy8v0JfQsNC/0YPRgdGC0LjRgtGMINCw0L3QuNC80LDRhtC40Y5cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGhpdCgpe1xyXG4gICAgICAgIGlmKCF0aGlzLmlzSGl0dGluZyl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNIaXR0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zIFsnY3V0XycrdGhpcy52ZWxvY2l0eS5kaXJlY3Rpb25dO1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcub25FbmQgPSAoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0hpdHRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnZpZXcucnVuKCk7Ly/Ql9Cw0L/Rg9GB0YLQuNGC0Ywg0LDQvdC40LzQsNGG0LjRjlxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgd2FsayhkaXJlY3Rpb24pe1xyXG4gICAgICAgIGlmKHRoaXMuaXNTaG9vdGluZyB8fCB0aGlzLmlzSGl0dGluZylyZXR1cm47IC8v0JLQviDQstGA0LXQvNGPINGB0YLRgNC10LvRjNCx0Ysg0L3QtdC70YzQt9GPINC40LTRgtC4LiDQndCVINCf0J7QndCY0JzQkNCuINCa0JDQmiDQoNCQ0JHQntCi0JDQldCiLiDQldCh0JvQmCDQo9CR0KDQkNCi0Kwg0K3QotCjINCh0KLQoNCe0JrQoywg0J/QldCg0KHQntCd0JDQltCV0Jwg0J3QldCb0KzQl9CvINCj0J/QoNCQ0JLQm9Cv0KLQrFxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zIFsnd2Fsa18nK2RpcmVjdGlvbl07Ly/Ql9C00LXRgdGMINGF0YDQsNC90LjRgtGB0Y8g0YLQtdC60YPRidCw0Y8g0LDQvdC40LzQsNGG0LjRjy4gICB0aGlzLnZpZXcg0YXRgNCw0L3QuNGCINC+0LHRitC10LrRgiBDaGFyYWN0ZXJTaGVldFxyXG4gICAgICAgIHRoaXMudmlldy5ydW4oKTsvL9CX0LDQv9GD0YHRgtC40YLRjCDQsNC90LjQvNCw0YbQuNGOXHJcbiAgICB9XHJcblxyXG4gICAgc3RhbmQoZGlyZWN0aW9uKXsvL9Ch0YLQvtGP0YLRjFxyXG4gICAgICAgIGlmKHRoaXMuaXNTaG9vdGluZyB8fCB0aGlzLmlzSGl0dGluZylyZXR1cm47Ly/QndCVINCf0J7QndCY0JzQkNCuINCa0JDQmiDQoNCQ0JHQntCi0JDQldCiLiDQldCh0JvQmCDQo9CR0KDQkNCi0Kwg0K3QotCjINCh0KLQoNCe0JrQoywg0J/QldCg0KHQntCd0JDQltCV0Jwg0J3QldCb0KzQl9CvINCj0J/QoNCQ0JLQm9Cv0KLQrFxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgMCk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zIFsnd2Fsa18nK2RpcmVjdGlvbl07XHJcbiAgICAgICAgdGhpcy52aWV3LnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWF0aCgpe1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKFwiZG93blwiLCAwKTsvL9Ce0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC/0LXRgNGB0L7QvdCw0LbQsFxyXG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9ucyBbJ2RlYXRoJ107XHJcbiAgICAgICAgLy8gdGhpcy52aWV3LnN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSl7XHJcbiAgICAgICAgaWYodGhpcy5sYXN0VGltZSA9PTApe1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/Qn9C10YDQtdC80LXRidC10L3QuNC1INC/0LXRgNGB0L7QvdCw0LbQsFxyXG4gICAgICAgIC8vIGlmKCF0aGlzLmlzU2hvb3Rpbmcpey8v0JLQviDQstGA0LXQvNGPINGB0YLRgNC10LvRjNCx0Ysg0Lgg0YPQtNCw0YDQvtCyINC90LXQu9GM0LfRjyDQuNC00YLQuFxyXG4gICAgICAgIC8vICAgICB0aGlzLnZlbG9jaXR5Lm1vdmUodGhpcywgdGltZS10aGlzLmxhc3RUaW1lKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNTaG9vdGluZyB8fCB0aGlzLmlzSGl0dGluZyl7Ly/QktC+INCy0YDQtdC80Y8g0YHRgtGA0LXQu9GM0LHRiyDQuCDRg9C00LDRgNC+0LIg0L3QtdC70YzQt9GPINC40LTRgtC4XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkubW92ZSh0aGlzLDApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5Lm1vdmUodGhpcywgdGltZS10aGlzLmxhc3RUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcblxyXG4gICAgICAgIC8v0JrQvtC+0YDQtNC40L3QsNGC0Ysg0LTQu9GPINCw0L3QuNC80LDRhtC40Lg7IHRoaXMudmlldyDRhdGA0LDQvdC40YIg0L7QsdGK0LXQutGCIENoYXJhY3RlclNoZWV0XHJcbiAgICAgICAgdGhpcy52aWV3LnNldFhZKE1hdGgudHJ1bmModGhpcy54KSwgTWF0aC50cnVuYyh0aGlzLnkpKSAvL9CSINC/0LXRgNC10LzQtdC90L3QvtC5IHRoaXMudmlldyDRhdGA0LDQvdC40YLRgdGPIHRoaXMuYW5pbWF0aW9ucyA9IHt9LiDQnNC10YLQvtC0IHRydW5jINC+0YLQsdGA0LDRgdGL0LLQtdGCINC00YDQvtCx0L3Rg9GOINGH0LDRgdGC0YxcclxuICAgICAgICB0aGlzLnZpZXcudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENhbWVyYSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7d2lkdGggPSA2NDAsIGhlaWdodCA9IDQ4MCwgbGltaXRYID0gNTAwMDAsIGxpbWl0WSA9IDUwMDAwLCBzY3JvbGxFZGdlID0gMjAwfSA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy54ID0gMDsvL9Cf0L7Qu9C+0LbQtdC90LjQtSDQutCw0LzQtdGA0YtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDsvL9Cg0LDQt9C80LXRgCDQutCw0LzQtdGA0YsgKNGDINC90LDRgSDRgdC+0LLQv9Cw0LTQsNC10YIg0YEg0YDQsNC30LzQtdGA0L7QvCDRjdC60YDQsNC90LApXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5saW1pdFggPSBsaW1pdFg7Ly/Qn9GA0LXQtNC10Lsg0L/QtdGA0LXQvNC10YnQtdC90LjRjyDQutCw0LzQtdGA0YsgKNCyINC90LDRiNC10Lwg0YHQu9GD0YfQsNC1INGN0YLQviDRgNCw0LfQvNC10YAg0LrQsNGA0YLRiylcclxuICAgICAgICB0aGlzLmxpbWl0WSA9IGxpbWl0WTtcclxuICAgICAgICB0aGlzLndhdGNoT2JqZWN0ID0gZmFsc2U7Ly/QntC00LjQvSDQuNC3INGA0LXQttC40LzQvtCyINC60LDRgNGC0Ysg0LTQu9GPINGB0LvQtdC00L7QstCw0L3QuNGPINC30LAg0L7QsdGK0LXQutGC0L7QvFxyXG4gICAgICAgIHRoaXMub2JqID0gbnVsbDsvL9Cj0LrQsNC30LDRgtC10LvRjCDQvdCwINC+0LHRitC10LrRgiwg0LfQsCDQutC+0YLQvtGA0YvQvCDQutCw0LzQtdGA0LAg0YHQu9C10LTRg9C10YJcclxuICAgICAgICB0aGlzLnNjcm9sbEVkZ2UgPSBzY3JvbGxFZGdlOy8v0JrQsNC80LXRgNCwINC90LDRh9C40L3QsNC10YIg0LTQstC40LbQtdC90LjQtSDRgtC+0LvRjNC60L4g0LXRgdC70Lgg0L/QtdGA0YHQvtC90LDQtiDQv9C+0LTRhdC+0LTQuNGCINC6INC60YDQsNGOINC60LDQtNGA0LAuIHNjcm9sbEVkZ2Ug0L7Qv9GA0LXQtNC10LvRj9C10YIg0L7RgtGB0YLRg9C/INC+0YIg0LrRgNCw0Y8sINC60L7Qs9C00LAg0LrQsNC80LXRgNCwINC90LDRh9C40L3QsNC10YIg0LTQstC40LbQtdC90LjQtVxyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoKG9iaikge1xyXG4gICAgICAgIHRoaXMud2F0Y2hPYmplY3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub2JqID0gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKXtcclxuICAgICAgICBpZih0aGlzLndhdGNoT2JqZWN0KXtcclxuICAgICAgICAgICAgaWYodGhpcy5vYmoueCA+ICh0aGlzLngrdGhpcy53aWR0aCAtIHRoaXMuc2Nyb2xsRWRnZSkpLy/QldGB0LvQuCDQv9C10YDRgdC+0L3QsNC2INCy0YvRiNC10Lsg0LfQsCDQv9GA0LDQstGL0Lkg0LrRgNCw0Lkg0LrQsNC00YDQsCwg0LTQstC40LPQsNC10Lwg0LrQsNC80LXRgNGDINCy0YHQu9C10LQg0LfQsCDQv9C10YDRgdC+0L3QsNC20LXQvFxyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5taW4odGhpcy5saW1pdFgsIHRoaXMub2JqLngtdGhpcy53aWR0aCt0aGlzLnNjcm9sbEVkZ2UpLy/QlNCy0LjQs9Cw0LXQvCDQutCw0LzQtdGA0YMuINCV0YHQu9C4INC60LDQvNC10YDQsCDQtNC+0YHRgtC40LPQu9CwINC/0YDQtdC00LXQu9CwLCDRgtC+IHRoaXMueCA9IHRoaXMubGltaXRYXHJcbiAgICAgICAgICAgIGlmKHRoaXMub2JqLnggPCAodGhpcy54ICsgdGhpcy5zY3JvbGxFZGdlKSlcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgubWF4KDAsIHRoaXMub2JqLngtdGhpcy5zY3JvbGxFZGdlKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5vYmoueSA+ICh0aGlzLnkrdGhpcy5oZWlnaHQgLSB0aGlzLnNjcm9sbEVkZ2UpKS8v0J/QtdGA0YHQvtC90LDQtiDQuNC00ZHRgiDQstC90LjQt1xyXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gTWF0aC5taW4odGhpcy5saW1pdFksIHRoaXMub2JqLnktdGhpcy5oZWlnaHQrdGhpcy5zY3JvbGxFZGdlKVxyXG4gICAgICAgICAgICBpZih0aGlzLm9iai55IDwgKHRoaXMueSArIHRoaXMuc2Nyb2xsRWRnZSkpLy/Qn9C10YDRgdC+0L3QsNC2INC40LTRkdGCINCy0LLQtdGA0YVcclxuICAgICAgICAgICAgICAgIHRoaXMueSA9IE1hdGgubWF4KDAsIHRoaXMub2JqLnktdGhpcy5zY3JvbGxFZGdlKTtcclxuICAgICAgICB9ICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNwZWNpYWxQb3NpdGlvbigpe1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgdGhpcy55ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1Nwcml0ZVNoZWV0fSBmcm9tICcuL3Nwcml0ZS1zaGVldCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyU2hlZXQgZXh0ZW5kcyBTcHJpdGVTaGVldHtcclxuICAgIGNvbnN0cnVjdG9yKHtpbWFnZU5hbWV9KXtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIGltYWdlTmFtZTogaW1hZ2VOYW1lLFxyXG4gICAgICAgICAgICBpbWFnZVdpZHRoOiA4MzIsXHJcbiAgICAgICAgICAgIGltYWdlSGVpZ2h0OiAxMzQ0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXF1ZW5jZXMgPSB0aGlzLmdldFNlcXVlbmNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlcXVlbmNlcygpe1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlICgnLi9tYXBzL2FuaW1hdGlvbnMuanNvbicpO1xyXG4gICAgICAgIGNvbnN0IHNlcXVlbmNlcyA9IHt9O1xyXG4gICAgICAgIGRhdGEubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT57XHJcblxyXG4gICAgICAgICAgICAvL9Co0LjRgNC40L3RgyDQsdGA0LDQu9C4INC/0L4g0YHQsNC80L7QuSDQsdC+0LvRjNGI0L7QuSDQv9C+0YHQu9C10LTQvtCy0LDRgtC10LvRjNC90L7RgdGC0LgsINC/0L7RjdGC0L7QvNGDINC90LAg0L3QtdC60L7RgtC+0YDRi9GFINC/0L7RgdC70LXQtNC+0LLQsNGC0LXQu9GM0L3QvtGB0YLRj9GFINC/0L7QvNC10L3RjNGI0LUg0LIg0LrQvtC90YbQtSDQtdGB0YLRjCDQvdGD0LvQuC4g0JjRhSDRg9Cx0LjRgNCw0LXQvCwg0YTQuNC70YzRgtGA0YPQtdC8XHJcbiAgICAgICAgICAgIHNlcXVlbmNlc1tsYXllci5uYW1lXSA9IGxheWVyLmRhdGEuZmlsdGVyKGkgPT4gaT4wKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc2VxdWVuY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFuaW1hdGlvbihuYW1lLCBzcGVlZCA9IDcwLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSl7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldEFuaW1hdGlvbih0aGlzLnNlcXVlbmNlc1tuYW1lXSwgc3BlZWQsIHJlcGVhdCwgYXV0b3J1bik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1JlbW92ZUZyb21BcnJheX0gZnJvbSAnLi9yZW1vdmUtZnJvbS1hcnJheSc7XHJcbmltcG9ydCB7aXNBZ3Jlc3NpdmV9IGZyb20gJy4vYWlzL2lzQWdyZXNzaXZlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsaWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcyA9IFtdOy8v0JzQsNGB0YHQuNCyINGB0YLQsNGC0LjRh9C90YvRhSDQvtCx0YrQtdC60YLQvtCyLiDQnNGLINC40YHQv9C+0LvRjNC30YPQtdC8INGB0LvQtdC00YPRjtGJ0LjQtSDRgdCy0L7QudGB0YLQstCwINC+0LHRitC10LrRgtCwOiB7eCwgeSwgd2lkdGgsIGhlaWdodH1cclxuICAgICAgICB0aGlzLmJvZGllcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFN0YXRpY1NoYXBlcyhkYXRhKXtcclxuICAgICAgICBkYXRhLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgaWYobGF5ZXIudHlwZSA9PSdvYmplY3Rncm91cCcpXHJcbiAgICAgICAgICAgICAgICAvKm9iamVjdHMg0Y3RgtC+INC80LDRgdGB0LjQsiDRgSDQvdCw0LHQvtGA0L7QvCDQvtCx0YrQtdC60YLQvtCyIFt7Li4ufSx7Li4ufSwg0Lgg0YIu0LQuXTBcclxuICAgICAgICAgICAgICAgINCU0YPQvNCw0Y4sINC60L7QvdGB0YLRgNGD0LrRhtC40Y8gKC4uLmxheWVyLm9iamVjdHMpINGB0L7Qt9C00LDQtdGCINC80LDRgdGB0LjQsiAgdGhpcy5zdGF0aWNTaGFwZXMgPSBbey4uLn0sey4uLn0sINC4INGCLtC0Ll0qL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMucHVzaCguLi5sYXllci5vYmplY3RzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL9CU0L7QsdCw0LLQuNC8INC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0L/QviDQutGA0LDRj9C8INC60LDRgNGC0YsuINCX0LAg0LrQsNGA0YLRgyDQvdC10LvRjNC30Y8g0LLRi9C50YLQuFxyXG4gICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goe3g6MCx5OjAsd2lkdGg6MTMwMCxoZWlnaHQ6MX0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goe3g6MCx5OjAsd2lkdGg6MSxoZWlnaHQ6MTMwMH0pO1xyXG4gICAgICAgIC8vIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goe3g6MTI4MCx5OjAsd2lkdGg6MSxoZWlnaHQ6MTMwMH0pO1xyXG4gICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goe3g6MTI4MCx5OjAsd2lkdGg6MTMwMCxoZWlnaHQ6MX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEtpbmVtYXRpY0JvZHkoYm9keSl7XHJcbiAgICAgICAgdGhpcy5ib2RpZXMucHVzaCh7XHJcbiAgICAgICAgICAgIHg6IGJvZHkueCwvL9GB0YLQsNGA0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQv9C10YDRgdC+0L3QsNC20LBcclxuICAgICAgICAgICAgeTogYm9keS55LFxyXG4gICAgICAgICAgICBvYmo6IGJvZHksLy/RgdC+0YXRgNCw0L3Rj9C10Lwg0L/QtdGA0YHQvtC90LDQttCwINGBINC90L7QstGL0LzQuCDQutC+0L7RgNC00LjQvdCw0YLQsNC80LgsINCx0YPQtNC10Lwg0YHRgNCw0LLQvdC40LLQsNGC0Ywg0L3QvtCy0YvQtSDQuCDRgdGC0LDRgNGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L/QtdGA0YHQvtC90LDQttCwXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSl7XHJcbiAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbih0aW1lKTsvL9GA0LDRgdGB0YfRkdGCINC60L7Qu9C70LjQt9C40Lgg0L/QtdGA0YHQvtC90LDQttC10Lkg0YHQviDRgdGC0LDRgtC40YfQvdGL0LzQuCDQvtCx0YrQtdC60YLQsNC80Lgg0Lgg0L/QtdGA0YHQvtC90LDQttC10Lkg0LzQtdC20LTRgyDRgdC+0LHQvtC5XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tDb2xsaXNpb24odGltZSl7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5ib2RpZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IHRoaXMuYm9kaWVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgb2xkWCA9IGJvZHkueDtcclxuICAgICAgICAgICAgbGV0IG9sZFkgPSBib2R5Lnk7XHJcbiAgICAgICAgICAgIGxldCB4ID0gYm9keS5vYmoueDtcclxuICAgICAgICAgICAgbGV0IHkgPSBib2R5Lm9iai55O1xyXG4gICAgICAgICAgICBpZih4Pm9sZFgpey8vbW92aW5nIHJpZ2h0XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKHNoYXBlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoICAvL9CV0YHQu9C4INGB0YLQsNGA0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQvdCw0YXQvtC00Y/RgtGB0Y8g0L/QtdGA0LXQtCDQvtCx0YrQtdC60YLQvtC8KioqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgob2xkWCAtIC8v0LrQvtC+0YDQtNC40L3QsNGC0LAg0L/QtdGA0YHQvtC90LDQttCwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMSArLy/Qn9C10YDQtdC80LXRidC10L3QuNC1INC80LXQttC00YMg0LrQsNC00YDQsNC80Lgg0LfQsNC90LjQvNCw0LXRgiDQtNGA0L7QsdC90YPRjiDRh9Cw0YHRgtGMINC/0LjQutGB0LXQu9GPLCDRh9GC0L7QsdGLINC60L7QtCDRgNCw0LHQvtGC0LDQuyDQvtC60YDRg9Cz0LvQuNC8INC/0YDQvtGI0LvRg9GOINGC0L7Rh9C60YMg0L3QsCAxINC/0LjQutGB0LXQu9GMICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgLy/QutC+0L7RgNC00LjQvdCw0YLQsCDRhNC+0YDQvNGLINC60L7Qu9C70LjQt9C40Lgg0LLQvdGD0YLRgNC4INC/0LXRgNGB0L7QvdCw0LbQsCAo0L3QsNGH0LDQu9C+0Lwg0L7RgtGB0YfRkdGC0LAg0YHQu9GD0LbQuNGCINC70LXQstGL0Lkg0LLQtdGA0YXQvdC40Lkg0YPQs9C+0Lsg0L/QtdGA0YHQvtC90LDQttCwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA8IHNoYXBlLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vKioq0Lgg0L3QvtCy0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQvdCw0YXQvtC00Y/RgtGB0Y8g0L/QvtGB0LvQtSDQvtCx0YrQtdC60YLQsCwg0LfQvdCw0YfQuNGCINC/0LXRgNGB0L7QvdCw0LYg0YHRgtC+0LvQutC90YPQu9GB0Y8g0YEg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtdC8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeCArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/Qn9C10YDRgdC+0L3QsNC2INC00L7Qu9C20LXQvSDQutCw0YHQsNGC0YzRgdGPINC/0YDQtdC/0Y/RgtGB0YLQstC40Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKCh5ICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCAoc2hhcGUueSArIHNoYXBlLmhlaWdodCkpICYmXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCh5ICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueStcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUueSlcclxuICAgICAgICAgICAgICAgICAgICApeyAgLy/QkdC10YDQtdC8INCx0LvQuNC20LDQudGI0LjQuSDQvtCx0YrQtdC60YIsINCz0LTQtSDQvtGB0YLQsNC90L7QstC40Lwg0L/QtdGA0YHQvtC90LDQttCwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gTWF0aC5taW4oeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCwgc2hhcGUueCkvLyjQvdCw0LLQtdGA0L3QvtC1INC80L7QttC90L4g0LHRi9C70L4g0L/RgNC+0YHRgtC+INC+0YHRgtCw0LLQuNGC0Ywg0L7QtNC40L0gc2hhcGUueClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSW50ZXJhY3RpdmVXaXRoU3RhdGljKGJvZHksaSk7Ly/Qn9GA0L7QstC10YDRj9C10Lwg0LjQvdGC0LXRgNCw0LrRgtC40LIg0YHQviDRgdGC0LDRgtC40YfQvdGL0LzQuCDQvtCx0YrQtdC60YLQsNC80LggKNC90LDQv9GA0LjQvNC10YAg0L/QvtGB0LvQtSDQv9C+0L/QsNC00LDQvdC40Y8g0LIg0LTQtdGA0LXQstC+LCDRgdGC0YDQtdC70LAg0L3QtSDQtNCy0LjQttC10YLRgdGPKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgLy/QmtC+0LvQu9C40LfQuNGPINC/0LXRgNGB0L7QvdCw0LbQtdC5INC80LXQttC00YMg0YHQvtCx0L7QuVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8dGhpcy5ib2RpZXMubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoYXBlID0gdGhpcy5ib2RpZXNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYm9keSAhPSBzaGFwZSl7Ly/QldGB0LvQuCDRjdGC0L4g0L3QtSDRgtC+0YIg0LbQtSDRgdCw0LzRi9C5INC+0LHRitC10LrRglxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigoKG9sZFggLSAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA8IHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPSBNYXRoLm1pbih4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoLCBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54IC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSW50ZXJhY3RpdmUoYm9keSxzaGFwZSxpLGopOy8v0J/RgNC+0LLQtdGA0Y/QtdC8INC40L3RgtC10YDQsNC60YLQuNCyICjQvdCw0L/RgNC40LzQtdGAINGB0YLRgNC10LvQsCDQsdGM0ZHRgiDQvtGA0LrQsCwg0L7RgNC6INCx0YzRkdGCINC40LPRgNC+0LrQsCDQuCDRgi7QtC4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICBcclxuICAgICAgICAgICAgaWYoeDxvbGRYKXsvL21vdmluZyBsZWZ0XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5mb3JFYWNoKHNoYXBlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoKChvbGRYICsgMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpID4gKHNoYXBlLngrc2hhcGUud2lkdGgpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCAoc2hhcGUueCtzaGFwZS53aWR0aCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55ICsgc2hhcGUuaGVpZ2h0KSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkrYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IE1hdGgubWF4KHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54LCBzaGFwZS54K3NoYXBlLndpZHRoKS0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyhib2R5LGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v0JrQvtC70LvQuNC30LjRjyDQv9C10YDRgdC+0L3QsNC20LXQuSDQvNC10LbQtNGDINGB0L7QsdC+0LlcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPHRoaXMuYm9kaWVzLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGFwZSA9IHRoaXMuYm9kaWVzW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJvZHkgIT0gc2hhcGUpey8v0JXRgdC70Lgg0Y3RgtC+INC90LUg0YLQvtGCINC20LUg0YHQsNC80YvQuSDQvtCx0YrQtdC60YJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKChvbGRYICsgMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpID4gc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpIDwgc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggPSBNYXRoLm1heCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCwgc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCktIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSW50ZXJhY3RpdmUoYm9keSxzaGFwZSxpLGopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmKHk+b2xkWSl7Ly9tb3ZpbmcgZG93blxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaChzaGFwZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCgob2xkWSAtIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA8IHNoYXBlLnkpJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54K2JvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA+IHNoYXBlLngpXHJcbiAgICAgICAgICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSA9IE1hdGgubWluKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0LCBzaGFwZS55KS0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyhib2R5LGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v0JrQvtC70LvQuNC30LjRjyDQv9C10YDRgdC+0L3QsNC20LXQuSDQvNC10LbQtNGDINGB0L7QsdC+0LlcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPHRoaXMuYm9kaWVzLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGFwZSA9IHRoaXMuYm9kaWVzW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJvZHkgIT0gc2hhcGUpey8v0JXRgdC70Lgg0Y3RgtC+INC90LUg0YLQvtGCINC20LUg0YHQsNC80YvQuSDQvtCx0YrQtdC60YJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKChvbGRZIC0gMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpIDwgc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpIDwgKHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IE1hdGgubWluKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0LCBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55IC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlKGJvZHksc2hhcGUsaSxqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaWYoeTxvbGRZKXsvL21vdmluZyB1cFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaChzaGFwZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCgob2xkWSArIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA+IChzaGFwZS55K3NoYXBlLmhlaWdodCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS55K3NoYXBlLmhlaWdodCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS54ICsgc2hhcGUud2lkdGgpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCtib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBNYXRoLm1heCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSwgc2hhcGUueStzaGFwZS5oZWlnaHQpLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSW50ZXJhY3RpdmVXaXRoU3RhdGljKGJvZHksaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgajx0aGlzLmJvZGllcy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2hhcGUgPSB0aGlzLmJvZGllc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICBpZihib2R5ICE9IHNoYXBlKXsvL9CV0YHQu9C4INGN0YLQviDQvdC1INGC0L7RgiDQttC1INGB0LDQvNGL0Lkg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCgob2xkWSArIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA+IHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpIDwgKHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA+IHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLngpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ID0gTWF0aC5tYXgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnksIHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KS0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZShib2R5LHNoYXBlLGksaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBib2R5LnggPSB4O1xyXG4gICAgICAgICAgICBib2R5LnkgPSB5O1xyXG4gICAgICAgICAgICBib2R5Lm9iai54ID0geDtcclxuICAgICAgICAgICAgYm9keS5vYmoueSA9IHk7XHJcbiAgICAgICAgfS8vdGhpcy5ib2RpZXMgY3ljbGVcclxuICAgIH0vL2NoZWNrU3RhdGljXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGNoZWNrSW50ZXJhY3RpdmUoYm9keSxzaGFwZSxpbmRleE9mQm9keSxpbmRleE9mU2hhcGUpe1xyXG4gICAgICAgIGlmKGJvZHkub2JqLmhhc093blByb3BlcnR5KCduYW1lJykgJiYgc2hhcGUub2JqLmhhc093blByb3BlcnR5KCduYW1lJykpey8v0J/RgNC+0LLQtdGA0LrQsCDQvdCwINGB0LvRg9GH0LDQuSwg0LXRgdC70Lgg0L/QvtC/0LDQtNGR0YLRgdGPINC+0LHRitC10LrRgiDQsdC10Lcg0L3QsNC30LLQsNC90LjRj1xyXG4gICAgICAgICAgICBpZihib2R5Lm9iai5uYW1lID09ICdhcnJvdycgJiYgc2hhcGUub2JqLm5hbWUgPT0gJ29yYycpey8v0JXRgdC70Lgg0YHRgtGA0LXQu9CwINC60L7RgdC90YPQu9Cw0YHRjCDQvtGA0LrQsFxyXG4gICAgICAgICAgICAgICAgLy/QndCwINGB0LDQvNC+0Lwg0LTQtdC70LUg0LLQvNC10YHRgtC+INC00LLRg9GFLCDQvNC+0LbQvdC+INGB0LTQtdC70LDRgtGMINC+0LTQuNC9INCy0YvQt9C+0LIgdGhpcy5yZW1vdmUodGhpcy5ib2RpZXMsaW5kZXhPZkJvZHksaW5kZXhPZlNoYXBlKS4g0J3QviDQvNC90LUg0YLQsNC6INGD0LTQvtCx0L3QtdC1INC+0YLQu9Cw0LbQuNCy0LDRgtGMXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvZGllcz1SZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMuYm9kaWVzLGluZGV4T2ZCb2R5KS8v0KHRgtGA0LXQu9CwINC40YHRh9C10LfQsNC10YIsINGD0LTQsNC70LjRgtGMINC40Lcg0LrQvtC70LvQsNC50LTQtdGA0LAsINGD0LTQsNC70LjRgtGMINGB0LDQvCDQvtCx0YrQtdC60YJcclxuICAgICAgICAgICAgICAgIGJvZHkub2JqLmRlbGV0ZSgpOy8v0KPQtNCw0LvRj9C10Lwg0YHRgtGA0LXQu9GDXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvZGllcz1SZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMuYm9kaWVzLGluZGV4T2ZTaGFwZSkvL9Ce0YLQutC70Y7Rh9C40YLRjCDQtdCz0L4g0L7RgiDQutC+0LvQu9Cw0LnQtNC10YDQsCAo0YPQtNCw0LvQuNGC0Ywg0Y3Qu9C10LzQtdC90YIg0L/QviDQuNC90LTQtdC60YHRgyDQuNC3INC80LDRgdGB0LjQstCwIHRoaXMuYm9kaWVzKVxyXG4gICAgICAgICAgICAgICAgc2hhcGUub2JqLmRlYXRoKCk7IC8v0J7RgNC6INC/0L7Qs9C40LHQsNC10YJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZihib2R5Lm9iai5uYW1lID09ICdwbGF5ZXInICYmIHNoYXBlLm9iai5uYW1lID09ICdvcmMnKXtcclxuICAgICAgICAgICAgLy8gICAgIHNoYXBlLm9iai5nb3RQbGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfS8vY2hlY2tJbnRlcmFjdGl2ZVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBjaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyhib2R5LGluZGV4T2ZCb2R5KXsvL1xyXG4gICAgICAgIGlmKGJvZHkub2JqLmhhc093blByb3BlcnR5KCduYW1lJykpey8v0J/RgNC+0LLQtdGA0LrQsCDQvdCwINGB0LvRg9GH0LDQuSwg0LXRgdC70Lgg0L/QvtC/0LDQtNGR0YLRgdGPINC+0LHRitC10LrRgiDQsdC10Lcg0L3QsNC30LLQsNC90LjRj1xyXG4gICAgICAgICAgICBpZihib2R5Lm9iai5uYW1lID09ICdhcnJvdycpe1xyXG4gICAgICAgICAgICAgICAgYm9keS5vYmouc3RvcCgpOy8v0KHRgtGA0LXQu9CwINC/0LXRgNC10YHRgtCw0ZHRgiDQtNCy0LjQs9Cw0YLRjNGB0Y9cclxuICAgICAgICAgICAgICAgIHRoaXMuYm9kaWVzPVJlbW92ZUZyb21BcnJheS5yZW1vdmUodGhpcy5ib2RpZXMsaW5kZXhPZkJvZHkpOy8v0YPQtNCw0LvQuNGC0Ywg0LjQtyDQutC+0LvQu9Cw0LnQtNC10YDQsFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBDb250cm9sU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpcmUgPSBmYWxzZTtcblxuICAgICAgICAvL9Ce0LHRitC10LrRgiBNYXAg0L/RgNC10L7QsdGA0LDQt9GD0LXRgiDQvNCw0YHRgdC40LIg0Lgg0LIg0LjRgtC+0LPQtTogdGhpcy5rZXlNYXAgPSB7MzcgPT4gXCJsZWZ0XCIsIDM5ID0+IFwicmlnaHRcIiwgMzggPT4gXCJ1cFwiLCA0MCA9PiBcImRvd25cIiwgMzIgPT4gXCJmaXJlXCJ9XG4gICAgICAgIHRoaXMua2V5TWFwID0gbmV3IE1hcChbXG4gICAgICAgICAgICBbMzcsJ2xlZnQnXSxbMzksJ3JpZ2h0J10sWzM4LCd1cCddLFs0MCwnZG93biddLFszMiwnZmlyZSddXG4gICAgICAgIF0pO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCB0cnVlKSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgZmFsc2UpKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZXZlbnQsIHByZXNzZWQpIHtcbiAgICAgICAgaWYodGhpcy5rZXlNYXAuaGFzKGV2ZW50LmtleUNvZGUpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzW3RoaXMua2V5TWFwLmdldChldmVudC5rZXlDb2RlKV0gPSBwcmVzc2VkOy8vdGhpcyDQsiDQtNCw0L3QvdC+0Lwg0YHQu9GD0YfQsNC1INGN0YLQviAgIENvbnRyb2xTdGF0ZSA9IHt1cDogdHJ1ZSwgZG93bjogZmFsc2UswqDigKZ9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi9zY3JlZW4nO1xyXG5pbXBvcnQgeyBMb2FkaW5nfSBmcm9tICcuL3NjZW5lL2xvYWRpbmcnOy8v0L/QvtGC0L7QvNC+0Log0LrQu9Cw0YHRgdCwIFNjZW5lXHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL3NjZW5lL21lbnUnOy8v0L/QvtGC0L7QvNC+0Log0LrQu9Cw0YHRgdCwIFNjZW5lXHJcbmltcG9ydCB7IEdhbWVMZXZlbCB9IGZyb20gJy4vc2NlbmUvZ2FtZS1sZXZlbCc7Ly/Qv9C+0YLQvtC80L7QuiDQutC70LDRgdGB0LAgU2NlbmVcclxuaW1wb3J0IHsgR2FtZU92ZXIgfSBmcm9tICcuL3NjZW5lL2dhbWUtb3Zlcic7Ly/Qv9C+0YLQvtC80L7QuiDQutC70LDRgdGB0LAgU2NlbmVcclxuaW1wb3J0IHsgR2FtZVdpbiB9IGZyb20gJy4vc2NlbmUvZ2FtZS13aW4nOy8v0L/QvtGC0L7QvNC+0Log0LrQu9Cw0YHRgdCwIFNjZW5lXHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcbmltcG9ydCB7IENvbnRyb2xTdGF0ZSB9IGZyb20gJy4vY29udHJvbC1zdGF0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZXtcclxuICAgIC8v0L7QsdGK0LXQutGCIHByb3BzINC90LUg0L7QsdGP0LfQsNGC0LXQu9C10L0sINC10YHQu9C4INCyINC60L7QvdGB0YLRgNGD0LrRgtC+0YAg0L3QtSDQv9C10YDQtdC00LDQstCw0YLRjCDQvdC40LrQsNC60LjRhSDQvtCx0YrQtdC60YLQvtCyLCDQvtC9INCy0L7Qt9GM0LzRkdGCINC+0LHRitC10LrRgiB7fSDQv9C+INGD0LzQvtC70YfQsNC90LjRjlxyXG4gICAgLy/QrdGC0L4ge3dpZHRoID0gNjQwLCBoZWlnaHQgPSA0ODB9ICDQtNC10YHRgtGA0YPQutGC0YPRgNC40YDRg9GO0YnQtdC1INC/0YDQuNGB0LLQsNC40LLQsNC90LjQtVxyXG4gICAgY29uc3RydWN0b3Ioe3dpZHRoID0gNjQwLCBoZWlnaHQgPSA0ODB9ID0ge30pe1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFNjcmVlbih3aWR0aCxoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuLmxvYWRJbWFnZXMoe1xyXG5cdFx0XHRvcmM6ICdpbWcvb3JjLnBuZycsXHJcblx0XHRcdHBsYXllcjogJ2ltZy9wbGF5ZXIucG5nJyxcclxuXHRcdFx0dGl0bGU6ICdpbWcvdGl0bGUuanBnJyxcclxuXHRcdFx0dGlsZXM6ICdpbWcvdGlsZXMucG5nJyAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb250cm9sU3RhdGUoKTtcclxuICAgICAgICB0aGlzLnNjZW5lcyA9IHtcclxuICAgICAgICAgICAgbG9hZGluZzogbmV3IExvYWRpbmcodGhpcyksXHJcbiAgICAgICAgICAgIG1lbnU6IG5ldyBNZW51KHRoaXMpLFxyXG4gICAgICAgICAgICBnYW1lTGV2ZWw6IG5ldyBHYW1lTGV2ZWwodGhpcyksXHJcbiAgICAgICAgICAgIGdhbWVPdmVyOiBuZXcgR2FtZU92ZXIodGhpcyksXHJcbiAgICAgICAgICAgIGdhbWVXaW46IG5ldyBHYW1lV2luKHRoaXMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXMubG9hZGluZztcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU2NlbmUoc3RhdHVzKSB7XHJcbiAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcclxuICAgICAgICAgICAgY2FzZSBTY2VuZS5MT0FERUQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcclxuICAgICAgICAgICAgY2FzZSBTY2VuZS5TVEFSVF9HQU1FOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmdhbWVMZXZlbDtcclxuICAgICAgICAgICAgY2FzZSBTY2VuZS5HQU1FX09WRVI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMuZ2FtZU92ZXI7XHJcbiAgICAgICAgICAgIGNhc2UgU2NlbmUuR0FNRV9XSU46XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMuZ2FtZVdpbjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmcmFtZSh0aW1lKXtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMgIT0gU2NlbmUuV09SS0lORyl7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lPXRoaXMuY2hhbmdlU2NlbmUodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKCl7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXJ7XHJcblxyXG4gICAgLy8tINCSINC60L7QvdGB0YLRgNGD0LrRgtC+0YAg0L/QtdGA0LXQtNCw0LXRgtGB0Y8g0L7QsdGK0LXQutGCINGBINC/0YPRgtGP0LzQuCDQuiDRhNCw0LnQu9Cw0LxcclxuICAgIC8vLSB0aGlzLnNjcmVlbi5sb2FkSW1hZ2VzKHtcclxuICAgIC8vLSAgICAgb3JjOiAnaW1nL29yYy5wbmcnLFxyXG4gICAgLy8tICAgICBwbGF5ZXI6ICdpbWcvcGxheWVyLnBuZycsXHJcbiAgICAvLy0gICAgIHRpdGxlOiAnaW1nL3RpdGxlLmpwZycsXHJcbiAgICAvLy0gICAgIHRpbGVzOiAnaW1nL3RpbGVzLnBuZycgICAgICAgICAgICBcclxuICAgIC8vLSB9KTtcclxuICAgIGNvbnN0cnVjdG9yKGltYWdlRmlsZXMpe1xyXG4gICAgICAgIHRoaXMuaW1hZ2VGaWxlcyA9IGltYWdlRmlsZXM7XHJcbiAgICAgICAgdGhpcy5pbWFnZXM9e307XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZCgpe1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmltYWdlRmlsZXMpe1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZEltYWdlKG5hbWUsIHRoaXMuaW1hZ2VGaWxlc1tuYW1lXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpOy8v0JHQu9Cw0LPQvtC00LDRgNGPINC80LXRgtC+0LTRgyBhbGwg0YPQtNC+0LHQvdC+INGA0LDQsdC+0YLQsNGC0Ywg0YEg0LzQsNGB0YHQuNCy0L7QvCDQvtCx0YrQtdC60YLQvtCyIFByb21pc2UuINCd0LDQv9GA0LjQvNC10YA6IFByb21pc2UuYWxsKFtwMSxwMl0pLnRoZW4oKCk9PmNvbnNvbGUubG9nKCdkb25lJykpXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEltYWdlKG5hbWUsc3JjKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlc1tuYW1lXSA9IGltYWdlO1xyXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKG5hbWUpO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PntcclxuICAgIGNvbnN0IGVsdmVuU2NvdXQgPSBuZXcgR2FtZSgpO1xyXG4gICAgZWx2ZW5TY291dC5ydW4oKTtcclxufVxyXG5cclxuLy8gNS0xNiAtLTEyIiwiaW1wb3J0IHtpc0FncmVzc2l2ZX0gZnJvbSAnLi9haXMvaXNBZ3Jlc3NpdmUnO1xyXG5pbXBvcnQgeyBUZXh0SW5mbyB9IGZyb20gXCIuL3RleHQtaW5mb1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludGVyZmFjZXtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHdhdmVzKXtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMud2F2ZXMgPSB3YXZlcztcclxuICAgICAgICB0aGlzLnRleHRJbmZvID0gbmV3IFRleHRJbmZvKGdhbWUuc2NyZWVuKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmdhbWUuc2NyZWVuLmNvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBnYW1lLmN1cnJlbnRTY2VuZS5wbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5maWdodFRleHRTaG93ZWQgPSBmYWxzZTsvL9C90LDQtNC/0LjRgdGMIEZpZ2h0INC/0L7QutCw0LbQtdGC0YHRjyDQu9C40YjRjCDQvtC00LjQvSDRgNCw0LdcclxuICAgICAgICB0aGlzLnRpbWVUb1N1cnZpdmUgPSAyMDAwMDsvL9CV0YHQu9C4INGN0YLQviDQstGA0LXQvNGPINCy0YvQudC00LXRgiDQsiDQvdC+0LvRjCwg0YLQviDQuNCz0YDQsCDQt9Cw0LrQvtC90YfQuNGC0YHRjyDQv9C+0LHQtdC00L7QuVxyXG5cclxuICAgICAgICB0aGlzLndpZHRoSGVhbHRoTGluZSA9IDE1MDtcclxuXHJcbiAgICAgICAgdGhpcy5lbmRPcGFjaXR5ID0gMDsvL9Cf0YDQuCDQv9GA0L7QuNCz0YDRi9GI0LUg0Y3QutGA0LDQvSDQtNC40YHQutGA0LXRgtC90L4sINGB0YLRg9C/0LXQvdGH0LDRgtC+LCDRgtC10LzQvdC10LXRgi4gMCAtINCw0LHRgdC+0LvRjtGC0L3QviDRgdCy0LXRgtC70L4sIDEgLSDQsNCx0YHQvtC70Y7RgtC90L4g0YLQtdC80L3QvlxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKXtcclxuICAgICAgICBpZih0aGlzLmxhc3RUaW1lID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaG93SGVhbHRoTGluZSgpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnBsYXllci5oZWFsdGggPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmVuZEdhbWUodGltZSwnbG9zZScpOy8v0J/RgNC+0LjQs9GA0LDQu1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmKGlzQWdyZXNzaXZlLmlzT3JjQWdyZXNzaXZlKCkpe1xyXG4gICAgICAgICAgICB0aGlzLmZpZ2h0VGV4dCh0aW1lKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93VGltZXIoKTsvL9Ce0LHRgNCw0YLQvdGL0Lkg0L7RgtGB0YfRkdGCXHJcbiAgICAgICAgICAgIHRoaXMudGltZVRvU3Vydml2ZSAtPSB0aW1lIC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICAgICAgaWYodGhpcy50aW1lVG9TdXJ2aXZlIDwgMCApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lVG9TdXJ2aXZlID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kR2FtZSh0aW1lLCd3aW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRleHRJbmZvLnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBmaWdodFRleHQodGltZSl7ICAgICAgICBcclxuICAgICAgICAgICAgaWYoIXRoaXMuZmlnaHRUZXh0U2hvd2VkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlnaHRUZXh0U2hvd2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEluZm8uc2hvd1RleHQoJ0ZJR0hUJyx0aW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHNob3dIZWFsdGhMaW5lKCl7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gJyM4NTI3MjcnO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI2IyM2QzZCc7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IDI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlY3QgKDIwLDE1LCB0aGlzLndpZHRoSGVhbHRoTGluZSwgMTApO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCAoMjAsMTUsIHRoaXMud2lkdGhIZWFsdGhMaW5lKih0aGlzLnBsYXllci5oZWFsdGgvdGhpcy5wbGF5ZXIuIGhlYWx0aFN0YXJ0KSwgMTApO1xyXG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUaW1lcigpe1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQodGhpcy5nYW1lLnNjcmVlbi53aWR0aCAtIDUwLCAzMCwgLy/RhSwgeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5mbG9vcih0aGlzLnRpbWVUb1N1cnZpdmUvMTAwMCksLy8ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyKTsvL2ZvbnRzaXplXHJcbiAgICB9XHJcblxyXG4gICAgZW5kR2FtZSh0aW1lLHN0YXR1cyl7XHJcbiAgICAgICAgICAgIC8v0J/QvtGB0YLQtdC/0LXQvdC90L4g0L/QvtGP0LLQu9GP0LXRgtGB0Y8g0YfQtdGA0L3QsNGPINC30LDRgdGC0LDQstC60LAg0Lgg0YHQvtC+0LHRidCw0LXQvCDRgdGG0LXQvdC1LCDRh9GC0L4g0LjQs9GA0LAg0LfQsNC60L7QvdGH0LXQvdCwXHJcbiAgICAgICAgICAgIHRoaXMuZW5kT3BhY2l0eSArPSh0aW1lIC0gdGhpcy5sYXN0VGltZSkvMTAwMDtcclxuICAgICAgICAgICAgaWYodGhpcy5lbmRPcGFjaXR5ID4gMS41KXsvLzEuNSwg0LAg0L3QtSAxLCDRh9GC0L7QsdGLINGH0LXRgNC90LDRjyDQt9Cw0YHRgtCw0LLQutCwINC10YnRkSDQv9C+0LLQuNGB0LXQu9CwINC90LXQvNC90L7Qs9C+XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVNjZW5lKHN0YXR1cyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgb3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5kT3BhY2l0eSA+IDAuMjUpICBvcGFjaXR5ID0wLjI1O1xyXG4gICAgICAgICAgICBpZih0aGlzLmVuZE9wYWNpdHkgPiAwLjUpICBvcGFjaXR5ID0wLjU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5kT3BhY2l0eSA+IDAuNzUpICBvcGFjaXR5ID0wLjc1O1xyXG4gICAgICAgICAgICBpZih0aGlzLmVuZE9wYWNpdHkgPiAxKSAgb3BhY2l0eSA9MTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAncmdiKDAsMCwwLCcrb3BhY2l0eSsnKSc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCAoMCwwLHRoaXMuZ2FtZS5zY3JlZW4ud2lkdGgsIHRoaXMuZ2FtZS5zY3JlZW4uaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTY2VuZShzdGF0dXMpe1xyXG4gICAgICAgIHN3aXRjaChzdGF0dXMpe1xyXG4gICAgICAgICAgICBjYXNlICdsb3NlJzpyZXR1cm4gdGhpcy5nYW1lLmN1cnJlbnRTY2VuZS5nYW1lT3ZlclRyaWdnZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYXNlICd3aW4nOnJldHVybiB0aGlzLmdhbWUuY3VycmVudFNjZW5lLndpblRyaWdnZXIgPSB0cnVlO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQm9keSB9IGZyb20gXCIuL2JvZHlcIjtcclxuaW1wb3J0IHsgRHVtbXkgfSBmcm9tIFwiLi9haXMvZHVtbXlcIjtcclxuaW1wb3J0IHsgRW5kU2NyaXB0IH0gZnJvbSBcIi4vYWlzL2VuZFNjcmlwdFwiO1xyXG5pbXBvcnQgeyBQZWFjZWZ1bCB9IGZyb20gXCIuL2Fpcy9wZWFjZWZ1bFwiO1xyXG5pbXBvcnQgeyBpc0FncmVzc2l2ZX0gZnJvbSAnLi9haXMvaXNBZ3Jlc3NpdmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9yYyBleHRlbmRzIEJvZHkge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyLCBhaVR5cGUgPSAncGVhY2VmdWwnKSB7Ly/Qn9C10YDQtdC00LDRkdC8INC40LPRgNC+0LrQsCwg0YfRgtC+0LHRiyDQvtGA0Log0LzQvtCzINGB0LvQtdC00LjRgtGMINC30LAg0L3QuNC8INC4INCw0YLQsNC60L7QstCw0YLRjCDQtdCz0L4gXHJcbiAgICAgICAgc3VwZXIoe2ltYWdlTmFtZTogXCJvcmNcIiwgc3BlZWQ6IDgwfSk7XHJcbiAgICAgICAgaWYgKGFpVHlwZSA9PSAnZHVtbXknKXRoaXMuYWkgPSBuZXcgRHVtbXkoKTtcclxuICAgICAgICBpZiAoYWlUeXBlID09ICdlbmRTY3JpcHQnKXRoaXMuYWkgPSBuZXcgRW5kU2NyaXB0KCk7XHJcbiAgICAgICAgaWYgKGFpVHlwZSA9PSAncGVhY2VmdWwnKXRoaXMuYWkgPSBuZXcgUGVhY2VmdWwocGxheWVyKTsgICBcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ29yYyc7Ly/QlNC70Y8g0LrQvtC70LvQsNC50LTQtdGA0LAsINGH0YLQviDQvtC/0L7Qt9C90LDRgtGMINGN0YLQvtGCINC+0LHRitC10LrRglxyXG4gICAgICAgIHRoaXMuYWkuY29udHJvbCh0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLmdvdFBsYXllciA9IGZhbHNlOy8v0JXRgdC70Lgg0L7RgNC6INCy0L7Qt9C70LUg0LjQs9GA0L7QutCwLCDRgtC+IHRydWVcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIGlmKHRoaXMuYWkpe1xyXG4gICAgICAgICAgICB0aGlzLmFpLnVwZGF0ZSh0aW1lKTsvL9CV0YHQu9C4INCY0Jgg0L3QtSDQvtGC0LrQu9GO0YfQtdC9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWF0aCgpe1xyXG4gICAgICAgIHRoaXMuYWkgPSBudWxsOy8v0J7RgtC60LvRjtGH0LDQtdC8INCY0JhcclxuICAgICAgICBpc0FncmVzc2l2ZS5iZWNvbWVBZ3Jlc3NpdmUoKTtcclxuICAgICAgICBzdXBlci5kZWF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59IiwiaW1wb3J0IHsgQm9keSB9IGZyb20gXCIuL2JvZHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBCb2R5eyAvL1BsYXllciAtPiBCb2R5IH4gQ2hhcmFjdGVyU2hlZXQgLT4gU3ByaXRlU2hlZXQgfiBTcHJpdGVcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2wsIGdhbWVfbGV2ZWwpey8vY29udHJvbCAtINGD0L/RgNCw0LLQu9C10L3QuNC1INC60LvQsNCy0LjQsNGC0YPRgNC+0LlcclxuICAgICAgICBzdXBlcih7aW1hZ2VOYW1lOidwbGF5ZXInLCBzcGVlZDogMTUwfSk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sPWNvbnRyb2w7XHJcbiAgICAgICAgdGhpcy5nYW1lX2xldmVsID0gZ2FtZV9sZXZlbDtcclxuICAgICAgICB0aGlzLmFycm93ID0gZmFsc2U7Ly/Qn9C+0LfQstC+0LvRj9C10Lwg0YHRgtGA0LXQu9GP0YLRjCDRgtC+0LvRjNC60L4g0LXRgdC70Lgg0L3QsCDRgNGD0LrQsNGFINC10YHRgtGMINGB0YLRgNC10LvQsFxyXG4gICAgICAgIHRoaXMudGltZUFycm93ID0gMTAwMC8vINCa0L7QvdGB0YLQsNC90YLQsCwg0LLRgNC10LzRjyDQvNC10LbQtNGDINC/0L7Rj9Cy0LvQtdC90LjQtdC8INGB0LvQtdC00YPRjtGJ0LXQuSDRgdGC0YDQtdC70YssINGH0YLQvtCx0Ysg0YHRgtGA0LXQu9GLINC90LUg0YHQvtC30LTQsNCy0LDQu9C40YHRjCDQutCw0Log0LjQtyDQv9GD0LvQtdC80ZHRgtCwXHJcbiAgICAgICAgdGhpcy50aW1lckZvckNyZWF0aW5nQXJyb3cgPSAwOy8v0KLQsNC50LzQtdGAINC00LvRjyDRgdGC0YDQtdC7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZUZvckFycm93ID0gMDtcclxuICAgICAgICB0aGlzLm5hbWUgPSAncGxheWVyJzsvL9CU0LvRjyDQutC+0LvQu9Cw0LnQtNC10YDQsCwg0YfRgtC+INC+0L/QvtC30L3QsNGC0Ywg0Y3RgtC+0YIg0L7QsdGK0LXQutGCXHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoU3RhcnQgPSAzOy8v0J3QsNGH0LDQu9GM0L3QvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC20LjQt9C90LXQuVxyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gdGhpcy5oZWFsdGhTdGFydDtcclxuXHJcbiAgICAgICAgdGhpcy51bmRlYWQgPSAxMDAwOy8v0JrQvtC90YHRgtCw0L3RgtCwINCy0YDQtdC80LXQvdC4INCx0LXRgdGB0LzQtdGA0YLQuNGPLCDQv9C+0YHQu9C1INC/0L7Qu9GD0YfQtdC90LjRjyDRg9GA0L7QvdCwINC40LPRgNC+0Log0LHQtdGB0YHQvNC10YDRgtC10L1cclxuICAgICAgICB0aGlzLnRpbWVyVW5kZWFkID0gLTE7LyrQotCw0LnQvNC10YAg0LTQu9GPINC+0LHRgNCw0YLQvdC+0LPQviDQvtGC0YHRh9GR0YLQsC4g0JXRgdC70Lgg0L7QvSDRgNCw0LLQtdC9INC00LjQsNC/0LDQt9C+0L3RgyDQvtGCIDAg0LTQviB0aGlzLnVuZGVhZCwg0LfQvdCw0YfQuNGCINC40LTRkdGCINC+0LHRgNCw0YLQvdGL0Lkg0L7RgtGB0YfRkdGCINC4INC40LPRgNC+0Log0LHQtdGB0YHQvNC10YDRgtC10L1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQldGB0LvQuCAtMSwg0LjQs9GA0L7QuiDQvNC+0LbQtdGCINC/0L7Qu9GD0YfQuNGC0Ywg0YPRgNC+0L0qL1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWVGb3JVbmRlYWQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEFycm93KGFycm93KXtcclxuICAgICAgICB0aGlzLmFycm93ID0gYXJyb3c7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGl0KCl7Ly/QmNCz0YDQvtC6INC/0L7Qu9GD0YfQuNC7INGD0LTQsNGAXHJcbiAgICAgICAgaWYodGhpcy50aW1lclVuZGVhZCA9PT0gLTEpey8v0JXRgdC70Lgg0LjQs9GA0L7QuiDRgdC80LXRgNGC0LXQvVxyXG4gICAgICAgICAgICBpZih0aGlzLmhlYWx0aD4wKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0xO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyVW5kZWFkID0gdGhpcy51bmRlYWQ7Ly/QlNC10LvQsNC10Lwg0LjQs9GA0L7QutCwINCx0LXRgdGB0LzQtdGA0YLQvdGL0Lwg0L3QsCDQstGA0LXQvNGPXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYodGhpcy5sYXN0VGltZUZvckFycm93ID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZUZvckFycm93ID0gdGltZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMubGFzdFRpbWVGb3JVbmRlYWQgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lRm9yVW5kZWFkID0gdGltZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY29udHJvbC5maXJlKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZXJGb3JDcmVhdGluZ0Fycm93ID09PSAwKXsvL9CV0YHQu9C4INGB0YLRgNC10LvRgyDQvNC+0LbQvdC+INGB0L7Qt9C00LDQstCw0YLRjFxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lckZvckNyZWF0aW5nQXJyb3cgPSB0aGlzLnRpbWVBcnJvdztcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZV9sZXZlbC5zaG9vdGluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcnJvdylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob290KHRoaXMuYXJyb3cpOy8v0JjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC40LzQtdC90L3QviDRjdGC0YMg0YHRgtGA0LXQu9GDLCDRgi7Qui4g0L/QtdGA0YHQvtC90LDQtiDQvNC+0LbQtdGCINC40LzQtdGC0Ywg0YDQsNC30L3Ri9C1INGB0YLRgNC10LvRi1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRyb2wudXApIHtcclxuICAgICAgICAgICAgdGhpcy53YWxrKFwidXBcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udHJvbC5kb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FsayhcImRvd25cIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udHJvbC5sZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FsayhcImxlZnRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuY29udHJvbC5yaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLndhbGsoXCJyaWdodFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0YW5kKHRoaXMudmVsb2NpdHkuZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMudGltZXJGb3JDcmVhdGluZ0Fycm93ID4gMClcclxuICAgICAgICAgICAgdGhpcy50aW1lckZvckNyZWF0aW5nQXJyb3cgLT0odGltZSAtIHRoaXMubGFzdFRpbWVGb3JBcnJvdyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnRpbWVyRm9yQ3JlYXRpbmdBcnJvdyA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMubGFzdFRpbWVGb3JBcnJvdyA9IHRpbWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy50aW1lclVuZGVhZCAhPSAtMSl7Ly/QmNCz0YDQvtC6INCx0LXRgdGB0LzQtdGA0YLQtdC9LCB0aGlzLnRpbWVyVW5kZWFkID4gMFxyXG4gICAgICAgICAgICB0aGlzLnRpbWVyVW5kZWFkIC09KHRpbWUgLSB0aGlzLmxhc3RUaW1lKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZXJVbmRlYWQgPCAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJVbmRlYWQgPSAtMTsvL9CY0LPRgNC+0Log0YHQvdC+0LLQsCDRgdC80LXRgNGC0LXQvVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxhc3RUaW1lRm9yVW5kZWFkID0gdGltZTtcclxuXHJcbiAgICAgICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgfS8vdXBkYXRlXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi92ZWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0aWxley8v0JXQs9C+INGA0LDRgdGI0LjRgNGP0LXRgiBwcm9qZWN0aWxlcy9hcnJvdy5qc1xyXG4gICAgY29uc3RydWN0b3IoZGlyZWN0aW9uLHNwZWVkLCB4LCB5KXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKHRoaXMuZGlyZWN0aW9uLHNwZWVkKTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlOy8v0JXRgdC70Lgg0YHRgtGA0LXQu9CwINCw0LrRgtC40LLQvdCwLCDQvtC90LAg0L7RgtC+0LHRgNCw0LbQsNC10YLRgdGPINGH0LXRgNC10LcgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlINC4INC70LXRgtC40YIg0LIg0YbQtdC70YwuINCQINCy0L7QvtCx0YnQtSDRgdGC0YDQtdC70LAg0LIg0L3QtdCy0LjQtNC40LzQvtC8INGB0L7RgdGC0L7Rj9C90LjQuCDQstGB0LXQs9C00LAg0L3QsNGF0L7QtNC40YLRgdGPINC90LAg0Y3QutGA0LDQvdC1XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb25TaGFwZT0ge3g6MjcseToyNyx3aWR0aDoxMCxoZWlnaHQ6MTB9Oy8v0J3Rg9C20L3QviDQtNC70Y8g0LrQvtC70LvQsNC50LTQtdGA0LAgKNGA0LDRgdGH0ZHRgiDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LkpLiDQoNCw0LfQvNC10YAg0YHQv9GA0LDQudGC0LAgNjTRhTY0XHJcbiAgICAgICAgdGhpcy5kZWxldGVkID0gZmFsc2U7Ly/QoNC+0LTQuNGC0LXQu9GMINCx0YPQtNC10YIg0L7RgtGB0LvQtdC20LjQstCw0YLRjCDRjdGC0YMg0L/QtdGA0LXQvNC10L3QvdGD0Y4sINC10YHQu9C4INC+0L3QsCB0cnVlLCDQt9C90LDRh9C40YIg0YDQvtC00LjRgtC10LvRjCDRg9C00LDQu9C40YIg0Y3RgtC+0YIg0L7QsdGK0LXQutGCXHJcbiAgICB9XHJcblxyXG4gICAgZmx5KHgseSxkaXJlY3Rpb24pe1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID15O1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKXsvL9Cf0YDQuCDQv9C+0L/QsNC00LDQvdC40Lgg0LIg0YHRgtCw0YLQuNGH0L3QvtC1INC/0YDQtdC/0Y/RgtGB0YLQstC40LUsIHByb2plY3RpbGUg0YLQtdGA0Y/QtdGCINGB0LrQvtGA0L7RgdGC0YxcclxuICAgICAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3Rvcih0aGlzLmRpcmVjdGlvbix0aGlzLnNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKXtcclxuICAgICAgICB0aGlzLmRlbGV0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKXtcclxuICAgICAgICBpZih0aGlzLmxhc3RUaW1lID09IDApey8v0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8gIHRoaXMubGFzdFRpbWVcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS5tb3ZlKHRoaXMsIHRpbWUgLSB0aGlzLmxhc3RUaW1lKTtcclxuICAgICAgICB0aGlzLnZpZXcuc2V0WFkoTWF0aC50cnVuYyh0aGlzLngpLCBNYXRoLnRydW5jKHRoaXMueSkpOy8v0J3QsCDRjdGC0L7QvCDRjdGC0LDQv9C1INC/0L7QutCwINC90LUg0LjQt9Cy0LXRgdGC0L3QviDRh9GC0L4g0Y3RgtC+INCx0YPQtNC10YIg0YHQv9GA0LDQudGCINC40LvQuCDQsNC90LjQvNCw0YbQuNGPXHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQcm9qZWN0aWxlIH0gZnJvbSBcIi4uL3Byb2plY3RpbGVcIjtcclxuaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tIFwiLi4vc3ByaXRlLXNoZWV0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXJyb3cgZXh0ZW5kcyBQcm9qZWN0aWxle1xyXG4gICAgY29uc3RydWN0b3IoZGlyZWN0aW9uLCBzcGVlZCwgeCwgeSl7XHJcbiAgICAgICAgc3VwZXIoZGlyZWN0aW9uLHNwZWVkLHggLHkpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlcz0ge307XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ2Fycm93JzsvL9CU0LvRjyDQutC+0LvQu9Cw0LnQtNC10YDQsCwg0YfRgtC+INC+0L/QvtC30L3QsNGC0Ywg0Y3RgtC+0YIg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgY29uc3QgdGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xyXG4gICAgICAgICAgICBpbWFnZU5hbWU6ICd0aWxlcycsXHJcbiAgICAgICAgICAgIGltYWdlV2lkdGg6NjQwLFxyXG4gICAgICAgICAgICBpbWFnZUhlaWdodDo2NDBcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNwcml0ZXNbJ2xlZnQnXSA9IHRpbGVzLmdldFNwcml0ZSAoMzYpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlc1sncmlnaHQnXSA9IHRpbGVzLmdldFNwcml0ZSAoMzcpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlc1snZG93biddID0gdGlsZXMuZ2V0U3ByaXRlICg0Nik7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzWyd1cCddID0gdGlsZXMuZ2V0U3ByaXRlICg0Nyk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5zcHJpdGVzW2RpcmVjdGlvbl07Ly/QmtCw0LrQvtC5INGB0L/RgNCw0LnRgiDRgdGC0YDQtdC70Ysg0L7RgtC+0LHRgNCw0LfQuNGC0Ywg0LfQsNCy0LjRgdC40YIg0L7RgiDQvdCw0L/RgNCw0LLQu9C10L3QuNGPINC/0LXRgNGB0L7QvdCw0LbQsFxyXG4gICAgfVxyXG5cclxuICAgIGZseSh4LHksZGlyZWN0aW9uKXtcclxuICAgICAgICBzdXBlci5mbHkoeCx5LGRpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5zcHJpdGVzW2RpcmVjdGlvbl07XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgUmVtb3ZlRnJvbUFycmF5e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZW1vdmUgKGFyciwgaW5kZXhlcykgey8v0KPQtNCw0LvQuNGC0Ywg0Y3Qu9C10LzQtdC90YLRiyDQuNC3INC80LDRgdGB0LjQstCwINC/0L4g0LjQvdC00LXQutGB0YNcclxuICAgICAgICAvL2FyZ3VtZW50cyAtINC/0YHQtdCy0LTQviDQvNCw0YHRgdC40LIsINCyINC60L7RgtC+0YDQvtC8INGF0YDQsNC90Y/RgtGB0Y8g0LLRgdC1INCw0YDQs9GD0LzQtdC90YLRiywg0L/QtdGA0LXQtNCw0L3QvdGL0LUg0LIg0YTRg9C90LrRhtC40Y5cclxuICAgICAgICAvL1tdLnNsaWNlKCkgLSDRgdC+0LfQtNCw0LXRgiDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXHJcbiAgICAgICAgLyphcnJheU9mSW5kZXhlcyAtINC80LDRgdGB0LjQsiwg0LrQvtGC0L7RgNGL0Lkg0YHQvtC00LXRgNC20LjRgiDQstGB0LUg0LDRgNCz0YPQvNC10L3RgtGLICjQutGA0L7QvNC1INC/0LXRgNCy0L7Qs9C+KSDQv9C10YDQtdC00LDQvdC90YvQtSDQsiDRhNGD0L3QutGG0LjRjlxyXG4gICAgICAgICAgINCt0YLQviDQvNCw0YHRgdC40LIg0LjQvdC00LXQutGB0L7Qsiwg0LrQvtGC0L7RgNGL0LUg0L3Rg9C20L3QviDRg9C00LDQu9C40YLRjCDQuNC3INC+0YHQvdC+0LLQvdC+0LPQviDQvNCw0YHRgdC40LLQsCBhcnIqL1xyXG4gICAgICAgIHZhciBhcnJheU9mSW5kZXhlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcclxuXHJcbiAgICAgICAgLy/QktC10YDQvdGD0YLRjCDQvtGC0YTQuNC70YzRgtGA0L7QstCw0L3QvdGL0Lkg0LzQsNGB0YHQuNCyXHJcbiAgICAgICAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICBcclxuICAgICAgICAgICAgLy/QndCw0L/RgNC40LzQtdGAIGFycmF5T2ZJbmRleGVzID0gWzFdLCDRgtC+INC10YHRgtGMINC90YPQttC90L4g0YPQtNCw0LvQuNGC0Ywg0L7QtNC40L0g0Y3Qu9C10LzQtdC90YIg0L/QviDQuNC90LTQtdC60YHRgyAxXHJcbiAgICAgICAgICAgIC8vaW5kZXhPZiAtINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC40L3QtNC10LrRgSDQuNGB0LrQvtC80L7Qs9C+INGN0LvQtdC80LXQvdGC0LAuINCd0LDQv9GA0LjQvNC10YA6IFsnYScsJ2InXS5pbmRleE9mKCdiJykgLy8tPiAxXHJcbiAgICAgICAgICAgIC8v0JrQsNC20LTRi9C5INGN0LvQtdC80LXQvdGCINC80LDRgdGB0LjQstCwIGFyciDRgdCy0LXRgNGP0LXRgiDRgdCy0L7QuSDQuNC90LTQtdC60YEg0YEg0LjQvdC00LXQutGB0LDQvNC4INCyIGFycmF5T2ZJbmRleGVzLlxyXG4gICAgICAgICAgICAvL9CV0YHQu9C4INC10LPQviDQuNC90LTQtdC60YHQsCDQsiBhcnJheU9mSW5kZXhlcyDQvdC10YIsINGC0L4g0LzQtdGC0L7QtCBpbmRleE9mINCy0LXRgNC90ZHRgiAtMSwg0LfQvdCw0YfQuNGCINCx0YPQtNC10YIgdHJ1ZSDQuCDRjdC70LXQvNC10L3RgiDQvdC1INCx0YPQtNC10YIg0YPQtNCw0LvRkdC9INC40Lcg0LzQsNGB0YHQuNCy0LBcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5T2ZJbmRleGVzLmluZGV4T2YoaW5kZXgpID09IC0xO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfS8vcmVtb3ZlXHJcbn0iLCJleHBvcnQgY2xhc3MgU2NlbmV7Ly/QkdCw0LfQvtCy0YvQuSDQutC70LDRgdGBINCy0YHQtdGFINGB0YbQtdC9XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgV09SS0lORygpIHsgcmV0dXJuICdXT1JLSU5HJzsgfVxyXG4gICAgc3RhdGljIGdldCBMT0FERUQoKSB7IHJldHVybiAnTE9BREVEJzsgfVxyXG4gICAgc3RhdGljIGdldCBTVEFSVF9HQU1FKCkgeyByZXR1cm4gJ1NUQVJUX0dBTUUnOyB9XHJcbiAgICBzdGF0aWMgZ2V0IEdBTUVfT1ZFUigpIHsgcmV0dXJuICdHQU1FX09WRVInOyB9XHJcbiAgICBzdGF0aWMgZ2V0IEdBTUVfV0lOKCkgeyByZXR1cm4gJ0dBTUVfV0lOJzsgfVxyXG4gICAgc3RhdGljIGdldCBGSU5JU0hFRCgpIHsgcmV0dXJuICdGSU5JU0hFRCc7IH1cclxuXHJcbiAgICBpbml0KCl7Ly/QlNC70Y8g0LfQsNC/0YPRgdC60LAg0Lgg0L/QtdGA0LXQt9Cw0L/Rg9GB0LrQsCDRgdGG0LXQvdGLLCDRh9GC0L7QsdGLINCy0LXRgNC90YPRgtGMINC/0LDRgNCw0LzQtdGC0YDRiyDQsiDQv9C10LLQvtC90LDRh9Cw0LvRjNC90L7QtSDRgdC+0YHRgtC+0Y/QvdC40LVcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2goc3RhdHVzKSB7Ly/QnNC10YLQvtC0INC00LvRjyDQt9Cw0LLQtdGA0YjQtdC90LjRjyDRgdGG0LXQvdGLXHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICh0aW1lKXsvL9C+0YLRgNC40YHQvtCy0LrQsCDQtNC70Y8g0LLRgdC10YUg0YHRhtC10L0gKNC90LDQv9GA0LjQvNC10YAg0YHRh9C10YLRh9C40LogZnBzKVxyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7U2NlbmV9IGZyb20gJy4uL3NjZW5lJztcclxuaW1wb3J0IHtTcHJpdGVTaGVldH0gZnJvbSAnLi4vc3ByaXRlLXNoZWV0JztcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4uL3BsYXllcic7XHJcbmltcG9ydCB7Q2FtZXJhfSBmcm9tICcuLi9jYW1lcmEnO1xyXG5pbXBvcnQge0NvbGxpZGVyfSBmcm9tICcuLi9jb2xsaWRlcic7XHJcbmltcG9ydCB7QXJyb3d9IGZyb20gJy4uL3Byb2plY3RpbGVzL2Fycm93JztcclxuLy8gaW1wb3J0IHtUZXh0SW5mb30gZnJvbSAnLi4vdGV4dC1pbmZvJztcclxuaW1wb3J0IHsgV2F2ZXMgfSBmcm9tICcuLi93YXZlcyc7XHJcbmltcG9ydCB7IEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7UmVtb3ZlRnJvbUFycmF5fSBmcm9tICcuLi9yZW1vdmUtZnJvbS1hcnJheSc7XHJcbmltcG9ydCB7IGlzQWdyZXNzaXZlfSBmcm9tICcuLi9haXMvaXNBZ3Jlc3NpdmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVMZXZlbCBleHRlbmRzIFNjZW5le1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50aWxlcyA9IG5ldyBTcHJpdGVTaGVldCh7XHJcbiAgICAgICAgICAgIGltYWdlTmFtZTogJ3RpbGVzJyxcclxuICAgICAgICAgICAgaW1hZ2VXaWR0aDo2NDAsXHJcbiAgICAgICAgICAgIGltYWdlSGVpZ2h0OjY0MFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMudHJlZSA9IHRoaXMudGlsZXMuZ2V0U3ByaXRlKDcpO1xyXG4gICAgICAgIC8vIHRoaXMudHJlZS5zZXRYWSgxMCwxMCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMub3JjID0gbmV3IE9yYygpO1xyXG4gICAgICAgIC8vIHRoaXMub3JjLnggPSAxMDA7XHJcbiAgICAgICAgLy8gdGhpcy5vcmMueSA9IDEwMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuXHJcbiAgICAgICAgaXNBZ3Jlc3NpdmUuYmVjb21lUGVhY2VmdWwoKTsvL9Ch0LTQtdC70LDRgtGMINC+0YDQutC+0LIg0LzQuNGA0L3Ri9C80LhcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZ2FtZS5jb250cm9sLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnBsYXllci54ID0gOTkwO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnk9IDEwNDA7XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIgPSBuZXcgQ29sbGlkZXIoKTsvL9Cj0YfQuNGC0YvQstCw0LXRgiDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQuNC1INC80LXQttC00YMg0L7QsdGK0LXQutGC0LDQvNC4LCDQvdCw0L/RgNC40LzQtdGALCDQvdC1INC00LDRkdGCINC/0YDQvtGF0L7QtNC40YLRjCDQvtCx0YrQtdC60YLQsNC8INGB0LrQstC+0LfRjCDQtNGA0YPQsyDQtNGA0YPQs9CwXHJcblxyXG4gICAgICAgIC8v0JjRgdC/0L7Qu9GM0LfRg9C10Lwgd2VicGFjayDQv9C+0Y3RgtC+0LzRgyDQt9Cw0LPRgNGD0LfRh9C40LoganNvbiDRhNCw0LnQu9C+0LIg0YDQsNCx0L7RgtCw0LXRgiDQv9C+INGD0LzQvtC70YfQsNC90LjRjlxyXG4gICAgICAgIGNvbnN0IG1hcERhdGEgPSByZXF1aXJlICgnLi4vbWFwcy9sZXZlbDEuanNvbicpOyBcclxuICAgICAgICB0aGlzLm1hcCA9IHRoaXMuZ2FtZS5zY3JlZW4uY3JlYXRlTWFwKCdsZXZlbDEnLG1hcERhdGEsdGhpcy50aWxlcyk7Ly9jcmVhdGVNYXAg0LLQvtC30LLRgNCw0YnQsNC10YIg0L7QsdGK0LXQutGCIFRpbGVNYXBcclxuICAgICAgICB0aGlzLm1haW5DYW1lcmEgPSBuZXcgQ2FtZXJhKHtcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZ2FtZS5zY3JlZW4ud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5nYW1lLnNjcmVlbi5oZWlnaHQsXHJcbiAgICAgICAgICAgIGxpbWl0WDogdGhpcy5tYXAud2lkdGggLSB0aGlzLmdhbWUuc2NyZWVuLndpZHRoLFxyXG4gICAgICAgICAgICBsaW1pdFk6IHRoaXMubWFwLmhlaWdodCAtIHRoaXMuZ2FtZS5zY3JlZW4uaGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnNwZWNpYWxQb3NpdGlvbigpOy8v0JfQsNCz0L3QsNGC0Ywg0LrQsNC80LXRgNGDINCyINGB0LDQvNGL0Lkg0YPQs9C+0LtcclxuICAgICAgICB0aGlzLm1haW5DYW1lcmEud2F0Y2godGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uc2V0Q2FtZXJhKHRoaXMubWFpbkNhbWVyYSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIuYWRkU3RhdGljU2hhcGVzKG1hcERhdGEpO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZXIuYWRkS2luZW1hdGljQm9keSh0aGlzLnBsYXllcik7XHJcblxyXG4gICAgICAgIHRoaXMub3JjQXJteSA9W107Ly/QnNCw0YHRgdC40LIg0L7RgNC60L7Qsiwg0L3QvtCy0YvQtSDRgdGC0YDQtdC70Ysg0LHRg9C00YPRgiDQtNC+0LHQsNCy0LvRj9GC0YzRgdGPINGB0Y7QtNCwLCDQsCDQvNC10YLQvtC0IHJlbmRlciDQsdGD0LTQtdGCINC+0YLRgNC40YHQvtCy0YvQstCw0YLRjCDQstGB0LUg0L7QsdGK0LXQutGC0Ysg0LjQtyDRjdGC0L7Qs9C+INC80LDRgdGB0LjQstCwXHJcbiAgICAgICAgdGhpcy53YXZlcyA9IG5ldyBXYXZlcyh0aGlzLmdhbWUpOy8v0JrQvtC90YLRgNC+0LvQuNGA0YPQtdGCINC/0L7Rj9Cy0LvQtdC90LjQtSDQv9GA0L7RgtC40LLQvdC40LrQvtCyXHJcbiAgICAgICAgdGhpcy53YXZlcy5pbml0KCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMudGV4dEluZm8gPSBuZXcgVGV4dEluZm8odGhpcy5nYW1lLnNjcmVlbik7Ly/QktGL0YHQutCw0LrQuNCy0LDRjtGJ0LjQtSDRgtC10LrRgdGC0L7QstGL0LUg0L3QsNC00L/QuNGB0LgsINC90LDQv9GA0LjQvNC10YAgXCJXYXZlIzFcIlxyXG4gICAgICAgIHRoaXMuaW50ZXJmYWNlID0gbmV3IEludGVyZmFjZSh0aGlzLmdhbWUsIHRoaXMud2F2ZXMpOy8v0KjQutCw0LvQsCDQt9C00L7RgNC+0LLRjNGPLCDRgtCw0LnQvNC10YAg0LIg0YPQs9C70YMg0Y3QutGA0LDQvdCwXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aWxlcyA9IFtdOy8v0JzQsNGB0YHQuNCyINGB0YLRgNC10LssINC90L7QstGL0LUg0YHRgtGA0LXQu9GLINCx0YPQtNGD0YIg0LTQvtCx0LDQstC70Y/RgtGM0YHRjyDRgdGO0LTQsCwg0LAg0LzQtdGC0L7QtCByZW5kZXIg0LHRg9C00LXRgiDQvtGC0YDQuNGB0L7QstGL0LLQsNGC0Ywg0LLRgdC1INC+0LHRitC10LrRgtGLINC40Lcg0Y3RgtC+0LPQviDQvNCw0YHRgdC40LLQsFxyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJUcmlnZ2VyID0gZmFsc2U7Ly/QldGB0LvQuCBpbnRlcmZhY2Ug0YHQtNC10LvQsNC10YIg0Y3RgtGDINC/0LXRgNC10LzQtdC90L3Rg9GOIHRydWUsINC/0LXRgNC10YXQvtC00LjQvCDQuiDQv9GA0L7QuNCz0YDRi9GI0L3QvtC5INGB0YbQtdC90LVcclxuICAgICAgICB0aGlzLndpblRyaWdnZXIgPSBmYWxzZTsvL9CV0YHQu9C4IGludGVyZmFjZSDRgdC00LXQu9Cw0LXRgiDRjdGC0YMg0L/QtdGA0LXQvNC10L3QvdGD0Y4gdHJ1ZSwg0L/QtdGA0LXRhdC+0LTQuNC8INC6INC/0L7QsdC10LTQvdC+0Lkg0YHRhtC10L3QtVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpe1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZU92ZXJUcmlnZ2VyKXsvL9CX0LDQutC+0L3Rh9C40Lwg0LjQs9GA0YNcclxuICAgICAgICAgICAgdGhpcy5maW5pc2goU2NlbmUuR0FNRV9PVkVSKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMud2luVHJpZ2dlcil7Ly/Ql9Cw0LrQvtC90YfQuNC8INC40LPRgNGDXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoKFNjZW5lLkdBTUVfV0lOKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMub3JjLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICB0aGlzLnBsYXllci51cGRhdGUodGltZSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMucHJvamVjdGlsZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMucHJvamVjdGlsZXMuZm9yRWFjaCgoYXJyb3csaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICBpZihhcnJvdy5hY3RpdmUpey8vYWN0aXZlINGB0YLQsNC90L7QstC40YLRgdGPIHRydWUg0LIg0LzQtdGC0L7QtNC1IFBsYXllciAtPiBCb2R5LnNob290KClcclxuICAgICAgICAgICAgICAgICAgICBhcnJvdy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihhcnJvdy5kZWxldGVkKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RpbGVzID0gUmVtb3ZlRnJvbUFycmF5LnJlbW92ZSh0aGlzLnByb2plY3RpbGVzLGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLm9yY0FybXkubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMub3JjQXJteS5mb3JFYWNoKG9yYz0+e1xyXG4gICAgICAgICAgICAgICAgb3JjLnVwZGF0ZSh0aW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZighdGhpcy5vcmNBZ3Jlc3NpdmUpey8v0JXRgdC70Lgg0L7RgNC60Lgg0L3QtSDQsNCz0YDQtdGB0YHQuNCy0L3Riywg0L/RgNC+0LLQtdGA0Y/QtdC8INC90LUg0YHQv9GA0L7QstC+0YbQuNGA0L7QstCw0L3RiyDQu9C4INC+0L3QuFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmKCFvcmMuYWkpey8v0JXRgdC70Lgg0YMg0LrQvtCz0L4t0YLQviDQuNC3INC+0YDQutC+0LIg0L7RgtC60LvRjtGH0LXQvSDQmNCYLCDQt9C90LDRh9C40YIg0L7QvSDRg9Cx0LjRglxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm9yY0FncmVzc2l2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jb2xsaWRlci51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSl7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKCcjMDAwMDAwJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMubWFwKTtcclxuICAgICAgICAvLyB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy50cmVlKTtcclxuICAgICAgICAvLyB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5vcmMudmlldyk7XHJcbiAgICAgICAgaWYodGhpcy5vcmNBcm15Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLm9yY0FybXkuZm9yRWFjaChvcmM9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZShvcmMudmlldyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMucGxheWVyLnZpZXcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMucHJvamVjdGlsZXMubGVuZ3RoID4gMCl7Ly/QntGC0YDQuNGB0L7QstC60LAg0YHRgtGA0LXQu1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RpbGVzLmZvckVhY2goYXJyb3c9PntcclxuICAgICAgICAgICAgICAgIGlmKGFycm93LmFjdGl2ZSl7Ly9hY3RpdmUg0YHRgtCw0L3QvtCy0LjRgtGB0Y8gdHJ1ZSDQsiDQvNC10YLQvtC00LUgUGxheWVyIC0+IEJvZHkuc2hvb3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZShhcnJvdy52aWV3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLndhdmVzLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgICAgICAgdGhpcy5pbnRlcmZhY2UudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob290aW5nKCl7Ly/QodGC0YDQtdC70YzQsdCwINC40LPRgNC+0LrQsFxyXG4gICAgICAgIGxldCBhcnJvdyA9IG5ldyBBcnJvdygnZG93bicsNDAwLCB0aGlzLnBsYXllci54LCB0aGlzLnBsYXllci55KTtcclxuICAgICAgICB0aGlzLnBsYXllci5hZGRBcnJvdyhhcnJvdyk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0aWxlcy5wdXNoKGFycm93KTsvL9CS0YHQtSDQvtCx0YrQtdC60YLRiyDQuNC3INGN0YLQvtCz0L4g0LzQsNGB0YHQuNCy0LAg0LHRg9C00YPRgiDQvtGC0YDQuNGB0L7QstCw0L3RiyDQsiDQvNC10YLQvtC00LUgcmVuZGVyXHJcbiAgICAgICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KGFycm93KTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge1NjZW5lfSBmcm9tICcuLi9zY2VuZSc7IFxyXG5pbXBvcnQge09yY30gZnJvbSAnLi4vb3JjJztcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4uL3BsYXllcic7XHJcbmltcG9ydCB7U3ByaXRlU2hlZXR9IGZyb20gJy4uL3Nwcml0ZS1zaGVldCc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZU92ZXIgZXh0ZW5kcyBTY2VuZXtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpOy8v0JLRi9C30L7QsiDRgNC+0LTQuNGC0LXQu9GM0YHQutC+0LPQviDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMubG9hZGVkQXQgPSAwO1xyXG4gICAgICAgIHRoaXMub3JjID0gbmV3IE9yYyhudWxsLCdlbmRTY3JpcHQnKTsvLyhwbGF5ZXIsIGFpVHlwZSA9ICdwZWFjZWZ1bCcpXHJcbiAgICAgICAgdGhpcy5vcmMueCA9IDQyMDtcclxuICAgICAgICB0aGlzLm9yYy55ID0gMjAwO1xyXG5cclxuICAgICAgICB0aGlzLnNjcmlwdFRpbWUgPSAxNzAwOy8v0JLRgNC10LzRjyDQutC+0LPQtNCwINC+0YDQuiDQsdGM0ZHRgiDQuNCz0YDQvtC60LBcclxuICAgICAgICB0aGlzLnNjcmlwdFNwZWVkUGxheWVyID0gLTEwOy8v0J3QsNGH0LDQu9GM0L3QsNGPINGB0LrQvtGA0L7RgdGC0Ywg0LjQs9GA0L7QutCwXHJcblxyXG4gICAgICAgIC8vIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihudWxsLG51bGwpO1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVyLnN0YW5kKCdyaWdodCcpO1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVyLnggPSAzNTA7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXIueSA9IDIwMDtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlcyA9IG5ldyBTcHJpdGVTaGVldCh7XHJcbiAgICAgICAgICAgIGltYWdlTmFtZTogJ3BsYXllcicsXHJcbiAgICAgICAgICAgIGltYWdlV2lkdGg6NjQwLFxyXG4gICAgICAgICAgICBpbWFnZUhlaWdodDo2NDBcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMudGlsZXMuZ2V0U3ByaXRlKDMxKTtcclxuICAgICAgICB0aGlzLnBsYXllckNvb3JkID0ge3g6IDI3MCwgeToyMDB9XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0WFkodGhpcy5wbGF5ZXJDb29yZC54LHRoaXMucGxheWVyQ29vcmQueSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpe1xyXG4gICAgICAgIGlmKHRoaXMubG9hZGVkQXQgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkQXQgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5sb2FkZWRBdCAhPSAwICYmICh0aW1lIC0gdGhpcy5sb2FkZWRBdCkgPjUwMCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZS5jb250cm9sLmZpcmUpey8v0J/RgNC4INC90LDQttCw0YLQuNC4INC90LAgXCLQvtCz0L7QvdGMXCIg0L3QsNGH0LDRgtGMINC40LPRgNGDXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmZpbmlzaChTY2VuZS5MT0FERUQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2goU2NlbmUuR0FNRV9XSU4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmxvYWRlZEF0ICE9IDAgJiYgKHRpbWUgLSB0aGlzLmxvYWRlZEF0KSA+IHRoaXMuc2NyaXB0VGltZSl7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy50aWxlcy5nZXRTcHJpdGUoMzYpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckNvb3JkLnggLT0gNTtcclxuICAgICAgICAgICAgdGhpcy5zY3JpcHRTcGVlZFBsYXllciArPTAuNTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb29yZC55ICs9dGhpcy5zY3JpcHRTcGVlZFBsYXllcjtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0WFkodGhpcy5wbGF5ZXJDb29yZC54LHRoaXMucGxheWVyQ29vcmQueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9yYy51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbCgnYmxhY2snKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDE1MCwzMjAsICfQntCg0JrQmCDQkdCV0JfQntCR0JjQlNCd0KsuINCd0JUg0J7QkdCY0JbQkNC5INCh0JvQkNCR0KvQpSDQntCg0JrQntCSJywxNSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm9yYy52aWV3KTtcclxuICAgICAgICAvLyB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5wbGF5ZXIudmlldyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMucGxheWVyKTtcclxuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1NjZW5lfSBmcm9tICcuLi9zY2VuZSc7XHJcbmltcG9ydCB7U3ByaXRlU2hlZXR9IGZyb20gJy4uL3Nwcml0ZS1zaGVldCc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVdpbiBleHRlbmRzIFNjZW5le1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7Ly/QktGL0LfQvtCyINGA0L7QtNC40YLQtdC70YzRgdC60L7Qs9C+INC60L7QvdGB0YLRgNGD0LrRgtC+0YDQsFxyXG4gICAgICAgIHRoaXMudGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xyXG4gICAgICAgICAgICBpbWFnZU5hbWU6ICdwbGF5ZXInLFxyXG4gICAgICAgICAgICBpbWFnZVdpZHRoOjY0MCxcclxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQ6NjQwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vcmNUaWxlcyA9IG5ldyBTcHJpdGVTaGVldCh7XHJcbiAgICAgICAgICAgIGltYWdlTmFtZTogJ29yYycsXHJcbiAgICAgICAgICAgIGltYWdlV2lkdGg6NjQwLFxyXG4gICAgICAgICAgICBpbWFnZUhlaWdodDo2NDBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMubG9hZGVkQXQgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMudGlsZXMuZ2V0U3ByaXRlKDMxKTtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9zaXRpb25ZID0gMjAwO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ29vcmQgPSB7eDogMzAwLCB5OnRoaXMuc3RhcnRQb3NpdGlvbll9XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0WFkodGhpcy5wbGF5ZXJDb29yZC54LHRoaXMucGxheWVyQ29vcmQueSk7XHJcbiAgICAgICAgdGhpcy5zdGFydEltcHVsc2UgPSAtODsvL9GB0YLQsNGA0YLQvtCy0YvQuSDQuNC80L/Rg9C70YzRgSDQtNC70Y8g0L/QvtC00LHRgNCw0YHRi9Cy0LDQvdC40Y8g0LjQs9GA0L7QutCwINC+0YDQutCw0LzQuFxyXG4gICAgICAgIHRoaXMuc3BlZWRQbGF5ZXIgPSB0aGlzLnN0YXJ0SW1wdWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5vcmNzID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTw0O2krKyl7XHJcbiAgICAgICAgICAgIGxldCB4MSA9IDE1MCArIGkqMTAwO1xyXG4gICAgICAgICAgICB0aGlzLm9yY3MucHVzaCh7eDp4MSx5OjIwMCxzcHJpdGU6dGhpcy5vcmNUaWxlcy5nZXRTcHJpdGUoMzEpLCBzcGVlZDogdGhpcy5zdGFydEltcHVsc2V9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub3Jjcy5mb3JFYWNoKG9yYz0+e1xyXG4gICAgICAgICAgICBvcmMuc3ByaXRlLnNldFhZKG9yYy54LG9yYy55KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSl7XHJcbiAgICAgICAgaWYodGhpcy5sb2FkZWRBdCA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZWRBdCA9IHRpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmxvYWRlZEF0ICE9IDAgJiYgKHRpbWUgLSB0aGlzLmxvYWRlZEF0KSA+IDUwMCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZS5jb250cm9sLmZpcmUpey8v0J/RgNC4INC90LDQttCw0YLQuNC4INC90LAgXCLQvtCz0L7QvdGMXCIg0L3QsNGH0LDRgtGMINC40LPRgNGDXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmZpbmlzaChTY2VuZS5MT0FERUQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2goU2NlbmUuU1RBUlRfR0FNRSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWRQbGF5ZXIgKz0wLjU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDb29yZC55ICs9IHRoaXMuc3BlZWRQbGF5ZXI7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXJDb29yZC55ID4gdGhpcy5zdGFydFBvc2l0aW9uWSl7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ29vcmQueSA9IHRoaXMuc3RhcnRQb3NpdGlvblk7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRQbGF5ZXIgPSB0aGlzLnN0YXJ0SW1wdWxzZStNYXRoLnJhbmRvbSgpLTAuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0WFkodGhpcy5wbGF5ZXJDb29yZC54LHRoaXMucGxheWVyQ29vcmQueSk7ICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5vcmNzLmZvckVhY2gob3JjPT57XHJcbiAgICAgICAgICAgIG9yYy5zcGVlZCArPTAuNTtcclxuICAgICAgICAgICAgb3JjLnkgKz1vcmMuc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmKG9yYy55ID4gdGhpcy5zdGFydFBvc2l0aW9uWSl7XHJcbiAgICAgICAgICAgICAgICBvcmMueSA9IHRoaXMuc3RhcnRQb3NpdGlvblk7XHJcbiAgICAgICAgICAgICAgICBvcmMuc3BlZWQgPSB0aGlzLnN0YXJ0SW1wdWxzZStNYXRoLnJhbmRvbSgpLTAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcmMuc3ByaXRlLnNldFhZKG9yYy54LG9yYy55KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSl7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKCdibGFjaycpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoMjQwLDMyMCwgJ9CYINCd0JjQmtCi0J4g0J3QlSDQn9Ce0KHQotCg0JDQlNCQ0JsnLDE1KTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMucGxheWVyKTtcclxuICAgICAgICB0aGlzLm9yY3MuZm9yRWFjaChvcmM9PntcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKG9yYy5zcHJpdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7U2NlbmV9IGZyb20gJy4uL3NjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU2NlbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICBzdXBlcihnYW1lKTsvL9CS0YvQt9C+0LIg0YDQvtC00LjRgtC10LvRjNGB0LrQvtCz0L4g0LrQvtC90YHRgtGA0YPQutGC0L7RgNCwXHJcbiAgICAgICAgdGhpcy5sb2FkZWRBdCA9IDA7IC8v0JfQtNC10YHRjCDQt9Cw0L/QuNGI0LXRgtGB0Y8g0LLRgNC10LzRjywg0L3QsCDQutC+0YLQvtGA0L7QvCDQstGB0LUg0LrQsNGA0YLQuNC90LrQuCDQt9Cw0LPRgNGD0LfQuNC70LjRgdGMXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpey8v0JTQu9GPINC30LDQv9GD0YHQutCwINC4INC/0LXRgNC10LfQsNC/0YPRgdC60LAg0YHRhtC10L3Riywg0YfRgtC+0LHRiyDQstC10YDQvdGD0YLRjCDQv9Cw0YDQsNC80LXRgtGA0Ysg0LIg0L/QtdCy0L7QvdCw0YfQsNC70YzQvdC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1XHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMubG9hZGVkQXQgPSAwOy8v0L7QsdC90YPQu9GP0LXQvFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYodGhpcy5sb2FkZWRBdCA9PSAwICYmIHRoaXMuZ2FtZS5zY3JlZW4uaXNJbWFnZXNMb2FkZWQgPT0gdHJ1ZSkgey8v0JXRgdC70Lgg0LrQsNGA0YLQuNC90LrQuCDQt9Cw0LPRgNGD0LfQuNC70LjRgdGMINC4INCy0YDQtdC80Y8g0LfQsNCz0YDRg9C30LrQuCDQtdGJ0ZEg0L3QtSDRhNC40LrRgdC40YDQvtCy0LDQu9C+0YHRjC4uLlxyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZEF0ID0gdGltZTsvLy4u0LfQsNC/0LjRiNC10Lwg0LLRgNC10LzRjywg0L3QsCDQutC+0YLQvtGA0L7QvCDQstGB0LUg0LrQsNGA0YLQuNC90LrQuCDQt9Cw0LPRgNGD0LfQuNC70LjRgdGMXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMubG9hZGVkQXQgIT0gMCAmJiAodGltZSAtIHRoaXMubG9hZGVkQXQpID4gNTAwKSB7Ly/QktGL0LbQuNC00LDQtdC8IDUwMCDQvNGBXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoKFNjZW5lLkxPQURFRCk7Ly/QodGG0LXQvdCwINC30LDQs9GA0YPQttC10L3QsFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSl7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKCcjMDAwMDAwJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5wcmludCg1MCw3MCwn0JfQsNCz0YDRg9C30LrQsCDQvNC40LPRgNC40YDRg9GO0YnQuNGFINC+0YDQutC+0LIuLi4nKTtcclxuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1NjZW5lfSBmcm9tICcuLi9zY2VuZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFNjZW5le1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7Ly/QktGL0LfQvtCyINGA0L7QtNC40YLQtdC70YzRgdC60L7Qs9C+INC60L7QvdGB0YLRgNGD0LrRgtC+0YDQsFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5sb2FkZWRBdCA9IDA7Ly/QkiDQvdCw0YfQsNC70LUg0Y3RgtC+INCy0YDQtdC80Y8g0LrQvdC+0L/QutCwIFwi0L7Qs9C+0L3RjFwiINC90LUg0LTQvtGB0YLRg9C/0L3QsCwg0YfRgtC+0LHRiyDQv9GA0Lgg0L/QtdGA0LXRhdC+0LTQtSDQsiDQvNC10L3RjiDQv9C+INC60L3QvtC/0LrQtSBcItC+0LPQvtC90YxcIiDQuNCz0YDQsCDQstC90LXQt9Cw0L/QvdC+INC90LUg0LfQsNC/0YPRgdGC0LjQu9Cw0YHRjFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKXtcclxuICAgICAgICBpZih0aGlzLmxvYWRlZEF0ID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZEF0ID0gdGltZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMubG9hZGVkQXQgIT0gMCAmJiAodGltZSAtIHRoaXMubG9hZGVkQXQpID4gNTAwKXtcclxuICAgICAgICAgICAgaWYodGhpcy5nYW1lLmNvbnRyb2wuZmlyZSl7Ly/Qn9GA0Lgg0L3QsNC20LDRgtC40Lgg0L3QsCBcItC+0LPQvtC90YxcIiDQvdCw0YfQsNGC0Ywg0LjQs9GA0YNcclxuICAgICAgICAgICAgdGhpcy5maW5pc2goU2NlbmUuR0FNRV9PVkVSKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZmluaXNoKFNjZW5lLlNUQVJUX0dBTUUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdJbWFnZSgwLDAsJ3RpdGxlJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5wcmludCgyMDAsMzkwLCAn0J3QkNCW0JzQmNCi0JUg0J/QoNCe0JHQldCbJywyNSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5wcmludCg4MCw0NzAsICfQo9Cf0KDQkNCS0JvQldCd0JjQlSDQodCi0KDQldCb0JrQkNCc0JguINCU0JvQryDQodCi0KDQldCb0KzQkdCrINCY0KHQn9Ce0JvQrNCX0KPQmdCi0JUg0J/QoNCe0JHQldCbLicsMTUpO1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gJy4vaW1hZ2UtbG9hZGVyJztcclxuaW1wb3J0IHtUaWxlTWFwfSBmcm9tICcuL3RpbGUtbWFwJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmVlbntcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoICwgaGVpZ2h0KXtcclxuICAgICAgICB0aGlzLndpZHRoPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMuY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5pbWFnZXMgPSB7fTtcclxuICAgICAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaXNDYW1lcmFTZXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRTdHlsZXNUb0NhbnZhcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFN0eWxlc1RvQ2FudmFzKCl7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUucmlnaHQgPSAnMCc7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJvdHRvbSA9ICcwJztcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5tYXJnaW4gPSAnYXV0byc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2JsYWNrJztcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYW1lcmEoY2FtZXJhKXtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuICAgICAgICB0aGlzLmlzQ2FtZXJhU2V0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkSW1hZ2VzKGltYWdlc0ZpbGVzKXtcclxuICAgICAgICBjb25zdCBsb2FkZXIgPSAgbmV3IEltYWdlTG9hZGVyKGltYWdlc0ZpbGVzKTtcclxuICAgICAgICBsb2FkZXIubG9hZCgpLnRoZW4obmFtZXM9PntcclxuXHJcbiAgICAgICAgICAgIC8vT2JqZWN0LmFzc2lnbiDQutC+0L/QuNGA0YPQtdGCINCyINC/0LXRgNCy0YvQuSDQvtCx0YrQtdC60YIg0YHQstC+0LnRgdGC0LLQsCDQvtGB0YLQsNC70YzQvdGL0YUg0L7QsdGK0LXQutGC0L7Qsi4g0JIgbG9hZGVyLmltYWdlcyDRgdC10LnRh9Cw0YEge29yYzogaW1nLCBwbGF5ZXI6IGltZywgdGl0bGU6IGltZywgdGlsZXM6IGltZ31cclxuICAgICAgICAgICAgLy9pbWcgLSDRjdGC0L4g0L7QsdGK0LXQutGCIEltYWdlLCDQsiDQvdGR0Lwg0LXRgdGC0Ywg0YHQstC+0LnRgdGC0LLQviBzcmMsINCyINC60L7RgtC+0YDQvtC8INC30LDQv9C40YHQsNC9INC/0YPRgtGMINC6INC60LDRgNGC0LjQvdC60LVcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXMgPSBPYmplY3QuYXNzaWduKHRoaXMuaW1hZ2VzLCBsb2FkZXIuaW1hZ2VzKTtcclxuICAgICAgICAgICAgdGhpcy5pc0ltYWdlc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpe1xyXG4gICAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjYW52YXMnKTtcclxuICAgICAgICBsZXQgY2FudmFzID0gZWxlbWVudHNbMF0gfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbi8v0J3QsCDQutCw0YDRgtC1INC80L3QvtCz0L4g0L7QsdGK0LXQutGC0L7Qsiwg0LTQu9GPINC+0L/RgtC40LzQuNC30LDRhtC40Lgg0LTQtdC70LDQtdC8INC/0YDQtdGA0LXQvdC00LXRgCAo0LfQsNGA0LDQvdC10LUg0L7RgtGA0LjRgdC+0LLQsNGC0Ywg0LrQsNGA0YLRgyDQuCDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LrQsNC6INC60LDRgNGC0LjQvdC60YMpXHJcbiAgICBjcmVhdGVNYXAobmFtZSwgbWFwRGF0YSwgdGlsZXNldCkge1xyXG4gICAgICAgIGNvbnN0IG1hcEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgbWFwSW1hZ2Uud2lkdGggPSBtYXBEYXRhLndpZHRoICogbWFwRGF0YS50aWxld2lkdGg7Ly/QtNCw0L3QvdGL0LUgIG1hcERhdGEud2lkdGgg0LggbWFwRGF0YS50aWxld2lkdGgg0LHQtdGA0YPRgtGB0Y8g0LjQtyBsZXZlbDEuanNvblxyXG4gICAgICAgIG1hcEltYWdlLmhlaWdodCA9IG1hcERhdGEuaGVpZ2h0ICogbWFwRGF0YS50aWxlaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IG1hcENvbnRleHQgPSBtYXBJbWFnZS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGNvbnN0IGhpdGJveGVzID0gW107XHJcbiAgICAgICAgbGV0IHJvdywgY29sO1xyXG4gICAgICAgIG1hcERhdGEubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4gey8v0JLRgdC1INC90LXQvtCx0YXQvtC00LjQvNGL0LUg0LTQsNC90L3Ri9C1INC70LXQttCw0YIg0LIgbWFwRGF0YS5sYXllcnMgKGxldmVsMS5qc29uKVxyXG4gICAgICAgICAgICBpZihsYXllci50eXBlID09IFwidGlsZWxheWVyXCIpIHsvL9CjINGB0LvQvtC10LIgdHlwZSA9PSBcInRpbGVsYXllclwiXHJcbiAgICAgICAgICAgICAgICByb3cgPSAwO1xyXG4gICAgICAgICAgICAgICAgY29sID0gMDtcclxuICAgICAgICAgICAgICAgIGxheWVyLmRhdGEuZm9yRWFjaChpbmRleCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaW5kZXggPiAwKSB7Ly9sYXllci5kYXRhIC0g0Y3RgtC+INC80LDRgdGB0LjQsiBbNywgMjEsIDAsIDIzLCA3LCAwINC4INGCLtC0Ll0uIEluZGV4ID0gMCDQt9C90LDRh9C40YIsINGH0YLQviDRj9GH0LXQudC60LAg0L/Rg9GB0YLQsNGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3RpbGVzZXQuaW1hZ2VOYW1lXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVzZXQuZ2V0U291cmNlWChpbmRleCksIHRpbGVzZXQuZ2V0U291cmNlWShpbmRleCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBEYXRhLnRpbGV3aWR0aCwgbWFwRGF0YS50aWxlaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sICogbWFwRGF0YS50aWxld2lkdGgsIHJvdyAqIG1hcERhdGEudGlsZWhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbCA+IChtYXBEYXRhLndpZHRoIC0gMSkpIHsvL9CV0YHQu9C4INC00L7RiNC70Lgg0LTQviDQutC+0L3RhtCwINGB0YLRgNC+0LrQuCwg0L/QtdGA0LXRhdC+0LTQuNC8INC90LAg0L3QvtCy0YPRjiDRgdGC0YDQvtC60YNcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobGF5ZXIudHlwZSA9PSBcIm9iamVjdGdyb3VwXCIpIHsvL9CjINC+0LHRitC10LrRgtC+0LIgdHlwZSA9PSBcInRpbGVsYXllclwiXHJcbiAgICAgICAgICAgICAgICBoaXRib3hlcy5wdXNoKC4uLmxheWVyLm9iamVjdHMubWFwKG9iaiA9PiAoe3gxOiBvYmoueCwgeDI6IG9iai54ICsgb2JqLndpZHRoLCB5MTogb2JqLnksIHkyOiBvYmoueSArIG9iai5oZWlnaHR9KSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7Ly9tYXBEYXRhLmxheWVycy5mb3JFYWNoXHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gbWFwSW1hZ2U7Ly/QlNC+0LHQsNCy0LjRgtGMINC/0L7Qu9GD0YfQtdC90L3QvtC1INC40LfQvtCx0YDQsNC20LXQvdC40LUg0LrQsNGA0YLRiyDQsiDQt9Cw0LPRgNGD0LbQtdC90L3Ri9C1INC40LfQvtCx0YDQsNC20LXQvdC40Y9cclxuICAgICAgICByZXR1cm4gbmV3IFRpbGVNYXAoey8vVGlsZU1hcCBleHRlbmRzIFNwcml0ZSAtINC60LDRgNGC0LAg0L/RgNC10LTRgdGC0LDQstC70Y/QtdGCINC40Lcg0YHQtdCx0Y8g0L7QtNC40L0g0LHQvtC70YzRiNC+0Lkg0YHQv9GA0LDQudGCXHJcbiAgICAgICAgICAgIGltYWdlTmFtZTogbmFtZSxcclxuICAgICAgICAgICAgc291cmNlWDogMCxcclxuICAgICAgICAgICAgc291cmNlWTogMCxcclxuICAgICAgICAgICAgd2lkdGg6IG1hcEltYWdlLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IG1hcEltYWdlLmhlaWdodCxcclxuICAgICAgICAgICAgaGl0Ym94ZXM6IGhpdGJveGVzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9Ly9jcmVhdGVNYXBcclxuXHJcblxyXG4gICAgXHJcbiAgICBmaWxsKGNvbG9yKXtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0ICgwLDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcmludCh4LHksdGV4dCxmb250U2l6ZSA9IDIyKXtcclxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WCA9IDQ7IC8v0J3QtSDRgNCw0LHQvtGC0LDQtdGCXHJcbiAgICAgICAgLy8gdGhpcy5jb250ZXh0LnNoYWRvd09mZnNldFkgPSA0O1xyXG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5zaGFkb3dCbHVyID0gMztcclxuICAgICAgICAvLyB0aGlzLmNvbnRleHRzaGFkb3dDb2xvciA9ICdibGFjayc7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICcjRkZGRkZGJztcclxuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IGZvbnRTaXplKydweCBBcmlhbCc7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQseCx5KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3SW1hZ2UoeCx5LGltYWdlTmFtZSl7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tpbWFnZU5hbWVdLHgseSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1Nwcml0ZShzcHJpdGUpe1xyXG4gICAgICAgIHRoaXMuY29udGV4dFxyXG4gICAgICAgIGxldCBzcHJpdGVYID0gc3ByaXRlLng7XHJcbiAgICAgICAgbGV0IHNwcml0ZVkgPSBzcHJpdGUueTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0NhbWVyYVNldCl7XHJcbiAgICAgICAgICAgIHNwcml0ZVggLT10aGlzLmNhbWVyYS54O1xyXG4gICAgICAgICAgICBzcHJpdGVZIC09dGhpcy5jYW1lcmEueVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/QodC/0YDQsNC50YLRiywg0LrQvtGC0L7RgNGL0LUg0L3QtSDQv9C+0L/QsNC00LDRjtGCINCyINC+0LHQu9Cw0YHRgtGMINCy0LjQtNC40LzQvtGB0YLQuCDQutCw0LzQtdGA0YssINC90LUg0L7RgtGA0LjRgdC+0LLRi9Cy0LDQtdC8XHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAgIChzcHJpdGVYID49IHRoaXMud2lkdGgpIHx8XHJcbiAgICAgICAgICAgIChzcHJpdGVZID49IHRoaXMuaGVpZ2h0KSB8fFxyXG4gICAgICAgICAgICAoKHNwcml0ZVggKyBzcHJpdGUud2lkdGgpIDw9IDApfHxcclxuICAgICAgICAgICAgKChzcHJpdGVZICsgc3ByaXRlLmhlaWdodCkgPD0wKVxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy/QldGB0LvQuCDRgdC/0YDQsNC50YIg0LvQuNGI0Ywg0YfQsNGB0YLQuNGH0L3QviDQv9C+0L/QsNC00LDQtdGCINCyINC+0LHQu9Cw0YHRgtGMINCy0LjQtNC40LzQvtGB0YLQuCDQutCw0LzQtdGA0YssINC+0YLRgNC40YHQvtCy0YvQstCw0LXQvCDRgtC+0LvRjNC60L4g0LLQuNC00LjQvNGD0Y4g0YfQsNGB0YLRjCDRgdC/0YDQsNC50YLQsFxyXG4gICAgICAgIGxldCBzb3VyY2VYPXNwcml0ZS5zb3VyY2VYK1xyXG4gICAgICAgICAgICAgICAgICAgIE1hdGguYWJzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbigwLCBzcHJpdGVYKS8v0J/RgNC4INCy0YvRhdC+0LTQtSDQt9CwINC70LXQstGL0Lkg0LrRgNCw0Lkg0L/QvtC70YPRh9Cw0LXRgtGB0Y8gc3ByaXRlLnNvdXJjZVggKyB8c3ByaXRlWHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IHNvdXJjZVk9c3ByaXRlLnNvdXJjZVkgKyBNYXRoLmFicyhNYXRoLm1pbigwLCBzcHJpdGVZKSk7O1xyXG5cclxuICAgICAgICBsZXQgd2lkdGg9TWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpZHRoLC8v0YjQuNGA0LjQvdCwINGN0LrRgNCw0L3QsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlWCArIHNwcml0ZS53aWR0aCkgLSBcclxuICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoMCwgc3ByaXRlWCk7LyrQldGB0LvQuCBzcHJpdGVYICsgc3ByaXRlLndpZHRoINCx0YPQtNC10YIg0LHQvtC70YzRiNC1IHRoaXMud2lkdGggKNC10YHQu9C4INGB0L/RgNCw0LnRgiDQstGL0LnQtNC10YIg0LfQsCDQv9GA0LDQstGL0Lkg0LrRgNCw0LkpLCBcclxuICAgICAgICAgICAgICAgICAg0YjQuNGA0LjQvdCwINGB0L/RgNCw0LnRgtCwIGxldCB3aWR0aCDQv9C+0LvRg9GH0LjRgtGB0Y8g0L7RgtGA0LjRhtCw0YLQtdC70YzQvdC+0LkuINCe0YLRgNC40YbQsNGC0LXQu9GM0L3QsNGPINGI0LjRgNC40L3QsCDQt9Cw0YXQstCw0YLRi9Cy0LDQtdGCINC40LfQvtCx0YDQsNC20LXQvdC40LUg0L3QtSDQstC/0YDQsNCy0L4g0LrQsNC6INC+0LHRi9GH0L3Qviwg0LAg0LLQu9C10LLQviovXHJcblxyXG4gICAgICAgIGxldCBoZWlnaHQgPSBNYXRoLm1pbih0aGlzLmhlaWdodCwgc3ByaXRlWSArIHNwcml0ZS5oZWlnaHQpIC0gTWF0aC5tYXgoMCwgc3ByaXRlWSk7XHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW3Nwcml0ZS5pbWFnZU5hbWVdLFxyXG4gICAgICAgICAgICBzb3VyY2VYLC8v0JrQvtC+0YDQtNC40L3QsNGC0Ysg0YHQv9GA0LDQudGC0LAg0L3QsCDQuNGB0YXQvtC00L3QvtC8INC40LfQvtCx0YDQsNC20LXQvdC40LhcclxuICAgICAgICAgICAgc291cmNlWSwgXHJcbiAgICAgICAgICAgIHdpZHRoLC8v0KDQsNC30LzQtdGA0Ysg0YHQv9GA0LDQudGC0LAg0L3QsCDQuNGB0YXQvtC00L3QvtC8INC40LfQvtCx0YDQsNC20LXQvdC40LhcclxuICAgICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgICBNYXRoLm1heCgwLHNwcml0ZVgpLC8v0KDQuNGB0L7QstCw0L3QuNC1INGB0L/RgNCw0LnRgtCwINC90LAg0YXQvtC70YHRgtC1LiDQldGB0LvQuCDQt9Cw0LTQsNC90LAg0LrQsNC80LXRgNCwLCDQvtC90LAg0L/QvtCy0LvQuNGP0LXRgiDQvdCwINGN0YLQuCDQutC+0L7RgNC00LjQvdCw0YLRi1xyXG4gICAgICAgICAgICBNYXRoLm1heCgwLHNwcml0ZVkpLFxyXG4gICAgICAgICAgICB3aWR0aCwvL9Cg0LDQt9C80LXRgNGLINGB0L/RgNCw0LnRgtCwINC90LAg0YXQvtC70YHRgtC1XHJcbiAgICAgICAgICAgIGhlaWdodCk7XHJcblxyXG4gICAgfS8vZHJhd1Nwcml0ZVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcbmltcG9ydCB7QW5pbWF0aW9ufSBmcm9tICcuL2FuaW1hdGlvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlU2hlZXQgey8v0KTQsNCx0YDQuNC60LAg0YHQv9GA0LDQudGC0L7Qsi4g0KfRgtC+0LHRiyDQstGA0YPRh9C90YPRjiDQvdC1INGB0L7Qt9C00LDQstCw0YLRjCDRgdC/0YDQsNC50YLRiyAo0L7QsdGK0LXQutGC0YsgU3ByaXRlKSDQuCDQsNC90LjQvNCw0YbQuNGOIChBbmltYXRpb24gZXh0ZW5kcyBTcHJpdGUpXHJcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lLCBpbWFnZVdpZHRoLCBpbWFnZUhlaWdodCwgc3ByaXRlV2lkdGggPSA2NCwgc3ByaXRlSGVpZ2h0ID0gNjR9KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XHJcbiAgICAgICAgdGhpcy5pbWFnZVdpZHRoID0gaW1hZ2VXaWR0aDtcclxuICAgICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gaW1hZ2VIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVXaWR0aCA9IHNwcml0ZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlSGVpZ2h0ID0gc3ByaXRlSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFuaW1hdGlvbihpbmRleGVzLHNwZWVkLCByZXBlYXQgPSB0cnVlLCBhdXRvcnVuID0gdHJ1ZSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBbmltYXRpb24oe1xyXG4gICAgICAgICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxyXG4gICAgICAgICAgICBmcmFtZXM6IGluZGV4ZXMubWFwKGluZGV4ID0+ICh7c3g6dGhpcy5nZXRTb3VyY2VYKGluZGV4KSwgc3k6dGhpcy5nZXRTb3VyY2VZKGluZGV4KX0pKSwvL1sxLDJdID0+IFt7c3g6dGhpcy5nZXRTb3VyY2VYKDEpLCBzeTp0aGlzLmdldFNvdXJjZVkoMSl9LCAge3N4OnRoaXMuZ2V0U291cmNlWCgyKSwgc3k6dGhpcy5nZXRTb3VyY2VZKDIpfV0gIFxyXG4gICAgICAgICAgICBzcGVlZDogc3BlZWQsXHJcbiAgICAgICAgICAgIHJlcGVhdDogIHJlcGVhdCxcclxuICAgICAgICAgICAgYXV0b3J1bjogYXV0b3J1bixcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuc3ByaXRlV2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5zcHJpdGVIZWlnaHRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcHJpdGUoaW5kZXgpey8v0J3QsNGF0L7QtNC40Lwg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0YHQv9GA0LDQudGC0LAg0L/QviDQv9C+0YDRj9C00LrQvtCy0L7QvNGDINC90L7QvNC10YDRg1xyXG4gICAgICAgcmV0dXJuIG5ldyBTcHJpdGUoe1xyXG4gICAgICAgIGltYWdlTmFtZTogdGhpcy5pbWFnZU5hbWUsXHJcbiAgICAgICAgc291cmNlWDogdGhpcy5nZXRTb3VyY2VYKGluZGV4KSxcclxuICAgICAgICBzb3VyY2VZOiB0aGlzLmdldFNvdXJjZVkoaW5kZXgpLFxyXG4gICAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5zcHJpdGVIZWlnaHRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNvdXJjZVgoaW5kZXgpey8v0KHQv9GA0LDQudGC0Ysg0L/QvtC70YPRh9Cw0LXQvCDQv9C+INC/0L7RgNGP0LTQutC+0LLQvtC80YMg0L3QvtC80LXRgNGDLiBpbmRleCDQsdGD0LTQtdGCINC90LDRh9C40L3QsNGC0YzRgdGPINGBINC10LTQuNC90LjRhtGLLCDQsCDQstC90YPRgtGA0Lgg0YTRg9C90LrRhtC40Lgg0L3Rg9C80LjRgNCw0YbQuNGPINC90LDRh9C40L3QsNC10YLRgdGPINGBINC90YPQu9GPLCDQv9C+0Y3RgtC+0LzRgyAtLWluZGV4XHJcbiAgICAgICAgcmV0dXJuICgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgJSB0aGlzLmltYWdlV2lkdGg7IFxyXG4gICAgfVxyXG5cclxuICAgIGdldFNvdXJjZVkoaW5kZXgpe1xyXG4gICAgICAgIHJldHVybiBNYXRoLnRydW5jKCgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgLyB0aGlzLmltYWdlV2lkdGgpKnRoaXMuc3ByaXRlSGVpZ2h0Oy8vTWF0aC50cnVuYyAtINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGG0LXQu9GD0Y4g0YfQsNGB0YLRjCDRh9C40YHQu9CwINC/0YPRgtGR0Lwg0YPQtNCw0LvQtdC90LjRjyDQstGB0LXRhSDQtNGA0L7QsdC90YvRhSDQt9C90LDQutC+0LJcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTcHJpdGUgey8v0JLRgNGD0YfQvdGD0Y4g0YHQv9GA0LDQudGC0Ysg0YfQtdGA0LXQtyDRjdGC0L7RgiDQutC70LDRgdGBINC90LUg0YHQvtC30LTQsNGO0YLRgdGPLiDQoSDRjdGC0LjQvCDQutC70LDRgdGB0L7QvCDRgNCw0LHQvtGC0LDQtdGCIFwi0YTQsNCx0YDQuNC60LBcIiDRgdC/0YDQsNC50YLQvtCyIHNwcml0ZS1zaGVldC5qc1xyXG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgc291cmNlWCwgc291cmNlWSwgd2lkdGggPSA2NCwgaGVpZ2h0ID02NH0pIHtcclxuICAgICAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcclxuICAgICAgICB0aGlzLnNvdXJjZVggPSBzb3VyY2VYOy8v0JrQvtC+0YDQtNC40L3QsNGC0Ysg0L3Rg9C20L3QvtCz0L4g0YHQv9GA0LDQudGC0LAg0L3QsCDQuNGB0YXQvtC00L3QvtC5INC60LDRgNGC0LjQvdC60LVcclxuICAgICAgICB0aGlzLnNvdXJjZVkgPSBzb3VyY2VZO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0WFkoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBUZXh0SW5mb3tcclxuICAgIGNvbnN0cnVjdG9yKHNjcmVlbil7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuO1xyXG4gICAgICAgIHRoaXMuc2hvd1RleHRCb29sZWFuID0gZmFsc2U7Ly/Qn9C+0LrQsNC30YvQstCw0YLRjCDQu9C4INGC0LXQutGB0YJcclxuICAgICAgICB0aGlzLnRleHQgPSAnJztcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmhvd0xvbmdUb1Nob3cgPSAxMDAwOy8v0KHQutC+0LvRjNC60L4g0LLRgNC10LzQtdC90Lgg0L/QvtC60LDQt9GL0LLQsNGC0Ywg0YLQtdC60YHRglxyXG4gICAgICAgIHRoaXMudGltZVRvU3RvcCA9IDA7Ly/QktGA0LXQvNGPINC60L7Qs9C00LAg0L3Rg9C20L3QviDQt9Cw0LLQtdGA0YjQuNGC0Ywg0L/QvtC60LDQt1xyXG4gICAgICAgIHRoaXMuZm9udFNpemUgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRGb250U2l6ZSA9IDE1MDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSl7XHJcbiAgICAgICAgaWYodGhpcy5sYXN0VGltZSA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaWYodGhpcy5zaG93VGV4dEJvb2xlYW4pe1xyXG4gICAgICAgICAgICB0aGlzLmZvbnRTaXplIC09KHRpbWUgLSB0aGlzLmxhc3RUaW1lKS8xMDtcclxuICAgICAgICAgICAgdGhpcy5zZXRYWSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbi5wcmludCh0aGlzLngsIHRoaXMueSwgdGhpcy50ZXh0LCB0aGlzLmZvbnRTaXplKTtcclxuICAgICAgICAgICAgaWYodGltZT50aGlzLnRpbWVUb1N0b3Ape1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VGV4dEJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VGV4dCh0ZXh0LHRpbWUpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUZXh0Qm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudGltZVRvU3RvcCA9IHRpbWUgKyB0aGlzLmhvd0xvbmdUb1Nob3c7XHJcbiAgICAgICAgICAgIHRoaXMuZm9udFNpemUgPSB0aGlzLnN0YXJ0Rm9udFNpemU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0WFkoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRYWSgpe1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMuc2NyZWVuLndpZHRoLzIgLSB0aGlzLmZvbnRTaXplKjEuNTtcclxuICAgICAgICB0aGlzLnkgPSB0aGlzLnNjcmVlbi5oZWlnaHQvMiArIHRoaXMuZm9udFNpemUvNC41O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vc3ByaXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCBleHRlbmRzIFNwcml0ZSB7Ly/Qn9C+0LTQutC70Y7Rh9C40Lwg0LrQsNGA0YLRgywg0Y3RgtC+INC/0YDQvtGB0YLQviDRgdC/0YDQsNC50YIg0YEg0LrQvtC90YLQtdC50L3QtdGA0L7QvCDQtNCw0L3QvdGL0YUg0LTQu9GPINC60L7Qu9C70LjQt9C40LkgKNC80LDRgdGB0LjQsiBoaXRib3hlcylcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGl0Ym94ZXMgPSBwcm9wcy5oaXRib3hlcyB8fCBbXTtcclxuICAgIH1cclxufVxyXG4vL9Cd0LAg0LrQsNGA0YLQtSDQvNC90L7Qs9C+INC+0LHRitC10LrRgtC+0LIsINC00LvRjyDQvtC/0YLQuNC80LjQt9Cw0YbQuNC4INC00LXQu9Cw0LXQvCDQv9GA0LXRgNC10L3QtNC10YAgKNC30LDRgNCw0L3QtdC1INC+0YLRgNC40YHQvtCy0LDRgtGMINC60LDRgNGC0YMg0Lgg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC60LDQuiDQutCw0YDRgtC40L3QutGDKS4g0JTQu9GPINGN0YLQvtCz0L4g0YPQtNC+0LHQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCBzY3JlZW4uanMiLCIvL1ZlY3RvciDQvtGC0LLQtdGH0LDQtdGCINC30LAg0L/QtdGA0LXQvNC10YnQtdC90LjQtSDQv9C10YDRgdC+0L3QsNC20LXQuSDQv9C+INC90LDQv9GA0LDQstC70LXQvdC40Y5cclxuZXhwb3J0IGNsYXNzIFZlY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihkaXJlY3Rpb24sIHNwZWVkKSB7XHJcbiAgICAgICAgdGhpcy5zZXREaXJlY3Rpb24oZGlyZWN0aW9uLCBzcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlyZWN0aW9uKGRpcmVjdGlvbiwgc3BlZWQpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBcInVwXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSAtc3BlZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMueSA9IHNwZWVkO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IC1zcGVlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKG9iamVjdCwgZHQpIHsvL2R0IC0g0LLRgNC10LzRjyDQvNC10LbQtNGDINC/0L7RgdC70LXQtNC90LjQvNC4INGE0YDQtdC50LzQsNC80LggKHRpbWUtdGhpcy5sYXN0VGltZSlcclxuICAgICAgICBvYmplY3QueCArPSBkdCAqICh0aGlzLnggLyAxMDAwKTtcclxuICAgICAgICBvYmplY3QueSArPSBkdCAqICh0aGlzLnkgLyAxMDAwKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRleHRJbmZvIH0gZnJvbSBcIi4vdGV4dC1pbmZvXCI7XHJcbmltcG9ydCB7T3JjfSBmcm9tICcuL29yYyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFdhdmVze1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICAvLyB0aGlzLndhdmVzO1xyXG4gICAgICAgIC8vIHRoaXMudGV4dEluZm8gPSBuZXcgVGV4dEluZm8odGhpcy5nYW1lLnNjcmVlbik7XHJcbiAgICAgICAgdGhpcy5vcmNBcm15ID0gZ2FtZS5jdXJyZW50U2NlbmUub3JjQXJteTsvL9Cc0LDRgdGB0LjQsiwg0YHQvtC00LXRgNC20LDRidC40Lkg0LLRgdC10YUg0YHRg9GJ0LXRgdGC0LLRg9GO0YnQuNGFINC+0YDQutC+0LIuINCt0YLQvtGCINC60LvQsNGB0YEg0L/QvtC/0L7Qu9C90Y/QtdGCINGN0YLQvtGCINC80LDRgdGB0LjQsiDQvdC+0LLRi9C80Lgg0L7RgNC60LDQvNC4XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlciA9IGdhbWUuY3VycmVudFNjZW5lLmNvbGxpZGVyOy8v0JHRg9C00LXQvCDQtNC+0LHQsNCy0LvRj9GC0Ywg0L7RgNC60L7QsiDQsiDQutC+0LvQu9Cw0LnQtNC10YBcclxuICAgICAgICB0aGlzLnBsYXllciA9IGdhbWUuY3VycmVudFNjZW5lLnBsYXllcjsvL9Cf0LXRgNC10LTQsNGR0Lwg0LjQs9GA0L7QutCwLCDRh9GC0L7QsdGLINC+0YDQuiDQvNC+0LMg0YHQu9C10LTQuNGC0Ywg0LfQsCDQvdC40Lwg0Lgg0LDRgtCw0LrQvtCy0LDRgtGMINC10LPQvlxyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudGltZUxlZnRGb3JOZXh0V2F2ZSA9IDUwMDsvL9Ci0LDQudC80LXRgCDQtNC70Y8g0L7QsdGA0LDRgtC90L7Qs9C+INC+0YLRgdGH0ZHRgtCwLiDQn9C10YDQstCw0Y8g0LLQvtC70L3QsCDQvdCw0YfQvdGR0YLRgdGPINGH0LXRgNC10LcgMTAwMCDQvNGBXHJcbiAgICAgICAgdGhpcy50aW1lRm9yTmV4dFdhdmUgPSAyMDAwOy8v0JrQvtC90YHRgtCw0L3RgtCwLCDRgdC70LXQtNGD0Y7RidCw0Y8g0LLQvtC70L3QsNGPINCx0YPQtNC10YIg0YfQtdGA0LXQtyDRjdGC0L4g0LLRgNC10LzRj1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICAvLyB0aGlzLndhdmVzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSl7XHJcbiAgICAgICAgaWYodGhpcy5sYXN0VGltZSA9PTApe1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy50aW1lTGVmdEZvck5leHRXYXZlIDwgMCl7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFdhdmUodGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZUxlZnRGb3JOZXh0V2F2ZSAtPSh0aW1lLXRoaXMubGFzdFRpbWUpO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICAgIC8vIHRoaXMudGV4dEluZm8udXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHRXYXZlKHRpbWUpe1xyXG4gICAgICAgIC8vIHRoaXMud2F2ZXMgKz0xO1xyXG4gICAgICAgIC8vIGxldCB0ZXh0ID0gJ1dhdmUgIycrdGhpcy53YXZlcztcclxuICAgICAgICAvLyB0aGlzLnRleHRJbmZvLnNob3dUZXh0KHRleHQsdGltZSk7XHJcblxyXG4gICAgICAgIGxldCBvcmNTcXVhZCA9IFtdOy8v0KHQvtC30LTQsNGC0Ywg0LfQsCDQvtC00LjQvSDRgNCw0Lcg0L3QtdGB0LrQvtC70YzQutC40YUg0L7RgNC60L7QslxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpIDwgMjtpKyspe1xyXG4gICAgICAgICAgICBsZXQgb3JjID0gbmV3IE9yYyh0aGlzLnBsYXllcik7Ly/Qn9C10YDQtdC00LDRkdC8INC40LPRgNC+0LrQsCwg0YfRgtC+0LHRiyDQvtGA0Log0LzQvtCzINGB0LvQtdC00LjRgtGMINC30LAg0L3QuNC8INC4INCw0YLQsNC60L7QstCw0YLRjCDQtdCz0L5cclxuICAgICAgICAgICAgb3JjLnggPSAxMzUwOy8v0J/QvtGB0LvQtSDQvtGC0LvQsNC00LrQuCDRgdC00LXQu9Cw0LkgMTM1MFxyXG4gICAgICAgICAgICBvcmMueSA9IDEwMTUgK2kqNzA7XHJcbiAgICAgICAgICAgIG9yY1NxdWFkLnB1c2gob3JjKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9yY1NxdWFkLmZvckVhY2gob3JjPT57XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGlkZXIuYWRkS2luZW1hdGljQm9keShvcmMpO1xyXG4gICAgICAgICAgICB0aGlzLm9yY0FybXkucHVzaChvcmMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVMZWZ0Rm9yTmV4dFdhdmUgPSAgdGhpcy50aW1lRm9yTmV4dFdhdmU7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9