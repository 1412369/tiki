webpackHotUpdate("browser",{

/***/ "./packages/src/routes/routesMap.ts":
/*!******************************************!*\
  !*** ./packages/src/routes/routesMap.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");

/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Home page',
  path: '/',
  exact: true,
  "private": false,
  component: Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__["default"])({
    resolved: {},
    chunkName: function chunkName() {
      return "home-home";
    },
    isReady: function isReady(props) {
      var key = this.resolve(props);

      if (this.resolved[key] === false) {
        return false;
      }

      if (true) {
        return !!__webpack_require__.m[key];
      }

      return false;
    },
    importAsync: function importAsync() {
      return Promise.all(/*! import() | home-home */[__webpack_require__.e("vendors~home-home"), __webpack_require__.e("home-home")]).then(__webpack_require__.bind(null, /*! ./home/home */ "./packages/src/routes/home/home.tsx"));
    },
    requireAsync: function requireAsync(props) {
      var _this = this;

      var key = this.resolve(props);
      this.resolved[key] = false;
      return this.importAsync(props).then(function (resolved) {
        _this.resolved[key] = true;
        return resolved;
      });
    },
    requireSync: function requireSync(props) {
      var id = this.resolve(props);

      if (true) {
        return __webpack_require__(id);
      }

      return eval('module.require')(id);
    },
    resolve: function resolve() {
      if (true) {
        return /*require.resolve*/(/*! ./home/home */ "./packages/src/routes/home/home.tsx");
      }

      return eval('require.resolve')("./home/home");
    }
  })
}]);

/***/ })

})
//# sourceMappingURL=browser.860250b5e1fe6975ad7d.hot-update.js.map