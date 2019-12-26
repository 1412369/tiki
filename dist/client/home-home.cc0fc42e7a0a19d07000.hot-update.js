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
/* harmony import */ var _src_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/configs */ "./packages/src/configs/index.ts");
/* harmony import */ var _home_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.styled */ "./packages/src/routes/home/home.styled.tsx");
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/app.context */ "./packages/src/context/app.context.tsx");
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






var Home = function Home(_) {
  var state = Object(_context_app_context__WEBPACK_IMPORTED_MODULE_3__["useAppContext"])()[0];

  var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({}),
      selected = _a[0],
      setSelected = _a[1];

  var onTicketSelect = function onTicketSelect(i, j) {
    var _a, _b;

    if (selected[i + "_" + j] === 1) {
      setSelected(__assign(__assign({}, setSelected), (_a = {}, _a[i + "_" + j] = 0, _a)));
    } else {
      setSelected(__assign(__assign({}, setSelected), (_b = {}, _b[i + "_" + j] = 1, _b)));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["HomeContainer"], null, state.tickets.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["Row"], null, item.map(function (_item) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        onClick: function onClick() {},
        color: _src_configs__WEBPACK_IMPORTED_MODULE_1__["COLORS"][_item.type]
      });
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home-home.cc0fc42e7a0a19d07000.hot-update.js.map