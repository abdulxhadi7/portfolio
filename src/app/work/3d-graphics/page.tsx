"use client";

import { motion, easeOut } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";

export default function ThumbnailGrid() {
  const router = useRouter();

  // Replace images with a single Coming Soon card
  const items = new Array(8).fill("coming-soon");

  const fadeZoomVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.6, ease: easeOut },
    }),
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-green-900/45 to-black text-white px-4 sm:px-8 md:px-12 py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="max-w-2xl mx-auto text-center mb-16 relative z-10"
      >
        <span className="text-green-400 font-semibold tracking-[0.15em] uppercase">
          Showcase
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-3 mb-6 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
          Our Creative Works
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
          Exciting things are on the way — stay tuned for premium 3D graphics,
          UI showcases, and more.
        </p>
      </motion.div>

      {/* Grid */}
      <div
        className="grid gap-5 sm:gap-7 md:gap-8 relative z-10"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gridAutoRows: "minmax(220px, auto)",
        }}
      >
        {items.map((_, i) => (
          <motion.div
            key={i}
            className="group relative rounded-3xl overflow-hidden shadow-lg shadow-green-900/20 bg-gradient-to-tr from-gray-800 to-gray-900 flex items-center justify-center"
            variants={fadeZoomVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
          >
            <div className="absolute inset-0 bg-black/40" />

            <h3 className="relative z-10 text-2xl font-bold text-green-400 tracking-wide">
              COMING SOON
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Go Back Button */}
      <button
        onClick={() => router.push("/#work")}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-green-600/90 hover:bg-green-500 rounded-2xl font-medium text-white transition-all duration-300 hover:scale-105 z-50 shadow-lg"
      >
        Go Back
      </button>
    </section>
  );
}
