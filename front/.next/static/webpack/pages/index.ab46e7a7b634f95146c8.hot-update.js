webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/hwan/Desktop/Dev/React/react-nodebird/prepare/front/components/PostImages.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar PostImages = function PostImages(_ref) {\n  _s();\n\n  var images = _ref.images;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showImagesZoom = _useState[0],\n      setShowImagesZoom = _useState[1];\n\n  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    setShowImagesZoom(true);\n  }, []);\n\n  if (images.length === 1) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n        role: \"presentation\",\n        src: images[0].src,\n        alt: image[0].src,\n        onClick: onZoom\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false);\n  }\n\n  if (images.length === 1) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n        role: \"presentation\",\n        src: images[0].src,\n        alt: image[0].src,\n        onClick: onZoom\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: \"\\uAD6C\\uD604 \\uC911 ...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(PostImages, \"UE9uMxceBgwv4jfRR4p3tn5mPaU=\");\n\n_c = PostImages;\nPostImages.PropTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostImages);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostImages\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzPzNkZGEiXSwibmFtZXMiOlsiUG9zdEltYWdlcyIsImltYWdlcyIsInVzZVN0YXRlIiwic2hvd0ltYWdlc1pvb20iLCJzZXRTaG93SW1hZ2VzWm9vbSIsIm9uWm9vbSIsInVzZUNhbGxiYWNrIiwibGVuZ3RoIiwic3JjIiwiaW1hZ2UiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDakMsa0JBQTRDQyxzREFBUSxDQUFDLEtBQUQsQ0FBcEQ7QUFBQSxNQUFPQyxjQUFQO0FBQUEsTUFBdUJDLGlCQUF2Qjs7QUFFQSxNQUFNQyxNQUFNLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUMvQkYscUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNELEdBRnlCLEVBRXZCLEVBRnVCLENBQTFCOztBQUlBLE1BQUlILE1BQU0sQ0FBQ00sTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUN2Qix3QkFDRTtBQUFBLDZCQUNFO0FBQUssWUFBSSxFQUFDLGNBQVY7QUFBeUIsV0FBRyxFQUFFTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVPLEdBQXhDO0FBQTZDLFdBQUcsRUFBRUMsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRCxHQUEzRDtBQUFnRSxlQUFPLEVBQUVIO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFERjtBQUtEOztBQUVELE1BQUlKLE1BQU0sQ0FBQ00sTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUN2Qix3QkFDRTtBQUFBLDZCQUNFO0FBQUssWUFBSSxFQUFDLGNBQVY7QUFBeUIsV0FBRyxFQUFFTixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVPLEdBQXhDO0FBQTZDLFdBQUcsRUFBRUMsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTRCxHQUEzRDtBQUFnRSxlQUFPLEVBQUVIO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFERjtBQUtEOztBQUNELHNCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFHRCxDQXpCRDs7R0FBTUwsVTs7S0FBQUEsVTtBQTJCTkEsVUFBVSxDQUFDVSxTQUFYLEdBQXVCO0FBQ3JCVCxRQUFNLEVBQUVTLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JELGlEQUFTLENBQUNFLE1BQTVCO0FBRGEsQ0FBdkI7QUFJZVoseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RJbWFnZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUG9zdEltYWdlcyA9ICh7IGltYWdlcyB9KSA9PiB7XG4gIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U2hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uWm9vbSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93SW1hZ2VzWm9vbSh0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIHNyYz17aW1hZ2VzWzBdLnNyY30gYWx0PXtpbWFnZVswXS5zcmN9IG9uQ2xpY2s9e29uWm9vbX0gLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIiBzcmM9e2ltYWdlc1swXS5zcmN9IGFsdD17aW1hZ2VbMF0uc3JjfSBvbkNsaWNrPXtvblpvb219IC8+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj7qtaztmIQg7KSRIC4uLjwvZGl2PlxuICApO1xufVxuXG5Qb3N0SW1hZ2VzLlByb3BUeXBlcyA9IHtcbiAgaW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostImages.js\n");

/***/ })

})