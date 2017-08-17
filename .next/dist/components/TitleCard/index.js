"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _glamorous = require("glamorous");

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/kyle/Workspace/personal/cereal/portfolio/components/TitleCard/index.js";


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