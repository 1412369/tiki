webpackHotUpdate("home-home",{

/***/ "./packages/src/routes/home/childs/status/status.styled.tsx":
/*!******************************************************************!*\
  !*** ./packages/src/routes/home/childs/status/status.styled.tsx ***!
  \******************************************************************/
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
  displayName: "statusstyled__Container"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ul {\n    display: flex;\n    justify-content: center;\n    list-style: none;\n    li {\n      padding: 0 20px;\n      text-transform: capitalize;\n    }\n  }\n"], ["\n  ul {\n    display: flex;\n    justify-content: center;\n    list-style: none;\n    li {\n      padding: 0 20px;\n      text-transform: capitalize;\n    }\n  }\n"])));
var templateObject_1;

/***/ }),

/***/ "./packages/src/routes/home/childs/status/status.tsx":
/*!***********************************************************!*\
  !*** ./packages/src/routes/home/childs/status/status.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @src/configs */ "./packages/src/configs/index.ts");
/* harmony import */ var _status_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status.styled */ "./packages/src/routes/home/childs/status/status.styled.tsx");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var Status = function Status(_a) {
  var meta = _a.meta;

  var types = meta.types,
      rest = __rest(meta, ["types"]);

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_status_styled__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, types.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
      style: {
        color: _src_configs__WEBPACK_IMPORTED_MODULE_1__["COLORS"][item]["default"]
      }
    }, item, ": ", rest[item].price);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Status);

/***/ })

})
//# sourceMappingURL=home-home.cac7342ca83f98b3d459.hot-update.js.map