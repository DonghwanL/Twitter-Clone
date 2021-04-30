module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ \"next-redux-saga\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/hwan/Desktop/Dev/React/react-nodebird/prepare/front/pages/_app.js\";\n\n\n\n\n\n\n\n\n\nconst NodeBird = ({\n  Component\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"title\", {\n        children: \"NodeBird\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(Component, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\nNodeBird.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(NodeBird)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwid2l0aFJlZHV4U2FnYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW1CO0FBQ2xDLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQSxrQkFERjtBQVFELENBVEQ7O0FBV0FELFFBQVEsQ0FBQ0UsU0FBVCxHQUFxQjtBQUNuQkQsV0FBUyxFQUFFRSxpREFBUyxDQUFDQyxXQUFWLENBQXNCQztBQURkLENBQXJCO0FBSWVDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JDLHNEQUFhLENBQUNSLFFBQUQsQ0FBL0IsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnO1xuXG5jb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbXBvbmVudCAvPlxuICAgIDwvPlxuICApO1xufTtcblxuTm9kZUJpcmQucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShOb2RlQmlyZCkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // (이전 상태, 액션) => 다음 상태\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  index: (state = {}, action) => {\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTUEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2xDQyxPQUFLLEVBQUUsQ0FBQ0MsS0FBSyxHQUFHLEVBQVQsRUFBYUMsTUFBYixLQUF3QjtBQUM3QixZQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxXQUFLQywwREFBTDtBQUNFLCtDQUFZSCxLQUFaLEdBQXNCQyxNQUFNLENBQUNHLE9BQTdCOztBQUNGO0FBQ0UsZUFBT0osS0FBUDtBQUpKO0FBTUQsR0FSaUM7QUFTbENLLHFEQVRrQztBQVVsQ0MscURBQUlBO0FBVjhCLENBQUQsQ0FBbkM7QUFhZVQsMEVBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XG5cbi8vICjsnbTsoIQg7IOB7YOcLCDslaHshZgpID0+IOuLpOydjCDsg4Htg5xcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIEhZRFJBVEU6XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfSxcbiAgdXNlcixcbiAgcG9zdCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: 'test'\n    },\n    content: '첫 번째 게시글 #해시태그 #냥냥이',\n    Images: [{\n      src: 'https://i.pinimg.com/564x/c3/a0/22/c3a0224bf4d1eb00dca790910ccc620d.jpg'\n    }, {\n      src: 'https://i.pinimg.com/564x/af/e6/d5/afe6d5b3467da0d01b6affa24559bb77.jpg'\n    }, {\n      src: 'https://i.pinimg.com/564x/cf/fa/83/cffa83ebe67a00b3dfead14ce35060e9.jpg'\n    }],\n    Comment: [{\n      User: {\n        nickname: 'test1'\n      },\n      content: '너무너무 귀여워요!'\n    }, {\n      User: {\n        nickname: 'test2'\n      },\n      content: '저도 키우고 싶어요'\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nconst ADD_POST = 'ADD_POST';\nconst addPost = {\n  type: ADD_POST\n};\nconst dummyPost = {\n  id: 2,\n  content: '테스트 글 입니다',\n  User: {\n    id: 1,\n    nickname: 'hwan'\n  },\n  Images: [],\n  Comments: []\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost, ...state.mainPosts],\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudCIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0IiwiQ29tbWVudHMiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFPLE1BQU1BLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFLENBQUM7QUFDVkMsTUFBRSxFQUFFLENBRE07QUFFVkMsUUFBSSxFQUFFO0FBQ0pELFFBQUUsRUFBRSxDQURBO0FBRUpFLGNBQVEsRUFBRTtBQUZOLEtBRkk7QUFNVkMsV0FBTyxFQUFFLHFCQU5DO0FBT1ZDLFVBQU0sRUFBRSxDQUFDO0FBQ1BDLFNBQUcsRUFBRTtBQURFLEtBQUQsRUFFTDtBQUNEQSxTQUFHLEVBQUU7QUFESixLQUZLLEVBSUw7QUFDREEsU0FBRyxFQUFFO0FBREosS0FKSyxDQVBFO0FBY1ZDLFdBQU8sRUFBRSxDQUFDO0FBQ1JMLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFO0FBRE4sT0FERTtBQUlSQyxhQUFPLEVBQUU7QUFKRCxLQUFELEVBS047QUFDREYsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUU7QUFETixPQURMO0FBSURDLGFBQU8sRUFBRTtBQUpSLEtBTE07QUFkQyxHQUFELENBRGU7QUEyQjFCSSxZQUFVLEVBQUUsRUEzQmM7QUE0QjFCQyxXQUFTLEVBQUU7QUE1QmUsQ0FBckI7QUErQlAsTUFBTUMsUUFBUSxHQUFHLFVBQWpCO0FBQ08sTUFBTUMsT0FBTyxHQUFHO0FBQ3JCQyxNQUFJLEVBQUVGO0FBRGUsQ0FBaEI7QUFJUCxNQUFNRyxTQUFTLEdBQUc7QUFDaEJaLElBQUUsRUFBRSxDQURZO0FBRWhCRyxTQUFPLEVBQUUsV0FGTztBQUdoQkYsTUFBSSxFQUFFO0FBQ0pELE1BQUUsRUFBRSxDQURBO0FBRUpFLFlBQVEsRUFBRTtBQUZOLEdBSFU7QUFPaEJFLFFBQU0sRUFBRSxFQVBRO0FBUWhCUyxVQUFRLEVBQUU7QUFSTSxDQUFsQjs7QUFXQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHakIsWUFBVCxFQUF1QmtCLE1BQXZCLEtBQWtDO0FBQ2hELFVBQVFBLE1BQU0sQ0FBQ0wsSUFBZjtBQUNFLFNBQUtGLFFBQUw7QUFDRSw2Q0FDS00sS0FETDtBQUVFaEIsaUJBQVMsRUFBRSxDQUFDYSxTQUFELEVBQVksR0FBR0csS0FBSyxDQUFDaEIsU0FBckIsQ0FGYjtBQUdFUyxpQkFBUyxFQUFFO0FBSGI7O0FBS0Y7QUFDRSxhQUFPTyxLQUFQO0FBUko7QUFVRCxDQVhEOztBQWFlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtYWluUG9zdHM6IFt7XG4gICAgaWQ6IDEsXG4gICAgVXNlcjoge1xuICAgICAgaWQ6IDEsXG4gICAgICBuaWNrbmFtZTogJ3Rlc3QnLFxuICAgIH0sXG4gICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+uDpeuDpeydtCcsXG4gICAgSW1hZ2VzOiBbe1xuICAgICAgc3JjOiAnaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC9jMy9hMC8yMi9jM2EwMjI0YmY0ZDFlYjAwZGNhNzkwOTEwY2NjNjIwZC5qcGcnXG4gICAgfSwge1xuICAgICAgc3JjOiAnaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC9hZi9lNi9kNS9hZmU2ZDViMzQ2N2RhMGQwMWI2YWZmYTI0NTU5YmI3Ny5qcGcnXG4gICAgfSwge1xuICAgICAgc3JjOiAnaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC9jZi9mYS84My9jZmZhODNlYmU2N2EwMGIzZGZlYWQxNGNlMzUwNjBlOS5qcGcnXG4gICAgfV0sXG4gICAgQ29tbWVudDogW3tcbiAgICAgIFVzZXI6IHtcbiAgICAgICAgbmlja25hbWU6ICd0ZXN0MScsXG4gICAgICB9LFxuICAgICAgY29udGVudDogJ+uEiOustOuEiOustCDqt4Dsl6zsm4zsmpQhJyxcbiAgICB9LCB7XG4gICAgICBVc2VyOiB7XG4gICAgICAgIG5pY2tuYW1lOiAndGVzdDInLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6ICfsoIDrj4Qg7YKk7Jqw6rOgIOyLtuyWtOyalCcsXG4gICAgfV1cbiAgfV0sXG4gIGltYWdlUGF0aHM6IFtdLFxuICBwb3N0QWRkZWQ6IGZhbHNlLFxufVxuXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcbiAgdHlwZTogQUREX1BPU1QsXG59XG5cbmNvbnN0IGR1bW15UG9zdCA9IHtcbiAgaWQ6IDIsXG4gIGNvbnRlbnQ6ICfthYzsiqTtirgg6riAIOyeheuLiOuLpCcsXG4gIFVzZXI6IHtcbiAgICBpZDogMSxcbiAgICBuaWNrbmFtZTogJ2h3YW4nLFxuICB9LFxuICBJbWFnZXM6IFtdLFxuICBDb21tZW50czogW10sXG59O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1BPU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICBwb3N0QWRkZWQ6IHRydWUsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  isLoggingIn: false,\n  // 로그인 시도 중\n  isLoggedIn: false,\n  isLoggingOut: false,\n  // 로그아웃 시도 중\n  me: null,\n  signupData: {},\n  loginData: {}\n};\nconst loginRequestAction = data => {\n  return {\n    type: 'LOG_IN_REQUEST',\n    data\n  };\n};\nconst logoutRequestAction = () => {\n  return {\n    type: 'LOG_OUT_REQUEST'\n  };\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'LOG_IN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: true\n      });\n\n    case 'LOG_IN_SUCCESS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: false,\n        isLoggedIn: true,\n        me: _objectSpread(_objectSpread({}, action.data), {}, {\n          nickname: 'Hwan'\n        })\n      });\n\n    case 'LOG_IN_FAILURE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingIn: false,\n        isLoggedIn: false\n      });\n\n    case 'LOG_OUT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: true\n      });\n\n    case 'LOG_OUT_SUCCESS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: false,\n        isLoggedIn: false,\n        me: null\n      });\n\n    case 'LOG_OUT_FAILURE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggingOut: false\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnaW5nSW4iLCJpc0xvZ2dlZEluIiwiaXNMb2dnaW5nT3V0IiwibWUiLCJzaWdudXBEYXRhIiwibG9naW5EYXRhIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwibmlja25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUc7QUFDMUJDLGFBQVcsRUFBRSxLQURhO0FBQ047QUFDcEJDLFlBQVUsRUFBRSxLQUZjO0FBRzFCQyxjQUFZLEVBQUUsS0FIWTtBQUdMO0FBQ3JCQyxJQUFFLEVBQUUsSUFKc0I7QUFLMUJDLFlBQVUsRUFBRSxFQUxjO0FBTTFCQyxXQUFTLEVBQUU7QUFOZSxDQUFyQjtBQVNBLE1BQU1DLGtCQUFrQixHQUFJQyxJQUFELElBQVU7QUFDMUMsU0FBTztBQUNMQyxRQUFJLEVBQUUsZ0JBREQ7QUFFTEQ7QUFGSyxHQUFQO0FBSUQsQ0FMTTtBQU9BLE1BQU1FLG1CQUFtQixHQUFHLE1BQU07QUFDdkMsU0FBTztBQUNMRCxRQUFJLEVBQUU7QUFERCxHQUFQO0FBR0QsQ0FKTTs7QUFNUCxNQUFNRSxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHWixZQUFULEVBQXVCYSxNQUF2QixLQUFrQztBQUNoRCxVQUFRQSxNQUFNLENBQUNKLElBQWY7QUFDRSxTQUFLLFFBQUw7QUFDRSw2Q0FDT0csS0FEUDtBQUVJWCxtQkFBVyxFQUFFO0FBRmpCOztBQUlGLFNBQUssZ0JBQUw7QUFDRSw2Q0FDT1csS0FEUDtBQUVJWCxtQkFBVyxFQUFFLEtBRmpCO0FBR0lDLGtCQUFVLEVBQUUsSUFIaEI7QUFJSUUsVUFBRSxrQ0FBT1MsTUFBTSxDQUFDTCxJQUFkO0FBQW9CTSxrQkFBUSxFQUFFO0FBQTlCO0FBSk47O0FBTUYsU0FBSyxnQkFBTDtBQUNFLDZDQUNPRixLQURQO0FBRUlYLG1CQUFXLEVBQUUsS0FGakI7QUFHSUMsa0JBQVUsRUFBRTtBQUhoQjs7QUFLRixTQUFLLFNBQUw7QUFDRSw2Q0FDT1UsS0FEUDtBQUVJVCxvQkFBWSxFQUFFO0FBRmxCOztBQUlGLFNBQUssaUJBQUw7QUFDRSw2Q0FDT1MsS0FEUDtBQUVJVCxvQkFBWSxFQUFFLEtBRmxCO0FBR0lELGtCQUFVLEVBQUUsS0FIaEI7QUFJSUUsVUFBRSxFQUFFO0FBSlI7O0FBTUYsU0FBSyxpQkFBTDtBQUNFLDZDQUNPUSxLQURQO0FBRUlULG9CQUFZLEVBQUU7QUFGbEI7O0FBSUY7QUFDRSxhQUFPUyxLQUFQO0FBckNKO0FBdUNELENBeENEOztBQTBDZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNMb2dnaW5nSW46IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+EIOykkVxuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgaXNMb2dnaW5nT3V0OiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhCDspJFcbiAgbWU6IG51bGwsXG4gIHNpZ251cERhdGE6IHt9LFxuICBsb2dpbkRhdGE6IHt9LFxufVxuXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTE9HX0lOX1JFUVVFU1QnLFxuICAgIGRhdGEsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0xPR19PVVRfUkVRVUVTVCcsXG4gIH1cbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdMT0dfSU4nOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZSxcbiAgICAgIH1cbiAgICBjYXNlICdMT0dfSU5fU1VDQ0VTUyc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGlzTG9nZ2luZ0luOiBmYWxzZSxcbiAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgICAgIG1lOiB7IC4uLmFjdGlvbi5kYXRhLCBuaWNrbmFtZTogJ0h3YW4nIH0sIFxuICAgICAgfVxuICAgIGNhc2UgJ0xPR19JTl9GQUlMVVJFJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgaXNMb2dnaW5nSW46IGZhbHNlLFxuICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgfSAgICAgIFxuICAgIGNhc2UgJ0xPR19PVVQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IHRydWUsXG4gICAgICB9XG4gICAgY2FzZSAnTE9HX09VVF9TVUNDRVNTJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcbiAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgICBtZTogbnVsbCxcbiAgICAgIH1cbiAgICBjYXNlICdMT0dfT1VUX0ZBSUxVUkUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ \"./sagas/post.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./sagas/user.js\");\n\n\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_post__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcz83N2UzIl0sIm5hbWVzIjpbInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVlLFVBQVVBLFFBQVYsR0FBcUI7QUFDbEMsUUFBTUMsOERBQUcsQ0FBQyxDQUNSQywrREFBSSxDQUFDQyw2Q0FBRCxDQURJLEVBRVJELCtEQUFJLENBQUNFLDZDQUFELENBRkksQ0FBRCxDQUFUO0FBSUQiLCJmaWxlIjoiLi9zYWdhcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsocG9zdFNhZ2EpLCBcbiAgICBmb3JrKHVzZXJTYWdhKSxcbiAgXSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/index.js\n");

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PostSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction addPostAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/post', data);\n}\n\nfunction* addPost(action) {\n  try {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'ADD_POST_SUCCESS'\n    });\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'ADD_POST_FAILURE',\n      data: err.response.data\n    });\n  }\n}\n\nfunction* watchAddPost() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])('ADD_POST_REQUEST', addPost);\n}\n\nfunction* PostSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchAddPost)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3N0LmpzPzNhYmEiXSwibmFtZXMiOlsiYWRkUG9zdEFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhZGRQb3N0IiwiYWN0aW9uIiwiZGVsYXkiLCJwdXQiLCJ0eXBlIiwiZXJyIiwicmVzcG9uc2UiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0IiwiUG9zdFNhZ2EiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3hCLFNBQU9DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxXQUFYLEVBQXdCRixJQUF4QixDQUFQO0FBQ0Q7O0FBRUQsVUFBVUcsT0FBVixDQUFrQkMsTUFBbEIsRUFBMEI7QUFDeEIsTUFBSTtBQUNGLFVBQU1DLGdFQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTUMsOERBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUU7QUFERSxLQUFELENBQVQ7QUFHRCxHQUxELENBS0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1osVUFBTUYsOERBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUUsa0JBREU7QUFFUlAsVUFBSSxFQUFFUSxHQUFHLENBQUNDLFFBQUosQ0FBYVQ7QUFGWCxLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFVBQVVVLFlBQVYsR0FBeUI7QUFDdkIsUUFBTUMscUVBQVUsQ0FBQyxrQkFBRCxFQUFxQlIsT0FBckIsQ0FBaEI7QUFDRDs7QUFHYyxVQUFVUyxRQUFWLEdBQXFCO0FBQ2xDLFFBQU1DLDhEQUFHLENBQUMsQ0FDUkMsK0RBQUksQ0FBQ0osWUFBRCxDQURJLENBQUQsQ0FBVDtBQUdEIiwiZmlsZSI6Ii4vc2FnYXMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBkZWxheSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogJ0FERF9QT1NUX1NVQ0NFU1MnLFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiAnQUREX1BPU1RfRkFJTFVSRScsXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoJ0FERF9QT1NUX1JFUVVFU1QnLCBhZGRQb3N0KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBQb3N0U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXG4gIF0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/post.js\n");

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction logInAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data);\n}\n\nfunction* logIn(action) {\n  try {\n    // const result = yield call(logInAPI, action.data)\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'LOG_IN_SUCCESS',\n      data: action.data\n    });\n  } catch (error) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'LOG_IN_FAILURE',\n      data: error.response.data\n    });\n  }\n}\n\nfunction logOutAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logout');\n}\n\nfunction* logOut() {\n  try {\n    // const result = yield call(logOutAPI);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"delay\"])(1000);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'LOG_OUT_SUCCESS'\n    });\n  } catch (err) {\n    console.error(err);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'LOG_OUT_FAILURE',\n      error: err.response.data\n    });\n  }\n}\n\nfunction* watchLogIn() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])('LOG_IN_REQUEST', logIn);\n}\n\nfunction* watchLogOut() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])('LOG_OUT_REQUEST', logOut);\n}\n\nfunction* userSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogOut)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzP2EzODYiXSwibmFtZXMiOlsibG9nSW5BUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwibG9nSW4iLCJhY3Rpb24iLCJkZWxheSIsInB1dCIsInR5cGUiLCJlcnJvciIsInJlc3BvbnNlIiwibG9nT3V0QVBJIiwibG9nT3V0IiwiZXJyIiwiY29uc29sZSIsIndhdGNoTG9nSW4iLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hMb2dPdXQiLCJ1c2VyU2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdEIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJGLElBQXpCLENBQVA7QUFDRDs7QUFFRCxVQUFVRyxLQUFWLENBQWdCQyxNQUFoQixFQUF3QjtBQUN0QixNQUFJO0FBQ0Y7QUFDQSxVQUFNQyxnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDUkMsVUFBSSxFQUFDLGdCQURHO0FBRVJQLFVBQUksRUFBRUksTUFBTSxDQUFDSjtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBUEQsQ0FPRSxPQUFPUSxLQUFQLEVBQWM7QUFDZCxVQUFNRiw4REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRSxnQkFERTtBQUVSUCxVQUFJLEVBQUVRLEtBQUssQ0FBQ0MsUUFBTixDQUFlVDtBQUZiLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsU0FBU1UsU0FBVCxHQUFxQjtBQUNuQixTQUFPVCw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsYUFBWCxDQUFQO0FBQ0Q7O0FBRUQsVUFBVVMsTUFBVixHQUFtQjtBQUNqQixNQUFJO0FBQ0Y7QUFDQSxVQUFNTixnRUFBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1DLDhEQUFHLENBQUM7QUFDUkMsVUFBSSxFQUFFO0FBREUsS0FBRCxDQUFUO0FBR0QsR0FORCxDQU1FLE9BQU9LLEdBQVAsRUFBWTtBQUNaQyxXQUFPLENBQUNMLEtBQVIsQ0FBY0ksR0FBZDtBQUNBLFVBQU1OLDhEQUFHLENBQUM7QUFDUkMsVUFBSSxFQUFFLGlCQURFO0FBRVJDLFdBQUssRUFBRUksR0FBRyxDQUFDSCxRQUFKLENBQWFUO0FBRlosS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxVQUFVYyxVQUFWLEdBQXVCO0FBQ3JCLFFBQU1DLHFFQUFVLENBQUMsZ0JBQUQsRUFBbUJaLEtBQW5CLENBQWhCO0FBQ0Q7O0FBRUQsVUFBVWEsV0FBVixHQUF3QjtBQUN0QixRQUFNRCxxRUFBVSxDQUFDLGlCQUFELEVBQW9CSixNQUFwQixDQUFoQjtBQUNEOztBQUVjLFVBQVVNLFFBQVYsR0FBcUI7QUFDbEMsUUFBTUMsOERBQUcsQ0FBQyxDQUNSQywrREFBSSxDQUFDTCxVQUFELENBREksRUFFUkssK0RBQUksQ0FBQ0gsV0FBRCxDQUZJLENBQUQsQ0FBVDtBQUlEIiwiZmlsZSI6Ii4vc2FnYXMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBkZWxheSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSlcbn1cblxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xuICB0cnkge1xuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKVxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOidMT0dfSU5fU1VDQ0VTUycsXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogJ0xPR19JTl9GQUlMVVJFJyxcbiAgICAgIGRhdGE6IGVycm9yLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKTtcbn1cblxuZnVuY3Rpb24qIGxvZ091dCgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6ICdMT0dfT1VUX1NVQ0NFU1MnLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6ICdMT0dfT1VUX0ZBSUxVUkUnLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KCdMT0dfSU5fUkVRVUVTVCcsIGxvZ0luKVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoJ0xPR19PVVRfUkVRVUVTVCcsIGxvZ091dClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hMb2dJbiksXG4gICAgZm9yayh3YXRjaExvZ091dCksXG4gIF0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/user.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n\n\n\n\n\n\n\nconst loggerMiddleware = ({\n  dispatch,\n  getState\n}) => next => action => {\n  if (typeof action === 'function') {\n    return action(dispatch, getState, extraArgument);\n  }\n\n  return next(action);\n};\n\nconst configureStore = () => {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();\n  const middlewares = [sagaMiddleware, loggerMiddleware];\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], enhancer);\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImFjdGlvbiIsImV4dHJhQXJndW1lbnQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsInNhZ2FUYXNrIiwicnVuIiwicm9vdFNhZ2EiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGdCQUFnQixHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZQztBQUFaLENBQUQsS0FBNkJDLElBQUQsSUFBV0MsTUFBRCxJQUFZO0FBQ3pFLE1BQUksT0FBT0EsTUFBUCxLQUFrQixVQUF0QixFQUFrQztBQUNoQyxXQUFPQSxNQUFNLENBQUNILFFBQUQsRUFBV0MsUUFBWCxFQUFxQkcsYUFBckIsQ0FBYjtBQUNEOztBQUVELFNBQU9GLElBQUksQ0FBQ0MsTUFBRCxDQUFYO0FBQ0QsQ0FORDs7QUFRQSxNQUFNRSxjQUFjLEdBQUcsTUFBTTtBQUMzQixRQUFNQyxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQztBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDRixjQUFELEVBQWlCUCxnQkFBakIsQ0FBcEI7QUFDQSxRQUFNVSxRQUFRLEdBQUcsUUFDYkMsU0FEYSxHQUViQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBRnZCO0FBR0EsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDQyxpREFBRCxFQUFVTixRQUFWLENBQXpCO0FBQ0FJLE9BQUssQ0FBQ0csUUFBTixHQUFpQlYsY0FBYyxDQUFDVyxHQUFmLENBQW1CQyw4Q0FBbkIsQ0FBakI7QUFDQSxTQUFPTCxLQUFQO0FBQ0QsQ0FURDs7QUFXQSxNQUFNTSxPQUFPLEdBQUdDLHdFQUFhLENBQUNmLGNBQUQsRUFBaUI7QUFDNUNnQixPQUFLO0FBRHVDLENBQWpCLENBQTdCO0FBSWVGLHNFQUFmIiwiZmlsZSI6Ii4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XG5cbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcbiAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmFBcmd1bWVudCk7XG4gIH1cblxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xufTtcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHsgXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIj81MGI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtc2FnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-saga\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });