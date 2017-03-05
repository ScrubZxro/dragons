import { resolve } from 'path'
import { spawn } from 'child_process'

const stopSong = cp => cp.kill()

const playIntro = () => spawn(resolve('./cmdmp3.exe'), ['music/song.mp3'])
const playDesert = () => spawn(resolve('./cmdmp3.exe'), ['music/desertdragon.mp3'])
export {
  playIntro,
  playDesert,
  stopSong
}
