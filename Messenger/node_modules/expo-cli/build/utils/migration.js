"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warnAboutLocalCLI = warnAboutLocalCLI;
exports.warnMigration = warnMigration;
function _chalk() {
  const data = _interopRequireDefault(require("chalk"));
  _chalk = function () {
    return data;
  };
  return data;
}
function _log() {
  const data = _interopRequireDefault(require("../log"));
  _log = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Not needed anymore, we tell people to migrate on every command
function warnAboutLocalCLI(projectRoot, {
  localCmd
}) {
  // const { exp } = getConfig(projectRoot, { skipSDKVersionRequirement: true });
  // const useLocalCLI = boolish('EXPO_USE_LOCAL_CLI', true);
  // if (Versions.gteSdkVersion(exp, '46.0.0') && useLocalCLI) {
  //   Log.warn(
  //     chalk`\nThis command is being executed with the global Expo CLI. ${learnMore(
  //       'https://blog.expo.dev/the-new-expo-cli-f4250d8e3421'
  //     )}\nTo use the local CLI instead (recommended in SDK 46 and higher), run:\n\u203A {bold npx expo ${localCmd}}\n`
  //   );
  // }
}
function warnMigration(toCommand) {
  _log().default.warn((0, _chalk().default)`\nMigrate to using:\n\u203A {bold ${toCommand}}\n`);
}
//# sourceMappingURL=migration.js.map