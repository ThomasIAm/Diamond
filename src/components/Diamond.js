import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useHistory } from "react-router-dom";

const DiamondMesh = ({ onClick }) => {
  const meshRef = useRef();

  // Animation for hovering and back-and-forth rotation
  useFrame((state) => {
    if (meshRef.current) {
      const elapsedTime = state.clock.getElapsedTime();
      meshRef.current.rotation.y = Math.sin(elapsedTime) * (Math.PI / 12); // Rotate back and forth by 15 degrees
      meshRef.current.position.y = Math.sin(elapsedTime) * 0.1; // Hover
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow onClick={onClick}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="white" metalness={0.5} roughness={0.1} />
    </mesh>
  );
};

const Diamond = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/details");
  };

  return (
    <div
      style={{
        cursor: "pointer",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas shadows>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <spotLight
          position={[-10, -10, -10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <DiamondMesh onClick={handleClick} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default Diamond;
