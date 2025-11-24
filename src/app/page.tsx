"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

  // PRELOADER
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // SCROLL TO #work IF RETURNING
  useEffect(() => {
    if (!loading && window.location.hash === "#work") {
      const el = document.getElementById("work");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [loading]);

  // ---------------------------------------
  // PARALLAX SETUP
  // ---------------------------------------
  const { scrollY } = useScroll();

  // smooth parallax motion
  const heroY = useTransform(scrollY, [0, 500], [0, -120]);
  const aboutY = useTransform(scrollY, [200, 900], [0, -100]);
  const servicesY = useTransform(scrollY, [600, 1400], [0, -90]);
  const workY = useTransform(scrollY, [1000, 2000], [0, -120]);

  if (loading) return <Preloader />;

  return (
    <main className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* HERO (Parallax) */}
      <motion.section
        id="hero"
        style={{ y: heroY }}
        className="w-full h-screen overflow-hidden"
      >
        <Hero />
      </motion.section>

      {/* ABOUT (Parallax) */}
      <motion.section
        id="about"
        style={{ y: aboutY }}
        className="w-full py-20"
      >
        <AboutPage />
      </motion.section>

      {/* SERVICES (Parallax) */}
      <motion.section
        id="services"
        style={{ y: servicesY }}
        className="w-full py-20"
      >
        <ServicesAccordion />
      </motion.section>

      {/* WORK (Parallax) */}
      <motion.section
        id="work"
        style={{ y: workY }}
        className="w-full py-20"
      >
        <WorkCategoriesPage />
      </motion.section>

      <footer id="footer" className="mt-auto w-full">
        <Footer />
      </footer>

      <ScrollToTop />
    </main>
  );
}
