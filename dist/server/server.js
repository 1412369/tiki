/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server": 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"home-home":"home-home"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};


/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
  if (action.type === _app_types__WEBPACK_IMPORTED_MODULE_0__["appEnums"].APPLY_TICKETS) {
    var tickets_1 = __spreadArrays(state.tickets);

    action.payload.forEach(function (item) {
      var _a = item.split('_'),
          i = _a[0],
          j = _a[1];

      tickets_1[i][j] = __assign(__assign({}, tickets_1[i][j]), {
        isPicked: true
      });
    });
    return __assign(__assign({}, state), {
      tickets: tickets_1
    });
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

/***/ "./packages/src/routes/index.tsx":
/*!***************************************!*\
  !*** ./packages/src/routes/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Home page',
  path: '/',
  exact: true,
  "private": false,
  component: _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({
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
      return __webpack_require__.e(/*! import() | home-home */ "home-home").then(__webpack_require__.bind(null, /*! ./home/home */ "./packages/src/routes/home/home.tsx"));
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

/***/ }),

/***/ "./server/configs/index.ts":
/*!*********************************!*\
  !*** ./server/configs/index.ts ***!
  \*********************************/
/*! exports provided: cacheTime, generateEmptyMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheTime", function() { return cacheTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEmptyMap", function() { return generateEmptyMap; });
var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

var cacheTime = 3600000 * 24 * 30;
var generateEmptyMap = function generateEmptyMap(_a) {
  var row = _a.row,
      col = _a.col,
      vip = _a.vip,
      deluxe = _a.deluxe,
      picked = _a.picked;
  var FROM = 0,
      TO = 1;
  return __spreadArrays(new Array(row)).map(function (_, rowIndex) {
    return __spreadArrays(new Array(col)).map(function (_, colIndex) {
      var flatIndex = rowIndex * col + colIndex;

      if (flatIndex >= vip[FROM] && flatIndex <= vip[TO]) {
        return {
          type: 'vip',
          isPicked: picked.includes(flatIndex)
        };
      }

      if (flatIndex >= deluxe[FROM] && flatIndex <= deluxe[TO]) {
        return {
          type: 'deluxe',
          isPicked: picked.includes(flatIndex)
        };
      }

      return {
        type: 'standard',
        isPicked: picked.includes(flatIndex)
      };
    });
  });
};

/***/ }),

/***/ "./server/index.ts":
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./server/init.ts");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router */ "./server/router/index.ts");
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./configs */ "./server/configs/index.ts");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middleware */ "./server/middleware/index.ts");










var app = express__WEBPACK_IMPORTED_MODULE_5__(); //============== init middleware ==============

(function () {
  app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3__());
  app.use(cors__WEBPACK_IMPORTED_MODULE_4__());
  app.use(express__WEBPACK_IMPORTED_MODULE_5__["static"]('public', {
    maxAge: _configs__WEBPACK_IMPORTED_MODULE_8__["cacheTime"]
  }));
  app.use(express__WEBPACK_IMPORTED_MODULE_5__["static"]('dist'));
  app.use(body_parser__WEBPACK_IMPORTED_MODULE_1__["json"]());

  if ({"NODE_ENV":"development","PORT":"3000"}.NODE_ENV === 'production') {
    app.use(compression__WEBPACK_IMPORTED_MODULE_2__());
    app.use(helmet__WEBPACK_IMPORTED_MODULE_6__());
  } else {
    Object(_middleware__WEBPACK_IMPORTED_MODULE_9__["webpackMiddleware"])(app);
  }
})(); //============== init router ==============


(function () {
  app.use(_router__WEBPACK_IMPORTED_MODULE_7__["AppRouter"]);
})();

var PORT = parseInt({"NODE_ENV":"development","PORT":"3000"}.PORT, 10);
app.listen(PORT, function () {
  console.log('Running on http://localhost:' + PORT);
});

/***/ }),

/***/ "./server/init.ts":
/*!************************!*\
  !*** ./server/init.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lru-cache */ "lru-cache");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_0__);

var options = {
  max: 50,
  maxAge: 1000 * 60 * 60
};
global.lruCache = new lru_cache__WEBPACK_IMPORTED_MODULE_0___default.a(options);

/***/ }),

/***/ "./server/middleware/index.ts":
/*!************************************!*\
  !*** ./server/middleware/index.ts ***!
  \************************************/
/*! exports provided: webpackMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpack */ "./server/middleware/webpack.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webpackMiddleware", function() { return _webpack__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./server/middleware/webpack.ts":
/*!**************************************!*\
  !*** ./server/middleware/webpack.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (app) {
  var webpack = __webpack_require__(/*! webpack */ "webpack");

  var webpackConfigs = __webpack_require__(/*! @tools/webpack/client */ "@tools/webpack/client");

  var compiler = webpack(webpackConfigs);
  app.use(__webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware")(compiler, {
    logLevel: 'error',
    publicPath: webpackConfigs.output.publicPath,
    writeToDisk: true
  }));
  app.use(__webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware")(compiler));
});

/***/ }),

/***/ "./server/router/app/app.controller.tsx":
/*!**********************************************!*\
  !*** ./server/router/app/app.controller.tsx ***!
  \**********************************************/
/*! exports provided: handleError, renderApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderApp", function() { return renderApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs */ "./server/configs/index.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/routes */ "./packages/src/routes/index.tsx");
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @loadable/server */ "@loadable/server");
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _views_engine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../views/engine */ "./server/views/engine.ts");
/* harmony import */ var _src_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/context */ "./packages/src/context/index.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};













