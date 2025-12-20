'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { SushiMaguro3D, SushiSalmon3D, Hamburger3D } from './3d/FoodModels';

const components = [SushiMaguro3D, SushiSalmon3D, Hamburger3D];

function FloatingModel({ Model, position, rotation, scale, delay }: { Model: any, position: [number, number, number], rotation: [number, number, number], scale: number, delay: number }) {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
        // Slow rotation
        ref.current.rotation.x = rotation[0] + Math.sin(state.clock.elapsedTime * 0.1 + delay) * 0.1;
        ref.current.rotation.y += 0.005; // Constant spin
        ref.current.rotation.z = rotation[2] + Math.sin(state.clock.elapsedTime * 0.05 + delay) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.2, 0.2]}>
      <group ref={ref} position={position} scale={scale}>
         <Model />
      </group>
    </Float>
  );
}

function Scene() {
  // Generate random positions
  const items = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    Model: components[i % components.length],
    position: [
      (Math.random() - 0.5) * 25, // Wider spread
      (Math.random() - 0.5) * 15, 
      (Math.random() - 0.5) * 10 - 5 // Push back a bit
    ] as [number, number, number],
    rotation: [Math.random() * 0.5, Math.random() * Math.PI, 0] as [number, number, number],
    scale: 0.8 + Math.random() * 0.4,
    delay: Math.random() * 5
  })), []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -5, 5]} intensity={0.5} color="#D35400" /> {/* Warm accent light */}
      
      {items.map((item) => (
        <FloatingModel 
            key={item.id} 
            Model={item.Model} 
            position={item.position} 
            rotation={item.rotation}
            scale={item.scale}
            delay={item.delay}
        />
      ))}
    </>
  );
}

export default function FoodBackground3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Scene />
        <Environment preset="city" />
      </Canvas>
      {/* Overlay gradient for readability */}
      {/* Overlay gradient - lighter to let models show through on left */}\n      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
    </div>
  );
}
