"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOverride = exports.removeOverride = exports.isOverridden = exports.getOverride = void 0;
const setOverride = (_key, _enabled) => {
  throw new Error('Must use mocked FeatureGateTestOverrides');
};
exports.setOverride = setOverride;
const removeOverride = _key => {
  throw new Error('Must use mocked FeatureGateTestOverrides');
};
exports.removeOverride = removeOverride;
const isOverridden = _key => false;
exports.isOverridden = isOverridden;
const getOverride = _key => {
  throw new Error('Must use mocked FeatureGateTestOverrides');
};
exports.getOverride = getOverride;
//# sourceMappingURL=FeatureGateTestOverrides.js.map