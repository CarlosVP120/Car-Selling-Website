import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Environment } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("m4.glb");
  // Rotate model 45 degrees on x and y axis
  return (
    <primitive object={gltf.scene} position={[1, -5, 0]} scale={[2, 2, 2]} />
  );
}

function Camera() {
  const ref = useRef();

  useFrame(({ camera }) => {
    camera.position.x = Math.sin(Date.now() * 0.00005) * 100;
    camera.position.z = Math.cos(Date.now() * 0.00005) * 100;
    camera.lookAt(0, 0, 0);
  });

  return <perspectiveCamera ref={ref} />;
}

function App() {
  return (
    <Canvas
      style={{ width: "100vw", height: "55vh" }}
      camera={{ position: [60, 13, 100], fov: 10 }}
      // Change the fov (field of view) parameter to zoom in or out
      fov={900}
    >
      <color attach="background" args={["#ffffff"]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <Environment preset="sunset" />
      <Camera />
    </Canvas>
  );
}

export default App;
