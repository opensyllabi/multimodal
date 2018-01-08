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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals_js__ = __webpack_require__(1);




let position = {
  x : 0,
  y: 0
}

let getPosition = () =>{;
  return position
}

let handle = (event) => {
  position.x = event.pageX
  position.y = event.pageY

  if(__WEBPACK_IMPORTED_MODULE_0__globals_js__["a" /* currentNote */] != null){
    Object(__WEBPACK_IMPORTED_MODULE_0__globals_js__["d" /* setCurrrentPosition */])(position)
  }

}




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return currentNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrentNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setCurrentNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setCurrrentPosition; });


let currentNote = null

let setCurrentNote = (el) => {
  currentNote = el
}

let getCurrentNote = () => {
  return currentNote
}

let setCurrrentPosition = (pos) => {
  currentNote.style.cssText = "top: "+pos.y+"px; left: "+pos.x+"px;"
  console.log(currentNote.style.cssText);
}




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mouse_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__typing_js__ = __webpack_require__(4);
__webpack_require__(3)




let init = () => {
	window.addEventListener('keydown', (e) => {
		__WEBPACK_IMPORTED_MODULE_1__typing_js__["a" /* handle */](e)
	})

	window.addEventListener('mousemove', (e) =>{
		__WEBPACK_IMPORTED_MODULE_0__mouse_js__["b" /* handle */](e)
	})
}


window.init = init


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mouse_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals_js__ = __webpack_require__(1);





const ESC = 27
const BCK = 8
const SPC = 32
const RET = 13
const TAB = 9

let currentNote = null
let floating = true

let handle = (e) => {
  currentNote = Object(__WEBPACK_IMPORTED_MODULE_1__globals_js__["b" /* getCurrentNote */])()

  if(currentNote == null && e.keyCode != SPC){
    console.log('key pressed',e.key,'with charCode',e.keyCode,'but no note created, ignoring...')
    return
  }

  switch (e.keyCode) {
    case SPC:
      if(currentNote == null)
        newNote()
      else
        handleKey("\u00A0")
      break;
    case BCK:
      eraseCharacter()
      break;
    case ESC:
      endNote()
      break;
    case TAB:
      handleKey("\u00A0\u00A0")
      break;
    case RET:
      handleKey("\n")
      break;
    default:
      if(e.keyCode > 47)
        handleKey(e.key)
      break;
  }


}

let newNote = () => {
	let cn = document.createElement('div')
	cn.setAttribute('class', 'note')
	cn.setAttribute('id', 'current')
  cn.innerText = "_"
	document.body.append(cn)

  Object(__WEBPACK_IMPORTED_MODULE_1__globals_js__["c" /* setCurrentNote */])(cn)
  Object(__WEBPACK_IMPORTED_MODULE_1__globals_js__["d" /* setCurrrentPosition */])(__WEBPACK_IMPORTED_MODULE_0__mouse_js__["a" /* getPosition */]())
}

let endNote = () => {
	currentNote.removeAttribute('id')
  currentNote.innerText = currentNote.innerText.slice(0, -1)
	Object(__WEBPACK_IMPORTED_MODULE_1__globals_js__["c" /* setCurrentNote */])(null)
}

let handleKey = (char) => {
  if(char == "Meta") return
  currentNote.innerText = currentNote.innerText.slice(0, -1)
	currentNote.innerText += char + "_"
}

let eraseCharacter = () => {
  currentNote.innerText = currentNote.innerText.slice(0, -2) + "_"
 }




/***/ })
/******/ ]);