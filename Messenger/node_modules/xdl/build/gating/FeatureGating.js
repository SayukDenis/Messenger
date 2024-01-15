"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _internal() {
  const data = require("../internal");
  _internal = function () {
    return data;
  };
  return data;
}
class FeatureGating {
  constructor(serverValues, envOverrides) {
    this.serverValues = serverValues;
    this.envOverrides = envOverrides;
  }
  isEnabled(experimentKey) {
    if (process.env.NODE_ENV === 'test' && _internal().FeatureGateTestOverrides.isOverridden(experimentKey)) {
      return _internal().FeatureGateTestOverrides.getOverride(experimentKey);
    }
    if (this.envOverrides.isOverridden(experimentKey)) {
      return this.envOverrides.getOverride(experimentKey);
    }
    if (experimentKey in this.serverValues) {
      return this.serverValues[experimentKey];
    }
    return _internal().featureGateDefaultValueWhenNoServerValue[experimentKey];
  }

  /**
   * Test gate override methods
   */

  static overrideKeyForScope(key, enabled, scope) {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error(`Cannot overrideKeyForScope outside of test environment`);
    }
    _internal().FeatureGateTestOverrides.setOverride(key, enabled);
    try {
      scope();
    } finally {
      _internal().FeatureGateTestOverrides.removeOverride(key);
    }
  }
  static async overrideKeyForScopeAsync(key, enabled, scope) {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error(`Cannot overrideKeyForScopeAsync outside of test environment`);
    }
    _internal().FeatureGateTestOverrides.setOverride(key, enabled);
    try {
      await scope();
    } finally {
      _internal().FeatureGateTestOverrides.removeOverride(key);
    }
  }
  static overrideKeyForEachInTest(key, enabled) {
    beforeEach(() => _internal().FeatureGateTestOverrides.setOverride(key, enabled));
    afterEach(() => _internal().FeatureGateTestOverrides.removeOverride(key));
  }
}
exports.default = FeatureGating;
//# sourceMappingURL=FeatureGating.js.map