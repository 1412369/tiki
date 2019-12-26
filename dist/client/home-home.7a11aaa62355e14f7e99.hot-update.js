webpackHotUpdate("home-home",{

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




var Home = function Home(props) {
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
//# sourceMappingURL=home-home.7a11aaa62355e14f7e99.hot-update.js.map