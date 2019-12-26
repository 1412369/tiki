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

/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  console.log('actions', action);

  if (action.type === _app_types__WEBPACK_IMPORTED_MODULE_0__["appEnums"].APPLY_TICKETS) {
    return state;
  }

  return state;
});

/***/ }),

/***/ "./packages/src/context/app.types.ts":
/*!*******************************************!*\
  !*** ./packages/src/context/app.types.ts ***!
  \*******************************************/
/*! exports provided: appEnums */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appEnums", function() { return appEnums; });
var appEnums;

(function (appEnums) {
  appEnums["APPLY_TICKETS"] = "movie/APLLY TICKETS TO MOVIE";
})(appEnums || (appEnums = {}));

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



/***/ }),

/***/ "./packages/src/index.tsx":
/*!********************************!*\
  !*** ./packages/src/index.tsx ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./packages/src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/context */ "./packages/src/context/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ "./packages/src/routes/index.tsx");








var ClientApp = function ClientApp() {
  return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_src_context__WEBPACK_IMPORTED_MODULE_5__["AppProvider"], {
    defaultState: window.defaultState || {}
  }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_routes__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
};

Object(_loadable_component__WEBPACK_IMPORTED_MODULE_3__["loadableReady"])(function () {
  Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["hydrate"])(react__WEBPACK_IMPORTED_MODULE_4__["createElement"](ClientApp, null), document.getElementById('app'));
});

if ({"NODE_ENV":"development","PORT":"3000"}.NODE_ENV === 'development' && module.hot) {
   true && module.hot.accept();
}

/***/ }),

/***/ "./packages/src/routes/index.tsx":
/*!***************************************!*\
  !*** ./packages/src/routes/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routesMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routesMap */ "./packages/src/routes/routesMap.ts");




var App = function App(_) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], null, _routesMap__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (route) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      key: route.path,
      exact: route.exact,
      path: route.path,
      component: route.component
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./packages/src/routes/routesMap.ts":
/*!******************************************!*\
  !*** ./packages/src/routes/routesMap.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");

/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Home page',
  path: '/',
  exact: true,
  "private": false,
  component: Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__["default"])({
    resolved: {},
    chunkName: function chunkName() {
      return "home-home";
    },
    isReady: function isReady(props) {
      var key = this.resolve(props);

      if (this.resolved[key] === false) {
        return false;
      }

      if (true) {
        return !!__webpack_require__.m[key];
      }

      return false;
    },
    importAsync: function importAsync() {
      return Promise.all(/*! import() | home-home */[__webpack_require__.e("vendors~home-home"), __webpack_require__.e("home-home")]).then(__webpack_require__.bind(null, /*! ./home/home */ "./packages/src/routes/home/home.tsx"));
    },
    requireAsync: function requireAsync(props) {
      var _this = this;

      var key = this.resolve(props);
      this.resolved[key] = false;
      return this.importAsync(props).then(function (resolved) {
        _this.resolved[key] = true;
        return resolved;
      });
    },
    requireSync: function requireSync(props) {
      var id = this.resolve(props);

      if (true) {
        return __webpack_require__(id);
      }

      return eval('module.require')(id);
    },
    resolve: function resolve() {
      if (true) {
        return /*require.resolve*/(/*! ./home/home */ "./packages/src/routes/home/home.tsx");
      }

      return eval('require.resolve')("./home/home");
    }
  })
}]);

/***/ })

})
//# sourceMappingURL=browser.101709f9d5d6ecdaf340.hot-update.js.map