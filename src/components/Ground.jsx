import { usePlane } from '@react-three/cannon'
import { useStore } from '../hooks/useStore'
import { grassTexture } from '../images/textures'

export function Ground () {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0]
  }))

  const [addCube] = useStore(state => [state.addCube])

  grassTexture.repeat.set(100, 100)

  const handleClickGround = (event) => {
    event.stopPropagation()
    const [x, y, z] = Object.values(event.point)
      .map((coord) => Math.ceil(coord))
    addCube(x, y, z)
  }

  return (
    <mesh
      onClick={handleClickGround}
      ref={ref}
    >
      <planeGeometry attach='geometry' args={[100, 100]} />
      <meshStandardMaterial attach='material' map={grassTexture} />
    </mesh>
  )
}
