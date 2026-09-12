"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
  useGLTF,
  Center,
} from "@react-three/drei";

const CAR_MODEL_URL = "https://threejs.org/examples/models/gltf/ferrari.glb";

function DetailedCar() {
  const group = useRef(null);
  const { scene } = useGLTF(CAR_MODEL_URL);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.35;
  });

  scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = true;
      obj.receiveShadow = true;
    }
  });

  return (
    <group ref={group}>
      <Center>
        <primitive object={scene} scale={0.9} />
      </Center>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 2]} intensity={1.4} castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.5} />
      <Float speed={1.2} rotationIntensity={0} floatIntensity={0.4}>
        <DetailedCar />
      </Float>
      <ContactShadows position={[0, -0.9, 0]} opacity={0.55} scale={8} blur={2.5} far={2} />
      <Environment preset="studio" />
    </>
  );
}

useGLTF.preload(CAR_MODEL_URL);

export default function CarShowcaseSection() {
  return (
    <section className="bg-gray-600 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">
        <div>
          <h2 className="mb-5 text-3xl font-medium leading-tight text-white md:text-4xl">
            One garage, every diagnostic tool your car actually needs
          </h2>
          <p className="mb-8 max-w-md text-base leading-relaxed text-white/60">
            From engine faults to electrical gremlins, our bay is equipped
            with manufacturer-grade scanners and a team that's seen it
            before. No guessing, no upselling, just the fix your car needs.
          </p>
          <button className="rounded-full bg-[#c2551c] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#a8481a]">
            Get a free inspection
          </button>
        </div>

        <div className="h-72 w-full md:h-96">
          <Canvas shadows camera={{ position: [3, 1.6, 3.2], fov: 40 }}>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}