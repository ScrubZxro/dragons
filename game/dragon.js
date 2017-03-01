import { set, flow, snakeCase } from 'lodash'
import { creature } from './creature'

const newDragon = size => name => dragon(size, name)
const dragon = (size, name) => setName(creature(size))(name)
const setName = creature => name => set(creature, 'name', snakeCase(name))
const makeLargeDragon = newDragon('large')

export  {
  newDragon,
  makeLargeDragon
}
