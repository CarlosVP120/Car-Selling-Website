import React, { useEffect, useRef, useState } from "react";
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
  const [scrollPos, setScrollPos] = useState(200);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset + 200;
      setScrollPos(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame(({ camera }) => {
    camera.position.x = Math.sin(scrollPos * 0.0025) * 100;
    camera.position.z = Math.cos(scrollPos * 0.0025) * 100;
    camera.lookAt(0, 0, 0);
  });

  return <perspectiveCamera ref={ref} />;
}

function App() {
  return (
    <Canvas
      style={{ width: "100vw", height: "55vh" }}
      camera={{ position: [60, 13, 73], fov: 10 }}
      fov={900}
      gl={{ alpha: true }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <Environment preset="sunset" />
      <Camera />
    </Canvas>
  );
}

export default App;
