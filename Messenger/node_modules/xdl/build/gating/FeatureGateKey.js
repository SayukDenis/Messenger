"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.featureGateDefaultValueWhenNoServerValue = exports.FeatureGateKey = void 0;
let FeatureGateKey;
exports.FeatureGateKey = FeatureGateKey;
(function (FeatureGateKey) {
  FeatureGateKey["TEST"] = "test";
})(FeatureGateKey || (exports.FeatureGateKey = FeatureGateKey = {}));
const featureGateDefaultValueWhenNoServerValue = {
  [FeatureGateKey.TEST]: true
};
exports.featureGateDefaultValueWhenNoServerValue = featureGateDefaultValueWhenNoServerValue;
//# sourceMappingURL=FeatureGateKey.js.map