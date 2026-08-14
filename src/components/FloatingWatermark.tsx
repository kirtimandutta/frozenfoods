"use client";

import { useEffect, useRef } from "react";

const SPEED = 78;
const PAD = 16;

/**
 * Site watermark that drifts around the viewport like a bouncing FAB.
 * Links to tothyo.it.in.
 */
export default function FloatingWatermark() {
  const elRef = useRef<HTMLAnchorElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const size = { w: el.offsetWidth, h: el.offsetHeight };
    const pos = {
      x: Math.max(PAD, window.innerWidth - size.w - 20),
      y: Math.max(PAD, window.innerHeight - size.h - 20),
    };
    const vel = { x: -SPEED * 0.78, y: -SPEED * 0.58 };

    el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

    if (reduceMotion) return;

    const ro = new ResizeObserver(() => {
      size.w = el.offsetWidth;
      size.h = el.offsetHeight;
    });
    ro.observe(el);

    let last = 0;
    let raf = 0;

    const bounds = () => ({
      maxX: Math.max(PAD, window.innerWidth - size.w - PAD),
      maxY: Math.max(PAD, window.innerHeight - size.h - PAD),
    });

    const tick = (t: number) => {
      const dt = last ? Math.min(0.05, (t - last) / 1000) : 0;
      last = t;

      if (!paused.current && dt > 0) {
        pos.x += vel.x * dt;
        pos.y += vel.y * dt;

        const { maxX, maxY } = bounds();

        if (pos.x <= PAD) {
          pos.x = PAD;
          vel.x = Math.abs(vel.x);
        } else if (pos.x >= maxX) {
          pos.x = maxX;
          vel.x = -Math.abs(vel.x);
        }

        if (pos.y <= PAD) {
          pos.y = PAD;
          vel.y = Math.abs(vel.y);
        } else if (pos.y >= maxY) {
          pos.y = maxY;
          vel.y = -Math.abs(vel.y);
        }

        el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    const pause = () => {
      paused.current = true;
    };
    const resume = () => {
      paused.current = false;
    };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("focus", pause);
    el.addEventListener("blur", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume, { passive: true });

    const onResize = () => {
      const { maxX, maxY } = bounds();
      pos.x = Math.min(Math.max(PAD, pos.x), maxX);
      pos.y = Math.min(Math.max(PAD, pos.y), maxY);
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("focus", pause);
      el.removeEventListener("blur", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <a
      ref={elRef}
      href="https://tothyo.it.in"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Copyright tothyo.it.in"
      className="watermark-fab fixed top-0 left-0 z-[100] flex items-center rounded-full border border-[#25D366]/40 bg-[#128C7E] px-4 py-2.5 shadow-[0_8px_28px_rgba(18,140,126,0.45)] will-change-transform"
    >
      <span className="watermark-pulse" aria-hidden />
      <span className="watermark-pulse watermark-pulse-delay" aria-hidden />
      <span className="relative z-[1] flex flex-col leading-tight">
        <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/70">
          Copyright
        </span>
        <span className="text-[13px] font-medium tracking-[0.02em] text-white">
          tothyo.it.in
        </span>
      </span>
    </a>
  );
}
