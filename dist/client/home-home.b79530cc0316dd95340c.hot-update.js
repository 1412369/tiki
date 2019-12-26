webpackHotUpdate("home-home",{

/***/ "./packages/src/configs/index.ts":
/*!***************************************!*\
  !*** ./packages/src/configs/index.ts ***!
  \***************************************/
/*! exports provided: BreakPoints, MSG_EMPTY_RESULT, API_OFFSET, APP_HELMET, COLORS */
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
  vip: {
    hover: 'green',
    "default": '#8fff8f'
  },
  deluxe: {
    hover: 'red',
    "default": '#f1cfcf'
  },
  standard: {
    hover: '#ccc',
    "default": '#464646'
  },
  selected: '#ccc'
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
/* harmony import */ var _src_configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @src/configs */ "./packages/src/configs/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
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

  var _a = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({}),
      selected = _a[0],
      setSelected = _a[1];

  var onTicketSelect = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (i, j) {
    var _a, _b;

    if (selected[i + "_" + j]) {
      setSelected(__assign(__assign({}, selected), (_a = {}, _a[i + "_" + j] = 0, _a)));
    } else {
      setSelected(__assign(__assign({}, selected), (_b = {}, _b[i + "_" + j] = 1, _b)));
    }
  }, [selected, state]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["HomeContainer"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["MovieTitle"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "M\u1EAFt bi\u1EBFc")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["TicketWrapper"], null, state.tickets.map(function (item, rowIndex) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      key: 'row' + rowIndex
    }, item.map(function (_item, colIndex) {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        key: 'col' + colIndex,
        onClick: function onClick() {
          return onTicketSelect(rowIndex, colIndex);
        },
        color: _src_configs__WEBPACK_IMPORTED_MODULE_0__["COLORS"][_item.type],
        selected: !!selected[rowIndex + "_" + colIndex]
      });
    }));
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["TicketStatus"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", {
    style: {
      color: _src_configs__WEBPACK_IMPORTED_MODULE_0__["COLORS"].standard["default"]
    }
  }, "Standard: 20"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", {
    style: {
      color: _src_configs__WEBPACK_IMPORTED_MODULE_0__["COLORS"].vip["default"]
    }
  }, "Vip: 12"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", {
    style: {
      color: _src_configs__WEBPACK_IMPORTED_MODULE_0__["COLORS"].deluxe["default"]
    }
  }, "Deluxe: 30"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home-home.b79530cc0316dd95340c.hot-update.js.map