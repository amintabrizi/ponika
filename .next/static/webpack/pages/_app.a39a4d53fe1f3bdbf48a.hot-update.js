self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/Axios/AxiosConfig.js":
/*!**********************************!*\
  !*** ./src/Axios/AxiosConfig.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var AxiosConfig = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'http://193.26.14.198:5000',
  timeout: 10000
});
AxiosConfig.interceptors.request.use(function (config) {
  //ghab az return mitoonid functioni ro ejra konid
  return config;
}, function (err) {
  // handle error
  return Promise.reject(err);
});
AxiosConfig.interceptors.response.use(function (response) {
  //ghab az return mitoonid functioni ro ejra konid
  return response;
}, function (err) {
  // System log
  return Promise.reject(err);
});
/* harmony default export */ __webpack_exports__["default"] = (AxiosConfig);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0F4aW9zL0F4aW9zQ29uZmlnLmpzIl0sIm5hbWVzIjpbIkF4aW9zQ29uZmlnIiwiYXhpb3MiLCJiYXNlVVJMIiwidGltZW91dCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJlcnIiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsbURBQUEsQ0FBYTtBQUM3QkMsU0FBTyxFQUFFLDJCQURvQjtBQUU3QkMsU0FBTyxFQUFFO0FBRm9CLENBQWIsQ0FBcEI7QUFLQUgsV0FBVyxDQUFDSSxZQUFaLENBQXlCQyxPQUF6QixDQUFpQ0MsR0FBakMsQ0FBcUMsVUFBVUMsTUFBVixFQUFrQjtBQUNuRDtBQUNBLFNBQU9BLE1BQVA7QUFDSCxDQUhELEVBR0csVUFBVUMsR0FBVixFQUFlO0FBQ2Q7QUFDQSxTQUFPQyxPQUFPLENBQUNDLE1BQVIsQ0FBZUYsR0FBZixDQUFQO0FBQ0gsQ0FORDtBQVFBUixXQUFXLENBQUNJLFlBQVosQ0FBeUJPLFFBQXpCLENBQWtDTCxHQUFsQyxDQUFzQyxVQUFVSyxRQUFWLEVBQW9CO0FBQ3REO0FBQ0EsU0FBT0EsUUFBUDtBQUNILENBSEQsRUFHRyxVQUFVSCxHQUFWLEVBQWU7QUFDZDtBQUNBLFNBQU9DLE9BQU8sQ0FBQ0MsTUFBUixDQUFlRixHQUFmLENBQVA7QUFDSCxDQU5EO0FBU0EsK0RBQWVSLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5hMzlhNGQ1M2ZlMWYzYmRiZjQ4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IEF4aW9zQ29uZmlnID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6ICdodHRwOi8vMTkzLjI2LjE0LjE5ODo1MDAwJyxcclxuICAgIHRpbWVvdXQ6IDEwMDAwLFxyXG59KVxyXG5cclxuQXhpb3NDb25maWcuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgIC8vZ2hhYiBheiByZXR1cm4gbWl0b29uaWQgZnVuY3Rpb25pIHJvIGVqcmEga29uaWRcclxuICAgIHJldHVybiBjb25maWc7XHJcbn0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgIC8vIGhhbmRsZSBlcnJvclxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycilcclxufSlcclxuXHJcbkF4aW9zQ29uZmlnLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvL2doYWIgYXogcmV0dXJuIG1pdG9vbmlkIGZ1bmN0aW9uaSBybyBlanJhIGtvbmlkXHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbn0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgIC8vIFN5c3RlbSBsb2dcclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF4aW9zQ29uZmlnOyJdLCJzb3VyY2VSb290IjoiIn0=