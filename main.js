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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-else-return */\n// import { addDays, format, compareAsc} from 'date-fns';\n// import completed from './completed';\n// import todo from './todo';\n// import {project, createProject} from './project';\n\nconst home = () => {\n  const aside = document.querySelector('aside');\n  const asideButton = document.querySelector('.aside-button');\n\n  const formSection = document.querySelector('.form-section')\n  const addProjectButton = document.querySelector('.add-project-button');\n\n  const projectSection = document.querySelector('.project-section');\n\n  asideButton.addEventListener('click', () => {\n    if (aside.style.visibility === 'hidden') {\n      aside.style.visibility = 'visible';\n      asideButton.style.justifySelf = 'end';\n    } else {\n      aside.style.visibility = 'hidden';\n      asideButton.style.justifySelf = 'start';\n    }\n  });\n\n  const displayProjectName = () => {\n    const projectButton = document.createElement('button')\n    const projectName = document.querySelector('#project-name').value;\n\n    projectButton.classList.add('project-button');\n    projectButton.textContent = projectName;\n    projectSection.appendChild(projectButton);\n  }\n\n  const isRequired = (value) => {\n    if (value === '') {\n      return false;\n    } else {\n      return true;\n    }\n  }\n\n  const showError = (input, message) => {\n    const fieldset = input.parentElement;\n    input.classList.add('error');\n    input.classList.remove('success');\n\n    const small = fieldset.querySelector('small');\n    small.style.padding = '10px 10px 0 10px';\n    small.textContent = message;\n  }\n  \n  const showSuccess = (input) => {\n    const fieldset = input.parentElement;\n    input.classList.add('success');\n    input.classList.remove('error');\n\n    const small = fieldset.querySelector('small');\n    small.style.padding = '0';\n    small.textContent = '';\n  }\n\n  const checkProjectName = () => {\n    const projectName = document.querySelector('#project-name');\n\n    let valid = false;\n    const text = projectName.value.trim();\n\n    if (!isRequired(text)) {\n      showError(projectName, '*Please fill this field');\n    } else {\n      showSuccess(projectName);\n      valid = true;\n    }\n    return valid;\n  }\n\n  const createProjectForm = () => {\n    const projectForm = document.createElement('form');\n    projectForm.setAttribute('id','project-form');\n    projectForm.setAttribute('action','post');\n    projectForm.setAttribute('novalidate','true'); /* WHY NOVALIDATE */\n\n    const fieldset = document.createElement('fieldset');\n\n    const input = document.createElement('input');\n    input.type = 'text';\n    input.setAttribute('id','project-name');\n    input.placeholder = 'Ex: Birthday';\n    fieldset.appendChild(input);\n\n    const small = document.createElement('small');\n    fieldset.appendChild(small);\n    projectForm.appendChild(fieldset);\n\n    const formButton = document.createElement('section')\n    formButton.classList.add('form-button');\n    \n    const submitProjectButton = document.createElement('button');\n    submitProjectButton.classList.add('submit-project-button');\n    submitProjectButton.setAttribute('type', 'submit');\n    submitProjectButton.textContent = 'Submit';\n    formButton.appendChild(submitProjectButton);\n\n    projectForm.addEventListener('submit', (event) => {\n      event.preventDefault();\n\n      const formAsideValid = checkProjectName();\n      const isFormValid = formAsideValid;\n\n      if (isFormValid) {\n        displayProjectName();\n        console.log('Valid form');\n      } else {\n        console.log('Invalid form');\n      }\n    })\n\n    projectForm.addEventListener('input', (event) => {\n      if (event.target.id === 'project-name') {\n        checkProjectName();\n      }\n    })\n\n    const cancelProjectButton = document.createElement('button');\n    cancelProjectButton.classList.add('cancel-project-button');\n    cancelProjectButton.textContent = 'Cancel';\n    cancelProjectButton.type = 'button';\n    formButton.appendChild(cancelProjectButton);\n\n    cancelProjectButton.addEventListener('click', () => {\n      projectForm.remove();\n      aside.style.gridTemplateRows = '100px 80px 1fr';\n      addProjectButton.disabled = false;\n    })\n\n    projectForm.appendChild(formButton);\n    formSection.appendChild(projectForm);\n  }\n\n  addProjectButton.addEventListener('click', () => {\n    createProjectForm();\n    aside.style.gridTemplateRows = '100px 200px 1fr';\n    addProjectButton.disabled = true;\n  })\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n/*\n  const myArray = [];\n\n  const todayDate = new Date();\n  const todayDateFormat = format(todayDate, 'yyyy-MM-dd');\n  console.log(todayDateFormat);\n\n  const actualWeek  = addDays(new Date(todayDate), 7)\n  const actualWeekFormat = format(actualWeek, 'yyyy-MM-dd');\n  console.log(actualWeekFormat);\n\n  class Todo {\n    constructor(date, text, projectName) {\n      this.date = date;\n      this.text = text\n      this.projectName = projectName;\n    }\n  }\n\n  const createTodo = () => {\n    const createSection = document.createElement('section');\n    createSection.classList.add('todo');\n    createSection.classList.add('not-checked');\n\n    const sectionToday = document.querySelector('.section-today');\n    const sectionThisWeek = document.querySelector('.section-this-week');\n    const sectionUpcoming = document.querySelector('.section-upcoming');\n\n    const createLine = document.createElement('div');\n\n    const createCheckBox = document.createElement('input');\n    createCheckBox.type = 'checkbox';\n    createCheckBox.classList.add('checkbox');\n    createCheckBox.addEventListener('change', () => {\n      if (createCheckBox.checked) {\n        createLine.classList.add('line');\n        createSection.appendChild(createLine);\n        createSection.classList.remove('not-checked');  \n      } else if (!createCheckBox.checked) {\n        createLine.remove();\n        createSection.classList.add('not-checked');\n      }\n    });\n    createSection.appendChild(createCheckBox);\n\n    const createText = document.createElement('p');\n    createText.type = 'text';\n    createText.classList.add('text');\n    createSection.appendChild(createText);\n\n    const createDate = document.createElement('p');\n    createDate.type = 'text';\n    createDate.classList.add('date');\n    createSection.appendChild(createDate);\n\n    for (let i = 0; i < myArray.length; i+=1) {\n      const object = myArray[i];\n      createText.textContent = `${object.text}`;\n      createDate.textContent = `${object.date}`;\n      \n      const compareDate = compareAsc(new Date(todayDate), new Date(object.date));\n      console.log(compareDate);\n\n      if(compareDate === 0) {\n        sectionToday.appendChild(createSection);\n      } else if(object.date <= actualWeekFormat) {\n        sectionThisWeek.appendChild(createSection);\n      } else if(object.date > actualWeekFormat) {\n        sectionUpcoming.appendChild(createSection);\n      }\n    }\n  };\n\n  const getValue = () => {\n    const text = document.querySelector('#form-text').value;\n    const date = document.querySelector('#form-date').value;\n    const projectNameValue = document.querySelector('#project-name').value;\n  \n    const newTodo = new Todo(date, text, projectNameValue);\n    myArray.push(newTodo);\n    console.log(myArray);\n    createTodo();\n  };\n\n  const regroupResetFunction = () => {\n    formDate.value = '';\n    formText.value = '';\n    formDate.classList.remove('success');\n    formText.classList.remove('success');\n  }\n\n  buttonAddTodo.addEventListener('click', () => {\n    formSection.style.visibility = 'visible';\n    regroupResetFunction();\n  });\n\n  buttonSubmitCancel.addEventListener('click', () => {\n    formSection.style.visibility = 'hidden';\n    regroupResetFunction();\n  });\n\n  buttonTab.addEventListener('click', () => {\n    aside.classList.toggle('visibility');\n    sectionAside.style.visibility = 'hidden';\n  });\n\n  buttonAddProject.addEventListener('click', () => {\n    sectionAside.style.visibility = 'visible';\n    projectName.value = '';\n    projectName.classList.remove('success');\n    sectionAside.style.gridRow = '3';\n    createdProject.style.gridRow = '4';\n  });\n\n  buttonProjectCancel.addEventListener('click', () => {\n    sectionAside.style.visibility = 'hidden';\n    projectName.value = '';\n    projectName.classList.remove('success');\n    sectionAside.style.gridRow = '5';\n    createdProject.style.gridRow = '3';\n  });\n\n  const giveProjectValue = () => {\n    const projectNameValue = document.querySelector('#project-name').value;\n\n    const projectP = document.createElement('button');\n    projectP.classList.add('title-project');\n    projectP.textContent = projectNameValue;\n\n    projectP.addEventListener('click',(e) => {\n      const currentSection = document.querySelector('.current');\n      currentSection.classList.remove('current');\n      currentSection.classList.add('past');\n      e.target.classList.add('current');\n\n      const verifyClassExistence = e.target.classList.contains('past');\n      if(verifyClassExistence) {\n        e.target.classList.remove('past');\n        project()\n        console.log('Already existing project');\n      } else {\n        createProject()\n        console.log('New project element');\n      }\n    })\n    createdProject.appendChild(projectP);\n  };\n\n  buttonCompleted.addEventListener('click', completed);\n  buttonTodo.addEventListener('click', todo);\n\n  const isRequired = (value) => {\n    if (value === '') {\n      return false;\n    } else {\n      return true;\n    }\n  }\n\n  const isDate = (value) => {\n    if (value === 1) {\n      return false;\n    } else {\n      return true;\n    }\n  }\n\n  const showError = (input, message) => {\n    const fieldset = input.parentElement;\n    input.classList.add('error');\n    input.classList.remove('success');\n\n    const small = fieldset.querySelector('small');\n    small.textContent = message;\n  }\n  \n  const showSuccess = (input) => {\n    const fieldset = input.parentElement;\n    input.classList.add('success');\n    input.classList.remove('error');\n\n    const small = fieldset.querySelector('small');\n    small.textContent = '';\n  }\n  \n  const checkFormText = () => {\n    let valid = false;\n    const text = formText.value.trim();\n    if (!isRequired(text)) {\n      showError(formText, 'Please fill this field');\n    } else {\n      showSuccess(formText);\n      valid = true;\n    }\n    return valid;\n  }\n\n  const checkFormDate = () => {\n    let valid = false;\n    const date = formDate.value.trim();\n    const dateNoTrim = formDate.value;\n    const compareDate = compareAsc(new Date(dateToday), new Date(dateNoTrim));\n\n    if (!isRequired(date)) {\n      showError(formDate, 'Please fill this field');\n    } else if (!isDate(compareDate)) {\n      showError(formDate, 'Please put a current date')\n    } else {\n      showSuccess(formDate);\n      valid = true;\n    }\n    return valid;\n  }\n\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n\n    // eslint-disable-next-line one-var\n    const isFormDateValid = checkFormDate(),\n    isFormTextValid = checkFormText();\n\n    const isFormValid = isFormDateValid && isFormTextValid;\n\n    // to submit data to server\n    if (isFormValid) {\n      getValue();\n      formSection.style.visibility = 'hidden';\n      console.log('Valid form');\n    } else {\n      console.log('Error in the form');\n    }\n  });\n\n  form.addEventListener('input', (e) => {\n    // eslint-disable-next-line default-case\n    switch (e.target.id) {\n      case 'form-text':\n        checkFormText();\n        break;\n      case 'form-date':\n        checkFormDate();\n        break;\n    }\n  })\n\n  const checkAsideText = () => {\n    let valid = false;\n    const text = projectName.value.trim();\n    if (!isRequired(text)) {\n      showError(projectName, 'Please fill this field');\n    } else {\n      showSuccess(projectName);\n      valid = true;\n    }\n    return valid;\n  }\n\n  formAside.addEventListener('submit', (event) => {\n    event.preventDefault();\n\n    const formAsideValid = checkAsideText();\n    const isFormValid = formAsideValid;\n\n    if (isFormValid) {\n      sectionAside.style.visibility = 'hidden';\n      sectionAside.style.gridRow = '5';\n      createdProject.style.gridRow = '3';\n      giveProjectValue();\n      console.log('Valid form');\n    } else {\n      console.log('Error in form');\n    }\n  });\n\n  formAside.addEventListener('input', (event) => {\n    if(event.target.id  === 'project-name') {\n        checkAsideText()\n    }\n  })\n};\nexport default home;\n*/\n\n/*  Create an object each time we create a new todo\n    Take the input value after focus loose\n    need to find a way to change the object and not creating a new one\n    for completed remove the capacity of  creating new todo\n    put it like only read\n    if the checkbox if on on take the object and create that one in the completed page\n    add style line with position relative to the box\n    tab show with toggle\n    option create a group\n    project name as a button\n    when we click on a project the todo are ordered \n    by time, thanks to the API that will display\n    date of today, in one week, in one month\n    so divide the page in 3\n    create page for each project and play with the visibility like\n    with the tab */\n\n//# sourceURL=webpack://date_fns/./src/home.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://date_fns/./src/init.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/init.js");
/******/ 	date_fns = __webpack_exports__;
/******/ 	
/******/ })()
;