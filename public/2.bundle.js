(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./client/components/ReviewList.jsx":
/*!******************************************!*\
  !*** ./client/components/ReviewList.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazyload */ \"./node_modules/react-lazyload/lib/index.js\");\n/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);\n/* eslint-disable react/no-array-index-key */\n\n\n\n\nvar Review = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./Review.jsx */ \"./client/components/Review.jsx\"));\n}); // hheight 600px now\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"ReviewList__Wrapper\",\n  componentId: \"sc-3y7mpa-0\"\n})([\"height:\", \";min-height:\", \";max-width:1120px;display:flex;flex-flow:\", \";top:0px;position:relative;\"], function (props) {\n  return props.modal ? '100%' : 'auto';\n}, function (props) {\n  return props.modal ? 'auto' : '600px';\n}, function (props) {\n  return props.modal ? 'column nowrap' : 'row wrap';\n});\n\nvar ReviewList = function ReviewList(_ref) {\n  var reviews = _ref.reviews,\n      modal = _ref.modal;\n  var frontReviews = reviews.slice(0, 6);\n\n  if (modal) {\n    frontReviews = reviews;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {\n    modal: modal\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Suspense\"], {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading...\")\n  }, frontReviews.map(function (el) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      once: true,\n      overflow: true,\n      height: 200,\n      throttle: 300\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Review, {\n      modal: modal,\n      key: el.name,\n      review: el,\n      monthYear: dayjs__WEBPACK_IMPORTED_MODULE_3___default()(el.createdAt).format('MMMM YYYY')\n    }));\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ReviewList));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9SZXZpZXdMaXN0LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1Jldmlld0xpc3QuanN4P2QyZTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXG5pbXBvcnQgUmVhY3QsIHsgbGF6eSwgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMYXp5TG9hZCBmcm9tICdyZWFjdC1sYXp5bG9hZCc7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuXG5jb25zdCBSZXZpZXcgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9SZXZpZXcuanN4JykpO1xuXG4vLyBoaGVpZ2h0IDYwMHB4IG5vd1xuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMubW9kYWwgPyAnMTAwJScgOiAnYXV0bycpfTtcbiAgbWluLWhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMubW9kYWwgPyAnYXV0bycgOiAnNjAwcHgnKX07XG4gIG1heC13aWR0aDogMTEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6ICR7cHJvcHMgPT4gKHByb3BzLm1vZGFsID8gJ2NvbHVtbiBub3dyYXAnIDogJ3JvdyB3cmFwJyl9O1xuICB0b3A6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgUmV2aWV3TGlzdCA9ICh7IHJldmlld3MsIG1vZGFsIH0pID0+IHtcbiAgbGV0IGZyb250UmV2aWV3cyA9IHJldmlld3Muc2xpY2UoMCwgNik7XG4gIGlmIChtb2RhbCkge1xuICAgIGZyb250UmV2aWV3cyA9IHJldmlld3M7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBtb2RhbD17bW9kYWx9PlxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICB7ZnJvbnRSZXZpZXdzLm1hcCgoZWwpID0+IChcbiAgICAgICAgICA8TGF6eUxvYWQgb25jZSBvdmVyZmxvdyBoZWlnaHQ9ezIwMH0gdGhyb3R0bGU9ezMwMH0+XG4gICAgICAgICAgICA8UmV2aWV3IG1vZGFsPXttb2RhbH0ga2V5PXtlbC5uYW1lfSByZXZpZXc9e2VsfSBtb250aFllYXI9e2RheWpzKGVsLmNyZWF0ZWRBdCkuZm9ybWF0KCdNTU1NIFlZWVknKX0gLz5cbiAgICAgICAgICA8L0xhenlMb2FkPlxuICAgICAgICApKX1cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhSZXZpZXdMaXN0KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBUUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/components/ReviewList.jsx\n");

/***/ })

}]);