"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.broadcastMessage = broadcastMessage;
exports.bundleAsync = bundleAsync;
exports.getUrlAsync = getUrlAsync;
exports.openAsync = openAsync;
exports.startAsync = startAsync;
exports.stopAsync = stopAsync;
function devcert() {
  const data = _interopRequireWildcard(require("@expo/devcert"));
  devcert = function () {
    return data;
  };
  return data;
}
function _betterOpn() {
  const data = _interopRequireDefault(require("better-opn"));
  _betterOpn = function () {
    return data;
  };
  return data;
}
function _chalk() {
  const data = _interopRequireDefault(require("chalk"));
  _chalk = function () {
    return data;
  };
  return data;
}
function _fsExtra() {
  const data = _interopRequireDefault(require("fs-extra"));
  _fsExtra = function () {
    return data;
  };
  return data;
}
function _getenv() {
  const data = _interopRequireDefault(require("getenv"));
  _getenv = function () {
    return data;
  };
  return data;
}
function path() {
  const data = _interopRequireWildcard(require("path"));
  path = function () {
    return data;
  };
  return data;
}
function _webpack() {
  const data = _interopRequireDefault(require("webpack"));
  _webpack = function () {
    return data;
  };
  return data;
}
function _webpackDevServer() {
  const data = _interopRequireDefault(require("webpack-dev-server"));
  _webpackDevServer = function () {
    return data;
  };
  return data;
}
function _internal() {
  const data = require("./internal");
  _internal = function () {
    return data;
  };
  return data;
}
function _formatWebpackMessages() {
  const data = require("./webpack-utils/formatWebpackMessages");
  _formatWebpackMessages = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const WEBPACK_LOG_TAG = 'expo';
let webpackDevServerInstance = null;
let webpackServerPort = null;
// A custom message websocket broadcaster used to send messages to a React Native runtime.
let customMessageSocketBroadcaster;
async function clearWebCacheAsync(projectRoot, mode) {
  const cacheFolder = path().join(projectRoot, '.expo', 'web', 'cache', mode);
  _internal().ProjectUtils.logInfo(projectRoot, WEBPACK_LOG_TAG, _chalk().default.dim(`Clearing ${mode} cache directory...`));
  try {
    await _fsExtra().default.remove(cacheFolder);
  } catch {}
}
async function broadcastMessage(message, data) {
  if (!webpackDevServerInstance || !(webpackDevServerInstance instanceof _webpackDevServer().default)) {
    return;
  }

  // Allow any message on native
  if (customMessageSocketBroadcaster) {
    customMessageSocketBroadcaster(message, data);
    // return;
  }

  if (message !== 'reload') {
    // TODO:
    // Webpack currently only supports reloading the client (browser),
    // remove this when we have custom sockets, and native support.
    return;
  }

  // TODO:
  // Default webpack-dev-server sockets use "content-changed" instead of "reload" (what we use on native).
  // For now, just manually convert the value so our CLI interface can be unified.
  const hackyConvertedMessage = message === 'reload' ? 'content-changed' : message;

  // @ts-ignore: type not exposed
  const connections = webpackDevServerInstance.webSocketServer.clients;
  if (!connections.length) {
    console.warn('No HMR clients are connected to the dev server');
  }
  webpackDevServerInstance.sendMessage(connections, hackyConvertedMessage, data);
}
async function startAsync(projectRoot, options = {}) {
  await stopAsync(projectRoot);
  if (webpackDevServerInstance) {
    _internal().ProjectUtils.logError(projectRoot, WEBPACK_LOG_TAG, _chalk().default.red(`Webpack is already running.`));
    return null;
  }
  const fullOptions = transformCLIOptions(options);
  const env = await getWebpackConfigEnvFromBundlingOptionsAsync(projectRoot, fullOptions);
  if (fullOptions.clear) {
    await clearWebCacheAsync(projectRoot, env.mode);
  }
  if (env.https) {
    if (!process.env.SSL_CRT_FILE || !process.env.SSL_KEY_FILE) {
      const ssl = await getSSLCertAsync({
        name: 'localhost',
        directory: projectRoot
      });
      if (ssl) {
        process.env.SSL_CRT_FILE = ssl.certPath;
        process.env.SSL_KEY_FILE = ssl.keyPath;
      }
    }
  }
  const port = await getAvailablePortAsync({
    projectRoot,
    defaultPort: options.port
  });
  webpackServerPort = port;
  _internal().ProjectUtils.logInfo(projectRoot, WEBPACK_LOG_TAG, `Starting Webpack on port ${webpackServerPort} in ${_chalk().default.underline(env.mode)} mode.`);
  const protocol = env.https ? 'https' : 'http';
  const config = await loadConfigAsync({
    ...env,
    platform: 'web'
  });

  // Create a webpack compiler
  const compiler = (0, _webpack().default)(config);
  const server = new (_webpackDevServer().default)({
    ...config.devServer,
    port,
    host: _internal().WebpackEnvironment.WEB_HOST
  }, compiler);
  try {
    // Launch WebpackDevServer.
    await server.start();
    if (typeof options.onWebpackFinished === 'function') {
      options.onWebpackFinished();
    }
  } catch (error) {
    _internal().ProjectUtils.logError(projectRoot, WEBPACK_LOG_TAG, error.message);
    if (typeof options.onWebpackFinished === 'function') {
      options.onWebpackFinished(error);
    }
  }
  webpackDevServerInstance = server;
  await _internal().ProjectSettings.setPackagerInfoAsync(projectRoot, {
    webpackServerPort
  });
  const host = _internal().ip.address();
  const url = `${protocol}://${host}:${port}`;

  // Extend the close method to ensure that we clean up the local info.
  const originalClose = server.stopCallback.bind(server);
  server.stopCallback = callback => {
    return originalClose(err => {
      _internal().ProjectSettings.setPackagerInfoAsync(projectRoot, {
        webpackServerPort: null
      }).finally(() => {
        callback === null || callback === void 0 ? void 0 : callback(err);
        webpackDevServerInstance = null;
        webpackServerPort = null;
      });
    });
  };
  return {
    server,
    location: {
      url,
      port,
      protocol,
      host
    },
    // Match the native protocol.
    messageSocket: {
      broadcast: broadcastMessage
    }
  };
}
async function stopAsync(projectRoot) {
  if (webpackDevServerInstance) {
    await new Promise(res => {
      if (webpackDevServerInstance) {
        _internal().ProjectUtils.logInfo(projectRoot, WEBPACK_LOG_TAG, '\u203A Stopping Webpack server');
        webpackDevServerInstance.stopCallback(res);
      }
    });
  }
}

// TODO: Reuse logging system that we use in dev server + extras
async function compileWebAppAsync(projectRoot, compiler) {
  // We generate the stats.json file in the webpack-config
  const {
    warnings
  } = await new Promise((resolve, reject) => compiler.run((error, stats) => {
    var _messages, _messages$errors, _messages2, _messages2$warnings;
    let messages;
    if (error) {
      if (!error.message) {
        return reject(error);
      }
      messages = (0, _formatWebpackMessages().formatWebpackMessages)({
        // @ts-ignore: TODO
        errors: [error.message],
        warnings: [],
        _showErrors: true,
        _showWarnings: true
      });
    } else {
      messages = (0, _formatWebpackMessages().formatWebpackMessages)(stats === null || stats === void 0 ? void 0 : stats.toJson({
        all: false,
        warnings: true,
        errors: true
      }));
    }
    if ((_messages = messages) !== null && _messages !== void 0 && (_messages$errors = _messages.errors) !== null && _messages$errors !== void 0 && _messages$errors.length) {
      // Only keep the first error. Others are often indicative
      // of the same problem, but confuse the reader with noise.
      if (messages.errors.length > 1) {
        messages.errors.length = 1;
      }
      return reject(new (_internal().XDLError)('WEBPACK_BUNDLE', messages.errors.join('\n\n')));
    }
    if (_getenv().default.boolish('EXPO_WEB_BUILD_STRICT', false) && _getenv().default.boolish('CI', false) && (_messages2 = messages) !== null && _messages2 !== void 0 && (_messages2$warnings = _messages2.warnings) !== null && _messages2$warnings !== void 0 && _messages2$warnings.length) {
      _internal().ProjectUtils.logWarning(projectRoot, WEBPACK_LOG_TAG, _chalk().default.yellow('\nTreating warnings as errors because `process.env.CI = true` and `process.env.EXPO_WEB_BUILD_STRICT = true`. \n' + 'Most CI servers set it automatically.\n'));
      return reject(new (_internal().XDLError)('WEBPACK_BUNDLE', messages.warnings.join('\n\n')));
    }
    resolve({
      warnings: messages.warnings
    });
  }));
  return {
    warnings
  };
}
async function bundleWebAppAsync(projectRoot, config) {
  const compiler = (0, _webpack().default)(config);
  try {
    const {
      warnings
    } = await compileWebAppAsync(projectRoot, compiler);
    if (warnings.length) {
      _internal().ProjectUtils.logWarning(projectRoot, WEBPACK_LOG_TAG, _chalk().default.yellow('Compiled with warnings.\n'));
      _internal().ProjectUtils.logWarning(projectRoot, WEBPACK_LOG_TAG, warnings.join('\n\n'));
    } else {
      _internal().ProjectUtils.logInfo(projectRoot, WEBPACK_LOG_TAG, _chalk().default.green('Compiled successfully.\n'));
    }
  } catch (error) {
    _internal().ProjectUtils.logError(projectRoot, WEBPACK_LOG_TAG, _chalk().default.red('Failed to compile.\n'));
    throw error;
  }
}
async function bundleAsync(projectRoot, options) {
  const fullOptions = transformCLIOptions({
    ...options
  });
  const env = await getWebpackConfigEnvFromBundlingOptionsAsync(projectRoot, {
    ...fullOptions,
    // Force production
    mode: 'production'
  });

  // @ts-ignore
  if (typeof env.offline !== 'undefined') {
    throw new Error('offline support must be added manually: https://expo.fyi/enabling-web-service-workers');
  }
  if (fullOptions.clear) {
    await clearWebCacheAsync(projectRoot, env.mode);
  }
  const config = await loadConfigAsync(env);
  await bundleWebAppAsync(projectRoot, config);
}

/**
 * Get the URL for the running instance of Webpack dev server.
 *
 * @param projectRoot
 */
async function getUrlAsync(projectRoot) {
  if (!webpackDevServerInstance) {
    return null;
  }
  const host = _internal().ip.address();
  const protocol = await getProtocolAsync(projectRoot);
  return `${protocol}://${host}:${webpackServerPort}`;
}
async function getProtocolAsync(projectRoot) {
  // TODO: Bacon: Handle when not in expo
  const {
    https
  } = await _internal().ProjectSettings.readAsync(projectRoot);
  return https === true ? 'https' : 'http';
}
async function getAvailablePortAsync(options) {
  try {
    const defaultPort = 'defaultPort' in options && options.defaultPort ? options.defaultPort : _internal().WebpackEnvironment.DEFAULT_PORT;
    const port = await (0, _internal().choosePortAsync)(options.projectRoot, {
      defaultPort,
      host: 'host' in options && options.host ? options.host : _internal().WebpackEnvironment.WEB_HOST
    });
    if (!port) {
      throw new Error(`Port ${defaultPort} not available.`);
    }
    return port;
  } catch (error) {
    throw new (_internal().XDLError)('NO_PORT_FOUND', error.message);
  }
}
function setMode(mode) {
  process.env.BABEL_ENV = mode;
  process.env.NODE_ENV = mode;
}
function validateBoolOption(name, value, defaultValue) {
  if (typeof value === 'undefined') {
    value = defaultValue;
  }
  if (typeof value !== 'boolean') {
    throw new (_internal().XDLError)('WEBPACK_INVALID_OPTION', `'${name}' option must be a boolean.`);
  }
  return value;
}
function transformCLIOptions(options) {
  // Transform the CLI flags into more explicit values
  return {
    ...options,
    isImageEditingEnabled: options.pwa
  };
}
async function applyOptionsToProjectSettingsAsync(projectRoot, options) {
  const newSettings = {};
  // Change settings before reading them
  if (typeof options.https === 'boolean') {
    newSettings.https = options.https;
  }
  if (Object.keys(newSettings).length) {
    await _internal().ProjectSettings.setAsync(projectRoot, newSettings);
  }
  return await _internal().ProjectSettings.readAsync(projectRoot);
}
async function getWebpackConfigEnvFromBundlingOptionsAsync(projectRoot, options) {
  const {
    dev,
    https
  } = await applyOptionsToProjectSettingsAsync(projectRoot, options);
  const mode = typeof options.mode === 'string' ? options.mode : dev ? 'development' : 'production';
  const isImageEditingEnabled = validateBoolOption('isImageEditingEnabled', options.isImageEditingEnabled, true);
  return {
    projectRoot,
    pwa: isImageEditingEnabled,
    isImageEditingEnabled,
    mode,
    https,
    logger: _internal().ProjectUtils.getLogger(projectRoot),
    port: options.port,
    ...(options.webpackEnv || {})
  };
}
async function getSSLCertAsync({
  name,
  directory
}) {
  console.log(_chalk().default.magenta`Ensuring auto SSL certificate is created (you might need to re-run with sudo)`);
  try {
    const result = await devcert().certificateFor(name);
    if (result) {
      const {
        key,
        cert
      } = result;
      const folder = path().join(directory, '.expo', 'web', 'development', 'ssl');
      await _fsExtra().default.ensureDir(folder);
      const keyPath = path().join(folder, `key-${name}.pem`);
      await _fsExtra().default.writeFile(keyPath, key);
      const certPath = path().join(folder, `cert-${name}.pem`);
      await _fsExtra().default.writeFile(certPath, cert);
      return {
        keyPath,
        certPath
      };
    }
    return result;
  } catch (error) {
    console.log(`Error creating SSL certificates: ${error}`);
  }
  return false;
}
function applyEnvironmentVariables(config) {
  // Use EXPO_DEBUG_WEB=true to enable debugging features for cases where the prod build
  // has errors that aren't caught in development mode.
  // Related: https://github.com/expo/expo-cli/issues/614
  if (_internal().WebpackEnvironment.isDebugModeEnabled() && config.mode === 'production') {
    console.log(_chalk().default.bgYellow.black('Bundling the project in debug mode.'));
    const output = config.output || {};
    const optimization = config.optimization || {};

    // Add comments that describe the file import/exports.
    // This will make it easier to debug.
    output.pathinfo = true;
    // Readable ids for better debugging.
    optimization.moduleIds = 'named';
    // if optimization.namedChunks is enabled optimization.chunkIds is set to 'named'.
    // This will manually enable it just to be safe.
    optimization.chunkIds = 'named';
    Object.assign(config, {
      output,
      optimization
    });
  }
  return config;
}
async function loadConfigAsync(env, argv) {
  setMode(env.mode);
  // Check if the project has a webpack.config.js in the root.
  const projectWebpackConfig = path().resolve(env.projectRoot, 'webpack.config.js');
  let config;
  if (_fsExtra().default.existsSync(projectWebpackConfig)) {
    const webpackConfig = require(projectWebpackConfig);
    if (typeof webpackConfig === 'function') {
      config = await webpackConfig(env, argv);
    } else {
      config = webpackConfig;
    }
  } else {
    // Fallback to the default expo webpack config.
    const loadDefaultConfigAsync = require('@expo/webpack-config');
    config = await loadDefaultConfigAsync(env, argv);
  }
  return applyEnvironmentVariables(config);
}
async function openAsync(projectRoot) {
  try {
    const url = await _internal().UrlUtils.constructWebAppUrlAsync(projectRoot, {
      hostType: 'localhost'
    });
    if (!url) {
      throw new Error('Webpack Dev Server is not running');
    }
    (0, _betterOpn().default)(url);
    return {
      success: true,
      url
    };
  } catch (e) {
    _internal().Logger.global.error(`Couldn't start project on web: ${e.message}`);
    return {
      success: false,
      error: e
    };
  }
}
//# sourceMappingURL=Webpack.js.map