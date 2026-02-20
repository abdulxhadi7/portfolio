"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, X, ChevronDown } from "lucide-react";

const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

const swipeThreshold = 12000;

/* ================= CATEGORIES ================= */

const categories = {
  Gaming: [
    "/thumbnails/gaming/t1.webp",
    "/thumbnails/gaming/t2.webp",
    "/thumbnails/gaming/t3.webp",
    "/thumbnails/gaming/t4.webp",
    "/thumbnails/gaming/t5.webp",
    "/thumbnails/gaming/t6.webp",
"/thumbnails/gaming/t7.webp",
"/thumbnails/gaming/t8.webp",
"/thumbnails/gaming/t9.webp",
"/thumbnails/gaming/t10.webp",
"/thumbnails/gaming/t11.webp",
"/thumbnails/gaming/t12.webp",
"/thumbnails/gaming/t13.webp",
"/thumbnails/gaming/t14.webp",
"/thumbnails/gaming/t15.webp",
"/thumbnails/gaming/t16.webp",
"/thumbnails/gaming/t17.webp",
"/thumbnails/gaming/t18.webp",
"/thumbnails/gaming/t19.webp",
"/thumbnails/gaming/t20.webp",
"/thumbnails/gaming/t21.webp",
"/thumbnails/gaming/t22.webp",
"/thumbnails/gaming/t23.webp",
"/thumbnails/gaming/t24.webp",
"/thumbnails/gaming/t25.webp",
"/thumbnails/gaming/t26.webp",
"/thumbnails/gaming/t27.webp",
"/thumbnails/gaming/t28.webp",
"/thumbnails/gaming/t29.webp",
"/thumbnails/gaming/t30.webp",
"/thumbnails/gaming/t31.webp",
"/thumbnails/gaming/t32.webp",
"/thumbnails/gaming/t33.webp",
"/thumbnails/gaming/t35.webp",
"/thumbnails/gaming/t36.webp",
"/thumbnails/gaming/t37.webp",
"/thumbnails/gaming/t38.webp",
"/thumbnails/gaming/t39.webp",
"/thumbnails/gaming/t40.webp",

  ],

  "MrBeast Style": [
    "/thumbnails/mrbeast/m1.webp",
    "/thumbnails/mrbeast/m2.webp",
    "/thumbnails/mrbeast/m3.webp",
    "/thumbnails/mrbeast/m4.webp",
  ],

  Documentary: [
    "/thumbnails/documentary/d1.webp",
    "/thumbnails/documentary/d2.webp",
    "/thumbnails/documentary/d3.webp",
    "/thumbnails/documentary/d4.webp",
  ],

  Tech: [
    "/thumbnails/tech/t1.webp",
    "/thumbnails/tech/t2.webp",
    "/thumbnails/tech/t3.webp",
    "/thumbnails/tech/t4.webp",
  ],

  Podcast: [
    "/thumbnails/podcast/p1.webp",
    "/thumbnails/podcast/p2.webp",
    "/thumbnails/podcast/p3.webp",
    "/thumbnails/podcast/p4.webp",
  ],
};

export default function ThumbnailGrid() {
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("Gaming");

  /* Load default category */
  useEffect(() => {
    setCurrentImages(categories["Gaming"]);
  }, []);

  /* Switch category */
  const switchCategory = (category: string) => {
    setActiveCategory(category);
    setCurrentImages(categories[category as keyof typeof categories]);
  };

  const next = () =>
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % currentImages.length
    );

  const prev = () =>
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + currentImages.length) % currentImages.length
    );

  /* Keyboard nav */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, currentImages]);

  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-16 overflow-hidden">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h2 className="text-5xl font-extrabold mb-4">
          YouTube Thumbnail <span className="text-lime-400">Categories</span>
        </h2>

        <p className="text-white/60">
          Expand categories to explore professional thumbnails
        </p>
      </motion.div>

      {/* CATEGORY SELECTOR */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">

        {Object.keys(categories).map((category) => {

          const isActive = category === activeCategory;

          return (
            <motion.button
              key={category}
              onClick={() => switchCategory(category)}
              whileHover={{ scale: 1.05 }}
              className={`px-6 py-3 rounded-full border transition flex items-center gap-2
              
              ${
                isActive
                  ? "bg-lime-400 text-black border-lime-400"
                  : "border-white/20 text-white/70 hover:border-lime-400"
              }`}
            >
              {category}

              <ChevronDown
                size={16}
                className={`transition ${
                  isActive ? "rotate-180" : ""
                }`}
              />
            </motion.button>
          );
        })}
      </div>

      {/* GRID */}
      <AnimatePresence mode="wait">

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {currentImages.map((image, i) => (
            <motion.div
              key={image}
              layoutId={image}
              whileHover={{ scale: 1.06 }}
              onClick={() => setSelectedIndex(i)}
              className="group rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
            >
              <div className="aspect-video relative">

                <img
                  src={image}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

              </div>
            </motion.div>
          ))}
        </motion.div>

      </AnimatePresence>

      {/* MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.img
              key={currentImages[selectedIndex]}
              src={currentImages[selectedIndex]}
              className="max-h-[85vh] rounded-3xl"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeThreshold) next();
                if (swipe > swipeThreshold) prev();
              }}
            />

            {/* CLOSE */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 bg-lime-400 text-black p-3 rounded-full"
            >
              <X />
            </button>

            {/* NAV */}
            <button
              onClick={prev}
              className="absolute left-6"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={next}
              className="absolute right-6"
            >
              <ChevronRight size={40} />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

      {/* BACK BUTTON */}
      <button
        onClick={() => router.push("/#work")}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-lime-400 text-black px-8 py-3 rounded-full"
      >
        Go Back
      </button>

    </section>
  );
}