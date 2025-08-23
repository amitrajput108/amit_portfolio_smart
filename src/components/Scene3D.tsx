import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, shape = 'sphere', color = '#3B82F6' }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  const ShapeComponent = shape === 'box' ? Box : shape === 'octahedron' ? Octahedron : Sphere;

  return (
    <ShapeComponent ref={meshRef} position={position} scale={0.5}>
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.8}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </ShapeComponent>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        
        <FloatingShape position={[-3, 2, -2]} shape="box" color="#3B82F6" />
        <FloatingShape position={[3, -1, -1]} shape="octahedron" color="#8B5CF6" />
        <FloatingShape position={[-2, -2, -3]} shape="sphere" color="#06B6D4" />
        <FloatingShape position={[2, 3, -4]} shape="box" color="#F59E0B" />
        <FloatingShape position={[0, -3, -2]} shape="octahedron" color="#EF4444" />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          rotateSpeed={0.3}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;