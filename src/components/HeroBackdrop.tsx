"use client";

import type { CSSProperties } from "react";
import { assetPath } from "@/lib/assetPath";

type FloatingCube = {
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  rotate: number;
  opacity: number;
};

const FLOATING_CUBES: FloatingCube[] = [
  { left: "6%", top: "18%", size: 34, delay: 0, duration: 9, drift: 14, rotate: 18, opacity: 0.72 },
  { left: "14%", top: "52%", size: 22, delay: 1.2, duration: 11, drift: -10, rotate: -24, opacity: 0.58 },
  { left: "22%", top: "34%", size: 18, delay: 2.4, duration: 8, drift: 12, rotate: 32, opacity: 0.5 },
  { left: "78%", top: "24%", size: 30, delay: 0.6, duration: 10, drift: -16, rotate: -14, opacity: 0.68 },
  { left: "86%", top: "48%", size: 26, delay: 1.8, duration: 12, drift: 11, rotate: 22, opacity: 0.62 },
  { left: "72%", top: "62%", size: 20, delay: 3, duration: 9.5, drift: -8, rotate: -28, opacity: 0.48 },
  { left: "48%", top: "12%", size: 16, delay: 4, duration: 7.5, drift: 9, rotate: 12, opacity: 0.42 },
  { left: "58%", top: "70%", size: 24, delay: 2, duration: 10.5, drift: -13, rotate: -18, opacity: 0.55 },
  { left: "32%", top: "68%", size: 19, delay: 3.6, duration: 8.5, drift: 10, rotate: 26, opacity: 0.46 },
  { left: "92%", top: "32%", size: 15, delay: 5, duration: 11, drift: -7, rotate: -10, opacity: 0.4 },
  { left: "4%", top: "38%", size: 17, delay: 2.8, duration: 9, drift: 8, rotate: 20, opacity: 0.44 },
  { left: "64%", top: "28%", size: 21, delay: 1.4, duration: 10, drift: -11, rotate: -16, opacity: 0.52 },
];

export function HeroBackdrop() {
  return (
    <div
      className="hero-backdrop pointer-events-none absolute inset-0 z-[5] overflow-hidden"
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetPath("/hero/ice-backdrop.png")}
        alt=""
        className="hero-backdrop__image"
        draggable={false}
      />

      <div className="hero-backdrop__wash" />
      <div className="hero-backdrop__vignette" />

      {FLOATING_CUBES.map((cube, index) => (
        <span
          key={index}
          className="hero-ice-cube"
          style={
            {
              left: cube.left,
              top: cube.top,
              width: cube.size,
              height: cube.size,
              opacity: cube.opacity,
              "--cube-drift": `${cube.drift}px`,
              "--cube-rotate": `${cube.rotate}deg`,
              "--cube-duration": `${cube.duration}s`,
              "--cube-delay": `${cube.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
