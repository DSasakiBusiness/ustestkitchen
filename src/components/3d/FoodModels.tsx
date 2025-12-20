'use client';

import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// --- Materials ---
const riceMaterial = new THREE.MeshStandardMaterial({ color: '#FDFEFE', roughness: 0.8 }); // White textured rice
const tunaMaterial = new THREE.MeshStandardMaterial({ color: '#D32F2F', roughness: 0.1, metalness: 0.1 }); // Glossy Deep Red
const salmonMaterial = new THREE.MeshStandardMaterial({ color: '#FF7043', roughness: 0.1, metalness: 0.1 }); // Glossy Orange

export function SushiMaguro3D({ position, rotation, scale }: { position?: any, rotation?: any, scale?: any }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Rice */}
      <RoundedBox args={[0.8, 0.6, 1.4]} radius={0.15} smoothness={4} position={[0, 0, 0]} material={riceMaterial} />
      
      {/* Tuna Body - High Resolution Segmentation for Smoothness */}
      <group position={[0, 0.35, 0]}>
         {/* Center */}
         <RoundedBox args={[0.85, 0.25, 0.4]} radius={0.06} smoothness={8} position={[0, 0, 0]} material={tunaMaterial} />
         
         {/* Front Curve (Smoother steps) */}
         <group position={[0, -0.01, 0.25]} rotation={[0.15, 0, 0]}>
             <RoundedBox args={[0.85, 0.25, 0.3]} radius={0.06} smoothness={8} material={tunaMaterial} />
             <group position={[0, -0.01, 0.2]} rotation={[0.15, 0, 0]}>
                <RoundedBox args={[0.85, 0.25, 0.3]} radius={0.06} smoothness={8} material={tunaMaterial} />
                 <group position={[0, -0.01, 0.2]} rotation={[0.2, 0, 0]}>
                    <RoundedBox args={[0.85, 0.25, 0.3]} radius={0.06} smoothness={8} material={tunaMaterial} />
                 </group>
             </group>
         </group>
         
         {/* Back Curve (Smoother steps) */}
         <group position={[0, -0.01, -0.25]} rotation={[-0.15, 0, 0]}>
             <RoundedBox args={[0.85, 0.25, 0.3]} radius={0.06} smoothness={8} material={tunaMaterial} />
             <group position={[0, -0.01, -0.2]} rotation={[-0.15, 0, 0]}>
                <RoundedBox args={[0.85, 0.25, 0.3]} radius={0.06} smoothness={8} material={tunaMaterial} />
                 <group position={[0, -0.01, -0.2]} rotation={[-0.2, 0, 0]}>
                    <RoundedBox args={[0.85, 0.25, 0.3]} radius={0.06} smoothness={8} material={tunaMaterial} />
                 </group>
             </group>
         </group>
      </group>
    </group>
  );
}

export function SushiSalmon3D({ position, rotation, scale }: { position?: any, rotation?: any, scale?: any }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Rice */}
      <RoundedBox args={[0.8, 0.6, 1.4]} radius={0.15} smoothness={4} position={[0, 0, 0]} material={riceMaterial} />
      
      {/* Salmon Body - High Resolution Segmentation */}
       <group position={[0, 0.35, 0]}>
         {/* Center */}
         <RoundedBox args={[0.85, 0.25, 0.4]} radius={0.06} smoothness={8} position={[0, 0, 0]} material={salmonMaterial} />
         
         {/* Front Curve */}
         <group position={[0, -0.01, 0.25]} rotation={[0.15, 0, 0]}>
             <RoundedBox args={[0.85, 0.25, 0.3]} radius={0.06} smoothness={8} material={salmonMaterial} />
             <group position={[0, -0.01, 0.2]} rotation={[0.15, 0, 0]}>
                <RoundedBox args={[0.85, 0.25, 0.3]} radius={0.06} smoothness={8} material={salmonMaterial} />
                 <group position={[0, -0.01, 0.2]} rotation={[0.2, 0, 0]}>
                    <RoundedBox args={[0.85, 0.25, 0.3]} radius={0.06} smoothness={8} material={salmonMaterial} />
                 </group>
             </group>
         </group>
         
         {/* Back Curve */}
         <group position={[0, -0.01, -0.25]} rotation={[-0.15, 0, 0]}>
             <RoundedBox args={[0.85, 0.25, 0.3]} radius={0.06} smoothness={8} material={salmonMaterial} />
             <group position={[0, -0.01, -0.2]} rotation={[-0.15, 0, 0]}>
                <RoundedBox args={[0.85, 0.25, 0.3]} radius={0.06} smoothness={8} material={salmonMaterial} />
                 <group position={[0, -0.01, -0.2]} rotation={[-0.2, 0, 0]}>
                    <RoundedBox args={[0.85, 0.25, 0.3]} radius={0.06} smoothness={8} material={salmonMaterial} />
                 </group>
             </group>
         </group>
      </group>
    </group>
  );
}

// --- Hamburger Materials ---
const bunMaterial = new THREE.MeshStandardMaterial({ color: '#F39C12', roughness: 0.6 }); // Golden Bun
const meatMaterial = new THREE.MeshStandardMaterial({ color: '#5D4037', roughness: 0.9 }); // Dark Brown Meat
const tomatoMaterial = new THREE.MeshStandardMaterial({ color: '#E74C3C', roughness: 0.3 }); // Fresh Red
const lettuceMaterial = new THREE.MeshStandardMaterial({ color: '#2ECC71', roughness: 0.8 }); // Green
const sesameMaterial = new THREE.MeshStandardMaterial({ color: '#FFE082', roughness: 0.8 }); // Sesame Seeds

