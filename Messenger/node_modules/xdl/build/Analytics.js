"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AnalyticsClient = void 0;
function _rudderSdkNode() {
  const data = _interopRequireDefault(require("@expo/rudder-sdk-node"));
  _rudderSdkNode = function () {
    return data;
  };
  return data;
}
function _os() {
  const data = _interopRequireDefault(require("os"));
  _os = function () {
    return data;
  };
  return data;
}
function _url() {
  const data = require("url");
  _url = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const PLATFORM_TO_ANALYTICS_PLATFORM = {
  darwin: 'Mac',
  win32: 'Windows',
  linux: 'Linux'
};
class AnalyticsClient {
  constructor() {
    _defineProperty(this, "userTraits", void 0);
    _defineProperty(this, "rudderstackClient", void 0);
    _defineProperty(this, "_userId", void 0);
    _defineProperty(this, "_version", void 0);
  }
  get userId() {
    return this._userId;
  }
  get version() {
    return this._version;
  }
  async flush() {
    if (this.rudderstackClient) {
      await this.rudderstackClient.flush();
    }
  }
  initializeClient(rudderstackWriteKey, rudderstackDataPlaneURL, packageVersion) {
    // Do not wait before flushing, we want node to close immediately if the programs ends
    this.rudderstackClient = new (_rudderSdkNode().default)(rudderstackWriteKey, new (_url().URL)('/v1/batch', rudderstackDataPlaneURL).toString(), {
      flushInterval: 300
    });
    this._version = packageVersion;
  }
  identifyUser(userId, traits) {
    this._userId = userId;
    this.userTraits = traits;
    if (this.rudderstackClient) {
      this.rudderstackClient.identify({
        userId: this._userId,
        traits: this.userTraits,
        context: this.getContext()
      });
    }
  }
  logEvent(name, properties = {}) {
    if (this.rudderstackClient && this._userId) {
      this.rudderstackClient.track({
        userId: this._userId,
        event: name,
        properties,
        context: this.getContext()
      });
    }
  }
  getContext() {
    const platform = PLATFORM_TO_ANALYTICS_PLATFORM[_os().default.platform()] || _os().default.platform();
    const context = {
      device: {
        model: platform,
        brand: platform
      },
      os: {
        name: platform,
        version: _os().default.release()
      },
      app: {}
    };
    if (this._version) {
      context.app = {
        version: this._version
      };
    }
    return context;
  }
}
exports.AnalyticsClient = AnalyticsClient;
const defaultClient = new AnalyticsClient();
var _default = defaultClient;
exports.default = _default;
//# sourceMappingURL=Analytics.js.map