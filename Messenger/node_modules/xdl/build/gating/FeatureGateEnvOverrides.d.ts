import { FeatureGateKey } from '../internal';
export default class FeatureGateEnvOverrides {
    private readonly map;
    constructor();
    isOverridden(key: FeatureGateKey): boolean;
    getOverride(key: FeatureGateKey): boolean;
}
