webpackHotUpdate("browser",{

/***/ "./packages/src/context/app.context.tsx":
/*!**********************************************!*\
  !*** ./packages/src/context/app.context.tsx ***!
  \**********************************************/
/*! exports provided: AppContext, AppProvider, useAppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppProvider", function() { return AppProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppContext", function() { return useAppContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.types */ "./packages/src/context/app.types.ts");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.reducer */ "./packages/src/context/app.reducer.ts");



var AppContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});
var AppProvider = function AppProvider(props) {
  var _a = react__WEBPACK_IMPORTED_MODULE_0__["useReducer"](_app_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], props.defaultState || {}),
      state = _a[0],
      dispatch = _a[1];

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AppContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, props.children);
};
var useAppContext = function useAppContext() {
  var _a = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](AppContext),
      state = _a.state,
      dispatch = _a.dispatch;

  var actions = {
    getDataSuccess: function getDataSuccess(payload) {
      return dispatch({
        type: _app_types__WEBPACK_IMPORTED_MODULE_1__["appEnums"].GET_TICKETS_BY_MOVIE,
        payload: payload
      });
    }
  };
  return [state, actions];
};

/***/ }),

/***/ "./packages/src/context/index.ts":
/*!***************************************!*\
  !*** ./packages/src/context/index.ts ***!
  \***************************************/
/*! exports provided: AppProvider, AppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.context */ "./packages/src/context/app.context.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppProvider", function() { return _app_context__WEBPACK_IMPORTED_MODULE_0__["AppProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return _app_context__WEBPACK_IMPORTED_MODULE_0__["AppContext"]; });



/***/ })

})
//# sourceMappingURL=browser.3d6414ee229c1add570b.hot-update.js.map