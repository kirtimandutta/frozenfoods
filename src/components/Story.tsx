"use client";

import { Reveal } from "./Reveal";
import { Button } from "./Button";

export function Story() {
  return (
    <section id="story" className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
      <Reveal variant="scale" className="relative overflow-hidden rounded-[var(--radius-bento)] bg-surface-elevated px-8 py-16 md:px-16 md:py-24 lg:px-24">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse at 0% 100%, rgba(46,230,168,0.12), transparent 50%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-5 text-[11px] font-semibold tracking-[0.28em] text-muted uppercase">
            Our Story
          </p>
          <h2 className="mb-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] font-semibold tracking-[-0.035em] text-foreground">
            Peak freshness,
            <br />
            paused in time.
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-[16px] leading-relaxed text-muted md:text-[17px]">
            We freeze at the chef&apos;s finish line — when aromas crest, textures
            settle, and every ingredient is exactly where it should be. Your kitchen
            gets the same moment, on demand.
          </p>
          <Button>Join the waitlist</Button>
        </div>
      </Reveal>
    </section>
  );
}
