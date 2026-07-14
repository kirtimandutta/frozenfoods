"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "./Button";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const productY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const productScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);

  return (
    <section
      id="top"
      ref={ref}
      className="atmosphere relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-28 md:px-10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-30"
        aria-hidden
      >
        <div className="absolute left-1/2 top-[18%] h-[55vmax] w-[55vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,230,168,0.12)_0%,transparent_68%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,var(--background)_100%)]" />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-[11px] font-semibold tracking-[0.28em] text-muted uppercase"
        >
          Freshness. Flash-frozen at its peak.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-[clamp(3.5rem,12vw,6.5rem)] leading-[0.92] font-semibold tracking-[-0.045em] text-foreground"
        >
          Angad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 max-w-2xl text-[clamp(1.35rem,3.2vw,2.25rem)] leading-snug font-medium tracking-[-0.025em] text-foreground"
        >
          Cold tech. Hot plates.
          <br className="hidden sm:block" /> Deliciously instant.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-md text-[15px] leading-relaxed text-muted md:text-base"
        >
          Gourmet convenience without compromise — chef-crafted meals,
          frozen at the exact second of perfection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-wrap items-center justify-center gap-3"
        >
          <Button onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>
            Shop the freeze
          </Button>
          <Button
            variant="secondary"
            onClick={() => document.getElementById("craft")?.scrollIntoView({ behavior: "smooth" })}
          >
            Our craft
          </Button>
        </motion.div>

        <motion.div
          style={{ y: productY, scale: productScale }}
          initial={{ opacity: 0, y: 48, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-sm md:max-w-md"
        >
          <ProductPack />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProductPack() {
  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-[320px]">
      <div
        className="absolute inset-x-8 -bottom-6 h-10 rounded-[100%] bg-black/15 blur-2xl dark:bg-black/50"
        aria-hidden
      />
      <div
        className="relative h-full overflow-hidden rounded-[28px] shadow-[var(--shadow-product)]"
        style={{
          background:
            "linear-gradient(165deg, #1c332c 0%, #0f1f1a 45%, #162820 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(46,230,168,0.35), transparent 55%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,transparent_28%)]" />

        {/* Frost edge detail */}
        <div className="absolute inset-3 rounded-[22px] border border-white/10" />

        <div className="relative flex h-full flex-col items-center justify-between px-8 py-10 text-center">
          <div>
            <p className="mb-3 text-[10px] font-semibold tracking-[0.32em] text-[#2ee6a8] uppercase">
              Angad · Premium
            </p>
            <h2 className="text-[1.75rem] leading-tight font-semibold tracking-[-0.03em] text-white">
              Truffle
              <br />
              Gnocchi
            </h2>
          </div>

          <div className="relative my-4 flex h-36 w-36 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[#2ee6a8]/15 blur-xl" />
            <svg
              viewBox="0 0 120 120"
              className="relative h-28 w-28 text-[#c8f5e3]"
              fill="currentColor"
              aria-hidden
            >
              <ellipse cx="60" cy="72" rx="38" ry="12" opacity="0.25" />
              <path d="M42 58c-4 10 2 22 18 24 16-2 22-14 18-24-6-14-26-14-36 0z" opacity="0.9" />
              <path d="M58 48c-2 8 4 16 12 17 8-1 14-9 12-17-3-10-18-10-24 0z" opacity="0.75" />
              <path d="M36 50c-3 9 1 18 11 20 10-2 16-11 13-20-4-12-18-12-24 0z" opacity="0.7" />
              <circle cx="72" cy="46" r="3" className="fill-[#2ee6a8]" />
              <circle cx="48" cy="52" r="2" className="fill-[#2ee6a8]" opacity="0.8" />
            </svg>
          </div>

          <div>
            <p className="mb-1 text-[11px] tracking-[0.18em] text-white/50 uppercase">
              Flash-frozen · −40°C
            </p>
            <p className="text-sm text-white/70">Serves 2 · 380g</p>
          </div>
        </div>
      </div>
    </div>
  );
}
