"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Billboard } from "@react-three/drei";
import gsap from "gsap";
import {
  Suspense,
  useLayoutEffect,
  useMemo,
  useRef,
  type RefObject,
} from "react";
import {
  LinearFilter,
  LinearMipmapLinearFilter,
  SRGBColorSpace,
  TextureLoader,
  Vector3,
  type Group,
  type Object3D,
  type Texture,
} from "three";

const HERO_PRODUCTS = [
  { src: "/hero/mixed-vegetables.png", alt: "Premium mixed vegetables" },
  { src: "/hero/salmon-fillet.png", alt: "Wild-caught Atlantic salmon fillet" },
  { src: "/hero/pepperoni-pizza.png", alt: "Classic pepperoni pizza" },
  { src: "/hero/chicken-tikka-masala.png", alt: "Authentic chicken tikka masala" },
] as const;

/** Wider circular radius — same pattern as before, just stretched */
const ORBIT_RADIUS = 3.35;
const ITEM_SIZE = 1.95;

type HeroOrbitProps = {
  anchorRef?: RefObject<HTMLElement | null>;
};

const _world = new Vector3();

function prepareTexture(texture: Texture) {
  texture.colorSpace = SRGBColorSpace;
  texture.minFilter = LinearMipmapLinearFilter;
  texture.magFilter = LinearFilter;
  texture.anisotropy = 8;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return texture;
}

function ProductBillboard({
  url,
  position,
}: {
  url: string;
  position: [number, number, number];
}) {
  const texture = useLoader(TextureLoader, url);
  prepareTexture(texture);

  const aspect =
    texture.image && texture.image.width && texture.image.height
      ? texture.image.width / texture.image.height
      : 1;

  const scale: [number, number, number] =
    aspect >= 1
      ? [ITEM_SIZE, ITEM_SIZE / aspect, 1]
      : [ITEM_SIZE * aspect, ITEM_SIZE, 1];

  return (
    <Billboard position={position} follow>
      <mesh scale={scale}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          map={texture}
          transparent
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>
    </Billboard>
  );
}

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

  useFrame(({ camera, gl }) => {
    const ring = ringRef.current;
    if (!ring) return;

    const maxAnisotropy = gl.capabilities.getMaxAnisotropy();

    ring.children.forEach((child: Object3D) => {
      child.getWorldPosition(_world);
      const dist = camera.position.distanceTo(_world);
      const near = camera.position.length() - ORBIT_RADIUS;
      const far = camera.position.length() + ORBIT_RADIUS;
      const t = Math.min(Math.max((far - dist) / (far - near), 0), 1);
      const opacity = 0.35 + t * 0.65;

      child.traverse((obj) => {
        const mesh = obj as {
          material?: {
            opacity?: number;
            transparent?: boolean;
            map?: Texture;
          };
        };
        if (mesh.material && "opacity" in mesh.material) {
          mesh.material.transparent = true;
          mesh.material.opacity = opacity;
          if (mesh.material.map && mesh.material.map.anisotropy < maxAnisotropy) {
            mesh.material.map.anisotropy = Math.min(8, maxAnisotropy);
            mesh.material.map.needsUpdate = true;
          }
        }
      });
    });
  });

  return (
    <group ref={ringRef}>
      {slots.map((slot) => (
        <ProductBillboard
          key={slot.src}
          url={slot.src}
          position={slot.position}
        />
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
        dpr={[1, 2]}
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
