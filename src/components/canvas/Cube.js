import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Cube = () => {
  return (
    <Canvas 
        camera={{
            fov: 40,
        }}
    >
        <OrbitControls 
            autoRotate
            enableZoom={false}
        />
        <ambientLight intensity={1} />
        {/* <directionalLight position={[10, 0, 10]} intensity={20} /> */}
        {/* <pointLight position={[0, 1, 0]} intensity={0.5}/> */}
        <mesh>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
    </Canvas>
  )
}

export default Cube;
