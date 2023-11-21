"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));
  _nullthrows = function () {
    return data;
  };
  return data;
}
function _internal() {
  const data = require("../internal");
  _internal = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class FeatureGateEnvOverrides {
  constructor() {
    _defineProperty(this, "map", new Map());
    const {
      enable,
      disable
    } = _internal().Env.getFeatureGateOverrides();
    const overrideEnableGateKeys = new Set(enable);
    const overrideDisableGateKeys = new Set(disable);
    for (const overrideEnableKey of overrideEnableGateKeys) {
      if (overrideDisableGateKeys.has(overrideEnableKey)) {
        continue;
      }
      this.map.set(overrideEnableKey, true);
    }
    for (const overrideDisableGateKey of overrideDisableGateKeys) {
      this.map.set(overrideDisableGateKey, false);
    }
  }
  isOverridden(key) {
    var _this$map$has;
    return (_this$map$has = this.map.has(key)) !== null && _this$map$has !== void 0 ? _this$map$has : false;
  }
  getOverride(key) {
    return (0, _nullthrows().default)(this.map.get(key));
  }
}
exports.default = FeatureGateEnvOverrides;
//# sourceMappingURL=FeatureGateEnvOverrides.js.map