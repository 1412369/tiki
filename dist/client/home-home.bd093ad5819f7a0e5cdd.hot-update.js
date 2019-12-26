webpackHotUpdate("home-home",{

/***/ "./packages/src/configs/index.ts":
/*!***************************************!*\
  !*** ./packages/src/configs/index.ts ***!
  \***************************************/
/*! exports provided: API_OFFSET, APP_HELMET, COLORS, BreakPoints, MSG_EMPTY_RESULT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_OFFSET", function() { return API_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_HELMET", function() { return APP_HELMET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styled */ "./packages/src/configs/styled.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakPoints", function() { return _styled__WEBPACK_IMPORTED_MODULE_0__["BreakPoints"]; });

/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./packages/src/configs/message.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MSG_EMPTY_RESULT", function() { return _message__WEBPACK_IMPORTED_MODULE_1__["MSG_EMPTY_RESULT"]; });



var API_OFFSET = 10;
var APP_HELMET = {
  title: 'Vé hòa nhạc, vé hội thảo, vé sự kiện, vé thể thao ở Việt Nam | TicketBox',
  image: 'https://static.ticketbox.vn/images-v2/TKB-FBthumb.jpg',
  description: 'TicketBox là hệ thống phân phối vé và quản lý sự kiện trực tuyến, giúp bạn bán và mua vé các sự kiện thật dễ dàng.',
  url: 'https://ticketbox.vn'
};
var COLORS = {
  VIP: {
    hover: 'green',
    "default": 'green',
    pick: 'green'
  },
  DELUXE: {
    hover: 'red',
    "default": 'red',
    pick: 'red'
  },
  STANDARD: {
    hover: '#ccc',
    "default": '#ccc',
    pick: '#ccc'
  }
};

/***/ }),

/***/ "./packages/src/configs/message.ts":
/*!*****************************************!*\
  !*** ./packages/src/configs/message.ts ***!
  \*****************************************/
/*! exports provided: MSG_EMPTY_RESULT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSG_EMPTY_RESULT", function() { return MSG_EMPTY_RESULT; });
var MSG_EMPTY_RESULT = 'Không tìm thấy kết quả';

/***/ }),

/***/ "./packages/src/configs/styled.ts":
/*!****************************************!*\
  !*** ./packages/src/configs/styled.ts ***!
  \****************************************/
/*! exports provided: BreakPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakPoints", function() { return BreakPoints; });
var BreakPoints = {
  xs: 600,
  sm: 768,
  md: 992,
  lg: 1200
};

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
/* harmony import */ var _src_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/configs */ "./packages/src/configs/index.ts");
/* harmony import */ var _home_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.styled */ "./packages/src/routes/home/home.styled.tsx");
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/app.context */ "./packages/src/context/app.context.tsx");





var Home = function Home(_) {
  var state = Object(_context_app_context__WEBPACK_IMPORTED_MODULE_3__["useAppContext"])()[0];
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["HomeContainer"], null, state.tickets.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["Row"], null, item.map(function (_item) {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        color: _src_configs__WEBPACK_IMPORTED_MODULE_1__["COLORS"][item.type]["default"]
      }, _item.type);
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home-home.bd093ad5819f7a0e5cdd.hot-update.js.map