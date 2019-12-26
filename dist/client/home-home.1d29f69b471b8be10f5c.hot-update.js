webpackHotUpdate("home-home",{

/***/ "./packages/src/routes/home/home.styled.tsx":
/*!**************************************************!*\
  !*** ./packages/src/routes/home/home.styled.tsx ***!
  \**************************************************/
/*! exports provided: HomeContainer, Row, Col, TicketStatus, TicketWrapper, MovieTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContainer", function() { return HomeContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return Col; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketStatus", function() { return TicketStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketWrapper", function() { return TicketWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieTitle", function() { return MovieTitle; });
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
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n"], ["\n  display: flex;\n  justify-content: center;\n"])));
var Col = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__Col"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 10px;\n  width: 40px;\n  height: 40px;\n  background:", "\n  border: ", ";\n  border-radius: 50%;\n  :hover {\n    border: ", ";\n  }\n"], ["\n  margin: 10px;\n  width: 40px;\n  height: 40px;\n  background:", "\n  border: ", ";\n  border-radius: 50%;\n  :hover {\n    border: ", ";\n  }\n"])), function (_a) {
  var type = _a.type,
      selected = _a.selected;
  return selected ? _src_configs__WEBPACK_IMPORTED_MODULE_1__["COLORS"][type]["default"] : '#fff';
}, function (_a) {
  var type = _a.type,
      selected = _a.selected;
  return "3px solid " + (selected ? _src_configs__WEBPACK_IMPORTED_MODULE_1__["COLORS"].selected : _src_configs__WEBPACK_IMPORTED_MODULE_1__["COLORS"][type]["default"]);
}, function (_a) {
  var type = _a.type;
  return "3px solid " + _src_configs__WEBPACK_IMPORTED_MODULE_1__["COLORS"][type].hover;
});
var TicketStatus = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__TicketStatus"
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ul {\n    display: flex;\n    justify-content: center;\n    list-style: none;\n    li {\n      padding: 0 20px;\n    }\n  }\n"], ["\n  ul {\n    display: flex;\n    justify-content: center;\n    list-style: none;\n    li {\n      padding: 0 20px;\n    }\n  }\n"])));
var TicketWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__TicketWrapper"
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 50px;\n"], ["\n  margin-top: 50px;\n"])));
var MovieTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "homestyled__MovieTitle"
})(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  height: 100px;\n  background: #a7c4d0;\n  h2 {\n    padding-top: 30px;\n  }\n"], ["\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  height: 100px;\n  background: #a7c4d0;\n  h2 {\n    padding-top: 30px;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

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
        type: _item.type,
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
//# sourceMappingURL=home-home.1d29f69b471b8be10f5c.hot-update.js.map