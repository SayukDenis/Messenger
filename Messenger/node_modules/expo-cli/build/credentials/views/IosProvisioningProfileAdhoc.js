"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateOrReuseProvisioningProfileAdhoc = void 0;
function _chalk() {
  const data = _interopRequireDefault(require("chalk"));
  _chalk = function () {
    return data;
  };
  return data;
}
function _provisioningProfileAdhoc() {
  const data = require("../../appleApi/provisioningProfileAdhoc");
  _provisioningProfileAdhoc = function () {
    return data;
  };
  return data;
}
function _log() {
  const data = _interopRequireDefault(require("../../log"));
  _log = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class CreateOrReuseProvisioningProfileAdhoc {
  constructor(app, options) {
    this.app = app;
    _defineProperty(this, "distCertSerialNumber", void 0);
    _defineProperty(this, "udids", void 0);
    const {
      distCertSerialNumber,
      udids
    } = options;
    this.distCertSerialNumber = distCertSerialNumber;
    this.udids = udids;
  }
  async assignProvisioningProfile(ctx, provisioningProfile) {
    await ctx.ios.updateProvisioningProfile(this.app, provisioningProfile);
    _log().default.log(_chalk().default.green(`Successfully assigned Provisioning Profile id: ${provisioningProfile.provisioningProfileId} to @${this.app.accountName}/${this.app.projectName} (${this.app.bundleIdentifier})`));
  }
  async createOrReuse(ctx) {
    await ctx.ensureAppleCtx();
    const ppManager = new (_provisioningProfileAdhoc().ProvisioningProfileAdhocManager)(ctx.appleCtx);
    return await ppManager.createOrReuse(this.udids, this.app.bundleIdentifier, this.distCertSerialNumber);
  }
  async open(ctx) {
    if (!ctx.user) {
      throw new Error(`This workflow requires you to be logged in.`);
    }
    const provisioningProfile = await this.createOrReuse(ctx);
    await this.assignProvisioningProfile(ctx, provisioningProfile);
    return null;
  }
}
exports.CreateOrReuseProvisioningProfileAdhoc = CreateOrReuseProvisioningProfileAdhoc;
//# sourceMappingURL=IosProvisioningProfileAdhoc.js.map