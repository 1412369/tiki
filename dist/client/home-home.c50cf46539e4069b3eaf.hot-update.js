webpackHotUpdate("home-home",{

/***/ "./packages/src/routes/home/home.styled.tsx":
/*!**************************************************!*\
  !*** ./packages/src/routes/home/home.styled.tsx ***!
  \**************************************************/
/*! exports provided: HomeContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContainer", function() { return HomeContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var __makeTemplateObject = undefined && undefined.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};


var HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__HomeContainer"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 700px;\n  margin: auto;\n  min-height: 100vh;\n  background: #fff;\n  .row {\n    display: flex;\n    .col {\n      padding: 10px;\n      width: 100px;\n    }\n  }\n"], ["\n  width: 700px;\n  margin: auto;\n  min-height: 100vh;\n  background: #fff;\n  .row {\n    display: flex;\n    .col {\n      padding: 10px;\n      width: 100px;\n    }\n  }\n"])));
var templateObject_1;

/***/ }),

/***/ "./packages/src/routes/home/home.tsx":
/*!*******************************************!*\
  !*** ./packages/src/routes/home/home.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.styled */ "./packages/src/routes/home/home.styled.tsx");
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/app.context */ "./packages/src/context/app.context.tsx");




var Home = function Home(_) {
  var state = Object(_context_app_context__WEBPACK_IMPORTED_MODULE_2__["useAppContext"])()[0];
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_1__["HomeContainer"], null, state.tickets.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "row"
    }, item.map(function (_item) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "col"
      }, _item.type);
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home-home.c50cf46539e4069b3eaf.hot-update.js.map