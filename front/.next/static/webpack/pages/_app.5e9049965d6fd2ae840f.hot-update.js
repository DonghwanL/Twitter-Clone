webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: loginAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar initialState = {\n  user: {\n    isLoggedIn: false,\n    user: null,\n    signUpData: {},\n    loginData: {}\n  },\n  post: {\n    mainPosts: []\n  }\n};\nvar loginAction = function loginAction(data) {\n  return {\n    type: 'LOG_IN',\n    data: data\n  };\n}; // (이전 상태, 액션) => 다음 상태\n\nvar rootReducer = function rootReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'LOG_IN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: _objectSpread(_objectSpread({}, state.user), {}, {\n          isLoggedIn: true,\n          user: action.data\n        })\n      });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanM/Y2U4ZSJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJwb3N0IiwibWFpblBvc3RzIiwibG9naW5BY3Rpb24iLCJkYXRhIiwidHlwZSIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRztBQUNwQkMsTUFBSSxFQUFFO0FBQ0pDLGNBQVUsRUFBRSxLQURSO0FBRUpELFFBQUksRUFBRSxJQUZGO0FBR0pFLGNBQVUsRUFBRSxFQUhSO0FBSUpDLGFBQVMsRUFBRTtBQUpQLEdBRGM7QUFPcEJDLE1BQUksRUFBRTtBQUNKQyxhQUFTLEVBQUU7QUFEUDtBQVBjLENBQXJCO0FBWU8sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQ25DLFNBQU87QUFDTEMsUUFBSSxFQUFFLFFBREQ7QUFFTEQsUUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRCxDQUxNLEMsQ0FPUDs7QUFDQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJYLFlBQXlCO0FBQUEsTUFBWFksTUFBVzs7QUFDcEQsVUFBUUEsTUFBTSxDQUFDSCxJQUFmO0FBQ0UsU0FBSyxRQUFMO0FBQ0UsNkNBQ0tFLEtBREw7QUFFRVYsWUFBSSxrQ0FDQ1UsS0FBSyxDQUFDVixJQURQO0FBRUZDLG9CQUFVLEVBQUUsSUFGVjtBQUdGRCxjQUFJLEVBQUVXLE1BQU0sQ0FBQ0o7QUFIWDtBQUZOO0FBRko7QUFXRCxDQVpEOztBQWNlRSwwRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuIHVzZXI6IHtcbiAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgdXNlcjogbnVsbCxcbiAgIHNpZ25VcERhdGE6IHt9LFxuICAgbG9naW5EYXRhOiB7fSxcbiB9LFxuIHBvc3Q6IHtcbiAgIG1haW5Qb3N0czogW10sXG4gfVxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTE9HX0lOJyxcbiAgICBkYXRhLFxuICB9XG59XG5cbi8vICjsnbTsoIQg7IOB7YOcLCDslaHshZgpID0+IOuLpOydjCDsg4Htg5xcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0xPR19JTic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXG4gICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgICB1c2VyOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ })

})