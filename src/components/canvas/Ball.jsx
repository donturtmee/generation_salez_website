// BallCanvas.jsx
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import DebugNaN from "./DebugNaN";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const group = useRef(null);

  // Gentle left-right oscillation of the object
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    const amp = Math.PI / 16; // ~11.25° each side
    const speed = 0.9; // oscillation speed
    group.current.rotation.y = Math.sin(t * speed) * amp;
    group.current.rotation.x = Math.sin(t * speed * 0.6) * (Math.PI / 64);
  });

  return (
    <group ref={group}>
      <Float speed={0.8} rotationIntensity={0} floatIntensity={0.8}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.75}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]} // your original tilt
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </Float>
    </group>
  );
};

// OrbitControls that auto-returns to the initial angles after drag
function ControlsWithReturn() {
  const controls = useRef(null);
  const [home, setHome] = useState({ az: 0, pol: 0 });
  const [resetting, setResetting] = useState(false);

  // capture initial camera angles as "home"
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (!controls.current) return;
      setHome({
        az: controls.current.getAzimuthalAngle(),
        pol: controls.current.getPolarAngle(),
      });
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // smooth return to "home" after user releases the drag
  useFrame((_, delta) => {
    if (!resetting || !controls.current) return;
    const c = controls.current;
    const nextAz = THREE.MathUtils.damp(
      c.getAzimuthalAngle(),
      home.az,
      4,
      delta
    );
    const nextPol = THREE.MathUtils.damp(c.getPolarAngle(), home.pol, 4, delta);
    c.setAzimuthalAngle(nextAz);
    c.setPolarAngle(nextPol);
    c.update();
    if (
      Math.abs(nextAz - home.az) < 1e-3 &&
      Math.abs(nextPol - home.pol) < 1e-3
    ) {
      setResetting(false);
    }
  });

  return (
    <OrbitControls
      ref={controls}
      enableZoom={false}
      enablePan={false}
      onStart={() => setResetting(false)} // pause while dragging
      onEnd={() => setResetting(true)} // start smooth return
    />
  );
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always" // animate for oscillation & resetting
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-full"
    >
      <DebugNaN />
      <Suspense fallback={<CanvasLoader />}>
        <ControlsWithReturn />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
