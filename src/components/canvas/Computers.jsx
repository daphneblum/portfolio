import { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';

import CanvasLoader from '../Loader';
import { RollerCoasterShadowGeometry } from 'three/examples/jsm/Addons.js';

RectAreaLightUniformsLib.init();

const Computers = ({ isMobile }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');
  const screenRef = useRef();

  useEffect(() => {
    if (!computer.scene) return;

    computer.scene.traverse((child) => {
      if (child.isMesh) {
        // 1. Target the Table
        if (child.name.includes("Cube_Material_0")) {
          child.material = child.material.clone();
          child.material.color.set('#0a0514'); 
          child.material.roughness = 0.2;       
          child.material.metalness = 0.8;       
          console.log("💎 Table set to Dark Polished Stone!");
          child.material.toneMapped = false;
        }

        // 2. Target the Screen (Note: This is now a separate IF, not nested!)
        if (child.name.includes("MY_SCREEN")) {
          child.material = child.material.clone();
          child.material.emissive = new THREE.Color('#915eff');
          child.material.toneMapped = false;
          if (child.material.map) child.material.emissiveMap = child.material.map;
          screenRef.current = child.material;
        }
      } // End of if(child.isMesh)
    }); // End of traverse
  }, [computer.scene]);

  useFrame((state) => {
    if (screenRef.current) {
      const time = state.clock.elapsedTime;
      const wave = Math.sin(time * 2) * 2;
      const flicker = Math.random() * 0.1; 
      screenRef.current.emissiveIntensity = 10 + wave + flicker;
    }
  });

  return (
    <>
      {/* Lights inside the component */}
      {/* <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight position={[-15, 10, -5]} intensity={1.5} color="#ff66b2" />
      <pointLight position={[15, 8, -5]} intensity={1.0} color="#00ffff" /> */}
      
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.75 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        onClick={(e) => {
          e.stopPropagation();
          console.log("🎯 You clicked:", e.object.name);
        }}
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])
  return (
    <Canvas
    frameloop="always"  
    dpr={isMobile ? 1 : [1,2]}
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ toneMappingExposure: 1, powerPreference: "high-performance" }}
    >
      <Suspense fallback={<CanvasLoader />}>
      <ambientLight intensity={0.1} />
     {/* Pink Neon Panel (Left) */}
        <rectAreaLight
          width={10}
          height={10}
          intensity={15} // RectAreaLight intensity works differently (lower numbers = strong)
          color="#e88ac2"
          position={[-15, 5, 5]}
          lookAt={[0, 0, 0]} // Points the light at the center of the desk
        />

        {/* Cyan Neon Panel (Right) */}
        <rectAreaLight
          width={10}
          height={10}
          intensity={40}
          color="#7fd4ff"
          position={[15, 5, 5]}
          lookAt={[0, 0, 0]}
        />
        <OrbitControls 
          autoRotate={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            intensity={1.5}
            mipmapBlur
          />
        </EffectComposer>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}


export default ComputersCanvas;