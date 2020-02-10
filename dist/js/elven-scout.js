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
          this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].LOADED);
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
          this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].LOADED);
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
          // this.finish(Scene.GAME_OVER);
          this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].START_GAME);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FpLmpzIiwid2VicGFjazovLy8uL3NyYy9haXMvZHVtbXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fpcy9lbmRTY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fpcy9pc0FncmVzc2l2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWlzL3BlYWNlZnVsLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcmFjdGVyLXNoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb2xsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9vcmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvamVjdGlsZXMvYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbW92ZS1mcm9tLWFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvZ2FtZS1sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvZ2FtZS1vdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZS9nYW1lLXdpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUtc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dC1pbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy90aWxlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy93YXZlcy5qcyJdLCJuYW1lcyI6WyJBSSIsImJvZHkiLCJ0aW1lIiwiRHVtbXkiLCJkdXJhdGlvbiIsImRpcmVjdGlvbiIsImxhc3RUaW1lIiwic3BsaXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGFuZ2VEaXJlY3Rpb24iLCJ3YWxrIiwiRW5kU2NyaXB0IiwiZXZlbnRUaW1lIiwiZXZlbnRTdGFydCIsImhpdCIsInN0YW5kIiwiaXNBZ3Jlc3NpdmUiLCJhZ3Jlc3NpdmUiLCJQZWFjZWZ1bCIsInBsYXllciIsImxhc3RUaW1lRHVtYiIsInN0dWNrIiwiY2hhbmdlV2F5SW5pdCIsImNoYW5nZVdheSIsIm9sZFgiLCJvbGRZIiwibGFzdFRpbWVBZ3Jlc3NpdmUiLCJkdXJhdGlvbkFncmVzc2l2ZSIsInRpbWVPZk1hcmNoIiwiaXNPcmNBZ3Jlc3NpdmUiLCJhZ3Jlc3NpdmVCZWhhdmlvdXIiLCJpc1N0dWNrIiwiZHVtYkJlaGF2aW91ciIsImNvcnJlY3Rpb24iLCJ4IiwiY29sbGlzaW9uU2hhcGUiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJhdHRhY2siLCJjaGFuZ2VBZ3Jlc3NpdmVEaXJlY3Rpb24iLCJnZXRIaXQiLCJBbmltYXRpb24iLCJpbWFnZU5hbWUiLCJmcmFtZXMiLCJzcGVlZCIsInJlcGVhdCIsImF1dG9ydW4iLCJzb3VyY2VYIiwic3giLCJzb3VyY2VZIiwic3kiLCJydW5uaW5nIiwiY3VycmVudEZyYW1lIiwidG90YWxGcmFtZXMiLCJsZW5ndGgiLCJvbkVuZCIsImluZGV4Iiwic2V0RnJhbWUiLCJzdG9wIiwibmV4dEZyYW1lIiwiU3ByaXRlIiwiQm9keSIsInZlbG9jaXR5IiwiVmVjdG9yIiwiYW5pbWF0aW9ucyIsImlzU2hvb3RpbmciLCJpc0hpdHRpbmciLCJhbmltYXRpb25TaGVldCIsIkNoYXJhY3RlclNoZWV0IiwiZm9yRWFjaCIsIm5hbWUiLCJnZXRBbmltYXRpb24iLCJhcnJvdyIsInZpZXciLCJmbHkiLCJydW4iLCJzZXREaXJlY3Rpb24iLCJtb3ZlIiwic2V0WFkiLCJ0cnVuYyIsInVwZGF0ZSIsIkNhbWVyYSIsImxpbWl0WCIsImxpbWl0WSIsInNjcm9sbEVkZ2UiLCJ3YXRjaE9iamVjdCIsIm9iaiIsIm1pbiIsIm1heCIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsInNlcXVlbmNlcyIsImdldFNlcXVlbmNlcyIsImRhdGEiLCJyZXF1aXJlIiwibGF5ZXJzIiwibGF5ZXIiLCJmaWx0ZXIiLCJpIiwiU3ByaXRlU2hlZXQiLCJDb2xsaWRlciIsInN0YXRpY1NoYXBlcyIsImJvZGllcyIsInR5cGUiLCJwdXNoIiwib2JqZWN0cyIsImNoZWNrQ29sbGlzaW9uIiwic2hhcGUiLCJjaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyIsImoiLCJjaGVja0ludGVyYWN0aXZlIiwiaW5kZXhPZkJvZHkiLCJpbmRleE9mU2hhcGUiLCJoYXNPd25Qcm9wZXJ0eSIsIlJlbW92ZUZyb21BcnJheSIsInJlbW92ZSIsImRlYXRoIiwiQ29udHJvbFN0YXRlIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0IiwiZmlyZSIsImtleU1hcCIsIk1hcCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJlc3NlZCIsImhhcyIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImdldCIsIkdhbWUiLCJzY3JlZW4iLCJTY3JlZW4iLCJsb2FkSW1hZ2VzIiwib3JjIiwidGl0bGUiLCJ0aWxlcyIsImNvbnRyb2wiLCJzY2VuZXMiLCJsb2FkaW5nIiwiTG9hZGluZyIsIm1lbnUiLCJNZW51IiwiZ2FtZUxldmVsIiwiR2FtZUxldmVsIiwiZ2FtZU92ZXIiLCJHYW1lT3ZlciIsImdhbWVXaW4iLCJHYW1lV2luIiwiY3VycmVudFNjZW5lIiwiaW5pdCIsInN0YXR1cyIsIlNjZW5lIiwiTE9BREVEIiwiU1RBUlRfR0FNRSIsIkdBTUVfT1ZFUiIsIkdBTUVfV0lOIiwiV09SS0lORyIsImNoYW5nZVNjZW5lIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnJhbWUiLCJJbWFnZUxvYWRlciIsImltYWdlRmlsZXMiLCJpbWFnZXMiLCJwcm9taXNlcyIsImxvYWRJbWFnZSIsIlByb21pc2UiLCJhbGwiLCJzcmMiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIndpbmRvdyIsImVsdmVuU2NvdXQiLCJJbnRlcmZhY2UiLCJnYW1lIiwid2F2ZXMiLCJ0ZXh0SW5mbyIsIlRleHRJbmZvIiwiY29udGV4dCIsImZpZ2h0VGV4dFNob3dlZCIsInRpbWVUb1N1cnZpdmUiLCJ3aWR0aEhlYWx0aExpbmUiLCJlbmRPcGFjaXR5Iiwic2hvd0hlYWx0aExpbmUiLCJoZWFsdGgiLCJlbmRHYW1lIiwiZmlnaHRUZXh0Iiwic2hvd1RpbWVyIiwic2hvd1RleHQiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImxpbmVXaWR0aCIsInJlY3QiLCJmaWxsUmVjdCIsImhlYWx0aFN0YXJ0Iiwic3Ryb2tlIiwicHJpbnQiLCJvcGFjaXR5IiwiZ2FtZU92ZXJUcmlnZ2VyIiwid2luVHJpZ2dlciIsIk9yYyIsImFpVHlwZSIsImFpIiwiYmVjb21lQWdyZXNzaXZlIiwiUGxheWVyIiwiZ2FtZV9sZXZlbCIsInRpbWVBcnJvdyIsInRpbWVyRm9yQ3JlYXRpbmdBcnJvdyIsImxhc3RUaW1lRm9yQXJyb3ciLCJ1bmRlYWQiLCJ0aW1lclVuZGVhZCIsImxhc3RUaW1lRm9yVW5kZWFkIiwic2hvb3RpbmciLCJzaG9vdCIsIlByb2plY3RpbGUiLCJhY3RpdmUiLCJkZWxldGVkIiwiQXJyb3ciLCJzcHJpdGVzIiwiZ2V0U3ByaXRlIiwiYXJyIiwiaW5kZXhlcyIsImFycmF5T2ZJbmRleGVzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiaXRlbSIsImluZGV4T2YiLCJjb25zdHJ1Y3RvciIsImJlY29tZVBlYWNlZnVsIiwiY29sbGlkZXIiLCJtYXBEYXRhIiwibWFwIiwiY3JlYXRlTWFwIiwibWFpbkNhbWVyYSIsInNwZWNpYWxQb3NpdGlvbiIsIndhdGNoIiwic2V0Q2FtZXJhIiwiYWRkU3RhdGljU2hhcGVzIiwiYWRkS2luZW1hdGljQm9keSIsIm9yY0FybXkiLCJXYXZlcyIsInByb2plY3RpbGVzIiwiZmluaXNoIiwiZmlsbCIsImRyYXdTcHJpdGUiLCJhZGRBcnJvdyIsImxvYWRlZEF0Iiwic2NyaXB0VGltZSIsInNjcmlwdFNwZWVkUGxheWVyIiwicGxheWVyQ29vcmQiLCJvcmNUaWxlcyIsInN0YXJ0UG9zaXRpb25ZIiwic3RhcnRJbXB1bHNlIiwic3BlZWRQbGF5ZXIiLCJvcmNzIiwieDEiLCJzcHJpdGUiLCJpc0ltYWdlc0xvYWRlZCIsImRyYXdJbWFnZSIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsImdldENvbnRleHQiLCJjYW1lcmEiLCJpc0NhbWVyYVNldCIsImFkZFN0eWxlc1RvQ2FudmFzIiwic3R5bGUiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiaW1hZ2VzRmlsZXMiLCJsb2FkZXIiLCJsb2FkIiwidGhlbiIsIm5hbWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInRpbGVzZXQiLCJtYXBJbWFnZSIsInRpbGV3aWR0aCIsInRpbGVoZWlnaHQiLCJtYXBDb250ZXh0IiwiaGl0Ym94ZXMiLCJyb3ciLCJjb2wiLCJnZXRTb3VyY2VYIiwiZ2V0U291cmNlWSIsIngyIiwieTEiLCJ5MiIsIlRpbGVNYXAiLCJjb2xvciIsInRleHQiLCJmb250U2l6ZSIsImZvbnQiLCJmaWxsVGV4dCIsInNwcml0ZVgiLCJzcHJpdGVZIiwiYWJzIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJzaG93VGV4dEJvb2xlYW4iLCJob3dMb25nVG9TaG93IiwidGltZVRvU3RvcCIsInN0YXJ0Rm9udFNpemUiLCJwcm9wcyIsIm9iamVjdCIsImR0IiwidGltZUxlZnRGb3JOZXh0V2F2ZSIsInRpbWVGb3JOZXh0V2F2ZSIsIm5leHRXYXZlIiwib3JjU3F1YWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxJQUFNQSxFQUFiO0FBQUE7QUFBQTtBQUFpQjtBQUNiLGdCQUFjO0FBQUE7O0FBQ1YsU0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDSDs7QUFITDtBQUFBO0FBQUEsNEJBS1lBLElBTFosRUFLa0I7QUFDVixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDSDtBQVBMO0FBQUE7QUFBQSwyQkFTV0MsSUFUWCxFQVNpQixDQUVaO0FBWEw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFTyxJQUFNQyxLQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLG1CQUFjO0FBQUE7O0FBQUE7O0FBQUM7QUFDWDtBQUNBLFVBQUtDLFFBQUwsR0FBZ0IsSUFBaEIsQ0FGVSxDQUVXOztBQUNyQixVQUFLQyxTQUFMLEdBQWlCLE1BQWpCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixDQUFoQixDQUpVLENBSVE7O0FBSlI7QUFLYjs7QUFOTDtBQUFBO0FBQUEsc0NBUXNCO0FBQUM7QUFDZixXQUFLRCxTQUFMLEdBQWlCLHFCQUFxQkUsS0FBckIsQ0FBMkIsR0FBM0IsRUFBZ0NDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBYyxDQUF6QixDQUFoQyxDQUFqQjtBQUNIO0FBVkw7QUFBQTtBQUFBLDJCQVlXUixJQVpYLEVBWWdCO0FBQ1IsVUFBSUEsSUFBSSxHQUFHLEtBQUtJLFFBQWIsR0FBeUIsS0FBS0YsUUFBakMsRUFBMkM7QUFDdkMsYUFBS08sZUFBTDtBQUNBLGFBQUtMLFFBQUwsR0FBZ0JKLElBQWhCO0FBQ0g7O0FBQ0QsV0FBS0QsSUFBTCxDQUFVVyxJQUFWLENBQWUsS0FBS1AsU0FBcEI7O0FBQ0Esd0VBQWFILElBQWI7QUFDSDtBQW5CTDs7QUFBQTtBQUFBLEVBQTJCRixzQ0FBM0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBRU8sSUFBTWEsU0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFDSSx1QkFBYztBQUFBOztBQUFBOztBQUFDO0FBQ1g7QUFDQSxVQUFLUixTQUFMLEdBQWlCLE1BQWpCO0FBQ0EsVUFBS1MsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFVBQUtSLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxVQUFLUyxVQUFMLEdBQWtCLEtBQWxCO0FBTFU7QUFNYjs7QUFQTDtBQUFBO0FBQUEsMkJBU1diLElBVFgsRUFTZ0I7QUFDUixVQUFHLEtBQUtJLFFBQUwsSUFBaUIsQ0FBcEIsRUFBc0I7QUFDbEIsYUFBS0EsUUFBTCxHQUFnQkosSUFBaEI7QUFDSDs7QUFDRCxXQUFLWSxTQUFMLElBQWtCWixJQUFJLEdBQUcsS0FBS0ksUUFBOUI7O0FBRUEsVUFBRyxDQUFDLEtBQUtTLFVBQVQsRUFBb0I7QUFBQztBQUNqQixZQUFHLEtBQUtELFNBQUwsR0FBaUIsQ0FBcEIsRUFBdUI7QUFDbkIsZUFBS0MsVUFBTCxHQUFrQixJQUFsQixDQURtQixDQUNJOztBQUN2QixlQUFLZCxJQUFMLENBQVVlLEdBQVYsQ0FBYyxLQUFLWCxTQUFuQixFQUZtQixDQUVXO0FBQ2pDOztBQUNELGFBQUtKLElBQUwsQ0FBVVcsSUFBVixDQUFlLEtBQUtQLFNBQXBCO0FBQ0gsT0FORCxNQU1LO0FBQ0QsYUFBS0osSUFBTCxDQUFVZ0IsS0FBVixDQUFnQixLQUFLWixTQUFyQjtBQUNIOztBQUdELFdBQUtDLFFBQUwsR0FBZ0JKLElBQWhCOztBQUNBLDRFQUFhQSxJQUFiO0FBQ0g7QUE1Qkw7O0FBQUE7QUFBQSxFQUErQkYsc0NBQS9CLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRk8sSUFBTWtCLFdBQWI7QUFBQTtBQUFBO0FBQ0kseUJBQWE7QUFBQTtBQUNaOztBQUZMO0FBQUE7QUFBQSxzQ0FJNEI7QUFDcEIsV0FBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNIO0FBTkw7QUFBQTtBQUFBLHFDQVEyQjtBQUNuQixXQUFLQSxTQUFMLEdBQWlCLEtBQWpCO0FBQ0g7QUFWTDtBQUFBO0FBQUEscUNBWTJCO0FBQ25CLGFBQU8sS0FBS0EsU0FBWjtBQUNIO0FBZEw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFTyxJQUFNQyxRQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLG9CQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBQUM7QUFDakI7QUFDQSxVQUFLakIsUUFBTCxHQUFnQixJQUFoQixDQUZnQixDQUVLOztBQUNyQixVQUFLQyxTQUFMLEdBQWlCLE1BQWpCO0FBQ0EsVUFBS2lCLFlBQUwsR0FBb0IsQ0FBcEIsQ0FKZ0IsQ0FJTTs7QUFDdEIsVUFBS2hCLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxVQUFLZSxNQUFMLEdBQWNBLE1BQWQsQ0FOZ0IsQ0FNSzs7QUFFckIsVUFBS0UsS0FBTCxHQUFhLEtBQWIsQ0FSZ0IsQ0FRRzs7QUFDbkIsVUFBS0MsYUFBTCxHQUFxQixHQUFyQixDQVRnQixDQVNTOztBQUN6QixVQUFLQyxTQUFMLEdBQWlCLE1BQUtELGFBQXRCO0FBQ0EsVUFBS0UsSUFBTCxHQUFZLENBQVosQ0FYZ0IsQ0FXRjs7QUFDZCxVQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUVBLFVBQUtDLGlCQUFMLEdBQXlCLENBQXpCO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsR0FBekIsQ0FmZ0IsQ0FlYTs7QUFDN0IsVUFBS0MsV0FBTCxHQUFtQixJQUFuQixDQWhCZ0IsQ0FnQlE7O0FBaEJSO0FBaUJuQjs7QUFsQkw7QUFBQTtBQUFBLHNDQW9Cc0I7QUFBQztBQUNmLFdBQUt6QixTQUFMLEdBQWlCLFVBQVVFLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBYyxDQUF6QixDQUFyQixDQUFqQixDQURjLENBRWQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQTlCTDtBQUFBO0FBQUEsMkJBbUNXUixJQW5DWCxFQW1DZ0I7QUFDUixVQUFHLEtBQUtJLFFBQUwsSUFBaUIsQ0FBcEIsRUFBc0I7QUFDbEIsYUFBS0EsUUFBTCxHQUFnQkosSUFBaEI7QUFDSDs7QUFHRCxVQUFHLEtBQUs0QixXQUFMLEdBQW1CLENBQXRCLEVBQXdCO0FBQUM7QUFDckIsYUFBS0EsV0FBTCxJQUFvQjVCLElBQUksR0FBRyxLQUFLSSxRQUFoQztBQUNILE9BRkQsTUFFTSxJQUFHLEtBQUtpQixLQUFSLEVBQWM7QUFBQztBQUNqQixhQUFLRSxTQUFMLElBQWtCdkIsSUFBSSxHQUFHLEtBQUtJLFFBQTlCOztBQUNBLFlBQUcsS0FBS21CLFNBQUwsR0FBaUIsQ0FBcEIsRUFBc0I7QUFDbEIsZUFBS0EsU0FBTCxHQUFpQixLQUFLRCxhQUF0QjtBQUNBLGVBQUtELEtBQUwsR0FBYSxLQUFiO0FBQ0g7QUFDSixPQU5LLE1BTUEsSUFBR0wsd0RBQVcsQ0FBQ2EsY0FBWixFQUFILEVBQWdDO0FBQUM7QUFDbkMsYUFBS0Msa0JBQUwsQ0FBd0I5QixJQUF4QjtBQUNBLGFBQUsrQixPQUFMO0FBQ0gsT0FISyxNQUdEO0FBQ0QsYUFBS0MsYUFBTCxDQUFtQmhDLElBQW5CO0FBQ0EsYUFBSytCLE9BQUw7QUFDSDs7QUFHRCxXQUFLM0IsUUFBTCxHQUFnQkosSUFBaEI7QUFDQSxXQUFLRCxJQUFMLENBQVVXLElBQVYsQ0FBZSxLQUFLUCxTQUFwQjs7QUFDQSwyRUFBYUgsSUFBYjtBQUNIO0FBN0RMO0FBQUE7QUFBQSxrQ0FrRWtCQSxJQWxFbEIsRUFrRXVCO0FBQ2YsVUFBSUEsSUFBSSxHQUFHLEtBQUtvQixZQUFiLEdBQTZCLEtBQUtsQixRQUFyQyxFQUErQztBQUMzQyxhQUFLTyxlQUFMO0FBQ0EsYUFBS1csWUFBTCxHQUFvQnBCLElBQXBCO0FBQ0g7QUFDSjtBQXZFTDtBQUFBO0FBQUEsdUNBMkV1QkEsSUEzRXZCLEVBMkU0QjtBQUNwQjtBQUNJLFVBQUlpQyxVQUFVLEdBQUcsRUFBakIsQ0FGZ0IsQ0FFSTs7QUFDcEIsVUFBRyxLQUFLbEMsSUFBTCxDQUFVbUMsQ0FBVixHQUFjLEtBQUtuQyxJQUFMLENBQVVvQyxjQUFWLENBQXlCRCxDQUF2QyxHQUEyQ0QsVUFBM0MsR0FBd0QsS0FBS2QsTUFBTCxDQUFZZSxDQUFaLEdBQWdCLEtBQUtmLE1BQUwsQ0FBWWdCLGNBQVosQ0FBMkJELENBQTNDLEdBQStDLEtBQUtmLE1BQUwsQ0FBWWdCLGNBQVosQ0FBMkJDLEtBQWxJLElBQ0MsS0FBS3JDLElBQUwsQ0FBVW1DLENBQVYsR0FBYyxLQUFLbkMsSUFBTCxDQUFVb0MsY0FBVixDQUF5QkQsQ0FBdkMsR0FBMkMsS0FBS25DLElBQUwsQ0FBVW9DLGNBQVYsQ0FBeUJDLEtBQXBFLEdBQTRFSCxVQUE1RSxHQUF5RixLQUFLZCxNQUFMLENBQVllLENBQVosR0FBZ0IsS0FBS2YsTUFBTCxDQUFZZ0IsY0FBWixDQUEyQkQsQ0FEckksSUFFQyxLQUFLbkMsSUFBTCxDQUFVc0MsQ0FBVixHQUFjLEtBQUt0QyxJQUFMLENBQVVvQyxjQUFWLENBQXlCRSxDQUF2QyxHQUEwQ0osVUFBMUMsR0FBdUQsS0FBS2QsTUFBTCxDQUFZa0IsQ0FBWixHQUFnQixLQUFLbEIsTUFBTCxDQUFZZ0IsY0FBWixDQUEyQkUsQ0FBM0MsR0FBK0MsS0FBS2xCLE1BQUwsQ0FBWWdCLGNBQVosQ0FBMkJHLE1BRmxJLElBR0MsS0FBS3ZDLElBQUwsQ0FBVXNDLENBQVYsR0FBYyxLQUFLdEMsSUFBTCxDQUFVb0MsY0FBVixDQUF5QkUsQ0FBdkMsR0FBMkMsS0FBS3RDLElBQUwsQ0FBVW9DLGNBQVYsQ0FBeUJHLE1BQXBFLEdBQTRFTCxVQUE1RSxHQUF3RixLQUFLZCxNQUFMLENBQVlrQixDQUFaLEdBQWdCLEtBQUtsQixNQUFMLENBQVlnQixjQUFaLENBQTJCRSxDQUh2SSxFQUlJLEtBQUtFLE1BQUwsR0FQWSxDQVFwQjs7QUFDQSxVQUFJdkMsSUFBSSxHQUFHLEtBQUswQixpQkFBYixHQUFrQyxLQUFLQyxpQkFBMUMsRUFBNkQ7QUFDekQsYUFBS2Esd0JBQUw7QUFDQSxhQUFLZCxpQkFBTCxHQUF5QjFCLElBQXpCO0FBQ0g7QUFHSjtBQTFGTDtBQUFBO0FBQUEsK0NBNkY4QjtBQUN0QixVQUFHLEtBQUtELElBQUwsQ0FBVW1DLENBQVYsSUFBZSxLQUFLZixNQUFMLENBQVllLENBQTNCLElBQWdDLEtBQUtuQyxJQUFMLENBQVVzQyxDQUFWLElBQWUsS0FBS2xCLE1BQUwsQ0FBWWtCLENBQTlELEVBQWdFO0FBQzVELFlBQUcvQixJQUFJLENBQUNFLE1BQUwsS0FBYyxHQUFqQixFQUFxQjtBQUNqQixlQUFLTCxTQUFMLEdBQWlCLE1BQWpCO0FBQ0gsU0FGRCxNQUVLO0FBQ0QsZUFBS0EsU0FBTCxHQUFpQixJQUFqQjtBQUNIO0FBQ0o7O0FBQ0QsVUFBRyxLQUFLSixJQUFMLENBQVVtQyxDQUFWLEdBQWMsS0FBS2YsTUFBTCxDQUFZZSxDQUExQixJQUErQixLQUFLbkMsSUFBTCxDQUFVc0MsQ0FBVixJQUFlLEtBQUtsQixNQUFMLENBQVlrQixDQUE3RCxFQUErRDtBQUMzRCxZQUFHL0IsSUFBSSxDQUFDRSxNQUFMLEtBQWMsR0FBakIsRUFBcUI7QUFDakIsZUFBS0wsU0FBTCxHQUFpQixPQUFqQjtBQUNILFNBRkQsTUFFSztBQUNELGVBQUtBLFNBQUwsR0FBaUIsSUFBakI7QUFDSDtBQUNKOztBQUNELFVBQUcsS0FBS0osSUFBTCxDQUFVbUMsQ0FBVixHQUFjLEtBQUtmLE1BQUwsQ0FBWWUsQ0FBMUIsSUFBK0IsS0FBS25DLElBQUwsQ0FBVXNDLENBQVYsR0FBYyxLQUFLbEIsTUFBTCxDQUFZa0IsQ0FBNUQsRUFBOEQ7QUFDMUQsWUFBRy9CLElBQUksQ0FBQ0UsTUFBTCxLQUFjLEdBQWpCLEVBQXFCO0FBQ2pCLGVBQUtMLFNBQUwsR0FBaUIsT0FBakI7QUFDSCxTQUZELE1BRUs7QUFDRCxlQUFLQSxTQUFMLEdBQWlCLE1BQWpCO0FBQ0g7QUFDSjs7QUFDRCxVQUFHLEtBQUtKLElBQUwsQ0FBVW1DLENBQVYsSUFBZSxLQUFLZixNQUFMLENBQVllLENBQTNCLElBQWdDLEtBQUtuQyxJQUFMLENBQVVzQyxDQUFWLEdBQWMsS0FBS2xCLE1BQUwsQ0FBWWtCLENBQTdELEVBQStEO0FBQzNELFlBQUcvQixJQUFJLENBQUNFLE1BQUwsS0FBYyxHQUFqQixFQUFxQjtBQUNqQixlQUFLTCxTQUFMLEdBQWlCLE1BQWpCO0FBQ0gsU0FGRCxNQUVLO0FBQ0QsZUFBS0EsU0FBTCxHQUFpQixNQUFqQjtBQUNIO0FBQ0o7QUFDSjtBQTFITDtBQUFBO0FBQUEsOEJBNkhhO0FBQUM7QUFDTixVQUFHLEtBQUtKLElBQUwsQ0FBVW1DLENBQVYsSUFBZSxLQUFLVixJQUFwQixJQUE0QixLQUFLekIsSUFBTCxDQUFVc0MsQ0FBVixJQUFlLEtBQUtaLElBQW5ELEVBQXlEO0FBQ3JELGFBQUtKLEtBQUwsR0FBYSxJQUFiOztBQUNBLFlBQUcsS0FBS2xCLFNBQUwsSUFBa0IsSUFBbEIsSUFBMEIsS0FBS0EsU0FBTCxJQUFrQixNQUEvQyxFQUFzRDtBQUNsRCxjQUFHRyxJQUFJLENBQUNFLE1BQUwsS0FBZSxHQUFsQixFQUFzQjtBQUNsQixpQkFBS0wsU0FBTCxHQUFpQixPQUFqQjtBQUNILFdBRkQsTUFFSztBQUNELGlCQUFLQSxTQUFMLEdBQWlCLE1BQWpCO0FBQ0g7O0FBQ0Q7QUFDSDs7QUFDRCxZQUFHLEtBQUtBLFNBQUwsSUFBa0IsT0FBbEIsSUFBNkIsS0FBS0EsU0FBTCxJQUFrQixNQUFsRCxFQUF5RDtBQUNyRCxjQUFHRyxJQUFJLENBQUNFLE1BQUwsS0FBZSxHQUFsQixFQUFzQjtBQUNsQixpQkFBS0wsU0FBTCxHQUFpQixJQUFqQjtBQUNILFdBRkQsTUFFSztBQUNELGlCQUFLQSxTQUFMLEdBQWlCLE1BQWpCO0FBQ0g7O0FBQ0Q7QUFDSDtBQUNKOztBQUNELFdBQUtxQixJQUFMLEdBQVksS0FBS3pCLElBQUwsQ0FBVW1DLENBQXRCO0FBQ0EsV0FBS1QsSUFBTCxHQUFZLEtBQUsxQixJQUFMLENBQVVzQyxDQUF0QjtBQUNIO0FBbkpMO0FBQUE7QUFBQSw2QkFxSlk7QUFDSixXQUFLdEMsSUFBTCxDQUFVZSxHQUFWLEdBREksQ0FFSjs7QUFDQSxXQUFLSyxNQUFMLENBQVlzQixNQUFaO0FBQ0g7QUF6Skw7O0FBQUE7QUFBQSxFQUE4QjNDLHNDQUE5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUVPLElBQU00QyxTQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLDJCQUFnRztBQUFBOztBQUFBLFFBQW5GQyxTQUFtRixRQUFuRkEsU0FBbUY7QUFBQSxRQUF4RUMsTUFBd0UsUUFBeEVBLE1BQXdFO0FBQUEsUUFBaEVDLEtBQWdFLFFBQWhFQSxLQUFnRTtBQUFBLDJCQUF6REMsTUFBeUQ7QUFBQSxRQUF6REEsTUFBeUQsNEJBQWhELElBQWdEO0FBQUEsNEJBQTFDQyxPQUEwQztBQUFBLFFBQTFDQSxPQUEwQyw2QkFBaEMsSUFBZ0M7QUFBQSwwQkFBMUJYLEtBQTBCO0FBQUEsUUFBMUJBLEtBQTBCLDJCQUFsQixFQUFrQjtBQUFBLDJCQUFkRSxNQUFjO0FBQUEsUUFBZEEsTUFBYyw0QkFBTCxFQUFLOztBQUFBOztBQUM1RixtRkFBTTtBQUNGSyxlQUFTLEVBQUVBLFNBRFQ7QUFFRkssYUFBTyxFQUFFSixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVLLEVBRmpCO0FBR0ZDLGFBQU8sRUFBRU4sTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVTyxFQUhqQjtBQUlGZixXQUFLLEVBQUVBLEtBSkw7QUFLRkUsWUFBTSxFQUFFQTtBQUxOLEtBQU47QUFRQSxVQUFLTSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLTSxPQUFMLEdBQWVMLE9BQWY7QUFDQSxVQUFLM0MsUUFBTCxHQUFnQixDQUFoQixDQWI0RixDQWExRTs7QUFDbEIsVUFBS2lELFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtWLE1BQUwsQ0FBWVcsTUFBL0I7QUFFQTs7O0FBRUEsVUFBS0MsS0FBTCxHQUFhLElBQWI7QUFuQjRGO0FBb0IvRjs7QUFyQkw7QUFBQTtBQUFBLDZCQXVCYUMsS0F2QmIsRUF1Qm9CO0FBQ1osV0FBS0osWUFBTCxHQUFvQkksS0FBcEI7QUFDQSxXQUFLVCxPQUFMLEdBQWUsS0FBS0osTUFBTCxDQUFZYSxLQUFaLEVBQW1CUixFQUFsQztBQUNBLFdBQUtDLE9BQUwsR0FBZSxLQUFLTixNQUFMLENBQVlhLEtBQVosRUFBbUJOLEVBQWxDO0FBQ0g7QUEzQkw7QUFBQTtBQUFBLDBCQTZCVTtBQUFDO0FBQ0gsVUFBRyxDQUFDLEtBQUtDLE9BQVQsRUFBaUI7QUFDYixhQUFLTSxRQUFMLENBQWMsQ0FBZDtBQUNBLGFBQUtOLE9BQUwsR0FBZSxJQUFmO0FBQ0g7QUFDSjtBQWxDTDtBQUFBO0FBQUEsMkJBb0NXO0FBQ0gsV0FBS0EsT0FBTCxHQUFlLEtBQWY7QUFDSDtBQXRDTDtBQUFBO0FBQUEsZ0NBeUNnQjtBQUNSLFVBQUksS0FBS0MsWUFBTCxHQUFvQixDQUFyQixJQUEyQixLQUFLQyxXQUFuQyxFQUFnRDtBQUFDO0FBQzdDLFlBQUcsS0FBS0UsS0FBUixFQUFlO0FBQUM7QUFDWixlQUFLQSxLQUFMO0FBQ0g7O0FBQ0QsWUFBRyxLQUFLVixNQUFSLEVBQWdCO0FBQUM7QUFDYixlQUFLWSxRQUFMLENBQWMsQ0FBZDtBQUNBO0FBQ0g7O0FBQ0QsYUFBS0MsSUFBTCxHQVI0QyxDQVFoQzs7QUFDWjtBQUNIOztBQUNELFdBQUtELFFBQUwsQ0FBYyxLQUFLTCxZQUFMLEdBQW9CLENBQWxDO0FBQ0g7QUF0REw7QUFBQTtBQUFBLDJCQXdEV3JELElBeERYLEVBd0RpQjtBQUNULFVBQUcsQ0FBQyxLQUFLb0QsT0FBVCxFQUFrQjtBQUNkO0FBQ0g7O0FBQ0QsVUFBRyxLQUFLaEQsUUFBTCxJQUFpQixDQUFwQixFQUF1QjtBQUFDO0FBQ3BCLGFBQUtBLFFBQUwsR0FBZ0JKLElBQWhCO0FBQ0E7QUFDSDs7QUFFRCxVQUFJQSxJQUFJLEdBQUcsS0FBS0ksUUFBYixHQUF5QixLQUFLeUMsS0FBakMsRUFBd0M7QUFBQztBQUNyQyxhQUFLZSxTQUFMO0FBQ0EsYUFBS3hELFFBQUwsR0FBZ0JKLElBQWhCO0FBQ0g7QUFDSjtBQXJFTDs7QUFBQTtBQUFBLEVBQStCNkQsOENBQS9CLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQyxJQUFiO0FBQUE7QUFBQTtBQUFtQjtBQUNmLHNCQUFnQztBQUFBOztBQUFBLFFBQW5CbkIsU0FBbUIsUUFBbkJBLFNBQW1CO0FBQUEsUUFBUkUsS0FBUSxRQUFSQSxLQUFROztBQUFBOztBQUM1QixTQUFLWCxDQUFMLEdBQVMsQ0FBQyxHQUFWLENBRDRCLENBQ2Q7O0FBQ2QsU0FBS0csQ0FBTCxHQUFTLENBQUMsR0FBVjtBQUNBLFNBQUtRLEtBQUwsR0FBYUEsS0FBYixDQUg0QixDQUdUOztBQUNuQixTQUFLa0IsUUFBTCxHQUFnQixJQUFJQyw4Q0FBSixDQUFXLE1BQVgsRUFBbUIsQ0FBbkIsQ0FBaEIsQ0FKNEIsQ0FJVTs7QUFDdEMsU0FBSzVELFFBQUwsR0FBZ0IsQ0FBaEIsQ0FMNEIsQ0FLVjs7QUFDbEIsU0FBSzZELFVBQUwsR0FBa0IsRUFBbEIsQ0FONEIsQ0FNUDtBQUVyQjs7QUFDQSxTQUFLOUIsY0FBTCxHQUFzQjtBQUFDRCxPQUFDLEVBQUUsRUFBSjtBQUFRRyxPQUFDLEVBQUUsRUFBWDtBQUFlRCxXQUFLLEVBQUUsRUFBdEI7QUFBMEJFLFlBQU0sRUFBRTtBQUFsQyxLQUF0QjtBQUVBLFNBQUs0QixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFqQixDQVo0QixDQWM1Qjs7QUFDQSxRQUFNQyxjQUFjLEdBQUcsSUFBSUMsK0RBQUosQ0FBbUI7QUFBQzFCLGVBQVMsRUFBRUE7QUFBWixLQUFuQixDQUF2QjtBQUNBLDZDQUF5Q3RDLEtBQXpDLENBQStDLEdBQS9DLEVBQW9EaUUsT0FBcEQsQ0FBNEQsVUFBQUMsSUFBSSxFQUFJO0FBQ2hFLFdBQUksQ0FBQ04sVUFBTCxDQUFnQk0sSUFBaEIsSUFBd0JILGNBQWMsQ0FBQ0ksWUFBZixDQUE0QkQsSUFBNUIsQ0FBeEIsQ0FEZ0UsQ0FDTjtBQUM3RCxLQUZEO0FBR0EsaURBQTZDbEUsS0FBN0MsQ0FBbUQsR0FBbkQsRUFBd0RpRSxPQUF4RCxDQUFnRSxVQUFBQyxJQUFJLEVBQUk7QUFDcEUsV0FBSSxDQUFDTixVQUFMLENBQWdCTSxJQUFoQixJQUF3QkgsY0FBYyxDQUFDSSxZQUFmLENBQTRCRCxJQUE1QixFQUFrQyxFQUFsQyxFQUFzQyxLQUF0QyxDQUF4QixDQURvRSxDQUNDO0FBQ3hFLEtBRkQ7QUFHQSx5Q0FBcUNsRSxLQUFyQyxDQUEyQyxHQUEzQyxFQUFnRGlFLE9BQWhELENBQXdELFVBQUFDLElBQUksRUFBSTtBQUM1RCxXQUFJLENBQUNOLFVBQUwsQ0FBZ0JNLElBQWhCLElBQXdCSCxjQUFjLENBQUNJLFlBQWYsQ0FBNEJELElBQTVCLEVBQWtDLEVBQWxDLEVBQXNDLEtBQXRDLENBQXhCLENBRDRELENBQ1M7QUFDeEUsS0FGRDtBQUdBLEtBQUMsT0FBRCxFQUFVRCxPQUFWLENBQWtCLFVBQUFDLElBQUksRUFBSTtBQUN0QixXQUFJLENBQUNOLFVBQUwsQ0FBZ0JNLElBQWhCLElBQXdCSCxjQUFjLENBQUNJLFlBQWYsQ0FBNEJELElBQTVCLEVBQWtDLEVBQWxDLEVBQXNDLEtBQXRDLENBQXhCLENBRHNCLENBQytDO0FBQ3hFLEtBRkQ7QUFHQSxTQUFLeEQsS0FBTCxDQUFXLE1BQVg7QUFDSDs7QUE5Qkw7QUFBQTtBQUFBLDBCQWdDVTBELEtBaENWLEVBZ0NnQjtBQUFBOztBQUNSLFVBQUcsQ0FBQyxLQUFLUCxVQUFULEVBQW9CO0FBQ2hCLGFBQUtBLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxhQUFLUSxJQUFMLEdBQVksS0FBS1QsVUFBTCxDQUFpQixXQUFTLEtBQUtGLFFBQUwsQ0FBYzVELFNBQXhDLENBQVo7O0FBQ0EsYUFBS3VFLElBQUwsQ0FBVWxCLEtBQVYsR0FBa0IsWUFBSTtBQUNsQixnQkFBSSxDQUFDVSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0FPLGVBQUssQ0FBQ0UsR0FBTixDQUFVLE1BQUksQ0FBQ3pDLENBQWYsRUFBa0IsTUFBSSxDQUFDRyxDQUF2QixFQUEwQixNQUFJLENBQUMwQixRQUFMLENBQWM1RCxTQUF4QztBQUNILFNBSEQ7O0FBSUEsYUFBS3VFLElBQUwsQ0FBVUUsR0FBVixHQVBnQixDQU9BO0FBQ25CO0FBQ0o7QUExQ0w7QUFBQTtBQUFBLDBCQTRDUztBQUFBOztBQUNELFVBQUcsQ0FBQyxLQUFLVCxTQUFULEVBQW1CO0FBQ2YsYUFBS0EsU0FBTCxHQUFpQixJQUFqQjtBQUNBLGFBQUtPLElBQUwsR0FBWSxLQUFLVCxVQUFMLENBQWlCLFNBQU8sS0FBS0YsUUFBTCxDQUFjNUQsU0FBdEMsQ0FBWjs7QUFDQSxhQUFLdUUsSUFBTCxDQUFVbEIsS0FBVixHQUFrQixZQUFJO0FBQ2xCLGdCQUFJLENBQUNXLFNBQUwsR0FBaUIsS0FBakI7QUFDSCxTQUZEOztBQUdBLGFBQUtPLElBQUwsQ0FBVUUsR0FBVixHQU5lLENBTUM7QUFDbkI7QUFDSjtBQXJETDtBQUFBO0FBQUEseUJBdURTekUsU0F2RFQsRUF1RG1CO0FBQ1gsVUFBRyxLQUFLK0QsVUFBTCxJQUFtQixLQUFLQyxTQUEzQixFQUFxQyxPQUQxQixDQUNrQzs7QUFDN0MsV0FBS0osUUFBTCxDQUFjYyxZQUFkLENBQTJCMUUsU0FBM0IsRUFBc0MsS0FBSzBDLEtBQTNDO0FBQ0EsV0FBSzZCLElBQUwsR0FBWSxLQUFLVCxVQUFMLENBQWlCLFVBQVE5RCxTQUF6QixDQUFaLENBSFcsQ0FHcUM7O0FBQ2hELFdBQUt1RSxJQUFMLENBQVVFLEdBQVYsR0FKVyxDQUlLO0FBQ25CO0FBNURMO0FBQUE7QUFBQSwwQkE4RFV6RSxTQTlEVixFQThEb0I7QUFBQztBQUNiLFVBQUcsS0FBSytELFVBQUwsSUFBbUIsS0FBS0MsU0FBM0IsRUFBcUMsT0FEekIsQ0FDZ0M7O0FBQzVDLFdBQUtKLFFBQUwsQ0FBY2MsWUFBZCxDQUEyQjFFLFNBQTNCLEVBQXNDLENBQXRDO0FBQ0EsV0FBS3VFLElBQUwsR0FBWSxLQUFLVCxVQUFMLENBQWlCLFVBQVE5RCxTQUF6QixDQUFaO0FBQ0EsV0FBS3VFLElBQUwsQ0FBVWYsSUFBVjtBQUNIO0FBbkVMO0FBQUE7QUFBQSw0QkFxRVc7QUFDSCxXQUFLSSxRQUFMLEdBQWdCLElBQUlDLDhDQUFKLENBQVcsTUFBWCxFQUFtQixDQUFuQixDQUFoQixDQURHLENBQ21DOztBQUN0QyxXQUFLVSxJQUFMLEdBQVksS0FBS1QsVUFBTCxDQUFpQixPQUFqQixDQUFaLENBRkcsQ0FHSDtBQUNIO0FBekVMO0FBQUE7QUFBQSwyQkEyRVdqRSxJQTNFWCxFQTJFZ0I7QUFDUixVQUFHLEtBQUtJLFFBQUwsSUFBZ0IsQ0FBbkIsRUFBcUI7QUFDakIsYUFBS0EsUUFBTCxHQUFnQkosSUFBaEI7QUFDQTtBQUNILE9BSk8sQ0FNUjtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsVUFBRyxLQUFLa0UsVUFBTCxJQUFtQixLQUFLQyxTQUEzQixFQUFxQztBQUFDO0FBQ2xDLGFBQUtKLFFBQUwsQ0FBY2UsSUFBZCxDQUFtQixJQUFuQixFQUF3QixDQUF4QjtBQUNILE9BRkQsTUFFSztBQUNELGFBQUtmLFFBQUwsQ0FBY2UsSUFBZCxDQUFtQixJQUFuQixFQUF5QjlFLElBQUksR0FBQyxLQUFLSSxRQUFuQztBQUNIOztBQUVELFdBQUtBLFFBQUwsR0FBZ0JKLElBQWhCLENBakJRLENBbUJSOztBQUNBLFdBQUswRSxJQUFMLENBQVVLLEtBQVYsQ0FBZ0J6RSxJQUFJLENBQUMwRSxLQUFMLENBQVcsS0FBSzlDLENBQWhCLENBQWhCLEVBQW9DNUIsSUFBSSxDQUFDMEUsS0FBTCxDQUFXLEtBQUszQyxDQUFoQixDQUFwQyxFQXBCUSxDQW9CZ0Q7O0FBQ3hELFdBQUtxQyxJQUFMLENBQVVPLE1BQVYsQ0FBaUJqRixJQUFqQjtBQUNIO0FBakdMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKTyxJQUFNa0YsTUFBYjtBQUFBO0FBQUE7QUFDSSxvQkFBZ0c7QUFBQSxtRkFBSixFQUFJO0FBQUEsMEJBQW5GOUMsS0FBbUY7QUFBQSxRQUFuRkEsS0FBbUYsMkJBQTNFLEdBQTJFO0FBQUEsMkJBQXRFRSxNQUFzRTtBQUFBLFFBQXRFQSxNQUFzRSw0QkFBN0QsR0FBNkQ7QUFBQSwyQkFBeEQ2QyxNQUF3RDtBQUFBLFFBQXhEQSxNQUF3RCw0QkFBL0MsS0FBK0M7QUFBQSwyQkFBeENDLE1BQXdDO0FBQUEsUUFBeENBLE1BQXdDLDRCQUEvQixLQUErQjtBQUFBLCtCQUF4QkMsVUFBd0I7QUFBQSxRQUF4QkEsVUFBd0IsZ0NBQVgsR0FBVzs7QUFBQTs7QUFDNUYsU0FBS25ELENBQUwsR0FBUyxDQUFULENBRDRGLENBQ2pGOztBQUNYLFNBQUtHLENBQUwsR0FBUyxDQUFUO0FBQ0EsU0FBS0QsS0FBTCxHQUFhQSxLQUFiLENBSDRGLENBR3pFOztBQUNuQixTQUFLRSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLNkMsTUFBTCxHQUFjQSxNQUFkLENBTDRGLENBS3ZFOztBQUNyQixTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLRSxXQUFMLEdBQW1CLEtBQW5CLENBUDRGLENBT25FOztBQUN6QixTQUFLQyxHQUFMLEdBQVcsSUFBWCxDQVI0RixDQVE1RTs7QUFDaEIsU0FBS0YsVUFBTCxHQUFrQkEsVUFBbEIsQ0FUNEYsQ0FTL0Q7QUFDaEM7O0FBWEw7QUFBQTtBQUFBLDBCQWFVRSxHQWJWLEVBYWU7QUFDUCxXQUFLRCxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsV0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLDJCQWtCV3ZGLElBbEJYLEVBa0JnQjtBQUNSLFVBQUcsS0FBS3NGLFdBQVIsRUFBb0I7QUFDaEIsWUFBRyxLQUFLQyxHQUFMLENBQVNyRCxDQUFULEdBQWMsS0FBS0EsQ0FBTCxHQUFPLEtBQUtFLEtBQVosR0FBb0IsS0FBS2lELFVBQTFDLEVBQXNEO0FBQ2xELGVBQUtuRCxDQUFMLEdBQVM1QixJQUFJLENBQUNrRixHQUFMLENBQVMsS0FBS0wsTUFBZCxFQUFzQixLQUFLSSxHQUFMLENBQVNyRCxDQUFULEdBQVcsS0FBS0UsS0FBaEIsR0FBc0IsS0FBS2lELFVBQWpELENBQVQsQ0FGWSxDQUV5RDs7QUFDekUsWUFBRyxLQUFLRSxHQUFMLENBQVNyRCxDQUFULEdBQWMsS0FBS0EsQ0FBTCxHQUFTLEtBQUttRCxVQUEvQixFQUNJLEtBQUtuRCxDQUFMLEdBQVM1QixJQUFJLENBQUNtRixHQUFMLENBQVMsQ0FBVCxFQUFZLEtBQUtGLEdBQUwsQ0FBU3JELENBQVQsR0FBVyxLQUFLbUQsVUFBNUIsQ0FBVDtBQUVKLFlBQUcsS0FBS0UsR0FBTCxDQUFTbEQsQ0FBVCxHQUFjLEtBQUtBLENBQUwsR0FBTyxLQUFLQyxNQUFaLEdBQXFCLEtBQUsrQyxVQUEzQyxFQUF1RDtBQUNuRCxlQUFLaEQsQ0FBTCxHQUFTL0IsSUFBSSxDQUFDa0YsR0FBTCxDQUFTLEtBQUtKLE1BQWQsRUFBc0IsS0FBS0csR0FBTCxDQUFTbEQsQ0FBVCxHQUFXLEtBQUtDLE1BQWhCLEdBQXVCLEtBQUsrQyxVQUFsRCxDQUFUO0FBQ0osWUFBRyxLQUFLRSxHQUFMLENBQVNsRCxDQUFULEdBQWMsS0FBS0EsQ0FBTCxHQUFTLEtBQUtnRCxVQUEvQixFQUEyQztBQUN2QyxlQUFLaEQsQ0FBTCxHQUFTL0IsSUFBSSxDQUFDbUYsR0FBTCxDQUFTLENBQVQsRUFBWSxLQUFLRixHQUFMLENBQVNsRCxDQUFULEdBQVcsS0FBS2dELFVBQTVCLENBQVQ7QUFDUDtBQUNKO0FBOUJMO0FBQUE7QUFBQSxzQ0FnQ3FCO0FBQ2IsV0FBS25ELENBQUwsR0FBUyxLQUFLRSxLQUFkO0FBQ0EsV0FBS0MsQ0FBTCxHQUFTLEtBQUtDLE1BQWQ7QUFDSDtBQW5DTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVPLElBQU0rQixjQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLGdDQUF3QjtBQUFBOztBQUFBLFFBQVgxQixTQUFXLFFBQVhBLFNBQVc7O0FBQUE7O0FBQ3BCLHdGQUFNO0FBQ0ZBLGVBQVMsRUFBRUEsU0FEVDtBQUVGK0MsZ0JBQVUsRUFBRSxHQUZWO0FBR0ZDLGlCQUFXLEVBQUU7QUFIWCxLQUFOO0FBS0EsVUFBS0MsU0FBTCxHQUFpQixNQUFLQyxZQUFMLEVBQWpCO0FBTm9CO0FBT3ZCOztBQVJMO0FBQUE7QUFBQSxtQ0FVa0I7QUFDVixVQUFNQyxJQUFJLEdBQUdDLG1CQUFPLENBQUUsMERBQUYsQ0FBcEI7O0FBQ0EsVUFBTUgsU0FBUyxHQUFHLEVBQWxCO0FBQ0FFLFVBQUksQ0FBQ0UsTUFBTCxDQUFZMUIsT0FBWixDQUFvQixVQUFBMkIsS0FBSyxFQUFHO0FBRXhCO0FBQ0FMLGlCQUFTLENBQUNLLEtBQUssQ0FBQzFCLElBQVAsQ0FBVCxHQUF3QjBCLEtBQUssQ0FBQ0gsSUFBTixDQUFXSSxNQUFYLENBQWtCLFVBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxHQUFDLENBQU47QUFBQSxTQUFuQixDQUF4QjtBQUNILE9BSkQ7QUFLQSxhQUFPUCxTQUFQO0FBQ0g7QUFuQkw7QUFBQTtBQUFBLGlDQXFCaUJyQixJQXJCakIsRUFxQmlFO0FBQUEsVUFBMUMxQixLQUEwQyx1RUFBbEMsRUFBa0M7QUFBQSxVQUE5QkMsTUFBOEIsdUVBQXJCLElBQXFCO0FBQUEsVUFBZkMsT0FBZSx1RUFBTCxJQUFLO0FBQ3pELDhGQUEwQixLQUFLNkMsU0FBTCxDQUFlckIsSUFBZixDQUExQixFQUFnRDFCLEtBQWhELEVBQXVEQyxNQUF2RCxFQUErREMsT0FBL0Q7QUFDSDtBQXZCTDs7QUFBQTtBQUFBLEVBQW9DcUQseURBQXBDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFFTyxJQUFNQyxRQUFiO0FBQUE7QUFBQTtBQUNJLHNCQUFjO0FBQUE7O0FBQ1YsU0FBS0MsWUFBTCxHQUFvQixFQUFwQixDQURVLENBQ2E7O0FBQ3ZCLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0g7O0FBSkw7QUFBQTtBQUFBLG9DQU1vQlQsSUFOcEIsRUFNeUI7QUFBQTs7QUFDakJBLFVBQUksQ0FBQ0UsTUFBTCxDQUFZMUIsT0FBWixDQUFvQixVQUFBMkIsS0FBSyxFQUFJO0FBQUE7O0FBQ3pCLFlBQUdBLEtBQUssQ0FBQ08sSUFBTixJQUFhLGFBQWhCO0FBQ0k7O0FBRUEscUNBQUksQ0FBQ0YsWUFBTCxFQUFrQkcsSUFBbEIsOENBQTBCUixLQUFLLENBQUNTLE9BQWhDO0FBQ1AsT0FMRCxFQURpQixDQU9qQjs7QUFDQSxXQUFLSixZQUFMLENBQWtCRyxJQUFsQixDQUF1QjtBQUFDdkUsU0FBQyxFQUFDLENBQUg7QUFBS0csU0FBQyxFQUFDLENBQVA7QUFBU0QsYUFBSyxFQUFDLElBQWY7QUFBb0JFLGNBQU0sRUFBQztBQUEzQixPQUF2QjtBQUNBLFdBQUtnRSxZQUFMLENBQWtCRyxJQUFsQixDQUF1QjtBQUFDdkUsU0FBQyxFQUFDLENBQUg7QUFBS0csU0FBQyxFQUFDLENBQVA7QUFBU0QsYUFBSyxFQUFDLENBQWY7QUFBaUJFLGNBQU0sRUFBQztBQUF4QixPQUF2QixFQVRpQixDQVVqQjs7QUFDQSxXQUFLZ0UsWUFBTCxDQUFrQkcsSUFBbEIsQ0FBdUI7QUFBQ3ZFLFNBQUMsRUFBQyxJQUFIO0FBQVFHLFNBQUMsRUFBQyxDQUFWO0FBQVlELGFBQUssRUFBQyxJQUFsQjtBQUF1QkUsY0FBTSxFQUFDO0FBQTlCLE9BQXZCO0FBQ0g7QUFsQkw7QUFBQTtBQUFBLHFDQW9CcUJ2QyxJQXBCckIsRUFvQjBCO0FBQ2xCLFdBQUt3RyxNQUFMLENBQVlFLElBQVosQ0FBaUI7QUFDYnZFLFNBQUMsRUFBRW5DLElBQUksQ0FBQ21DLENBREs7QUFDSDtBQUNWRyxTQUFDLEVBQUV0QyxJQUFJLENBQUNzQyxDQUZLO0FBR2JrRCxXQUFHLEVBQUV4RixJQUhRLENBR0g7O0FBSEcsT0FBakI7QUFLSDtBQTFCTDtBQUFBO0FBQUEsMkJBNEJXQyxJQTVCWCxFQTRCZ0I7QUFDUixXQUFLMkcsY0FBTCxDQUFvQjNHLElBQXBCLEVBRFEsQ0FDa0I7QUFDN0I7QUE5Qkw7QUFBQTtBQUFBLG1DQWdDbUJBLElBaENuQixFQWdDd0I7QUFBQTs7QUFBQSxpQ0FDUm1HLENBRFE7QUFFWixZQUFJcEcsSUFBSSxHQUFHLE1BQUksQ0FBQ3dHLE1BQUwsQ0FBWUosQ0FBWixDQUFYO0FBQ0EsWUFBSTNFLElBQUksR0FBR3pCLElBQUksQ0FBQ21DLENBQWhCO0FBQ0EsWUFBSVQsSUFBSSxHQUFHMUIsSUFBSSxDQUFDc0MsQ0FBaEI7QUFDQSxZQUFJSCxDQUFDLEdBQUduQyxJQUFJLENBQUN3RixHQUFMLENBQVNyRCxDQUFqQjtBQUNBLFlBQUlHLENBQUMsR0FBR3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU2xELENBQWpCOztBQUNBLFlBQUdILENBQUMsR0FBQ1YsSUFBTCxFQUFVO0FBQUM7QUFDUCxnQkFBSSxDQUFDOEUsWUFBTCxDQUFrQmhDLE9BQWxCLENBQTBCLFVBQUFzQyxLQUFLLEVBQUU7QUFDN0IsaUJBQUs7QUFDQ3BGLGdCQUFJLEdBQUc7QUFDUCxhQURBLEdBQ0c7QUFDSHpCLGdCQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRCxDQUZ4QixHQUU0QjtBQUM1Qm5DLGdCQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCQyxLQUh6QixHQUdrQ3dFLEtBQUssQ0FBQzFFLENBSHpDLElBSUE7QUFDRUEsYUFBQyxHQUNEbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkQsQ0FEeEIsR0FFQW5DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JDLEtBRnpCLEdBRWtDd0UsS0FBSyxDQUFDMUUsQ0FQekMsSUFTQTtBQUNFRyxhQUFDLEdBQ0R0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUR6QixHQUMrQnVFLEtBQUssQ0FBQ3ZFLENBQU4sR0FBVXVFLEtBQUssQ0FBQ3RFLE1BWGhELElBYUVELENBQUMsR0FDRHRDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JFLENBRHhCLEdBRUF0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRyxNQUZ6QixHQUVtQ3NFLEtBQUssQ0FBQ3ZFLENBaEI5QyxFQWlCQztBQUFHO0FBQ0FILGVBQUMsR0FBRzVCLElBQUksQ0FBQ2tGLEdBQUwsQ0FBU3RELENBQUMsR0FBR25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQTVCLEdBQWdDbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkMsS0FBakUsRUFBd0V3RSxLQUFLLENBQUMxRSxDQUE5RSxFQUFnRjtBQUFoRixnQkFDRW5DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBRDFCLEdBQzhCbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkMsS0FEMUQ7O0FBRUEsb0JBQUksQ0FBQ3lFLDBCQUFMLENBQWdDOUcsSUFBaEMsRUFBcUNvRyxDQUFyQyxFQUhILENBRzJDOztBQUMzQztBQUNKLFdBdkJELEVBRE0sQ0EwQk47OztBQUNBLGVBQUksSUFBSVcsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDLE1BQUksQ0FBQ1AsTUFBTCxDQUFZaEQsTUFBM0IsRUFBa0N1RCxDQUFDLEVBQW5DLEVBQXNDO0FBQ2xDLGdCQUFJRixLQUFLLEdBQUcsTUFBSSxDQUFDTCxNQUFMLENBQVlPLENBQVosQ0FBWjs7QUFDQSxnQkFBRy9HLElBQUksSUFBSTZHLEtBQVgsRUFBaUI7QUFBQztBQUNkLGtCQUFLcEYsSUFBSSxHQUFHLENBQVAsR0FBV3pCLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQW5DLEdBQXVDbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkMsS0FBaEUsR0FBeUV3RSxLQUFLLENBQUNyQixHQUFOLENBQVVyRCxDQUFWLEdBQWMwRSxLQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCRCxDQUFqSCxJQUNHQSxDQUFDLEdBQUduQyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRCxDQUE1QixHQUFnQ25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JDLEtBQXpELEdBQWtFd0UsS0FBSyxDQUFDckIsR0FBTixDQUFVckQsQ0FBVixHQUFjMEUsS0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkQsQ0FEM0csSUFFR0csQ0FBQyxHQUFHdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkUsQ0FBN0IsR0FBbUN1RSxLQUFLLENBQUNyQixHQUFOLENBQVVsRCxDQUFWLEdBQWN1RSxLQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCRSxDQUF2QyxHQUEyQ3VFLEtBQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJHLE1BRnpHLElBR0dELENBQUMsR0FBR3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JFLENBQTVCLEdBQWdDdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkcsTUFBekQsR0FBbUVzRSxLQUFLLENBQUNyQixHQUFOLENBQVVsRCxDQUFWLEdBQWN1RSxLQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCRSxDQUgvRyxFQUlDO0FBQ0dILGlCQUFDLEdBQUc1QixJQUFJLENBQUNrRixHQUFMLENBQVN0RCxDQUFDLEdBQUduQyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRCxDQUE1QixHQUFnQ25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JDLEtBQWpFLEVBQXdFd0UsS0FBSyxDQUFDckIsR0FBTixDQUFVckQsQ0FBVixHQUFjMEUsS0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkQsQ0FBL0csSUFDVW5DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBRGxDLEdBQ3NDbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkMsS0FEbEU7O0FBRUEsc0JBQUksQ0FBQzJFLGdCQUFMLENBQXNCaEgsSUFBdEIsRUFBMkI2RyxLQUEzQixFQUFpQ1QsQ0FBakMsRUFBbUNXLENBQW5DLEVBSEgsQ0FHeUM7O0FBQ3pDO0FBQ0o7QUFDSjtBQUNKOztBQVNELFlBQUc1RSxDQUFDLEdBQUNWLElBQUwsRUFBVTtBQUFDO0FBQ1AsZ0JBQUksQ0FBQzhFLFlBQUwsQ0FBa0JoQyxPQUFsQixDQUEwQixVQUFBc0MsS0FBSyxFQUFFO0FBQzdCLGdCQUFLcEYsSUFBSSxHQUFHLENBQVAsR0FBV3pCLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQXBDLEdBQTBDMEUsS0FBSyxDQUFDMUUsQ0FBTixHQUFRMEUsS0FBSyxDQUFDeEUsS0FBekQsSUFDQ0YsQ0FBQyxHQUFHbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkQsQ0FBN0IsR0FBbUMwRSxLQUFLLENBQUMxRSxDQUFOLEdBQVEwRSxLQUFLLENBQUN4RSxLQURqRCxJQUVDQyxDQUFDLEdBQUd0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUE3QixHQUFtQ3VFLEtBQUssQ0FBQ3ZFLENBQU4sR0FBVXVFLEtBQUssQ0FBQ3RFLE1BRm5ELElBR0NELENBQUMsR0FBR3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JFLENBQTVCLEdBQThCdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkcsTUFBdkQsR0FBaUVzRSxLQUFLLENBQUN2RSxDQUgxRSxFQUlDO0FBQ0dILGVBQUMsR0FBRzVCLElBQUksQ0FBQ21GLEdBQUwsQ0FBU3ZELENBQUMsR0FBR25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQXJDLEVBQXdDMEUsS0FBSyxDQUFDMUUsQ0FBTixHQUFRMEUsS0FBSyxDQUFDeEUsS0FBdEQsSUFBOERyQyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRCxDQUExRjs7QUFDQSxvQkFBSSxDQUFDMkUsMEJBQUwsQ0FBZ0M5RyxJQUFoQyxFQUFxQ29HLENBQXJDO0FBQ0g7QUFDSixXQVRELEVBRE0sQ0FZTjs7O0FBQ0EsZUFBSSxJQUFJVyxFQUFDLEdBQUMsQ0FBVixFQUFhQSxFQUFDLEdBQUMsTUFBSSxDQUFDUCxNQUFMLENBQVloRCxNQUEzQixFQUFrQ3VELEVBQUMsRUFBbkMsRUFBc0M7QUFDbEMsZ0JBQUlGLE1BQUssR0FBRyxNQUFJLENBQUNMLE1BQUwsQ0FBWU8sRUFBWixDQUFaOztBQUNBLGdCQUFHL0csSUFBSSxJQUFJNkcsTUFBWCxFQUFpQjtBQUFDO0FBQ2Qsa0JBQUtwRixJQUFJLEdBQUcsQ0FBUCxHQUFXekIsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkQsQ0FBcEMsR0FBeUMwRSxNQUFLLENBQUNyQixHQUFOLENBQVVyRCxDQUFWLEdBQWMwRSxNQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCRCxDQUF2QyxHQUEyQzBFLE1BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJDLEtBQTlHLElBQ0dGLENBQUMsR0FBR25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQTdCLEdBQWtDMEUsTUFBSyxDQUFDckIsR0FBTixDQUFVckQsQ0FBVixHQUFjMEUsTUFBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkQsQ0FBdkMsR0FBMkMwRSxNQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCQyxLQUR4RyxJQUVHQyxDQUFDLEdBQUd0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUE3QixHQUFtQ3VFLE1BQUssQ0FBQ3JCLEdBQU4sQ0FBVWxELENBQVYsR0FBY3VFLE1BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJFLENBQXZDLEdBQTJDdUUsTUFBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkcsTUFGekcsSUFHR0QsQ0FBQyxHQUFHdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkUsQ0FBNUIsR0FBZ0N0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRyxNQUF6RCxHQUFtRXNFLE1BQUssQ0FBQ3JCLEdBQU4sQ0FBVWxELENBQVYsR0FBY3VFLE1BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJFLENBSC9HLEVBSUM7QUFDR0gsaUJBQUMsR0FBRzVCLElBQUksQ0FBQ21GLEdBQUwsQ0FBU3ZELENBQUMsR0FBR25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQXJDLEVBQXdDMEUsTUFBSyxDQUFDckIsR0FBTixDQUFVckQsQ0FBVixHQUFjMEUsTUFBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkQsQ0FBdkMsR0FBMkMwRSxNQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCQyxLQUE1RyxJQUFvSHJDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQWhKOztBQUNBLHNCQUFJLENBQUM2RSxnQkFBTCxDQUFzQmhILElBQXRCLEVBQTJCNkcsTUFBM0IsRUFBaUNULENBQWpDLEVBQW1DVyxFQUFuQztBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQU1ELFlBQUd6RSxDQUFDLEdBQUNaLElBQUwsRUFBVTtBQUFDO0FBQ1AsZ0JBQUksQ0FBQzZFLFlBQUwsQ0FBa0JoQyxPQUFsQixDQUEwQixVQUFBc0MsS0FBSyxFQUFFO0FBQzdCLGdCQUFLbkYsSUFBSSxHQUFHLENBQVAsR0FBVzFCLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JFLENBQW5DLEdBQXVDdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkcsTUFBaEUsR0FBMEVzRSxLQUFLLENBQUN2RSxDQUFqRixJQUNHQSxDQUFDLEdBQUd0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUE1QixHQUFnQ3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JHLE1BQXpELEdBQW1Fc0UsS0FBSyxDQUFDdkUsQ0FEM0UsSUFFR0gsQ0FBQyxHQUFHbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkQsQ0FBN0IsR0FBbUMwRSxLQUFLLENBQUMxRSxDQUFOLEdBQVUwRSxLQUFLLENBQUN4RSxLQUZyRCxJQUdHRixDQUFDLEdBQUduQyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRCxDQUE1QixHQUE4Qm5DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JDLEtBQXZELEdBQWdFd0UsS0FBSyxDQUFDMUUsQ0FIM0UsRUFJQztBQUNHRyxlQUFDLEdBQUcvQixJQUFJLENBQUNrRixHQUFMLENBQVNuRCxDQUFDLEdBQUd0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUE1QixHQUFnQ3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JHLE1BQWpFLEVBQXlFc0UsS0FBSyxDQUFDdkUsQ0FBL0UsSUFBbUZ0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUEzRyxHQUErR3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JHLE1BQTNJOztBQUNBLG9CQUFJLENBQUN1RSwwQkFBTCxDQUFnQzlHLElBQWhDLEVBQXFDb0csQ0FBckM7QUFDSDtBQUNKLFdBVEQsRUFETSxDQVlOOzs7QUFDQSxlQUFJLElBQUlXLEdBQUMsR0FBQyxDQUFWLEVBQWFBLEdBQUMsR0FBQyxNQUFJLENBQUNQLE1BQUwsQ0FBWWhELE1BQTNCLEVBQWtDdUQsR0FBQyxFQUFuQyxFQUFzQztBQUNsQyxnQkFBSUYsT0FBSyxHQUFHLE1BQUksQ0FBQ0wsTUFBTCxDQUFZTyxHQUFaLENBQVo7O0FBQ0EsZ0JBQUcvRyxJQUFJLElBQUk2RyxPQUFYLEVBQWlCO0FBQUM7QUFDZCxrQkFBS25GLElBQUksR0FBRyxDQUFQLEdBQVcxQixJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUFuQyxHQUF1Q3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JHLE1BQWhFLEdBQTBFc0UsT0FBSyxDQUFDckIsR0FBTixDQUFVbEQsQ0FBVixHQUFjdUUsT0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkUsQ0FBbEgsSUFDR0EsQ0FBQyxHQUFHdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkUsQ0FBNUIsR0FBZ0N0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRyxNQUF6RCxHQUFtRXNFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVWxELENBQVYsR0FBY3VFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJFLENBRDVHLElBRUdILENBQUMsR0FBR25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQTdCLEdBQW1DMEUsT0FBSyxDQUFDckIsR0FBTixDQUFVckQsQ0FBVixHQUFjMEUsT0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkQsQ0FBdkMsR0FBMkMwRSxPQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCQyxLQUZ6RyxJQUdHRixDQUFDLEdBQUduQyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRCxDQUE1QixHQUFnQ25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JHLE1BQXpELEdBQW1Fc0UsT0FBSyxDQUFDckIsR0FBTixDQUFVckQsQ0FBVixHQUFjMEUsT0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkQsQ0FIL0csRUFJQztBQUNHRyxpQkFBQyxHQUFHL0IsSUFBSSxDQUFDa0YsR0FBTCxDQUFTbkQsQ0FBQyxHQUFHdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkUsQ0FBNUIsR0FBZ0N0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRyxNQUFqRSxFQUF5RXNFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVWxELENBQVYsR0FBY3VFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJFLENBQWhILElBQ1V0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQURsQyxHQUNzQ3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JHLE1BRGxFOztBQUVBLHNCQUFJLENBQUN5RSxnQkFBTCxDQUFzQmhILElBQXRCLEVBQTJCNkcsT0FBM0IsRUFBaUNULENBQWpDLEVBQW1DVyxHQUFuQztBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQU9ELFlBQUd6RSxDQUFDLEdBQUNaLElBQUwsRUFBVTtBQUFDO0FBQ1AsZ0JBQUksQ0FBQzZFLFlBQUwsQ0FBa0JoQyxPQUFsQixDQUEwQixVQUFBc0MsS0FBSyxFQUFFO0FBQzdCLGdCQUFLbkYsSUFBSSxHQUFHLENBQVAsR0FBVzFCLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JFLENBQXBDLEdBQTBDdUUsS0FBSyxDQUFDdkUsQ0FBTixHQUFRdUUsS0FBSyxDQUFDdEUsTUFBekQsSUFDQ0QsQ0FBQyxHQUFHdEMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkUsQ0FBN0IsR0FBbUN1RSxLQUFLLENBQUN2RSxDQUFOLEdBQVF1RSxLQUFLLENBQUN0RSxNQURqRCxJQUVDSixDQUFDLEdBQUduQyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRCxDQUE3QixHQUFtQzBFLEtBQUssQ0FBQzFFLENBQU4sR0FBVTBFLEtBQUssQ0FBQ3hFLEtBRm5ELElBR0NGLENBQUMsR0FBR25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQTVCLEdBQThCbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkMsS0FBdkQsR0FBZ0V3RSxLQUFLLENBQUMxRSxDQUh6RSxFQUlDO0FBQ0dHLGVBQUMsR0FBRy9CLElBQUksQ0FBQ21GLEdBQUwsQ0FBU3BELENBQUMsR0FBR3RDLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JFLENBQXJDLEVBQXdDdUUsS0FBSyxDQUFDdkUsQ0FBTixHQUFRdUUsS0FBSyxDQUFDdEUsTUFBdEQsSUFBK0R2QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUEzRjs7QUFDQSxvQkFBSSxDQUFDd0UsMEJBQUwsQ0FBZ0M5RyxJQUFoQyxFQUFxQ29HLENBQXJDO0FBQ0g7QUFDSixXQVREOztBQVdBLGVBQUksSUFBSVcsR0FBQyxHQUFDLENBQVYsRUFBYUEsR0FBQyxHQUFDLE1BQUksQ0FBQ1AsTUFBTCxDQUFZaEQsTUFBM0IsRUFBa0N1RCxHQUFDLEVBQW5DLEVBQXNDO0FBQ2xDLGdCQUFJRixPQUFLLEdBQUcsTUFBSSxDQUFDTCxNQUFMLENBQVlPLEdBQVosQ0FBWjs7QUFDQSxnQkFBRy9HLElBQUksSUFBSTZHLE9BQVgsRUFBaUI7QUFBQztBQUNkLGtCQUFLbkYsSUFBSSxHQUFHLENBQVAsR0FBVzFCLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JFLENBQXBDLEdBQXlDdUUsT0FBSyxDQUFDckIsR0FBTixDQUFVbEQsQ0FBVixHQUFjdUUsT0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkUsQ0FBdkMsR0FBMkN1RSxPQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCRyxNQUE5RyxJQUNHRCxDQUFDLEdBQUd0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUE3QixHQUFrQ3VFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVWxELENBQVYsR0FBY3VFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJFLENBQXZDLEdBQTJDdUUsT0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkcsTUFEeEcsSUFFR0osQ0FBQyxHQUFHbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkQsQ0FBN0IsR0FBbUMwRSxPQUFLLENBQUNyQixHQUFOLENBQVVyRCxDQUFWLEdBQWMwRSxPQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCRCxDQUF2QyxHQUEyQzBFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJDLEtBRnpHLElBR0dGLENBQUMsR0FBR25DLElBQUksQ0FBQ3dGLEdBQUwsQ0FBU3BELGNBQVQsQ0FBd0JELENBQTVCLEdBQWdDbkMsSUFBSSxDQUFDd0YsR0FBTCxDQUFTcEQsY0FBVCxDQUF3QkMsS0FBekQsR0FBa0V3RSxPQUFLLENBQUNyQixHQUFOLENBQVVyRCxDQUFWLEdBQWMwRSxPQUFLLENBQUNyQixHQUFOLENBQVVwRCxjQUFWLENBQXlCRCxDQUg5RyxFQUlDO0FBQ0dHLGlCQUFDLEdBQUcvQixJQUFJLENBQUNtRixHQUFMLENBQVNwRCxDQUFDLEdBQUd0QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUFyQyxFQUF3Q3VFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVWxELENBQVYsR0FBY3VFLE9BQUssQ0FBQ3JCLEdBQU4sQ0FBVXBELGNBQVYsQ0FBeUJFLENBQXZDLEdBQTJDdUUsT0FBSyxDQUFDckIsR0FBTixDQUFVcEQsY0FBVixDQUF5QkcsTUFBNUcsSUFBcUh2QyxJQUFJLENBQUN3RixHQUFMLENBQVNwRCxjQUFULENBQXdCRSxDQUFqSjs7QUFDQSxzQkFBSSxDQUFDMEUsZ0JBQUwsQ0FBc0JoSCxJQUF0QixFQUEyQjZHLE9BQTNCLEVBQWlDVCxDQUFqQyxFQUFtQ1csR0FBbkM7QUFDSDtBQUNKO0FBQ0o7QUFDSjs7QUFFRC9HLFlBQUksQ0FBQ21DLENBQUwsR0FBU0EsQ0FBVDtBQUNBbkMsWUFBSSxDQUFDc0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0F0QyxZQUFJLENBQUN3RixHQUFMLENBQVNyRCxDQUFULEdBQWFBLENBQWI7QUFDQW5DLFlBQUksQ0FBQ3dGLEdBQUwsQ0FBU2xELENBQVQsR0FBYUEsQ0FBYjtBQXpKWTs7QUFDaEIsV0FBSSxJQUFJOEQsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDLEtBQUtJLE1BQUwsQ0FBWWhELE1BQTNCLEVBQW1DNEMsQ0FBQyxFQUFwQyxFQUF1QztBQUFBLGNBQS9CQSxDQUErQjtBQXlKdEMsT0ExSmUsQ0EwSmY7O0FBQ0osS0EzTEwsQ0EyTEs7O0FBM0xMO0FBQUE7QUFBQSxxQ0FpTXFCcEcsSUFqTXJCLEVBaU0wQjZHLEtBak0xQixFQWlNZ0NJLFdBak1oQyxFQWlNNENDLFlBak01QyxFQWlNeUQ7QUFDakQsVUFBR2xILElBQUksQ0FBQ3dGLEdBQUwsQ0FBUzJCLGNBQVQsQ0FBd0IsTUFBeEIsS0FBbUNOLEtBQUssQ0FBQ3JCLEdBQU4sQ0FBVTJCLGNBQVYsQ0FBeUIsTUFBekIsQ0FBdEMsRUFBdUU7QUFBQztBQUNwRSxZQUFHbkgsSUFBSSxDQUFDd0YsR0FBTCxDQUFTaEIsSUFBVCxJQUFpQixPQUFqQixJQUE0QnFDLEtBQUssQ0FBQ3JCLEdBQU4sQ0FBVWhCLElBQVYsSUFBa0IsS0FBakQsRUFBdUQ7QUFBQztBQUNwRDtBQUNBLGVBQUtnQyxNQUFMLEdBQVlZLGtFQUFlLENBQUNDLE1BQWhCLENBQXVCLEtBQUtiLE1BQTVCLEVBQW1DUyxXQUFuQyxDQUFaLENBRm1ELENBRVE7O0FBQzNEakgsY0FBSSxDQUFDd0YsR0FBTCxhQUhtRCxDQUdqQzs7QUFDbEIsZUFBS2dCLE1BQUwsR0FBWVksa0VBQWUsQ0FBQ0MsTUFBaEIsQ0FBdUIsS0FBS2IsTUFBNUIsRUFBbUNVLFlBQW5DLENBQVosQ0FKbUQsQ0FJUzs7QUFDNURMLGVBQUssQ0FBQ3JCLEdBQU4sQ0FBVThCLEtBQVYsR0FMbUQsQ0FLaEM7QUFDdEIsU0FQa0UsQ0FRbkU7QUFDQTtBQUNBOztBQUNIO0FBQ0osS0E5TUwsQ0E4TUs7O0FBOU1MO0FBQUE7QUFBQSwrQ0FvTitCdEgsSUFwTi9CLEVBb05vQ2lILFdBcE5wQyxFQW9OZ0Q7QUFBQztBQUN6QyxVQUFHakgsSUFBSSxDQUFDd0YsR0FBTCxDQUFTMkIsY0FBVCxDQUF3QixNQUF4QixDQUFILEVBQW1DO0FBQUM7QUFDaEMsWUFBR25ILElBQUksQ0FBQ3dGLEdBQUwsQ0FBU2hCLElBQVQsSUFBaUIsT0FBcEIsRUFBNEI7QUFDeEJ4RSxjQUFJLENBQUN3RixHQUFMLENBQVM1QixJQUFULEdBRHdCLENBQ1I7O0FBQ2hCLGVBQUs0QyxNQUFMLEdBQVlZLGtFQUFlLENBQUNDLE1BQWhCLENBQXVCLEtBQUtiLE1BQTVCLEVBQW1DUyxXQUFuQyxDQUFaLENBRndCLENBRW9DO0FBQy9EO0FBQ0o7QUFDSjtBQTNOTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSE8sSUFBTU0sWUFBYjtBQUFBO0FBQUE7QUFDSSwwQkFBYztBQUFBOztBQUFBOztBQUNWLFNBQUtDLEVBQUwsR0FBVSxLQUFWO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksS0FBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVosQ0FMVSxDQU9WOztBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFJQyxHQUFKLENBQVEsQ0FDbEIsQ0FBQyxFQUFELEVBQUksTUFBSixDQURrQixFQUNOLENBQUMsRUFBRCxFQUFJLE9BQUosQ0FETSxFQUNPLENBQUMsRUFBRCxFQUFJLElBQUosQ0FEUCxFQUNpQixDQUFDLEVBQUQsRUFBSSxNQUFKLENBRGpCLEVBQzZCLENBQUMsRUFBRCxFQUFJLE1BQUosQ0FEN0IsQ0FBUixDQUFkO0FBSUFDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsVUFBQ0MsS0FBRDtBQUFBLGFBQVcsS0FBSSxDQUFDL0MsTUFBTCxDQUFZK0MsS0FBWixFQUFtQixJQUFuQixDQUFYO0FBQUEsS0FBckM7QUFDQUYsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxLQUFEO0FBQUEsYUFBVyxLQUFJLENBQUMvQyxNQUFMLENBQVkrQyxLQUFaLEVBQW1CLEtBQW5CLENBQVg7QUFBQSxLQUFuQztBQUNIOztBQWZMO0FBQUE7QUFBQSwyQkFpQldBLEtBakJYLEVBaUJrQkMsT0FqQmxCLEVBaUIyQjtBQUNuQixVQUFHLEtBQUtMLE1BQUwsQ0FBWU0sR0FBWixDQUFnQkYsS0FBSyxDQUFDRyxPQUF0QixDQUFILEVBQW1DO0FBQy9CSCxhQUFLLENBQUNJLGNBQU47QUFDQUosYUFBSyxDQUFDSyxlQUFOO0FBQ0EsYUFBSyxLQUFLVCxNQUFMLENBQVlVLEdBQVosQ0FBZ0JOLEtBQUssQ0FBQ0csT0FBdEIsQ0FBTCxJQUF1Q0YsT0FBdkMsQ0FIK0IsQ0FHZ0I7QUFDbEQ7QUFDSjtBQXZCTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtDQUN5Qzs7Q0FDTDs7Q0FDVzs7Q0FDRjs7Q0FDRjs7QUFDM0M7QUFDQTtBQUVPLElBQU1NLElBQWI7QUFBQTtBQUFBO0FBQ0k7QUFDQTtBQUNBLGtCQUE2QztBQUFBLG1GQUFILEVBQUc7QUFBQSwwQkFBaENuRyxLQUFnQztBQUFBLFFBQWhDQSxLQUFnQywyQkFBeEIsR0FBd0I7QUFBQSwyQkFBbkJFLE1BQW1CO0FBQUEsUUFBbkJBLE1BQW1CLDRCQUFWLEdBQVU7O0FBQUE7O0FBQ3pDLFNBQUtrRyxNQUFMLEdBQWMsSUFBSUMsOENBQUosQ0FBV3JHLEtBQVgsRUFBaUJFLE1BQWpCLENBQWQ7QUFDQSxTQUFLa0csTUFBTCxDQUFZRSxVQUFaLENBQXVCO0FBQzVCQyxTQUFHLEVBQUUsYUFEdUI7QUFFNUJ4SCxZQUFNLEVBQUUsZ0JBRm9CO0FBRzVCeUgsV0FBSyxFQUFFLGVBSHFCO0FBSTVCQyxXQUFLLEVBQUU7QUFKcUIsS0FBdkI7QUFNQSxTQUFLQyxPQUFMLEdBQWUsSUFBSXhCLDJEQUFKLEVBQWY7QUFDQSxTQUFLeUIsTUFBTCxHQUFjO0FBQ1ZDLGFBQU8sRUFBRSxJQUFJQyxzREFBSixDQUFZLElBQVosQ0FEQztBQUVWQyxVQUFJLEVBQUUsSUFBSUMsZ0RBQUosQ0FBUyxJQUFULENBRkk7QUFHVkMsZUFBUyxFQUFFLElBQUlDLDJEQUFKLENBQWMsSUFBZCxDQUhEO0FBSVZDLGNBQVEsRUFBRSxJQUFJQyx5REFBSixDQUFhLElBQWIsQ0FKQTtBQUtWQyxhQUFPLEVBQUUsSUFBSUMsdURBQUosQ0FBWSxJQUFaO0FBTEMsS0FBZDtBQU9BLFNBQUtDLFlBQUwsR0FBb0IsS0FBS1gsTUFBTCxDQUFZQyxPQUFoQztBQUNBLFNBQUtVLFlBQUwsQ0FBa0JDLElBQWxCO0FBQ0g7O0FBckJMO0FBQUE7QUFBQSxnQ0F1QmdCQyxNQXZCaEIsRUF1QndCO0FBQ2hCLGNBQVFBLE1BQVI7QUFDSSxhQUFLQyw0Q0FBSyxDQUFDQyxNQUFYO0FBQ0ksaUJBQU8sS0FBS2YsTUFBTCxDQUFZRyxJQUFuQjs7QUFDSixhQUFLVyw0Q0FBSyxDQUFDRSxVQUFYO0FBQ0ksaUJBQU8sS0FBS2hCLE1BQUwsQ0FBWUssU0FBbkI7O0FBQ0osYUFBS1MsNENBQUssQ0FBQ0csU0FBWDtBQUNJLGlCQUFPLEtBQUtqQixNQUFMLENBQVlPLFFBQW5COztBQUNKLGFBQUtPLDRDQUFLLENBQUNJLFFBQVg7QUFDSSxpQkFBTyxLQUFLbEIsTUFBTCxDQUFZUyxPQUFuQjs7QUFDSjtBQUNJLGlCQUFPLEtBQUtULE1BQUwsQ0FBWUcsSUFBbkI7QUFWUjtBQVlIO0FBcENMO0FBQUE7QUFBQSwwQkFzQ1VsSixJQXRDVixFQXNDZTtBQUFBOztBQUNQLFVBQUcsS0FBSzBKLFlBQUwsQ0FBa0JFLE1BQWxCLElBQTRCQyw0Q0FBSyxDQUFDSyxPQUFyQyxFQUE2QztBQUN6QyxhQUFLUixZQUFMLEdBQWtCLEtBQUtTLFdBQUwsQ0FBaUIsS0FBS1QsWUFBTCxDQUFrQkUsTUFBbkMsQ0FBbEI7QUFDQSxhQUFLRixZQUFMLENBQWtCQyxJQUFsQjtBQUNIOztBQUNELFdBQUtELFlBQUwsQ0FBa0JVLE1BQWxCLENBQXlCcEssSUFBekI7QUFDQXFLLDJCQUFxQixDQUFDLFVBQUFySyxJQUFJO0FBQUEsZUFBSSxLQUFJLENBQUNzSyxLQUFMLENBQVd0SyxJQUFYLENBQUo7QUFBQSxPQUFMLENBQXJCO0FBQ0g7QUE3Q0w7QUFBQTtBQUFBLDBCQStDUztBQUFBOztBQUNEcUssMkJBQXFCLENBQUMsVUFBQXJLLElBQUk7QUFBQSxlQUFJLE1BQUksQ0FBQ3NLLEtBQUwsQ0FBV3RLLElBQVgsQ0FBSjtBQUFBLE9BQUwsQ0FBckI7QUFDSDtBQWpETDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVE8sSUFBTXVLLFdBQWI7QUFBQTtBQUFBO0FBRUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBWUMsVUFBWixFQUF1QjtBQUFBOztBQUNuQixTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBWSxFQUFaO0FBQ0g7O0FBWkw7QUFBQTtBQUFBLDJCQWNVO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLEVBQWpCOztBQUNBLFdBQUssSUFBSW5HLElBQVQsSUFBaUIsS0FBS2lHLFVBQXRCLEVBQWlDO0FBQzdCRSxnQkFBUSxDQUFDakUsSUFBVCxDQUFjLEtBQUtrRSxTQUFMLENBQWVwRyxJQUFmLEVBQXFCLEtBQUtpRyxVQUFMLENBQWdCakcsSUFBaEIsQ0FBckIsQ0FBZDtBQUNIOztBQUNELGFBQU9xRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsUUFBWixDQUFQLENBTEUsQ0FLMkI7QUFDaEM7QUFwQkw7QUFBQTtBQUFBLDhCQXNCY25HLElBdEJkLEVBc0JtQnVHLEdBdEJuQixFQXNCdUI7QUFBQTs7QUFDZixhQUFPLElBQUlGLE9BQUosQ0FBWSxVQUFDRyxPQUFELEVBQVNDLE1BQVQsRUFBa0I7QUFDakMsWUFBTUMsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBZDtBQUNBLGFBQUksQ0FBQ1QsTUFBTCxDQUFZbEcsSUFBWixJQUFvQjBHLEtBQXBCOztBQUNBQSxhQUFLLENBQUNFLE1BQU4sR0FBZTtBQUFBLGlCQUFNSixPQUFPLENBQUN4RyxJQUFELENBQWI7QUFBQSxTQUFmOztBQUNBMEcsYUFBSyxDQUFDSCxHQUFOLEdBQVlBLEdBQVo7QUFDSCxPQUxNLENBQVA7QUFNSDtBQTdCTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7QUFFQU0sTUFBTSxDQUFDRCxNQUFQLEdBQWdCLFlBQUs7QUFDakIsTUFBTUUsVUFBVSxHQUFHLElBQUk5QywwQ0FBSixFQUFuQjtBQUNBOEMsWUFBVSxDQUFDekcsR0FBWDtBQUNILENBSEQsQyxDQUtBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBRU8sSUFBTTBHLFNBQWI7QUFBQTtBQUFBO0FBQ0kscUJBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXdCO0FBQUE7O0FBQ3BCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsbURBQUosQ0FBYUgsSUFBSSxDQUFDL0MsTUFBbEIsQ0FBaEI7QUFDQSxTQUFLbUQsT0FBTCxHQUFlLEtBQUtKLElBQUwsQ0FBVS9DLE1BQVYsQ0FBaUJtRCxPQUFoQztBQUNBLFNBQUt2TCxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBS2UsTUFBTCxHQUFjb0ssSUFBSSxDQUFDN0IsWUFBTCxDQUFrQnZJLE1BQWhDO0FBQ0EsU0FBS3lLLGVBQUwsR0FBdUIsS0FBdkIsQ0FQb0IsQ0FPUzs7QUFDN0IsU0FBS0MsYUFBTCxHQUFxQixLQUFyQixDQVJvQixDQVFPOztBQUUzQixTQUFLQyxlQUFMLEdBQXVCLEdBQXZCO0FBRUEsU0FBS0MsVUFBTCxHQUFrQixDQUFsQixDQVpvQixDQVlBO0FBRXZCOztBQWZMO0FBQUE7QUFBQSwyQkFpQlcvTCxJQWpCWCxFQWlCZ0I7QUFDUixVQUFHLEtBQUtJLFFBQUwsS0FBa0IsQ0FBckIsRUFBdUI7QUFDbkIsYUFBS0EsUUFBTCxHQUFnQkosSUFBaEI7QUFDSDs7QUFFRCxXQUFLZ00sY0FBTDs7QUFFQSxVQUFHLEtBQUs3SyxNQUFMLENBQVk4SyxNQUFaLEtBQXVCLENBQTFCLEVBQTRCO0FBQ3hCLGFBQUtDLE9BQUwsQ0FBYWxNLElBQWIsRUFBa0IsTUFBbEIsRUFEd0IsQ0FDRTtBQUM3Qjs7QUFHRCxVQUFHZ0IsNERBQVcsQ0FBQ2EsY0FBWixFQUFILEVBQWdDO0FBQzVCLGFBQUtzSyxTQUFMLENBQWVuTSxJQUFmO0FBQ0gsT0FGRCxNQUVLO0FBQ0QsYUFBS29NLFNBQUwsR0FEQyxDQUNnQjs7QUFDakIsYUFBS1AsYUFBTCxJQUFzQjdMLElBQUksR0FBRyxLQUFLSSxRQUFsQzs7QUFDQSxZQUFHLEtBQUt5TCxhQUFMLEdBQXFCLENBQXhCLEVBQTJCO0FBQ3ZCLGVBQUtBLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxlQUFLSyxPQUFMLENBQWFsTSxJQUFiLEVBQWtCLEtBQWxCO0FBQ0g7QUFDSjs7QUFFRCxXQUFLeUwsUUFBTCxDQUFjeEcsTUFBZCxDQUFxQmpGLElBQXJCO0FBRUEsV0FBS0ksUUFBTCxHQUFnQkosSUFBaEI7QUFDSDtBQTNDTDtBQUFBO0FBQUEsOEJBK0NjQSxJQS9DZCxFQStDbUI7QUFDUCxVQUFHLENBQUMsS0FBSzRMLGVBQVQsRUFBeUI7QUFDckIsYUFBS0EsZUFBTCxHQUF1QixJQUF2QjtBQUNBLGFBQUtILFFBQUwsQ0FBY1ksUUFBZCxDQUF1QixPQUF2QixFQUErQnJNLElBQS9CO0FBQ0g7QUFDUjtBQXBETDtBQUFBO0FBQUEscUNBeURvQjtBQUNaLFdBQUsyTCxPQUFMLENBQWFXLFdBQWIsR0FBMkIsU0FBM0I7QUFDQSxXQUFLWCxPQUFMLENBQWFZLFNBQWIsR0FBeUIsU0FBekI7QUFDQSxXQUFLWixPQUFMLENBQWFhLFNBQWIsR0FBeUIsQ0FBekI7QUFDQSxXQUFLYixPQUFMLENBQWFjLElBQWIsQ0FBbUIsRUFBbkIsRUFBc0IsRUFBdEIsRUFBMEIsS0FBS1gsZUFBL0IsRUFBZ0QsRUFBaEQ7QUFDQSxXQUFLSCxPQUFMLENBQWFlLFFBQWIsQ0FBdUIsRUFBdkIsRUFBMEIsRUFBMUIsRUFBOEIsS0FBS1osZUFBTCxJQUFzQixLQUFLM0ssTUFBTCxDQUFZOEssTUFBWixHQUFtQixLQUFLOUssTUFBTCxDQUFhd0wsV0FBdEQsQ0FBOUIsRUFBa0csRUFBbEcsRUFMWSxDQU1aOztBQUNBLFdBQUtoQixPQUFMLENBQWFpQixNQUFiO0FBQ0g7QUFqRUw7QUFBQTtBQUFBLGdDQW1FZTtBQUNQLFdBQUtyQixJQUFMLENBQVUvQyxNQUFWLENBQWlCcUUsS0FBakIsQ0FBdUIsS0FBS3RCLElBQUwsQ0FBVS9DLE1BQVYsQ0FBaUJwRyxLQUFqQixHQUF5QixFQUFoRCxFQUFvRCxFQUFwRCxFQUF3RDtBQUNwQzlCLFVBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtzTCxhQUFMLEdBQW1CLElBQTlCLENBRHBCLEVBQ3dEO0FBQ3BDLFFBRnBCLEVBRE8sQ0FHaUI7QUFDM0I7QUF2RUw7QUFBQTtBQUFBLDRCQXlFWTdMLElBekVaLEVBeUVpQjRKLE1BekVqQixFQXlFd0I7QUFDWjtBQUNBLFdBQUttQyxVQUFMLElBQWtCLENBQUMvTCxJQUFJLEdBQUcsS0FBS0ksUUFBYixJQUF1QixJQUF6Qzs7QUFDQSxVQUFHLEtBQUsyTCxVQUFMLEdBQWtCLEdBQXJCLEVBQXlCO0FBQUM7QUFDdEIsYUFBSzVCLFdBQUwsQ0FBaUJQLE1BQWpCO0FBQ0g7O0FBR0QsVUFBSWtELE9BQU8sR0FBRyxDQUFkO0FBQ0EsVUFBRyxLQUFLZixVQUFMLEdBQWtCLElBQXJCLEVBQTRCZSxPQUFPLEdBQUUsSUFBVDtBQUM1QixVQUFHLEtBQUtmLFVBQUwsR0FBa0IsR0FBckIsRUFBMkJlLE9BQU8sR0FBRSxHQUFUO0FBQzNCLFVBQUcsS0FBS2YsVUFBTCxHQUFrQixJQUFyQixFQUE0QmUsT0FBTyxHQUFFLElBQVQ7QUFDNUIsVUFBRyxLQUFLZixVQUFMLEdBQWtCLENBQXJCLEVBQXlCZSxPQUFPLEdBQUUsQ0FBVDtBQUV6QixXQUFLbkIsT0FBTCxDQUFhWSxTQUFiLEdBQXlCLGVBQWFPLE9BQWIsR0FBcUIsR0FBOUM7QUFDQSxXQUFLbkIsT0FBTCxDQUFhZSxRQUFiLENBQXVCLENBQXZCLEVBQXlCLENBQXpCLEVBQTJCLEtBQUtuQixJQUFMLENBQVUvQyxNQUFWLENBQWlCcEcsS0FBNUMsRUFBbUQsS0FBS21KLElBQUwsQ0FBVS9DLE1BQVYsQ0FBaUJsRyxNQUFwRTtBQUNQO0FBekZMO0FBQUE7QUFBQSxnQ0EyRmdCc0gsTUEzRmhCLEVBMkZ1QjtBQUNmLGNBQU9BLE1BQVA7QUFDSSxhQUFLLE1BQUw7QUFBWSxpQkFBTyxLQUFLMkIsSUFBTCxDQUFVN0IsWUFBVixDQUF1QnFELGVBQXZCLEdBQXlDLElBQWhEOztBQUNaLGFBQUssS0FBTDtBQUFXLGlCQUFPLEtBQUt4QixJQUFMLENBQVU3QixZQUFWLENBQXVCc0QsVUFBdkIsR0FBb0MsSUFBM0M7QUFGZjtBQUlIO0FBaEdMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1DLEdBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0ksZUFBWTlMLE1BQVosRUFBeUM7QUFBQTs7QUFBQSxRQUFyQitMLE1BQXFCLHVFQUFaLFVBQVk7O0FBQUE7O0FBQUM7QUFDdEMsNkVBQU07QUFBQ3ZLLGVBQVMsRUFBRSxLQUFaO0FBQW1CRSxXQUFLLEVBQUU7QUFBMUIsS0FBTjtBQUNBLFFBQUlxSyxNQUFNLElBQUksT0FBZCxFQUFzQixNQUFLQyxFQUFMLEdBQVUsSUFBSWxOLGdEQUFKLEVBQVY7QUFDdEIsUUFBSWlOLE1BQU0sSUFBSSxXQUFkLEVBQTBCLE1BQUtDLEVBQUwsR0FBVSxJQUFJeE0sd0RBQUosRUFBVjtBQUMxQixRQUFJdU0sTUFBTSxJQUFJLFVBQWQsRUFBeUIsTUFBS0MsRUFBTCxHQUFVLElBQUlqTSxzREFBSixDQUFhQyxNQUFiLENBQVY7QUFFekIsVUFBS29ELElBQUwsR0FBWSxLQUFaLENBTnFDLENBTW5COztBQUNsQixVQUFLNEksRUFBTCxDQUFRckUsT0FBUixnQ0FQcUMsQ0FRckM7OztBQVJxQztBQVN4Qzs7QUFWTDtBQUFBO0FBQUEsMkJBWVc5SSxJQVpYLEVBWWlCO0FBQ1QsVUFBRyxLQUFLbU4sRUFBUixFQUFXO0FBQ1AsYUFBS0EsRUFBTCxDQUFRbEksTUFBUixDQUFlakYsSUFBZixFQURPLENBQ2M7QUFDeEI7O0FBQ0Qsc0VBQWFBLElBQWI7QUFDSDtBQWpCTDtBQUFBO0FBQUEsNEJBbUJXO0FBQ0gsV0FBS21OLEVBQUwsR0FBVSxJQUFWLENBREcsQ0FDWTs7QUFDZm5NLGtFQUFXLENBQUNvTSxlQUFaOztBQUNBO0FBQ0g7QUF2Qkw7O0FBQUE7QUFBQSxFQUF5QnRKLDBDQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFTyxJQUFNdUosTUFBYjtBQUFBO0FBQUE7QUFBQTs7QUFBa0M7QUFDOUIsa0JBQVl2RSxPQUFaLEVBQXFCd0UsVUFBckIsRUFBZ0M7QUFBQTs7QUFBQTs7QUFBQztBQUM3QixnRkFBTTtBQUFDM0ssZUFBUyxFQUFDLFFBQVg7QUFBcUJFLFdBQUssRUFBRTtBQUE1QixLQUFOO0FBQ0EsVUFBS2lHLE9BQUwsR0FBYUEsT0FBYjtBQUNBLFVBQUt3RSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFVBQUs3SSxLQUFMLEdBQWEsS0FBYixDQUo0QixDQUlUOztBQUNuQixVQUFLOEksU0FBTCxHQUFpQixJQUFqQixDQUw0QixDQUtQOztBQUNyQixVQUFLQyxxQkFBTCxHQUE2QixDQUE3QixDQU40QixDQU1HOztBQUMvQixVQUFLQyxnQkFBTCxHQUF3QixDQUF4QjtBQUNBLFVBQUtsSixJQUFMLEdBQVksUUFBWixDQVI0QixDQVFQOztBQUVyQixVQUFLb0ksV0FBTCxHQUFtQixDQUFuQixDQVY0QixDQVVQOztBQUNyQixVQUFLVixNQUFMLEdBQWMsTUFBS1UsV0FBbkI7QUFFQSxVQUFLZSxNQUFMLEdBQWMsSUFBZCxDQWI0QixDQWFUOztBQUNuQixVQUFLQyxXQUFMLEdBQW1CLENBQUMsQ0FBcEI7QUFBc0I7OztBQUV0QixVQUFLQyxpQkFBTCxHQUF5QixDQUF6QjtBQWhCNEI7QUFpQi9COztBQWxCTDtBQUFBO0FBQUEsNkJBb0JhbkosS0FwQmIsRUFvQm1CO0FBQ1gsV0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7QUF0Qkw7QUFBQTtBQUFBLDZCQXdCWTtBQUFDO0FBQ0wsVUFBRyxLQUFLa0osV0FBTCxLQUFxQixDQUFDLENBQXpCLEVBQTJCO0FBQUM7QUFDeEIsWUFBRyxLQUFLMUIsTUFBTCxHQUFZLENBQWYsRUFDSSxLQUFLQSxNQUFMLElBQWMsQ0FBZDtBQUNKLGFBQUswQixXQUFMLEdBQW1CLEtBQUtELE1BQXhCLENBSHVCLENBR1E7QUFDbEM7QUFDSjtBQTlCTDtBQUFBO0FBQUEsMkJBZ0NXMU4sSUFoQ1gsRUFnQ2lCO0FBQ1QsVUFBRyxLQUFLeU4sZ0JBQUwsS0FBMEIsQ0FBN0IsRUFBK0I7QUFDM0IsYUFBS0EsZ0JBQUwsR0FBd0J6TixJQUF4QjtBQUNIOztBQUVELFVBQUcsS0FBSzROLGlCQUFMLEtBQTJCLENBQTlCLEVBQWdDO0FBQzVCLGFBQUtBLGlCQUFMLEdBQXlCNU4sSUFBekI7QUFDSDs7QUFFRCxVQUFHLEtBQUs4SSxPQUFMLENBQWFuQixJQUFoQixFQUFzQjtBQUNsQixZQUFHLEtBQUs2RixxQkFBTCxLQUErQixDQUFsQyxFQUFvQztBQUFDO0FBQ2pDLGVBQUtBLHFCQUFMLEdBQTZCLEtBQUtELFNBQWxDO0FBQ0EsZUFBS0QsVUFBTCxDQUFnQk8sUUFBaEI7QUFDQSxjQUFHLEtBQUtwSixLQUFSLEVBQ0ksS0FBS3FKLEtBQUwsQ0FBVyxLQUFLckosS0FBaEIsRUFKNEIsQ0FJTDtBQUM5QjtBQUVKLE9BUkQsTUFRTyxJQUFHLEtBQUtxRSxPQUFMLENBQWF2QixFQUFoQixFQUFvQjtBQUN2QixhQUFLN0csSUFBTCxDQUFVLElBQVY7QUFDSCxPQUZNLE1BRUEsSUFBRyxLQUFLb0ksT0FBTCxDQUFhdEIsSUFBaEIsRUFBc0I7QUFDekIsYUFBSzlHLElBQUwsQ0FBVSxNQUFWO0FBQ0gsT0FGTSxNQUVBLElBQUcsS0FBS29JLE9BQUwsQ0FBYXJCLElBQWhCLEVBQXNCO0FBQ3pCLGFBQUsvRyxJQUFMLENBQVUsTUFBVjtBQUNILE9BRk0sTUFFQSxJQUFHLEtBQUtvSSxPQUFMLENBQWFwQixLQUFoQixFQUF1QjtBQUMxQixhQUFLaEgsSUFBTCxDQUFVLE9BQVY7QUFDSCxPQUZNLE1BRUE7QUFDSCxhQUFLSyxLQUFMLENBQVcsS0FBS2dELFFBQUwsQ0FBYzVELFNBQXpCO0FBQ0g7O0FBRUQsVUFBRyxLQUFLcU4scUJBQUwsR0FBNkIsQ0FBaEMsRUFDSSxLQUFLQSxxQkFBTCxJQUE4QnhOLElBQUksR0FBRyxLQUFLeU4sZ0JBQTFDLENBREosS0FHSSxLQUFLRCxxQkFBTCxHQUE2QixDQUE3QjtBQUVKLFdBQUtDLGdCQUFMLEdBQXdCek4sSUFBeEI7O0FBRUEsVUFBRyxLQUFLMk4sV0FBTCxJQUFvQixDQUFDLENBQXhCLEVBQTBCO0FBQUM7QUFDdkIsYUFBS0EsV0FBTCxJQUFvQjNOLElBQUksR0FBRyxLQUFLSSxRQUFoQzs7QUFDQSxZQUFJLEtBQUt1TixXQUFMLEdBQW1CLENBQXZCLEVBQXlCO0FBQ3JCLGVBQUtBLFdBQUwsR0FBbUIsQ0FBQyxDQUFwQixDQURxQixDQUNDO0FBQ3pCO0FBQ0o7O0FBRUQsV0FBS0MsaUJBQUwsR0FBeUI1TixJQUF6Qjs7QUFFQSx5RUFBYUEsSUFBYjtBQUNILEtBOUVMLENBOEVLOztBQTlFTDs7QUFBQTtBQUFBLEVBQTRCOEQsMENBQTVCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBRU8sSUFBTWlLLFVBQWI7QUFBQTtBQUFBO0FBQXdCO0FBQ3BCLHNCQUFZNU4sU0FBWixFQUFzQjBDLEtBQXRCLEVBQTZCWCxDQUE3QixFQUFnQ0csQ0FBaEMsRUFBa0M7QUFBQTs7QUFDOUIsU0FBS0gsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0csQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS1EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBSzFDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBSzRELFFBQUwsR0FBZ0IsSUFBSUMsOENBQUosQ0FBVyxLQUFLN0QsU0FBaEIsRUFBMEIwQyxLQUExQixDQUFoQjtBQUNBLFNBQUt6QyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBSzROLE1BQUwsR0FBYyxLQUFkLENBUDhCLENBT1Y7O0FBQ3BCLFNBQUs3TCxjQUFMLEdBQXFCO0FBQUNELE9BQUMsRUFBQyxFQUFIO0FBQU1HLE9BQUMsRUFBQyxFQUFSO0FBQVdELFdBQUssRUFBQyxFQUFqQjtBQUFvQkUsWUFBTSxFQUFDO0FBQTNCLEtBQXJCLENBUjhCLENBUXNCOztBQUNwRCxTQUFLMkwsT0FBTCxHQUFlLEtBQWYsQ0FUOEIsQ0FTVDtBQUN4Qjs7QUFYTDtBQUFBO0FBQUEsd0JBYVEvTCxDQWJSLEVBYVVHLENBYlYsRUFhWWxDLFNBYlosRUFhc0I7QUFDZCxXQUFLK0IsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsV0FBS0csQ0FBTCxHQUFRQSxDQUFSO0FBQ0EsV0FBSzBCLFFBQUwsQ0FBY2MsWUFBZCxDQUEyQjFFLFNBQTNCLEVBQXNDLEtBQUswQyxLQUEzQztBQUNBLFdBQUttTCxNQUFMLEdBQWMsSUFBZDtBQUNIO0FBbEJMO0FBQUE7QUFBQSwyQkFvQlU7QUFBQztBQUNILFdBQUtuTCxLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUtrQixRQUFMLEdBQWdCLElBQUlDLDhDQUFKLENBQVcsS0FBSzdELFNBQWhCLEVBQTBCLEtBQUswQyxLQUEvQixDQUFoQjtBQUNIO0FBdkJMO0FBQUE7QUFBQSw4QkF5Qlk7QUFDSixXQUFLb0wsT0FBTCxHQUFlLElBQWY7QUFDSDtBQTNCTDtBQUFBO0FBQUEsMkJBNkJXak8sSUE3QlgsRUE2QmdCO0FBQ1IsVUFBRyxLQUFLSSxRQUFMLElBQWlCLENBQXBCLEVBQXNCO0FBQUM7QUFDbkIsYUFBS0EsUUFBTCxHQUFnQkosSUFBaEI7QUFDQTtBQUNIOztBQUNELFdBQUsrRCxRQUFMLENBQWNlLElBQWQsQ0FBbUIsSUFBbkIsRUFBeUI5RSxJQUFJLEdBQUcsS0FBS0ksUUFBckM7QUFDQSxXQUFLc0UsSUFBTCxDQUFVSyxLQUFWLENBQWdCekUsSUFBSSxDQUFDMEUsS0FBTCxDQUFXLEtBQUs5QyxDQUFoQixDQUFoQixFQUFvQzVCLElBQUksQ0FBQzBFLEtBQUwsQ0FBVyxLQUFLM0MsQ0FBaEIsQ0FBcEMsRUFOUSxDQU1nRDs7QUFDeEQsV0FBS2pDLFFBQUwsR0FBZ0JKLElBQWhCO0FBQ0g7QUFyQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFFTyxJQUFNa08sS0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFDSSxpQkFBWS9OLFNBQVosRUFBdUIwQyxLQUF2QixFQUE4QlgsQ0FBOUIsRUFBaUNHLENBQWpDLEVBQW1DO0FBQUE7O0FBQUE7O0FBQy9CLCtFQUFNbEMsU0FBTixFQUFnQjBDLEtBQWhCLEVBQXNCWCxDQUF0QixFQUF5QkcsQ0FBekI7QUFDQSxVQUFLOEwsT0FBTCxHQUFjLEVBQWQ7QUFDQSxVQUFLNUosSUFBTCxHQUFZLE9BQVosQ0FIK0IsQ0FHWDs7QUFDcEIsUUFBTXNFLEtBQUssR0FBRyxJQUFJekMseURBQUosQ0FBZ0I7QUFDMUJ6RCxlQUFTLEVBQUUsT0FEZTtBQUUxQitDLGdCQUFVLEVBQUMsR0FGZTtBQUcxQkMsaUJBQVcsRUFBQztBQUhjLEtBQWhCLENBQWQ7QUFLQSxVQUFLd0ksT0FBTCxDQUFhLE1BQWIsSUFBdUJ0RixLQUFLLENBQUN1RixTQUFOLENBQWlCLEVBQWpCLENBQXZCO0FBQ0EsVUFBS0QsT0FBTCxDQUFhLE9BQWIsSUFBd0J0RixLQUFLLENBQUN1RixTQUFOLENBQWlCLEVBQWpCLENBQXhCO0FBQ0EsVUFBS0QsT0FBTCxDQUFhLE1BQWIsSUFBdUJ0RixLQUFLLENBQUN1RixTQUFOLENBQWlCLEVBQWpCLENBQXZCO0FBQ0EsVUFBS0QsT0FBTCxDQUFhLElBQWIsSUFBcUJ0RixLQUFLLENBQUN1RixTQUFOLENBQWlCLEVBQWpCLENBQXJCO0FBQ0EsVUFBSzFKLElBQUwsR0FBWSxNQUFLeUosT0FBTCxDQUFhaE8sU0FBYixDQUFaLENBYitCLENBYUs7O0FBYkw7QUFjbEM7O0FBZkw7QUFBQTtBQUFBLHdCQWlCUStCLENBakJSLEVBaUJVRyxDQWpCVixFQWlCWWxDLFNBakJaLEVBaUJzQjtBQUNkLHFFQUFVK0IsQ0FBVixFQUFZRyxDQUFaLEVBQWNsQyxTQUFkOztBQUNBLFdBQUt1RSxJQUFMLEdBQVksS0FBS3lKLE9BQUwsQ0FBYWhPLFNBQWIsQ0FBWjtBQUNIO0FBcEJMOztBQUFBO0FBQUEsRUFBMkI0TixzREFBM0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNITyxJQUFNNUcsZUFBYjtBQUFBO0FBQUE7QUFDSSw2QkFBYTtBQUFBO0FBQ1o7O0FBRkw7QUFBQTtBQUFBLDJCQUdtQmtILEdBSG5CLEVBR3dCQyxPQUh4QixFQUdpQztBQUFDO0FBQzFCO0FBQ0E7O0FBQ0E7O0FBRUEsVUFBSUMsY0FBYyxHQUFHLEdBQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjQyxTQUFkLEVBQXlCLENBQXpCLENBQXJCLENBTHlCLENBT3pCOztBQUNBLGFBQU9MLEdBQUcsQ0FBQ25JLE1BQUosQ0FBVyxVQUFVeUksSUFBVixFQUFnQmxMLEtBQWhCLEVBQXVCO0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBTzhLLGNBQWMsQ0FBQ0ssT0FBZixDQUF1Qm5MLEtBQXZCLEtBQWlDLENBQUMsQ0FBekM7QUFDSCxPQVBNLENBQVA7QUFRSCxLQW5CTCxDQW1CSzs7QUFuQkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU1vRyxLQUFiO0FBQUE7QUFBQTtBQUFtQjtBQUNmLGlCQUFZMEIsSUFBWixFQUFpQjtBQUFBOztBQUNiLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUszQixNQUFMLEdBQWMsS0FBS2lGLFdBQUwsQ0FBaUIzRSxPQUEvQjtBQUNIOztBQUpMO0FBQUE7QUFBQSwyQkFhVTtBQUFDO0FBQ0gsV0FBS04sTUFBTCxHQUFjLEtBQUtpRixXQUFMLENBQWlCM0UsT0FBL0I7QUFDSDtBQWZMO0FBQUE7QUFBQSwyQkFpQldOLE1BakJYLEVBaUJtQjtBQUFDO0FBQ1osV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7QUFuQkw7QUFBQTtBQUFBLDJCQXFCWTVKLElBckJaLEVBcUJpQixDQUFDO0FBRWI7QUF2Qkw7QUFBQTtBQUFBLHdCQU15QjtBQUFFLGFBQU8sU0FBUDtBQUFtQjtBQU45QztBQUFBO0FBQUEsd0JBT3dCO0FBQUUsYUFBTyxRQUFQO0FBQWtCO0FBUDVDO0FBQUE7QUFBQSx3QkFRNEI7QUFBRSxhQUFPLFlBQVA7QUFBc0I7QUFScEQ7QUFBQTtBQUFBLHdCQVMyQjtBQUFFLGFBQU8sV0FBUDtBQUFxQjtBQVRsRDtBQUFBO0FBQUEsd0JBVTBCO0FBQUUsYUFBTyxVQUFQO0FBQW9CO0FBVmhEO0FBQUE7QUFBQSx3QkFXMEI7QUFBRSxhQUFPLFVBQVA7QUFBb0I7QUFYaEQ7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTXFKLFNBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0kscUJBQVlrQyxJQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2IsbUZBQU1BLElBQU47QUFDQSxVQUFLMUMsS0FBTCxHQUFhLElBQUl6Qyx5REFBSixDQUFnQjtBQUN6QnpELGVBQVMsRUFBRSxPQURjO0FBRXpCK0MsZ0JBQVUsRUFBQyxHQUZjO0FBR3pCQyxpQkFBVyxFQUFDO0FBSGEsS0FBaEIsQ0FBYixDQUZhLENBT2I7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFaYTtBQWNoQjs7QUFmTDtBQUFBO0FBQUEsMkJBaUJVO0FBQ0Y7O0FBRUEzRSxrRUFBVyxDQUFDOE4sY0FBWixHQUhFLENBRzJCOztBQUU3QixXQUFLM04sTUFBTCxHQUFjLElBQUlrTSw4Q0FBSixDQUFXLEtBQUs5QixJQUFMLENBQVV6QyxPQUFyQixFQUE4QixJQUE5QixDQUFkO0FBQ0EsV0FBSzNILE1BQUwsQ0FBWWUsQ0FBWixHQUFnQixHQUFoQjtBQUNBLFdBQUtmLE1BQUwsQ0FBWWtCLENBQVosR0FBZSxJQUFmO0FBRUEsV0FBSzBNLFFBQUwsR0FBZ0IsSUFBSTFJLGtEQUFKLEVBQWhCLENBVEUsQ0FTNkI7QUFFL0I7O0FBQ0EsVUFBTTJJLE9BQU8sR0FBR2pKLG1CQUFPLENBQUUsbURBQUYsQ0FBdkI7O0FBQ0EsV0FBS2tKLEdBQUwsR0FBVyxLQUFLMUQsSUFBTCxDQUFVL0MsTUFBVixDQUFpQjBHLFNBQWpCLENBQTJCLFFBQTNCLEVBQW9DRixPQUFwQyxFQUE0QyxLQUFLbkcsS0FBakQsQ0FBWCxDQWJFLENBYWlFOztBQUNuRSxXQUFLc0csVUFBTCxHQUFrQixJQUFJakssOENBQUosQ0FBVztBQUN6QjlDLGFBQUssRUFBRSxLQUFLbUosSUFBTCxDQUFVL0MsTUFBVixDQUFpQnBHLEtBREM7QUFFekJFLGNBQU0sRUFBRSxLQUFLaUosSUFBTCxDQUFVL0MsTUFBVixDQUFpQmxHLE1BRkE7QUFHekI2QyxjQUFNLEVBQUUsS0FBSzhKLEdBQUwsQ0FBUzdNLEtBQVQsR0FBaUIsS0FBS21KLElBQUwsQ0FBVS9DLE1BQVYsQ0FBaUJwRyxLQUhqQjtBQUl6QmdELGNBQU0sRUFBRSxLQUFLNkosR0FBTCxDQUFTM00sTUFBVCxHQUFrQixLQUFLaUosSUFBTCxDQUFVL0MsTUFBVixDQUFpQmxHO0FBSmxCLE9BQVgsQ0FBbEI7QUFNQSxXQUFLNk0sVUFBTCxDQUFnQkMsZUFBaEIsR0FwQkUsQ0FvQmdDOztBQUNsQyxXQUFLRCxVQUFMLENBQWdCRSxLQUFoQixDQUFzQixLQUFLbE8sTUFBM0I7QUFDQSxXQUFLb0ssSUFBTCxDQUFVL0MsTUFBVixDQUFpQjhHLFNBQWpCLENBQTJCLEtBQUtILFVBQWhDO0FBRUEsV0FBS0osUUFBTCxDQUFjUSxlQUFkLENBQThCUCxPQUE5QjtBQUNBLFdBQUtELFFBQUwsQ0FBY1MsZ0JBQWQsQ0FBK0IsS0FBS3JPLE1BQXBDO0FBRUEsV0FBS3NPLE9BQUwsR0FBYyxFQUFkLENBM0JFLENBMkJlOztBQUNqQixXQUFLakUsS0FBTCxHQUFhLElBQUlrRSw0Q0FBSixDQUFVLEtBQUtuRSxJQUFmLENBQWIsQ0E1QkUsQ0E0QmdDOztBQUNsQyxXQUFLQyxLQUFMLENBQVc3QixJQUFYLEdBN0JFLENBK0JGOztBQUNBLDBCQUFpQixJQUFJMkIsb0RBQUosQ0FBYyxLQUFLQyxJQUFuQixFQUF5QixLQUFLQyxLQUE5QixDQUFqQixDQWhDRSxDQWdDb0Q7O0FBQ3RELFdBQUttRSxXQUFMLEdBQW1CLEVBQW5CLENBakNFLENBaUNvQjs7QUFDdEIsV0FBSzVDLGVBQUwsR0FBdUIsS0FBdkIsQ0FsQ0UsQ0FrQzJCOztBQUM3QixXQUFLQyxVQUFMLEdBQWtCLEtBQWxCLENBbkNFLENBbUNzQjtBQUczQjtBQXZETDtBQUFBO0FBQUEsMkJBeURXaE4sSUF6RFgsRUF5RGdCO0FBQUE7O0FBQ1IsVUFBRyxLQUFLK00sZUFBUixFQUF3QjtBQUFDO0FBQ3JCLGFBQUs2QyxNQUFMLENBQVkvRiw0Q0FBSyxDQUFDRyxTQUFsQjtBQUNIOztBQUVELFVBQUcsS0FBS2dELFVBQVIsRUFBbUI7QUFBQztBQUNoQixhQUFLNEMsTUFBTCxDQUFZL0YsNENBQUssQ0FBQ0ksUUFBbEI7QUFDSCxPQVBPLENBU1I7OztBQUNBLFdBQUs5SSxNQUFMLENBQVk4RCxNQUFaLENBQW1CakYsSUFBbkI7O0FBRUEsVUFBRyxLQUFLMlAsV0FBTCxDQUFpQnBNLE1BQWpCLEdBQTBCLENBQTdCLEVBQStCO0FBQzNCLGFBQUtvTSxXQUFMLENBQWlCckwsT0FBakIsQ0FBeUIsVUFBQ0csS0FBRCxFQUFPaEIsS0FBUCxFQUFlO0FBQ3BDLGNBQUdnQixLQUFLLENBQUN1SixNQUFULEVBQWdCO0FBQUM7QUFDYnZKLGlCQUFLLENBQUNRLE1BQU4sQ0FBYWpGLElBQWI7QUFDSDs7QUFDRCxjQUFHeUUsS0FBSyxDQUFDd0osT0FBVCxFQUFpQjtBQUNiLGtCQUFJLENBQUMwQixXQUFMLEdBQW1CeEksa0VBQWUsQ0FBQ0MsTUFBaEIsQ0FBdUIsTUFBSSxDQUFDdUksV0FBNUIsRUFBd0NsTSxLQUF4QyxDQUFuQjtBQUNIO0FBQ0osU0FQRDtBQVFIOztBQUVELFVBQUcsS0FBS2dNLE9BQUwsQ0FBYWxNLE1BQWIsR0FBc0IsQ0FBekIsRUFBMkI7QUFDdkIsYUFBS2tNLE9BQUwsQ0FBYW5MLE9BQWIsQ0FBcUIsVUFBQXFFLEdBQUcsRUFBRTtBQUN0QkEsYUFBRyxDQUFDMUQsTUFBSixDQUFXakYsSUFBWCxFQURzQixDQUd0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsU0FSRDtBQVNIOztBQUlELFdBQUsrTyxRQUFMLENBQWM5SixNQUFkLENBQXFCakYsSUFBckI7QUFDQSxXQUFLbVAsVUFBTCxDQUFnQmxLLE1BQWhCLENBQXVCakYsSUFBdkI7QUFDSDtBQWhHTDtBQUFBO0FBQUEsMkJBa0dXQSxJQWxHWCxFQWtHZ0I7QUFBQTs7QUFDUixXQUFLaUYsTUFBTCxDQUFZakYsSUFBWjtBQUNBLFdBQUt1TCxJQUFMLENBQVUvQyxNQUFWLENBQWlCcUgsSUFBakIsQ0FBc0IsU0FBdEI7QUFDQSxXQUFLdEUsSUFBTCxDQUFVL0MsTUFBVixDQUFpQnNILFVBQWpCLENBQTRCLEtBQUtiLEdBQWpDLEVBSFEsQ0FJUjtBQUNBOztBQUNBLFVBQUcsS0FBS1EsT0FBTCxDQUFhbE0sTUFBYixHQUFzQixDQUF6QixFQUEyQjtBQUN2QixhQUFLa00sT0FBTCxDQUFhbkwsT0FBYixDQUFxQixVQUFBcUUsR0FBRyxFQUFFO0FBQ3RCLGdCQUFJLENBQUM0QyxJQUFMLENBQVUvQyxNQUFWLENBQWlCc0gsVUFBakIsQ0FBNEJuSCxHQUFHLENBQUNqRSxJQUFoQztBQUNILFNBRkQ7QUFHSDs7QUFFRCxXQUFLNkcsSUFBTCxDQUFVL0MsTUFBVixDQUFpQnNILFVBQWpCLENBQTRCLEtBQUszTyxNQUFMLENBQVl1RCxJQUF4Qzs7QUFFQSxVQUFHLEtBQUtpTCxXQUFMLENBQWlCcE0sTUFBakIsR0FBMEIsQ0FBN0IsRUFBK0I7QUFBQztBQUM1QixhQUFLb00sV0FBTCxDQUFpQnJMLE9BQWpCLENBQXlCLFVBQUFHLEtBQUssRUFBRTtBQUM1QixjQUFHQSxLQUFLLENBQUN1SixNQUFULEVBQWdCO0FBQUM7QUFDYixrQkFBSSxDQUFDekMsSUFBTCxDQUFVL0MsTUFBVixDQUFpQnNILFVBQWpCLENBQTRCckwsS0FBSyxDQUFDQyxJQUFsQztBQUNIO0FBQ0osU0FKRDtBQUtIOztBQUVELFdBQUs4RyxLQUFMLENBQVd2RyxNQUFYLENBQWtCakYsSUFBbEI7O0FBQ0EsNEVBQWFBLElBQWI7O0FBQ0Esd0JBQWVpRixNQUFmLENBQXNCakYsSUFBdEI7QUFDSDtBQTNITDtBQUFBO0FBQUEsK0JBNkhjO0FBQUM7QUFDUCxVQUFJeUUsS0FBSyxHQUFHLElBQUl5Six3REFBSixDQUFVLE1BQVYsRUFBaUIsR0FBakIsRUFBc0IsS0FBSy9NLE1BQUwsQ0FBWWUsQ0FBbEMsRUFBcUMsS0FBS2YsTUFBTCxDQUFZa0IsQ0FBakQsQ0FBWjtBQUNBLFdBQUtsQixNQUFMLENBQVk0TyxRQUFaLENBQXFCdEwsS0FBckI7QUFDQSxXQUFLa0wsV0FBTCxDQUFpQmxKLElBQWpCLENBQXNCaEMsS0FBdEIsRUFITSxDQUd1Qjs7QUFDN0IsV0FBS3NLLFFBQUwsQ0FBY1MsZ0JBQWQsQ0FBK0IvSyxLQUEvQjtBQUNIO0FBbElMOztBQUFBO0FBQUEsRUFBK0JvRiw0Q0FBL0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTU4sUUFBYjtBQUFBO0FBQUE7QUFBQTs7QUFDSSxvQkFBWWdDLElBQVosRUFBaUI7QUFBQTs7QUFBQSxpRkFDUEEsSUFETyxJQUNEO0FBQ2Y7O0FBSEw7QUFBQTtBQUFBLDJCQUtVO0FBQ0Y7O0FBQ0EsV0FBS3lFLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxXQUFLckgsR0FBTCxHQUFXLElBQUlzRSx3Q0FBSixDQUFRLElBQVIsRUFBYSxXQUFiLENBQVgsQ0FIRSxDQUdtQzs7QUFDckMsV0FBS3RFLEdBQUwsQ0FBU3pHLENBQVQsR0FBYSxHQUFiO0FBQ0EsV0FBS3lHLEdBQUwsQ0FBU3RHLENBQVQsR0FBYSxHQUFiO0FBRUEsV0FBSzROLFVBQUwsR0FBa0IsSUFBbEIsQ0FQRSxDQU9xQjs7QUFDdkIsV0FBS0MsaUJBQUwsR0FBeUIsQ0FBQyxFQUExQixDQVJFLENBUTJCO0FBRTdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQUtySCxLQUFMLEdBQWEsSUFBSXpDLHlEQUFKLENBQWdCO0FBQ3pCekQsaUJBQVMsRUFBRSxRQURjO0FBRXpCK0Msa0JBQVUsRUFBQyxHQUZjO0FBR3pCQyxtQkFBVyxFQUFDO0FBSGEsT0FBaEIsQ0FBYjtBQUtBLFdBQUt4RSxNQUFMLEdBQWMsS0FBSzBILEtBQUwsQ0FBV3VGLFNBQVgsQ0FBcUIsRUFBckIsQ0FBZDtBQUNBLFdBQUsrQixXQUFMLEdBQW1CO0FBQUNqTyxTQUFDLEVBQUUsR0FBSjtBQUFTRyxTQUFDLEVBQUM7QUFBWCxPQUFuQjtBQUNBLFdBQUtsQixNQUFMLENBQVk0RCxLQUFaLENBQWtCLEtBQUtvTCxXQUFMLENBQWlCak8sQ0FBbkMsRUFBcUMsS0FBS2lPLFdBQUwsQ0FBaUI5TixDQUF0RDtBQUNIO0FBNUJMO0FBQUE7QUFBQSwyQkE4QldyQyxJQTlCWCxFQThCZ0I7QUFDUixVQUFHLEtBQUtnUSxRQUFMLElBQWlCLENBQXBCLEVBQXNCO0FBQ2xCLGFBQUtBLFFBQUwsR0FBZ0JoUSxJQUFoQjtBQUNIOztBQUVELFVBQUcsS0FBS2dRLFFBQUwsSUFBaUIsQ0FBakIsSUFBdUJoUSxJQUFJLEdBQUcsS0FBS2dRLFFBQWIsR0FBd0IsR0FBakQsRUFBcUQ7QUFDakQsWUFBRyxLQUFLekUsSUFBTCxDQUFVekMsT0FBVixDQUFrQm5CLElBQXJCLEVBQTBCO0FBQUM7QUFDdkIsZUFBS2lJLE1BQUwsQ0FBWS9GLDRDQUFLLENBQUNDLE1BQWxCO0FBQ0g7QUFDSjs7QUFFRCxVQUFHLEtBQUtrRyxRQUFMLElBQWlCLENBQWpCLElBQXVCaFEsSUFBSSxHQUFHLEtBQUtnUSxRQUFiLEdBQXlCLEtBQUtDLFVBQXZELEVBQWtFO0FBQzlELGFBQUs5TyxNQUFMLEdBQWMsS0FBSzBILEtBQUwsQ0FBV3VGLFNBQVgsQ0FBcUIsRUFBckIsQ0FBZDtBQUNBLGFBQUsrQixXQUFMLENBQWlCak8sQ0FBakIsSUFBc0IsQ0FBdEI7QUFDQSxhQUFLZ08saUJBQUwsSUFBeUIsR0FBekI7QUFDQSxhQUFLQyxXQUFMLENBQWlCOU4sQ0FBakIsSUFBcUIsS0FBSzZOLGlCQUExQjtBQUNBLGFBQUsvTyxNQUFMLENBQVk0RCxLQUFaLENBQWtCLEtBQUtvTCxXQUFMLENBQWlCak8sQ0FBbkMsRUFBcUMsS0FBS2lPLFdBQUwsQ0FBaUI5TixDQUF0RDtBQUNIOztBQUVELFdBQUtzRyxHQUFMLENBQVMxRCxNQUFULENBQWdCakYsSUFBaEI7QUFDSDtBQWxETDtBQUFBO0FBQUEsMkJBb0RXQSxJQXBEWCxFQW9EZ0I7QUFDUixXQUFLaUYsTUFBTCxDQUFZakYsSUFBWjtBQUNBLFdBQUt1TCxJQUFMLENBQVUvQyxNQUFWLENBQWlCcUgsSUFBakIsQ0FBc0IsT0FBdEI7QUFDQSxXQUFLdEUsSUFBTCxDQUFVL0MsTUFBVixDQUFpQnFFLEtBQWpCLENBQXVCLEdBQXZCLEVBQTJCLEdBQTNCLEVBQWdDLHdDQUFoQyxFQUF5RSxFQUF6RTtBQUVBLFdBQUt0QixJQUFMLENBQVUvQyxNQUFWLENBQWlCc0gsVUFBakIsQ0FBNEIsS0FBS25ILEdBQUwsQ0FBU2pFLElBQXJDLEVBTFEsQ0FNUjs7QUFFQSxXQUFLNkcsSUFBTCxDQUFVL0MsTUFBVixDQUFpQnNILFVBQWpCLENBQTRCLEtBQUszTyxNQUFqQzs7QUFDQSwyRUFBYW5CLElBQWI7QUFDSDtBQTlETDs7QUFBQTtBQUFBLEVBQThCNkosNENBQTlCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUVPLElBQU1KLE9BQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0ksbUJBQVk4QixJQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2IsaUZBQU1BLElBQU4sR0FEYSxDQUNEOztBQUNaLFVBQUsxQyxLQUFMLEdBQWEsSUFBSXpDLHlEQUFKLENBQWdCO0FBQ3pCekQsZUFBUyxFQUFFLFFBRGM7QUFFekIrQyxnQkFBVSxFQUFDLEdBRmM7QUFHekJDLGlCQUFXLEVBQUM7QUFIYSxLQUFoQixDQUFiO0FBS0EsVUFBS3lLLFFBQUwsR0FBZ0IsSUFBSWhLLHlEQUFKLENBQWdCO0FBQzVCekQsZUFBUyxFQUFFLEtBRGlCO0FBRTVCK0MsZ0JBQVUsRUFBQyxHQUZpQjtBQUc1QkMsaUJBQVcsRUFBQztBQUhnQixLQUFoQixDQUFoQjtBQVBhO0FBWWhCOztBQWJMO0FBQUE7QUFBQSwyQkFlVTtBQUNGOztBQUNBLFdBQUtxSyxRQUFMLEdBQWdCLENBQWhCO0FBRUEsV0FBSzdPLE1BQUwsR0FBYyxLQUFLMEgsS0FBTCxDQUFXdUYsU0FBWCxDQUFxQixFQUFyQixDQUFkO0FBQ0EsV0FBS2lDLGNBQUwsR0FBc0IsR0FBdEI7QUFDQSxXQUFLRixXQUFMLEdBQW1CO0FBQUNqTyxTQUFDLEVBQUUsR0FBSjtBQUFTRyxTQUFDLEVBQUMsS0FBS2dPO0FBQWhCLE9BQW5CO0FBQ0EsV0FBS2xQLE1BQUwsQ0FBWTRELEtBQVosQ0FBa0IsS0FBS29MLFdBQUwsQ0FBaUJqTyxDQUFuQyxFQUFxQyxLQUFLaU8sV0FBTCxDQUFpQjlOLENBQXREO0FBQ0EsV0FBS2lPLFlBQUwsR0FBb0IsQ0FBQyxDQUFyQixDQVJFLENBUXFCOztBQUN2QixXQUFLQyxXQUFMLEdBQW1CLEtBQUtELFlBQXhCO0FBRUEsV0FBS0UsSUFBTCxHQUFZLEVBQVo7O0FBQ0EsV0FBSSxJQUFJckssQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFDLENBQWpCLEVBQW1CQSxDQUFDLEVBQXBCLEVBQXVCO0FBQ25CLFlBQUlzSyxFQUFFLEdBQUcsTUFBTXRLLENBQUMsR0FBQyxHQUFqQjtBQUNBLGFBQUtxSyxJQUFMLENBQVUvSixJQUFWLENBQWU7QUFBQ3ZFLFdBQUMsRUFBQ3VPLEVBQUg7QUFBTXBPLFdBQUMsRUFBQyxHQUFSO0FBQVlxTyxnQkFBTSxFQUFDLEtBQUtOLFFBQUwsQ0FBY2hDLFNBQWQsQ0FBd0IsRUFBeEIsQ0FBbkI7QUFBZ0R2TCxlQUFLLEVBQUUsS0FBS3lOO0FBQTVELFNBQWY7QUFDSDs7QUFFRCxXQUFLRSxJQUFMLENBQVVsTSxPQUFWLENBQWtCLFVBQUFxRSxHQUFHLEVBQUU7QUFDbkJBLFdBQUcsQ0FBQytILE1BQUosQ0FBVzNMLEtBQVgsQ0FBaUI0RCxHQUFHLENBQUN6RyxDQUFyQixFQUF1QnlHLEdBQUcsQ0FBQ3RHLENBQTNCO0FBQ0gsT0FGRDtBQUdIO0FBbkNMO0FBQUE7QUFBQSwyQkFxQ1dyQyxJQXJDWCxFQXFDZ0I7QUFBQTs7QUFDUixVQUFHLEtBQUtnUSxRQUFMLElBQWlCLENBQXBCLEVBQXNCO0FBQ2xCLGFBQUtBLFFBQUwsR0FBZ0JoUSxJQUFoQjtBQUNIOztBQUVELFVBQUcsS0FBS2dRLFFBQUwsSUFBaUIsQ0FBakIsSUFBdUJoUSxJQUFJLEdBQUcsS0FBS2dRLFFBQWIsR0FBeUIsR0FBbEQsRUFBc0Q7QUFDbEQsWUFBRyxLQUFLekUsSUFBTCxDQUFVekMsT0FBVixDQUFrQm5CLElBQXJCLEVBQTBCO0FBQUM7QUFDdkIsZUFBS2lJLE1BQUwsQ0FBWS9GLDRDQUFLLENBQUNDLE1BQWxCO0FBQ0g7QUFDSjs7QUFFRCxXQUFLeUcsV0FBTCxJQUFtQixHQUFuQjtBQUNBLFdBQUtKLFdBQUwsQ0FBaUI5TixDQUFqQixJQUFzQixLQUFLa08sV0FBM0I7O0FBQ0EsVUFBRyxLQUFLSixXQUFMLENBQWlCOU4sQ0FBakIsR0FBcUIsS0FBS2dPLGNBQTdCLEVBQTRDO0FBQ3hDLGFBQUtGLFdBQUwsQ0FBaUI5TixDQUFqQixHQUFxQixLQUFLZ08sY0FBMUI7QUFDQSxhQUFLRSxXQUFMLEdBQW1CLEtBQUtELFlBQUwsR0FBa0JoUSxJQUFJLENBQUNFLE1BQUwsRUFBbEIsR0FBZ0MsR0FBbkQ7QUFDSDs7QUFDRCxXQUFLVyxNQUFMLENBQVk0RCxLQUFaLENBQWtCLEtBQUtvTCxXQUFMLENBQWlCak8sQ0FBbkMsRUFBcUMsS0FBS2lPLFdBQUwsQ0FBaUI5TixDQUF0RDtBQUVBLFdBQUttTyxJQUFMLENBQVVsTSxPQUFWLENBQWtCLFVBQUFxRSxHQUFHLEVBQUU7QUFDbkJBLFdBQUcsQ0FBQzlGLEtBQUosSUFBWSxHQUFaO0FBQ0E4RixXQUFHLENBQUN0RyxDQUFKLElBQVFzRyxHQUFHLENBQUM5RixLQUFaOztBQUNBLFlBQUc4RixHQUFHLENBQUN0RyxDQUFKLEdBQVEsTUFBSSxDQUFDZ08sY0FBaEIsRUFBK0I7QUFDM0IxSCxhQUFHLENBQUN0RyxDQUFKLEdBQVEsTUFBSSxDQUFDZ08sY0FBYjtBQUNBMUgsYUFBRyxDQUFDOUYsS0FBSixHQUFZLE1BQUksQ0FBQ3lOLFlBQUwsR0FBa0JoUSxJQUFJLENBQUNFLE1BQUwsRUFBbEIsR0FBZ0MsR0FBNUM7QUFDSDs7QUFDRG1JLFdBQUcsQ0FBQytILE1BQUosQ0FBVzNMLEtBQVgsQ0FBaUI0RCxHQUFHLENBQUN6RyxDQUFyQixFQUF1QnlHLEdBQUcsQ0FBQ3RHLENBQTNCO0FBQ0gsT0FSRDtBQVNIO0FBakVMO0FBQUE7QUFBQSwyQkFtRVdyQyxJQW5FWCxFQW1FZ0I7QUFBQTs7QUFDUixXQUFLaUYsTUFBTCxDQUFZakYsSUFBWjtBQUNBLFdBQUt1TCxJQUFMLENBQVUvQyxNQUFWLENBQWlCcUgsSUFBakIsQ0FBc0IsT0FBdEI7QUFDQSxXQUFLdEUsSUFBTCxDQUFVL0MsTUFBVixDQUFpQnFFLEtBQWpCLENBQXVCLEdBQXZCLEVBQTJCLEdBQTNCLEVBQWdDLHNCQUFoQyxFQUF1RCxFQUF2RDtBQUVBLFdBQUt0QixJQUFMLENBQVUvQyxNQUFWLENBQWlCc0gsVUFBakIsQ0FBNEIsS0FBSzNPLE1BQWpDO0FBQ0EsV0FBS3FQLElBQUwsQ0FBVWxNLE9BQVYsQ0FBa0IsVUFBQXFFLEdBQUcsRUFBRTtBQUNuQixjQUFJLENBQUM0QyxJQUFMLENBQVUvQyxNQUFWLENBQWlCc0gsVUFBakIsQ0FBNEJuSCxHQUFHLENBQUMrSCxNQUFoQztBQUNILE9BRkQ7O0FBR0EsMEVBQWExUSxJQUFiO0FBQ0g7QUE3RUw7O0FBQUE7QUFBQSxFQUE2QjZKLDRDQUE3QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFFTyxJQUFNWixPQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLG1CQUFZc0MsSUFBWixFQUFpQjtBQUFBOztBQUFBOztBQUNiLGlGQUFNQSxJQUFOLEdBRGEsQ0FDRDs7QUFDWixVQUFLeUUsUUFBTCxHQUFnQixDQUFoQixDQUZhLENBRU07O0FBRk47QUFHaEI7O0FBSkw7QUFBQTtBQUFBLDJCQU1VO0FBQUM7QUFDSDs7QUFDQSxXQUFLQSxRQUFMLEdBQWdCLENBQWhCLENBRkUsQ0FFZ0I7QUFDckI7QUFUTDtBQUFBO0FBQUEsMkJBV1doUSxJQVhYLEVBV2lCO0FBQ1QsVUFBRyxLQUFLZ1EsUUFBTCxJQUFpQixDQUFqQixJQUFzQixLQUFLekUsSUFBTCxDQUFVL0MsTUFBVixDQUFpQm1JLGNBQWpCLElBQW1DLElBQTVELEVBQWtFO0FBQUM7QUFDL0QsYUFBS1gsUUFBTCxHQUFnQmhRLElBQWhCLENBRDhELENBQ3pDO0FBQ3hCOztBQUNELFVBQUcsS0FBS2dRLFFBQUwsSUFBaUIsQ0FBakIsSUFBdUJoUSxJQUFJLEdBQUcsS0FBS2dRLFFBQWIsR0FBeUIsR0FBbEQsRUFBdUQ7QUFBQztBQUNwRCxhQUFLSixNQUFMLENBQVkvRiw0Q0FBSyxDQUFDQyxNQUFsQixFQURtRCxDQUN6QjtBQUM3QjtBQUNKO0FBbEJMO0FBQUE7QUFBQSwyQkFvQlc5SixJQXBCWCxFQW9CZ0I7QUFDUixXQUFLaUYsTUFBTCxDQUFZakYsSUFBWjtBQUNBLFdBQUt1TCxJQUFMLENBQVUvQyxNQUFWLENBQWlCcUgsSUFBakIsQ0FBc0IsU0FBdEI7QUFDQSxXQUFLdEUsSUFBTCxDQUFVL0MsTUFBVixDQUFpQnFFLEtBQWpCLENBQXVCLEVBQXZCLEVBQTBCLEVBQTFCLEVBQTZCLCtCQUE3Qjs7QUFDQSwwRUFBYTdNLElBQWI7QUFDSDtBQXpCTDs7QUFBQTtBQUFBLEVBQTZCNkosNENBQTdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVPLElBQU1WLElBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0ksZ0JBQVlvQyxJQUFaLEVBQWlCO0FBQUE7O0FBQUEsNkVBQ1BBLElBRE8sSUFDRDtBQUNmOztBQUhMO0FBQUE7QUFBQSwyQkFLVTtBQUNGOztBQUNBLFdBQUt5RSxRQUFMLEdBQWdCLENBQWhCLENBRkUsQ0FFZ0I7QUFDckI7QUFSTDtBQUFBO0FBQUEsMkJBVVdoUSxJQVZYLEVBVWdCO0FBQ1IsVUFBRyxLQUFLZ1EsUUFBTCxJQUFpQixDQUFwQixFQUFzQjtBQUNsQixhQUFLQSxRQUFMLEdBQWdCaFEsSUFBaEI7QUFDSDs7QUFFRCxVQUFHLEtBQUtnUSxRQUFMLElBQWlCLENBQWpCLElBQXVCaFEsSUFBSSxHQUFHLEtBQUtnUSxRQUFiLEdBQXlCLEdBQWxELEVBQXNEO0FBQ2xELFlBQUcsS0FBS3pFLElBQUwsQ0FBVXpDLE9BQVYsQ0FBa0JuQixJQUFyQixFQUEwQjtBQUFDO0FBQzNCO0FBQ0ksZUFBS2lJLE1BQUwsQ0FBWS9GLDRDQUFLLENBQUNFLFVBQWxCO0FBQ0g7QUFDSjtBQUNKO0FBckJMO0FBQUE7QUFBQSwyQkF1QlcvSixJQXZCWCxFQXVCZ0I7QUFDUixXQUFLaUYsTUFBTCxDQUFZakYsSUFBWjtBQUNBLFdBQUt1TCxJQUFMLENBQVUvQyxNQUFWLENBQWlCb0ksU0FBakIsQ0FBMkIsQ0FBM0IsRUFBNkIsQ0FBN0IsRUFBK0IsT0FBL0I7QUFDQSxXQUFLckYsSUFBTCxDQUFVL0MsTUFBVixDQUFpQnFFLEtBQWpCLENBQXVCLEdBQXZCLEVBQTJCLEdBQTNCLEVBQWdDLGdCQUFoQyxFQUFpRCxFQUFqRDtBQUNBLFdBQUt0QixJQUFMLENBQVUvQyxNQUFWLENBQWlCcUUsS0FBakIsQ0FBdUIsRUFBdkIsRUFBMEIsR0FBMUIsRUFBK0Isd0RBQS9CLEVBQXdGLEVBQXhGOztBQUNBLHVFQUFhN00sSUFBYjtBQUNIO0FBN0JMOztBQUFBO0FBQUEsRUFBMEI2Siw0Q0FBMUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUVPLElBQU1wQixNQUFiO0FBQUE7QUFBQTtBQUNJLGtCQUFZckcsS0FBWixFQUFvQkUsTUFBcEIsRUFBMkI7QUFBQTs7QUFDdkIsU0FBS0YsS0FBTCxHQUFZQSxLQUFaO0FBQ0EsU0FBS0UsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS3VPLE1BQUwsR0FBYyxLQUFLQyxZQUFMLENBQWtCMU8sS0FBbEIsRUFBeUJFLE1BQXpCLENBQWQ7QUFDQSxTQUFLcUosT0FBTCxHQUFlLEtBQUtrRixNQUFMLENBQVlFLFVBQVosQ0FBdUIsSUFBdkIsQ0FBZjtBQUNBLFNBQUt0RyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtrRyxjQUFMLEdBQXNCLEtBQXRCO0FBQ0EsU0FBS0ssTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEtBQW5CO0FBRUEsU0FBS0MsaUJBQUw7QUFDSDs7QUFaTDtBQUFBO0FBQUEsd0NBY3VCO0FBQ2YsV0FBS0wsTUFBTCxDQUFZTSxLQUFaLENBQWtCQyxPQUFsQixHQUE0QixPQUE1QjtBQUNBLFdBQUtQLE1BQUwsQ0FBWU0sS0FBWixDQUFrQkUsUUFBbEIsR0FBNkIsVUFBN0I7QUFDQSxXQUFLUixNQUFMLENBQVlNLEtBQVosQ0FBa0IxSixJQUFsQixHQUF5QixHQUF6QjtBQUNBLFdBQUtvSixNQUFMLENBQVlNLEtBQVosQ0FBa0J6SixLQUFsQixHQUEwQixHQUExQjtBQUNBLFdBQUttSixNQUFMLENBQVlNLEtBQVosQ0FBa0JHLEdBQWxCLEdBQXdCLEdBQXhCO0FBQ0EsV0FBS1QsTUFBTCxDQUFZTSxLQUFaLENBQWtCSSxNQUFsQixHQUEyQixHQUEzQjtBQUNBLFdBQUtWLE1BQUwsQ0FBWU0sS0FBWixDQUFrQkssTUFBbEIsR0FBMkIsTUFBM0I7QUFDQTFKLGNBQVEsQ0FBQy9ILElBQVQsQ0FBY29SLEtBQWQsQ0FBb0JNLFVBQXBCLEdBQWlDLE9BQWpDO0FBQ0g7QUF2Qkw7QUFBQTtBQUFBLDhCQXlCY1QsTUF6QmQsRUF5QnFCO0FBQ2IsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNIO0FBNUJMO0FBQUE7QUFBQSwrQkE4QmVTLFdBOUJmLEVBOEIyQjtBQUFBOztBQUNuQixVQUFNQyxNQUFNLEdBQUksSUFBSXBILHlEQUFKLENBQWdCbUgsV0FBaEIsQ0FBaEI7QUFDQUMsWUFBTSxDQUFDQyxJQUFQLEdBQWNDLElBQWQsQ0FBbUIsVUFBQUMsS0FBSyxFQUFFO0FBRXRCO0FBQ0E7QUFDQSxhQUFJLENBQUNySCxNQUFMLEdBQWNzSCxNQUFNLENBQUNDLE1BQVAsQ0FBYyxLQUFJLENBQUN2SCxNQUFuQixFQUEyQmtILE1BQU0sQ0FBQ2xILE1BQWxDLENBQWQ7QUFDQSxhQUFJLENBQUNrRyxjQUFMLEdBQXNCLElBQXRCO0FBQ0gsT0FORDtBQU9IO0FBdkNMO0FBQUE7QUFBQSxpQ0F5Q2lCdk8sS0F6Q2pCLEVBeUN3QkUsTUF6Q3hCLEVBeUMrQjtBQUN2QixVQUFJMlAsUUFBUSxHQUFHbkssUUFBUSxDQUFDb0ssb0JBQVQsQ0FBOEIsUUFBOUIsQ0FBZjtBQUNBLFVBQUlyQixNQUFNLEdBQUdvQixRQUFRLENBQUMsQ0FBRCxDQUFSLElBQWVuSyxRQUFRLENBQUNxSyxhQUFULENBQXVCLFFBQXZCLENBQTVCO0FBQ0FySyxjQUFRLENBQUMvSCxJQUFULENBQWNxUyxXQUFkLENBQTBCdkIsTUFBMUI7QUFDQUEsWUFBTSxDQUFDek8sS0FBUCxHQUFlQSxLQUFmO0FBQ0F5TyxZQUFNLENBQUN2TyxNQUFQLEdBQWdCQSxNQUFoQjtBQUNBLGFBQU91TyxNQUFQO0FBQ0gsS0FoREwsQ0FxREE7O0FBckRBO0FBQUE7QUFBQSw4QkFzRGN0TSxJQXREZCxFQXNEb0J5SyxPQXREcEIsRUFzRDZCcUQsT0F0RDdCLEVBc0RzQztBQUFBOztBQUM5QixVQUFNQyxRQUFRLEdBQUd4SyxRQUFRLENBQUNxSyxhQUFULENBQXVCLFFBQXZCLENBQWpCO0FBQ0FHLGNBQVEsQ0FBQ2xRLEtBQVQsR0FBaUI0TSxPQUFPLENBQUM1TSxLQUFSLEdBQWdCNE0sT0FBTyxDQUFDdUQsU0FBekMsQ0FGOEIsQ0FFcUI7O0FBQ25ERCxjQUFRLENBQUNoUSxNQUFULEdBQWtCME0sT0FBTyxDQUFDMU0sTUFBUixHQUFpQjBNLE9BQU8sQ0FBQ3dELFVBQTNDO0FBQ0EsVUFBTUMsVUFBVSxHQUFHSCxRQUFRLENBQUN2QixVQUFULENBQW9CLElBQXBCLENBQW5CO0FBQ0EsVUFBTTJCLFFBQVEsR0FBRyxFQUFqQjtBQUNBLFVBQUlDLEdBQUosRUFBU0MsR0FBVDtBQUNBNUQsYUFBTyxDQUFDaEosTUFBUixDQUFlMUIsT0FBZixDQUF1QixVQUFBMkIsS0FBSyxFQUFJO0FBQUM7QUFDN0IsWUFBR0EsS0FBSyxDQUFDTyxJQUFOLElBQWMsV0FBakIsRUFBOEI7QUFBQztBQUMzQm1NLGFBQUcsR0FBRyxDQUFOO0FBQ0FDLGFBQUcsR0FBRyxDQUFOO0FBQ0EzTSxlQUFLLENBQUNILElBQU4sQ0FBV3hCLE9BQVgsQ0FBbUIsVUFBQWIsS0FBSyxFQUFJO0FBQ3hCLGdCQUFHQSxLQUFLLEdBQUcsQ0FBWCxFQUFjO0FBQUM7QUFDWGdQLHdCQUFVLENBQUM3QixTQUFYLENBQXFCLE1BQUksQ0FBQ25HLE1BQUwsQ0FBWTRILE9BQU8sQ0FBQzFQLFNBQXBCLENBQXJCLEVBQ0kwUCxPQUFPLENBQUNRLFVBQVIsQ0FBbUJwUCxLQUFuQixDQURKLEVBQytCNE8sT0FBTyxDQUFDUyxVQUFSLENBQW1CclAsS0FBbkIsQ0FEL0IsRUFFSXVMLE9BQU8sQ0FBQ3VELFNBRlosRUFFdUJ2RCxPQUFPLENBQUN3RCxVQUYvQixFQUdJSSxHQUFHLEdBQUc1RCxPQUFPLENBQUN1RCxTQUhsQixFQUc2QkksR0FBRyxHQUFHM0QsT0FBTyxDQUFDd0QsVUFIM0MsRUFJSXhELE9BQU8sQ0FBQ3VELFNBSlosRUFJdUJ2RCxPQUFPLENBQUN3RCxVQUovQjtBQU1IOztBQUNESSxlQUFHOztBQUNILGdCQUFHQSxHQUFHLEdBQUk1RCxPQUFPLENBQUM1TSxLQUFSLEdBQWdCLENBQTFCLEVBQThCO0FBQUM7QUFDM0J3USxpQkFBRyxHQUFHLENBQU47QUFDQUQsaUJBQUc7QUFDTjtBQUNKLFdBZEQ7QUFlSDs7QUFDRCxZQUFHMU0sS0FBSyxDQUFDTyxJQUFOLElBQWMsYUFBakIsRUFBZ0M7QUFBQztBQUM3QmtNLGtCQUFRLENBQUNqTSxJQUFULE9BQUFpTSxRQUFRLHFCQUFTek0sS0FBSyxDQUFDUyxPQUFOLENBQWN1SSxHQUFkLENBQWtCLFVBQUExSixHQUFHO0FBQUEsbUJBQUs7QUFBQ2tMLGdCQUFFLEVBQUVsTCxHQUFHLENBQUNyRCxDQUFUO0FBQVk2USxnQkFBRSxFQUFFeE4sR0FBRyxDQUFDckQsQ0FBSixHQUFRcUQsR0FBRyxDQUFDbkQsS0FBNUI7QUFBbUM0USxnQkFBRSxFQUFFek4sR0FBRyxDQUFDbEQsQ0FBM0M7QUFBOEM0USxnQkFBRSxFQUFFMU4sR0FBRyxDQUFDbEQsQ0FBSixHQUFRa0QsR0FBRyxDQUFDakQ7QUFBOUQsYUFBTDtBQUFBLFdBQXJCLENBQVQsRUFBUjtBQUNIO0FBQ0osT0F2QkQsRUFQOEIsQ0E4QjNCOztBQUVILFdBQUttSSxNQUFMLENBQVlsRyxJQUFaLElBQW9CK04sUUFBcEIsQ0FoQzhCLENBZ0NEOztBQUM3QixhQUFPLElBQUlZLGlEQUFKLENBQVk7QUFBQztBQUNoQnZRLGlCQUFTLEVBQUU0QixJQURJO0FBRWZ2QixlQUFPLEVBQUUsQ0FGTTtBQUdmRSxlQUFPLEVBQUUsQ0FITTtBQUlmZCxhQUFLLEVBQUVrUSxRQUFRLENBQUNsUSxLQUpEO0FBS2ZFLGNBQU0sRUFBRWdRLFFBQVEsQ0FBQ2hRLE1BTEY7QUFNZm9RLGdCQUFRLEVBQUVBO0FBTkssT0FBWixDQUFQO0FBUUgsS0EvRkwsQ0ErRks7O0FBL0ZMO0FBQUE7QUFBQSx5QkFtR1NTLEtBbkdULEVBbUdlO0FBQ1AsV0FBS3hILE9BQUwsQ0FBYVksU0FBYixHQUF5QjRHLEtBQXpCO0FBQ0EsV0FBS3hILE9BQUwsQ0FBYWUsUUFBYixDQUF1QixDQUF2QixFQUF5QixDQUF6QixFQUE0QixLQUFLdEssS0FBakMsRUFBd0MsS0FBS0UsTUFBN0M7QUFDSDtBQXRHTDtBQUFBO0FBQUEsMEJBd0dVSixDQXhHVixFQXdHWUcsQ0F4R1osRUF3R2MrUSxJQXhHZCxFQXdHaUM7QUFBQSxVQUFkQyxRQUFjLHVFQUFILEVBQUc7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFLMUgsT0FBTCxDQUFhWSxTQUFiLEdBQXlCLFNBQXpCO0FBQ0EsV0FBS1osT0FBTCxDQUFhMkgsSUFBYixHQUFvQkQsUUFBUSxHQUFDLFVBQTdCO0FBQ0EsV0FBSzFILE9BQUwsQ0FBYTRILFFBQWIsQ0FBc0JILElBQXRCLEVBQTJCbFIsQ0FBM0IsRUFBNkJHLENBQTdCO0FBQ0g7QUFoSEw7QUFBQTtBQUFBLDhCQWtIY0gsQ0FsSGQsRUFrSGdCRyxDQWxIaEIsRUFrSGtCTSxTQWxIbEIsRUFrSDRCO0FBQ3BCLFdBQUtnSixPQUFMLENBQWFpRixTQUFiLENBQXVCLEtBQUtuRyxNQUFMLENBQVk5SCxTQUFaLENBQXZCLEVBQThDVCxDQUE5QyxFQUFnREcsQ0FBaEQ7QUFDSDtBQXBITDtBQUFBO0FBQUEsK0JBc0hlcU8sTUF0SGYsRUFzSHNCO0FBQ2QsV0FBSy9FLE9BQUw7QUFDQSxVQUFJNkgsT0FBTyxHQUFHOUMsTUFBTSxDQUFDeE8sQ0FBckI7QUFDQSxVQUFJdVIsT0FBTyxHQUFHL0MsTUFBTSxDQUFDck8sQ0FBckI7O0FBRUEsVUFBRyxLQUFLNE8sV0FBUixFQUFvQjtBQUNoQnVDLGVBQU8sSUFBRyxLQUFLeEMsTUFBTCxDQUFZOU8sQ0FBdEI7QUFDQXVSLGVBQU8sSUFBRyxLQUFLekMsTUFBTCxDQUFZM08sQ0FBdEI7QUFDSCxPQVJhLENBVWQ7OztBQUNBLFVBQ0ttUixPQUFPLElBQUksS0FBS3BSLEtBQWpCLElBQ0NxUixPQUFPLElBQUksS0FBS25SLE1BRGpCLElBRUVrUixPQUFPLEdBQUc5QyxNQUFNLENBQUN0TyxLQUFsQixJQUE0QixDQUY3QixJQUdFcVIsT0FBTyxHQUFHL0MsTUFBTSxDQUFDcE8sTUFBbEIsSUFBNEIsQ0FKakMsRUFLQztBQUNHO0FBQ0gsT0FsQmEsQ0FzQmQ7OztBQUNBLFVBQUlVLE9BQU8sR0FBQzBOLE1BQU0sQ0FBQzFOLE9BQVAsR0FDQTFDLElBQUksQ0FBQ29ULEdBQUwsQ0FDSXBULElBQUksQ0FBQ2tGLEdBQUwsQ0FBUyxDQUFULEVBQVlnTyxPQUFaLENBREosQ0FDd0I7QUFEeEIsT0FEWjtBQUtBLFVBQUl0USxPQUFPLEdBQUN3TixNQUFNLENBQUN4TixPQUFQLEdBQWlCNUMsSUFBSSxDQUFDb1QsR0FBTCxDQUFTcFQsSUFBSSxDQUFDa0YsR0FBTCxDQUFTLENBQVQsRUFBWWlPLE9BQVosQ0FBVCxDQUE3QjtBQUE0RDtBQUU1RCxVQUFJclIsS0FBSyxHQUFDOUIsSUFBSSxDQUFDa0YsR0FBTCxDQUNVLEtBQUtwRCxLQURmLEVBQ3FCO0FBQ1hvUixhQUFPLEdBQUc5QyxNQUFNLENBQUN0TyxLQUYzQixJQUdBOUIsSUFBSSxDQUFDbUYsR0FBTCxDQUFTLENBQVQsRUFBWStOLE9BQVosQ0FIVjtBQUcrQjs7O0FBRy9CLFVBQUlsUixNQUFNLEdBQUdoQyxJQUFJLENBQUNrRixHQUFMLENBQVMsS0FBS2xELE1BQWQsRUFBc0JtUixPQUFPLEdBQUcvQyxNQUFNLENBQUNwTyxNQUF2QyxJQUFpRGhDLElBQUksQ0FBQ21GLEdBQUwsQ0FBUyxDQUFULEVBQVlnTyxPQUFaLENBQTlEO0FBSUEsV0FBSzlILE9BQUwsQ0FBYWlGLFNBQWIsQ0FBdUIsS0FBS25HLE1BQUwsQ0FBWWlHLE1BQU0sQ0FBQy9OLFNBQW5CLENBQXZCLEVBQ0lLLE9BREosRUFDWTtBQUNSRSxhQUZKLEVBR0lkLEtBSEosRUFHVTtBQUNORSxZQUpKLEVBS0loQyxJQUFJLENBQUNtRixHQUFMLENBQVMsQ0FBVCxFQUFXK04sT0FBWCxDQUxKLEVBS3dCO0FBQ3BCbFQsVUFBSSxDQUFDbUYsR0FBTCxDQUFTLENBQVQsRUFBV2dPLE9BQVgsQ0FOSixFQU9JclIsS0FQSixFQU9VO0FBQ05FLFlBUko7QUFVSCxLQXhLTCxDQXdLSzs7QUF4S0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVPLElBQU04RCxXQUFiO0FBQUE7QUFBQTtBQUEwQjtBQUN0Qiw2QkFBdUY7QUFBQSxRQUExRXpELFNBQTBFLFFBQTFFQSxTQUEwRTtBQUFBLFFBQS9EK0MsVUFBK0QsUUFBL0RBLFVBQStEO0FBQUEsUUFBbkRDLFdBQW1ELFFBQW5EQSxXQUFtRDtBQUFBLGdDQUF0Q2dPLFdBQXNDO0FBQUEsUUFBdENBLFdBQXNDLGlDQUF4QixFQUF3QjtBQUFBLGlDQUFwQkMsWUFBb0I7QUFBQSxRQUFwQkEsWUFBb0Isa0NBQUwsRUFBSzs7QUFBQTs7QUFDbkYsU0FBS2pSLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBSytDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLZ08sV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNIOztBQVBMO0FBQUE7QUFBQSxpQ0FTaUJ0RixPQVRqQixFQVN5QnpMLEtBVHpCLEVBUzhEO0FBQUE7O0FBQUEsVUFBOUJDLE1BQThCLHVFQUFyQixJQUFxQjtBQUFBLFVBQWZDLE9BQWUsdUVBQUwsSUFBSztBQUN0RCxhQUFPLElBQUlMLG9EQUFKLENBQWM7QUFDakJDLGlCQUFTLEVBQUUsS0FBS0EsU0FEQztBQUVqQkMsY0FBTSxFQUFFMEwsT0FBTyxDQUFDVyxHQUFSLENBQVksVUFBQXhMLEtBQUs7QUFBQSxpQkFBSztBQUFDUixjQUFFLEVBQUMsS0FBSSxDQUFDNFAsVUFBTCxDQUFnQnBQLEtBQWhCLENBQUo7QUFBNEJOLGNBQUUsRUFBQyxLQUFJLENBQUMyUCxVQUFMLENBQWdCclAsS0FBaEI7QUFBL0IsV0FBTDtBQUFBLFNBQWpCLENBRlM7QUFFc0U7QUFDdkZaLGFBQUssRUFBRUEsS0FIVTtBQUlqQkMsY0FBTSxFQUFHQSxNQUpRO0FBS2pCQyxlQUFPLEVBQUVBLE9BTFE7QUFNakJYLGFBQUssRUFBRSxLQUFLdVIsV0FOSztBQU9qQnJSLGNBQU0sRUFBRSxLQUFLc1I7QUFQSSxPQUFkLENBQVA7QUFTSDtBQW5CTDtBQUFBO0FBQUEsOEJBcUJjblEsS0FyQmQsRUFxQm9CO0FBQUM7QUFDZCxhQUFPLElBQUlJLDhDQUFKLENBQVc7QUFDakJsQixpQkFBUyxFQUFFLEtBQUtBLFNBREM7QUFFakJLLGVBQU8sRUFBRSxLQUFLNlAsVUFBTCxDQUFnQnBQLEtBQWhCLENBRlE7QUFHakJQLGVBQU8sRUFBRSxLQUFLNFAsVUFBTCxDQUFnQnJQLEtBQWhCLENBSFE7QUFJakJyQixhQUFLLEVBQUUsS0FBS3VSLFdBSks7QUFLakJyUixjQUFNLEVBQUUsS0FBS3NSO0FBTEksT0FBWCxDQUFQO0FBT0Y7QUE3Qkw7QUFBQTtBQUFBLCtCQStCZW5RLEtBL0JmLEVBK0JxQjtBQUFDO0FBQ2QsYUFBUSxFQUFFQSxLQUFGLEdBQVUsS0FBS2tRLFdBQWhCLEdBQStCLEtBQUtqTyxVQUEzQztBQUNIO0FBakNMO0FBQUE7QUFBQSwrQkFtQ2VqQyxLQW5DZixFQW1DcUI7QUFDYixhQUFPbkQsSUFBSSxDQUFDMEUsS0FBTCxDQUFZLEVBQUV2QixLQUFGLEdBQVUsS0FBS2tRLFdBQWhCLEdBQStCLEtBQUtqTyxVQUEvQyxJQUEyRCxLQUFLa08sWUFBdkUsQ0FEYSxDQUN1RTtBQUN2RjtBQXJDTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSE8sSUFBTS9QLE1BQWI7QUFBQTtBQUFBO0FBQXFCO0FBQ2pCLHdCQUFtRTtBQUFBLFFBQXREbEIsU0FBc0QsUUFBdERBLFNBQXNEO0FBQUEsUUFBM0NLLE9BQTJDLFFBQTNDQSxPQUEyQztBQUFBLFFBQWxDRSxPQUFrQyxRQUFsQ0EsT0FBa0M7QUFBQSwwQkFBekJkLEtBQXlCO0FBQUEsUUFBekJBLEtBQXlCLDJCQUFqQixFQUFpQjtBQUFBLDJCQUFiRSxNQUFhO0FBQUEsUUFBYkEsTUFBYSw0QkFBTCxFQUFLOztBQUFBOztBQUMvRCxTQUFLSyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtLLE9BQUwsR0FBZUEsT0FBZixDQUYrRCxDQUV4Qzs7QUFDdkIsU0FBS0UsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS2QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0UsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0osQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLRyxDQUFMLEdBQVMsQ0FBVDtBQUNIOztBQVRMO0FBQUE7QUFBQSwwQkFXVUgsQ0FYVixFQVdhRyxDQVhiLEVBV2dCO0FBQ1IsV0FBS0gsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsV0FBS0csQ0FBTCxHQUFTQSxDQUFUO0FBQ0g7QUFkTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU8sSUFBTXFKLFFBQWI7QUFBQTtBQUFBO0FBQ0ksb0JBQVlsRCxNQUFaLEVBQW1CO0FBQUE7O0FBQ2YsU0FBS3RHLENBQUwsR0FBUyxDQUFUO0FBQ0EsU0FBS0csQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLbUcsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS3FMLGVBQUwsR0FBdUIsS0FBdkIsQ0FKZSxDQUljOztBQUM3QixTQUFLVCxJQUFMLEdBQVksRUFBWjtBQUNBLFNBQUtoVCxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBSzBULGFBQUwsR0FBcUIsSUFBckIsQ0FQZSxDQU9XOztBQUMxQixTQUFLQyxVQUFMLEdBQWtCLENBQWxCLENBUmUsQ0FRSzs7QUFDcEIsU0FBS1YsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtXLGFBQUwsR0FBcUIsR0FBckI7QUFDSDs7QUFaTDtBQUFBO0FBQUEsMkJBY1doVSxJQWRYLEVBY2dCO0FBQ1IsVUFBRyxLQUFLSSxRQUFMLElBQWlCLENBQXBCLEVBQXNCO0FBQ2xCLGFBQUtBLFFBQUwsR0FBZ0JKLElBQWhCO0FBQ0g7O0FBSUQsVUFBRyxLQUFLNlQsZUFBUixFQUF3QjtBQUNwQixhQUFLUixRQUFMLElBQWdCLENBQUNyVCxJQUFJLEdBQUcsS0FBS0ksUUFBYixJQUF1QixFQUF2QztBQUNBLGFBQUsyRSxLQUFMO0FBQ0EsYUFBS3lELE1BQUwsQ0FBWXFFLEtBQVosQ0FBa0IsS0FBSzNLLENBQXZCLEVBQTBCLEtBQUtHLENBQS9CLEVBQWtDLEtBQUsrUSxJQUF2QyxFQUE2QyxLQUFLQyxRQUFsRDs7QUFDQSxZQUFHclQsSUFBSSxHQUFDLEtBQUsrVCxVQUFiLEVBQXdCO0FBQ3BCLGVBQUtGLGVBQUwsR0FBdUIsS0FBdkI7QUFDSDtBQUNKOztBQUNELFdBQUt6VCxRQUFMLEdBQWdCSixJQUFoQjtBQUNIO0FBOUJMO0FBQUE7QUFBQSw2QkFnQ2FvVCxJQWhDYixFQWdDa0JwVCxJQWhDbEIsRUFnQ3VCO0FBQ1gsV0FBS29ULElBQUwsR0FBWUEsSUFBWjtBQUNBLFdBQUtTLGVBQUwsR0FBdUIsSUFBdkI7QUFDQSxXQUFLRSxVQUFMLEdBQWtCL1QsSUFBSSxHQUFHLEtBQUs4VCxhQUE5QjtBQUNBLFdBQUtULFFBQUwsR0FBZ0IsS0FBS1csYUFBckI7QUFDQSxXQUFLalAsS0FBTDtBQUNQO0FBdENMO0FBQUE7QUFBQSw0QkF3Q1c7QUFDSCxXQUFLN0MsQ0FBTCxHQUFTLEtBQUtzRyxNQUFMLENBQVlwRyxLQUFaLEdBQWtCLENBQWxCLEdBQXNCLEtBQUtpUixRQUFMLEdBQWMsR0FBN0M7QUFDQSxXQUFLaFIsQ0FBTCxHQUFTLEtBQUttRyxNQUFMLENBQVlsRyxNQUFaLEdBQW1CLENBQW5CLEdBQXVCLEtBQUsrUSxRQUFMLEdBQWMsR0FBOUM7QUFDSDtBQTNDTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFTyxJQUFNSCxPQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFxQztBQUNqQyxtQkFBWWUsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLGlGQUFNQSxLQUFOO0FBQ0EsVUFBS3ZCLFFBQUwsR0FBZ0J1QixLQUFLLENBQUN2QixRQUFOLElBQWtCLEVBQWxDO0FBRmU7QUFHbEI7O0FBSkw7QUFBQSxFQUE2QjdPLDhDQUE3QixFLENBTUEsMko7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDTyxJQUFNRyxNQUFiO0FBQUE7QUFBQTtBQUNJLGtCQUFZN0QsU0FBWixFQUF1QjBDLEtBQXZCLEVBQThCO0FBQUE7O0FBQzFCLFNBQUtnQyxZQUFMLENBQWtCMUUsU0FBbEIsRUFBNkIwQyxLQUE3QjtBQUNIOztBQUhMO0FBQUE7QUFBQSxpQ0FLaUIxQyxTQUxqQixFQUs0QjBDLEtBTDVCLEVBS21DO0FBQzNCLFdBQUsxQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFdBQUswQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxXQUFLWCxDQUFMLEdBQVMsQ0FBVDtBQUNBLFdBQUtHLENBQUwsR0FBUyxDQUFUOztBQUNBLGNBQU9sQyxTQUFQO0FBQ0ksYUFBSyxJQUFMO0FBQ0ksZUFBS2tDLENBQUwsR0FBUyxDQUFDUSxLQUFWO0FBQ0o7O0FBRUEsYUFBSyxNQUFMO0FBQ0ksZUFBS1IsQ0FBTCxHQUFTUSxLQUFUO0FBQ0o7O0FBRUEsYUFBSyxPQUFMO0FBQ0ksZUFBS1gsQ0FBTCxHQUFTVyxLQUFUO0FBQ0o7O0FBRUEsYUFBSyxNQUFMO0FBQ0ksZUFBS1gsQ0FBTCxHQUFTLENBQUNXLEtBQVY7QUFDSjtBQWZKO0FBa0JIO0FBNUJMO0FBQUE7QUFBQSx5QkE4QlNxUixNQTlCVCxFQThCaUJDLEVBOUJqQixFQThCcUI7QUFBQztBQUNkRCxZQUFNLENBQUNoUyxDQUFQLElBQVlpUyxFQUFFLElBQUksS0FBS2pTLENBQUwsR0FBUyxJQUFiLENBQWQ7QUFDQWdTLFlBQU0sQ0FBQzdSLENBQVAsSUFBWThSLEVBQUUsSUFBSSxLQUFLOVIsQ0FBTCxHQUFTLElBQWIsQ0FBZDtBQUNIO0FBakNMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFHTyxJQUFNcU4sS0FBYjtBQUFBO0FBQUE7QUFDSSxpQkFBWW5FLElBQVosRUFBaUI7QUFBQTs7QUFDYixTQUFLQSxJQUFMLEdBQVlBLElBQVosQ0FEYSxDQUViO0FBQ0E7O0FBQ0EsU0FBS2tFLE9BQUwsR0FBZWxFLElBQUksQ0FBQzdCLFlBQUwsQ0FBa0IrRixPQUFqQyxDQUphLENBSTRCOztBQUN6QyxTQUFLVixRQUFMLEdBQWdCeEQsSUFBSSxDQUFDN0IsWUFBTCxDQUFrQnFGLFFBQWxDLENBTGEsQ0FLOEI7O0FBQzNDLFNBQUs1TixNQUFMLEdBQWNvSyxJQUFJLENBQUM3QixZQUFMLENBQWtCdkksTUFBaEMsQ0FOYSxDQU0wQjs7QUFDdkMsU0FBS2YsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtnVSxtQkFBTCxHQUEyQixHQUEzQixDQVJhLENBUWtCOztBQUMvQixTQUFLQyxlQUFMLEdBQXVCLElBQXZCLENBVGEsQ0FTZTtBQUMvQjs7QUFYTDtBQUFBO0FBQUEsMkJBYVUsQ0FDRjtBQUNIO0FBZkw7QUFBQTtBQUFBLDJCQWlCV3JVLElBakJYLEVBaUJnQjtBQUNSLFVBQUcsS0FBS0ksUUFBTCxJQUFnQixDQUFuQixFQUFxQjtBQUNqQixhQUFLQSxRQUFMLEdBQWdCSixJQUFoQjtBQUNIOztBQUNELFVBQUcsS0FBS29VLG1CQUFMLEdBQTJCLENBQTlCLEVBQWdDO0FBQzVCLGFBQUtFLFFBQUwsQ0FBY3RVLElBQWQ7QUFDSDs7QUFDRCxXQUFLb1UsbUJBQUwsSUFBNEJwVSxJQUFJLEdBQUMsS0FBS0ksUUFBdEM7QUFDQSxXQUFLQSxRQUFMLEdBQWdCSixJQUFoQixDQVJRLENBU1I7QUFDSDtBQTNCTDtBQUFBO0FBQUEsNkJBNkJhQSxJQTdCYixFQTZCa0I7QUFBQTs7QUFDVjtBQUNBO0FBQ0E7QUFFQSxVQUFJdVUsUUFBUSxHQUFHLEVBQWYsQ0FMVSxDQUtROztBQUNsQixXQUFJLElBQUlwTyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUcsQ0FBakIsRUFBbUJBLENBQUMsRUFBcEIsRUFBdUI7QUFDbkIsWUFBSXdDLEdBQUcsR0FBRyxJQUFJc0Usd0NBQUosQ0FBUSxLQUFLOUwsTUFBYixDQUFWLENBRG1CLENBQ1k7O0FBQy9Cd0gsV0FBRyxDQUFDekcsQ0FBSixHQUFRLElBQVIsQ0FGbUIsQ0FFTjs7QUFDYnlHLFdBQUcsQ0FBQ3RHLENBQUosR0FBUSxPQUFNOEQsQ0FBQyxHQUFDLEVBQWhCO0FBQ0FvTyxnQkFBUSxDQUFDOU4sSUFBVCxDQUFja0MsR0FBZDtBQUNIOztBQUVENEwsY0FBUSxDQUFDalEsT0FBVCxDQUFpQixVQUFBcUUsR0FBRyxFQUFFO0FBQ2xCLGFBQUksQ0FBQ29HLFFBQUwsQ0FBY1MsZ0JBQWQsQ0FBK0I3RyxHQUEvQjs7QUFDQSxhQUFJLENBQUM4RyxPQUFMLENBQWFoSixJQUFiLENBQWtCa0MsR0FBbEI7QUFDSCxPQUhEO0FBS0EsV0FBS3lMLG1CQUFMLEdBQTRCLEtBQUtDLGVBQWpDO0FBQ0g7QUFoREw7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL2VsdmVuLXNjb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY2xhc3MgQUkgey8v0JHQsNC30L7QstGL0LUg0LrQu9Cw0YHRgSwg0LfQtNC10YHRjCDRhdGA0LDQvdC40YLRgdGPINC+0LHRidC40Lkg0YTRg9C90LrRhtC40L7QvdCw0LsuINCg0LDRgdGI0LjRgNGP0Y7RidC40Lkg0LrQu9Cw0YHRgSAtIER1bW15LCDRgtGD0L/QvtC5INCY0JhcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2R5ID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb250cm9sKGJvZHkpIHtcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSkge1xuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHtBSSB9IGZyb20gXCIuLi9haVwiO1xuXG5leHBvcnQgY2xhc3MgRHVtbXkgZXh0ZW5kcyBBSSB7XG4gICAgY29uc3RydWN0b3IoKSB7Ly/Ql9C00LXRgdGMINGF0YDQsNC90Y/RgtGB0Y8g0LLRgdC1INC/0LDRgNCw0LzQtdGC0YDRiywg0L3QsNC/0YDQuNC80LXRgCwg0LrQsNC60LjQtSDQt9Cw0LTQsNGH0Lgg0YMg0L/QtdGA0YHQvtC90LDQttCwLCDQtdCz0L4g0L/QsNC80Y/RgtGMLCDRh9GC0L4g0LTQtdC70LDQtdGCINC/0YDRj9C80L4g0YHQtdC50YfQsNGBINC4INGCLtC0LlxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMTAwMDsvL9Cc0LXQvdGP0LXRgiDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC60LDQttC00YvQtSAxMDAwINC80YFcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImRvd25cIjtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7Ly/QmtC+0LPQtNCwINCyINC/0L7RgdC70LXQtNC90LjQuSDRgNCw0Lcg0LzQtdC90Y/QuyDQvdCw0L/RgNCw0LLQu9C10L3QuNC1XG4gICAgfVxuXG4gICAgY2hhbmdlRGlyZWN0aW9uKCkgey8v0J7QtNC40L0g0LjQtyDQsdC70L7QutC+0LIg0L/RgNC40L3Rj9GC0LjRjyDRgNC10YjQtdC90LjQuVxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiZG93bix1cCxsZWZ0LHJpZ2h0XCIuc3BsaXQoJywnKVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNCldO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lKXtcbiAgICAgICAgaWYoKHRpbWUgLSB0aGlzLmxhc3RUaW1lKSA+IHRoaXMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvZHkud2Fsayh0aGlzLmRpcmVjdGlvbik7XG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcbiAgICB9XG59IiwiaW1wb3J0IHtBSSB9IGZyb20gXCIuLi9haVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVuZFNjcmlwdCBleHRlbmRzIEFJIHtcclxuICAgIGNvbnN0cnVjdG9yKCkgey8v0JfQtNC10YHRjCDRhdGA0LDQvdGP0YLRgdGPINCy0YHQtSDQv9Cw0YDQsNC80LXRgtGA0YssINC90LDQv9GA0LjQvNC10YAsINC60LDQutC40LUg0LfQsNC00LDRh9C4INGDINC/0LXRgNGB0L7QvdCw0LbQsCwg0LXQs9C+INC/0LDQvNGP0YLRjCwg0YfRgtC+INC00LXQu9Cw0LXRgiDQv9GA0Y/QvNC+INGB0LXQudGH0LDRgSDQuCDRgi7QtC5cclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnO1xyXG4gICAgICAgIHRoaXMuZXZlbnRUaW1lID0gMTUwMDtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmV2ZW50U3RhcnQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSl7XHJcbiAgICAgICAgaWYodGhpcy5sYXN0VGltZSA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXZlbnRUaW1lIC09IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xyXG5cclxuICAgICAgICBpZighdGhpcy5ldmVudFN0YXJ0KXsvL9CV0YHQu9C4INGB0L7QsdGL0YLQuNC1INC10YjRkSDQvdC1INC90LDRh9Cw0LvQvtGB0YxcclxuICAgICAgICAgICAgaWYodGhpcy5ldmVudFRpbWUgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50U3RhcnQgPSB0cnVlOy8v0JLRgNGD0LHQsNC10Lwg0YHQvtCx0YvRgtC40LVcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9keS5oaXQodGhpcy5kaXJlY3Rpb24pOy8v0KHQvtCx0YvRgtC40LUgLSDQvtGA0Log0LHRjNGR0YJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJvZHkud2Fsayh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS5zdGFuZCh0aGlzLmRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgaXNBZ3Jlc3NpdmV7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBiZWNvbWVBZ3Jlc3NpdmUoKXtcclxuICAgICAgICB0aGlzLmFncmVzc2l2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGJlY29tZVBlYWNlZnVsKCl7XHJcbiAgICAgICAgdGhpcy5hZ3Jlc3NpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNPcmNBZ3Jlc3NpdmUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZ3Jlc3NpdmU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0FJIH0gZnJvbSBcIi4uL2FpXCI7XHJcbmltcG9ydCB7aXNBZ3Jlc3NpdmV9IGZyb20gJy4vaXNBZ3Jlc3NpdmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBlYWNlZnVsIGV4dGVuZHMgQUkge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVyKSB7Ly/Ql9C00LXRgdGMINGF0YDQsNC90Y/RgtGB0Y8g0LLRgdC1INC/0LDRgNCw0LzQtdGC0YDRiywg0L3QsNC/0YDQuNC80LXRgCwg0LrQsNC60LjQtSDQt9Cw0LTQsNGH0Lgg0YMg0L/QtdGA0YHQvtC90LDQttCwLCDQtdCz0L4g0L/QsNC80Y/RgtGMLCDRh9GC0L4g0LTQtdC70LDQtdGCINC/0YDRj9C80L4g0YHQtdC50YfQsNGBINC4INGCLtC0LlxyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDEwNTA7Ly/QnNC10L3Rj9C10YIg0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQutCw0LbQtNGL0LUgMTAwMCDQvNGBXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcImxlZnRcIjtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lRHVtYiA9IDA7Ly/QmtC+0LPQtNCwINCyINC/0L7RgdC70LXQtNC90LjQuSDRgNCw0Lcg0LzQtdC90Y/QuyDQvdCw0L/RgNCw0LLQu9C10L3QuNC1XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7Ly/Qn9C10YDQtdC00LDRkdC8INC40LPRgNC+0LrQsCwg0YfRgtC+0LHRiyDQvtGA0Log0LzQvtCzINGB0LvQtdC00LjRgtGMINC30LAg0L3QuNC8INC4INCw0YLQsNC60L7QstCw0YLRjCDQtdCz0L5cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN0dWNrID0gZmFsc2U7Ly/QldGB0LvQuCB0cnVlLCDQvtGA0Log0YPQv9C10YDRgdGPINCyINGB0YLQtdC90YNcclxuICAgICAgICB0aGlzLmNoYW5nZVdheUluaXQgPSA1MDA7Ly/QldGB0LvQuCDRg9C/0LXRgNGB0Y8g0LIg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtSwg0Y3RgtC+INCy0YDQtdC80Y8g0L7QvSDQtNCy0LjQs9Cw0LXRgtGB0Y8g0LIg0LvRjtCx0L7QvCDQtNGA0YPQs9C+0Lwg0L3QsNC/0YDQsNCy0LvQtdC90LjQuCDQsiDQvdCw0LTQtdC20LTQtSDQvtCx0L7QudGC0Lgg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtVxyXG4gICAgICAgIHRoaXMuY2hhbmdlV2F5ID0gdGhpcy5jaGFuZ2VXYXlJbml0O1xyXG4gICAgICAgIHRoaXMub2xkWCA9IDA7Ly/QkiDRjdGC0Lgg0L/QtdGA0LXQvNC10L3QvdGL0LUg0LHRg9C00LXQvCDQv9C40YHQsNGC0Ywg0YHRgtCw0YDRi9C1INC60L7QvtGA0LTQuNC90LDRgtGLLiDQldGB0LvQuCDQvdC+0LLRi9C1INC60L7QvtGA0LTQuNC90LDRgtGLINGA0LDQstC90Ysg0YHRgtCw0YDRi9C8LCDQt9C90LDRh9C40YIg0L7RgNC6INGD0L/QtdGA0YHRjyDQsiDQv9GA0LXQv9GP0YLRgdGC0LLQuNC1XHJcbiAgICAgICAgdGhpcy5vbGRZID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5sYXN0VGltZUFncmVzc2l2ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbkFncmVzc2l2ZSA9IDUwMDsvL9Cd0LDRgdC60L7Qu9GM0LrQviDRh9Cw0YHRgtC+INC80LXQvdGP0Y7RgiDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INCw0LPRgNC10YHRgdC40LLQvdGL0LUg0L7RgNC60LhcclxuICAgICAgICB0aGlzLnRpbWVPZk1hcmNoID0gNDU2MDsvL9Ca0L7Qs9C00LAg0L7RgNC6INGC0L7Qu9GM0LrQviDQv9C+0Y/QstC40LvRgdGPLCDRjdGC0L4g0LLRgNC10LzRjyDQvtC9INC/0YDQvtGB0YLQviDQtNCy0LjQttC10YLRgdGPINCyINC+0LTQvdC+0Lwg0L3QsNC/0YDQsNCy0LvQtdC90LjQuC4g0J/QvtGB0LvQtSAtINC90LDRh9C40L3QsNC10YIg0LTQtdC50YHRgtCy0L7QstCw0YLRjCDRgdCw0LzQvtGB0YLQvtGP0YLQtdC70YzQvdC+XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRGlyZWN0aW9uKCkgey8v0J7QtNC40L0g0LjQtyDQsdC70L7QutC+0LIg0L/RgNC40L3Rj9GC0LjRjyDRgNC10YjQtdC90LjQuVxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJ1cCxsZWZ0XCIuc3BsaXQoJywnKVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMildO1xyXG4gICAgICAgIC8vIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duLHVwLGxlZnQscmlnaHRcIi5zcGxpdCgnLCcpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0KV07XHJcblxyXG4gICAgICAgIC8vIC8v0KPQvNC10L3RjNGI0LjQvCDQstC10YDQvtGP0YLQvdC+0YHRgtGMINC/0LXRgNC10LzQtdGJ0LXQvdC40Y8g0L7RgNC60LAg0LLQv9GA0LDQstC+INC40LvQuCDQstC90LjQt1xyXG4gICAgICAgIC8vIGlmKHRoaXMuZGlyZWN0aW9uID09ICdkb3duJyl7XHJcbiAgICAgICAgLy8gICAgIGlmKE1hdGgucmFuZG9tKCk+MC45KXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKXtcclxuICAgICAgICBpZih0aGlzLmxhc3RUaW1lID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZih0aGlzLnRpbWVPZk1hcmNoID4gMCl7Ly/QntGA0Log0LXRidGRINC80LDRgNGI0LjRgNGD0LXRgiwg0YIu0LUuINC30LDRhdC+0LTQuNGCINC90LAg0LvQvtC60LDRhtC40Y5cclxuICAgICAgICAgICAgdGhpcy50aW1lT2ZNYXJjaCAtPSB0aW1lIC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnN0dWNrKXsvL9CV0YHQu9C4INC+0YDQuiDQt9Cw0YHRgtGA0Y/Quywg0LTQsNC70YzQvdC10LnRiNC40YUg0L/RgNC+0LLQtdGA0L7QuiBlbHNlIGlmINC90LUg0LHRg9C00LXRglxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVdheSAtPSB0aW1lIC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICAgICAgaWYodGhpcy5jaGFuZ2VXYXkgPCAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlV2F5ID0gdGhpcy5jaGFuZ2VXYXlJbml0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoaXNBZ3Jlc3NpdmUuaXNPcmNBZ3Jlc3NpdmUoKSl7Ly/Qn9GA0L7QstC10YDQutCwINC+0YDQutCwINC90LAg0LDQs9GA0LXRgdGB0LjRjlxyXG4gICAgICAgICAgICB0aGlzLmFncmVzc2l2ZUJlaGF2aW91cih0aW1lKTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0dWNrKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZHVtYkJlaGF2aW91cih0aW1lKTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0dWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgdGhpcy5ib2R5LndhbGsodGhpcy5kaXJlY3Rpb24pO1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBkdW1iQmVoYXZpb3VyKHRpbWUpe1xyXG4gICAgICAgIGlmKCh0aW1lIC0gdGhpcy5sYXN0VGltZUR1bWIpID4gdGhpcy5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lRHVtYiA9IHRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgYWdyZXNzaXZlQmVoYXZpb3VyKHRpbWUpe1xyXG4gICAgICAgIC8vIGlmKHRoaXMuYm9keS5nb3RQbGF5ZXIpe1xyXG4gICAgICAgICAgICBsZXQgY29ycmVjdGlvbiA9IDEwOy8v0L7RgNC6INCx0YzRkdGCINC90LAg0YDQsNGB0YHRgtC+0Y/QvdC40LggNSwg0LXQvNGDINC90LUg0L3Rg9C20L3QviDQsdGL0YLRjCDQstC/0LvQvtGC0L3Rg9GOINC6INC40LPRgNC+0LrRgyAo0LjQvdCw0YfQtSDQvtGA0Log0LHRjNGR0YIg0YLQvtC70YzQutC+INC/0YDQuCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40Lgg0YEg0LjQs9GA0L7QutC+0LwsINCwINC+0YDQutC4INC40LfQsdC10LPQsNGO0YIg0YHRgtC+0LvQutC90L7QstC10L3QuNC5KVxyXG4gICAgICAgICAgICBpZih0aGlzLmJvZHkueCArIHRoaXMuYm9keS5jb2xsaXNpb25TaGFwZS54IC0gY29ycmVjdGlvbiA8IHRoaXMucGxheWVyLnggKyB0aGlzLnBsYXllci5jb2xsaXNpb25TaGFwZS54ICsgdGhpcy5wbGF5ZXIuY29sbGlzaW9uU2hhcGUud2lkdGggJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9keS54ICsgdGhpcy5ib2R5LmNvbGxpc2lvblNoYXBlLnggKyB0aGlzLmJvZHkuY29sbGlzaW9uU2hhcGUud2lkdGggKyBjb3JyZWN0aW9uID4gdGhpcy5wbGF5ZXIueCArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLnggJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9keS55ICsgdGhpcy5ib2R5LmNvbGxpc2lvblNoYXBlLnkgLWNvcnJlY3Rpb24gPCB0aGlzLnBsYXllci55ICsgdGhpcy5wbGF5ZXIuY29sbGlzaW9uU2hhcGUueSArIHRoaXMucGxheWVyLmNvbGxpc2lvblNoYXBlLmhlaWdodCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5LnkgKyB0aGlzLmJvZHkuY29sbGlzaW9uU2hhcGUueSArIHRoaXMuYm9keS5jb2xsaXNpb25TaGFwZS5oZWlnaHQgK2NvcnJlY3Rpb24+IHRoaXMucGxheWVyLnkgKyB0aGlzLnBsYXllci5jb2xsaXNpb25TaGFwZS55KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2soKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYoKHRpbWUgLSB0aGlzLmxhc3RUaW1lQWdyZXNzaXZlKSA+IHRoaXMuZHVyYXRpb25BZ3Jlc3NpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBZ3Jlc3NpdmVEaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZUFncmVzc2l2ZSA9IHRpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNoYW5nZUFncmVzc2l2ZURpcmVjdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuYm9keS54ID49IHRoaXMucGxheWVyLnggJiYgdGhpcy5ib2R5LnkgPj0gdGhpcy5wbGF5ZXIueSl7XHJcbiAgICAgICAgICAgIGlmKE1hdGgucmFuZG9tKCk+MC41KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3VwJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmJvZHkueCA8IHRoaXMucGxheWVyLnggJiYgdGhpcy5ib2R5LnkgPj0gdGhpcy5wbGF5ZXIueSl7XHJcbiAgICAgICAgICAgIGlmKE1hdGgucmFuZG9tKCk+MC41KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0JztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICd1cCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5ib2R5LnggPCB0aGlzLnBsYXllci54ICYmIHRoaXMuYm9keS55IDwgdGhpcy5wbGF5ZXIueSl7XHJcbiAgICAgICAgICAgIGlmKE1hdGgucmFuZG9tKCk+MC41KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0JztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmJvZHkueCA+PSB0aGlzLnBsYXllci54ICYmIHRoaXMuYm9keS55IDwgdGhpcy5wbGF5ZXIueSl7XHJcbiAgICAgICAgICAgIGlmKE1hdGgucmFuZG9tKCk+MC41KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ2Rvd24nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpc1N0dWNrKCl7Ly/Qn9GA0L7QstC10YDQutCwLCDQstC+0LfQvNC+0LbQvdC+INC+0YDQuiDRg9C/0LXRgNGB0Y8g0LIg0L/RgNC10L/Rj9GC0YHRgtCy0LjQtVxyXG4gICAgICAgIGlmKHRoaXMuYm9keS54ID09IHRoaXMub2xkWCAmJiB0aGlzLmJvZHkueSA9PSB0aGlzLm9sZFkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHVjayA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZGlyZWN0aW9uID09ICd1cCcgfHwgdGhpcy5kaXJlY3Rpb24gPT0gJ2Rvd24nKXtcclxuICAgICAgICAgICAgICAgIGlmKE1hdGgucmFuZG9tKCkgPjAuNSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAnbGVmdCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT0gJ3JpZ2h0JyB8fCB0aGlzLmRpcmVjdGlvbiA9PSAnbGVmdCcpe1xyXG4gICAgICAgICAgICAgICAgaWYoTWF0aC5yYW5kb20oKSA+MC41KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICd1cCc7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICdkb3duJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9sZFggPSB0aGlzLmJvZHkueDtcclxuICAgICAgICB0aGlzLm9sZFkgPSB0aGlzLmJvZHkueTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2soKXtcclxuICAgICAgICB0aGlzLmJvZHkuaGl0KCk7XHJcbiAgICAgICAgLy8gdGhpcy5ib2R5LmdvdFBsYXllciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmdldEhpdCgpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7U3ByaXRlfSBmcm9tICcuL3Nwcml0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIGV4dGVuZHMgU3ByaXRle1xyXG4gICAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgZnJhbWVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUsIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0fSkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgaW1hZ2VOYW1lOiBpbWFnZU5hbWUsXHJcbiAgICAgICAgICAgIHNvdXJjZVg6IGZyYW1lc1swXS5zeCxcclxuICAgICAgICAgICAgc291cmNlWTogZnJhbWVzWzBdLnN5LFxyXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBhdXRvcnVuO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwOy8v0LLRgNC10LzRjyDQvtGCINC/0L7RgdC70LXQtNC90LXQs9C+INGE0YDQtdC50LzQsCDQsNC90LjQvNCw0YbQuNC4XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMudG90YWxGcmFtZXMgPSB0aGlzLmZyYW1lcy5sZW5ndGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyrQlNC70Y8g0L7RgtGB0LvQtdC20LjQstCw0L3QuNGPINC/0L7RgdC70LXQtNC90LXQs9C+INC60LDQtNGA0LAuINCd0LDQv9GA0LjQvNC10YAsINC/0L7RgdC70LUg0L/QvtGB0LvQtdC00L3QtdCz0L4g0LrQsNC00YDQsCDQsNC90LjQvNCw0YbQuNC4INGB0YLRgNC10LvRjNCx0YssINC/0LXRgNGB0L7QvdCw0LYg0L/QtdGA0LXRgdGC0LDRkdGCINGB0YLRgNC10LvRj9GC0YxcclxuICAgICAgICDQrdGC0LAg0L/QtdGA0LXQvNC10L3QvdCw0Y8g0LfQsNC00LDQtdGC0YHRjyDQsiDQutC70LDRgdGB0LUgQm9keS4g0J3QsNC/0YDQuNC80LXRgDogdGhpcy52aWV3Lm9uRW5kID0gKCk9PnRoaXMuaXNTaG9vdGluZyA9IGZhbHNlOyovXHJcbiAgICAgICAgdGhpcy5vbkVuZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RnJhbWUoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuc291cmNlWCA9IHRoaXMuZnJhbWVzW2luZGV4XS5zeDtcclxuICAgICAgICB0aGlzLnNvdXJjZVkgPSB0aGlzLmZyYW1lc1tpbmRleF0uc3k7XHJcbiAgICB9XHJcblxyXG4gICAgcnVuKCkgey8v0KHRgtCw0YDRgiDQsNC90LjQvNCw0YbQuNC4INGBINGB0LDQvNC+0LPQviDQvdCw0YfQsNC70LBcclxuICAgICAgICBpZighdGhpcy5ydW5uaW5nKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIG5leHRGcmFtZSgpIHtcclxuICAgICAgICBpZigodGhpcy5jdXJyZW50RnJhbWUgKyAxKSA9PSB0aGlzLnRvdGFsRnJhbWVzKSB7Ly/QldGB0LvQuCDRjdGC0L4g0L/QvtGB0LvQtdC00L3QuNC5INC60LDQtNGALCDRgtC+Li4uXHJcbiAgICAgICAgICAgIGlmKHRoaXMub25FbmQpIHsvLy4uLtC10YHQu9C4INC30LDQtNCw0L3QsCDQutC+0L3RhtC+0LLQutCwLCDQt9Cw0L/Rg9GB0LrQsNC10LwuINCd0LDQv9GA0LjQvNC10YA6IHRoaXMudmlldy5vbkVuZCA9ICgpPT50aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLnJlcGVhdCkgey8vLi4uINC10YHQu9C4INC30LDQtNCw0L0g0L/QvtCy0YLQvtGALCDQv9C+0LLRgtC+0YDRj9C10LxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7Ly8uLi4g0LjQvdCw0YfQtSAtINGB0YLQvtC/INCw0L3QuNC80LDRhtC40Y9cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldEZyYW1lKHRoaXMuY3VycmVudEZyYW1lICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICBpZighdGhpcy5ydW5uaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5sYXN0VGltZSA9PSAwKSB7Ly/QrdGC0LAg0L/RgNC+0LLQtdGA0LrQsCDQvdGD0LbQvdCwINGC0L7Qu9GM0LrQviDQtNC70Y8g0L/QtdGA0LLQvtCz0L4g0LLRi9C30L7QstCwIHVwZGF0ZSgpLCDRh9GC0L7QsdGLINC40L3QuNGG0LjQsNC70LjQt9C40YDQvtCy0LDRgtGMIHRoaXMubGFzdFRpbWVcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCh0aW1lIC0gdGhpcy5sYXN0VGltZSkgPiB0aGlzLnNwZWVkKSB7Ly/QoNCw0LfQvdC40YbQsCDQv9C+INCy0YDQtdC80LXQvdC4INC80LXQttC00YMg0L/RgNC+0YjQu9GL0Lwg0Lgg0YLQtdC60YPRidC40Lwg0LrQsNC00YDQvtC8OiAoMTEtMik+MTAsICgxMi0yKT4xMCwgKDEzLTIpPjEwIC0g0LfQtNC10YHRjCDQv9GA0L7RiNC70L4gMTDQvNGBLCDQsCBzcGVlZCDQsiDRjdGC0L7QvCDQv9GA0LjQvNC10YDQtSDQutCw0Log0YDQsNC3INGA0LDQstC10L0gMTDQvNGBLCDQt9C90LDRh9C40YIg0LzQtdC90Y/QtdC8INC60LDQtNGAXHJcbiAgICAgICAgICAgIHRoaXMubmV4dEZyYW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvL9Ce0YHQvdC+0LLQsCDQstGB0LXRhSDQv9C10YDRgdC+0L3QsNC20LXQuVxyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi92ZWN0b3JcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVyU2hlZXQgfSBmcm9tIFwiLi9jaGFyYWN0ZXItc2hlZXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb2R5IHsvL1BsYXllciAtPiBCb2R5IH4gQ2hhcmFjdGVyU2hlZXQgLT4gU3ByaXRlU2hlZXQgfiBTcHJpdGVcclxuICAgIGNvbnN0cnVjdG9yKHtpbWFnZU5hbWUsIHNwZWVkfSkge1xyXG4gICAgICAgIHRoaXMueCA9IC0xMDA7Ly/Qn9C+0LvQvtC20LXQvdC40LUg0L7QsdGK0LXQutGC0LBcclxuICAgICAgICB0aGlzLnkgPSAtMTAwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDsvL9Ch0LrQvtGA0L7RgdGC0Ywg0L/QtdGA0LXQvNC10YnQtdC90LjRj1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKFwibGVmdFwiLCAwKTsvL9Cd0LDQv9GA0LDQstC70LXQvdC40LUg0L/QtdGA0LXQvNC10YnQtdC90LjRj1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwOy8v0JLRgNC10LzRjyDQv9C+0YHQu9C10LTQvdC10LPQviDQutCw0LTRgNCwXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0ge307Ly/QmtC+0L3RgtC10LnQvdC10YAg0LTQu9GPINGF0YDQsNC90LXQvdC40Y8g0LDQvdC40LzQsNGG0LjQuSB7d2Fsa19kb3duOiAuLiwgd2Fsa191cDogLi4g0Lgg0YIu0LQuIH1cclxuXHJcbiAgICAgICAgLy/QpNC+0YDQvNCwLCDQutC+0YLQvtGA0LDRjyDQsdGD0LTQtdGCINC40YHQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y8g0LTQu9GPINC60L7Qu9C70LjQt9C40LguINCe0L3QsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDQvdC1INC+0YIg0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0YHQv9GA0LDQudGC0LAsINCwINC+0YIgeDogMTgsIHk6IDE1XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb25TaGFwZSA9IHt4OiAxOCwgeTogMTUsIHdpZHRoOiAyOCwgaGVpZ2h0OiA0OX07XHJcblxyXG4gICAgICAgIHRoaXMuaXNTaG9vdGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNIaXR0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8v0JfQsNCz0YDRg9C20LDQtdC8INC90LXQvtCx0YXQvtC00LzRi9C1INCw0L3QuNC80LDRhtC40Lgg0LTQu9GPINC00LDQvdC90L7Qs9C+INC/0LXRgNGB0L7QvdCw0LbQsFxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvblNoZWV0ID0gbmV3IENoYXJhY3RlclNoZWV0KHtpbWFnZU5hbWU6IGltYWdlTmFtZX0pO1xyXG4gICAgICAgIFwid2Fsa19kb3duLHdhbGtfdXAsd2Fsa19sZWZ0LHdhbGtfcmlnaHRcIi5zcGxpdChcIixcIikuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gYW5pbWF0aW9uU2hlZXQuZ2V0QW5pbWF0aW9uKG5hbWUpOy8v0JIg0LjRgtC+0LPQtSB0aGlzLmFuaW1hdGlvbnMgPSB7d2Fsa19kb3duOiAuLiwgd2Fsa191cDogLi4g0Lgg0YIu0LQuIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcInNob290X2Rvd24sc2hvb3RfdXAsc2hvb3RfbGVmdCxzaG9vdF9yaWdodFwiLnNwbGl0KFwiLFwiKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnNbbmFtZV0gPSBhbmltYXRpb25TaGVldC5nZXRBbmltYXRpb24obmFtZSwgNTAsIGZhbHNlKTsvL9Cy0YLQvtGA0L7QuSDQsNGA0LPRg9C80LXQvSAtINGB0LrQvtGA0L7RgdGC0YwsIGZhbHNlIC0g0L7RgtC80LXQvdC40YLRjCDQv9C+0LLRgtC+0YBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcImN1dF9kb3duLGN1dF91cCxjdXRfbGVmdCxjdXRfcmlnaHRcIi5zcGxpdChcIixcIikuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gYW5pbWF0aW9uU2hlZXQuZ2V0QW5pbWF0aW9uKG5hbWUsIDUwLCBmYWxzZSk7Ly/QstGC0L7RgNC+0Lkg0LDRgNCz0YPQvNC10L0gLSDRgdC60L7RgNC+0YHRgtGMLCBmYWxzZSAtINC+0YLQvNC10L3QuNGC0Ywg0L/QvtCy0YLQvtGAXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgW1wiZGVhdGhcIl0uZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zW25hbWVdID0gYW5pbWF0aW9uU2hlZXQuZ2V0QW5pbWF0aW9uKG5hbWUsIDUwLCBmYWxzZSk7Ly/QstGC0L7RgNC+0Lkg0LDRgNCz0YPQvNC10L0gLSDRgdC60L7RgNC+0YHRgtGMLCBmYWxzZSAtINC+0YLQvNC10L3QuNGC0Ywg0L/QvtCy0YLQvtGAXHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIHRoaXMuc3RhbmQoXCJsZWZ0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob290KGFycm93KXtcclxuICAgICAgICBpZighdGhpcy5pc1Nob290aW5nKXtcclxuICAgICAgICAgICAgdGhpcy5pc1Nob290aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy52aWV3ID0gdGhpcy5hbmltYXRpb25zIFsnc2hvb3RfJyt0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbl07XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5vbkVuZCA9ICgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2hvb3RpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGFycm93LmZseSh0aGlzLngsIHRoaXMueSwgdGhpcy52ZWxvY2l0eS5kaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudmlldy5ydW4oKTsvL9CX0LDQv9GD0YHRgtC40YLRjCDQsNC90LjQvNCw0YbQuNGOXHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBoaXQoKXtcclxuICAgICAgICBpZighdGhpcy5pc0hpdHRpbmcpe1xyXG4gICAgICAgICAgICB0aGlzLmlzSGl0dGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9ucyBbJ2N1dF8nK3RoaXMudmVsb2NpdHkuZGlyZWN0aW9uXTtcclxuICAgICAgICAgICAgdGhpcy52aWV3Lm9uRW5kID0gKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNIaXR0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy52aWV3LnJ1bigpOy8v0JfQsNC/0YPRgdGC0LjRgtGMINCw0L3QuNC80LDRhtC40Y5cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIHdhbGsoZGlyZWN0aW9uKXtcclxuICAgICAgICBpZih0aGlzLmlzU2hvb3RpbmcgfHwgdGhpcy5pc0hpdHRpbmcpcmV0dXJuOyAvL9CS0L4g0LLRgNC10LzRjyDRgdGC0YDQtdC70YzQsdGLINC90LXQu9GM0LfRjyDQuNC00YLQuC4g0J3QlSDQn9Ce0J3QmNCc0JDQriDQmtCQ0Jog0KDQkNCR0J7QotCQ0JXQoi4g0JXQodCb0Jgg0KPQkdCg0JDQotCsINCt0KLQoyDQodCi0KDQntCa0KMsINCf0JXQoNCh0J7QndCQ0JbQldCcINCd0JXQm9Cs0JfQryDQo9Cf0KDQkNCS0JvQr9Ci0KxcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9ucyBbJ3dhbGtfJytkaXJlY3Rpb25dOy8v0JfQtNC10YHRjCDRhdGA0LDQvdC40YLRgdGPINGC0LXQutGD0YnQsNGPINCw0L3QuNC80LDRhtC40Y8uICAgdGhpcy52aWV3INGF0YDQsNC90LjRgiDQvtCx0YrQtdC60YIgQ2hhcmFjdGVyU2hlZXRcclxuICAgICAgICB0aGlzLnZpZXcucnVuKCk7Ly/Ql9Cw0L/Rg9GB0YLQuNGC0Ywg0LDQvdC40LzQsNGG0LjRjlxyXG4gICAgfVxyXG5cclxuICAgIHN0YW5kKGRpcmVjdGlvbil7Ly/QodGC0L7Rj9GC0YxcclxuICAgICAgICBpZih0aGlzLmlzU2hvb3RpbmcgfHwgdGhpcy5pc0hpdHRpbmcpcmV0dXJuOy8v0J3QlSDQn9Ce0J3QmNCc0JDQriDQmtCQ0Jog0KDQkNCR0J7QotCQ0JXQoi4g0JXQodCb0Jgg0KPQkdCg0JDQotCsINCt0KLQoyDQodCi0KDQntCa0KMsINCf0JXQoNCh0J7QndCQ0JbQldCcINCd0JXQm9Cs0JfQryDQo9Cf0KDQkNCS0JvQr9Ci0KxcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnNldERpcmVjdGlvbihkaXJlY3Rpb24sIDApO1xyXG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMuYW5pbWF0aW9ucyBbJ3dhbGtfJytkaXJlY3Rpb25dO1xyXG4gICAgICAgIHRoaXMudmlldy5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhdGgoKXtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcihcImRvd25cIiwgMCk7Ly/QntGB0YLQsNC90LDQstC70LjQstCw0LXQvCDQv9C10YDRgdC+0L3QsNC20LBcclxuICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLmFuaW1hdGlvbnMgWydkZWF0aCddO1xyXG4gICAgICAgIC8vIHRoaXMudmlldy5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpe1xyXG4gICAgICAgIGlmKHRoaXMubGFzdFRpbWUgPT0wKXtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0J/QtdGA0LXQvNC10YnQtdC90LjQtSDQv9C10YDRgdC+0L3QsNC20LBcclxuICAgICAgICAvLyBpZighdGhpcy5pc1Nob290aW5nKXsvL9CS0L4g0LLRgNC10LzRjyDRgdGC0YDQtdC70YzQsdGLINC4INGD0LTQsNGA0L7QsiDQvdC10LvRjNC30Y8g0LjQtNGC0LhcclxuICAgICAgICAvLyAgICAgdGhpcy52ZWxvY2l0eS5tb3ZlKHRoaXMsIHRpbWUtdGhpcy5sYXN0VGltZSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBpZih0aGlzLmlzU2hvb3RpbmcgfHwgdGhpcy5pc0hpdHRpbmcpey8v0JLQviDQstGA0LXQvNGPINGB0YLRgNC10LvRjNCx0Ysg0Lgg0YPQtNCw0YDQvtCyINC90LXQu9GM0LfRjyDQuNC00YLQuFxyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5Lm1vdmUodGhpcywwKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS5tb3ZlKHRoaXMsIHRpbWUtdGhpcy5sYXN0VGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG5cclxuICAgICAgICAvL9Ca0L7QvtGA0LTQuNC90LDRgtGLINC00LvRjyDQsNC90LjQvNCw0YbQuNC4OyB0aGlzLnZpZXcg0YXRgNCw0L3QuNGCINC+0LHRitC10LrRgiBDaGFyYWN0ZXJTaGVldFxyXG4gICAgICAgIHRoaXMudmlldy5zZXRYWShNYXRoLnRydW5jKHRoaXMueCksIE1hdGgudHJ1bmModGhpcy55KSkgLy/QkiDQv9C10YDQtdC80LXQvdC90L7QuSB0aGlzLnZpZXcg0YXRgNCw0L3QuNGC0YHRjyB0aGlzLmFuaW1hdGlvbnMgPSB7fS4g0JzQtdGC0L7QtCB0cnVuYyDQvtGC0LHRgNCw0YHRi9Cy0LXRgiDQtNGA0L7QsdC90YPRjiDRh9Cw0YHRgtGMXHJcbiAgICAgICAgdGhpcy52aWV3LnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBDYW1lcmEge1xyXG4gICAgY29uc3RydWN0b3Ioe3dpZHRoID0gNjQwLCBoZWlnaHQgPSA0ODAsIGxpbWl0WCA9IDUwMDAwLCBsaW1pdFkgPSA1MDAwMCwgc2Nyb2xsRWRnZSA9IDIwMH0gPSB7fSkge1xyXG4gICAgICAgIHRoaXMueCA9IDA7Ly/Qn9C+0LvQvtC20LXQvdC40LUg0LrQsNC80LXRgNGLXHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7Ly/QoNCw0LfQvNC10YAg0LrQsNC80LXRgNGLICjRgyDQvdCw0YEg0YHQvtCy0L/QsNC00LDQtdGCINGBINGA0LDQt9C80LXRgNC+0Lwg0Y3QutGA0LDQvdCwKVxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubGltaXRYID0gbGltaXRYOy8v0J/RgNC10LTQtdC7INC/0LXRgNC10LzQtdGJ0LXQvdC40Y8g0LrQsNC80LXRgNGLICjQsiDQvdCw0YjQtdC8INGB0LvRg9GH0LDQtSDRjdGC0L4g0YDQsNC30LzQtdGAINC60LDRgNGC0YspXHJcbiAgICAgICAgdGhpcy5saW1pdFkgPSBsaW1pdFk7XHJcbiAgICAgICAgdGhpcy53YXRjaE9iamVjdCA9IGZhbHNlOy8v0J7QtNC40L0g0LjQtyDRgNC10LbQuNC80L7QsiDQutCw0YDRgtGLINC00LvRjyDRgdC70LXQtNC+0LLQsNC90LjRjyDQt9CwINC+0LHRitC10LrRgtC+0LxcclxuICAgICAgICB0aGlzLm9iaiA9IG51bGw7Ly/Qo9C60LDQt9Cw0YLQtdC70Ywg0L3QsCDQvtCx0YrQtdC60YIsINC30LAg0LrQvtGC0L7RgNGL0Lwg0LrQsNC80LXRgNCwINGB0LvQtdC00YPQtdGCXHJcbiAgICAgICAgdGhpcy5zY3JvbGxFZGdlID0gc2Nyb2xsRWRnZTsvL9Ca0LDQvNC10YDQsCDQvdCw0YfQuNC90LDQtdGCINC00LLQuNC20LXQvdC40LUg0YLQvtC70YzQutC+INC10YHQu9C4INC/0LXRgNGB0L7QvdCw0LYg0L/QvtC00YXQvtC00LjRgiDQuiDQutGA0LDRjiDQutCw0LTRgNCwLiBzY3JvbGxFZGdlINC+0L/RgNC10LTQtdC70Y/QtdGCINC+0YLRgdGC0YPQvyDQvtGCINC60YDQsNGPLCDQutC+0LPQtNCwINC60LDQvNC10YDQsCDQvdCw0YfQuNC90LDQtdGCINC00LLQuNC20LXQvdC40LVcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaChvYmopIHtcclxuICAgICAgICB0aGlzLndhdGNoT2JqZWN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9iaiA9IG9iajtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSl7XHJcbiAgICAgICAgaWYodGhpcy53YXRjaE9iamVjdCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMub2JqLnggPiAodGhpcy54K3RoaXMud2lkdGggLSB0aGlzLnNjcm9sbEVkZ2UpKS8v0JXRgdC70Lgg0L/QtdGA0YHQvtC90LDQtiDQstGL0YjQtdC7INC30LAg0L/RgNCw0LLRi9C5INC60YDQsNC5INC60LDQtNGA0LAsINC00LLQuNCz0LDQtdC8INC60LDQvNC10YDRgyDQstGB0LvQtdC0INC30LAg0L/QtdGA0YHQvtC90LDQttC10LxcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGgubWluKHRoaXMubGltaXRYLCB0aGlzLm9iai54LXRoaXMud2lkdGgrdGhpcy5zY3JvbGxFZGdlKS8v0JTQstC40LPQsNC10Lwg0LrQsNC80LXRgNGDLiDQldGB0LvQuCDQutCw0LzQtdGA0LAg0LTQvtGB0YLQuNCz0LvQsCDQv9GA0LXQtNC10LvQsCwg0YLQviB0aGlzLnggPSB0aGlzLmxpbWl0WFxyXG4gICAgICAgICAgICBpZih0aGlzLm9iai54IDwgKHRoaXMueCArIHRoaXMuc2Nyb2xsRWRnZSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLm1heCgwLCB0aGlzLm9iai54LXRoaXMuc2Nyb2xsRWRnZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMub2JqLnkgPiAodGhpcy55K3RoaXMuaGVpZ2h0IC0gdGhpcy5zY3JvbGxFZGdlKSkvL9Cf0LXRgNGB0L7QvdCw0LYg0LjQtNGR0YIg0LLQvdC40LdcclxuICAgICAgICAgICAgICAgIHRoaXMueSA9IE1hdGgubWluKHRoaXMubGltaXRZLCB0aGlzLm9iai55LXRoaXMuaGVpZ2h0K3RoaXMuc2Nyb2xsRWRnZSlcclxuICAgICAgICAgICAgaWYodGhpcy5vYmoueSA8ICh0aGlzLnkgKyB0aGlzLnNjcm9sbEVkZ2UpKS8v0J/QtdGA0YHQvtC90LDQtiDQuNC00ZHRgiDQstCy0LXRgNGFXHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBNYXRoLm1heCgwLCB0aGlzLm9iai55LXRoaXMuc2Nyb2xsRWRnZSk7XHJcbiAgICAgICAgfSAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzcGVjaWFsUG9zaXRpb24oKXtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtTcHJpdGVTaGVldH0gZnJvbSAnLi9zcHJpdGUtc2hlZXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJhY3RlclNoZWV0IGV4dGVuZHMgU3ByaXRlU2hlZXR7XHJcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lfSl7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBpbWFnZU5hbWU6IGltYWdlTmFtZSxcclxuICAgICAgICAgICAgaW1hZ2VXaWR0aDogODMyLFxyXG4gICAgICAgICAgICBpbWFnZUhlaWdodDogMTM0NFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2VxdWVuY2VzID0gdGhpcy5nZXRTZXF1ZW5jZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZXF1ZW5jZXMoKXtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZSAoJy4vbWFwcy9hbmltYXRpb25zLmpzb24nKTtcclxuICAgICAgICBjb25zdCBzZXF1ZW5jZXMgPSB7fTtcclxuICAgICAgICBkYXRhLmxheWVycy5mb3JFYWNoKGxheWVyID0+e1xyXG5cclxuICAgICAgICAgICAgLy/QqNC40YDQuNC90YMg0LHRgNCw0LvQuCDQv9C+INGB0LDQvNC+0Lkg0LHQvtC70YzRiNC+0Lkg0L/QvtGB0LvQtdC00L7QstCw0YLQtdC70YzQvdC+0YHRgtC4LCDQv9C+0Y3RgtC+0LzRgyDQvdCwINC90LXQutC+0YLQvtGA0YvRhSDQv9C+0YHQu9C10LTQvtCy0LDRgtC10LvRjNC90L7RgdGC0Y/RhSDQv9C+0LzQtdC90YzRiNC1INCyINC60L7QvdGG0LUg0LXRgdGC0Ywg0L3Rg9C70LguINCY0YUg0YPQsdC40YDQsNC10LwsINGE0LjQu9GM0YLRgNGD0LXQvFxyXG4gICAgICAgICAgICBzZXF1ZW5jZXNbbGF5ZXIubmFtZV0gPSBsYXllci5kYXRhLmZpbHRlcihpID0+IGk+MCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHNlcXVlbmNlcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbmltYXRpb24obmFtZSwgc3BlZWQgPSA3MCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUpe1xyXG4gICAgICAgIHJldHVybiBzdXBlci5nZXRBbmltYXRpb24odGhpcy5zZXF1ZW5jZXNbbmFtZV0sIHNwZWVkLCByZXBlYXQsIGF1dG9ydW4pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtSZW1vdmVGcm9tQXJyYXl9IGZyb20gJy4vcmVtb3ZlLWZyb20tYXJyYXknO1xyXG5pbXBvcnQge2lzQWdyZXNzaXZlfSBmcm9tICcuL2Fpcy9pc0FncmVzc2l2ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMgPSBbXTsvL9Cc0LDRgdGB0LjQsiDRgdGC0LDRgtC40YfQvdGL0YUg0L7QsdGK0LXQutGC0L7Qsi4g0JzRiyDQuNGB0L/QvtC70YzQt9GD0LXQvCDRgdC70LXQtNGD0Y7RidC40LUg0YHQstC+0LnRgdGC0LLQsCDQvtCx0YrQtdC60YLQsDoge3gsIHksIHdpZHRoLCBoZWlnaHR9XHJcbiAgICAgICAgdGhpcy5ib2RpZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTdGF0aWNTaGFwZXMoZGF0YSl7XHJcbiAgICAgICAgZGF0YS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGlmKGxheWVyLnR5cGUgPT0nb2JqZWN0Z3JvdXAnKVxyXG4gICAgICAgICAgICAgICAgLypvYmplY3RzINGN0YLQviDQvNCw0YHRgdC40LIg0YEg0L3QsNCx0L7RgNC+0Lwg0L7QsdGK0LXQutGC0L7QsiBbey4uLn0sey4uLn0sINC4INGCLtC0Ll0wXHJcbiAgICAgICAgICAgICAgICDQlNGD0LzQsNGOLCDQutC+0L3RgdGC0YDRg9C60YbQuNGPICguLi5sYXllci5vYmplY3RzKSDRgdC+0LfQtNCw0LXRgiDQvNCw0YHRgdC40LIgIHRoaXMuc3RhdGljU2hhcGVzID0gW3suLi59LHsuLi59LCDQuCDRgi7QtC5dKi9cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLnB1c2goLi4ubGF5ZXIub2JqZWN0cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy/QlNC+0LHQsNCy0LjQvCDQvtCz0YDQsNC90LjRh9C10L3QuNC1INC/0L4g0LrRgNCw0Y/QvCDQutCw0YDRgtGLLiDQl9CwINC60LDRgNGC0YMg0L3QtdC70YzQt9GPINCy0YvQudGC0LhcclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHt4OjAseTowLHdpZHRoOjEzMDAsaGVpZ2h0OjF9KTtcclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHt4OjAseTowLHdpZHRoOjEsaGVpZ2h0OjEzMDB9KTtcclxuICAgICAgICAvLyB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHt4OjEyODAseTowLHdpZHRoOjEsaGVpZ2h0OjEzMDB9KTtcclxuICAgICAgICB0aGlzLnN0YXRpY1NoYXBlcy5wdXNoKHt4OjEyODAseTowLHdpZHRoOjEzMDAsaGVpZ2h0OjF9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRLaW5lbWF0aWNCb2R5KGJvZHkpe1xyXG4gICAgICAgIHRoaXMuYm9kaWVzLnB1c2goe1xyXG4gICAgICAgICAgICB4OiBib2R5LngsLy/RgdGC0LDRgNGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L/QtdGA0YHQvtC90LDQttCwXHJcbiAgICAgICAgICAgIHk6IGJvZHkueSxcclxuICAgICAgICAgICAgb2JqOiBib2R5LC8v0YHQvtGF0YDQsNC90Y/QtdC8INC/0LXRgNGB0L7QvdCw0LbQsCDRgSDQvdC+0LLRi9C80Lgg0LrQvtC+0YDQtNC40L3QsNGC0LDQvNC4LCDQsdGD0LTQtdC8INGB0YDQsNCy0L3QuNCy0LDRgtGMINC90L7QstGL0LUg0Lgg0YHRgtCw0YDRi9C1INC60L7QvtGA0LTQuNC90LDRgtGLINC/0LXRgNGB0L7QvdCw0LbQsFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpe1xyXG4gICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb24odGltZSk7Ly/RgNCw0YHRgdGH0ZHRgiDQutC+0LvQu9C40LfQuNC4INC/0LXRgNGB0L7QvdCw0LbQtdC5INGB0L4g0YHRgtCw0YLQuNGH0L3Ri9C80Lgg0L7QsdGK0LXQutGC0LDQvNC4INC4INC/0LXRgNGB0L7QvdCw0LbQtdC5INC80LXQttC00YMg0YHQvtCx0L7QuVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ29sbGlzaW9uKHRpbWUpe1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuYm9kaWVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSB0aGlzLmJvZGllc1tpXTtcclxuICAgICAgICAgICAgbGV0IG9sZFggPSBib2R5Lng7XHJcbiAgICAgICAgICAgIGxldCBvbGRZID0gYm9keS55O1xyXG4gICAgICAgICAgICBsZXQgeCA9IGJvZHkub2JqLng7XHJcbiAgICAgICAgICAgIGxldCB5ID0gYm9keS5vYmoueTtcclxuICAgICAgICAgICAgaWYoeD5vbGRYKXsvL21vdmluZyByaWdodFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaChzaGFwZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCAgLy/QldGB0LvQuCDRgdGC0LDRgNGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L3QsNGF0L7QtNGP0YLRgdGPINC/0LXRgNC10LQg0L7QsdGK0LXQutGC0L7QvCoqKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKG9sZFggLSAvL9C60L7QvtGA0LTQuNC90LDRgtCwINC/0LXRgNGB0L7QvdCw0LbQsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDEgKy8v0J/QtdGA0LXQvNC10YnQtdC90LjQtSDQvNC10LbQtNGDINC60LDQtNGA0LDQvNC4INC30LDQvdC40LzQsNC10YIg0LTRgNC+0LHQvdGD0Y4g0YfQsNGB0YLRjCDQv9C40LrRgdC10LvRjywg0YfRgtC+0LHRiyDQutC+0LQg0YDQsNCx0L7RgtCw0Lsg0L7QutGA0YPQs9C70LjQvCDQv9GA0L7RiNC70YPRjiDRgtC+0YfQutGDINC90LAgMSDQv9C40LrRgdC10LvRjCAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIC8v0LrQvtC+0YDQtNC40L3QsNGC0LAg0YTQvtGA0LzRiyDQutC+0LvQu9C40LfQuNC4INCy0L3Rg9GC0YDQuCDQv9C10YDRgdC+0L3QsNC20LAgKNC90LDRh9Cw0LvQvtC8INC+0YLRgdGH0ZHRgtCwINGB0LvRg9C20LjRgiDQu9C10LLRi9C5INCy0LXRgNGF0L3QuNC5INGD0LPQvtC7INC/0LXRgNGB0L7QvdCw0LbQsClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPCBzaGFwZS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyoqKtC4INC90L7QstGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0L3QsNGF0L7QtNGP0YLRgdGPINC/0L7RgdC70LUg0L7QsdGK0LXQutGC0LAsINC30L3QsNGH0LjRgiDQv9C10YDRgdC+0L3QsNC2INGB0YLQvtC70LrQvdGD0LvRgdGPINGBINC/0YDQtdC/0Y/RgtGB0YLQstC40LXQvFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUueCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v0J/QtdGA0YHQvtC90LDQtiDQtNC+0LvQttC10L0g0LrQsNGB0LDRgtGM0YHRjyDQv9GA0LXQv9GP0YLRgdGC0LLQuNGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgKHNoYXBlLnkgKyBzaGFwZS5oZWlnaHQpKSAmJlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgKXsgIC8v0JHQtdGA0LXQvCDQsdC70LjQttCw0LnRiNC40Lkg0L7QsdGK0LXQutGCLCDQs9C00LUg0L7RgdGC0LDQvdC+0LLQuNC8INC/0LXRgNGB0L7QvdCw0LbQsCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9IE1hdGgubWluKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgsIHNoYXBlLngpLy8o0L3QsNCy0LXRgNC90L7QtSDQvNC+0LbQvdC+INCx0YvQu9C+INC/0YDQvtGB0YLQviDQvtGB0YLQsNCy0LjRgtGMINC+0LTQuNC9IHNoYXBlLngpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyhib2R5LGkpOy8v0J/RgNC+0LLQtdGA0Y/QtdC8INC40L3RgtC10YDQsNC60YLQuNCyINGB0L4g0YHRgtCw0YLQuNGH0L3Ri9C80Lgg0L7QsdGK0LXQutGC0LDQvNC4ICjQvdCw0L/RgNC40LzQtdGAINC/0L7RgdC70LUg0L/QvtC/0LDQtNCw0L3QuNGPINCyINC00LXRgNC10LLQviwg0YHRgtGA0LXQu9CwINC90LUg0LTQstC40LbQtdGC0YHRjylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIC8v0JrQvtC70LvQuNC30LjRjyDQv9C10YDRgdC+0L3QsNC20LXQuSDQvNC10LbQtNGDINGB0L7QsdC+0LlcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPHRoaXMuYm9kaWVzLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGFwZSA9IHRoaXMuYm9kaWVzW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGJvZHkgIT0gc2hhcGUpey8v0JXRgdC70Lgg0Y3RgtC+INC90LUg0YLQvtGCINC20LUg0YHQsNC80YvQuSDQvtCx0YrQtdC60YJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKChvbGRYIC0gMSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPCBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSA+IHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLngpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0gTWF0aC5taW4oeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCwgc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlKGJvZHksc2hhcGUsaSxqKTsvL9Cf0YDQvtCy0LXRgNGP0LXQvCDQuNC90YLQtdGA0LDQutGC0LjQsiAo0L3QsNC/0YDQuNC80LXRgCDRgdGC0YDQtdC70LAg0LHRjNGR0YIg0L7RgNC60LAsINC+0YDQuiDQsdGM0ZHRgiDQuNCz0YDQvtC60LAg0Lgg0YIu0LQuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBcclxuXHJcblxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmKHg8b2xkWCl7Ly9tb3ZpbmcgbGVmdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTaGFwZXMuZm9yRWFjaChzaGFwZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCgob2xkWCArIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA+IChzaGFwZS54K3NoYXBlLndpZHRoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngpIDwgKHNoYXBlLngrc2hhcGUud2lkdGgpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCAoc2hhcGUueSArIHNoYXBlLmhlaWdodCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55K2JvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPiBzaGFwZS55KVxyXG4gICAgICAgICAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPSBNYXRoLm1heCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCwgc2hhcGUueCtzaGFwZS53aWR0aCktIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSxpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL9Ca0L7Qu9C70LjQt9C40Y8g0L/QtdGA0YHQvtC90LDQttC10Lkg0LzQtdC20LTRgyDRgdC+0LHQvtC5XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgajx0aGlzLmJvZGllcy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2hhcGUgPSB0aGlzLmJvZGllc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICBpZihib2R5ICE9IHNoYXBlKXsvL9CV0YHQu9C4INGN0YLQviDQvdC1INGC0L7RgiDQttC1INGB0LDQvNGL0Lkg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCgob2xkWCArIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA+IHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55KSA8IChzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0gTWF0aC5tYXgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngsIHNoYXBlLm9iai54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlKGJvZHksc2hhcGUsaSxqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgICAgICAgICBpZih5Pm9sZFkpey8vbW92aW5nIGRvd25cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLmZvckVhY2goc2hhcGU9PntcclxuICAgICAgICAgICAgICAgICAgICBpZigoKG9sZFkgLSAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgPCBzaGFwZS55KSYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUueSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCAoc2hhcGUueCArIHNoYXBlLndpZHRoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCtib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBNYXRoLm1pbih5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCwgc2hhcGUueSktIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkgLSBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSxpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL9Ca0L7Qu9C70LjQt9C40Y8g0L/QtdGA0YHQvtC90LDQttC10Lkg0LzQtdC20LTRgyDRgdC+0LHQvtC5XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgajx0aGlzLmJvZGllcy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2hhcGUgPSB0aGlzLmJvZGllc1tqXTtcclxuICAgICAgICAgICAgICAgICAgICBpZihib2R5ICE9IHNoYXBlKXsvL9CV0YHQu9C4INGN0YLQviDQvdC1INGC0L7RgiDQttC1INGB0LDQvNGL0Lkg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCgob2xkWSAtIDEgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA8IHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUuaGVpZ2h0KSA+IHNoYXBlLm9iai55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLnkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpID4gc2hhcGUub2JqLnggKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgPSBNYXRoLm1pbih5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCwgc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSAtIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tJbnRlcmFjdGl2ZShib2R5LHNoYXBlLGksaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmKHk8b2xkWSl7Ly9tb3ZpbmcgdXBcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljU2hhcGVzLmZvckVhY2goc2hhcGU9PntcclxuICAgICAgICAgICAgICAgICAgICBpZigoKG9sZFkgKyAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPiAoc2hhcGUueStzaGFwZS5oZWlnaHQpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCh5ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPCAoc2hhcGUueStzaGFwZS5oZWlnaHQpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCh4ICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueCkgPCAoc2hhcGUueCArIHNoYXBlLndpZHRoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLngrYm9keS5vYmouY29sbGlzaW9uU2hhcGUud2lkdGgpID4gc2hhcGUueClcclxuICAgICAgICAgICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ID0gTWF0aC5tYXgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnksIHNoYXBlLnkrc2hhcGUuaGVpZ2h0KS0gYm9keS5vYmouY29sbGlzaW9uU2hhcGUueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ludGVyYWN0aXZlV2l0aFN0YXRpYyhib2R5LGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8dGhpcy5ib2RpZXMubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoYXBlID0gdGhpcy5ib2RpZXNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYm9keSAhPSBzaGFwZSl7Ly/QldGB0LvQuCDRjdGC0L4g0L3QtSDRgtC+0YIg0LbQtSDRgdCw0LzRi9C5INC+0LHRitC10LrRglxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigoKG9sZFkgKyAxICsgYm9keS5vYmouY29sbGlzaW9uU2hhcGUueSkgPiBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoeSArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnkpIDwgc2hhcGUub2JqLnkgKyBzaGFwZS5vYmouY29sbGlzaW9uU2hhcGUueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS5oZWlnaHQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS54KSA8IChzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLndpZHRoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoeCArIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnggKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS53aWR0aCkgPiBzaGFwZS5vYmoueCArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS54KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IE1hdGgubWF4KHkgKyBib2R5Lm9iai5jb2xsaXNpb25TaGFwZS55LCBzaGFwZS5vYmoueSArIHNoYXBlLm9iai5jb2xsaXNpb25TaGFwZS55ICsgc2hhcGUub2JqLmNvbGxpc2lvblNoYXBlLmhlaWdodCktIGJvZHkub2JqLmNvbGxpc2lvblNoYXBlLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSW50ZXJhY3RpdmUoYm9keSxzaGFwZSxpLGopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgYm9keS54ID0geDtcclxuICAgICAgICAgICAgYm9keS55ID0geTtcclxuICAgICAgICAgICAgYm9keS5vYmoueCA9IHg7XHJcbiAgICAgICAgICAgIGJvZHkub2JqLnkgPSB5O1xyXG4gICAgICAgIH0vL3RoaXMuYm9kaWVzIGN5Y2xlXHJcbiAgICB9Ly9jaGVja1N0YXRpY1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBjaGVja0ludGVyYWN0aXZlKGJvZHksc2hhcGUsaW5kZXhPZkJvZHksaW5kZXhPZlNoYXBlKXtcclxuICAgICAgICBpZihib2R5Lm9iai5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpICYmIHNoYXBlLm9iai5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpKXsvL9Cf0YDQvtCy0LXRgNC60LAg0L3QsCDRgdC70YPRh9Cw0LksINC10YHQu9C4INC/0L7Qv9Cw0LTRkdGC0YHRjyDQvtCx0YrQtdC60YIg0LHQtdC3INC90LDQt9Cy0LDQvdC40Y9cclxuICAgICAgICAgICAgaWYoYm9keS5vYmoubmFtZSA9PSAnYXJyb3cnICYmIHNoYXBlLm9iai5uYW1lID09ICdvcmMnKXsvL9CV0YHQu9C4INGB0YLRgNC10LvQsCDQutC+0YHQvdGD0LvQsNGB0Ywg0L7RgNC60LBcclxuICAgICAgICAgICAgICAgIC8v0J3QsCDRgdCw0LzQvtC8INC00LXQu9C1INCy0LzQtdGB0YLQviDQtNCy0YPRhSwg0LzQvtC20L3QviDRgdC00LXQu9Cw0YLRjCDQvtC00LjQvSDQstGL0LfQvtCyIHRoaXMucmVtb3ZlKHRoaXMuYm9kaWVzLGluZGV4T2ZCb2R5LGluZGV4T2ZTaGFwZSkuINCd0L4g0LzQvdC1INGC0LDQuiDRg9C00L7QsdC90LXQtSDQvtGC0LvQsNC20LjQstCw0YLRjFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2RpZXM9UmVtb3ZlRnJvbUFycmF5LnJlbW92ZSh0aGlzLmJvZGllcyxpbmRleE9mQm9keSkvL9Ch0YLRgNC10LvQsCDQuNGB0YfQtdC30LDQtdGCLCDRg9C00LDQu9C40YLRjCDQuNC3INC60L7Qu9C70LDQudC00LXRgNCwLCDRg9C00LDQu9C40YLRjCDRgdCw0Lwg0L7QsdGK0LXQutGCXHJcbiAgICAgICAgICAgICAgICBib2R5Lm9iai5kZWxldGUoKTsvL9Cj0LTQsNC70Y/QtdC8INGB0YLRgNC10LvRg1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2RpZXM9UmVtb3ZlRnJvbUFycmF5LnJlbW92ZSh0aGlzLmJvZGllcyxpbmRleE9mU2hhcGUpLy/QntGC0LrQu9GO0YfQuNGC0Ywg0LXQs9C+INC+0YIg0LrQvtC70LvQsNC50LTQtdGA0LAgKNGD0LTQsNC70LjRgtGMINGN0LvQtdC80LXQvdGCINC/0L4g0LjQvdC00LXQutGB0YMg0LjQtyDQvNCw0YHRgdC40LLQsCB0aGlzLmJvZGllcylcclxuICAgICAgICAgICAgICAgIHNoYXBlLm9iai5kZWF0aCgpOyAvL9Ce0YDQuiDQv9C+0LPQuNCx0LDQtdGCXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYoYm9keS5vYmoubmFtZSA9PSAncGxheWVyJyAmJiBzaGFwZS5vYmoubmFtZSA9PSAnb3JjJyl7XHJcbiAgICAgICAgICAgIC8vICAgICBzaGFwZS5vYmouZ290UGxheWVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH0vL2NoZWNrSW50ZXJhY3RpdmVcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgY2hlY2tJbnRlcmFjdGl2ZVdpdGhTdGF0aWMoYm9keSxpbmRleE9mQm9keSl7Ly9cclxuICAgICAgICBpZihib2R5Lm9iai5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpKXsvL9Cf0YDQvtCy0LXRgNC60LAg0L3QsCDRgdC70YPRh9Cw0LksINC10YHQu9C4INC/0L7Qv9Cw0LTRkdGC0YHRjyDQvtCx0YrQtdC60YIg0LHQtdC3INC90LDQt9Cy0LDQvdC40Y9cclxuICAgICAgICAgICAgaWYoYm9keS5vYmoubmFtZSA9PSAnYXJyb3cnKXtcclxuICAgICAgICAgICAgICAgIGJvZHkub2JqLnN0b3AoKTsvL9Ch0YLRgNC10LvQsCDQv9C10YDQtdGB0YLQsNGR0YIg0LTQstC40LPQsNGC0YzRgdGPXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvZGllcz1SZW1vdmVGcm9tQXJyYXkucmVtb3ZlKHRoaXMuYm9kaWVzLGluZGV4T2ZCb2R5KTsvL9GD0LTQsNC70LjRgtGMINC40Lcg0LrQvtC70LvQsNC50LTQtdGA0LBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJleHBvcnQgY2xhc3MgQ29udHJvbFN0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51cCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maXJlID0gZmFsc2U7XG5cbiAgICAgICAgLy/QntCx0YrQtdC60YIgTWFwINC/0YDQtdC+0LHRgNCw0LfRg9C10YIg0LzQsNGB0YHQuNCyINC4INCyINC40YLQvtCz0LU6IHRoaXMua2V5TWFwID0gezM3ID0+IFwibGVmdFwiLCAzOSA9PiBcInJpZ2h0XCIsIDM4ID0+IFwidXBcIiwgNDAgPT4gXCJkb3duXCIsIDMyID0+IFwiZmlyZVwifVxuICAgICAgICB0aGlzLmtleU1hcCA9IG5ldyBNYXAoW1xuICAgICAgICAgICAgWzM3LCdsZWZ0J10sWzM5LCdyaWdodCddLFszOCwndXAnXSxbNDAsJ2Rvd24nXSxbMzIsJ2ZpcmUnXVxuICAgICAgICBdKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgdHJ1ZSkpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4gdGhpcy51cGRhdGUoZXZlbnQsIGZhbHNlKSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGV2ZW50LCBwcmVzc2VkKSB7XG4gICAgICAgIGlmKHRoaXMua2V5TWFwLmhhcyhldmVudC5rZXlDb2RlKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpc1t0aGlzLmtleU1hcC5nZXQoZXZlbnQua2V5Q29kZSldID0gcHJlc3NlZDsvL3RoaXMg0LIg0LTQsNC90L3QvtC8INGB0LvRg9GH0LDQtSDRjdGC0L4gICBDb250cm9sU3RhdGUgPSB7dXA6IHRydWUsIGRvd246IGZhbHNlLMKg4oCmfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4vc2NyZWVuJztcclxuaW1wb3J0IHsgTG9hZGluZ30gZnJvbSAnLi9zY2VuZS9sb2FkaW5nJzsvL9C/0L7RgtC+0LzQvtC6INC60LvQsNGB0YHQsCBTY2VuZVxyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9zY2VuZS9tZW51JzsvL9C/0L7RgtC+0LzQvtC6INC60LvQsNGB0YHQsCBTY2VuZVxyXG5pbXBvcnQgeyBHYW1lTGV2ZWwgfSBmcm9tICcuL3NjZW5lL2dhbWUtbGV2ZWwnOy8v0L/QvtGC0L7QvNC+0Log0LrQu9Cw0YHRgdCwIFNjZW5lXHJcbmltcG9ydCB7IEdhbWVPdmVyIH0gZnJvbSAnLi9zY2VuZS9nYW1lLW92ZXInOy8v0L/QvtGC0L7QvNC+0Log0LrQu9Cw0YHRgdCwIFNjZW5lXHJcbmltcG9ydCB7IEdhbWVXaW4gfSBmcm9tICcuL3NjZW5lL2dhbWUtd2luJzsvL9C/0L7RgtC+0LzQvtC6INC60LvQsNGB0YHQsCBTY2VuZVxyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xyXG5pbXBvcnQgeyBDb250cm9sU3RhdGUgfSBmcm9tICcuL2NvbnRyb2wtc3RhdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWV7XHJcbiAgICAvL9C+0LHRitC10LrRgiBwcm9wcyDQvdC1INC+0LHRj9C30LDRgtC10LvQtdC9LCDQtdGB0LvQuCDQsiDQutC+0L3RgdGC0YDRg9C60YLQvtGAINC90LUg0L/QtdGA0LXQtNCw0LLQsNGC0Ywg0L3QuNC60LDQutC40YUg0L7QsdGK0LXQutGC0L7Qsiwg0L7QvSDQstC+0LfRjNC80ZHRgiDQvtCx0YrQtdC60YIge30g0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cclxuICAgIC8v0K3RgtC+IHt3aWR0aCA9IDY0MCwgaGVpZ2h0ID0gNDgwfSAg0LTQtdGB0YLRgNGD0LrRgtGD0YDQuNGA0YPRjtGJ0LXQtSDQv9GA0LjRgdCy0LDQuNCy0LDQvdC40LVcclxuICAgIGNvbnN0cnVjdG9yKHt3aWR0aCA9IDY0MCwgaGVpZ2h0ID0gNDgwfSA9IHt9KXtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBTY3JlZW4od2lkdGgsaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnNjcmVlbi5sb2FkSW1hZ2VzKHtcclxuXHRcdFx0b3JjOiAnaW1nL29yYy5wbmcnLFxyXG5cdFx0XHRwbGF5ZXI6ICdpbWcvcGxheWVyLnBuZycsXHJcblx0XHRcdHRpdGxlOiAnaW1nL3RpdGxlLmpwZycsXHJcblx0XHRcdHRpbGVzOiAnaW1nL3RpbGVzLnBuZycgICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29udHJvbFN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZXMgPSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IG5ldyBMb2FkaW5nKHRoaXMpLFxyXG4gICAgICAgICAgICBtZW51OiBuZXcgTWVudSh0aGlzKSxcclxuICAgICAgICAgICAgZ2FtZUxldmVsOiBuZXcgR2FtZUxldmVsKHRoaXMpLFxyXG4gICAgICAgICAgICBnYW1lT3ZlcjogbmV3IEdhbWVPdmVyKHRoaXMpLFxyXG4gICAgICAgICAgICBnYW1lV2luOiBuZXcgR2FtZVdpbih0aGlzKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZSA9IHRoaXMuc2NlbmVzLmxvYWRpbmc7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNjZW5lKHN0YXR1cykge1xyXG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU2NlbmUuTE9BREVEOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XHJcbiAgICAgICAgICAgIGNhc2UgU2NlbmUuU1RBUlRfR0FNRTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5nYW1lTGV2ZWw7XHJcbiAgICAgICAgICAgIGNhc2UgU2NlbmUuR0FNRV9PVkVSOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmdhbWVPdmVyO1xyXG4gICAgICAgICAgICBjYXNlIFNjZW5lLkdBTUVfV0lOOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmdhbWVXaW47XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubWVudTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnJhbWUodGltZSl7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzICE9IFNjZW5lLldPUktJTkcpe1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZT10aGlzLmNoYW5nZVNjZW5lKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2NlbmUucmVuZGVyKHRpbWUpO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHRoaXMuZnJhbWUodGltZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bigpe1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHRoaXMuZnJhbWUodGltZSkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVye1xyXG5cclxuICAgIC8vLSDQkiDQutC+0L3RgdGC0YDRg9C60YLQvtGAINC/0LXRgNC10LTQsNC10YLRgdGPINC+0LHRitC10LrRgiDRgSDQv9GD0YLRj9C80Lgg0Log0YTQsNC50LvQsNC8XHJcbiAgICAvLy0gdGhpcy5zY3JlZW4ubG9hZEltYWdlcyh7XHJcbiAgICAvLy0gICAgIG9yYzogJ2ltZy9vcmMucG5nJyxcclxuICAgIC8vLSAgICAgcGxheWVyOiAnaW1nL3BsYXllci5wbmcnLFxyXG4gICAgLy8tICAgICB0aXRsZTogJ2ltZy90aXRsZS5qcGcnLFxyXG4gICAgLy8tICAgICB0aWxlczogJ2ltZy90aWxlcy5wbmcnICAgICAgICAgICAgXHJcbiAgICAvLy0gfSk7XHJcbiAgICBjb25zdHJ1Y3RvcihpbWFnZUZpbGVzKXtcclxuICAgICAgICB0aGlzLmltYWdlRmlsZXMgPSBpbWFnZUZpbGVzO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzPXt9O1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoKXtcclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5pbWFnZUZpbGVzKXtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRJbWFnZShuYW1lLCB0aGlzLmltYWdlRmlsZXNbbmFtZV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTsvL9CR0LvQsNCz0L7QtNCw0YDRjyDQvNC10YLQvtC00YMgYWxsINGD0LTQvtCx0L3QviDRgNCw0LHQvtGC0LDRgtGMINGBINC80LDRgdGB0LjQstC+0Lwg0L7QsdGK0LXQutGC0L7QsiBQcm9taXNlLiDQndCw0L/RgNC40LzQtdGAOiBQcm9taXNlLmFsbChbcDEscDJdKS50aGVuKCgpPT5jb25zb2xlLmxvZygnZG9uZScpKVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJbWFnZShuYW1lLHNyYyl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBpbWFnZTtcclxuICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShuYW1lKTtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vZ2FtZSc7XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT57XHJcbiAgICBjb25zdCBlbHZlblNjb3V0ID0gbmV3IEdhbWUoKTtcclxuICAgIGVsdmVuU2NvdXQucnVuKCk7XHJcbn1cclxuXHJcbi8vIDUtMTYgLS0xMiIsImltcG9ydCB7aXNBZ3Jlc3NpdmV9IGZyb20gJy4vYWlzL2lzQWdyZXNzaXZlJztcclxuaW1wb3J0IHsgVGV4dEluZm8gfSBmcm9tIFwiLi90ZXh0LWluZm9cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2V7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB3YXZlcyl7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLndhdmVzID0gd2F2ZXM7XHJcbiAgICAgICAgdGhpcy50ZXh0SW5mbyA9IG5ldyBUZXh0SW5mbyhnYW1lLnNjcmVlbik7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5nYW1lLnNjcmVlbi5jb250ZXh0O1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gZ2FtZS5jdXJyZW50U2NlbmUucGxheWVyO1xyXG4gICAgICAgIHRoaXMuZmlnaHRUZXh0U2hvd2VkID0gZmFsc2U7Ly/QvdCw0LTQv9C40YHRjCBGaWdodCDQv9C+0LrQsNC20LXRgtGB0Y8g0LvQuNGI0Ywg0L7QtNC40L0g0YDQsNC3XHJcbiAgICAgICAgdGhpcy50aW1lVG9TdXJ2aXZlID0gMjAwMDA7Ly/QldGB0LvQuCDRjdGC0L4g0LLRgNC10LzRjyDQstGL0LnQtNC10YIg0LIg0L3QvtC70YwsINGC0L4g0LjQs9GA0LAg0LfQsNC60L7QvdGH0LjRgtGB0Y8g0L/QvtCx0LXQtNC+0LlcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aEhlYWx0aExpbmUgPSAxNTA7XHJcblxyXG4gICAgICAgIHRoaXMuZW5kT3BhY2l0eSA9IDA7Ly/Qn9GA0Lgg0L/RgNC+0LjQs9GA0YvRiNC1INGN0LrRgNCw0L0g0LTQuNGB0LrRgNC10YLQvdC+LCDRgdGC0YPQv9C10L3Rh9Cw0YLQviwg0YLQtdC80L3QtdC10YIuIDAgLSDQsNCx0YHQvtC70Y7RgtC90L4g0YHQstC10YLQu9C+LCAxIC0g0LDQsdGB0L7Qu9GO0YLQvdC+INGC0LXQvNC90L5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSl7XHJcbiAgICAgICAgaWYodGhpcy5sYXN0VGltZSA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2hvd0hlYWx0aExpbmUoKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIuaGVhbHRoID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5lbmRHYW1lKHRpbWUsJ2xvc2UnKTsvL9Cf0YDQvtC40LPRgNCw0LtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZihpc0FncmVzc2l2ZS5pc09yY0FncmVzc2l2ZSgpKXtcclxuICAgICAgICAgICAgdGhpcy5maWdodFRleHQodGltZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpbWVyKCk7Ly/QntCx0YDQsNGC0L3Ri9C5INC+0YLRgdGH0ZHRglxyXG4gICAgICAgICAgICB0aGlzLnRpbWVUb1N1cnZpdmUgLT0gdGltZSAtIHRoaXMubGFzdFRpbWU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGltZVRvU3Vydml2ZSA8IDAgKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZVRvU3Vydml2ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEdhbWUodGltZSwnd2luJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50ZXh0SW5mby51cGRhdGUodGltZSk7XHJcblxyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZmlnaHRUZXh0KHRpbWUpeyAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmZpZ2h0VGV4dFNob3dlZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZ2h0VGV4dFNob3dlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRJbmZvLnNob3dUZXh0KCdGSUdIVCcsdGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBzaG93SGVhbHRoTGluZSgpe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9ICcjODUyNzI3JztcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJyNiMjNkM2QnO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5yZWN0ICgyMCwxNSwgdGhpcy53aWR0aEhlYWx0aExpbmUsIDEwKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QgKDIwLDE1LCB0aGlzLndpZHRoSGVhbHRoTGluZSoodGhpcy5wbGF5ZXIuaGVhbHRoL3RoaXMucGxheWVyLiBoZWFsdGhTdGFydCksIDEwKTtcclxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93VGltZXIoKXtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KHRoaXMuZ2FtZS5zY3JlZW4ud2lkdGggLSA1MCwgMzAsIC8v0YUsIHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IodGhpcy50aW1lVG9TdXJ2aXZlLzEwMDApLC8vJ3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMik7Ly9mb250c2l6ZVxyXG4gICAgfVxyXG5cclxuICAgIGVuZEdhbWUodGltZSxzdGF0dXMpe1xyXG4gICAgICAgICAgICAvL9Cf0L7RgdGC0LXQv9C10L3QvdC+INC/0L7Rj9Cy0LvRj9C10YLRgdGPINGH0LXRgNC90LDRjyDQt9Cw0YHRgtCw0LLQutCwINC4INGB0L7QvtCx0YnQsNC10Lwg0YHRhtC10L3QtSwg0YfRgtC+INC40LPRgNCwINC30LDQutC+0L3Rh9C10L3QsFxyXG4gICAgICAgICAgICB0aGlzLmVuZE9wYWNpdHkgKz0odGltZSAtIHRoaXMubGFzdFRpbWUpLzEwMDA7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZW5kT3BhY2l0eSA+IDEuNSl7Ly8xLjUsINCwINC90LUgMSwg0YfRgtC+0LHRiyDRh9C10YDQvdCw0Y8g0LfQsNGB0YLQsNCy0LrQsCDQtdGJ0ZEg0L/QvtCy0LjRgdC10LvQsCDQvdC10LzQvdC+0LPQvlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2VuZShzdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IG9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICBpZih0aGlzLmVuZE9wYWNpdHkgPiAwLjI1KSAgb3BhY2l0eSA9MC4yNTtcclxuICAgICAgICAgICAgaWYodGhpcy5lbmRPcGFjaXR5ID4gMC41KSAgb3BhY2l0eSA9MC41O1xyXG4gICAgICAgICAgICBpZih0aGlzLmVuZE9wYWNpdHkgPiAwLjc1KSAgb3BhY2l0eSA9MC43NTtcclxuICAgICAgICAgICAgaWYodGhpcy5lbmRPcGFjaXR5ID4gMSkgIG9wYWNpdHkgPTE7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYigwLDAsMCwnK29wYWNpdHkrJyknO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QgKDAsMCx0aGlzLmdhbWUuc2NyZWVuLndpZHRoLCB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU2NlbmUoc3RhdHVzKXtcclxuICAgICAgICBzd2l0Y2goc3RhdHVzKXtcclxuICAgICAgICAgICAgY2FzZSAnbG9zZSc6cmV0dXJuIHRoaXMuZ2FtZS5jdXJyZW50U2NlbmUuZ2FtZU92ZXJUcmlnZ2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FzZSAnd2luJzpyZXR1cm4gdGhpcy5nYW1lLmN1cnJlbnRTY2VuZS53aW5UcmlnZ2VyID0gdHJ1ZTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEJvZHkgfSBmcm9tIFwiLi9ib2R5XCI7XHJcbmltcG9ydCB7IER1bW15IH0gZnJvbSBcIi4vYWlzL2R1bW15XCI7XHJcbmltcG9ydCB7IEVuZFNjcmlwdCB9IGZyb20gXCIuL2Fpcy9lbmRTY3JpcHRcIjtcclxuaW1wb3J0IHsgUGVhY2VmdWwgfSBmcm9tIFwiLi9haXMvcGVhY2VmdWxcIjtcclxuaW1wb3J0IHsgaXNBZ3Jlc3NpdmV9IGZyb20gJy4vYWlzL2lzQWdyZXNzaXZlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBPcmMgZXh0ZW5kcyBCb2R5IHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllciwgYWlUeXBlID0gJ3BlYWNlZnVsJykgey8v0J/QtdGA0LXQtNCw0ZHQvCDQuNCz0YDQvtC60LAsINGH0YLQvtCx0Ysg0L7RgNC6INC80L7QsyDRgdC70LXQtNC40YLRjCDQt9CwINC90LjQvCDQuCDQsNGC0LDQutC+0LLQsNGC0Ywg0LXQs9C+IFxyXG4gICAgICAgIHN1cGVyKHtpbWFnZU5hbWU6IFwib3JjXCIsIHNwZWVkOiA4MH0pO1xyXG4gICAgICAgIGlmIChhaVR5cGUgPT0gJ2R1bW15Jyl0aGlzLmFpID0gbmV3IER1bW15KCk7XHJcbiAgICAgICAgaWYgKGFpVHlwZSA9PSAnZW5kU2NyaXB0Jyl0aGlzLmFpID0gbmV3IEVuZFNjcmlwdCgpO1xyXG4gICAgICAgIGlmIChhaVR5cGUgPT0gJ3BlYWNlZnVsJyl0aGlzLmFpID0gbmV3IFBlYWNlZnVsKHBsYXllcik7ICAgXHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9ICdvcmMnOy8v0JTQu9GPINC60L7Qu9C70LDQudC00LXRgNCwLCDRh9GC0L4g0L7Qv9C+0LfQvdCw0YLRjCDRjdGC0L7RgiDQvtCx0YrQtdC60YJcclxuICAgICAgICB0aGlzLmFpLmNvbnRyb2wodGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5nb3RQbGF5ZXIgPSBmYWxzZTsvL9CV0YHQu9C4INC+0YDQuiDQstC+0LfQu9C1INC40LPRgNC+0LrQsCwg0YLQviB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICBpZih0aGlzLmFpKXtcclxuICAgICAgICAgICAgdGhpcy5haS51cGRhdGUodGltZSk7Ly/QldGB0LvQuCDQmNCYINC90LUg0L7RgtC60LvRjtGH0LXQvVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlci51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhdGgoKXtcclxuICAgICAgICB0aGlzLmFpID0gbnVsbDsvL9Ce0YLQutC70Y7Rh9Cw0LXQvCDQmNCYXHJcbiAgICAgICAgaXNBZ3Jlc3NpdmUuYmVjb21lQWdyZXNzaXZlKCk7XHJcbiAgICAgICAgc3VwZXIuZGVhdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxufSIsImltcG9ydCB7IEJvZHkgfSBmcm9tIFwiLi9ib2R5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQm9keXsgLy9QbGF5ZXIgLT4gQm9keSB+IENoYXJhY3RlclNoZWV0IC0+IFNwcml0ZVNoZWV0IH4gU3ByaXRlXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sLCBnYW1lX2xldmVsKXsvL2NvbnRyb2wgLSDRg9C/0YDQsNCy0LvQtdC90LjQtSDQutC70LDQstC40LDRgtGD0YDQvtC5XHJcbiAgICAgICAgc3VwZXIoe2ltYWdlTmFtZToncGxheWVyJywgc3BlZWQ6IDE1MH0pO1xyXG4gICAgICAgIHRoaXMuY29udHJvbD1jb250cm9sO1xyXG4gICAgICAgIHRoaXMuZ2FtZV9sZXZlbCA9IGdhbWVfbGV2ZWw7XHJcbiAgICAgICAgdGhpcy5hcnJvdyA9IGZhbHNlOy8v0J/QvtC30LLQvtC70Y/QtdC8INGB0YLRgNC10LvRj9GC0Ywg0YLQvtC70YzQutC+INC10YHQu9C4INC90LAg0YDRg9C60LDRhSDQtdGB0YLRjCDRgdGC0YDQtdC70LBcclxuICAgICAgICB0aGlzLnRpbWVBcnJvdyA9IDEwMDAvLyDQmtC+0L3RgdGC0LDQvdGC0LAsINCy0YDQtdC80Y8g0LzQtdC20LTRgyDQv9C+0Y/QstC70LXQvdC40LXQvCDRgdC70LXQtNGD0Y7RidC10Lkg0YHRgtGA0LXQu9GLLCDRh9GC0L7QsdGLINGB0YLRgNC10LvRiyDQvdC1INGB0L7Qt9C00LDQstCw0LvQuNGB0Ywg0LrQsNC6INC40Lcg0L/Rg9C70LXQvNGR0YLQsFxyXG4gICAgICAgIHRoaXMudGltZXJGb3JDcmVhdGluZ0Fycm93ID0gMDsvL9Ci0LDQudC80LXRgCDQtNC70Y8g0YHRgtGA0LXQu1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWVGb3JBcnJvdyA9IDA7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gJ3BsYXllcic7Ly/QlNC70Y8g0LrQvtC70LvQsNC50LTQtdGA0LAsINGH0YLQviDQvtC/0L7Qt9C90LDRgtGMINGN0YLQvtGCINC+0LHRitC10LrRglxyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aFN0YXJ0ID0gMzsvL9Cd0LDRh9Cw0LvRjNC90L7QtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQttC40LfQvdC10LlcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IHRoaXMuaGVhbHRoU3RhcnQ7XHJcblxyXG4gICAgICAgIHRoaXMudW5kZWFkID0gMTAwMDsvL9Ca0L7QvdGB0YLQsNC90YLQsCDQstGA0LXQvNC10L3QuCDQsdC10YHRgdC80LXRgNGC0LjRjywg0L/QvtGB0LvQtSDQv9C+0LvRg9GH0LXQvdC40Y8g0YPRgNC+0L3QsCDQuNCz0YDQvtC6INCx0LXRgdGB0LzQtdGA0YLQtdC9XHJcbiAgICAgICAgdGhpcy50aW1lclVuZGVhZCA9IC0xOy8q0KLQsNC50LzQtdGAINC00LvRjyDQvtCx0YDQsNGC0L3QvtCz0L4g0L7RgtGB0YfRkdGC0LAuINCV0YHQu9C4INC+0L0g0YDQsNCy0LXQvSDQtNC40LDQv9Cw0LfQvtC90YMg0L7RgiAwINC00L4gdGhpcy51bmRlYWQsINC30L3QsNGH0LjRgiDQuNC00ZHRgiDQvtCx0YDQsNGC0L3Ri9C5INC+0YLRgdGH0ZHRgiDQuCDQuNCz0YDQvtC6INCx0LXRgdGB0LzQtdGA0YLQtdC9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JXRgdC70LggLTEsINC40LPRgNC+0Log0LzQvtC20LXRgiDQv9C+0LvRg9GH0LjRgtGMINGD0YDQvtC9Ki9cclxuICAgICAgICB0aGlzLmxhc3RUaW1lRm9yVW5kZWFkID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRBcnJvdyhhcnJvdyl7XHJcbiAgICAgICAgdGhpcy5hcnJvdyA9IGFycm93O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhpdCgpey8v0JjQs9GA0L7QuiDQv9C+0LvRg9GH0LjQuyDRg9C00LDRgFxyXG4gICAgICAgIGlmKHRoaXMudGltZXJVbmRlYWQgPT09IC0xKXsvL9CV0YHQu9C4INC40LPRgNC+0Log0YHQvNC10YDRgtC10L1cclxuICAgICAgICAgICAgaWYodGhpcy5oZWFsdGg+MClcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09MTtcclxuICAgICAgICAgICAgdGhpcy50aW1lclVuZGVhZCA9IHRoaXMudW5kZWFkOy8v0JTQtdC70LDQtdC8INC40LPRgNC+0LrQsCDQsdC10YHRgdC80LXRgNGC0L3Ri9C8INC90LAg0LLRgNC10LzRj1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIGlmKHRoaXMubGFzdFRpbWVGb3JBcnJvdyA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWVGb3JBcnJvdyA9IHRpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmxhc3RUaW1lRm9yVW5kZWFkID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZUZvclVuZGVhZCA9IHRpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmNvbnRyb2wuZmlyZSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVyRm9yQ3JlYXRpbmdBcnJvdyA9PT0gMCl7Ly/QldGB0LvQuCDRgdGC0YDQtdC70YMg0LzQvtC20L3QviDRgdC+0LfQtNCw0LLQsNGC0YxcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJGb3JDcmVhdGluZ0Fycm93ID0gdGhpcy50aW1lQXJyb3c7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVfbGV2ZWwuc2hvb3RpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYXJyb3cpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9vdCh0aGlzLmFycm93KTsvL9CY0YHQv9C+0LvRjNC30L7QstCw0YLRjCDQuNC80LXQvdC90L4g0Y3RgtGDINGB0YLRgNC10LvRgywg0YIu0LouINC/0LXRgNGB0L7QvdCw0LYg0LzQvtC20LXRgiDQuNC80LXRgtGMINGA0LDQt9C90YvQtSDRgdGC0YDQtdC70YtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5jb250cm9sLnVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FsayhcInVwXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRyb2wuZG93bikge1xyXG4gICAgICAgICAgICB0aGlzLndhbGsoXCJkb3duXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRyb2wubGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLndhbGsoXCJsZWZ0XCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRyb2wucmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy53YWxrKFwicmlnaHRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFuZCh0aGlzLnZlbG9jaXR5LmRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnRpbWVyRm9yQ3JlYXRpbmdBcnJvdyA+IDApXHJcbiAgICAgICAgICAgIHRoaXMudGltZXJGb3JDcmVhdGluZ0Fycm93IC09KHRpbWUgLSB0aGlzLmxhc3RUaW1lRm9yQXJyb3cpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy50aW1lckZvckNyZWF0aW5nQXJyb3cgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmxhc3RUaW1lRm9yQXJyb3cgPSB0aW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMudGltZXJVbmRlYWQgIT0gLTEpey8v0JjQs9GA0L7QuiDQsdC10YHRgdC80LXRgNGC0LXQvSwgdGhpcy50aW1lclVuZGVhZCA+IDBcclxuICAgICAgICAgICAgdGhpcy50aW1lclVuZGVhZCAtPSh0aW1lIC0gdGhpcy5sYXN0VGltZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyVW5kZWFkIDwgMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyVW5kZWFkID0gLTE7Ly/QmNCz0YDQvtC6INGB0L3QvtCy0LAg0YHQvNC10YDRgtC10L1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sYXN0VGltZUZvclVuZGVhZCA9IHRpbWU7XHJcblxyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSh0aW1lKTtcclxuICAgIH0vL3VwZGF0ZVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vdmVjdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdGlsZXsvL9CV0LPQviDRgNCw0YHRiNC40YDRj9C10YIgcHJvamVjdGlsZXMvYXJyb3cuanNcclxuICAgIGNvbnN0cnVjdG9yKGRpcmVjdGlvbixzcGVlZCwgeCwgeSl7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3Rvcih0aGlzLmRpcmVjdGlvbixzcGVlZCk7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTsvL9CV0YHQu9C4INGB0YLRgNC10LvQsCDQsNC60YLQuNCy0L3QsCwg0L7QvdCwINC+0YLQvtCx0YDQsNC20LDQtdGC0YHRjyDRh9C10YDQtdC3IHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSDQuCDQu9C10YLQuNGCINCyINGG0LXQu9GMLiDQkCDQstC+0L7QsdGJ0LUg0YHRgtGA0LXQu9CwINCyINC90LXQstC40LTQuNC80L7QvCDRgdC+0YHRgtC+0Y/QvdC40Lgg0LLRgdC10LPQtNCwINC90LDRhdC+0LTQuNGC0YHRjyDQvdCwINGN0LrRgNCw0L3QtVxyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uU2hhcGU9IHt4OjI3LHk6Mjcsd2lkdGg6MTAsaGVpZ2h0OjEwfTsvL9Cd0YPQttC90L4g0LTQu9GPINC60L7Qu9C70LDQudC00LXRgNCwICjRgNCw0YHRh9GR0YIg0YHRgtC+0LvQutC90L7QstC10L3QuNC5KS4g0KDQsNC30LzQtdGAINGB0L/RgNCw0LnRgtCwIDY00YU2NFxyXG4gICAgICAgIHRoaXMuZGVsZXRlZCA9IGZhbHNlOy8v0KDQvtC00LjRgtC10LvRjCDQsdGD0LTQtdGCINC+0YLRgdC70LXQttC40LLQsNGC0Ywg0Y3RgtGDINC/0LXRgNC10LzQtdC90L3Rg9GOLCDQtdGB0LvQuCDQvtC90LAgdHJ1ZSwg0LfQvdCw0YfQuNGCINGA0L7QtNC40YLQtdC70Ywg0YPQtNCw0LvQuNGCINGN0YLQvtGCINC+0LHRitC10LrRglxyXG4gICAgfVxyXG5cclxuICAgIGZseSh4LHksZGlyZWN0aW9uKXtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9eTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCl7Ly/Qn9GA0Lgg0L/QvtC/0LDQtNCw0L3QuNC4INCyINGB0YLQsNGC0LjRh9C90L7QtSDQv9GA0LXQv9GP0YLRgdGC0LLQuNC1LCBwcm9qZWN0aWxlINGC0LXRgNGP0LXRgiDRgdC60L7RgNC+0YHRgtGMXHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IodGhpcy5kaXJlY3Rpb24sdGhpcy5zcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKCl7XHJcbiAgICAgICAgdGhpcy5kZWxldGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUodGltZSl7XHJcbiAgICAgICAgaWYodGhpcy5sYXN0VGltZSA9PSAwKXsvL9CY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPICB0aGlzLmxhc3RUaW1lXHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkubW92ZSh0aGlzLCB0aW1lIC0gdGhpcy5sYXN0VGltZSk7XHJcbiAgICAgICAgdGhpcy52aWV3LnNldFhZKE1hdGgudHJ1bmModGhpcy54KSwgTWF0aC50cnVuYyh0aGlzLnkpKTsvL9Cd0LAg0Y3RgtC+0Lwg0Y3RgtCw0L/QtSDQv9C+0LrQsCDQvdC1INC40LfQstC10YHRgtC90L4g0YfRgtC+INGN0YLQviDQsdGD0LTQtdGCINGB0L/RgNCw0LnRgiDQuNC70Lgg0LDQvdC40LzQsNGG0LjRj1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHJvamVjdGlsZSB9IGZyb20gXCIuLi9wcm9qZWN0aWxlXCI7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcIi4uL3Nwcml0ZS1zaGVldFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFycm93IGV4dGVuZHMgUHJvamVjdGlsZXtcclxuICAgIGNvbnN0cnVjdG9yKGRpcmVjdGlvbiwgc3BlZWQsIHgsIHkpe1xyXG4gICAgICAgIHN1cGVyKGRpcmVjdGlvbixzcGVlZCx4ICx5KTtcclxuICAgICAgICB0aGlzLnNwcml0ZXM9IHt9O1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdhcnJvdyc7Ly/QlNC70Y8g0LrQvtC70LvQsNC50LTQtdGA0LAsINGH0YLQviDQvtC/0L7Qt9C90LDRgtGMINGN0YLQvtGCINC+0LHRitC10LrRglxyXG4gICAgICAgIGNvbnN0IHRpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHtcclxuICAgICAgICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxyXG4gICAgICAgICAgICBpbWFnZVdpZHRoOjY0MCxcclxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQ6NjQwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzWydsZWZ0J10gPSB0aWxlcy5nZXRTcHJpdGUgKDM2KTtcclxuICAgICAgICB0aGlzLnNwcml0ZXNbJ3JpZ2h0J10gPSB0aWxlcy5nZXRTcHJpdGUgKDM3KTtcclxuICAgICAgICB0aGlzLnNwcml0ZXNbJ2Rvd24nXSA9IHRpbGVzLmdldFNwcml0ZSAoNDYpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlc1sndXAnXSA9IHRpbGVzLmdldFNwcml0ZSAoNDcpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25dOy8v0JrQsNC60L7QuSDRgdC/0YDQsNC50YIg0YHRgtGA0LXQu9GLINC+0YLQvtCx0YDQsNC30LjRgtGMINC30LDQstC40YHQuNGCINC+0YIg0L3QsNC/0YDQsNCy0LvQtdC90LjRjyDQv9C10YDRgdC+0L3QsNC20LBcclxuICAgIH1cclxuXHJcbiAgICBmbHkoeCx5LGRpcmVjdGlvbil7XHJcbiAgICAgICAgc3VwZXIuZmx5KHgseSxkaXJlY3Rpb24pO1xyXG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25dO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFJlbW92ZUZyb21BcnJheXtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVtb3ZlIChhcnIsIGluZGV4ZXMpIHsvL9Cj0LTQsNC70LjRgtGMINGN0LvQtdC80LXQvdGC0Ysg0LjQtyDQvNCw0YHRgdC40LLQsCDQv9C+INC40L3QtNC10LrRgdGDXHJcbiAgICAgICAgLy9hcmd1bWVudHMgLSDQv9GB0LXQstC00L4g0LzQsNGB0YHQuNCyLCDQsiDQutC+0YLQvtGA0L7QvCDRhdGA0LDQvdGP0YLRgdGPINCy0YHQtSDQsNGA0LPRg9C80LXQvdGC0YssINC/0LXRgNC10LTQsNC90L3Ri9C1INCyINGE0YPQvdC60YbQuNGOXHJcbiAgICAgICAgLy9bXS5zbGljZSgpIC0g0YHQvtC30LTQsNC10YIg0L/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslxyXG4gICAgICAgIC8qYXJyYXlPZkluZGV4ZXMgLSDQvNCw0YHRgdC40LIsINC60L7RgtC+0YDRi9C5INGB0L7QtNC10YDQttC40YIg0LLRgdC1INCw0YDQs9GD0LzQtdC90YLRiyAo0LrRgNC+0LzQtSDQv9C10YDQstC+0LPQvikg0L/QtdGA0LXQtNCw0L3QvdGL0LUg0LIg0YTRg9C90LrRhtC40Y5cclxuICAgICAgICAgICDQrdGC0L4g0LzQsNGB0YHQuNCyINC40L3QtNC10LrRgdC+0LIsINC60L7RgtC+0YDRi9C1INC90YPQttC90L4g0YPQtNCw0LvQuNGC0Ywg0LjQtyDQvtGB0L3QvtCy0L3QvtCz0L4g0LzQsNGB0YHQuNCy0LAgYXJyKi9cclxuICAgICAgICB2YXIgYXJyYXlPZkluZGV4ZXMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcblxyXG4gICAgICAgIC8v0JLQtdGA0L3Rg9GC0Ywg0L7RgtGE0LjQu9GM0YLRgNC+0LLQsNC90L3Ri9C5INC80LDRgdGB0LjQslxyXG4gICAgICAgIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8v0J3QsNC/0YDQuNC80LXRgCBhcnJheU9mSW5kZXhlcyA9IFsxXSwg0YLQviDQtdGB0YLRjCDQvdGD0LbQvdC+INGD0LTQsNC70LjRgtGMINC+0LTQuNC9INGN0LvQtdC80LXQvdGCINC/0L4g0LjQvdC00LXQutGB0YMgMVxyXG4gICAgICAgICAgICAvL2luZGV4T2YgLSDQstC+0LfQstGA0LDRidCw0LXRgiDQuNC90LTQtdC60YEg0LjRgdC60L7QvNC+0LPQviDRjdC70LXQvNC10L3RgtCwLiDQndCw0L/RgNC40LzQtdGAOiBbJ2EnLCdiJ10uaW5kZXhPZignYicpIC8vLT4gMVxyXG4gICAgICAgICAgICAvL9Ca0LDQttC00YvQuSDRjdC70LXQvNC10L3RgiDQvNCw0YHRgdC40LLQsCBhcnIg0YHQstC10YDRj9C10YIg0YHQstC+0Lkg0LjQvdC00LXQutGBINGBINC40L3QtNC10LrRgdCw0LzQuCDQsiBhcnJheU9mSW5kZXhlcy5cclxuICAgICAgICAgICAgLy/QldGB0LvQuCDQtdCz0L4g0LjQvdC00LXQutGB0LAg0LIgYXJyYXlPZkluZGV4ZXMg0L3QtdGCLCDRgtC+INC80LXRgtC+0LQgaW5kZXhPZiDQstC10YDQvdGR0YIgLTEsINC30L3QsNGH0LjRgiDQsdGD0LTQtdGCIHRydWUg0Lgg0Y3Qu9C10LzQtdC90YIg0L3QtSDQsdGD0LTQtdGCINGD0LTQsNC70ZHQvSDQuNC3INC80LDRgdGB0LjQstCwXHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheU9mSW5kZXhlcy5pbmRleE9mKGluZGV4KSA9PSAtMTtcclxuICAgICAgICB9KTtcclxuICAgIH0vL3JlbW92ZVxyXG59IiwiZXhwb3J0IGNsYXNzIFNjZW5ley8v0JHQsNC30L7QstGL0Lkg0LrQu9Cw0YHRgSDQstGB0LXRhSDRgdGG0LXQvVxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSl7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IFdPUktJTkcoKSB7IHJldHVybiAnV09SS0lORyc7IH1cclxuICAgIHN0YXRpYyBnZXQgTE9BREVEKCkgeyByZXR1cm4gJ0xPQURFRCc7IH1cclxuICAgIHN0YXRpYyBnZXQgU1RBUlRfR0FNRSgpIHsgcmV0dXJuICdTVEFSVF9HQU1FJzsgfVxyXG4gICAgc3RhdGljIGdldCBHQU1FX09WRVIoKSB7IHJldHVybiAnR0FNRV9PVkVSJzsgfVxyXG4gICAgc3RhdGljIGdldCBHQU1FX1dJTigpIHsgcmV0dXJuICdHQU1FX1dJTic7IH1cclxuICAgIHN0YXRpYyBnZXQgRklOSVNIRUQoKSB7IHJldHVybiAnRklOSVNIRUQnOyB9XHJcblxyXG4gICAgaW5pdCgpey8v0JTQu9GPINC30LDQv9GD0YHQutCwINC4INC/0LXRgNC10LfQsNC/0YPRgdC60LAg0YHRhtC10L3Riywg0YfRgtC+0LHRiyDQstC10YDQvdGD0YLRjCDQv9Cw0YDQsNC80LXRgtGA0Ysg0LIg0L/QtdCy0L7QvdCw0YfQsNC70YzQvdC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLldPUktJTkc7XHJcbiAgICB9XHJcblxyXG4gICAgZmluaXNoKHN0YXR1cykgey8v0JzQtdGC0L7QtCDQtNC70Y8g0LfQsNCy0LXRgNGI0LXQvdC40Y8g0YHRhtC10L3Ri1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAodGltZSl7Ly/QvtGC0YDQuNGB0L7QstC60LAg0LTQu9GPINCy0YHQtdGFINGB0YbQtdC9ICjQvdCw0L/RgNC40LzQtdGAINGB0YfQtdGC0YfQuNC6IGZwcylcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1NjZW5lfSBmcm9tICcuLi9zY2VuZSc7XHJcbmltcG9ydCB7U3ByaXRlU2hlZXR9IGZyb20gJy4uL3Nwcml0ZS1zaGVldCc7XHJcbmltcG9ydCB7UGxheWVyfSBmcm9tICcuLi9wbGF5ZXInO1xyXG5pbXBvcnQge0NhbWVyYX0gZnJvbSAnLi4vY2FtZXJhJztcclxuaW1wb3J0IHtDb2xsaWRlcn0gZnJvbSAnLi4vY29sbGlkZXInO1xyXG5pbXBvcnQge0Fycm93fSBmcm9tICcuLi9wcm9qZWN0aWxlcy9hcnJvdyc7XHJcbi8vIGltcG9ydCB7VGV4dEluZm99IGZyb20gJy4uL3RleHQtaW5mbyc7XHJcbmltcG9ydCB7IFdhdmVzIH0gZnJvbSAnLi4vd2F2ZXMnO1xyXG5pbXBvcnQgeyBJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1JlbW92ZUZyb21BcnJheX0gZnJvbSAnLi4vcmVtb3ZlLWZyb20tYXJyYXknO1xyXG5pbXBvcnQgeyBpc0FncmVzc2l2ZX0gZnJvbSAnLi4vYWlzL2lzQWdyZXNzaXZlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lTGV2ZWwgZXh0ZW5kcyBTY2VuZXtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMudGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xyXG4gICAgICAgICAgICBpbWFnZU5hbWU6ICd0aWxlcycsXHJcbiAgICAgICAgICAgIGltYWdlV2lkdGg6NjQwLFxyXG4gICAgICAgICAgICBpbWFnZUhlaWdodDo2NDBcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLnRyZWUgPSB0aGlzLnRpbGVzLmdldFNwcml0ZSg3KTtcclxuICAgICAgICAvLyB0aGlzLnRyZWUuc2V0WFkoMTAsMTApO1xyXG5cclxuICAgICAgICAvLyB0aGlzLm9yYyA9IG5ldyBPcmMoKTtcclxuICAgICAgICAvLyB0aGlzLm9yYy54ID0gMTAwO1xyXG4gICAgICAgIC8vIHRoaXMub3JjLnkgPSAxMDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKXtcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcblxyXG4gICAgICAgIGlzQWdyZXNzaXZlLmJlY29tZVBlYWNlZnVsKCk7Ly/QodC00LXQu9Cw0YLRjCDQvtGA0LrQvtCyINC80LjRgNC90YvQvNC4XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmdhbWUuY29udHJvbCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIueCA9IDk5MDtcclxuICAgICAgICB0aGlzLnBsYXllci55PSAxMDQwO1xyXG5cclxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKCk7Ly/Qo9GH0LjRgtGL0LLQsNC10YIg0LLQt9Cw0LjQvNC+0LTQtdC50YHRgtCy0LjQtSDQvNC10LbQtNGDINC+0LHRitC10LrRgtCw0LzQuCwg0L3QsNC/0YDQuNC80LXRgCwg0L3QtSDQtNCw0ZHRgiDQv9GA0L7RhdC+0LTQuNGC0Ywg0L7QsdGK0LXQutGC0LDQvCDRgdC60LLQvtC30Ywg0LTRgNGD0LMg0LTRgNGD0LPQsFxyXG5cclxuICAgICAgICAvL9CY0YHQv9C+0LvRjNC30YPQtdC8IHdlYnBhY2sg0L/QvtGN0YLQvtC80YMg0LfQsNCz0YDRg9C30YfQuNC6IGpzb24g0YTQsNC50LvQvtCyINGA0LDQsdC+0YLQsNC10YIg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cclxuICAgICAgICBjb25zdCBtYXBEYXRhID0gcmVxdWlyZSAoJy4uL21hcHMvbGV2ZWwxLmpzb24nKTsgXHJcbiAgICAgICAgdGhpcy5tYXAgPSB0aGlzLmdhbWUuc2NyZWVuLmNyZWF0ZU1hcCgnbGV2ZWwxJyxtYXBEYXRhLHRoaXMudGlsZXMpOy8vY3JlYXRlTWFwINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC+0LHRitC10LrRgiBUaWxlTWFwXHJcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhID0gbmV3IENhbWVyYSh7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLmdhbWUuc2NyZWVuLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuZ2FtZS5zY3JlZW4uaGVpZ2h0LFxyXG4gICAgICAgICAgICBsaW1pdFg6IHRoaXMubWFwLndpZHRoIC0gdGhpcy5nYW1lLnNjcmVlbi53aWR0aCxcclxuICAgICAgICAgICAgbGltaXRZOiB0aGlzLm1hcC5oZWlnaHQgLSB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS5zcGVjaWFsUG9zaXRpb24oKTsvL9CX0LDQs9C90LDRgtGMINC60LDQvNC10YDRgyDQsiDRgdCw0LzRi9C5INGD0LPQvtC7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLndhdGNoKHRoaXMucGxheWVyKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnNldENhbWVyYSh0aGlzLm1haW5DYW1lcmEpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbGxpZGVyLmFkZFN0YXRpY1NoYXBlcyhtYXBEYXRhKTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVyLmFkZEtpbmVtYXRpY0JvZHkodGhpcy5wbGF5ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLm9yY0FybXkgPVtdOy8v0JzQsNGB0YHQuNCyINC+0YDQutC+0LIsINC90L7QstGL0LUg0YHRgtGA0LXQu9GLINCx0YPQtNGD0YIg0LTQvtCx0LDQstC70Y/RgtGM0YHRjyDRgdGO0LTQsCwg0LAg0LzQtdGC0L7QtCByZW5kZXIg0LHRg9C00LXRgiDQvtGC0YDQuNGB0L7QstGL0LLQsNGC0Ywg0LLRgdC1INC+0LHRitC10LrRgtGLINC40Lcg0Y3RgtC+0LPQviDQvNCw0YHRgdC40LLQsFxyXG4gICAgICAgIHRoaXMud2F2ZXMgPSBuZXcgV2F2ZXModGhpcy5nYW1lKTsvL9Ca0L7QvdGC0YDQvtC70LjRgNGD0LXRgiDQv9C+0Y/QstC70LXQvdC40LUg0L/RgNC+0YLQuNCy0L3QuNC60L7QslxyXG4gICAgICAgIHRoaXMud2F2ZXMuaW5pdCgpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnRleHRJbmZvID0gbmV3IFRleHRJbmZvKHRoaXMuZ2FtZS5zY3JlZW4pOy8v0JLRi9GB0LrQsNC60LjQstCw0Y7RidC40LUg0YLQtdC60YHRgtC+0LLRi9C1INC90LDQtNC/0LjRgdC4LCDQvdCw0L/RgNC40LzQtdGAIFwiV2F2ZSMxXCJcclxuICAgICAgICB0aGlzLmludGVyZmFjZSA9IG5ldyBJbnRlcmZhY2UodGhpcy5nYW1lLCB0aGlzLndhdmVzKTsvL9Co0LrQsNC70LAg0LfQtNC+0YDQvtCy0YzRjywg0YLQsNC50LzQtdGAINCyINGD0LPQu9GDINGN0LrRgNCw0L3QsFxyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMgPSBbXTsvL9Cc0LDRgdGB0LjQsiDRgdGC0YDQtdC7LCDQvdC+0LLRi9C1INGB0YLRgNC10LvRiyDQsdGD0LTRg9GCINC00L7QsdCw0LLQu9GP0YLRjNGB0Y8g0YHRjtC00LAsINCwINC80LXRgtC+0LQgcmVuZGVyINCx0YPQtNC10YIg0L7RgtGA0LjRgdC+0LLRi9Cy0LDRgtGMINCy0YHQtSDQvtCx0YrQtdC60YLRiyDQuNC3INGN0YLQvtCz0L4g0LzQsNGB0YHQuNCy0LBcclxuICAgICAgICB0aGlzLmdhbWVPdmVyVHJpZ2dlciA9IGZhbHNlOy8v0JXRgdC70LggaW50ZXJmYWNlINGB0LTQtdC70LDQtdGCINGN0YLRgyDQv9C10YDQtdC80LXQvdC90YPRjiB0cnVlLCDQv9C10YDQtdGF0L7QtNC40Lwg0Log0L/RgNC+0LjQs9GA0YvRiNC90L7QuSDRgdGG0LXQvdC1XHJcbiAgICAgICAgdGhpcy53aW5UcmlnZ2VyID0gZmFsc2U7Ly/QldGB0LvQuCBpbnRlcmZhY2Ug0YHQtNC10LvQsNC10YIg0Y3RgtGDINC/0LXRgNC10LzQtdC90L3Rg9GOIHRydWUsINC/0LXRgNC10YXQvtC00LjQvCDQuiDQv9C+0LHQtdC00L3QvtC5INGB0YbQtdC90LVcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKXtcclxuICAgICAgICBpZih0aGlzLmdhbWVPdmVyVHJpZ2dlcil7Ly/Ql9Cw0LrQvtC90YfQuNC8INC40LPRgNGDXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoKFNjZW5lLkdBTUVfT1ZFUik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLndpblRyaWdnZXIpey8v0JfQsNC60L7QvdGH0LjQvCDQuNCz0YDRg1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaChTY2VuZS5HQU1FX1dJTik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLm9yYy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKHRpbWUpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnByb2plY3RpbGVzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RpbGVzLmZvckVhY2goKGFycm93LGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgaWYoYXJyb3cuYWN0aXZlKXsvL2FjdGl2ZSDRgdGC0LDQvdC+0LLQuNGC0YHRjyB0cnVlINCyINC80LXRgtC+0LTQtSBQbGF5ZXIgLT4gQm9keS5zaG9vdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoYXJyb3cuZGVsZXRlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0aWxlcyA9IFJlbW92ZUZyb21BcnJheS5yZW1vdmUodGhpcy5wcm9qZWN0aWxlcyxpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5vcmNBcm15Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLm9yY0FybXkuZm9yRWFjaChvcmM9PntcclxuICAgICAgICAgICAgICAgIG9yYy51cGRhdGUodGltZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYoIXRoaXMub3JjQWdyZXNzaXZlKXsvL9CV0YHQu9C4INC+0YDQutC4INC90LUg0LDQs9GA0LXRgdGB0LjQstC90YssINC/0YDQvtCy0LXRgNGP0LXQvCDQvdC1INGB0L/RgNC+0LLQvtGG0LjRgNC+0LLQsNC90Ysg0LvQuCDQvtC90LhcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZighb3JjLmFpKXsvL9CV0YHQu9C4INGDINC60L7Qs9C+LdGC0L4g0LjQtyDQvtGA0LrQvtCyINC+0YLQutC70Y7Rh9C10L0g0JjQmCwg0LfQvdCw0YfQuNGCINC+0L0g0YPQsdC40YJcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5vcmNBZ3Jlc3NpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHRoaXMubWFpbkNhbWVyYS51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbCgnIzAwMDAwMCcpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLm1hcCk7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMudHJlZSk7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMub3JjLnZpZXcpO1xyXG4gICAgICAgIGlmKHRoaXMub3JjQXJteS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5vcmNBcm15LmZvckVhY2gob3JjPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUob3JjLnZpZXcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnBsYXllci52aWV3KTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnByb2plY3RpbGVzLmxlbmd0aCA+IDApey8v0J7RgtGA0LjRgdC+0LLQutCwINGB0YLRgNC10LtcclxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0aWxlcy5mb3JFYWNoKGFycm93PT57XHJcbiAgICAgICAgICAgICAgICBpZihhcnJvdy5hY3RpdmUpey8vYWN0aXZlINGB0YLQsNC90L7QstC40YLRgdGPIHRydWUg0LIg0LzQtdGC0L7QtNC1IFBsYXllciAtPiBCb2R5LnNob290KClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUoYXJyb3cudmlldyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy53YXZlcy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJmYWNlLnVwZGF0ZSh0aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG9vdGluZygpey8v0KHRgtGA0LXQu9GM0LHQsCDQuNCz0YDQvtC60LBcclxuICAgICAgICBsZXQgYXJyb3cgPSBuZXcgQXJyb3coJ2Rvd24nLDQwMCwgdGhpcy5wbGF5ZXIueCwgdGhpcy5wbGF5ZXIueSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuYWRkQXJyb3coYXJyb3cpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdGlsZXMucHVzaChhcnJvdyk7Ly/QktGB0LUg0L7QsdGK0LXQutGC0Ysg0LjQtyDRjdGC0L7Qs9C+INC80LDRgdGB0LjQstCwINCx0YPQtNGD0YIg0L7RgtGA0LjRgdC+0LLQsNC90Ysg0LIg0LzQtdGC0L7QtNC1IHJlbmRlclxyXG4gICAgICAgIHRoaXMuY29sbGlkZXIuYWRkS2luZW1hdGljQm9keShhcnJvdyk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtTY2VuZX0gZnJvbSAnLi4vc2NlbmUnOyBcclxuaW1wb3J0IHtPcmN9IGZyb20gJy4uL29yYyc7XHJcbmltcG9ydCB7UGxheWVyfSBmcm9tICcuLi9wbGF5ZXInO1xyXG5pbXBvcnQge1Nwcml0ZVNoZWV0fSBmcm9tICcuLi9zcHJpdGUtc2hlZXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVPdmVyIGV4dGVuZHMgU2NlbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICBzdXBlcihnYW1lKTsvL9CS0YvQt9C+0LIg0YDQvtC00LjRgtC10LvRjNGB0LrQvtCz0L4g0LrQvtC90YHRgtGA0YPQutGC0L7RgNCwXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgICAgICB0aGlzLmxvYWRlZEF0ID0gMDtcclxuICAgICAgICB0aGlzLm9yYyA9IG5ldyBPcmMobnVsbCwnZW5kU2NyaXB0Jyk7Ly8ocGxheWVyLCBhaVR5cGUgPSAncGVhY2VmdWwnKVxyXG4gICAgICAgIHRoaXMub3JjLnggPSA0MjA7XHJcbiAgICAgICAgdGhpcy5vcmMueSA9IDIwMDtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JpcHRUaW1lID0gMTcwMDsvL9CS0YDQtdC80Y8g0LrQvtCz0LTQsCDQvtGA0Log0LHRjNGR0YIg0LjQs9GA0L7QutCwXHJcbiAgICAgICAgdGhpcy5zY3JpcHRTcGVlZFBsYXllciA9IC0xMDsvL9Cd0LDRh9Cw0LvRjNC90LDRjyDRgdC60L7RgNC+0YHRgtGMINC40LPRgNC+0LrQsFxyXG5cclxuICAgICAgICAvLyB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIobnVsbCxudWxsKTtcclxuICAgICAgICAvLyB0aGlzLnBsYXllci5zdGFuZCgncmlnaHQnKTtcclxuICAgICAgICAvLyB0aGlzLnBsYXllci54ID0gMzUwO1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVyLnkgPSAyMDA7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xyXG4gICAgICAgICAgICBpbWFnZU5hbWU6ICdwbGF5ZXInLFxyXG4gICAgICAgICAgICBpbWFnZVdpZHRoOjY0MCxcclxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQ6NjQwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnRpbGVzLmdldFNwcml0ZSgzMSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDb29yZCA9IHt4OiAyNzAsIHk6MjAwfVxyXG4gICAgICAgIHRoaXMucGxheWVyLnNldFhZKHRoaXMucGxheWVyQ29vcmQueCx0aGlzLnBsYXllckNvb3JkLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKXtcclxuICAgICAgICBpZih0aGlzLmxvYWRlZEF0ID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZEF0ID0gdGltZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMubG9hZGVkQXQgIT0gMCAmJiAodGltZSAtIHRoaXMubG9hZGVkQXQpID41MDApe1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWUuY29udHJvbC5maXJlKXsvL9Cf0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwIFwi0L7Qs9C+0L3RjFwiINC90LDRh9Cw0YLRjCDQuNCz0YDRg1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2goU2NlbmUuTE9BREVEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5sb2FkZWRBdCAhPSAwICYmICh0aW1lIC0gdGhpcy5sb2FkZWRBdCkgPiB0aGlzLnNjcmlwdFRpbWUpe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMudGlsZXMuZ2V0U3ByaXRlKDM2KTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb29yZC54IC09IDU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0U3BlZWRQbGF5ZXIgKz0wLjU7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ29vcmQueSArPXRoaXMuc2NyaXB0U3BlZWRQbGF5ZXI7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFhZKHRoaXMucGxheWVyQ29vcmQueCx0aGlzLnBsYXllckNvb3JkLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vcmMudXBkYXRlKHRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJ2JsYWNrJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5wcmludCgxNTAsMzIwLCAn0J7QoNCa0Jgg0JHQldCX0J7QkdCY0JTQndCrLiDQndCVINCe0JHQmNCW0JDQuSDQodCb0JDQkdCr0KUg0J7QoNCa0J7QkicsMTUpO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5vcmMudmlldyk7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lLnNjcmVlbi5kcmF3U3ByaXRlKHRoaXMucGxheWVyLnZpZXcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd1Nwcml0ZSh0aGlzLnBsYXllcik7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtTY2VuZX0gZnJvbSAnLi4vc2NlbmUnO1xyXG5pbXBvcnQge1Nwcml0ZVNoZWV0fSBmcm9tICcuLi9zcHJpdGUtc2hlZXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVXaW4gZXh0ZW5kcyBTY2VuZXtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpOy8v0JLRi9C30L7QsiDRgNC+0LTQuNGC0LXQu9GM0YHQutC+0LPQviDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LBcclxuICAgICAgICB0aGlzLnRpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHtcclxuICAgICAgICAgICAgaW1hZ2VOYW1lOiAncGxheWVyJyxcclxuICAgICAgICAgICAgaW1hZ2VXaWR0aDo2NDAsXHJcbiAgICAgICAgICAgIGltYWdlSGVpZ2h0OjY0MFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub3JjVGlsZXMgPSBuZXcgU3ByaXRlU2hlZXQoe1xyXG4gICAgICAgICAgICBpbWFnZU5hbWU6ICdvcmMnLFxyXG4gICAgICAgICAgICBpbWFnZVdpZHRoOjY0MCxcclxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQ6NjQwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgICAgICB0aGlzLmxvYWRlZEF0ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnRpbGVzLmdldFNwcml0ZSgzMSk7XHJcbiAgICAgICAgdGhpcy5zdGFydFBvc2l0aW9uWSA9IDIwMDtcclxuICAgICAgICB0aGlzLnBsYXllckNvb3JkID0ge3g6IDMwMCwgeTp0aGlzLnN0YXJ0UG9zaXRpb25ZfVxyXG4gICAgICAgIHRoaXMucGxheWVyLnNldFhZKHRoaXMucGxheWVyQ29vcmQueCx0aGlzLnBsYXllckNvb3JkLnkpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRJbXB1bHNlID0gLTg7Ly/RgdGC0LDRgNGC0L7QstGL0Lkg0LjQvNC/0YPQu9GM0YEg0LTQu9GPINC/0L7QtNCx0YDQsNGB0YvQstCw0L3QuNGPINC40LPRgNC+0LrQsCDQvtGA0LrQsNC80LhcclxuICAgICAgICB0aGlzLnNwZWVkUGxheWVyID0gdGhpcy5zdGFydEltcHVsc2U7XHJcblxyXG4gICAgICAgIHRoaXMub3JjcyA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8NDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgeDEgPSAxNTAgKyBpKjEwMDtcclxuICAgICAgICAgICAgdGhpcy5vcmNzLnB1c2goe3g6eDEseToyMDAsc3ByaXRlOnRoaXMub3JjVGlsZXMuZ2V0U3ByaXRlKDMxKSwgc3BlZWQ6IHRoaXMuc3RhcnRJbXB1bHNlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9yY3MuZm9yRWFjaChvcmM9PntcclxuICAgICAgICAgICAgb3JjLnNwcml0ZS5zZXRYWShvcmMueCxvcmMueSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpe1xyXG4gICAgICAgIGlmKHRoaXMubG9hZGVkQXQgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkQXQgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5sb2FkZWRBdCAhPSAwICYmICh0aW1lIC0gdGhpcy5sb2FkZWRBdCkgPiA1MDApe1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWUuY29udHJvbC5maXJlKXsvL9Cf0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwIFwi0L7Qs9C+0L3RjFwiINC90LDRh9Cw0YLRjCDQuNCz0YDRg1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2goU2NlbmUuTE9BREVEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zcGVlZFBsYXllciArPTAuNTtcclxuICAgICAgICB0aGlzLnBsYXllckNvb3JkLnkgKz0gdGhpcy5zcGVlZFBsYXllcjtcclxuICAgICAgICBpZih0aGlzLnBsYXllckNvb3JkLnkgPiB0aGlzLnN0YXJ0UG9zaXRpb25ZKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb29yZC55ID0gdGhpcy5zdGFydFBvc2l0aW9uWTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZFBsYXllciA9IHRoaXMuc3RhcnRJbXB1bHNlK01hdGgucmFuZG9tKCktMC41O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllci5zZXRYWSh0aGlzLnBsYXllckNvb3JkLngsdGhpcy5wbGF5ZXJDb29yZC55KTsgICAgIFxyXG5cclxuICAgICAgICB0aGlzLm9yY3MuZm9yRWFjaChvcmM9PntcclxuICAgICAgICAgICAgb3JjLnNwZWVkICs9MC41O1xyXG4gICAgICAgICAgICBvcmMueSArPW9yYy5zcGVlZDtcclxuICAgICAgICAgICAgaWYob3JjLnkgPiB0aGlzLnN0YXJ0UG9zaXRpb25ZKXtcclxuICAgICAgICAgICAgICAgIG9yYy55ID0gdGhpcy5zdGFydFBvc2l0aW9uWTtcclxuICAgICAgICAgICAgICAgIG9yYy5zcGVlZCA9IHRoaXMuc3RhcnRJbXB1bHNlK01hdGgucmFuZG9tKCktMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9yYy5zcHJpdGUuc2V0WFkob3JjLngsb3JjLnkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJ2JsYWNrJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5wcmludCgyNDAsMzIwLCAn0Jgg0J3QmNCa0KLQniDQndCVINCf0J7QodCi0KDQkNCU0JDQmycsMTUpO1xyXG5cclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUodGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMub3Jjcy5mb3JFYWNoKG9yYz0+e1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdTcHJpdGUob3JjLnNwcml0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtTY2VuZX0gZnJvbSAnLi4vc2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBTY2VuZXtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpe1xyXG4gICAgICAgIHN1cGVyKGdhbWUpOy8v0JLRi9C30L7QsiDRgNC+0LTQuNGC0LXQu9GM0YHQutC+0LPQviDQutC+0L3RgdGC0YDRg9C60YLQvtGA0LBcclxuICAgICAgICB0aGlzLmxvYWRlZEF0ID0gMDsgLy/Ql9C00LXRgdGMINC30LDQv9C40YjQtdGC0YHRjyDQstGA0LXQvNGPLCDQvdCwINC60L7RgtC+0YDQvtC8INCy0YHQtSDQutCw0YDRgtC40L3QutC4INC30LDQs9GA0YPQt9C40LvQuNGB0YxcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCl7Ly/QlNC70Y8g0LfQsNC/0YPRgdC60LAg0Lgg0L/QtdGA0LXQt9Cw0L/Rg9GB0LrQsCDRgdGG0LXQvdGLLCDRh9GC0L7QsdGLINCy0LXRgNC90YPRgtGMINC/0LDRgNCw0LzQtdGC0YDRiyDQsiDQv9C10LLQvtC90LDRh9Cw0LvRjNC90L7QtSDRgdC+0YHRgtC+0Y/QvdC40LVcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5sb2FkZWRBdCA9IDA7Ly/QvtCx0L3Rg9C70Y/QtdC8XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpIHtcclxuICAgICAgICBpZih0aGlzLmxvYWRlZEF0ID09IDAgJiYgdGhpcy5nYW1lLnNjcmVlbi5pc0ltYWdlc0xvYWRlZCA9PSB0cnVlKSB7Ly/QldGB0LvQuCDQutCw0YDRgtC40L3QutC4INC30LDQs9GA0YPQt9C40LvQuNGB0Ywg0Lgg0LLRgNC10LzRjyDQt9Cw0LPRgNGD0LfQutC4INC10YnRkSDQvdC1INGE0LjQutGB0LjRgNC+0LLQsNC70L7RgdGMLi4uXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkQXQgPSB0aW1lOy8vLi7Qt9Cw0L/QuNGI0LXQvCDQstGA0LXQvNGPLCDQvdCwINC60L7RgtC+0YDQvtC8INCy0YHQtSDQutCw0YDRgtC40L3QutC4INC30LDQs9GA0YPQt9C40LvQuNGB0YxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5sb2FkZWRBdCAhPSAwICYmICh0aW1lIC0gdGhpcy5sb2FkZWRBdCkgPiA1MDApIHsvL9CS0YvQttC40LTQsNC10LwgNTAwINC80YFcclxuICAgICAgICAgICAgdGhpcy5maW5pc2goU2NlbmUuTE9BREVEKTsvL9Ch0YbQtdC90LAg0LfQsNCz0YDRg9C20LXQvdCwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZSh0aW1lKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoJyMwMDAwMDAnKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDUwLDcwLCfQl9Cw0LPRgNGD0LfQutCwINC80LjQs9GA0LjRgNGD0Y7RidC40YUg0L7RgNC60L7Qsi4uLicpO1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7U2NlbmV9IGZyb20gJy4uL3NjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51IGV4dGVuZHMgU2NlbmV7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICBzdXBlcihnYW1lKTsvL9CS0YvQt9C+0LIg0YDQvtC00LjRgtC10LvRjNGB0LrQvtCz0L4g0LrQvtC90YHRgtGA0YPQutGC0L7RgNCwXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgICAgICB0aGlzLmxvYWRlZEF0ID0gMDsvL9CSINC90LDRh9Cw0LvQtSDRjdGC0L4g0LLRgNC10LzRjyDQutC90L7Qv9C60LAgXCLQvtCz0L7QvdGMXCIg0L3QtSDQtNC+0YHRgtGD0L/QvdCwLCDRh9GC0L7QsdGLINC/0YDQuCDQv9C10YDQtdGF0L7QtNC1INCyINC80LXQvdGOINC/0L4g0LrQvdC+0L/QutC1IFwi0L7Qs9C+0L3RjFwiINC40LPRgNCwINCy0L3QtdC30LDQv9C90L4g0L3QtSDQt9Cw0L/Rg9GB0YLQuNC70LDRgdGMXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHRpbWUpe1xyXG4gICAgICAgIGlmKHRoaXMubG9hZGVkQXQgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkQXQgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5sb2FkZWRBdCAhPSAwICYmICh0aW1lIC0gdGhpcy5sb2FkZWRBdCkgPiA1MDApe1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWUuY29udHJvbC5maXJlKXsvL9Cf0YDQuCDQvdCw0LbQsNGC0LjQuCDQvdCwIFwi0L7Qs9C+0L3RjFwiINC90LDRh9Cw0YLRjCDQuNCz0YDRg1xyXG4gICAgICAgICAgICAvLyB0aGlzLmZpbmlzaChTY2VuZS5HQU1FX09WRVIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2goU2NlbmUuU1RBUlRfR0FNRSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpe1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZHJhd0ltYWdlKDAsMCwndGl0bGUnKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDIwMCwzOTAsICfQndCQ0JbQnNCY0KLQlSDQn9Cg0J7QkdCV0JsnLDI1KTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KDgwLDQ3MCwgJ9Cj0J/QoNCQ0JLQm9CV0J3QmNCVINCh0KLQoNCV0JvQmtCQ0JzQmC4g0JTQm9CvINCh0KLQoNCV0JvQrNCR0Ksg0JjQodCf0J7Qm9Cs0JfQo9CZ0KLQlSDQn9Cg0J7QkdCV0JsuJywxNSk7XHJcbiAgICAgICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJbWFnZUxvYWRlcn0gZnJvbSAnLi9pbWFnZS1sb2FkZXInO1xyXG5pbXBvcnQge1RpbGVNYXB9IGZyb20gJy4vdGlsZS1tYXAnXHJcblxyXG5leHBvcnQgY2xhc3MgU2NyZWVue1xyXG4gICAgY29uc3RydWN0b3Iod2lkdGggLCBoZWlnaHQpe1xyXG4gICAgICAgIHRoaXMud2lkdGg9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaXNJbWFnZXNMb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0NhbWVyYVNldCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFN0eWxlc1RvQ2FudmFzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3R5bGVzVG9DYW52YXMoKXtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUubGVmdCA9ICcwJztcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5yaWdodCA9ICcwJztcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYm90dG9tID0gJzAnO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLm1hcmdpbiA9ICdhdXRvJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnYmxhY2snO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhbWVyYShjYW1lcmEpe1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xyXG4gICAgICAgIHRoaXMuaXNDYW1lcmFTZXQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJbWFnZXMoaW1hZ2VzRmlsZXMpe1xyXG4gICAgICAgIGNvbnN0IGxvYWRlciA9ICBuZXcgSW1hZ2VMb2FkZXIoaW1hZ2VzRmlsZXMpO1xyXG4gICAgICAgIGxvYWRlci5sb2FkKCkudGhlbihuYW1lcz0+e1xyXG5cclxuICAgICAgICAgICAgLy9PYmplY3QuYXNzaWduINC60L7Qv9C40YDRg9C10YIg0LIg0L/QtdGA0LLRi9C5INC+0LHRitC10LrRgiDRgdCy0L7QudGB0YLQstCwINC+0YHRgtCw0LvRjNC90YvRhSDQvtCx0YrQtdC60YLQvtCyLiDQkiBsb2FkZXIuaW1hZ2VzINGB0LXQudGH0LDRgSB7b3JjOiBpbWcsIHBsYXllcjogaW1nLCB0aXRsZTogaW1nLCB0aWxlczogaW1nfVxyXG4gICAgICAgICAgICAvL2ltZyAtINGN0YLQviDQvtCx0YrQtdC60YIgSW1hZ2UsINCyINC90ZHQvCDQtdGB0YLRjCDRgdCy0L7QudGB0YLQstC+IHNyYywg0LIg0LrQvtGC0L7RgNC+0Lwg0LfQsNC/0LjRgdCw0L0g0L/Rg9GC0Ywg0Log0LrQsNGA0YLQuNC90LrQtVxyXG4gICAgICAgICAgICB0aGlzLmltYWdlcyA9IE9iamVjdC5hc3NpZ24odGhpcy5pbWFnZXMsIGxvYWRlci5pbWFnZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmlzSW1hZ2VzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCl7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NhbnZhcycpO1xyXG4gICAgICAgIGxldCBjYW52YXMgPSBlbGVtZW50c1swXSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuLy/QndCwINC60LDRgNGC0LUg0LzQvdC+0LPQviDQvtCx0YrQtdC60YLQvtCyLCDQtNC70Y8g0L7Qv9GC0LjQvNC40LfQsNGG0LjQuCDQtNC10LvQsNC10Lwg0L/RgNC10YDQtdC90LTQtdGAICjQt9Cw0YDQsNC90LXQtSDQvtGC0YDQuNGB0L7QstCw0YLRjCDQutCw0YDRgtGDINC4INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQutCw0Log0LrQsNGA0YLQuNC90LrRgylcclxuICAgIGNyZWF0ZU1hcChuYW1lLCBtYXBEYXRhLCB0aWxlc2V0KSB7XHJcbiAgICAgICAgY29uc3QgbWFwSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBtYXBJbWFnZS53aWR0aCA9IG1hcERhdGEud2lkdGggKiBtYXBEYXRhLnRpbGV3aWR0aDsvL9C00LDQvdC90YvQtSAgbWFwRGF0YS53aWR0aCDQuCBtYXBEYXRhLnRpbGV3aWR0aCDQsdC10YDRg9GC0YHRjyDQuNC3IGxldmVsMS5qc29uXHJcbiAgICAgICAgbWFwSW1hZ2UuaGVpZ2h0ID0gbWFwRGF0YS5oZWlnaHQgKiBtYXBEYXRhLnRpbGVoZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgbWFwQ29udGV4dCA9IG1hcEltYWdlLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgY29uc3QgaGl0Ym94ZXMgPSBbXTtcclxuICAgICAgICBsZXQgcm93LCBjb2w7XHJcbiAgICAgICAgbWFwRGF0YS5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7Ly/QktGB0LUg0L3QtdC+0LHRhdC+0LTQuNC80YvQtSDQtNCw0L3QvdGL0LUg0LvQtdC20LDRgiDQsiBtYXBEYXRhLmxheWVycyAobGV2ZWwxLmpzb24pXHJcbiAgICAgICAgICAgIGlmKGxheWVyLnR5cGUgPT0gXCJ0aWxlbGF5ZXJcIikgey8v0KMg0YHQu9C+0LXQsiB0eXBlID09IFwidGlsZWxheWVyXCJcclxuICAgICAgICAgICAgICAgIHJvdyA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb2wgPSAwO1xyXG4gICAgICAgICAgICAgICAgbGF5ZXIuZGF0YS5mb3JFYWNoKGluZGV4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA+IDApIHsvL2xheWVyLmRhdGEgLSDRjdGC0L4g0LzQsNGB0YHQuNCyIFs3LCAyMSwgMCwgMjMsIDcsIDAg0Lgg0YIu0LQuXS4gSW5kZXggPSAwINC30L3QsNGH0LjRgiwg0YfRgtC+INGP0YfQtdC50LrQsCDQv9GD0YHRgtCw0Y9cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbdGlsZXNldC5pbWFnZU5hbWVdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZXNldC5nZXRTb3VyY2VYKGluZGV4KSwgdGlsZXNldC5nZXRTb3VyY2VZKGluZGV4KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcERhdGEudGlsZXdpZHRoLCBtYXBEYXRhLnRpbGVoZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgKiBtYXBEYXRhLnRpbGV3aWR0aCwgcm93ICogbWFwRGF0YS50aWxlaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwRGF0YS50aWxld2lkdGgsIG1hcERhdGEudGlsZWhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29sID4gKG1hcERhdGEud2lkdGggLSAxKSkgey8v0JXRgdC70Lgg0LTQvtGI0LvQuCDQtNC+INC60L7QvdGG0LAg0YHRgtGA0L7QutC4LCDQv9C10YDQtdGF0L7QtNC40Lwg0L3QsCDQvdC+0LLRg9GOINGB0YLRgNC+0LrRg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3crKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihsYXllci50eXBlID09IFwib2JqZWN0Z3JvdXBcIikgey8v0KMg0L7QsdGK0LXQutGC0L7QsiB0eXBlID09IFwidGlsZWxheWVyXCJcclxuICAgICAgICAgICAgICAgIGhpdGJveGVzLnB1c2goLi4ubGF5ZXIub2JqZWN0cy5tYXAob2JqID0+ICh7eDE6IG9iai54LCB4Mjogb2JqLnggKyBvYmoud2lkdGgsIHkxOiBvYmoueSwgeTI6IG9iai55ICsgb2JqLmhlaWdodH0pKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsvL21hcERhdGEubGF5ZXJzLmZvckVhY2hcclxuXHJcbiAgICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBtYXBJbWFnZTsvL9CU0L7QsdCw0LLQuNGC0Ywg0L/QvtC70YPRh9C10L3QvdC+0LUg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQutCw0YDRgtGLINCyINC30LDQs9GA0YPQttC10L3QvdGL0LUg0LjQt9C+0LHRgNCw0LbQtdC90LjRj1xyXG4gICAgICAgIHJldHVybiBuZXcgVGlsZU1hcCh7Ly9UaWxlTWFwIGV4dGVuZHMgU3ByaXRlIC0g0LrQsNGA0YLQsCDQv9GA0LXQtNGB0YLQsNCy0LvRj9C10YIg0LjQtyDRgdC10LHRjyDQvtC00LjQvSDQsdC+0LvRjNGI0L7QuSDRgdC/0YDQsNC50YJcclxuICAgICAgICAgICAgaW1hZ2VOYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBzb3VyY2VYOiAwLFxyXG4gICAgICAgICAgICBzb3VyY2VZOiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogbWFwSW1hZ2Uud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogbWFwSW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAgICAgICBoaXRib3hlczogaGl0Ym94ZXNcclxuICAgICAgICB9KTtcclxuICAgIH0vL2NyZWF0ZU1hcFxyXG5cclxuXHJcbiAgICBcclxuICAgIGZpbGwoY29sb3Ipe1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QgKDAsMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KHgseSx0ZXh0LGZvbnRTaXplID0gMjIpe1xyXG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5zaGFkb3dPZmZzZXRYID0gNDsgLy/QndC1INGA0LDQsdC+0YLQsNC10YJcclxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IDQ7XHJcbiAgICAgICAgLy8gdGhpcy5jb250ZXh0LnNoYWRvd0JsdXIgPSAzO1xyXG4gICAgICAgIC8vIHRoaXMuY29udGV4dHNoYWRvd0NvbG9yID0gJ2JsYWNrJztcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5mb250ID0gZm9udFNpemUrJ3B4IEFyaWFsJztcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQodGV4dCx4LHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdJbWFnZSh4LHksaW1hZ2VOYW1lKXtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW2ltYWdlTmFtZV0seCx5KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U3ByaXRlKHNwcml0ZSl7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0XHJcbiAgICAgICAgbGV0IHNwcml0ZVggPSBzcHJpdGUueDtcclxuICAgICAgICBsZXQgc3ByaXRlWSA9IHNwcml0ZS55O1xyXG5cclxuICAgICAgICBpZih0aGlzLmlzQ2FtZXJhU2V0KXtcclxuICAgICAgICAgICAgc3ByaXRlWCAtPXRoaXMuY2FtZXJhLng7XHJcbiAgICAgICAgICAgIHNwcml0ZVkgLT10aGlzLmNhbWVyYS55XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL9Ch0L/RgNCw0LnRgtGLLCDQutC+0YLQvtGA0YvQtSDQvdC1INC/0L7Qv9Cw0LTQsNGO0YIg0LIg0L7QsdC70LDRgdGC0Ywg0LLQuNC00LjQvNC+0YHRgtC4INC60LDQvNC10YDRiywg0L3QtSDQvtGC0YDQuNGB0L7QstGL0LLQsNC10LxcclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgKHNwcml0ZVggPj0gdGhpcy53aWR0aCkgfHxcclxuICAgICAgICAgICAgKHNwcml0ZVkgPj0gdGhpcy5oZWlnaHQpIHx8XHJcbiAgICAgICAgICAgICgoc3ByaXRlWCArIHNwcml0ZS53aWR0aCkgPD0gMCl8fFxyXG4gICAgICAgICAgICAoKHNwcml0ZVkgKyBzcHJpdGUuaGVpZ2h0KSA8PTApXHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAvL9CV0YHQu9C4INGB0L/RgNCw0LnRgiDQu9C40YjRjCDRh9Cw0YHRgtC40YfQvdC+INC/0L7Qv9Cw0LTQsNC10YIg0LIg0L7QsdC70LDRgdGC0Ywg0LLQuNC00LjQvNC+0YHRgtC4INC60LDQvNC10YDRiywg0L7RgtGA0LjRgdC+0LLRi9Cy0LDQtdC8INGC0L7Qu9GM0LrQviDQstC40LTQuNC80YPRjiDRh9Cw0YHRgtGMINGB0L/RgNCw0LnRgtCwXHJcbiAgICAgICAgbGV0IHNvdXJjZVg9c3ByaXRlLnNvdXJjZVgrXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5hYnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKDAsIHNwcml0ZVgpLy/Qn9GA0Lgg0LLRi9GF0L7QtNC1INC30LAg0LvQtdCy0YvQuSDQutGA0LDQuSDQv9C+0LvRg9GH0LDQtdGC0YHRjyBzcHJpdGUuc291cmNlWCArIHxzcHJpdGVYfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgc291cmNlWT1zcHJpdGUuc291cmNlWSArIE1hdGguYWJzKE1hdGgubWluKDAsIHNwcml0ZVkpKTs7XHJcblxyXG4gICAgICAgIGxldCB3aWR0aD1NYXRoLm1pbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lkdGgsLy/RiNC40YDQuNC90LAg0Y3QutGA0LDQvdCwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVYICsgc3ByaXRlLndpZHRoKSAtIFxyXG4gICAgICAgICAgICAgICAgICBNYXRoLm1heCgwLCBzcHJpdGVYKTsvKtCV0YHQu9C4IHNwcml0ZVggKyBzcHJpdGUud2lkdGgg0LHRg9C00LXRgiDQsdC+0LvRjNGI0LUgdGhpcy53aWR0aCAo0LXRgdC70Lgg0YHQv9GA0LDQudGCINCy0YvQudC00LXRgiDQt9CwINC/0YDQsNCy0YvQuSDQutGA0LDQuSksIFxyXG4gICAgICAgICAgICAgICAgICDRiNC40YDQuNC90LAg0YHQv9GA0LDQudGC0LAgbGV0IHdpZHRoINC/0L7Qu9GD0YfQuNGC0YHRjyDQvtGC0YDQuNGG0LDRgtC10LvRjNC90L7QuS4g0J7RgtGA0LjRhtCw0YLQtdC70YzQvdCw0Y8g0YjQuNGA0LjQvdCwINC30LDRhdCy0LDRgtGL0LLQsNC10YIg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQvdC1INCy0L/RgNCw0LLQviDQutCw0Log0L7QsdGL0YfQvdC+LCDQsCDQstC70LXQstC+Ki9cclxuXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IE1hdGgubWluKHRoaXMuaGVpZ2h0LCBzcHJpdGVZICsgc3ByaXRlLmhlaWdodCkgLSBNYXRoLm1heCgwLCBzcHJpdGVZKTtcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbc3ByaXRlLmltYWdlTmFtZV0sXHJcbiAgICAgICAgICAgIHNvdXJjZVgsLy/QmtC+0L7RgNC00LjQvdCw0YLRiyDRgdC/0YDQsNC50YLQsCDQvdCwINC40YHRhdC+0LTQvdC+0Lwg0LjQt9C+0LHRgNCw0LbQtdC90LjQuFxyXG4gICAgICAgICAgICBzb3VyY2VZLCBcclxuICAgICAgICAgICAgd2lkdGgsLy/QoNCw0LfQvNC10YDRiyDRgdC/0YDQsNC50YLQsCDQvdCwINC40YHRhdC+0LTQvdC+0Lwg0LjQt9C+0LHRgNCw0LbQtdC90LjQuFxyXG4gICAgICAgICAgICBoZWlnaHQsXHJcbiAgICAgICAgICAgIE1hdGgubWF4KDAsc3ByaXRlWCksLy/QoNC40YHQvtCy0LDQvdC40LUg0YHQv9GA0LDQudGC0LAg0L3QsCDRhdC+0LvRgdGC0LUuINCV0YHQu9C4INC30LDQtNCw0L3QsCDQutCw0LzQtdGA0LAsINC+0L3QsCDQv9C+0LLQu9C40Y/QtdGCINC90LAg0Y3RgtC4INC60L7QvtGA0LTQuNC90LDRgtGLXHJcbiAgICAgICAgICAgIE1hdGgubWF4KDAsc3ByaXRlWSksXHJcbiAgICAgICAgICAgIHdpZHRoLC8v0KDQsNC30LzQtdGA0Ysg0YHQv9GA0LDQudGC0LAg0L3QsCDRhdC+0LvRgdGC0LVcclxuICAgICAgICAgICAgaGVpZ2h0KTtcclxuXHJcbiAgICB9Ly9kcmF3U3ByaXRlXHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuaW1wb3J0IHtBbmltYXRpb259IGZyb20gJy4vYW5pbWF0aW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7Ly/QpNCw0LHRgNC40LrQsCDRgdC/0YDQsNC50YLQvtCyLiDQp9GC0L7QsdGLINCy0YDRg9GH0L3Rg9GOINC90LUg0YHQvtC30LTQsNCy0LDRgtGMINGB0L/RgNCw0LnRgtGLICjQvtCx0YrQtdC60YLRiyBTcHJpdGUpINC4INCw0L3QuNC80LDRhtC40Y4gKEFuaW1hdGlvbiBleHRlbmRzIFNwcml0ZSlcclxuICAgIGNvbnN0cnVjdG9yKHtpbWFnZU5hbWUsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0LCBzcHJpdGVXaWR0aCA9IDY0LCBzcHJpdGVIZWlnaHQgPSA2NH0pIHtcclxuICAgICAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcclxuICAgICAgICB0aGlzLmltYWdlV2lkdGggPSBpbWFnZVdpZHRoO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSBpbWFnZUhlaWdodDtcclxuICAgICAgICB0aGlzLnNwcml0ZVdpZHRoID0gc3ByaXRlV2lkdGg7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVIZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5pbWF0aW9uKGluZGV4ZXMsc3BlZWQsIHJlcGVhdCA9IHRydWUsIGF1dG9ydW4gPSB0cnVlKXtcclxuICAgICAgICByZXR1cm4gbmV3IEFuaW1hdGlvbih7XHJcbiAgICAgICAgICAgIGltYWdlTmFtZTogdGhpcy5pbWFnZU5hbWUsXHJcbiAgICAgICAgICAgIGZyYW1lczogaW5kZXhlcy5tYXAoaW5kZXggPT4gKHtzeDp0aGlzLmdldFNvdXJjZVgoaW5kZXgpLCBzeTp0aGlzLmdldFNvdXJjZVkoaW5kZXgpfSkpLC8vWzEsMl0gPT4gW3tzeDp0aGlzLmdldFNvdXJjZVgoMSksIHN5OnRoaXMuZ2V0U291cmNlWSgxKX0sICB7c3g6dGhpcy5nZXRTb3VyY2VYKDIpLCBzeTp0aGlzLmdldFNvdXJjZVkoMil9XSAgXHJcbiAgICAgICAgICAgIHNwZWVkOiBzcGVlZCxcclxuICAgICAgICAgICAgcmVwZWF0OiAgcmVwZWF0LFxyXG4gICAgICAgICAgICBhdXRvcnVuOiBhdXRvcnVuLFxyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnNwcml0ZUhlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwcml0ZShpbmRleCl7Ly/QndCw0YXQvtC00LjQvCDQutC+0L7RgNC00LjQvdCw0YLRiyDRgdC/0YDQsNC50YLQsCDQv9C+INC/0L7RgNGP0LTQutC+0LLQvtC80YMg0L3QvtC80LXRgNGDXHJcbiAgICAgICByZXR1cm4gbmV3IFNwcml0ZSh7XHJcbiAgICAgICAgaW1hZ2VOYW1lOiB0aGlzLmltYWdlTmFtZSxcclxuICAgICAgICBzb3VyY2VYOiB0aGlzLmdldFNvdXJjZVgoaW5kZXgpLFxyXG4gICAgICAgIHNvdXJjZVk6IHRoaXMuZ2V0U291cmNlWShpbmRleCksXHJcbiAgICAgICAgd2lkdGg6IHRoaXMuc3ByaXRlV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnNwcml0ZUhlaWdodFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U291cmNlWChpbmRleCl7Ly/QodC/0YDQsNC50YLRiyDQv9C+0LvRg9GH0LDQtdC8INC/0L4g0L/QvtGA0Y/QtNC60L7QstC+0LzRgyDQvdC+0LzQtdGA0YMuIGluZGV4INCx0YPQtNC10YIg0L3QsNGH0LjQvdCw0YLRjNGB0Y8g0YEg0LXQtNC40L3QuNGG0YssINCwINCy0L3Rg9GC0YDQuCDRhNGD0L3QutGG0LjQuCDQvdGD0LzQuNGA0LDRhtC40Y8g0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEg0L3Rg9C70Y8sINC/0L7RjdGC0L7QvNGDIC0taW5kZXhcclxuICAgICAgICByZXR1cm4gKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAlIHRoaXMuaW1hZ2VXaWR0aDsgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U291cmNlWShpbmRleCl7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgudHJ1bmMoKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAvIHRoaXMuaW1hZ2VXaWR0aCkqdGhpcy5zcHJpdGVIZWlnaHQ7Ly9NYXRoLnRydW5jIC0g0LLQvtC30LLRgNCw0YnQsNC10YIg0YbQtdC70YPRjiDRh9Cw0YHRgtGMINGH0LjRgdC70LAg0L/Rg9GC0ZHQvCDRg9C00LDQu9C10L3QuNGPINCy0YHQtdGFINC00YDQvtCx0L3Ri9GFINC30L3QsNC60L7QslxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7Ly/QktGA0YPRh9C90YPRjiDRgdC/0YDQsNC50YLRiyDRh9C10YDQtdC3INGN0YLQvtGCINC60LvQsNGB0YEg0L3QtSDRgdC+0LfQtNCw0Y7RgtGB0Y8uINChINGN0YLQuNC8INC60LvQsNGB0YHQvtC8INGA0LDQsdC+0YLQsNC10YIgXCLRhNCw0LHRgNC40LrQsFwiINGB0L/RgNCw0LnRgtC+0LIgc3ByaXRlLXNoZWV0LmpzXHJcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lLCBzb3VyY2VYLCBzb3VyY2VZLCB3aWR0aCA9IDY0LCBoZWlnaHQgPTY0fSkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xyXG4gICAgICAgIHRoaXMuc291cmNlWCA9IHNvdXJjZVg7Ly/QmtC+0L7RgNC00LjQvdCw0YLRiyDQvdGD0LbQvdC+0LPQviDRgdC/0YDQsNC50YLQsCDQvdCwINC40YHRhdC+0LTQvdC+0Lkg0LrQsNGA0YLQuNC90LrQtVxyXG4gICAgICAgIHRoaXMuc291cmNlWSA9IHNvdXJjZVk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRYWSh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFRleHRJbmZve1xyXG4gICAgY29uc3RydWN0b3Ioc2NyZWVuKXtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBzY3JlZW47XHJcbiAgICAgICAgdGhpcy5zaG93VGV4dEJvb2xlYW4gPSBmYWxzZTsvL9Cf0L7QutCw0LfRi9Cy0LDRgtGMINC70Lgg0YLQtdC60YHRglxyXG4gICAgICAgIHRoaXMudGV4dCA9ICcnO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuaG93TG9uZ1RvU2hvdyA9IDEwMDA7Ly/QodC60L7Qu9GM0LrQviDQstGA0LXQvNC10L3QuCDQv9C+0LrQsNC30YvQstCw0YLRjCDRgtC10LrRgdGCXHJcbiAgICAgICAgdGhpcy50aW1lVG9TdG9wID0gMDsvL9CS0YDQtdC80Y8g0LrQvtCz0LTQsCDQvdGD0LbQvdC+INC30LDQstC10YDRiNC40YLRjCDQv9C+0LrQsNC3XHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFydEZvbnRTaXplID0gMTUwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKXtcclxuICAgICAgICBpZih0aGlzLmxhc3RUaW1lID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpZih0aGlzLnNob3dUZXh0Qm9vbGVhbil7XHJcbiAgICAgICAgICAgIHRoaXMuZm9udFNpemUgLT0odGltZSAtIHRoaXMubGFzdFRpbWUpLzEwO1xyXG4gICAgICAgICAgICB0aGlzLnNldFhZKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyZWVuLnByaW50KHRoaXMueCwgdGhpcy55LCB0aGlzLnRleHQsIHRoaXMuZm9udFNpemUpO1xyXG4gICAgICAgICAgICBpZih0aW1lPnRoaXMudGltZVRvU3RvcCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUZXh0Qm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dUZXh0KHRleHQsdGltZSl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RleHRCb29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50aW1lVG9TdG9wID0gdGltZSArIHRoaXMuaG93TG9uZ1RvU2hvdztcclxuICAgICAgICAgICAgdGhpcy5mb250U2l6ZSA9IHRoaXMuc3RhcnRGb250U2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRYWSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFhZKCl7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5zY3JlZW4ud2lkdGgvMiAtIHRoaXMuZm9udFNpemUqMS41O1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMuc2NyZWVuLmhlaWdodC8yICsgdGhpcy5mb250U2l6ZS80LjU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlTWFwIGV4dGVuZHMgU3ByaXRlIHsvL9Cf0L7QtNC60LvRjtGH0LjQvCDQutCw0YDRgtGDLCDRjdGC0L4g0L/RgNC+0YHRgtC+INGB0L/RgNCw0LnRgiDRgSDQutC+0L3RgtC10LnQvdC10YDQvtC8INC00LDQvdC90YvRhSDQtNC70Y8g0LrQvtC70LvQuNC30LjQuSAo0LzQsNGB0YHQuNCyIGhpdGJveGVzKVxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oaXRib3hlcyA9IHByb3BzLmhpdGJveGVzIHx8IFtdO1xyXG4gICAgfVxyXG59XHJcbi8v0J3QsCDQutCw0YDRgtC1INC80L3QvtCz0L4g0L7QsdGK0LXQutGC0L7Qsiwg0LTQu9GPINC+0L/RgtC40LzQuNC30LDRhtC40Lgg0LTQtdC70LDQtdC8INC/0YDQtdGA0LXQvdC00LXRgCAo0LfQsNGA0LDQvdC10LUg0L7RgtGA0LjRgdC+0LLQsNGC0Ywg0LrQsNGA0YLRgyDQuCDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LrQsNC6INC60LDRgNGC0LjQvdC60YMpLiDQlNC70Y8g0Y3RgtC+0LPQviDRg9C00L7QsdC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMIHNjcmVlbi5qcyIsIi8vVmVjdG9yINC+0YLQstC10YfQsNC10YIg0LfQsCDQv9C10YDQtdC80LXRidC10L3QuNC1INC/0LXRgNGB0L7QvdCw0LbQtdC5INC/0L4g0L3QsNC/0YDQsNCy0LvQtdC90LjRjlxyXG5leHBvcnQgY2xhc3MgVmVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGRpcmVjdGlvbiwgc3BlZWQpIHtcclxuICAgICAgICB0aGlzLnNldERpcmVjdGlvbihkaXJlY3Rpb24sIHNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXJlY3Rpb24oZGlyZWN0aW9uLCBzcGVlZCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFwidXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMueSA9IC1zcGVlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gc3BlZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBzcGVlZDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gLXNwZWVkO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmUob2JqZWN0LCBkdCkgey8vZHQgLSDQstGA0LXQvNGPINC80LXQttC00YMg0L/QvtGB0LvQtdC00L3QuNC80Lgg0YTRgNC10LnQvNCw0LzQuCAodGltZS10aGlzLmxhc3RUaW1lKVxyXG4gICAgICAgIG9iamVjdC54ICs9IGR0ICogKHRoaXMueCAvIDEwMDApO1xyXG4gICAgICAgIG9iamVjdC55ICs9IGR0ICogKHRoaXMueSAvIDEwMDApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGV4dEluZm8gfSBmcm9tIFwiLi90ZXh0LWluZm9cIjtcclxuaW1wb3J0IHtPcmN9IGZyb20gJy4vb3JjJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgV2F2ZXN7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKXtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIC8vIHRoaXMud2F2ZXM7XHJcbiAgICAgICAgLy8gdGhpcy50ZXh0SW5mbyA9IG5ldyBUZXh0SW5mbyh0aGlzLmdhbWUuc2NyZWVuKTtcclxuICAgICAgICB0aGlzLm9yY0FybXkgPSBnYW1lLmN1cnJlbnRTY2VuZS5vcmNBcm15Oy8v0JzQsNGB0YHQuNCyLCDRgdC+0LTQtdGA0LbQsNGJ0LjQuSDQstGB0LXRhSDRgdGD0YnQtdGB0YLQstGD0Y7RidC40YUg0L7RgNC60L7Qsi4g0K3RgtC+0YIg0LrQu9Cw0YHRgSDQv9C+0L/QvtC70L3Rj9C10YIg0Y3RgtC+0YIg0LzQsNGB0YHQuNCyINC90L7QstGL0LzQuCDQvtGA0LrQsNC80LhcclxuICAgICAgICB0aGlzLmNvbGxpZGVyID0gZ2FtZS5jdXJyZW50U2NlbmUuY29sbGlkZXI7Ly/QkdGD0LTQtdC8INC00L7QsdCw0LLQu9GP0YLRjCDQvtGA0LrQvtCyINCyINC60L7Qu9C70LDQudC00LXRgFxyXG4gICAgICAgIHRoaXMucGxheWVyID0gZ2FtZS5jdXJyZW50U2NlbmUucGxheWVyOy8v0J/QtdGA0LXQtNCw0ZHQvCDQuNCz0YDQvtC60LAsINGH0YLQvtCx0Ysg0L7RgNC6INC80L7QsyDRgdC70LXQtNC40YLRjCDQt9CwINC90LjQvCDQuCDQsNGC0LDQutC+0LLQsNGC0Ywg0LXQs9C+XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lTGVmdEZvck5leHRXYXZlID0gNTAwOy8v0KLQsNC50LzQtdGAINC00LvRjyDQvtCx0YDQsNGC0L3QvtCz0L4g0L7RgtGB0YfRkdGC0LAuINCf0LXRgNCy0LDRjyDQstC+0LvQvdCwINC90LDRh9C90ZHRgtGB0Y8g0YfQtdGA0LXQtyAxMDAwINC80YFcclxuICAgICAgICB0aGlzLnRpbWVGb3JOZXh0V2F2ZSA9IDIwMDA7Ly/QmtC+0L3RgdGC0LDQvdGC0LAsINGB0LvQtdC00YPRjtGJ0LDRjyDQstC+0LvQvdCw0Y8g0LHRg9C00LXRgiDRh9C10YDQtdC3INGN0YLQviDQstGA0LXQvNGPXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIC8vIHRoaXMud2F2ZXMgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKXtcclxuICAgICAgICBpZih0aGlzLmxhc3RUaW1lID09MCl7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnRpbWVMZWZ0Rm9yTmV4dFdhdmUgPCAwKXtcclxuICAgICAgICAgICAgdGhpcy5uZXh0V2F2ZSh0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lTGVmdEZvck5leHRXYXZlIC09KHRpbWUtdGhpcy5sYXN0VGltZSk7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgLy8gdGhpcy50ZXh0SW5mby51cGRhdGUodGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFdhdmUodGltZSl7XHJcbiAgICAgICAgLy8gdGhpcy53YXZlcyArPTE7XHJcbiAgICAgICAgLy8gbGV0IHRleHQgPSAnV2F2ZSAjJyt0aGlzLndhdmVzO1xyXG4gICAgICAgIC8vIHRoaXMudGV4dEluZm8uc2hvd1RleHQodGV4dCx0aW1lKTtcclxuXHJcbiAgICAgICAgbGV0IG9yY1NxdWFkID0gW107Ly/QodC+0LfQtNCw0YLRjCDQt9CwINC+0LTQuNC9INGA0LDQtyDQvdC10YHQutC+0LvRjNC60LjRhSDQvtGA0LrQvtCyXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGkgPCAyO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBvcmMgPSBuZXcgT3JjKHRoaXMucGxheWVyKTsvL9Cf0LXRgNC10LTQsNGR0Lwg0LjQs9GA0L7QutCwLCDRh9GC0L7QsdGLINC+0YDQuiDQvNC+0LMg0YHQu9C10LTQuNGC0Ywg0LfQsCDQvdC40Lwg0Lgg0LDRgtCw0LrQvtCy0LDRgtGMINC10LPQvlxyXG4gICAgICAgICAgICBvcmMueCA9IDEzNTA7Ly/Qn9C+0YHQu9C1INC+0YLQu9Cw0LTQutC4INGB0LTQtdC70LDQuSAxMzUwXHJcbiAgICAgICAgICAgIG9yYy55ID0gMTAxNSAraSo3MDtcclxuICAgICAgICAgICAgb3JjU3F1YWQucHVzaChvcmMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb3JjU3F1YWQuZm9yRWFjaChvcmM9PntcclxuICAgICAgICAgICAgdGhpcy5jb2xsaWRlci5hZGRLaW5lbWF0aWNCb2R5KG9yYyk7XHJcbiAgICAgICAgICAgIHRoaXMub3JjQXJteS5wdXNoKG9yYyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGltZUxlZnRGb3JOZXh0V2F2ZSA9ICB0aGlzLnRpbWVGb3JOZXh0V2F2ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=