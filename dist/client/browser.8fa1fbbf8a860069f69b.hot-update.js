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
    applyTickets: function applyTickets(payload) {
      return dispatch({
        type: _app_types__WEBPACK_IMPORTED_MODULE_1__["appEnums"].APPLY_TICKETS,
        payload: payload
      });
    }
  };
  return [state, actions];
};

/***/ }),

/***/ "./packages/src/context/app.reducer.ts":
/*!*********************************************!*\
  !*** ./packages/src/context/app.reducer.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.types */ "./packages/src/context/app.types.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};


/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  console.log('actions', action);

  if (action.type === _app_types__WEBPACK_IMPORTED_MODULE_0__["appEnums"].APPLY_TICKETS) {
    action.payload.forEach(function (item) {
      var _a = item.split('_'),
          i = _a[0],
          j = _a[1];

      state.tickets[i][j] = __assign(__assign({}, state.tickets[i][j]), {
        isPicked: true
      });
    });
    return __assign({}, state);
  }

  return state;
});

/***/ })

})
//# sourceMappingURL=browser.8fa1fbbf8a860069f69b.hot-update.js.map