var isFile = function isFile(req) {
  if (req.url.endsWith('.js') || req.url.endsWith('.css') || req.url.endsWith('.ico') || req.url.endsWith('.svg') || req.url.endsWith('.png') || req.url.endsWith('.gif') || req.url.endsWith('.jpg') || req.url.endsWith('.json') || req.url.endsWith('.map') || req.url.endsWith('.tff') || req.url.endsWith('.woff') || req.url.endsWith('.jpeg') || req.url.endsWith('.mp4') || req.url.endsWith('.mp3') || req.url.endsWith('.xml') || req.url.endsWith('.txt')) {
    return true;
  }

  return false;
};

var handleError = function handleError(_error, _req, res, _next) {
  res.status(500).send('server error');
};
var renderApp = function renderApp(req, res, next) {
  return __awaiter(void 0, void 0, void 0, function () {
    var context, webExtractor, sheet, defaultState, jsx, html, scriptTags, styleTags, styleLinks, helmet, fullHTML;
    return __generator(this, function (_a) {
      if (isFile(req)) {
        return [2
        /*return*/
        , next()];
      }

      context = {};
      webExtractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_4__["ChunkExtractor"]({
        statsFile: path__WEBPACK_IMPORTED_MODULE_2__["resolve"]('dist/client/loadable-stats.json'),
        entrypoints: ['browser']
      });
      sheet = new styled_components__WEBPACK_IMPORTED_MODULE_5__["ServerStyleSheet"]();
      defaultState = {
        tickets: Object(_configs__WEBPACK_IMPORTED_MODULE_1__["generateEmptyMap"])({
          row: 9,
          col: 11,
          vip: [12, 30],
          deluxe: [31, 47],
          picked: [1, 2, 3, 4, 7, 8, 9, 40, 41, 42]
        }),
        location: {
          id: 0,
          name: 'CGV Van Hanh Mall',
          start: '9:00',
          end: '11:30'
        },
        meta: {
          total: 48,
          currency: 'vnd',
          types: ['standard', 'deluxe', 'vip'],
          standard: {
            price: 100000,
            discount: ''
          },
          vip: {
            price: 150000,
            discount: ''
          },
          deluxe: {
            price: 200000,
            discount: ''
          }
        }
      };
      jsx = webExtractor.collectChunks(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_6__["StaticRouter"], {
        location: req.url,
        context: context
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](styled_components__WEBPACK_IMPORTED_MODULE_5__["StyleSheetManager"], {
        sheet: sheet.instance
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_context__WEBPACK_IMPORTED_MODULE_10__["AppProvider"], {
        defaultState: defaultState
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_src_routes__WEBPACK_IMPORTED_MODULE_3__["default"], null)))));

      if (context.status === 401) {
        return [2
        /*return*/
        , res.redirect('/sign-in')];
      }

      html = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_7__["renderToString"])(jsx);
      scriptTags = webExtractor.getScriptTags();
      styleTags = sheet.getStyleTags();
      styleLinks = webExtractor.getStyleTags();
      helmet = react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a.renderStatic();
      fullHTML = Object(_views_engine__WEBPACK_IMPORTED_MODULE_9__["default"])({
        styleTags: styleTags,
        html: html,
        defaultState: defaultState,
        scriptTags: scriptTags,
        styleLinks: styleLinks,
        helmet: helmet
      });
      res.send(fullHTML);
      return [2
      /*return*/
      ];
    });
  });
};

/***/ }),

/***/ "./server/router/app/app.router.ts":
/*!*****************************************!*\
  !*** ./server/router/app/app.router.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.controller */ "./server/router/app/app.controller.tsx");


var router = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
router.get('/', _app_controller__WEBPACK_IMPORTED_MODULE_1__["renderApp"], _app_controller__WEBPACK_IMPORTED_MODULE_1__["handleError"]);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./server/router/index.ts":
/*!********************************!*\
  !*** ./server/router/index.ts ***!
  \********************************/
/*! exports provided: AppRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.router */ "./server/router/app/app.router.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppRouter", function() { return _app_app_router__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./server/views/engine.ts":
/*!********************************!*\
  !*** ./server/views/engine.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
  var _b = _a.styleTags,
      styleTags = _b === void 0 ? '' : _b,
      _c = _a.styleLinks,
      styleLinks = _c === void 0 ? '' : _c,
      defaultState = _a.defaultState,
      _d = _a.html,
      html = _d === void 0 ? '' : _d,
      helmet = _a.helmet,
      _e = _a.scriptTags,
      scriptTags = _e === void 0 ? '' : _e;
  return "<!DOCTYPE html>\n  <html lang=\"en-US\">\n  <head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"shortcut icon\" href=\"/images/logo.png\">\n    " + helmet.title.toString() + "\n    " + helmet.meta.toString() + "\n    " + helmet.link.toString() + "\n    " + helmet.script.toString() + "\n    " + styleLinks + "\n    " + styleTags + "\n  </head>\n  <body>\n  <div id=\"app\">" + html + "</div><script>window.defaultState = " + JSON.stringify(defaultState).replace(/</g, "\\u003c") + " </script> " + scriptTags + "\n  </body>\n  </html>\n  ";
});

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/component");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/server");

/***/ }),

/***/ "@tools/webpack/client":
/*!****************************************!*\
  !*** external "@tools/webpack/client" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tools/webpack/client");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "lru-cache":
/*!****************************!*\
  !*** external "lru-cache" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map