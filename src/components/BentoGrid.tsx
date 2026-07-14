"use client";

import { motion } from "framer-motion";
import { bentoFeatures } from "@/data/products";
import { Reveal, Stagger, staggerItem } from "./Reveal";

export function BentoGrid() {
  return (
    <section id="craft" className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <Reveal className="mb-16 max-w-2xl md:mb-24">
        <p className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-muted uppercase">
          Why Angad
        </p>
        <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-foreground">
          Engineered cold.
          <br />
          Elevated taste.
        </h2>
      </Reveal>

      <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {bentoFeatures.map((feature) => {
          const isHero = feature.id === "flash-frozen";

          return (
            <motion.article
              key={feature.id}
              variants={staggerItem}
              className={`group relative overflow-hidden rounded-[var(--radius-bento)] ${feature.span} ${
                isHero ? "min-h-[340px] md:min-h-[420px]" : "min-h-[240px]"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={feature.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/15" />

              <div className="relative flex h-full min-h-[inherit] flex-col justify-between gap-8 p-8 md:p-10">
                <p className="text-[11px] font-semibold tracking-[0.24em] text-white/70 uppercase">
                  {feature.label}
                </p>
                <div>
                  <h3 className="mb-3 text-[1.5rem] leading-tight font-semibold tracking-[-0.025em] text-white md:text-[1.75rem]">
                    {feature.title}
                  </h3>
                  <p className="max-w-md text-[15px] leading-relaxed text-white/75 md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </Stagger>
    </section>
  );
}
