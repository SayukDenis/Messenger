import { FeatureGateKey } from '../internal';
export declare const setOverride: (_key: FeatureGateKey, _enabled: boolean) => void;
export declare const removeOverride: (_key: FeatureGateKey) => void;
export declare const isOverridden: (_key: FeatureGateKey) => boolean;
export declare const getOverride: (_key: FeatureGateKey) => boolean;
