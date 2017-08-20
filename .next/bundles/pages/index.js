
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _Logo = __webpack_require__(553);

var _Logo2 = _interopRequireDefault(_Logo);

var _TitleCard = __webpack_require__(555);

var _TitleCard2 = _interopRequireDefault(_TitleCard);

var _Projects = __webpack_require__(554);

var _Projects2 = _interopRequireDefault(_Projects);

var _glamor = __webpack_require__(309);

var _glamorous = __webpack_require__(551);

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/hehk/wrk/important/portfolio/pages/index.js?entry";


// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== "undefined") {
  (0, _glamor.rehydrate)(window.__NEXT_DATA__.ids);
}

var Wrapper = _glamorous2.default.div({
  minHeight: "100vh"
});
var TopSection = _glamorous2.default.section({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "300px",
  position: "relative",
  margin: 0,
  padding: 0
});

var Index = function Index() {
  _glamor.css.global("html, body", {
    padding: 0,
    margin: 0,
    background: "white"
  });

  return _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(TopSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(_Logo2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  })), _react2.default.createElement(_TitleCard2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), _react2.default.createElement(_Projects2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "test")));
};

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/hehk/wrk/important/portfolio/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hehk/wrk/important/portfolio/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(87)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _glamorous = __webpack_require__(551);

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/hehk/wrk/important/portfolio/components/Logo/index.js";


var Wrapper = _glamorous2.default.div({
  fontSize: "5rem",
  fontFamily: "Work Sans",
  color: "#30383B"
});
var Accent = _glamorous2.default.span({
  color: "#49ACB3"
});

var Logo = function Logo() {
  return _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(Accent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, ":= "), "Hehk");
};

exports.default = Logo;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/hehk/wrk/important/portfolio/components/Logo/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hehk/wrk/important/portfolio/components/Logo/index.js"); } } })();

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamorous = __webpack_require__(551);

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Projects = _glamorous2.default.ol({
  listStyle: "none",
  margin: 0,
  padding: 0
});

exports.default = Projects;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/hehk/wrk/important/portfolio/components/Projects/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hehk/wrk/important/portfolio/components/Projects/index.js"); } } })();

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _glamorous = __webpack_require__(551);

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/hehk/wrk/important/portfolio/components/TitleCard/index.js";


var Wrapper = _glamorous2.default.div({
  border: "4px solid #30383B",
  borderRight: "0px",
  borderBottom: "0px",
  backgroundColor: "#F3F5F6",
  fontSize: "1.5rem",
  fontFamily: "Noticia Text",
  fontStyle: "Oblique",
  maxWidth: "30vw",
  position: "relative",
  left: "50vw",
  padding: "1rem"
});

var TitleCard = function TitleCard() {
  return _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "A nerd stuck in a love affair with functional programming and machine learning");
};

exports.default = TitleCard;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/hehk/wrk/important/portfolio/components/TitleCard/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hehk/wrk/important/portfolio/components/TitleCard/index.js"); } } })();

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(552);


