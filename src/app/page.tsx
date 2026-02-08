"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutPage from "@/components/Carousel";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import WorkCategoriesPage from "./work/page";
import ServicesAccordion from "@/components/ScrollAnimation";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  /* ---------------------------------- */
  /* MOUNT CHECK (SSR SAFETY)           */
  /* ---------------------------------- */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---------------------------------- */
  /* MOBILE DETECTION                   */
  /* ---------------------------------- */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ---------------------------------- */
  /* SCROLL TO #work IF HASH PRESENT    */
  /* ---------------------------------- */
  useEffect(() => {
    if (!mounted) return;

    if (window.location.hash === "#work") {
      const el = document.getElementById("work");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [mounted]);

  /* ---------------------------------- */
  /* PARALLAX SETUP                     */
  /* ---------------------------------- */
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : -120]);
  const aboutY = useTransform(scrollY, [200, 900], [0, isMobile ? 0 : -100]);
  const servicesY = useTransform(scrollY, [600, 1400], [0, isMobile ? 0 : -90]);
  const workY = useTransform(scrollY, [1000, 2000], [0, isMobile ? 0 : -120]);

  return (
    <main className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section id="hero" className="w-full min-h-screen overflow-hidden">
        <motion.div style={{ y: heroY }}>
          <Hero />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="w-full py-20">
        <motion.div style={{ y: aboutY }}>
          <AboutPage />
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="w-full py-20">
        <motion.div style={{ y: servicesY }}>
          <ServicesAccordion />
        </motion.div>
      </section>

      {/* WORK */}
      <section id="work" className="w-full py-20">
        <motion.div style={{ y: workY }}>
          <WorkCategoriesPage />
        </motion.div>
      </section>

      <footer id="footer" className="mt-auto w-full">
        <Footer />
      </footer>

      <ScrollToTop />
    </main>
  );
}
