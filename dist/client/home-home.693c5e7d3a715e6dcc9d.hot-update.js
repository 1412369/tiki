webpackHotUpdate("home-home",{

/***/ "./packages/src/routes/home/childs/scale/scale.styled.tsx":
/*!****************************************************************!*\
  !*** ./packages/src/routes/home/childs/scale/scale.styled.tsx ***!
  \****************************************************************/
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
  displayName: "scalestyled__Container"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  text-align: center;\n"], ["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  text-align: center;\n"])));
var templateObject_1;

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
/* harmony import */ var _scale_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scale.styled */ "./packages/src/routes/home/childs/scale/scale.styled.tsx");



var SacleButton = function SacleButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_scale_styled__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
    onClick: function onClick() {
      return setScale(!scale);
    }
  }, "zoom ", scale ? '-' : '+'));
};

/* harmony default export */ __webpack_exports__["default"] = (SacleButton);

/***/ })

})
//# sourceMappingURL=home-home.693c5e7d3a715e6dcc9d.hot-update.js.map