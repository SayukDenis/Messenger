"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printDeprecationNotice = printDeprecationNotice;
function _log() {
  const data = _interopRequireDefault(require("../../log"));
  _log = function () {
    return data;
  };
  return data;
}
function _TerminalLink() {
  const data = require("../utils/TerminalLink");
  _TerminalLink = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function printDeprecationNotice() {
  _log().default.warn('The last day to use expo publish is 2024-02-12 and SDK 49 is the last version to support it. Migrate to eas update.');
  _log().default.warn(`${(0, _TerminalLink().learnMore)('https://blog.expo.dev/sunsetting-expo-publish-and-classic-updates-6cb9cd295378')}`);
}
//# sourceMappingURL=deprecationNotice.js.map