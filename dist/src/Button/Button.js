"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.scss");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

App.propTypes = {
  text: _propTypes.default.string,
  size: _propTypes.default.string,
  type: _propTypes.default.string
};
App.defaultProps = {
  text: 'Add',
  size: 'lg',
  type: 'primary'
};

function App(_ref) {
  var text = _ref.text,
      size = _ref.size,
      type = _ref.type;

  var styleSize = function styleSize() {
    switch (size) {
      case 'lg':
        return {
          fontSize: "15px",
          width: "120px",
          height: "48px",
          padding: "5px"
        };

      case 'sm':
        return {
          fontSize: "10px",
          padding: "5px",
          width: "77px",
          height: "42px"
        };

      default:
        return {
          fontSize: "12px",
          width: "150px",
          height: '35px',
          padding: "5px"
        };
    }
  };

  var styleForColor = function styleForColor() {
    switch (type) {
      case 'primary':
        return {
          border: "none",
          color: "#fff",
          backgroundImage: "linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%)"
        };

      case 'secondary':
        return {
          border: "none",
          color: "#fff",
          backgroundImage: "linear-gradient(45deg, #272424 0%, #353941 50%, #bfc9db 100%)"
        };

      case 'pOutline':
        return {
          color: "#007bff",
          border: "1px solid",
          backgroundColor: "inherit",
          borderColor: "#007bff"
        };

      case 'sOutline':
        return {
          color: "#6c757d",
          border: "1px solid",
          backgroundColor: "inherit",
          borderColor: "#6c757d"
        };

      default:
        return {};
    }
  };

  var styleForButtons = _objectSpread(_objectSpread({}, styleSize()), styleForColor());

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: "btnAnimate",
    style: styleForButtons,
    children: text
  });
}

var _default = App;
exports.default = _default;

//# sourceMappingURL=Button.js.map