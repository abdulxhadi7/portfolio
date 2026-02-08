"use client";

import { motion, easeOut, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ThumbnailGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const router = useRouter();

  const images = [
    "/thumbnails/t2.webp",
    "/thumbnails/t1.webp",
    "/thumbnails/t3.webp",
    "/thumbnails/t4.webp",
    "/thumbnails/t5.webp",
    "/thumbnails/t6.webp",
    "/thumbnails/t7.webp",
    "/thumbnails/t8.webp",
    "/thumbnails/t9.webp",
    "/thumbnails/t10.webp",
    "/thumbnails/t11.webp",
    "/thumbnails/t12.webp",
    "/thumbnails/t13.webp",
    "/thumbnails/t14.webp",
    "/thumbnails/t15.webp",
    "/thumbnails/t16.webp",
    "/thumbnails/t17.webp",
    "/thumbnails/t18.webp",
    "/thumbnails/t19.webp",
    "/thumbnails/t20.webp",
    "/thumbnails/t21.webp",
    "/thumbnails/t22.webp",
    "/thumbnails/t23.webp",
    "/thumbnails/t24.webp",
    "/thumbnails/t25.webp",
    "/thumbnails/t26.webp",
    "/thumbnails/t27.webp",
    "/thumbnails/t28.webp",
    "/thumbnails/t29.webp",
    "/thumbnails/t30.webp",
    "/thumbnails/t31.webp",
    "/thumbnails/t32.webp",
    "/thumbnails/t33.webp",
    "/thumbnails/t34.webp",
    "/thumbnails/t35.webp",
    "/thumbnails/t36.webp",
    "/thumbnails/t37.webp",
    "/thumbnails/t38.webp",
    "/thumbnails/t39.webp",
    "/thumbnails/t40.webp",
  ];

  const fadeZoomVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.04, duration: 0.6, ease: easeOut },
    }),
  };

  const next = () =>
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length
    );

  const prev = () =>
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length
    );

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <section className="relative min-h-screen bg-black text-white px-4 sm:px-8 md:px-12 py-16 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.15),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.12),transparent_45%)]" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-20 w-40 h-40 bg-lime-400/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-24 right-24 w-52 h-52 bg-emerald-400/20 blur-3xl rounded-full"
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-16 relative z-10"
      >
        <span className="text-lime-400 tracking-[0.25em] uppercase font-semibold">
          Design Portfolio
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-3 mb-6">
          Thumbnails that <span className="text-lime-400">Convert</span>
        </h2>
        <p className="text-white/60 text-lg">
          High CTR thumbnails crafted to grab attention, boost clicks and grow
          brands.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-7 relative z-10">
        {images.map((image, i) => (
          <motion.div
            key={i}
            variants={fadeZoomVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            whileHover={{ scale: 1.05 }}
            className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(34,197,94,0.15)] cursor-pointer"
            onClick={() => setSelectedIndex(i)}
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={image}
                alt="Creative thumbnail"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <div>
                <h3 className="text-sm font-semibold">High CTR Design</h3>
                <p className="text-xs text-white/60">Click to preview</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl w-full"
            >
              <Image
                src={images[selectedIndex]}
                alt="Preview"
                width={1400}
                height={900}
                className="rounded-3xl shadow-[0_0_80px_rgba(34,197,94,0.4)] object-contain w-full"
              />

              {/* Controls */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-4 -right-4 bg-lime-400 text-black p-2 rounded-full shadow-lg hover:scale-110 transition"
              >
                <X size={22} />
              </button>

              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 border border-white/20 backdrop-blur-lg p-3 rounded-full hover:bg-lime-400 hover:text-black transition"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 border border-white/20 backdrop-blur-lg p-3 rounded-full hover:bg-lime-400 hover:text-black transition"
              >
                <ChevronRight size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Back Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => router.push("/#work")}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full bg-lime-400 text-black font-medium shadow-[0_0_30px_rgba(34,197,94,0.6)] z-50"
      >
        Go Back
      </motion.button>
    </section>
  );
}
