webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_REQUEST\", function() { return LOG_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_SUCCESS\", function() { return LOG_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_FAILURE\", function() { return LOG_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_REQUEST\", function() { return LOG_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_SUCCESS\", function() { return LOG_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_FAILURE\", function() { return LOG_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_REQUEST\", function() { return SIGN_UP_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_SUCCESS\", function() { return SIGN_UP_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_FAILURE\", function() { return SIGN_UP_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_REQUEST\", function() { return FOLLOW_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_SUCCESS\", function() { return FOLLOW_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_FAILURE\", function() { return FOLLOW_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_REQUEST\", function() { return UNFOLLOW_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_SUCCESS\", function() { return UNFOLLOW_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_FAILURE\", function() { return UNFOLLOW_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutRequestAction\", function() { return logoutRequestAction; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar initialState = {\n  logInLoading: false,\n  // 로그인 시도 중 \n  logInDone: false,\n  logInError: null,\n  logOutLoading: false,\n  // 로그아웃 시도 중\n  logOutDone: false,\n  logOutError: null,\n  signUpLoading: false,\n  // 회원가입 시도 중 \n  signUpDone: false,\n  signUpError: null,\n  me: null,\n  signupData: {},\n  loginData: {}\n};\nvar LOG_IN_REQUEST = 'LOG_IN_REQUEST';\nvar LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';\nvar LOG_IN_FAILURE = 'LOG_IN_FAILURE';\nvar LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';\nvar LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';\nvar LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';\nvar SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';\nvar SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';\nvar SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';\nvar FOLLOW_REQUEST = 'FOLLOW_REQUEST';\nvar FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';\nvar FOLLOW_FAILURE = 'FOLLOW_FAILURE';\nvar UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';\nvar UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';\nvar UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';\n\nvar dummyUser = function dummyUser(data) {\n  return _objectSpread(_objectSpread({}, data), {}, {\n    nickname: 'hwan',\n    id: 1,\n    Posts: [],\n    Followings: [],\n    Followers: []\n  });\n};\n\nvar loginRequestAction = function loginRequestAction(data) {\n  return {\n    type: LOG_IN_REQUEST,\n    data: data\n  };\n};\nvar logoutRequestAction = function logoutRequestAction() {\n  return {\n    type: LOG_OUT_REQUEST\n  };\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case LOG_IN_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logInLoading: true,\n        logInError: null,\n        loginDone: false\n      });\n\n    case LOG_IN_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logInLoading: false,\n        loginDone: true,\n        me: dummyUser(action.data)\n      });\n\n    case LOG_IN_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logInLoading: false,\n        logInError: action.error\n      });\n\n    case LOG_OUT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logOutLoading: true,\n        logOutDone: false,\n        logOutFailure: false\n      });\n\n    case LOG_OUT_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logOutLoading: false,\n        logInDone: true,\n        me: null\n      });\n\n    case LOG_OUT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        logOutLoading: false,\n        logOutError: action.error\n      });\n\n    case SIGN_UP_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        signUpLoading: true,\n        signUpDone: false,\n        signUpFailure: false\n      });\n\n    case SIGN_UP_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        signUpoading: false,\n        signUpDone: true,\n        me: null\n      });\n\n    case SIGN_UP_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        signUpLoading: false,\n        signUpError: action.error\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcz8yYzA1Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsIm1lIiwic2lnbnVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsImR1bW15VXNlciIsImRhdGEiLCJuaWNrbmFtZSIsImlkIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJsb2dpbkRvbmUiLCJlcnJvciIsImxvZ091dEZhaWx1cmUiLCJzaWduVXBGYWlsdXJlIiwic2lnblVwb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsY0FBWSxFQUFFLEtBRFk7QUFDTDtBQUNyQkMsV0FBUyxFQUFFLEtBRmU7QUFHMUJDLFlBQVUsRUFBRSxJQUhjO0FBSTFCQyxlQUFhLEVBQUUsS0FKVztBQUlKO0FBQ3RCQyxZQUFVLEVBQUUs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QUFhLEVBQUUsSUFGbkI7QUFHSUMsa0JBQVUsRUFBRSxLQUhoQjtBQUlJb0MscUJBQWEsRUFBRTtBQUpuQjs7QUFNRixTQUFLeEIsZUFBTDtBQUNFLDZDQUNPbUIsS0FEUDtBQUVJTSxvQkFBWSxFQUFFLEtBRmxCO0FBR0lyQyxrQkFBVSxFQUFFLElBSGhCO0FBSUlFLFVBQUUsRUFBRTtBQUpSOztBQU1BLFNBQUtXLGVBQUw7QUFDQSw2Q0FDUWtCLEtBRFI7QUFFSWhDLHFCQUFhLEVBQUUsS0FGbkI7QUFHSUUsbUJBQVcsRUFBRStCLE1BQU0sQ0FBQ0U7QUFIeEI7O0FBS0Y7QUFDRSxhQUFPSCxLQUFQO0FBOURKO0FBZ0VELENBakVEOztBQW1FZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhCDspJEgXG4gIGxvZ0luRG9uZTogZmFsc2UsXG4gIGxvZ0luRXJyb3I6IG51bGwsXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+EIOykkVxuICBsb2dPdXREb25lOiBmYWxzZSxcbiAgbG9nT3V0RXJyb3I6IG51bGwsXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+EIOykkSBcbiAgc2lnblVwRG9uZTogZmFsc2UsXG4gIHNpZ25VcEVycm9yOiBudWxsLFxuICBtZTogbnVsbCxcbiAgc2lnbnVwRGF0YToge30sXG4gIGxvZ2luRGF0YToge30sXG59XG5cbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xuXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcbiAgLi4uZGF0YSxcbiAgbmlja25hbWU6ICdod2FuJyxcbiAgaWQ6IDEsXG4gIFBvc3RzOiBbXSxcbiAgRm9sbG93aW5nczogW10sXG4gIEZvbGxvd2VyczogW10sXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXG4gICAgZGF0YSxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXG4gIH1cbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBsb2dJbkxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgbG9nSW5FcnJvcjogbnVsbCxcbiAgICAgICAgICBsb2dpbkRvbmU6IGZhbHNlLFxuICAgICAgfVxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGxvZ0luTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgbG9naW5Eb25lOiB0cnVlLFxuICAgICAgICAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpLFxuICAgICAgfVxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGxvZ0luTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgbG9nSW5FcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgfSAgICAgIFxuICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBsb2dPdXRMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgIGxvZ091dERvbmU6IGZhbHNlLFxuICAgICAgICAgIGxvZ091dEZhaWx1cmU6IGZhbHNlLFxuICAgICAgfVxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBsb2dJbkRvbmU6IHRydWUsXG4gICAgICAgICAgbWU6IG51bGwsXG4gICAgICB9XG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGxvZ091dEVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICB9XG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHNpZ25VcExvYWRpbmc6IHRydWUsXG4gICAgICAgICAgc2lnblVwRG9uZTogZmFsc2UsXG4gICAgICAgICAgc2lnblVwRmFpbHVyZTogZmFsc2UsXG4gICAgICB9XG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHNpZ25VcG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgc2lnblVwRG9uZTogdHJ1ZSxcbiAgICAgICAgICBtZTogbnVsbCxcbiAgICAgIH1cbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgc2lnblVwTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgc2lnblVwRXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ })

})