const cheeseMaterial = new THREE.MeshStandardMaterial({ color: '#F4D03F', roughness: 0.4 }); // Melted Cheese

export function Hamburger3D({ position, rotation, scale }: { position?: any, rotation?: any, scale?: any }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      
      {/* Bottom Bun (Top surface at -0.325) */}
      <mesh position={[0, -0.45, 0]} material={bunMaterial}>
        <cylinderGeometry args={[0.95, 0.85, 0.25, 32]} />
      </mesh>

      {/* Meat Patty (Bottom at -0.33, Top at -0.03) */}
      <mesh position={[0, -0.18, 0]} material={meatMaterial}>
        <cylinderGeometry args={[1.0, 1.0, 0.3, 32]} />
      </mesh>

      {/* Cheese (NEW: On top of meat. Top at ~0.02) - Overflowing/Larger & Rotated for Corners */}
      <mesh position={[0, -0.01, 0]} rotation={[0, Math.PI / 4, 0]} material={cheeseMaterial}>
        <boxGeometry args={[1.7, 0.08, 1.7]} />
      </mesh>

      {/* Lettuce (On top of cheese: ~0.03) */}
      <group position={[0, 0.06, 0]}>
         <mesh material={lettuceMaterial}>
             <cylinderGeometry args={[1.05, 1.0, 0.08, 12]} />
         </mesh>
         <mesh position={[0, -0.03, 0]} rotation={[0, 0.5, 0]} material={lettuceMaterial}>
             <cylinderGeometry args={[1.08, 1.03, 0.08, 10]} />
         </mesh>
      </group>

      {/* Tomato (On top of lettuce: ~0.15) */}
      <mesh position={[0, 0.20, 0]} material={tomatoMaterial}>
        <cylinderGeometry args={[0.9, 0.9, 0.2, 32]} />
      </mesh>
      {/* Tomato Detail */}
       <mesh position={[0, 0.31, 0]} rotation={[-Math.PI/2, 0, 0]}>
           <circleGeometry args={[0.8, 6]} />
           <meshBasicMaterial color="#FF7043" />
       </mesh>

      {/* Top Bun (Hemisphere. Bottom at y. Needs to touch tomato top ~0.30) */}
      <mesh position={[0, 0.30, 0]} scale={[1, 0.6, 1]} material={bunMaterial}>
        <sphereGeometry args={[1.0, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </mesh>

      {/* Sesame Seeds (Sprinkled - On top of bun ~0.9) */}
        <group position={[0, 0.45, 0]}>
             {/* Randomly scattered seeds */}
             <mesh position={[0.2, 0.05, 0.2]} rotation={[0.5, 0.2, 0]} material={sesameMaterial}>
                  <capsuleGeometry args={[0.015, 0.04, 4, 8]} />
             </mesh>
             <mesh position={[-0.2, 0.04, 0.3]} rotation={[0.2, 0.2, 0.5]} material={sesameMaterial}>
                  <capsuleGeometry args={[0.015, 0.04, 4, 8]} />
             </mesh>
             <mesh position={[0.1, 0.08, -0.1]} rotation={[0.8, 0.1, 0]} material={sesameMaterial}>
                  <capsuleGeometry args={[0.015, 0.04, 4, 8]} />
             </mesh>
             <mesh position={[-0.3, 0.03, -0.2]} rotation={[0.3, 0.4, 0.4]} material={sesameMaterial}>
                  <capsuleGeometry args={[0.015, 0.04, 4, 8]} />
             </mesh>
             <mesh position={[0.4, 0.02, -0.2]} rotation={[0.6, -0.2, 0]} material={sesameMaterial}>
                  <capsuleGeometry args={[0.015, 0.04, 4, 8]} />
             </mesh>
             <mesh position={[0.0, 0.09, 0.05]} rotation={[0.1, 0.1, 0.4]} material={sesameMaterial}>
                  <capsuleGeometry args={[0.015, 0.04, 4, 8]} />
             </mesh>
             <mesh position={[-0.1, 0.07, 0.25]} rotation={[0.4, 0.5, 0]} material={sesameMaterial}>
                  <capsuleGeometry args={[0.015, 0.04, 4, 8]} />
             </mesh>
             <mesh position={[0.3, 0.04, 0.1]} rotation={[0.2, 0, 0.1]} material={sesameMaterial}>
                  <capsuleGeometry args={[0.015, 0.04, 4, 8]} />
             </mesh>
              <mesh position={[-0.25, 0.03, -0.05]} rotation={[0.5, 0.2, 0.3]} material={sesameMaterial}>
                  <capsuleGeometry args={[0.015, 0.04, 4, 8]} />
             </mesh>
              <mesh position={[0.15, 0.06, -0.25]} rotation={[0.7, 0.1, -0.2]} material={sesameMaterial}>
                  <capsuleGeometry args={[0.015, 0.04, 4, 8]} />
             </mesh>
              <mesh position={[0.35, 0.01, 0.3]} rotation={[0.2, 0.4, 0]} material={sesameMaterial}>
                  <capsuleGeometry args={[0.015, 0.04, 4, 8]} />
             </mesh>
               <mesh position={[-0.15, 0.08, -0.15]} rotation={[0.3, 0, 0.5]} material={sesameMaterial}>
                  <capsuleGeometry args={[0.015, 0.04, 4, 8]} />
             </mesh>
        </group>
    </group>
  );
}
