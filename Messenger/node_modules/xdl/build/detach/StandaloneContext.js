"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StandaloneContextUser = exports.StandaloneContextService = void 0;
exports.isStandaloneContextDataService = isStandaloneContextDataService;
exports.isStandaloneContextDataUser = isStandaloneContextDataUser;
exports.isStandaloneContextTestEnvironment = isStandaloneContextTestEnvironment;
function _internal() {
  const data = require("../internal");
  _internal = function () {
    return data;
  };
  return data;
}
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// currently unused
function isStandaloneContextDataUser(value) {
  return value && typeof value.projectPath === 'string' && 'exp' in value;
}
function isStandaloneContextTestEnvironment(value) {
  return ['none', 'local', 'ci'].includes(value);
}
function isStandaloneContextDataService(value) {
  return value && isStandaloneContextTestEnvironment(value.testEnvironment) && typeof value.expoSourcePath === 'string' && typeof value.shellAppSdkVersion === 'string';
}

/**
 *  A user context is used when we are configuring a standalone app locally on a user's machine,
 *  such as during `exp detach`.
 */

/**
 *  A service context is used when we are generating a standalone app remotely on an Expo
 *  service machine, such as during `exp build`.
 */

class StandaloneContext {
  constructor() {
    _defineProperty(this, "data", void 0);
    _defineProperty(this, "config", void 0);
  }
  /**
   *  On iOS we begin configuring standalone apps before we have any information about the
   *  project's manifest. By default let's treat all contexts as non-anonymous and override
   *  it in contexts that needs this to be different.
   */
  isAnonymous() {
    return false;
  }
}
// same as underlying app.json or manifest
_defineProperty(StandaloneContext, "createUserContext", (projectPath, exp, publishedUrl) => {
  const context = new StandaloneContextUser({
    projectPath,
    exp
  }, {
    url: publishedUrl,
    releaseChannel: 'default'
  },
  // we never expect to handle the build step for user contexts right now
  _internal().StandaloneBuildFlags.createEmpty());
  context.config = exp;
  return context;
});
_defineProperty(StandaloneContext, "createServiceContext", (expoSourcePath, archivePath, manifest, privateConfig, testEnvironment, build, publishedUrl, releaseChannel, shellAppSdkVersion) => {
  const context = new StandaloneContextService({
    expoSourcePath,
    archivePath,
    manifest,
    privateConfig,
    testEnvironment,
    shellAppSdkVersion
  }, {
    url: publishedUrl,
    releaseChannel: releaseChannel ? releaseChannel : 'default'
  }, build);
  context.config = manifest;
  return context;
});
class StandaloneContextUser extends StandaloneContext {
  constructor(data, published, build) {
    super();
    this.data = data;
    this.published = published;
    this.build = build;
    _defineProperty(this, "type", 'user');
  }
}
exports.StandaloneContextUser = StandaloneContextUser;
class StandaloneContextService extends StandaloneContext {
  constructor(data, published, build) {
    super();
    this.data = data;
    this.published = published;
    this.build = build;
    _defineProperty(this, "type", 'service');
  }

  /**
   *  On iOS we begin configuring standalone apps before we have any information about the
   *  project's manifest.
   */
  isAnonymous() {
    return true;
  }
}
exports.StandaloneContextService = StandaloneContextService;
var _default = StandaloneContext;
exports.default = _default;
//# sourceMappingURL=StandaloneContext.js.map