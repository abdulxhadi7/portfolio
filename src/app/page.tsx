import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import ScrollAnimation from "@/components/ScrollAnimation";
import ThreeScene from "@/components/ThreeScene";
import ThumbnailGrid from "@/components/ThumbnailGrid";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Carousel />  {/* 🚀 Interactive Carousel */}
      <section className="p-16 space-y-20">
        <ScrollAnimation />
        <ScrollAnimation />
        <ThreeScene />
        <ThumbnailGrid />
        <Footer />
        <ScrollToTop />
      </section>
    </main>
  );
}
