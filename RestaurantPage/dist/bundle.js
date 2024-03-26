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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Tangerine-Bold.woff */ \"./src/fonts/Tangerine-Bold.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images/RestaurantWallpaper.jpeg */ \"./src/images/RestaurantWallpaper.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n  font-family: 'MyFont';\r\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff');\r\n  font-weight: bold;\r\n}\r\n\r\n* {\r\n  font-family: Roboto, system-ui, -apple-system;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  /* border: 1px solid gray; */\r\n}\r\n\r\nheader {\r\n  height: auto;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.title {\r\n  font-size: 120px;\r\n  text-align: center;\r\n  font-family: 'MyFont';\r\n  vertical-align: center;\r\n  padding: 5px;\r\n  margin: 5px ;\r\n  text-shadow: rgb(255, 251, 39) 0px 0px 5px;\r\n}\r\n\r\nbody {\r\n  background-color:rgb(26, 25, 25);\r\n  margin: 0;\r\n  height: 100dvh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  color: whitesmoke;\r\n  gap: 20px;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  image-rendering: auto;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n/* nav */\r\n\r\nnav {\r\n  height: 50px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  /* align-items: flex-end; */\r\n  gap: 10px;\r\n  margin: 10px;\r\n}\r\n\r\n/* button */\r\n\r\nheader button {\r\n  font-size: 25px;\r\n  appearance: none;\r\n  background-color: inherit;\r\n  border: none;\r\n  color: whitesmoke;\r\n  transition: 0.5s;\r\n  cursor: pointer;\r\n}\r\n\r\n.selected {\r\n  box-shadow: inset rgb(255, 85, 63) 0px -2px 0px;\r\n  /* color: rgb(255, 85, 63); */\r\n  text-shadow: rgb(255, 85, 63) 0px 0px 5px;\r\n}\r\n\r\n/* content */\r\n\r\n.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  box-shadow:inset rgba(0, 0, 0, 0.7) 0px 0px 20px;\r\n  padding: 20px;\r\n  flex: 1;\r\n  width: 90vw;\r\n  margin: auto;\r\n  border-radius: 10px;\r\n}\r\n\r\n.mainTitle {\r\n  font-size: 40px;\r\n  text-shadow: rgb(255, 251, 39) 0px 0px 3px;\r\n}\r\n\r\n.description {\r\n  font-size: 24px;\r\n  text-align: center;\r\n  word-wrap: break-word;\r\n  padding: 20px;\r\n  margin-bottom: 0;\r\n  font-style: italic;\r\n  width: max(500px, 60vw);\r\n}\r\n\r\n.owner {\r\n  width: max(500px, 60vw);\r\n  text-align: right;\r\n  margin-top: 0;\r\n  font-size: 28px;\r\n}\r\n\r\n.owner::before {\r\n  content: '~ ';\r\n}\r\n\r\n/* menu */\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 450px;\r\n  width: max(500px, 60vw);\r\n  border-radius: 10px;\r\n  border: 2px solid rgb(255, 251, 39);\r\n  padding: 10px;\r\n  box-shadow: rgb(255, 251, 39) 0px 0px 10px;\r\n  text-align: center;\r\n}\r\n\r\n.presentation {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items:center;\r\n  gap: 10px;\r\n}\r\n\r\n.titleCard {\r\n  font-size: 80px;\r\n  font-family: 'MyFont';\r\n  margin: 10px;\r\n  text-shadow: rgb(255, 85, 63) 0px 0px 5px;\r\n}\r\n\r\n.imgCard {\r\n  width: 300px;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n\r\n.review {\r\n  font-size: 24px;\r\n  width: 80%;\r\n}\r\n\r\nfooter {\r\n  background-color:rgba(0, 0, 0, 0.8);\r\n  font-size: 24px;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n/* about */\r\n\r\n.networks {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n  height: 300px;\r\n  width: 80vw;\r\n  border-radius: 10px;\r\n  border: 2px solid rgb(255, 251, 39);\r\n  box-shadow: rgb(255, 251, 39) 0px 0px 10px;\r\n}\r\n\r\ni {\r\n  color: black;\r\n  font-size: 40px;\r\n  text-shadow: rgb(255, 85, 63) 0px 0px 10px;\r\n}\r\n\r\n.list {\r\n  height: 80px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  font-size: 40px;\r\n}\r\n\r\n.networkName {\r\n  color: whitesmoke;\r\n  text-decoration: none;\r\n  font-size: 24px;\r\n}\r\n\r\n.networkName:hover {\r\n  text-shadow: rgb(255, 85, 63) 0px 0px 5px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpage/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpage/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/about.js */ \"./src/modules/about.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _images_descarga_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/descarga.jpeg */ \"./src/images/descarga.jpeg\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass Interface {\r\n\r\n  static getSelected() {\r\n    return document.querySelector('.selected');\r\n  }\r\n\r\n  static switchSelected(button) {\r\n    const buttonSelected = Interface.getSelected();\r\n    buttonSelected.classList.remove('selected');\r\n\r\n    button.classList.add('selected');\r\n  }\r\n\r\n  static resetContent() {\r\n    const content = document.querySelector('.content');\r\n    content.innerHTML = '';\r\n  }\r\n\r\n  static initEventListener() {\r\n    // Seleccionamos los botones de navegación\r\n    const home = document.querySelector('.home');\r\n    const menu = document.querySelector('.menu');\r\n    const about = document.querySelector('.about');\r\n\r\n    document.addEventListener('DOMContentLoaded', (event) => {\r\n      home.classList.add('selected');\r\n      (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n      const body = document.querySelector('body');\r\n      body.style.backgroundImage = _images_descarga_jpeg__WEBPACK_IMPORTED_MODULE_4__;\r\n    })\r\n\r\n    home.addEventListener('click', (event) => {\r\n      event.preventDefault();\r\n      if (!home.classList.contains('selected')) {\r\n        Interface.switchSelected(home);\r\n        Interface.resetContent();\r\n        (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n      }\r\n    })\r\n\r\n    menu.addEventListener('click', (event) => {\r\n      event.preventDefault();\r\n      if (!menu.classList.contains('selected')) {\r\n        Interface.switchSelected(menu)\r\n        Interface.resetContent();\r\n        (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n      }\r\n    })\r\n\r\n    about.addEventListener('click', (event) => {\r\n      event.preventDefault();\r\n      if (!about.classList.contains('selected')) {\r\n        Interface.switchSelected(about);\r\n        Interface.resetContent();\r\n        (0,_modules_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n      }\r\n    })\r\n  }\r\n}\r\n\r\nInterface.initEventListener();\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showAbout)\n/* harmony export */ });\n/* harmony import */ var _networks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./networks */ \"./src/modules/networks.js\");\n\r\n\r\nfunction showAbout() {\r\n  const main = document.querySelector('.content');\r\n\r\n  const about = document.createElement('h2');\r\n  about.classList.add('mainTitle');\r\n  about.textContent = 'Can you follow me here!';\r\n\r\n  const networksList = document.createElement('ul');\r\n  networksList.classList.add('networks');\r\n\r\n  for (const network of Object.values(_networks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\r\n    const list = document.createElement('li');\r\n    list.classList.add('list');\r\n\r\n    const icon = document.createElement('i');\r\n    icon.classList.add('icon');\r\n    icon.setAttribute('class', network.icon);\r\n\r\n    const networkName = document.createElement('a');\r\n    networkName.classList.add('networkName');\r\n    networkName.setAttribute('href', network.link);\r\n    networkName.textContent = network.userName;\r\n\r\n    list.appendChild(icon);\r\n    list.appendChild(networkName);\r\n    networksList.appendChild(list);\r\n  }\r\n\r\n  main.appendChild(about);\r\n  main.appendChild(networksList);\r\n}\n\n//# sourceURL=webpack://restaurantpage/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showHome)\n/* harmony export */ });\nfunction showHome() {\r\n  const main = document.querySelector('.content');\r\n\r\n  const title = document.createElement('h2');\r\n  title.classList.add('mainTitle');\r\n  title.textContent = \"Joselin's Sweets\";\r\n\r\n  const description = document.createElement('p');\r\n  description.classList.add('description');\r\n  description.textContent = '\"Do you want something better in your life? Come with us. We can do it for you\"';\r\n\r\n  const owner = document.createElement('h3');\r\n  owner.classList.add('owner');\r\n  owner.textContent = 'Joselin Guzmán';\r\n\r\n  main.appendChild(title);\r\n  main.appendChild(description);\r\n  main.appendChild(owner);\r\n}\n\n//# sourceURL=webpack://restaurantpage/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showMenu)\n/* harmony export */ });\n/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipes */ \"./src/modules/recipes.js\");\n\r\n\r\nfunction showMenu() {\r\n  const main = document.querySelector('.content');\r\n\r\n  for (const recipe of Object.values(_recipes__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\r\n    const card = document.createElement('div');\r\n    card.classList.add('card');\r\n\r\n    // Crea el título e imagen de la comida\r\n    const presentation = document.createElement('div');\r\n    presentation.classList.add('presentation');\r\n\r\n    const title = document.createElement('h2');\r\n    title.classList.add('titleCard');\r\n    title.textContent = recipe.title;\r\n\r\n    const image = document.createElement('img');\r\n    image.classList.add('imgCard');\r\n    image.src = recipe.image;\r\n    image.setAttribute('loading', 'lazy');\r\n\r\n    presentation.appendChild(title);\r\n    presentation.appendChild(image);\r\n\r\n    // Crea la reseña de la comida\r\n    const review = document.createElement('p');\r\n    review.classList.add('review');\r\n    review.textContent = recipe.review;\r\n\r\n    card.appendChild(presentation)\r\n    card.appendChild(review);\r\n    main.appendChild(card);\r\n  }\r\n}\n\n//# sourceURL=webpack://restaurantpage/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/networks.js":
/*!*********************************!*\
  !*** ./src/modules/networks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst networks = {\r\n  instagram: {\r\n    userName: 'joselin.sweet',\r\n    link: 'https://www.instagram.com/joselin.sweet/',\r\n    icon: 'fa-brands fa-square-instagram'\r\n  },\r\n  facebook: {\r\n    userName: 'Joselin Guzmán Aponte',\r\n    link: 'https://www.facebook.com/joseling.a',\r\n    icon: 'fa-brands fa-facebook'\r\n  },\r\n  twitter: {\r\n    userName: 'Joselin Guzmán',\r\n    link: 'https://twitter.com/joselinga',\r\n    icon: 'fa-brands fa-square-x-twitter'\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (networks);\n\n//# sourceURL=webpack://restaurantpage/./src/modules/networks.js?");

/***/ }),

