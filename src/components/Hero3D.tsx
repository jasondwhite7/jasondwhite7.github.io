import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Wireframe } from '@react-three/drei'
import * as THREE from 'three'

function SatelliteGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.15
    meshRef.current.rotation.x += delta * 0.1
    // Subtle hover effect
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
  })

  return (
    <mesh ref={meshRef}>
      {/* Abstract orbital sphere representing aerospace/satellite geometry */}
      <icosahedronGeometry args={[2, 2]} />
      <meshBasicMaterial color="#7eb8f7" wireframe transparent opacity={0.15} />
      
      {/* Inner solid core */}
      <Sphere args={[1.2, 16, 16]}>
        <meshStandardMaterial 
          color="#0a192f" 
          emissive="#0a192f"
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* Orbit rings */}
      <group rotation={[Math.PI / 3, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.8, 0.02, 8, 48]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.4} />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[2.8, 0.02, 8, 48]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.4} />
        </mesh>
      </group>
    </mesh>
  )
}

export function Hero3D() {
  return (
    <div style={{ position: 'absolute', top: '5%', right: '0%', width: '45%', height: '80%', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#7eb8f7" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#a78bfa" />
        
        <group position={[1.5, 1, 0]}>
          <SatelliteGeometry />
        </group>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.2}
        />
      </Canvas>
    </div>
  )
}
