"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _glamorous = require("glamorous");

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/kyle/Workspace/personal/cereal/portfolio/components/Logo/index.js";


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