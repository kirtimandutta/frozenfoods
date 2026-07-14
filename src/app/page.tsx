import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { ProductCarousel } from "@/components/ProductCarousel";
import { Story } from "@/components/Story";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BentoGrid />
        <ProductCarousel />
        <Story />
      </main>
      <Footer />
    </>
  );
}
