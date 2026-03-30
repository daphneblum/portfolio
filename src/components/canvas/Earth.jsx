import { Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';



import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('/planet/scene.gltf');

  return(
    <primitive
      object={earth.scene}
      scale={.8}
      position-y={0}
      rotation-y={0}
      />
  )
}

const EarthCanvas = () => {
  
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{  
        fov: 60,
        near: 0.1,
        far: 200,
        position: [-4, 8, 6]
       }}
      >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          target={[0, 1, 0]} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      </Canvas>
  )
}

export default EarthCanvas;