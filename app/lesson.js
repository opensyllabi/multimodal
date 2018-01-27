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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lesson_mouse_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lesson_typing_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lesson_save_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lesson_globals_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lesson_drawing_js__ = __webpack_require__(19);
__webpack_require__(6)
__webpack_require__(7)
__webpack_require__(0)
__webpack_require__(1)







let init = () => {

	__WEBPACK_IMPORTED_MODULE_4__lesson_drawing_js__["e" /* init */]()

	window.addEventListener('keydown', (e) => {
		__WEBPACK_IMPORTED_MODULE_1__lesson_typing_js__["a" /* handle */](e)
	})

	window.addEventListener('mousemove', (e) =>{
	
		__WEBPACK_IMPORTED_MODULE_0__lesson_mouse_js__["b" /* handle */](e)

		__WEBPACK_IMPORTED_MODULE_4__lesson_drawing_js__["c" /* draw */](e)
	})

	window.addEventListener('mousedown', (e) => {
		__WEBPACK_IMPORTED_MODULE_4__lesson_drawing_js__["a" /* beginDraw */](e)
	})

	window.addEventListener('mouseup', () => {
		__WEBPACK_IMPORTED_MODULE_4__lesson_drawing_js__["d" /* endDraw */]()
	})

}


window.init = init
window.saveSession = __WEBPACK_IMPORTED_MODULE_2__lesson_save_js__["a" /* saveSession */]
window.switchConcept = __WEBPACK_IMPORTED_MODULE_3__lesson_globals_js__["d" /* setCurrentConcept */]
window.clearBoard = __WEBPACK_IMPORTED_MODULE_4__lesson_drawing_js__["b" /* clearBoard */]
window.toggleDraw = __WEBPACK_IMPORTED_MODULE_4__lesson_drawing_js__["f" /* toggleDraw */]


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return currentNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCurrentNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setCurrentNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setCurrrentPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setCurrentConcept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrentConcept; });


let currentNote = null
let currentConcept = 1

let setCurrentNote = (el) => {
	currentNote = el
}

let getCurrentNote = () => {
	return currentNote
}

let setCurrentConcept = (index) => {
	
	currentConcept = index

	let cs = document.getElementsByClassName('concept')
	for(let c of cs){
		c.setAttribute('class', 'concept lesson-btn')
		if(c.getAttribute('concept') == currentConcept)
			c.setAttribute('class', 'concept lesson-btn current-concept')
	}

	let ns = document.getElementsByClassName('note')
	for(let n of ns){
		if(n.getAttribute('concept') == currentConcept){
			n.style.opacity = 1
		}else{
			n.style.opacity = 0
		}
	}
}

let getCurrentConcept = () => {
	return currentConcept
}

let setCurrrentPosition = (pos) => {
	currentNote.style.cssText = 'top: '+pos.y+'px; left: '+pos.x+'px;'
}




/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGridPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return handle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals_js__ = __webpack_require__(15);




let position = {
	x : 0,
	y: 0
}

let getGridPosition = () =>{
	let normalized_pos = {
		x : 0,
		y : 0
	}

	normalized_pos.x = Math.floor(map(position.x, 0, 1800, 0, 18))*100
	normalized_pos.y = Math.floor(map(position.y, 0, 1000, 0, 25))*40

	return normalized_pos
}

let handle = (event) => {
	position.x = event.pageX
	position.y = event.pageY

	if(__WEBPACK_IMPORTED_MODULE_0__globals_js__["a" /* currentNote */] != null){
		Object(__WEBPACK_IMPORTED_MODULE_0__globals_js__["f" /* setCurrrentPosition */])(getGridPosition())
	}

}

let map = (value, start_1, end_1, start_2, end_2) => {
	return start_2 + (end_2 - start_2) * (value - start_1) / (end_1 - start_1)
}




/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mouse_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals_js__ = __webpack_require__(15);





const ESC = 27
const BCK = 8
const SPC = 32
const RET = 13
const TAB = 9
const UP = 38
const DOWN = 40

let currentNote = null

