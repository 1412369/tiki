webpackHotUpdate("browser",{

/***/ "./packages/src/index.tsx":
/*!********************************!*\
  !*** ./packages/src/index.tsx ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/context */ "./packages/src/context/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ "./packages/src/routes/index.tsx");







var ClientApp = function ClientApp() {
  return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_0__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_src_context__WEBPACK_IMPORTED_MODULE_4__["AppProvider"], {
    defaultState: window.defaultState || {}
  }, react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_routes__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
};

Object(_loadable_component__WEBPACK_IMPORTED_MODULE_2__["loadableReady"])(function () {
  Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["hydrate"])(react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ClientApp, null), document.getElementById('app'));
});

if ({"NODE_ENV":"development","PORT":"3000"}.NODE_ENV === 'development' && module.hot) {
   true && module.hot.accept();
}

/***/ })

})
//# sourceMappingURL=browser.a40ccb92f573e04c1544.hot-update.js.map