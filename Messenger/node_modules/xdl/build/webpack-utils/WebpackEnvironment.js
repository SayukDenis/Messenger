"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEB_HOST = exports.DEFAULT_PORT = void 0;
exports.isDebugModeEnabled = isDebugModeEnabled;
function _getenv() {
  const data = _interopRequireDefault(require("getenv"));
  _getenv = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const WEB_HOST = _getenv().default.string('WEB_HOST', '0.0.0.0');
exports.WEB_HOST = WEB_HOST;
const DEFAULT_PORT = _getenv().default.int('WEB_PORT', 19006);

// When you have errors in the production build that aren't present in the development build you can use `EXPO_WEB_DEBUG=true expo start --no-dev` to debug those errors.
// - Prevent the production build from being minified
// - Include file path info comments in the bundle
exports.DEFAULT_PORT = DEFAULT_PORT;
function isDebugModeEnabled() {
  return _getenv().default.boolish('EXPO_WEB_DEBUG', false);
}
//# sourceMappingURL=WebpackEnvironment.js.map