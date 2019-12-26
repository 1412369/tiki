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
/* harmony import */ var _payInfo_payInfo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_payInfo_payInfo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PayInfo", function() { return _payInfo_payInfo__WEBPACK_IMPORTED_MODULE_1___default.a; });
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

/***/ "./packages/src/routes/home/childs/payAction/payAction.tsx":
/*!*****************************************************************!*\
  !*** ./packages/src/routes/home/childs/payAction/payAction.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _payActions_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payActions.styled */ "./packages/src/routes/home/childs/payAction/payActions.styled.tsx");



var PayAction = function PayAction(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_payActions_styled__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", null, "Combo"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    onClick: props.onPaymentClick
  }, "Thanh to\xE1n"));
};

/* harmony default export */ __webpack_exports__["default"] = (PayAction);

/***/ }),

/***/ "./packages/src/routes/home/childs/payAction/payActions.styled.tsx":
/*!*************************************************************************!*\
  !*** ./packages/src/routes/home/childs/payAction/payActions.styled.tsx ***!
  \*************************************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
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


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "payActionsstyled__Container"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  .movie-time {\n    padding-left: 20px;\n    width: 50%;\n    > :nth-child(2) {\n      display: block;\n    }\n  }\n  .movie-total {\n    width: 50%;\n    text-align: right;\n    padding-right: 50px;\n  }\n"], ["\n  display: flex;\n  .movie-time {\n    padding-left: 20px;\n    width: 50%;\n    > :nth-child(2) {\n      display: block;\n    }\n  }\n  .movie-total {\n    width: 50%;\n    text-align: right;\n    padding-right: 50px;\n  }\n"])));
var templateObject_1;

/***/ }),

/***/ "./packages/src/routes/home/childs/payInfo/payInfo.tsx":
/*!*************************************************************!*\
  !*** ./packages/src/routes/home/childs/payInfo/payInfo.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./packages/src/routes/home/childs/scale/scale.tsx":
/*!*********************************************************!*\
  !*** ./packages/src/routes/home/childs/scale/scale.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./packages/src/routes/home/childs/status/status.tsx":
/*!***********************************************************!*\
  !*** ./packages/src/routes/home/childs/status/status.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./packages/src/routes/home/childs/tickets/tickets.tsx":
/*!*************************************************************!*\
  !*** ./packages/src/routes/home/childs/tickets/tickets.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var _childs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./childs */ "./packages/src/routes/home/childs/index.ts");
/* harmony import */ var _home_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.styled */ "./packages/src/routes/home/home.styled.tsx");
/* harmony import */ var _context_app_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/app.context */ "./packages/src/context/app.context.tsx");
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
  var _a = Object(_context_app_context__WEBPACK_IMPORTED_MODULE_4__["useAppContext"])(),
      state = _a[0],
      actions = _a[1];

  var _b = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
    total: 0,
    tickets: {}
  }),
      selected = _b[0],
      setSelected = _b[1];

  var _c = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      scale = _c[0],
      setScale = _c[1];

  var tickets = state.tickets,
      meta = state.meta,
      location = state.location;
  var types = meta.types;
  var onTicketSelect = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (i, j) {
    var _a, _b;

    if (selected.tickets[i + "_" + j]) {
      setSelected(__assign(__assign({}, selected), {
        tickets: __assign(__assign({}, selected.tickets), (_a = {}, _a[i + "_" + j] = null, _a)),
        total: selected.total - 1
      }));
    } else {
      if (selected.total === 6) {
        return alert('max tickets pick');
      }

      setSelected(__assign(__assign({}, selected), {
        tickets: __assign(__assign({}, selected.tickets), (_b = {}, _b[i + "_" + j] = tickets[i][j], _b)),
        total: selected.total + 1
      }));
    }
  }, [selected, state]);
  var calculatePrice = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return Object.keys(selected.tickets).reduce(function (results, item) {
      var ticket = selected.tickets[item];
      console.log(ticket, item, selected);

      if (ticket) {
        return results + meta[ticket.type].price;
      }

      return results;
    }, 0);
  }, [selected]);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    setSelected({
      total: 0,
      tickets: {}
    });
  }, [state.tickets]);
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_3__["HomeContainer"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_3__["MovieTitle"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "M\u1EAFt bi\u1EBFc")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_3__["TicketWrapper"], {
    scale: scale
  }, tickets.map(function (item, rowIndex) {
    var seatRow = String.fromCharCode(65 + rowIndex);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      key: 'row' + rowIndex
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, seatRow), item.map(function (_item, colIndex) {
      if (_item.isPicked) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_3__["ColPicked"], {
          scale: scale
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        key: 'col' + colIndex,
        onClick: function onClick() {
          return onTicketSelect(rowIndex, colIndex);
        },
        scale: scale,
        type: _item.type,
        selected: !!selected.tickets[rowIndex + "_" + colIndex]
      }, !!selected.tickets[rowIndex + "_" + colIndex] ? seatRow + " " + (colIndex + 1) : '');
    }));
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_childs__WEBPACK_IMPORTED_MODULE_2__["ScaleButton"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    onClick: function onClick() {
      return setScale(!scale);
    }
  }, "zoom ", scale ? '-' : '+')), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_3__["TicketStatus"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null, types.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", {
      style: {
        color: _src_configs__WEBPACK_IMPORTED_MODULE_0__["COLORS"][item]["default"]
      }
    }, item, ": ", meta[item].price);
  }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_3__["PaymentInfo"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "movie-time"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, location.name), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, location.start, " | ", location.end)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "movie-total"
  }, calculatePrice)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_childs__WEBPACK_IMPORTED_MODULE_2__["PayAction"], {
    onPaymentClick: function onPaymentClick() {
      var result = actions.applyTickets(Object.keys(selected.tickets));
      console.log('results', result);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home-home.5090921b6dbe8888ad32.hot-update.js.map