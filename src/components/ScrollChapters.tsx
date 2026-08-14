"use client";

import { assetPath } from "@/lib/assetPath";
import { Reveal } from "./Reveal";

const chapters = [
  {
    id: "locked-freshness",
    title: "Locked-In Freshness.",
    body: "Our flash-freeze technology preserves organic structural integrity instantly at −40°C.",
    image: "/chapters/locked-freshness.png",
  },
  {
    id: "pure-ingredients",
    title: "Pure Ingredients.",
    body: "Watch the ice crystal shield dissolve to expose premium culinary components ready for your table.",
    image: "/chapters/pure-ingredients.png",
  },
  {
    id: "zero-prep",
    title: "Zero Prep Time.",
    body: "From the freezer environment straight to a perfectly steamed plate in minutes.",
    image: "/chapters/zero-prep.png",
  },
];

export function ScrollChapters() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="flex flex-col gap-6 md:gap-8">
        {chapters.map((chapter, index) => (
          <Reveal key={chapter.id} delay={index * 0.06}>
            <article
              id={chapter.id}
              className="group relative min-h-[280px] overflow-hidden rounded-[var(--radius-bento)] md:min-h-[340px] lg:min-h-[380px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath(chapter.image)}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

              <div className="relative flex h-full min-h-[inherit] max-w-xl flex-col justify-end p-8 md:p-12 lg:p-14">
                <h2 className="mb-4 text-[clamp(1.85rem,4vw,3rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-white">
                  {chapter.title}
                </h2>
                <p className="text-[16px] leading-relaxed text-white/80 md:text-[17px]">
                  {chapter.body}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
