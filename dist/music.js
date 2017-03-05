'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopSong = exports.playDesert = exports.playIntro = undefined;

var _path = require('path');

var _child_process = require('child_process');

var stopSong = function stopSong(cp) {
  return cp.kill();
};

var playIntro = function playIntro() {
  return (0, _child_process.spawn)((0, _path.resolve)('./cmdmp3.exe'), ['music/song.mp3']);
};
var playDesert = function playDesert() {
  return (0, _child_process.spawn)((0, _path.resolve)('./cmdmp3.exe'), ['music/desertdragon.mp3']);
};
exports.playIntro = playIntro;
exports.playDesert = playDesert;
exports.stopSong = stopSong;