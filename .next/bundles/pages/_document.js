
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(28);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(51);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(65);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(50);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(13);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(30);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(14);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(29);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__(427);

var _document2 = _interopRequireDefault(_document);

var _server = __webpack_require__(314);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/hehk/wrk/important/portfolio/pages/_document.js?entry";


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  (0, _createClass3.default)(MyDocument, null, [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
        var renderPage = _ref.renderPage;
        var page, styles;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = renderPage();
                styles = (0, _server.renderStatic)(function () {
                  return page.html;
                });
                return _context.abrupt("return", (0, _extends3.default)({}, page, styles));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function MyDocument(props) {
    (0, _classCallCheck3.default)(this, MyDocument);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).call(this, props));

    var __NEXT_DATA__ = props.__NEXT_DATA__,
        ids = props.ids;

    if (ids) {
      __NEXT_DATA__.ids = _this.props.ids;
    }
    return _this;
  }

  (0, _createClass3.default)(MyDocument, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("html", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Hehk"), _react2.default.createElement("style", { dangerouslySetInnerHTML: { __html: this.props.css }, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Work+Sans:700-Noticia+Text:italic-Proza+Libre:regular",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), _react2.default.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })));
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/hehk/wrk/important/portfolio/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hehk/wrk/important/portfolio/pages/_document.js"); } } })();
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
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(234);


/***/ })

},[548]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/YTYwOWI2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5pbXBvcnQgeyByZW5kZXJTdGF0aWMgfSBmcm9tIFwiZ2xhbW9yL3NlcnZlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVuZGVyUGFnZSB9KSB7XG4gICAgY29uc3QgcGFnZSA9IHJlbmRlclBhZ2UoKTtcbiAgICBjb25zdCBzdHlsZXMgPSByZW5kZXJTdGF0aWMoKCkgPT4gcGFnZS5odG1sKTtcbiAgICByZXR1cm4geyAuLi5wYWdlLCAuLi5zdHlsZXMgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgX19ORVhUX0RBVEFfXywgaWRzIH0gPSBwcm9wcztcbiAgICBpZiAoaWRzKSB7XG4gICAgICBfX05FWFRfREFUQV9fLmlkcyA9IHRoaXMucHJvcHMuaWRzO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5IZWhrPC90aXRsZT5cbiAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0aGlzLnByb3BzLmNzcyB9fSAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVdvcmsrU2Fuczo3MDAtTm90aWNpYStUZXh0Oml0YWxpYy1Qcm96YStMaWJyZTpyZWd1bGFyXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvX2RvY3VtZW50LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBOzs7Ozs7O0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFNQTs7Ozs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBOztBQUdBO0FBQUE7O0FBRkE7QUFLQTtBQUxBO0FBQ0E7O0FBSUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFJQTtBQUpBO0FBQUE7Ozs7O0FBNUJBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        