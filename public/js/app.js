(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
var _window$document$getE;






var appName = ((_window$document$getE = window.document.getElementsByTagName('title')[0]) === null || _window$document$getE === void 0 ? void 0 : _window$document$getE.innerText) || 'Laravel';
(0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.createInertiaApp)({
  title: function title(_title) {
    return "".concat(_title, " - ").concat(appName);
  },
  resolve: function resolve(name) {
    return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*\\.vue$")("./".concat(name, ".vue"));
  },
  setup: function setup(_ref) {
    var el = _ref.el,
        app = _ref.app,
        props = _ref.props,
        plugin = _ref.plugin;
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({
      render: function render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(app, props);
      }
    }).use(plugin).mixin({
      methods: {
        route: route
      }
    }).mount(el);
  }
});
var timeout = null;
_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.on('progress', function (event) {
  if (nprogress__WEBPACK_IMPORTED_MODULE_2___default().isStarted() && event.detail.progress.percentage) {
    nprogress__WEBPACK_IMPORTED_MODULE_2___default().set(event.detail.progress.percentage / 100 * 0.9);
  }
});
_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__.Inertia.on('finish', function (event) {
  clearTimeout(timeout);

  if (!nprogress__WEBPACK_IMPORTED_MODULE_2___default().isStarted()) {
    return;
  } else if (event.detail.visit.completed) {
    nprogress__WEBPACK_IMPORTED_MODULE_2___default().done();
  } else if (event.detail.visit.interrupted) {
    nprogress__WEBPACK_IMPORTED_MODULE_2___default().set(0);
  } else if (event.detail.visit.cancelled) {
    nprogress__WEBPACK_IMPORTED_MODULE_2___default().done();
    nprogress__WEBPACK_IMPORTED_MODULE_2___default().remove();
  }
});

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*\\.vue$":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*\.vue$ namespace object ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ConfirmPassword.vue": [
		"./resources/js/Pages/ConfirmPassword.vue",
		"/js/vendor",
		"resources_js_Pages_ConfirmPassword_vue"
	],
	"./Dashboard.vue": [
		"./resources/js/Pages/Dashboard.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_vue"
	],
	"./Dashboard/Article/Create.vue": [
		"./resources/js/Pages/Dashboard/Article/Create.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Article_Create_vue"
	],
	"./Dashboard/Article/Edit.vue": [
		"./resources/js/Pages/Dashboard/Article/Edit.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Article_Edit_vue"
	],
	"./Dashboard/Article/Index.vue": [
		"./resources/js/Pages/Dashboard/Article/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Article_Index_vue"
	],
	"./Dashboard/Category/Create.vue": [
		"./resources/js/Pages/Dashboard/Category/Create.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Category_Create_vue"
	],
	"./Dashboard/Category/Edit.vue": [
		"./resources/js/Pages/Dashboard/Category/Edit.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Category_Edit_vue"
	],
	"./Dashboard/Category/Index.vue": [
		"./resources/js/Pages/Dashboard/Category/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Category_Index_vue"
	],
	"./Dashboard/Client/Create.vue": [
		"./resources/js/Pages/Dashboard/Client/Create.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Client_Create_vue"
	],
	"./Dashboard/Client/Edit.vue": [
		"./resources/js/Pages/Dashboard/Client/Edit.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Client_Edit_vue"
	],
	"./Dashboard/Client/Index.vue": [
		"./resources/js/Pages/Dashboard/Client/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Client_Index_vue"
	],
	"./Dashboard/Sale/Create.vue": [
		"./resources/js/Pages/Dashboard/Sale/Create.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sale_Create_vue"
	],
	"./Dashboard/Sale/Index.vue": [
		"./resources/js/Pages/Dashboard/Sale/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sale_Index_vue"
	],
	"./Dashboard/Sale/Show.vue": [
		"./resources/js/Pages/Dashboard/Sale/Show.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Sale_Show_vue"
	],
	"./Dashboard/Stats/Index.vue": [
		"./resources/js/Pages/Dashboard/Stats/Index.vue",
		"/js/vendor",
		"resources_js_Pages_Dashboard_Stats_Index_vue"
	],
	"./Error.vue": [
		"./resources/js/Pages/Error.vue",
		"/js/vendor",
		"resources_js_Pages_Error_vue"
	],
	"./Home.vue": [
		"./resources/js/Pages/Home.vue",
		"/js/vendor",
		"resources_js_Pages_Home_vue"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*\\.vue$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);