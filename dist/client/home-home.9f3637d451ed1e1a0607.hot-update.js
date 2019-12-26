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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScaleButton", function() { return _scale_scale__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _tickets_tickets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickets/tickets */ "./packages/src/routes/home/childs/tickets/tickets.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tickets", function() { return _tickets_tickets__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _status_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./status/status */ "./packages/src/routes/home/childs/status/status.tsx");
/* harmony import */ var _status_status__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_status_status__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _status_status__WEBPACK_IMPORTED_MODULE_4___default.a; });






/***/ }),

/***/ "./packages/src/routes/home/childs/scale/scale.tsx":
/*!*********************************************************!*\
  !*** ./packages/src/routes/home/childs/scale/scale.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SacleButton = function SacleButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Container, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    onClick: function onClick() {
      return setScale(!scale);
    }
  }, "zoom ", scale ? '-' : '+'));
};

/* harmony default export */ __webpack_exports__["default"] = (SacleButton);

/***/ })

})
//# sourceMappingURL=home-home.9f3637d451ed1e1a0607.hot-update.js.map