"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { products, type Product } from "@/data/products";
import { assetPath } from "@/lib/assetPath";
import { Reveal } from "./Reveal";

export function ProductCarousel() {
  const shelfRef = useRef<HTMLDivElement>(null);
  const [added, setAdded] = useState<Record<string, boolean>>({});

  const scrollBy = (dir: -1 | 1) => {
    const el = shelfRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.7, 360), behavior: "smooth" });
  };

  const handleAdd = (id: string) => {
    setAdded((prev) => ({ ...prev, [id]: true }));
    window.setTimeout(() => {
      setAdded((prev) => ({ ...prev, [id]: false }));
    }, 1200);
  };

  return (
    <section id="products" className="py-28 md:py-40">
      <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between gap-6 px-6 md:mb-16 md:px-10">
        <Reveal className="max-w-xl">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-muted uppercase">
            The Collection
          </p>
          <h2 className="text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-foreground">
            A shelf of peaks.
          </h2>
        </Reveal>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            className="pressable flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground hover:bg-surface-elevated"
            aria-label="Scroll products left"
          >
            <ChevronLeft size={18} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            className="pressable flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground hover:bg-surface-elevated"
            aria-label="Scroll products right"
          >
            <ChevronRight size={18} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <div
        ref={shelfRef}
        className="shelf-scroll flex gap-5 overflow-x-auto scroll-smooth px-6 pb-4 md:gap-6 md:px-10"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            added={!!added[product.id]}
            onAdd={() => handleAdd(product.id)}
          />
        ))}
        <div className="w-2 shrink-0 md:w-4" aria-hidden />
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
  added,
  onAdd,
}: {
  product: Product;
  index: number;
  added: boolean;
  onAdd: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-[260px] shrink-0 scroll-snap-align-start sm:w-[280px]"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="relative mb-5 aspect-[3/4] overflow-hidden rounded-[24px] shadow-[var(--shadow-product)] transition-transform duration-500 hover:scale-[1.015]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath(product.image)}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <div className="absolute inset-4 rounded-[18px] border border-white/10" />

        <div className="relative flex h-full flex-col justify-between p-6">
          <p
            className="text-[10px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: product.accent }}
          >
            {product.category}
          </p>

          <p className="text-[11px] tracking-[0.16em] text-white/70 uppercase">
            Flash-frozen
          </p>
        </div>

        <button
          type="button"
          onClick={onAdd}
          className="pressable absolute right-4 bottom-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-accent"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus
            size={20}
            strokeWidth={2}
            className={`transition-transform duration-300 ${added ? "rotate-45" : ""}`}
          />
        </button>
      </div>

      <div className="px-1">
        <div className="mb-1 flex items-baseline justify-between gap-3">
          <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-foreground">
            {product.name}
          </h3>
          <span className="text-[15px] font-medium text-muted">{product.price}</span>
        </div>
        <p className="text-[14px] text-muted">{product.description}</p>
        {added && (
          <p className="mt-2 text-[12px] font-medium tracking-wide text-accent uppercase">
            Added
          </p>
        )}
      </div>
    </motion.article>
  );
}
