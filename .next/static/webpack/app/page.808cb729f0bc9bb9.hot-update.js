"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/global-components/AudioPlayer/AudioPlayer.js":
/*!**********************************************************!*\
  !*** ./app/global-components/AudioPlayer/AudioPlayer.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Tracks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tracks */ \"(app-pages-browser)/./app/global-components/AudioPlayer/Tracks.js\");\n/* harmony import */ var _DisplayTrack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayTrack */ \"(app-pages-browser)/./app/global-components/AudioPlayer/DisplayTrack.js\");\n/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Controls */ \"(app-pages-browser)/./app/global-components/AudioPlayer/Controls.js\");\n/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProgressBar */ \"(app-pages-browser)/./app/global-components/AudioPlayer/ProgressBar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AudioPlayer() {\n    _s();\n    const [trackIndex, setTrackIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [currentTrack, setCurrentTrack] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_Tracks__WEBPACK_IMPORTED_MODULE_3__.tracks[trackIndex]);\n    const [timeProgress, setTimeProgress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const progressBarRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const handleNext = ()=>{\n        if (trackIndex >= _Tracks__WEBPACK_IMPORTED_MODULE_3__.tracks.length - 1) {\n            setTrackIndex(0);\n            setCurrentTrack(_Tracks__WEBPACK_IMPORTED_MODULE_3__.tracks[0]);\n        } else {\n            setTrackIndex((prev)=>prev + 1);\n            setCurrentTrack(_Tracks__WEBPACK_IMPORTED_MODULE_3__.tracks[trackIndex + 1]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full max-w-[40rem] my-auto bg-medium-blue rounded-xl border-solid border-4 border-white shadow-centered-shadow p-5 pt-28 before:content-[''] before:bg-album-cover before:absolute before:-top-4 before:left-1/2 before:-translate-x-1/2 before:w-[29.6rem] before:h-[8.5rem] before:max-w-[15rem] before:bg-cover before:blur-md before:opacity-90 lg:w-3/4 lg:before:max-w-[18.75rem] lg:before:h-[11.25rem] lg:pt-40 lg:p-11\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                className: \"w-min  absolute -top-16 left-1/2 -translate-x-1/2 rounded-xl max-w-[16rem] lg:max-w-xs opacity-90\",\n                src: \"/cover.svg\",\n                width: 250,\n                height: 250,\n                alt: \"Album cover\"\n            }, void 0, false, {\n                fileName: \"/Users/gsh9000/Documents/Sites/band/app/global-components/AudioPlayer/AudioPlayer.js\",\n                lineNumber: 31,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Controls__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                audioRef: audioRef,\n                progressBarRef: progressBarRef,\n                setTimeProgress: setTimeProgress,\n                duration: duration,\n                tracks: _Tracks__WEBPACK_IMPORTED_MODULE_3__.tracks,\n                trackIndex: trackIndex,\n                setTrackIndex: setTrackIndex,\n                setCurrentTrack: setCurrentTrack,\n                handleNext: handleNext\n            }, void 0, false, {\n                fileName: \"/Users/gsh9000/Documents/Sites/band/app/global-components/AudioPlayer/AudioPlayer.js\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DisplayTrack__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                currentTrack: currentTrack,\n                audioRef: audioRef,\n                progressBarRef: progressBarRef,\n                setDuration: setDuration,\n                handleNext: handleNext,\n                trackIndex: trackIndex\n            }, void 0, false, {\n                fileName: \"/Users/gsh9000/Documents/Sites/band/app/global-components/AudioPlayer/AudioPlayer.js\",\n                lineNumber: 34,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                progressBarRef: progressBarRef,\n                audioRef: audioRef,\n                timeProgress: timeProgress,\n                duration: duration\n            }, void 0, false, {\n                fileName: \"/Users/gsh9000/Documents/Sites/band/app/global-components/AudioPlayer/AudioPlayer.js\",\n                lineNumber: 35,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gsh9000/Documents/Sites/band/app/global-components/AudioPlayer/AudioPlayer.js\",\n        lineNumber: 29,\n        columnNumber: 3\n    }, this);\n}\n_s(AudioPlayer, \"AFGGjJg0/gDMmz7aXl8c3ox6LG4=\");\n_c = AudioPlayer;\nvar _c;\n$RefreshReg$(_c, \"AudioPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWwtY29tcG9uZW50cy9BdWRpb1BsYXllci9BdWRpb1BsYXllci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNVO0FBQ1A7QUFDUTtBQUNSO0FBQ007QUFFekIsU0FBU087O0lBQ3ZCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQ0MsMkNBQU0sQ0FBQ0ssV0FBVztJQUNuRSxNQUFNLENBQUNJLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUM7SUFDekMsTUFBTWMsV0FBV2YsNkNBQU1BO0lBQ3ZCLE1BQU1nQixpQkFBaUJoQiw2Q0FBTUE7SUFFN0IsTUFBTWlCLGFBQWE7UUFDbEIsSUFBSVYsY0FBY0wsMkNBQU1BLENBQUNnQixNQUFNLEdBQUcsR0FBRztZQUNwQ1YsY0FBYztZQUNkRSxnQkFBZ0JSLDJDQUFNLENBQUMsRUFBRTtRQUMxQixPQUFPO1lBQ05NLGNBQWMsQ0FBQ1csT0FBU0EsT0FBTztZQUMvQlQsZ0JBQWdCUiwyQ0FBTSxDQUFDSyxhQUFhLEVBQUU7UUFDdkM7SUFDRDtJQUVBLHFCQUNDLDhEQUFDYTtRQUFJQyxXQUFVOzswQkFFakIsOERBQUN0QixrREFBS0E7Z0JBQUNzQixXQUFVO2dCQUFvR0MsS0FBSTtnQkFBYUMsT0FBTztnQkFBS0MsUUFBUTtnQkFBS0MsS0FBSTs7Ozs7OzBCQUVoSyw4REFBQ3JCLGlEQUFRQTtnQkFBQ1csVUFBVUE7Z0JBQVVDLGdCQUFnQkE7Z0JBQWdCSixpQkFBaUJBO2dCQUFpQkMsVUFBVUE7Z0JBQVVYLFFBQVFBLDJDQUFNQTtnQkFBRUssWUFBWUE7Z0JBQVlDLGVBQWVBO2dCQUFlRSxpQkFBaUJBO2dCQUFpQk8sWUFBWUE7Ozs7OzswQkFDeE8sOERBQUNkLHFEQUFZQTtnQkFBQ00sY0FBY0E7Z0JBQWNNLFVBQVVBO2dCQUFVQyxnQkFBZ0JBO2dCQUFnQkYsYUFBYUE7Z0JBQWFHLFlBQVlBO2dCQUFZVixZQUFZQTs7Ozs7OzBCQUM1Siw4REFBQ0Ysb0RBQVdBO2dCQUFDVyxnQkFBZ0JBO2dCQUFnQkQsVUFBVUE7Z0JBQVVKLGNBQWNBO2dCQUFjRSxVQUFVQTs7Ozs7Ozs7Ozs7O0FBSTFHO0dBN0J3QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbC1jb21wb25lbnRzL0F1ZGlvUGxheWVyL0F1ZGlvUGxheWVyLmpzPzE3ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdHJhY2tzIH0gZnJvbSBcIi4vVHJhY2tzXCI7XG5pbXBvcnQgRGlzcGxheVRyYWNrIGZyb20gXCIuL0Rpc3BsYXlUcmFja1wiO1xuaW1wb3J0IENvbnRyb2xzIGZyb20gXCIuL0NvbnRyb2xzXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXVkaW9QbGF5ZXIoKSB7XG5cdGNvbnN0IFt0cmFja0luZGV4LCBzZXRUcmFja0luZGV4XSA9IHVzZVN0YXRlKDApO1xuXHRjb25zdCBbY3VycmVudFRyYWNrLCBzZXRDdXJyZW50VHJhY2tdID0gdXNlU3RhdGUodHJhY2tzW3RyYWNrSW5kZXhdKTtcblx0Y29uc3QgW3RpbWVQcm9ncmVzcywgc2V0VGltZVByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuXHRjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKDApO1xuXHRjb25zdCBhdWRpb1JlZiA9IHVzZVJlZigpO1xuXHRjb25zdCBwcm9ncmVzc0JhclJlZiA9IHVzZVJlZigpO1xuXG5cdGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG5cdFx0aWYgKHRyYWNrSW5kZXggPj0gdHJhY2tzLmxlbmd0aCAtIDEpIHtcblx0XHRcdHNldFRyYWNrSW5kZXgoMCk7XG5cdFx0XHRzZXRDdXJyZW50VHJhY2sodHJhY2tzWzBdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0VHJhY2tJbmRleCgocHJldikgPT4gcHJldiArIDEpO1xuXHRcdFx0c2V0Q3VycmVudFRyYWNrKHRyYWNrc1t0cmFja0luZGV4ICsgMV0pO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1heC13LVs0MHJlbV0gbXktYXV0byBiZy1tZWRpdW0tYmx1ZSByb3VuZGVkLXhsIGJvcmRlci1zb2xpZCBib3JkZXItNCBib3JkZXItd2hpdGUgc2hhZG93LWNlbnRlcmVkLXNoYWRvdyBwLTUgcHQtMjggYmVmb3JlOmNvbnRlbnQtWycnXSBiZWZvcmU6YmctYWxidW0tY292ZXIgYmVmb3JlOmFic29sdXRlIGJlZm9yZTotdG9wLTQgYmVmb3JlOmxlZnQtMS8yIGJlZm9yZTotdHJhbnNsYXRlLXgtMS8yIGJlZm9yZTp3LVsyOS42cmVtXSBiZWZvcmU6aC1bOC41cmVtXSBiZWZvcmU6bWF4LXctWzE1cmVtXSBiZWZvcmU6YmctY292ZXIgYmVmb3JlOmJsdXItbWQgYmVmb3JlOm9wYWNpdHktOTAgbGc6dy0zLzQgbGc6YmVmb3JlOm1heC13LVsxOC43NXJlbV0gbGc6YmVmb3JlOmgtWzExLjI1cmVtXSBsZzpwdC00MCBsZzpwLTExXCI+XG5cbjxJbWFnZSBjbGFzc05hbWU9XCJ3LW1pbiAgYWJzb2x1dGUgLXRvcC0xNiBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHJvdW5kZWQteGwgbWF4LXctWzE2cmVtXSBsZzptYXgtdy14cyBvcGFjaXR5LTkwXCIgc3JjPVwiL2NvdmVyLnN2Z1wiIHdpZHRoPXsyNTB9IGhlaWdodD17MjUwfSBhbHQ9XCJBbGJ1bSBjb3ZlclwiIC8+XG5cblx0XHRcdDxDb250cm9scyBhdWRpb1JlZj17YXVkaW9SZWZ9IHByb2dyZXNzQmFyUmVmPXtwcm9ncmVzc0JhclJlZn0gc2V0VGltZVByb2dyZXNzPXtzZXRUaW1lUHJvZ3Jlc3N9IGR1cmF0aW9uPXtkdXJhdGlvbn0gdHJhY2tzPXt0cmFja3N9IHRyYWNrSW5kZXg9e3RyYWNrSW5kZXh9IHNldFRyYWNrSW5kZXg9e3NldFRyYWNrSW5kZXh9IHNldEN1cnJlbnRUcmFjaz17c2V0Q3VycmVudFRyYWNrfSBoYW5kbGVOZXh0PXtoYW5kbGVOZXh0fSAvPlxuXHRcdFx0PERpc3BsYXlUcmFjayBjdXJyZW50VHJhY2s9e2N1cnJlbnRUcmFja30gYXVkaW9SZWY9e2F1ZGlvUmVmfSBwcm9ncmVzc0JhclJlZj17cHJvZ3Jlc3NCYXJSZWZ9IHNldER1cmF0aW9uPXtzZXREdXJhdGlvbn0gaGFuZGxlTmV4dD17aGFuZGxlTmV4dH0gdHJhY2tJbmRleD17dHJhY2tJbmRleH0gLz5cblx0XHRcdDxQcm9ncmVzc0JhciBwcm9ncmVzc0JhclJlZj17cHJvZ3Jlc3NCYXJSZWZ9IGF1ZGlvUmVmPXthdWRpb1JlZn0gdGltZVByb2dyZXNzPXt0aW1lUHJvZ3Jlc3N9IGR1cmF0aW9uPXtkdXJhdGlvbn0gLz5cblx0XHRcblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVJlZiIsInVzZVN0YXRlIiwidHJhY2tzIiwiRGlzcGxheVRyYWNrIiwiQ29udHJvbHMiLCJQcm9ncmVzc0JhciIsIkF1ZGlvUGxheWVyIiwidHJhY2tJbmRleCIsInNldFRyYWNrSW5kZXgiLCJjdXJyZW50VHJhY2siLCJzZXRDdXJyZW50VHJhY2siLCJ0aW1lUHJvZ3Jlc3MiLCJzZXRUaW1lUHJvZ3Jlc3MiLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwiYXVkaW9SZWYiLCJwcm9ncmVzc0JhclJlZiIsImhhbmRsZU5leHQiLCJsZW5ndGgiLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/global-components/AudioPlayer/AudioPlayer.js\n"));

/***/ })

});