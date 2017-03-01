
import { makeLargeDragon } from './dragon'

console.reset = function () {
  return process.stdout.write('\x1Bc')
}
console.reset()
console.log('Ready to adventure?')

const d1 = makeLargeDragon('bob')
const d2 = makeLargeDragon('alice')

console.log(`You see a ${d1.size} dragon named ${d1.name}, with ${d1.hp} health`)

const attack = d1.attack(200)

console.log(`${d1.name} attacks ${d2.name} with ${attack} damage!`)
