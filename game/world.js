import rbush from 'rbush'
import { noise } from './noise'
import { range } from 'lodash'

const grid = () => new rbush()

const createWorld = seed => worldSize => {
  noise.seed( seed || Math.random())


  for (var x = 0; x < worldSize; x++) {
    for (var y = 0; y < worldSize; y++) {

      var value = noise.simplex3(x / 100, y / 100, 16);

      image[x][y].r = Math.abs(value) * 256; // Or whatever. Open demo.html to see it used with canvas.
    }
  }
}

export {
  createWorld
}
