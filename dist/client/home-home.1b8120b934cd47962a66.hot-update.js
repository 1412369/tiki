webpackHotUpdate("home-home",{

/***/ "./packages/src/routes/home/home.styled.tsx":
/*!**************************************************!*\
  !*** ./packages/src/routes/home/home.styled.tsx ***!
  \**************************************************/
/*! exports provided: HomeContainer, Row, ColPicked, Col, TicketStatus, TicketWrapper, MovieTitle, PaymentInfo, PaymentActions */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/tiny/Desktop/tiki/packages/src/routes/home/home.styled.tsx: Unexpected token (10:1)\n\n\u001b[0m \u001b[90m  8 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mvar\u001b[39m \u001b[33mRow\u001b[39m \u001b[33m=\u001b[39m styled\u001b[33m.\u001b[39mdiv(templateObject_2 \u001b[33m||\u001b[39m (templateObject_2 \u001b[33m=\u001b[39m __makeTemplateObject([\u001b[32m\"\\n  display: flex;\\n  justify-content: center;\\n  span {\\n    padding: 5px 20px 0 0;\\n    font-weight: bold;\\n    font-size: 14px;\\n  }\\n\"\u001b[39m]\u001b[33m,\u001b[39m [\u001b[32m\"\\n  display: flex;\\n  justify-content: center;\\n  span {\\n    padding: 5px 20px 0 0;\\n    font-weight: bold;\\n    font-size: 14px;\\n  }\\n\"\u001b[39m])))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 | \u001b[39m\u001b[36mvar\u001b[39m \u001b[33mDefaultCol\u001b[39m \u001b[33m=\u001b[39m styled\u001b[33m.\u001b[39mdiv(templateObject_3 \u001b[33m||\u001b[39m (templateObject_3 \u001b[33m=\u001b[39m __makeTemplateObject([\u001b[32m\"\\n  margin: 2px;\\n  width: {p=>\"\u001b[39m]\u001b[33m,\u001b[39m [\u001b[32m\"\\n  margin: 2px;\\n  width: {p=>\"\u001b[39m])))\u001b[33m,\u001b[39m $\u001b[33m,\u001b[39m _a \u001b[33m=\u001b[39m \u001b[36mvoid\u001b[39m \u001b[35m0\u001b[39m\u001b[33m,\u001b[39m p \u001b[33m=\u001b[39m _a\u001b[33m.\u001b[39mp\u001b[33m,\u001b[39m scale \u001b[33m=\u001b[39m _a\u001b[33m.\u001b[39mscale\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 10 | \u001b[39m \u001b[33m*\u001b[39m \u001b[35m20\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 | \u001b[39mpx(templateObject_4 \u001b[33m||\u001b[39m (templateObject_4 \u001b[33m=\u001b[39m __makeTemplateObject([\u001b[32m\"};\\n  height: 40px;\\n  text-align: center;\\n  border-radius: 50%;\\n  border: 1px solid #8e8e8e;\\n  cursor: pointer;\\n  font-size: 10px;\\n  line-height: 20px;\\n  word-spacing: -3px;\\n\"\u001b[39m]\u001b[33m,\u001b[39m [\u001b[32m\"};\\n  height: 40px;\\n  text-align: center;\\n  border-radius: 50%;\\n  border: 1px solid #8e8e8e;\\n  cursor: pointer;\\n  font-size: 10px;\\n  line-height: 20px;\\n  word-spacing: -3px;\\n\"\u001b[39m])))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mvar\u001b[39m \u001b[33mColPicked\u001b[39m \u001b[33m=\u001b[39m styled(\u001b[33mDefaultCol\u001b[39m)(templateObject_5 \u001b[33m||\u001b[39m (templateObject_5 \u001b[33m=\u001b[39m __makeTemplateObject([\u001b[32m\"\\n  background: #8e8e8e;\\n\"\u001b[39m]\u001b[33m,\u001b[39m [\u001b[32m\"\\n  background: #8e8e8e;\\n\"\u001b[39m])))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mvar\u001b[39m \u001b[33mCol\u001b[39m \u001b[33m=\u001b[39m styled(\u001b[33mDefaultCol\u001b[39m)(templateObject_6 \u001b[33m||\u001b[39m (templateObject_6 \u001b[33m=\u001b[39m __makeTemplateObject([\u001b[32m\"\\n  background:\"\u001b[39m\u001b[33m,\u001b[39m \u001b[32m\"\\n  border: \"\u001b[39m\u001b[33m,\u001b[39m \u001b[32m\";\\n  :hover {\\nbackground:\"\u001b[39m\u001b[33m,\u001b[39m \u001b[32m\";\\n  }\\n\"\u001b[39m]\u001b[33m,\u001b[39m [\u001b[32m\"\\n  background:\"\u001b[39m\u001b[33m,\u001b[39m \u001b[32m\"\\n  border: \"\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n    at Object.raise (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:6983:17)\n    at Object.unexpected (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:8376:16)\n    at Object.parseExprAtom (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:9637:20)\n    at Object.parseExprAtom (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:4097:20)\n    at Object.parseExprSubscripts (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:9213:23)\n    at Object.parseMaybeUnary (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:9193:21)\n    at Object.parseExprOps (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:9059:23)\n    at Object.parseMaybeConditional (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:9032:23)\n    at Object.parseMaybeAssign (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:8978:21)\n    at Object.parseExpression (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:8928:23)\n    at Object.parseStatementContent (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:10795:23)\n    at Object.parseStatement (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:10666:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:11242:25)\n    at Object.parseBlockBody (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:11229:10)\n    at Object.parseTopLevel (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:10597:10)\n    at Object.parse (/Users/tiny/Desktop/tiki/node_modules/@babel/parser/lib/index.js:12107:10)");

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
  var _a = Object(_context_app_context__WEBPACK_IMPORTED_MODULE_3__["useAppContext"])(),
      state = _a[0],
      actions = _a[1];

  var _b = react__WEBPACK_IMPORTED_MODULE_1__["useState"]({
    total: 0,
    tickets: {}
  }),
      selected = _b[0],
      setSelected = _b[1];

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
  }, calculatePrice)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["PaymentActions"], null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", null, "Combo"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", {
    onClick: function onClick() {
      var result = actions.applyTickets(Object.keys(selected.tickets));
      console.log('results', result);
    }
  }, "Thanh to\xE1n")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home-home.1b8120b934cd47962a66.hot-update.js.map