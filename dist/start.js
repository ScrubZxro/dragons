'use strict';

var _dragon = require('./dragon');

console.reset = function () {
  return process.stdout.write('\x1Bc');
};
console.reset();
console.log('Ready to adventure?');

var d1 = (0, _dragon.makeLargeDragon)('bob');
var d2 = (0, _dragon.makeLargeDragon)('alice');

console.log('You see a ' + d1.size + ' dragon named ' + d1.name + ', with ' + d1.hp + ' health');

var attack = d1.attack(200);

console.log(d1.name + ' attacks ' + d2.name + ' with ' + attack + ' damage!');