let handle = (e) => {
	currentNote = Object(__WEBPACK_IMPORTED_MODULE_1__globals_js__["c" /* getCurrentNote */])()

	if(e.keyCode == UP){
		let index = Object(__WEBPACK_IMPORTED_MODULE_1__globals_js__["b" /* getCurrentConcept */])()
		index = index - 1 >= 0 ? index - 1 : 0
		Object(__WEBPACK_IMPORTED_MODULE_1__globals_js__["d" /* setCurrentConcept */])(index)
	}

	if(e.keyCode == DOWN){
		let index = Object(__WEBPACK_IMPORTED_MODULE_1__globals_js__["b" /* getCurrentConcept */])()
		let len =  document.getElementsByClassName('concept').length-1
		index = index + 1 < len ? index + 1 : len
		Object(__WEBPACK_IMPORTED_MODULE_1__globals_js__["d" /* setCurrentConcept */])(index)
	}

	if(currentNote == null && e.keyCode != SPC)
		return
	console.log(e.keyCode)	

	switch (e.keyCode) {
	case SPC:
		if(currentNote == null)
			newNote()
		else
			handleKey('\u00A0')
		break
	case BCK:
		eraseCharacter()
		break
	case ESC:
		endNote()
		break
	case TAB:
		handleKey('\u00A0\u00A0\u00A0\u00A0')
		break
	case RET:
		handleKey('\n')
		break
	default:
		if(e.keyCode > 47)
			handleKey(e.key)
		break
	}


}

let newNote = () => {
	let cn = document.createElement('div')
	cn.setAttribute('class', 'note')
	cn.setAttribute('concept', Object(__WEBPACK_IMPORTED_MODULE_1__globals_js__["b" /* getCurrentConcept */])())
	cn.setAttribute('id', 'current')
	cn.innerText = '_'
	document.getElementById('writing-board').append(cn)

	Object(__WEBPACK_IMPORTED_MODULE_1__globals_js__["e" /* setCurrentNote */])(cn)
	Object(__WEBPACK_IMPORTED_MODULE_1__globals_js__["f" /* setCurrrentPosition */])(__WEBPACK_IMPORTED_MODULE_0__mouse_js__["a" /* getGridPosition */]())
}

let endNote = () => {
	// if current note has no text
	if(currentNote.innerText == '_')
		document.getElementById('container').removeChild(currentNote)

	currentNote.removeAttribute('id')
	currentNote.innerText = currentNote.innerText.slice(0, -1)
	currentNote.onclick =(evt) => {
		if(evt.target.getAttribute('id') == 'current') return
		evt.target.setAttribute('id', 'current')
		evt.target.innerText += '_'
		Object(__WEBPACK_IMPORTED_MODULE_1__globals_js__["e" /* setCurrentNote */])(evt.target)
	}
	Object(__WEBPACK_IMPORTED_MODULE_1__globals_js__["e" /* setCurrentNote */])(null)
}

let handleKey = (char) => {
	if(char == 'Meta') return
	currentNote.innerText = currentNote.innerText.slice(0, -1)
	currentNote.innerText += char + '_'
}

let eraseCharacter = () => {
	currentNote.innerText = currentNote.innerText.slice(0, -2) + '_'
}




/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return saveSession; });


const ipc = __webpack_require__(3).ipcRenderer

let saveSession = () => {
	let data = parseDocument()
	
	if(data.length == 0){
		console.log('nothing found on the document!')
		return
	}

	ipc.send('save-session', data)
}

let parseDocument = () => {
	let el_notes = document.getElementsByClassName('note')
	console.log(el_notes)	
	let notes = []
	for(let n of el_notes)
		notes.push(n.innerText)

	return notes
}




/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return beginDraw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return endDraw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clearBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return toggleDraw; });
let cnv, ctx, ctn, toggle_btn
let isDrawing = false
let isDrawMode = false

let init = () => {
	cnv = document.getElementById('drawing-board')
	ctn = document.getElementsByClassName('container')[0]
	toggle_btn = document.getElementsByClassName('toggle-draw')[0]
	
	cnv.width = 1800
	cnv.height = 1000
	ctx = cnv.getContext('2d')
	ctx.lineWidth = 5
	ctx.lineJoin = 'round'
	ctx.lineCap = 'round'
	ctx.strokeStyle = 'red'
}

let beginDraw = (e) => {
	if(!isDrawMode) return

	isDrawing = true
	ctx.moveTo(e.pageX - cnv.offsetLeft, e.pageY - cnv.offsetTop)
	
	ctx.beginPath()
}

let draw = (e) => {
	if(!isDrawing || !isDrawMode) return

	ctx.lineTo(e.pageX-cnv.offsetLeft, e.pageY-cnv.offsetTop)
	ctx.stroke()
}

let endDraw = () => {
	if(!isDrawMode) return
	isDrawing = false
}

let clearBoard = () => {
	ctx.clearRect(0, 0, 1800, 1000)
}

let toggleDraw = () => {
	isDrawMode = !isDrawMode
	if(isDrawMode){
		toggle_btn.innerText = 'draw'
		cnv.style.zIndex = 1
		ctn.style.zIndex = 0
	}else{
		toggle_btn.innerText = 'write'
		cnv.style.zIndex = 0
		ctn.style.zIndex = 1
	}
}




/***/ })
/******/ ]);