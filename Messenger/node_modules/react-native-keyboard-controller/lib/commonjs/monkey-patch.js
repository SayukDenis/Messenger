"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.revertMonkeyPatch = exports.applyMonkeyPatch = void 0;
// stub for all platforms
const NOOP = () => {};
const applyMonkeyPatch = exports.applyMonkeyPatch = NOOP;
const revertMonkeyPatch = exports.revertMonkeyPatch = NOOP;
//# sourceMappingURL=monkey-patch.js.map