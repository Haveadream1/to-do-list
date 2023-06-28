/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var date_fns;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/completed.js":
/*!**************************!*\
  !*** ./src/completed.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst completed = () => {\n  let buttonCompleted = document.querySelector(\".button-completed\");\n  let buttonTodo = document.querySelector(\".button-to\");\n  let todo = document.querySelector(\".todo\");\n\n  const changeColor = (() => {\n    buttonCompleted.style.color = \"black\";\n    buttonTodo.style.color = \"#B0B0B0\";\n    todo.remove();\n  })();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completed);\n\n\n//# sourceURL=webpack://date_fns/./src/completed.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _completed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completed */ \"./src/completed.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\nconst home = () => {\n    let container = document.querySelector('.container');\n    let buttonAdd = document.querySelector('.add-to-do');\n    let buttonTab = document.querySelector('.tab');\n    let aside = document.querySelector('aside');\n    let buttonCompleted = document.querySelector('.button-completed');\n    let buttonTodo = document.querySelector('.button-to');\n    let formSection = document.querySelector('.form-section');\n    let FormText = document.querySelector('#form-text');\n    let form = document.querySelector('#form');\n    let formAside = document.querySelector('#form-aside');\n    let buttonAddProject = document.querySelector('.add-project');\n    let sectionAside = document.querySelector('.section-aside');\n    let projectName = document.querySelector('#project-name');\n    let buttonSubmitCancel = document.querySelector('.button-submit-cancel');\n    let myArray = [];\n\n    class Object {\n        constructor(date, text) {\n            this.date = date;\n            this.text = text;\n        };\n    }\n\n    //double creation issue\n    const createTodo = () => {\n        let createSection = document.createElement('section');\n        createSection.classList.add('todo');\n        container.appendChild(createSection);\n\n        let createCheckBox = document.createElement('input');\n        createCheckBox.type = 'checkbox';\n        createCheckBox.classList.add('checkbox');\n        createSection.appendChild(createCheckBox);\n\n        let createText = document.createElement('p');\n        createText.type = 'text';\n        createText.classList.add('text');\n        createSection.appendChild(createText);\n        \n        for(let i = 0; i < myArray.length; i++) {\n            let object = myArray[i];\n            createText.textContent = `${object.text}`;\n        }\n     }\n\n         \n    const getValue = () => {\n        let text = document.querySelector('#form-text').value;\n        let date = document.querySelector('#form-date').value;\n        let newTodo = new Object(date, text);\n        myArray.push(newTodo);\n        console.log(myArray); \n        createTodo();\n    }\n\n\n    buttonAdd.addEventListener('click', function() {\n        formSection.style.visibility = 'visible';\n        FormText.value = '';\n    });\n\n    form.addEventListener('submit', function(event) {\n        event.preventDefault();\n        getValue();\n        formSection.style.visibility = 'hidden';\n    });\n        \n    buttonSubmitCancel.addEventListener('click', function() {\n        formSection.style.visibility = 'hidden';\n        FormText.value = '';\n    });\n\n    // aside\n    buttonTab.addEventListener('click', function() {\n        aside.classList.toggle('visibility');\n    });\n\n    buttonAddProject.addEventListener('click', function() {\n        sectionAside.style.visibility = 'visible';\n        projectName.value = '';\n    });\n\n    formAside.addEventListener('submit', function(event) {\n        event.preventDefault();\n        sectionAside.style.visibility = 'hidden';\n        createProject()\n    })\n\n    let buttonProjectCancel = document.querySelector('.button-project-cancel');\n    buttonProjectCancel.addEventListener('click', function() {\n        sectionAside.style.visibility = 'hidden';\n        projectName.value = '';\n    })\n\n    let createdProject = document.querySelector('.created-project');\n    const createProject = () => {\n        let projectP = document.createElement('p');\n        projectP.textContent = 'tet';\n        createdProject.appendChild(projectP);\n    }\n\n    // tab\n    buttonCompleted.addEventListener('click', _completed__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    buttonTodo.addEventListener('click', _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n/*\n\n\nCreate an object each time we create a new todo\nTake the input value after focus loose\nneed to find a way to change the object and not creating a new one\nfor completed remove the capacity of  creating new todo\nput it like only read\nif the checkbox if on on take the object and create that one in the completed page\nadd style line with position relative to the box \ntab show with toggle\noption create a group\n\n*/\n\n//# sourceURL=webpack://date_fns/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://date_fns/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todo = () => {\n  let buttonCompleted = document.querySelector(\".button-completed\");\n  let buttonTodo = document.querySelector(\".button-to\");\n\n  const changeColor = (() => {\n    buttonCompleted.style.color = \"#B0B0B0\";\n    buttonTodo.style.color = \"black\";\n  })();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);\n\n\n//# sourceURL=webpack://date_fns/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	date_fns = __webpack_exports__;
/******/ 	
/******/ })()
;