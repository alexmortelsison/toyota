"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

export default function ModelViewerPage() {
  const { scene } = useGLTF("/scene.gltf");

  return (
    <Canvas
      style={{ width: "100%", height: "300px" }}
      camera={{ position: [2, 1.2, 5], fov: 30 }}
    >
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        target={[0, 1.2, 0]}
      />
      <Suspense fallback={null}>
        <primitive object={scene} scale={1} position={[0, 0.4, 0]} />
      </Suspense>
    </Canvas>
  );
}
