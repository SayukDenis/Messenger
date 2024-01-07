"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBuildStatusAsync = getBuildStatusAsync;
function _xdl() {
  const data = require("xdl");
  _xdl = function () {
    return data;
  };
  return data;
}
function _startBuildAsync() {
  const data = require("./startBuildAsync");
  _startBuildAsync = function () {
    return data;
  };
  return data;
}
// https://github.com/expo/universe/blob/283efaba3acfdefdc7db12f649516b6d6a94bec4/server/www/src/data/entities/builds/BuildJobEntity.ts#L25-L56

async function getBuildStatusAsync(projectRoot, options = {}) {
  const user = await _xdl().UserManager.ensureLoggedInAsync();
  (0, _startBuildAsync().validateOptions)(options);
  const {
    exp
  } = await (0, _startBuildAsync().getExpAsync)(projectRoot, options);
  const api = _xdl().ApiV2.clientForUser(user);
  return await api.postAsync('build/status', {
    manifest: exp,
    options
  });
}
//# sourceMappingURL=getBuildStatusAsync.js.map