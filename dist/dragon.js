'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeLargeDragon = exports.newDragon = undefined;

var _lodash = require('lodash');

var _creature = require('./creature');

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
    return (0, _lodash.set)(creature, 'name', (0, _lodash.snakeCase)(name));
  };
};
var makeLargeDragon = newDragon('large');

exports.newDragon = newDragon;
exports.makeLargeDragon = makeLargeDragon;