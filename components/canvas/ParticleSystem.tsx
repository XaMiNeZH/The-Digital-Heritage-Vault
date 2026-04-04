"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 400;

function LostWords() {
  const geometryRef = useRef<THREE.BufferGeometry>(null);
  const positions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);
  const colors = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);
  const velocities = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, () => ({
        x: (Math.random() - 0.5) * 0.006,
        y: 0.005 + Math.random() * 0.007,
        z: (Math.random() - 0.5) * 0.002
      })),
    []
  );

  useMemo(() => {
    for (let index = 0; index < PARTICLE_COUNT; index += 1) {
      const stride = index * 3;
      positions[stride] = (Math.random() - 0.5) * 10;
      positions[stride + 1] = (Math.random() - 0.5) * 10;
      positions[stride + 2] = (Math.random() - 0.5) * 2;

      const color = new THREE.Color(index % 3 === 0 ? "#e8d4b0" : "#c8860a");
      colors[stride] = color.r;
      colors[stride + 1] = color.g;
      colors[stride + 2] = color.b;
    }
  }, [colors, positions]);

  useFrame(() => {
    const geometry = geometryRef.current;
    if (!geometry) {
      return;
    }

    const attribute = geometry.attributes.position as THREE.BufferAttribute;

    for (let index = 0; index < PARTICLE_COUNT; index += 1) {
      const stride = index * 3;
      positions[stride] += velocities[index].x;
      positions[stride + 1] += velocities[index].y;
      positions[stride + 2] += velocities[index].z;

      if (positions[stride + 1] > 6) {
        positions[stride] = (Math.random() - 0.5) * 10;
        positions[stride + 1] = -5.8 - Math.random();
        positions[stride + 2] = (Math.random() - 0.5) * 2;
      }
    }

    attribute.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          args={[positions, 3]}
          attach="attributes-position"
          count={positions.length / 3}
        />
        <bufferAttribute args={[colors, 3]} attach="attributes-color" count={colors.length / 3} />
      </bufferGeometry>
      <pointsMaterial
        depthWrite={false}
        opacity={0.72}
        size={0.05}
        sizeAttenuation
        transparent
        vertexColors
      />
    </points>
  );
}

export function ParticleSystem() {
  return (
    <Canvas camera={{ fov: 75, position: [0, 0, 5] }} dpr={[1, 1.75]}>
      <LostWords />
    </Canvas>
  );
}