/***/ "./src/modules/recipes.js":
/*!********************************!*\
  !*** ./src/modules/recipes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_Hamburguesa_Sencilla_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/Hamburguesa-Sencilla.jpeg */ \"./src/images/Hamburguesa-Sencilla.jpeg\");\n/* harmony import */ var _images_Perro_Caliente_Sencillo_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Perro-Caliente-Sencillo.jpeg */ \"./src/images/Perro-Caliente-Sencillo.jpeg\");\n/* harmony import */ var _images_Pizza_B_sica_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/Pizza-Básica.jpeg */ \"./src/images/Pizza-Básica.jpeg\");\n/* harmony import */ var _images_Sandwich_Sencillo_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/Sandwich-Sencillo.jpeg */ \"./src/images/Sandwich-Sencillo.jpeg\");\n\r\n\r\n\r\n\r\n\r\nconst recipes = {\r\n  burger: { title: 'Simple Burger', image: _images_Hamburguesa_Sencilla_jpeg__WEBPACK_IMPORTED_MODULE_0__, review: 'The simple burger with cheese, meat, lettuce, tomato and salsa' },\r\n\r\n  hotdog: { title: 'Simple Hot Dog', image: _images_Perro_Caliente_Sencillo_jpeg__WEBPACK_IMPORTED_MODULE_1__, review: 'A simple Hot Dog with Palermo sausage, salsa, chips, onion and cheese' },\r\n\r\n  pizza: { title: 'Simple Pizza', image: _images_Pizza_B_sica_jpeg__WEBPACK_IMPORTED_MODULE_2__, review: 'Simple Family Pizza with Cheese, Pepperoni, Meat, and Peas' },\r\n  \r\n  sandwich: { title: 'Simple Sandwich', image: _images_Sandwich_Sencillo_jpeg__WEBPACK_IMPORTED_MODULE_3__, review: 'A simple sandwich with lettuce, tomato, cheese and ham' }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recipes);\n\n//# sourceURL=webpack://restaurantpage/./src/modules/recipes.js?");

