"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutPage from "@/components/Carousel";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Preloader from "@/components/Preloader";
import WorkCategoriesPage from "./work/page";
import ServicesAccordion from "@/components/ScrollAnimation";


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

      <section id="about" className="w-full py-20">
        <AboutPage />
      </section>

      <section id="services" className="w-full py-20">
        <ServicesAccordion />
      </section>

     

      <section id="work" className="w-full py-20">
        <WorkCategoriesPage />
      </section>

      <footer id="footer" className="mt-auto w-full">
        <Footer />
      </footer>

      <ScrollToTop />
    </main>
  );
}
