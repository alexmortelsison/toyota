"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function SupraModel() {
  const { scene } = useGLTF("/supra.glb");
  return <primitive object={scene} scale={1} />;
}

export default function ModelViewer() {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "800px",
      }}
      camera={{ position: [0, 0, 3] }}
    >
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />
      <Suspense fallback={null}>
        <SupraModel />
      </Suspense>
    </Canvas>
  );
}
