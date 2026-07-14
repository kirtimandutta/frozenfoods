import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScrollChapters } from "@/components/ScrollChapters";
import { BentoGrid } from "@/components/BentoGrid";
import { ProductCarousel } from "@/components/ProductCarousel";
import { Story } from "@/components/Story";
import { Footer } from "@/components/Footer";
import { FrozenBackdrop } from "@/components/FrozenBackdrop";

export default function HomePage() {
  return (
    <div className="scroll-container relative">
      <FrozenBackdrop />
      <Navbar />
      <main className="relative z-10 flex-1">
        <Hero />
        <ScrollChapters />
        <BentoGrid />
        <ProductCarousel />
        <Story />
        <Footer />
      </main>
    </div>
  );
}
