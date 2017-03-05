'use strict';

var _dragon = require('./dragon');

var _music = require('./music');

console.reset = function () {
  return process.stdout.write('\x1Bc');
};
console.reset();

var introSong = (0, _music.playIntro)();

console.log('Ready to adventure?');

setTimeout(function () {
  (0, _music.stopSong)(introSong);

  (0, _music.playDesert)();

  var d1 = (0, _dragon.makeLargeDragon)('bob');
  var d2 = (0, _dragon.makeLargeDragon)('alice');

  console.log('You see a ' + d1.size + ' dragon named ' + d1.name + ', with ' + d1.hp + ' health');

  var attack = d1.attack(200);

  console.log(d1.name + ' attacks ' + d2.name + ' with ' + attack + ' damage!');
}, 5000);