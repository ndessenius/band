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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Tracks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tracks */ \"(app-pages-browser)/./app/global-components/AudioPlayer/Tracks.js\");\n/* harmony import */ var _DisplayTrack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DisplayTrack */ \"(app-pages-browser)/./app/global-components/AudioPlayer/DisplayTrack.js\");\n/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Controls */ \"(app-pages-browser)/./app/global-components/AudioPlayer/Controls.js\");\n/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProgressBar */ \"(app-pages-browser)/./app/global-components/AudioPlayer/ProgressBar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction AudioPlayer() {\n    _s();\n    const [trackIndex, setTrackIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [currentTrack, setCurrentTrack] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_Tracks__WEBPACK_IMPORTED_MODULE_3__.tracks[trackIndex]);\n    const [timeProgress, setTimeProgress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const progressBarRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const handleNext = ()=>{\n        if (trackIndex >= _Tracks__WEBPACK_IMPORTED_MODULE_3__.tracks.length - 1) {\n            setTrackIndex(0);\n            setCurrentTrack(_Tracks__WEBPACK_IMPORTED_MODULE_3__.tracks[0]);\n        } else {\n            setTrackIndex((prev)=>prev + 1);\n            setCurrentTrack(_Tracks__WEBPACK_IMPORTED_MODULE_3__.tracks[trackIndex + 1]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full max-w-[40rem] my-auto bg-medium-blue rounded-xl border-solid border-4 border-white shadow-centered-shadow p-5 pt-28 before:content-[''] before:bg-album-cover before:absolute before:-top-4 before:left-1/2 before:-translate-x-1/2 before:w-[29.6rem] before:h-[8.5rem] before:max-w-[15rem] before:bg-cover before:blur-md before:opacity-90 lg:w-3/4 lg:before:max-w-[18.75rem] lg:before:h-[11.25rem] lg:pt-40 lg:p-11\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center min-h-screen bg-gray-100\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \" absolute -top-16 left-1/2 -translate-x-1/2 rounded-xl max-w-[16rem] lg:max-w-xs opacity-90\",\n                    src: \"/cover.svg\",\n                    width: 250,\n                    height: 250,\n                    alt: \"Album cover\"\n                }, void 0, false, {\n                    fileName: \"/Users/gsh9000/Documents/Sites/band/app/global-components/AudioPlayer/AudioPlayer.js\",\n                    lineNumber: 31,\n                    columnNumber: 1\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Controls__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    audioRef: audioRef,\n                    progressBarRef: progressBarRef,\n                    setTimeProgress: setTimeProgress,\n                    duration: duration,\n                    tracks: _Tracks__WEBPACK_IMPORTED_MODULE_3__.tracks,\n                    trackIndex: trackIndex,\n                    setTrackIndex: setTrackIndex,\n                    setCurrentTrack: setCurrentTrack,\n                    handleNext: handleNext\n                }, void 0, false, {\n                    fileName: \"/Users/gsh9000/Documents/Sites/band/app/global-components/AudioPlayer/AudioPlayer.js\",\n                    lineNumber: 36,\n                    columnNumber: 4\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DisplayTrack__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    currentTrack: currentTrack,\n                    audioRef: audioRef,\n                    progressBarRef: progressBarRef,\n                    setDuration: setDuration,\n                    handleNext: handleNext,\n                    trackIndex: trackIndex\n                }, void 0, false, {\n                    fileName: \"/Users/gsh9000/Documents/Sites/band/app/global-components/AudioPlayer/AudioPlayer.js\",\n                    lineNumber: 37,\n                    columnNumber: 4\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    progressBarRef: progressBarRef,\n                    audioRef: audioRef,\n                    timeProgress: timeProgress,\n                    duration: duration\n                }, void 0, false, {\n                    fileName: \"/Users/gsh9000/Documents/Sites/band/app/global-components/AudioPlayer/AudioPlayer.js\",\n                    lineNumber: 38,\n                    columnNumber: 4\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gsh9000/Documents/Sites/band/app/global-components/AudioPlayer/AudioPlayer.js\",\n            lineNumber: 30,\n            columnNumber: 1\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gsh9000/Documents/Sites/band/app/global-components/AudioPlayer/AudioPlayer.js\",\n        lineNumber: 29,\n        columnNumber: 3\n    }, this);\n}\n_s(AudioPlayer, \"AFGGjJg0/gDMmz7aXl8c3ox6LG4=\");\n_c = AudioPlayer;\nvar _c;\n$RefreshReg$(_c, \"AudioPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWwtY29tcG9uZW50cy9BdWRpb1BsYXllci9BdWRpb1BsYXllci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNVO0FBQ1A7QUFDUTtBQUNSO0FBQ007QUFFekIsU0FBU087O0lBQ3ZCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQ0MsMkNBQU0sQ0FBQ0ssV0FBVztJQUNuRSxNQUFNLENBQUNJLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUM7SUFDekMsTUFBTWMsV0FBV2YsNkNBQU1BO0lBQ3ZCLE1BQU1nQixpQkFBaUJoQiw2Q0FBTUE7SUFFN0IsTUFBTWlCLGFBQWE7UUFDbEIsSUFBSVYsY0FBY0wsMkNBQU1BLENBQUNnQixNQUFNLEdBQUcsR0FBRztZQUNwQ1YsY0FBYztZQUNkRSxnQkFBZ0JSLDJDQUFNLENBQUMsRUFBRTtRQUMxQixPQUFPO1lBQ05NLGNBQWMsQ0FBQ1csT0FBU0EsT0FBTztZQUMvQlQsZ0JBQWdCUiwyQ0FBTSxDQUFDSyxhQUFhLEVBQUU7UUFDdkM7SUFDRDtJQUVBLHFCQUNDLDhEQUFDYTtRQUFJQyxXQUFVO2tCQUNqQiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2YsOERBQUN0QixrREFBS0E7b0JBQUNzQixXQUFVO29CQUE4RkMsS0FBSTtvQkFBYUMsT0FBTztvQkFBS0MsUUFBUTtvQkFBS0MsS0FBSTs7Ozs7OzhCQUsxSiw4REFBQ3JCLGlEQUFRQTtvQkFBQ1csVUFBVUE7b0JBQVVDLGdCQUFnQkE7b0JBQWdCSixpQkFBaUJBO29CQUFpQkMsVUFBVUE7b0JBQVVYLFFBQVFBLDJDQUFNQTtvQkFBRUssWUFBWUE7b0JBQVlDLGVBQWVBO29CQUFlRSxpQkFBaUJBO29CQUFpQk8sWUFBWUE7Ozs7Ozs4QkFDeE8sOERBQUNkLHFEQUFZQTtvQkFBQ00sY0FBY0E7b0JBQWNNLFVBQVVBO29CQUFVQyxnQkFBZ0JBO29CQUFnQkYsYUFBYUE7b0JBQWFHLFlBQVlBO29CQUFZVixZQUFZQTs7Ozs7OzhCQUM1Siw4REFBQ0Ysb0RBQVdBO29CQUFDVyxnQkFBZ0JBO29CQUFnQkQsVUFBVUE7b0JBQVVKLGNBQWNBO29CQUFjRSxVQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUc7R0FoQ3dCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFsLWNvbXBvbmVudHMvQXVkaW9QbGF5ZXIvQXVkaW9QbGF5ZXIuanM/MTdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0cmFja3MgfSBmcm9tIFwiLi9UcmFja3NcIjtcbmltcG9ydCBEaXNwbGF5VHJhY2sgZnJvbSBcIi4vRGlzcGxheVRyYWNrXCI7XG5pbXBvcnQgQ29udHJvbHMgZnJvbSBcIi4vQ29udHJvbHNcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdWRpb1BsYXllcigpIHtcblx0Y29uc3QgW3RyYWNrSW5kZXgsIHNldFRyYWNrSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IFtjdXJyZW50VHJhY2ssIHNldEN1cnJlbnRUcmFja10gPSB1c2VTdGF0ZSh0cmFja3NbdHJhY2tJbmRleF0pO1xuXHRjb25zdCBbdGltZVByb2dyZXNzLCBzZXRUaW1lUHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoMCk7XG5cdGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKCk7XG5cdGNvbnN0IHByb2dyZXNzQmFyUmVmID0gdXNlUmVmKCk7XG5cblx0Y29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcblx0XHRpZiAodHJhY2tJbmRleCA+PSB0cmFja3MubGVuZ3RoIC0gMSkge1xuXHRcdFx0c2V0VHJhY2tJbmRleCgwKTtcblx0XHRcdHNldEN1cnJlbnRUcmFjayh0cmFja3NbMF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRUcmFja0luZGV4KChwcmV2KSA9PiBwcmV2ICsgMSk7XG5cdFx0XHRzZXRDdXJyZW50VHJhY2sodHJhY2tzW3RyYWNrSW5kZXggKyAxXSk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXctWzQwcmVtXSBteS1hdXRvIGJnLW1lZGl1bS1ibHVlIHJvdW5kZWQteGwgYm9yZGVyLXNvbGlkIGJvcmRlci00IGJvcmRlci13aGl0ZSBzaGFkb3ctY2VudGVyZWQtc2hhZG93IHAtNSBwdC0yOCBiZWZvcmU6Y29udGVudC1bJyddIGJlZm9yZTpiZy1hbGJ1bS1jb3ZlciBiZWZvcmU6YWJzb2x1dGUgYmVmb3JlOi10b3AtNCBiZWZvcmU6bGVmdC0xLzIgYmVmb3JlOi10cmFuc2xhdGUteC0xLzIgYmVmb3JlOnctWzI5LjZyZW1dIGJlZm9yZTpoLVs4LjVyZW1dIGJlZm9yZTptYXgtdy1bMTVyZW1dIGJlZm9yZTpiZy1jb3ZlciBiZWZvcmU6Ymx1ci1tZCBiZWZvcmU6b3BhY2l0eS05MCBsZzp3LTMvNCBsZzpiZWZvcmU6bWF4LXctWzE4Ljc1cmVtXSBsZzpiZWZvcmU6aC1bMTEuMjVyZW1dIGxnOnB0LTQwIGxnOnAtMTFcIj5cbjxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWdyYXktMTAwXCI+XG48SW1hZ2UgY2xhc3NOYW1lPVwiIGFic29sdXRlIC10b3AtMTYgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiByb3VuZGVkLXhsIG1heC13LVsxNnJlbV0gbGc6bWF4LXcteHMgb3BhY2l0eS05MFwiIHNyYz1cIi9jb3Zlci5zdmdcIiB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0gYWx0PVwiQWxidW0gY292ZXJcIiAvPlxuXG5cblxuXG5cdFx0XHQ8Q29udHJvbHMgYXVkaW9SZWY9e2F1ZGlvUmVmfSBwcm9ncmVzc0JhclJlZj17cHJvZ3Jlc3NCYXJSZWZ9IHNldFRpbWVQcm9ncmVzcz17c2V0VGltZVByb2dyZXNzfSBkdXJhdGlvbj17ZHVyYXRpb259IHRyYWNrcz17dHJhY2tzfSB0cmFja0luZGV4PXt0cmFja0luZGV4fSBzZXRUcmFja0luZGV4PXtzZXRUcmFja0luZGV4fSBzZXRDdXJyZW50VHJhY2s9e3NldEN1cnJlbnRUcmFja30gaGFuZGxlTmV4dD17aGFuZGxlTmV4dH0gLz5cblx0XHRcdDxEaXNwbGF5VHJhY2sgY3VycmVudFRyYWNrPXtjdXJyZW50VHJhY2t9IGF1ZGlvUmVmPXthdWRpb1JlZn0gcHJvZ3Jlc3NCYXJSZWY9e3Byb2dyZXNzQmFyUmVmfSBzZXREdXJhdGlvbj17c2V0RHVyYXRpb259IGhhbmRsZU5leHQ9e2hhbmRsZU5leHR9IHRyYWNrSW5kZXg9e3RyYWNrSW5kZXh9IC8+XG5cdFx0XHQ8UHJvZ3Jlc3NCYXIgcHJvZ3Jlc3NCYXJSZWY9e3Byb2dyZXNzQmFyUmVmfSBhdWRpb1JlZj17YXVkaW9SZWZ9IHRpbWVQcm9ncmVzcz17dGltZVByb2dyZXNzfSBkdXJhdGlvbj17ZHVyYXRpb259IC8+XG5cdFx0XG5cdFx0PC9kaXY+PC9kaXY+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInRyYWNrcyIsIkRpc3BsYXlUcmFjayIsIkNvbnRyb2xzIiwiUHJvZ3Jlc3NCYXIiLCJBdWRpb1BsYXllciIsInRyYWNrSW5kZXgiLCJzZXRUcmFja0luZGV4IiwiY3VycmVudFRyYWNrIiwic2V0Q3VycmVudFRyYWNrIiwidGltZVByb2dyZXNzIiwic2V0VGltZVByb2dyZXNzIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImF1ZGlvUmVmIiwicHJvZ3Jlc3NCYXJSZWYiLCJoYW5kbGVOZXh0IiwibGVuZ3RoIiwicHJldiIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/global-components/AudioPlayer/AudioPlayer.js\n"));

/***/ })

});