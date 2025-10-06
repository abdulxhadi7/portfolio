"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import ScrollAnimation from "@/components/ScrollAnimation";
import ThreeScene from "@/components/ThreeScene";
import ThumbnailGrid from "@/components/ThumbnailGrid";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Match preloader duration
    const timer = setTimeout(() => setLoaded(true), 4200);
    return () => clearTimeout(timer);
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <main className="bg-black text-white overflow-x-hidden flex flex-col min-h-screen">
      {/* Animate whole page fade-in after preloader */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex-1 flex flex-col"
      >
        {/* Navbar */}
        <motion.div variants={fadeUp} initial="hidden" animate={loaded ? "visible" : "hidden"}>
          <Navbar />
        </motion.div>

        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          <Hero />
        </motion.div>

        {/* Carousel */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          transition={{ delay: 0.6 }}
        >
          <Carousel />
        </motion.div>

        {/* Other Sections */}
        <section className="flex-1 space-y-20 mt-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ScrollAnimation />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ThreeScene />
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ThumbnailGrid />
          </motion.div>
        </section>

        {/* Glowing Footer */}
        <motion.footer
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mt-0 overflow-hidden"
        >
          {/* Subtle green glow behind footer */}
          <motion.div
            className="absolute inset-0 bg-[#00FF66]/10 blur-2xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />
          <Footer />
        </motion.footer>
      </motion.div>

      {/* Scroll to Top */}
      <ScrollToTop />
    </main>
  );
}
