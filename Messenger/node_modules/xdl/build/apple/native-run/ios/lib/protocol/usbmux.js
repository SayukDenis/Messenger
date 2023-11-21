"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsbmuxProtocolWriter = exports.UsbmuxProtocolReader = exports.UsbmuxProtocolClient = exports.USBMUXD_HEADER_SIZE = void 0;
function _plist() {
  const data = _interopRequireDefault(require("@expo/plist"));
  _plist = function () {
    return data;
  };
  return data;
}
function _debug() {
  const data = _interopRequireDefault(require("debug"));
  _debug = function () {
    return data;
  };
  return data;
}
function _protocol() {
  const data = require("./protocol");
  _protocol = function () {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                           * Copyright (c) 2021 Expo, Inc.
                                                                                                                                                                                                                                                                                                                                                                                           * Copyright (c) 2018 Drifty Co.
                                                                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                                                                           * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                           */
const debug = (0, _debug().default)('expo:xdl:ios:lib:protocol:usbmux');
const USBMUXD_HEADER_SIZE = 16;
exports.USBMUXD_HEADER_SIZE = USBMUXD_HEADER_SIZE;
class UsbmuxProtocolClient extends _protocol().ProtocolClient {
  constructor(socket) {
    super(socket, new (_protocol().ProtocolReaderFactory)(UsbmuxProtocolReader), new UsbmuxProtocolWriter());
  }
}
exports.UsbmuxProtocolClient = UsbmuxProtocolClient;
class UsbmuxProtocolReader extends _protocol().PlistProtocolReader {
  constructor(callback) {
    super(USBMUXD_HEADER_SIZE, callback);
  }
  parseHeader(data) {
    return data.readUInt32LE(0) - USBMUXD_HEADER_SIZE;
  }
  parseBody(data) {
    const resp = super.parseBody(data);
    debug(`Response: ${JSON.stringify(resp)}`);
    return resp;
  }
}
exports.UsbmuxProtocolReader = UsbmuxProtocolReader;
class UsbmuxProtocolWriter {
  constructor() {
    _defineProperty(this, "useTag", 0);
  }
  write(socket, msg) {
    // TODO Usbmux message type
    debug(`socket write: ${JSON.stringify(msg)}`);
    const {
      messageType,
      extraFields
    } = msg;
    const plistMessage = _plist().default.build({
      BundleID: 'dev.expo.native-run',
      // TODO
      ClientVersionString: 'usbmux.js',
      // TODO
      MessageType: messageType,
      ProgName: 'native-run',
      // TODO
      kLibUSBMuxVersion: 3,
      ...extraFields
    });
    const dataSize = plistMessage ? plistMessage.length : 0;
    const protocolVersion = 1;
    const messageCode = 8;
    const header = Buffer.alloc(USBMUXD_HEADER_SIZE);
    header.writeUInt32LE(USBMUXD_HEADER_SIZE + dataSize, 0);
    header.writeUInt32LE(protocolVersion, 4);
    header.writeUInt32LE(messageCode, 8);
    header.writeUInt32LE(this.useTag++, 12); // TODO
    socket.write(header);
    socket.write(plistMessage);
  }
}
exports.UsbmuxProtocolWriter = UsbmuxProtocolWriter;
//# sourceMappingURL=usbmux.js.map