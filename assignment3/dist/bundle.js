/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addMessage.ts":
/*!***************************!*\
  !*** ./src/addMessage.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addMessage = message => {\n  const allMessages = document.getElementById(\"messageList\");\n  const li = document.createElement(\"li\");\n  li.innerHTML = `${message.subject} </br> ${message.body}`;\n  li.classList.add(\"message\");\n  li.classList.add(\"unread\");\n  allMessages.appendChild(li);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMessage);\n\n//# sourceURL=webpack://assignment2/./src/addMessage.ts?");

/***/ }),

/***/ "./src/message.ts":
/*!************************!*\
  !*** ./src/message.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Message)\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass Message {\n  constructor(subject, body) {\n    _defineProperty(this, \"subject\", void 0);\n\n    _defineProperty(this, \"body\", void 0);\n\n    this.subject = subject;\n    this.body = body;\n  }\n\n}\n\n//# sourceURL=webpack://assignment2/./src/message.ts?");

/***/ }),

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ \"./src/message.ts\");\n/* harmony import */ var _addMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMessage */ \"./src/addMessage.ts\");\n/* harmony import */ var _switchPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switchPage */ \"./src/switchPage.ts\");\n\n\n\nconst form = document.getElementById(\"form\"); // navbar span\n\nconst readMessages = document.getElementById(\"readMessages\");\nconst newMessage = document.getElementById(\"newMessages\"); // div containing ul + span\n\nconst messageBlock = document.getElementById(\"messageBlock\"); // ul containing messages\n\nconst messageList = document.getElementById(\"messageList\"); // span showing message if messages are unread\n\nconst unreadMessages = document.getElementById(\"unreadMessages\");\nlet unreadMessageCounter = 0;\nform.addEventListener(\"submit\", event => submitForm(event));\nreadMessages.addEventListener(\"click\", () => (0,_switchPage__WEBPACK_IMPORTED_MODULE_2__.default)(messageBlock, form), false);\nnewMessage.addEventListener(\"click\", () => {\n  (0,_switchPage__WEBPACK_IMPORTED_MODULE_2__.default)(form, messageBlock);\n  form.reset();\n}, false);\nmessageList.addEventListener(\"click\", event => {\n  const target = event.target;\n\n  if (target.classList.contains(\"unread\")) {\n    target.classList.remove(\"unread\");\n    unreadMessageCounter -= 1;\n    updateReadMessages();\n    updateMessageNav();\n  }\n});\n\nconst submitForm = event => {\n  const formData = new FormData(form);\n  const message = new _message__WEBPACK_IMPORTED_MODULE_0__.default(formData.get(\"subject\").toString(), formData.get(\"body\").toString());\n  event.preventDefault();\n  (0,_addMessage__WEBPACK_IMPORTED_MODULE_1__.default)(message);\n  unreadMessageCounter += 1;\n  updateReadMessages();\n  updateMessageNav();\n  (0,_switchPage__WEBPACK_IMPORTED_MODULE_2__.default)(messageBlock, form);\n  form.reset();\n};\n\nconst updateReadMessages = () => {\n  if (unreadMessageCounter > 0) {\n    unreadMessages.innerHTML = `you have ${unreadMessageCounter} messages`;\n    unreadMessages.hidden = false;\n  } else {\n    unreadMessages.hidden = true;\n  }\n};\n\nconst updateMessageNav = () => {\n  readMessages.innerHTML = `Messages [${unreadMessageCounter > 5 ? \"5+\" : unreadMessageCounter}]`;\n};\n\n//# sourceURL=webpack://assignment2/./src/script.ts?");

/***/ }),

/***/ "./src/switchPage.ts":
/*!***************************!*\
  !*** ./src/switchPage.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst switchPage = (switchTo, switchFrom) => {\n  // const messageList = (document.getElementById(\"messages\").style.visibility =\n  //   \"visible\");\n  switchTo.hidden = false;\n  switchFrom.hidden = true; // const form = (document.getElementById(\"form\").style.visibility = \"hidden\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (switchPage);\n\n//# sourceURL=webpack://assignment2/./src/switchPage.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.ts");
/******/ 	
/******/ })()
;