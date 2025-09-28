"use client";

import { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { easing } from "maath";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as THREE from "three";

export default function ThreeCarousel() {
  const [rotationIndex, setRotationIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const total = 8; // number of cards

  // Track window size
  useEffect(() => {
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Rotate carousel
  const rotate = (dir: number) => setRotationIndex((prev) => prev + dir);

  // Responsive values based on screen width
  const { width } = dimensions;
  const cameraZ = width < 768 ? 15 : width < 1280 ? 12 : 10;
  const fov = width < 768 ? 70 : width < 1280 ? 60 : 50;
  const cardSize = width < 768 ? 2 : width < 1280 ? 2.5 : 3;
  const radius = width < 768 ? 4 : width < 1280 ? 4.5 : 5;

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* 3D Scene */}
      <Canvas camera={{ position: [0, 0, cameraZ], fov }} className="w-full h-full">
        <Rig rotationIndex={rotationIndex}>
          <Carousel count={total} radius={radius} size={cardSize} />
        </Rig>
      </Canvas>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-8">
        <button
          onClick={() => rotate(-1)}
          className="p-3 sm:p-4 bg-green-600/30 backdrop-blur-md rounded-full border border-green-400/40 shadow-lg hover:bg-green-500/40 transition"
        >
          <ChevronLeft className="text-white w-6 sm:w-8 h-6 sm:h-8" />
        </button>
        <button
          onClick={() => rotate(1)}
          className="p-3 sm:p-4 bg-green-600/30 backdrop-blur-md rounded-full border border-green-400/40 shadow-lg hover:bg-green-500/40 transition"
        >
          <ChevronRight className="text-white w-6 sm:w-8 h-6 sm:h-8" />
        </button>
      </div>
    </div>
  );
}

// Rotate the carousel smoothly
function Rig({ children, rotationIndex }: { children: React.ReactNode; rotationIndex: number }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      easing.damp(ref.current.rotation, "y", rotationIndex * ((Math.PI * 2) / 8), 0.25, delta);
    }
  });

  return <group ref={ref}>{children}</group>;
}

// Carousel cards
function Carousel({ count = 8, radius = 5, size = 3 }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2;
        return (
          <Card
            key={i}
            position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
            rotation={[0, angle + Math.PI, 0]}
            text={`Card ${i + 1}`}
            size={size}
          />
        );
      })}
    </>
  );
}

// Individual card
function Card({
  position,
  rotation,
  text,
  size = 2.2,
}: {
  position: [number, number, number];  // 3D vector
  rotation: [number, number, number];  // 3D rotation
  text: string;
  size?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (ref.current) {
      easing.damp3(ref.current.scale, hovered ? [1.15, 1.15, 1] : [1, 1, 1], 0.15, delta);
    }
  });

  return (
    <mesh
      ref={ref}
      position={position}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Green card */}
      <planeGeometry args={[size, size]} />
      <meshStandardMaterial color={hovered ? "#22c55e" : "#16a34a"} roughness={0.3} metalness={0.2} />

      {/* Overlay text */}
      <Html distanceFactor={10} transform>
        <div className="px-4 sm:px-6 py-2 sm:py-4 rounded-lg bg-green-500/80 text-white font-semibold text-sm sm:text-lg shadow-lg text-center">
          {text}
        </div>
      </Html>
    </mesh>
  );
}
