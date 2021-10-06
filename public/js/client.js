/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/scripts.js":
/*!*********************************!*\
  !*** ./resources/js/scripts.js ***!
  \*********************************/
/***/ (function() {

eval("$(document).ready(function () {\n  var BannerSlider = new Swiper(\".banner .swiper-container\", {\n    loop: true,\n    autoplay: {\n      delay: 5000,\n      disableOnInteraction: false\n    },\n    pagination: {\n      el: \".banner .swiper-pagination\",\n      clickable: true\n    }\n  });\n  var AnouncwsSlider = new Swiper(\".announces .swiper-container\", {\n    loop: true,\n    slidesPerView: 4,\n    spaceBetween: 20,\n    autoplay: {\n      delay: 4000,\n      disableOnInteraction: false\n    },\n    pagination: {\n      el: \".announces .swiper-pagination\",\n      clickable: true\n    }\n  });\n  $(\".footer__to-top\").click(function () {\n    var elementClick = $(this).attr(\"href\");\n    var destination = $(elementClick).offset().top;\n    jQuery(\"html:not(:animated),body:not(:animated)\").animate({\n      scrollTop: destination\n    }, 800);\n    return false;\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc2NyaXB0cy5qcz9iOGQ4Il0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiQmFubmVyU2xpZGVyIiwiU3dpcGVyIiwibG9vcCIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsIkFub3VuY3dzU2xpZGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImNsaWNrIiwiZWxlbWVudENsaWNrIiwiYXR0ciIsImRlc3RpbmF0aW9uIiwib2Zmc2V0IiwidG9wIiwialF1ZXJ5IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQWFDLEtBQWIsQ0FBbUIsWUFBVztBQUMxQixNQUFJQyxZQUFZLEdBQUcsSUFBSUMsTUFBSixDQUFXLDJCQUFYLEVBQXdDO0FBQ3ZEQyxJQUFBQSxJQUFJLEVBQUUsSUFEaUQ7QUFFdkRDLElBQUFBLFFBQVEsRUFBRTtBQUNOQyxNQUFBQSxLQUFLLEVBQUUsSUFERDtBQUVOQyxNQUFBQSxvQkFBb0IsRUFBRTtBQUZoQixLQUY2QztBQU12REMsSUFBQUEsVUFBVSxFQUFFO0FBQ1JDLE1BQUFBLEVBQUUsRUFBRSw0QkFESTtBQUVSQyxNQUFBQSxTQUFTLEVBQUU7QUFGSDtBQU4yQyxHQUF4QyxDQUFuQjtBQVlBLE1BQUlDLGNBQWMsR0FBRyxJQUFJUixNQUFKLENBQVcsOEJBQVgsRUFBMkM7QUFDNURDLElBQUFBLElBQUksRUFBRSxJQURzRDtBQUU1RFEsSUFBQUEsYUFBYSxFQUFFLENBRjZDO0FBRzVEQyxJQUFBQSxZQUFZLEVBQUUsRUFIOEM7QUFJNURSLElBQUFBLFFBQVEsRUFBRTtBQUNOQyxNQUFBQSxLQUFLLEVBQUUsSUFERDtBQUVOQyxNQUFBQSxvQkFBb0IsRUFBRTtBQUZoQixLQUprRDtBQVE1REMsSUFBQUEsVUFBVSxFQUFFO0FBQ1JDLE1BQUFBLEVBQUUsRUFBRSwrQkFESTtBQUVSQyxNQUFBQSxTQUFTLEVBQUU7QUFGSDtBQVJnRCxHQUEzQyxDQUFyQjtBQWNBWCxFQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQmUsS0FBckIsQ0FBMkIsWUFBVztBQUNsQyxRQUFJQyxZQUFZLEdBQUdoQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFpQixJQUFSLENBQWEsTUFBYixDQUFuQjtBQUNBLFFBQUlDLFdBQVcsR0FBR2xCLENBQUMsQ0FBQ2dCLFlBQUQsQ0FBRCxDQUFnQkcsTUFBaEIsR0FBeUJDLEdBQTNDO0FBQ0FDLElBQUFBLE1BQU0sQ0FBQyx5Q0FBRCxDQUFOLENBQWtEQyxPQUFsRCxDQUEwRDtBQUN0REMsTUFBQUEsU0FBUyxFQUFFTDtBQUQyQyxLQUExRCxFQUVHLEdBRkg7QUFHQSxXQUFPLEtBQVA7QUFDSCxHQVBEO0FBUUgsQ0FuQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgQmFubmVyU2xpZGVyID0gbmV3IFN3aXBlcihcIi5iYW5uZXIgLnN3aXBlci1jb250YWluZXJcIiwge1xyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDUwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6IFwiLmJhbm5lciAuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgQW5vdW5jd3NTbGlkZXIgPSBuZXcgU3dpcGVyKFwiLmFubm91bmNlcyAuc3dpcGVyLWNvbnRhaW5lclwiLCB7XHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDQwMDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgZWw6IFwiLmFubm91bmNlcyAuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLmZvb3Rlcl9fdG8tdG9wXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50Q2xpY2sgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpXHJcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gJChlbGVtZW50Q2xpY2spLm9mZnNldCgpLnRvcDtcclxuICAgICAgICBqUXVlcnkoXCJodG1sOm5vdCg6YW5pbWF0ZWQpLGJvZHk6bm90KDphbmltYXRlZClcIikuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogZGVzdGluYXRpb25cclxuICAgICAgICB9LCA4MDApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG59KTsiXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL3NjcmlwdHMuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/scripts.js\n");

/***/ }),

/***/ "./resources/sass/main.scss":
/*!**********************************!*\
  !*** ./resources/sass/main.scss ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc2Fzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Nhc3MvbWFpbi5zY3NzPzk0NWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/sass/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/client": 0,
/******/ 			"public/css/styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/css/styles"], function() { return __webpack_require__("./resources/js/scripts.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/css/styles"], function() { return __webpack_require__("./resources/sass/main.scss"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;