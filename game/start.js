
import { makeLargeDragon } from './dragon'
import { playIntro, playDesert, stopSong } from './music'

console.reset = function () {
  return process.stdout.write('\x1Bc')
}
console.reset()

const introSong = playIntro()


console.log('Ready to adventure?')

setTimeout(()=>{
  stopSong(introSong)

  playDesert()

  const d1 = makeLargeDragon('bob')
  const d2 = makeLargeDragon('alice')

  console.log(`You see a ${d1.size} dragon named ${d1.name}, with ${d1.hp} health`)

  const attack = d1.attack(200)

  console.log(`${d1.name} attacks ${d2.name} with ${attack} damage!`)

},5000)
