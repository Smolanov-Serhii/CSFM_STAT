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

eval("$(document).ready(function () {\n  $(\".faq__item-header\").click(function (e) {\n    $(this).closest('.faq__item').toggleClass('active');\n    $(this).closest('.faq__item').find('.faq__item-content').fadeToggle(300);\n  });\n  var BannerSlider = new Swiper(\".banner .swiper-container\", {\n    loop: true,\n    autoplay: {\n      delay: 5000,\n      disableOnInteraction: false\n    },\n    pagination: {\n      el: \".banner .swiper-pagination\",\n      clickable: true\n    }\n  });\n  var BlogSlider = new Swiper(\".blog .swiper-container\", {\n    slidesPerView: 3,\n    spaceBetween: 20,\n    loop: true,\n    autoplay: {\n      delay: 4000,\n      disableOnInteraction: false\n    },\n    pagination: {\n      el: \".blog .swiper-pagination\",\n      clickable: true\n    }\n  });\n  var AnouncwsSlider = new Swiper(\".announces .swiper-container\", {\n    loop: true,\n    slidesPerView: 4,\n    spaceBetween: 20,\n    autoplay: {\n      delay: 4000,\n      disableOnInteraction: false\n    },\n    pagination: {\n      el: \".announces .swiper-pagination\",\n      clickable: true\n    }\n  });\n  $(\".footer__to-top\").click(function () {\n    var elementClick = $(this).attr(\"href\");\n    var destination = $(elementClick).offset().top;\n    jQuery(\"html:not(:animated),body:not(:animated)\").animate({\n      scrollTop: destination\n    }, 800);\n    return false;\n  });\n  $(function () {\n    var marquee = $(\".partners__list\");\n    marquee.wrapInner(\"<span>\");\n    marquee.find(\"span\").css({\n      \"width\": \"50%\",\n      \"display\": \"inline-flex\",\n      \"justify-content\": \"space-between\"\n    });\n    marquee.append(marquee.find(\"span\").clone());\n    marquee.wrapInner(\"<div>\");\n    marquee.find(\"div\").css(\"width\", \"200%\");\n\n    var reset = function reset() {\n      if ($(window).width() <= '800') {\n        $(this).stop();\n      } else {\n        $(this).css(\"margin-left\", \"0%\");\n        $(this).animate({\n          \"margin-left\": \"-100%\"\n        }, 13000, 'linear', reset);\n      }\n    };\n\n    reset.call(marquee.find(\"div\"));\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvc2NyaXB0cy5qcz9iOGQ4Il0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiY2xpY2siLCJlIiwiY2xvc2VzdCIsInRvZ2dsZUNsYXNzIiwiZmluZCIsImZhZGVUb2dnbGUiLCJCYW5uZXJTbGlkZXIiLCJTd2lwZXIiLCJsb29wIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwiQmxvZ1NsaWRlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJBbm91bmN3c1NsaWRlciIsImVsZW1lbnRDbGljayIsImF0dHIiLCJkZXN0aW5hdGlvbiIsIm9mZnNldCIsInRvcCIsImpRdWVyeSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJtYXJxdWVlIiwid3JhcElubmVyIiwiY3NzIiwiYXBwZW5kIiwiY2xvbmUiLCJyZXNldCIsIndpbmRvdyIsIndpZHRoIiwic3RvcCIsImNhbGwiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFhQyxLQUFiLENBQW1CLFlBQVc7QUFFMUJGLEVBQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCRyxLQUF2QixDQUE4QixVQUFTQyxDQUFULEVBQVk7QUFDdENKLElBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssT0FBUixDQUFnQixZQUFoQixFQUE4QkMsV0FBOUIsQ0FBMEMsUUFBMUM7QUFDQU4sSUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxPQUFSLENBQWdCLFlBQWhCLEVBQThCRSxJQUE5QixDQUFtQyxvQkFBbkMsRUFBeURDLFVBQXpELENBQW9FLEdBQXBFO0FBQ0gsR0FIRDtBQUtBLE1BQUlDLFlBQVksR0FBRyxJQUFJQyxNQUFKLENBQVcsMkJBQVgsRUFBd0M7QUFDdkRDLElBQUFBLElBQUksRUFBRSxJQURpRDtBQUV2REMs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LFFBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRCLE9BQVIsQ0FBZ0I7QUFBRSx5QkFBZTtBQUFqQixTQUFoQixFQUE0QyxLQUE1QyxFQUFtRCxRQUFuRCxFQUE2RE8sS0FBN0Q7QUFDSDtBQUNKLEtBUEQ7O0FBUUFBLElBQUFBLEtBQUssQ0FBQ0ksSUFBTixDQUFXVCxPQUFPLENBQUN2QixJQUFSLENBQWEsS0FBYixDQUFYO0FBQ0gsR0FoQkEsQ0FBRDtBQWlCSCxDQXpFRCIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcbiAgICAkKFwiLmZhcV9faXRlbS1oZWFkZXJcIikuY2xpY2soIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5mYXFfX2l0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuZmFxX19pdGVtJykuZmluZCgnLmZhcV9faXRlbS1jb250ZW50JykuZmFkZVRvZ2dsZSgzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIEJhbm5lclNsaWRlciA9IG5ldyBTd2lwZXIoXCIuYmFubmVyIC5zd2lwZXItY29udGFpbmVyXCIsIHtcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiBcIi5iYW5uZXIgLnN3aXBlci1wYWdpbmF0aW9uXCIsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIEJsb2dTbGlkZXIgPSBuZXcgU3dpcGVyKFwiLmJsb2cgLnN3aXBlci1jb250YWluZXJcIiwge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiA0MDAwLFxyXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgIGVsOiBcIi5ibG9nIC5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBBbm91bmN3c1NsaWRlciA9IG5ldyBTd2lwZXIoXCIuYW5ub3VuY2VzIC5zd2lwZXItY29udGFpbmVyXCIsIHtcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICBhdXRvcGxheToge1xyXG4gICAgICAgICAgICBkZWxheTogNDAwMCxcclxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogXCIuYW5ub3VuY2VzIC5zd2lwZXItcGFnaW5hdGlvblwiLFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuZm9vdGVyX190by10b3BcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnRDbGljayA9ICQodGhpcykuYXR0cihcImhyZWZcIilcclxuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSAkKGVsZW1lbnRDbGljaykub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIGpRdWVyeShcImh0bWw6bm90KDphbmltYXRlZCksYm9keTpub3QoOmFuaW1hdGVkKVwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiBkZXN0aW5hdGlvblxyXG4gICAgICAgIH0sIDgwMCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbWFycXVlZSA9ICQoXCIucGFydG5lcnNfX2xpc3RcIik7XHJcbiAgICAgICAgbWFycXVlZS53cmFwSW5uZXIoXCI8c3Bhbj5cIik7XHJcbiAgICAgICAgbWFycXVlZS5maW5kKFwic3BhblwiKS5jc3MoeyBcIndpZHRoXCI6IFwiNTAlXCIsIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsIFwianVzdGlmeS1jb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiIH0pO1xyXG4gICAgICAgIG1hcnF1ZWUuYXBwZW5kKG1hcnF1ZWUuZmluZChcInNwYW5cIikuY2xvbmUoKSk7XHJcbiAgICAgICAgbWFycXVlZS53cmFwSW5uZXIoXCI8ZGl2PlwiKTtcclxuICAgICAgICBtYXJxdWVlLmZpbmQoXCJkaXZcIikuY3NzKFwid2lkdGhcIiwgXCIyMDAlXCIpO1xyXG4gICAgICAgIHZhciByZXNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gJzgwMCcpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zdG9wKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyhcIm1hcmdpbi1sZWZ0XCIsIFwiMCVcIik7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFuaW1hdGUoeyBcIm1hcmdpbi1sZWZ0XCI6IFwiLTEwMCVcIiB9LCAxMzAwMCwgJ2xpbmVhcicsIHJlc2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzZXQuY2FsbChtYXJxdWVlLmZpbmQoXCJkaXZcIikpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvc2NyaXB0cy5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/scripts.js\n");

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