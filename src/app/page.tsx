"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import ScrollAnimation from "@/components/ScrollAnimation";
import ThreeScene from "@/components/ThreeScene";
import ThumbnailGrid from "@/components/ThumbnailGrid";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // match your Preloader animation duration
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />; // show only Preloader first

  return (
    <main className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section (animation visible after preloader finishes) */}
      <section id="hero" className="w-full h-screen overflow-hidden">
        <Hero />
      </section>

      <section id="carousel" className="w-full py-20">
        <Carousel />
      </section>

      <section id="scroll-animation" className="w-full py-20">
        <ScrollAnimation />
      </section>

      <section id="three-scene" className="w-full py-20">
        <ThreeScene />
      </section>

      <section id="thumbnails" className="w-full py-20">
        <ThumbnailGrid />
      </section>

      <footer id="footer" className="mt-auto w-full">
        <Footer />
      </footer>

      <ScrollToTop />
    </main>
  );
}
