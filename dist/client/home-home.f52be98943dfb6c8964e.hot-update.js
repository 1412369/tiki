webpackHotUpdate("home-home",{

/***/ "./packages/src/routes/home/childs/index.ts":
/*!**************************************************!*\
  !*** ./packages/src/routes/home/childs/index.ts ***!
  \**************************************************/
/*! exports provided: PayAction, PayInfo, ScaleButton, Tickets, Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _payAction_payAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payAction/payAction */ "./packages/src/routes/home/childs/payAction/payAction.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayAction", function() { return _payAction_payAction__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _payInfo_payInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payInfo/payInfo */ "./packages/src/routes/home/childs/payInfo/payInfo.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayInfo", function() { return _payInfo_payInfo__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _scale_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scale/scale */ "./packages/src/routes/home/childs/scale/scale.tsx");
/* harmony import */ var _scale_scale__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scale_scale__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ScaleButton", function() { return _scale_scale__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _tickets_tickets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickets/tickets */ "./packages/src/routes/home/childs/tickets/tickets.tsx");
/* harmony import */ var _tickets_tickets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tickets_tickets__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Tickets", function() { return _tickets_tickets__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _status_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status/status */ "./packages/src/routes/home/childs/status/status.tsx");
/* harmony import */ var _status_status__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_status_status__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _status_status__WEBPACK_IMPORTED_MODULE_4___default.a; });






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
/* harmony import */ var _payInfo_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_payInfo_styled__WEBPACK_IMPORTED_MODULE_1__);



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
//# sourceMappingURL=home-home.f52be98943dfb6c8964e.hot-update.js.map