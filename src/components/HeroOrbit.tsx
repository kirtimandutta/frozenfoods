"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Image } from "@react-three/drei";
import gsap from "gsap";
import {
  Suspense,
  useLayoutEffect,
  useMemo,
  useRef,
  type RefObject,
} from "react";
import { Vector3, type Group, type Object3D } from "three";

const HERO_PRODUCTS = [
  { src: "/hero/sausages.png", alt: "Frozen sausages" },
  { src: "/hero/whole-chicken.png", alt: "Whole frozen chicken" },
  { src: "/hero/paneer.png", alt: "Paneer cubes" },
  { src: "/hero/chicken-legs.png", alt: "Chicken drumsticks" },
  { src: "/hero/frozen-peas.png", alt: "Frozen peas" },
] as const;

/** Wider circular radius — same pattern as before, just stretched */
const ORBIT_RADIUS = 3.35;
const ITEM_SIZE = 1.95;

type HeroOrbitProps = {
  anchorRef?: RefObject<HTMLElement | null>;
};

const _world = new Vector3();

function OrbitRing() {
  const ringRef = useRef<Group>(null);

  const slots = useMemo(() => {
    const n = HERO_PRODUCTS.length;
    return HERO_PRODUCTS.map((product, i) => {
      const a = (i / n) * Math.PI * 2;
      return {
        ...product,
        position: [
          Math.sin(a) * ORBIT_RADIUS,
          0,
          Math.cos(a) * ORBIT_RADIUS,
        ] as [number, number, number],
      };
    });
  }, []);

  useLayoutEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const tween = gsap.to(ring.rotation, {
      y: Math.PI * 2,
      duration: 28,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  useFrame(({ camera }) => {
    const ring = ringRef.current;
    if (!ring) return;

    ring.children.forEach((child: Object3D) => {
      child.getWorldPosition(_world);
      const dist = camera.position.distanceTo(_world);
      const near = camera.position.length() - ORBIT_RADIUS;
      const far = camera.position.length() + ORBIT_RADIUS;
      const t = Math.min(Math.max((far - dist) / (far - near), 0), 1);
      const opacity = 0.35 + t * 0.65;

      child.traverse((obj) => {
        const mesh = obj as {
          material?: { opacity?: number; transparent?: boolean };
        };
        if (mesh.material && "opacity" in mesh.material) {
          mesh.material.transparent = true;
          mesh.material.opacity = opacity;
        }
      });
    });
  });

  // No <Center> — it was shifting the pivot because product bounds differ.
  // Positions are already symmetric around the origin.
  return (
    <group ref={ringRef}>
      {slots.map((slot) => (
        <Billboard key={slot.src} position={slot.position} follow>
          <Image
            url={slot.src}
            scale={[ITEM_SIZE, ITEM_SIZE]}
            transparent
            toneMapped={false}
          />
        </Billboard>
      ))}
    </group>
  );
}

export function HeroOrbit(_props: HeroOrbitProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[15] overflow-hidden"
      aria-hidden
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.6], fov: 42, near: 0.1, far: 40 }}
        gl={{ alpha: true, antialias: true, premultipliedAlpha: false }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <ambientLight intensity={1.15} />
        <Suspense fallback={null}>
          <OrbitRing />
        </Suspense>
      </Canvas>
    </div>
  );
}
