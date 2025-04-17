"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Object3D } from "three";

type GLTFWithScene = GLTF & {
  scene: Object3D;
};

function CrownModel() {
  const gltf = useGLTF("/crown.glb") as GLTFWithScene;
  return <primitive object={gltf.scene} scale={1} position={[0, 0.4, 0]} />;
}

export default function ModelViewerPageSupra() {
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
        <CrownModel />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/crown.glb");
