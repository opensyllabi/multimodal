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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__typing_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__typing_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__typing_js__);


let isTyping = false
let currentNote = null

let init = () => {
	window.addEventListener('keydown', (e) => {
		if(currentNote == null && e.keyCode != 32){
			console.log('key pressed',e.key, 'but no note created, ignoring...')
			return
		}

		switch (e.keyCode) {
		case 32:
			if(!isTyping)
				newNote()
			else
				handleKey(e.key)
			break
		case 27:
			endNote()
			break
		default:
			handleKey(e.key)
			break
		}

		if(e.keyCode == 32 && !isTyping)
			isTyping = true

		if(e.keyCode == 27)
			isTyping == false
	})
}

let newNote = () => {
	currentNote = document.createElement('div')
	currentNote.setAttribute('class', 'note')
	currentNote.setAttribute('id', 'current')
	document.body.append(currentNote)
	isTyping = true
}

let endNote = () => {
	currentNote.removeAttribute('id')
	currentNote = null
	isTyping = false
}

let handleKey = (char) => {
	currentNote.innerText += char
}

window.init = init
window.prove = __WEBPACK_IMPORTED_MODULE_0__typing_js__["proveExistence"]


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports = module.exports = {}

exports.proveExistence = () => {
  console.log('i am here');
}


/***/ })
/******/ ]);