/***/ }),

/***/ "./src/fonts/Tangerine-Bold.woff":
/*!***************************************!*\
  !*** ./src/fonts/Tangerine-Bold.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0f4dd4492796f647efa9.woff\";\n\n//# sourceURL=webpack://restaurantpage/./src/fonts/Tangerine-Bold.woff?");

/***/ }),

/***/ "./src/images/Hamburguesa-Sencilla.jpeg":
/*!**********************************************!*\
  !*** ./src/images/Hamburguesa-Sencilla.jpeg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1cbc6c3baeda8de3ee7e.jpeg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/Hamburguesa-Sencilla.jpeg?");

/***/ }),

/***/ "./src/images/Perro-Caliente-Sencillo.jpeg":
/*!*************************************************!*\
  !*** ./src/images/Perro-Caliente-Sencillo.jpeg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"44637de127fc95132de4.jpeg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/Perro-Caliente-Sencillo.jpeg?");

/***/ }),

/***/ "./src/images/Pizza-Básica.jpeg":
/*!**************************************!*\
  !*** ./src/images/Pizza-Básica.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c52fc0ff4d4e9b02a0e4.jpeg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/Pizza-B%C3%A1sica.jpeg?");

/***/ }),

/***/ "./src/images/RestaurantWallpaper.jpeg":
/*!*********************************************!*\
  !*** ./src/images/RestaurantWallpaper.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"743c26e7257d46f1a404.jpeg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/RestaurantWallpaper.jpeg?");

/***/ }),

/***/ "./src/images/Sandwich-Sencillo.jpeg":
/*!*******************************************!*\
  !*** ./src/images/Sandwich-Sencillo.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"71ea12ae8e481509c8d5.jpeg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/Sandwich-Sencillo.jpeg?");

/***/ }),

/***/ "./src/images/descarga.jpeg":
/*!**********************************!*\
  !*** ./src/images/descarga.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"32e5293cdcad1da32c27.jpeg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/descarga.jpeg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;