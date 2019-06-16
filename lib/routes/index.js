"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Demo = _interopRequireDefault(require("@components/Demo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = () => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
  path: "",
  component: _Demo.default
})));

var _default = _Demo.default;
exports.default = _default;