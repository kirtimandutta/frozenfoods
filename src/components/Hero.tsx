"use client";

import { motion } from "framer-motion";
import { assetPath } from "@/lib/assetPath";
import { Button } from "./Button";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroOrbit } from "./HeroOrbit";

export function Hero() {
  return (
    <section
      id="top"
      className="atmosphere relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <HeroBackdrop />
      <div
        className="pointer-events-none absolute inset-0 z-[6] opacity-50 dark:opacity-40"
        aria-hidden
      >
        <div className="absolute left-1/2 top-[18%] h-[55vmax] w-[55vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,230,168,0.1)_0%,transparent_68%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,var(--background)_100%)]" />
      </div>

      {/* TOP */}
      <div className="relative z-30 mx-auto flex w-full max-w-6xl shrink-0 flex-col items-center px-6 pt-20 pb-2 text-center md:px-10 md:pt-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-muted uppercase md:text-[12px]"
        >
          Freshness. Flash-frozen at its peak.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[min(92vw,34rem)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath("/hero/frozen-food-logo.png")}
            alt="Frozen Food"
            className="mx-auto h-auto w-full select-none"
            draggable={false}
          />
        </motion.h1>
      </div>

      {/* MIDDLE — orbit (slightly shorter so copy fills more of the hero) */}
      <div className="relative z-10 min-h-[38vh] w-full flex-1 md:min-h-[42vh]">
        <HeroOrbit />
      </div>

      {/* BOTTOM — larger type, one-liners, fills lower hero */}
      <div className="relative z-30 mx-auto flex w-full max-w-6xl shrink-0 flex-col items-center gap-4 px-4 pt-3 pb-10 text-center md:gap-5 md:px-8 md:pb-14">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-[clamp(1.15rem,2.4vw,1.65rem)] leading-snug font-medium tracking-[-0.02em] text-foreground whitespace-nowrap"
        >
          Cold tech. Hot plates. Deliciously instant.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-[clamp(0.9rem,1.55vw,1.05rem)] leading-snug text-muted whitespace-nowrap"
        >
          Gourmet convenience without compromise — chef-crafted meals, frozen at
          the exact second of perfection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="mt-1 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Shop the freeze
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              document.getElementById("craft")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Our craft
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
