webpackHotUpdate("home-home",{

/***/ "./packages/src/routes/home/childs/payInfo/payInfo.styled.tsx":
/*!********************************************************************!*\
  !*** ./packages/src/routes/home/childs/payInfo/payInfo.styled.tsx ***!
  \********************************************************************/
/*! exports provided: PaymentInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfo", function() { return PaymentInfo; });
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


var PaymentInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "payInfostyled__PaymentInfo"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  .movie-time {\n    padding-left: 20px;\n    width: 50%;\n    > :nth-child(2) {\n      display: block;\n    }\n  }\n  .movie-total {\n    width: 50%;\n    text-align: right;\n    padding-right: 50px;\n  }\n"], ["\n  display: flex;\n  .movie-time {\n    padding-left: 20px;\n    width: 50%;\n    > :nth-child(2) {\n      display: block;\n    }\n  }\n  .movie-total {\n    width: 50%;\n    text-align: right;\n    padding-right: 50px;\n  }\n"])));
var templateObject_1;

/***/ }),

/***/ "./packages/src/routes/home/childs/payInfo/payInfo.tsx":
/*!*************************************************************!*\
  !*** ./packages/src/routes/home/childs/payInfo/payInfo.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _payInfo_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payInfo.styled */ "./packages/src/routes/home/childs/payInfo/payInfo.styled.tsx");



var PayInfo = function PayInfo(_a) {
  var location = _a.location,
      calculatePrice = _a.calculatePrice;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_payInfo_styled__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "movie-time"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, location.name), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, location.start, " | ", location.end)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "movie-total"
  }, calculatePrice));
};

/* harmony default export */ __webpack_exports__["default"] = (PayInfo);

/***/ })

})
//# sourceMappingURL=home-home.5dfd719e060f2b29be64.hot-update.js.map