import {
  grassImg,
  dirtImg,
  glassImg,
  woodImg,
  logImg
} from './images.js'
import { TextureLoader, RepeatWrapping, NearestFilter } from 'three'

const grassTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const woodTexture = new TextureLoader().load(woodImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)

grassTexture.wrapS = RepeatWrapping
grassTexture.wrapT = RepeatWrapping

grassTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter

export {
  grassTexture,
  dirtTexture,
  woodTexture,
  logTexture,
  glassTexture
}
