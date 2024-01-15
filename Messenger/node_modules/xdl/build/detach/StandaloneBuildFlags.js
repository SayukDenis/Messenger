"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*
 *  StandaloneBuildFlags is owned by a StandaloneContext and carries information about
 *  how to compile native code during the build step.
 */

class StandaloneBuildFlags {
  constructor() {
    _defineProperty(this, "configuration", 'Debug');
    _defineProperty(this, "isExpoClientBuild", () => false);
    _defineProperty(this, "android", void 0);
    _defineProperty(this, "ios", void 0);
  }
}
_defineProperty(StandaloneBuildFlags, "createEmpty", () => {
  return new StandaloneBuildFlags();
});
_defineProperty(StandaloneBuildFlags, "createIos", (configuration, ios) => {
  const flags = new StandaloneBuildFlags();
  flags.configuration = configuration;
  flags.ios = ios;
  flags.isExpoClientBuild = () => (ios === null || ios === void 0 ? void 0 : ios.buildType) === 'client';
  return flags;
});
_defineProperty(StandaloneBuildFlags, "createAndroid", (configuration, android) => {
  const flags = new StandaloneBuildFlags();
  flags.configuration = configuration;
  flags.android = android;
  flags.isExpoClientBuild = () => false;
  return flags;
});
var _default = StandaloneBuildFlags;
exports.default = _default;
//# sourceMappingURL=StandaloneBuildFlags.js.map