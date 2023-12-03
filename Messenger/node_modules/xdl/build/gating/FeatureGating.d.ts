import { FeatureGateEnvOverrides, FeatureGateKey } from '../internal';
export default class FeatureGating {
    private readonly serverValues;
    private readonly envOverrides;
    constructor(serverValues: {
        [key: string]: boolean;
    }, envOverrides: FeatureGateEnvOverrides);
    isEnabled(experimentKey: FeatureGateKey): boolean;
    /**
     * Test gate override methods
     */
    static overrideKeyForScope(key: FeatureGateKey, enabled: boolean, scope: () => void): void;
    static overrideKeyForScopeAsync(key: FeatureGateKey, enabled: boolean, scope: () => Promise<void>): Promise<void>;
    static overrideKeyForEachInTest(key: FeatureGateKey, enabled: boolean): void;
}
