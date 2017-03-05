'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWorld = undefined;

var _rbush = require('rbush');

var _rbush2 = _interopRequireDefault(_rbush);

var _noise = require('./noise');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var grid = function grid() {
  return new _rbush2.default();
};

var createWorld = function createWorld(seed) {
  return function (worldSize) {
    _noise.noise.seed(seed || Math.random());

    for (var x = 0; x < worldSize; x++) {
      for (var y = 0; y < worldSize; y++) {

        var value = _noise.noise.simplex3(x / 100, y / 100, 16);

        image[x][y].r = Math.abs(value) * 256; // Or whatever. Open demo.html to see it used with canvas.
      }
    }
  };
};

exports.createWorld = createWorld;