/***/ })

},[556]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzNjMzJmMDEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dvL2luZGV4LmpzPzNjMzJmMDEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9pbmRleC5qcz8zYzMyZjAxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGl0bGVDYXJkL2luZGV4LmpzPzNjMzJmMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9nb1wiO1xuaW1wb3J0IFRpdGxlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9UaXRsZUNhcmRcIjtcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9qZWN0c1wiO1xuaW1wb3J0IHsgcmVoeWRyYXRlLCBjc3MgfSBmcm9tIFwiZ2xhbW9yXCI7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gXCJnbGFtb3JvdXNcIjtcblxuLy8gQWRkcyBzZXJ2ZXIgZ2VuZXJhdGVkIHN0eWxlcyB0byBnbGFtb3IgY2FjaGUuXG4vLyBIYXMgdG8gcnVuIGJlZm9yZSBhbnkgYHN0eWxlKClgIGNhbGxzXG4vLyAnX19ORVhUX0RBVEFfXy5pZHMnIGlzIHNldCBpbiAnX2RvY3VtZW50LmpzJ1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgcmVoeWRyYXRlKHdpbmRvdy5fX05FWFRfREFUQV9fLmlkcyk7XG59XG5cbmNvbnN0IFdyYXBwZXIgPSBnbGFtb3JvdXMuZGl2KHtcbiAgbWluSGVpZ2h0OiBcIjEwMHZoXCJcbn0pO1xuY29uc3QgVG9wU2VjdGlvbiA9IGdsYW1vcm91cy5zZWN0aW9uKHtcbiAgZGlzcGxheTogXCJmbGV4XCIsXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICBoZWlnaHQ6IFwiMzAwcHhcIixcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgbWFyZ2luOiAwLFxuICBwYWRkaW5nOiAwXG59KTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNzcy5nbG9iYWwoXCJodG1sLCBib2R5XCIsIHtcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCJcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxUb3BTZWN0aW9uPjxMb2dvIC8+PC9Ub3BTZWN0aW9uPlxuICAgICAgPFRpdGxlQ2FyZCAvPlxuICAgICAgPFByb2plY3RzPjxsaT50ZXN0PC9saT48L1Byb2plY3RzPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gXCJnbGFtb3JvdXNcIjtcblxuY29uc3QgV3JhcHBlciA9IGdsYW1vcm91cy5kaXYoe1xuICBmb250U2l6ZTogXCI1cmVtXCIsXG4gIGZvbnRGYW1pbHk6IFwiV29yayBTYW5zXCIsXG4gIGNvbG9yOiBcIiMzMDM4M0JcIlxufSk7XG5jb25zdCBBY2NlbnQgPSBnbGFtb3JvdXMuc3Bhbih7XG4gIGNvbG9yOiBcIiM0OUFDQjNcIlxufSk7XG5cbmNvbnN0IExvZ28gPSAoKSA9PlxuICA8V3JhcHBlcj5cbiAgICA8QWNjZW50PntcIjo9IFwifTwvQWNjZW50PlxuICAgIHtcIkhlaGtcIn1cbiAgPC9XcmFwcGVyPjtcblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTG9nby9pbmRleC5qcyIsImltcG9ydCBnbGFtb3JvdXMgZnJvbSBcImdsYW1vcm91c1wiO1xuXG5jb25zdCBQcm9qZWN0cyA9IGdsYW1vcm91cy5vbCh7XG4gIGxpc3RTdHlsZTogXCJub25lXCIsXG4gIG1hcmdpbjogMCxcbiAgcGFkZGluZzogMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Qcm9qZWN0cy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSBcImdsYW1vcm91c1wiO1xuXG5jb25zdCBXcmFwcGVyID0gZ2xhbW9yb3VzLmRpdih7XG4gIGJvcmRlcjogXCI0cHggc29saWQgIzMwMzgzQlwiLFxuICBib3JkZXJSaWdodDogXCIwcHhcIixcbiAgYm9yZGVyQm90dG9tOiBcIjBweFwiLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0YzRjVGNlwiLFxuICBmb250U2l6ZTogXCIxLjVyZW1cIixcbiAgZm9udEZhbWlseTogXCJOb3RpY2lhIFRleHRcIixcbiAgZm9udFN0eWxlOiBcIk9ibGlxdWVcIixcbiAgbWF4V2lkdGg6IFwiMzB2d1wiLFxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICBsZWZ0OiBcIjUwdndcIixcbiAgcGFkZGluZzogXCIxcmVtXCJcbn0pO1xuXG5jb25zdCBUaXRsZUNhcmQgPSAoKSA9PlxuICA8V3JhcHBlcj5cbiAgICBBIG5lcmQgc3R1Y2sgaW4gYSBsb3ZlIGFmZmFpciB3aXRoIGZ1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgYW5kIG1hY2hpbmVcbiAgICBsZWFybmluZ1xuICA8L1dyYXBwZXI+O1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZUNhcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1RpdGxlQ2FyZC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUtBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFWQTtBQUNBO0FBWUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        