'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeLargeDragon = exports.newDragon = undefined;

var _snakeCase2 = require('lodash/snakeCase');

var _snakeCase3 = _interopRequireDefault(_snakeCase2);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _creature = require('./creature');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newDragon = function newDragon(size) {
  return function (name) {
    return dragon(size, name);
  };
};
var dragon = function dragon(size, name) {
  return setName((0, _creature.creature)(size))(name);
};
var setName = function setName(creature) {
  return function (name) {
    return (0, _set3.default)(creature, 'name', (0, _snakeCase3.default)(name));
  };
};
var makeLargeDragon = newDragon('large');

exports.newDragon = newDragon;
exports.makeLargeDragon = makeLargeDragon;