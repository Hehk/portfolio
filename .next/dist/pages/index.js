"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Logo = require("../components/Logo");

var _Logo2 = _interopRequireDefault(_Logo);

var _TitleCard = require("../components/TitleCard");

var _TitleCard2 = _interopRequireDefault(_TitleCard);

var _Projects = require("../components/Projects");

var _Projects2 = _interopRequireDefault(_Projects);

var _glamor = require("glamor");

var _glamorous = require("glamorous");

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/kyle/Workspace/personal/cereal/portfolio/pages/index.js?entry";


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