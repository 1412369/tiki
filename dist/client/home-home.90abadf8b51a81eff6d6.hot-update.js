webpackHotUpdate("home-home",{

/***/ "./packages/src/routes/home/home.styled.tsx":
/*!**************************************************!*\
  !*** ./packages/src/routes/home/home.styled.tsx ***!
  \**************************************************/
/*! exports provided: HomeContainer, Row, ColPicked, Col, TicketStatus, TicketWrapper, MovieTitle, PaymentInfo, PaymentActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContainer", function() { return HomeContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColPicked", function() { return ColPicked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketStatus", function() { return TicketStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketWrapper", function() { return TicketWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieTitle", function() { return MovieTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfo", function() { return PaymentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentActions", function() { return PaymentActions; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _src_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/configs */ "./packages/src/configs/index.ts");
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
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 700px;\n  margin: auto;\n  min-height: 100vh;\n  background: #fff;\n"], ["\n  width: 700px;\n  margin: auto;\n  min-height: 100vh;\n  background: #fff;\n"])));
var Row = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__Row"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  span {\n    padding: 20px 20px 0 0;\n    font-weight: bold;\n    font-size: 20px;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  span {\n    padding: 20px 20px 0 0;\n    font-weight: bold;\n    font-size: 20px;\n  }\n"])));
var DefaultCol = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__DefaultCol"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 10px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 38px;\n  border-radius: 50%;\n  border: 3px solid #8e8e8e;\n"], ["\n  margin: 10px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 38px;\n  border-radius: 50%;\n  border: 3px solid #8e8e8e;\n"])));
var ColPicked = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(DefaultCol).withConfig({
  displayName: "homestyled__ColPicked"
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background: #8e8e8e;\n"], ["\n  background: #8e8e8e;\n"])));
var Col = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(DefaultCol).withConfig({
  displayName: "homestyled__Col"
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background:", "\n  border: ", ";\n  :hover {\nbackground:", ";\n  }\n"], ["\n  background:", "\n  border: ", ";\n  :hover {\nbackground:", ";\n  }\n"])), function (_a) {
  var selected = _a.selected;
  return selected ? _src_configs__WEBPACK_IMPORTED_MODULE_1__["COLORS"].selected : '#fff';
}, function (_a) {
  var type = _a.type,
      selected = _a.selected;
  return "3px solid " + (selected ? _src_configs__WEBPACK_IMPORTED_MODULE_1__["COLORS"].selected : _src_configs__WEBPACK_IMPORTED_MODULE_1__["COLORS"][type]["default"]);
}, function (p) {
  return p.selected ? _src_configs__WEBPACK_IMPORTED_MODULE_1__["COLORS"].selected : _src_configs__WEBPACK_IMPORTED_MODULE_1__["COLORS"].hover;
});
var TicketStatus = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__TicketStatus"
})(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ul {\n    display: flex;\n    justify-content: center;\n    list-style: none;\n    li {\n      padding: 0 20px;\n      text-transform: capitalize;\n    }\n  }\n"], ["\n  ul {\n    display: flex;\n    justify-content: center;\n    list-style: none;\n    li {\n      padding: 0 20px;\n      text-transform: capitalize;\n    }\n  }\n"])));
var TicketWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__TicketWrapper"
})(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-top: 50px;\n"], ["\n  margin-top: 50px;\n"])));
var MovieTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__MovieTitle"
})(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  height: 100px;\n  background: #a7c4d0;\n  h2 {\n    padding-top: 30px;\n  }\n"], ["\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  height: 100px;\n  background: #a7c4d0;\n  h2 {\n    padding-top: 30px;\n  }\n"])));
var PaymentInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__PaymentInfo"
})(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: flex;\n  .movie-time {\n    width: 50%;\n  }\n  .movie-total {\n    width: 50%;\n    text-align: right;\n    padding-right: 50px;\n  }\n"], ["\n  display: flex;\n  .movie-time {\n    width: 50%;\n  }\n  .movie-total {\n    width: 50%;\n    text-align: right;\n    padding-right: 50px;\n  }\n"])));
var PaymentActions = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__PaymentActions"
})(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  button {\n    margin: 0 20px;\n    width: 120px;\n    height: 40px;\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    font-size: 14px;\n    font-weight: bold;\n    background: #bbb;\n    cursor: pointer;\n    :hover {\n      background: #8e8e8e;\n    }\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  button {\n    margin: 0 20px;\n    width: 120px;\n    height: 40px;\n    outline: none;\n    border: none;\n    border-radius: 5px;\n    font-size: 14px;\n    font-weight: bold;\n    background: #bbb;\n    cursor: pointer;\n    :hover {\n      background: #8e8e8e;\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;

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

  var _a = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
    total: 0,
    tickets: {}
  }),
      selected = _a[0],
      setSelected = _a[1];

  var tickets = state.tickets,
      meta = state.meta,
      location = state.location;
  var types = meta.types;
  var onTicketSelect = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (i, j) {
    var _a, _b;

    if (selected[i + "_" + j]) {
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

  var calculatePrice = function calculatePrice() {
    return Object.keys(selected.tickets).reduce(function (results, item) {
      var ticket = selected.tickets[item];
      console.log(ticket, item, selected);

      if (ticket) {
        return results + meta[ticket.type].price;
      }

      return results;
    }, 0);
  };

  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["HomeContainer"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["MovieTitle"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "M\u1EAFt bi\u1EBFc")), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["TicketWrapper"], null, tickets.map(function (item, rowIndex) {
    var seatRow = String.fromCharCode(65 + rowIndex);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      key: 'row' + rowIndex
    }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, seatRow), item.map(function (_item, colIndex) {
      if (_item.isPicked) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["ColPicked"], null);
      }

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        key: 'col' + colIndex,
        onClick: function onClick() {
          return onTicketSelect(rowIndex, colIndex);
        },
        type: _item.type,
        selected: !!selected.tickets[rowIndex + "_" + colIndex]
      }, !!selected.tickets[rowIndex + "_" + colIndex] ? seatRow + " " + (colIndex + 1) : '');
    }));
  })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["TicketStatus"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", null, types.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", {
      style: {
        color: _src_configs__WEBPACK_IMPORTED_MODULE_0__["COLORS"][item]["default"]
      }
    }, item, ": ", meta[item].price);
  }))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["PaymentInfo"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "movie-time"
  }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, location.name), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, location.start, " | ", location.end)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "movie-total"
  }, calculatePrice())), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["PaymentActions"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", null, "Combo"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", null, "Thanh to\xE1n")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home-home.90abadf8b51a81eff6d6.hot-update.js.map