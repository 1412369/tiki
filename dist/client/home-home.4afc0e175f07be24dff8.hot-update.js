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
/* harmony import */ var _childs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./childs */ "./packages/src/routes/home/childs/index.ts");
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

  var _b = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    total: 0,
    tickets: {}
  }),
      selected = _b[0],
      setSelected = _b[1];

  var _c = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false),
      scale = _c[0],
      setScale = _c[1];

  var tickets = state.tickets,
      meta = state.meta,
      location = state.location;
  var onTicketSelect = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (i, j) {
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
  var calculatePrice = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    return Object.keys(selected.tickets).reduce(function (results, item) {
      var ticket = selected.tickets[item];
      console.log(ticket, item, selected);

      if (ticket) {
        return results + meta[ticket.type].price;
      }

      return results;
    }, 0);
  }, [selected]);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    setSelected({
      total: 0,
      tickets: {}
    });
  }, [state.tickets]);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["HomeContainer"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_home_styled__WEBPACK_IMPORTED_MODULE_2__["MovieTitle"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, "M\u1EAFt bi\u1EBFc")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_childs__WEBPACK_IMPORTED_MODULE_1__["Tickets"], __assign({}, {
    onTicketSelect: onTicketSelect,
    scale: scale,
    tickets: tickets,
    selected: selected
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_childs__WEBPACK_IMPORTED_MODULE_1__["ScaleButton"], {
    scale: scale,
    setScale: setScale
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_childs__WEBPACK_IMPORTED_MODULE_1__["Status"], {
    meta: meta
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_childs__WEBPACK_IMPORTED_MODULE_1__["PayInfo"], {
    location: location,
    calculatePrice: calculatePrice
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_childs__WEBPACK_IMPORTED_MODULE_1__["PayAction"], {
    onPaymentClick: function onPaymentClick() {
      var result = actions.applyTickets(Object.keys(selected.tickets));
      console.log('results', result);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home-home.4afc0e175f07be24dff8.hot-update.js.map