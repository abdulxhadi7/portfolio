"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, title: "Creative Designs", color: "bg-pink-500" },
  { id: 2, title: "Video Editing Magic", color: "bg-purple-500" },
  { id: 3, title: "Visual Storytelling", color: "bg-blue-500" },
  { id: 4, title: "Motion Graphics", color: "bg-green-500" },
  { id: 5, title: "Cinematic Editing", color: "bg-orange-500" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = (dir: number) => {
    setIndex((prev) => (prev + dir + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-16 h-[400px] perspective overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {slides.map((slide, i) => {
          const position = (i - index + slides.length) % slides.length;

          let style = "opacity-0 scale-50 blur-md";
          let zIndex = 0;
          let x = 0;

          if (position === 0) {
            // Center
            style = "opacity-100 scale-100 blur-0";
            zIndex = 30;
            x = 0;
          } else if (position === 1) {
            // Right
            style = "opacity-70 scale-75 blur-sm";
            zIndex = 20;
            x = 220;
          } else if (position === slides.length - 1) {
            // Left
            style = "opacity-70 scale-75 blur-sm";
            zIndex = 20;
            x = -220;
          }

          return (
            <motion.div
              key={slide.id}
              animate={{ x, zIndex }}
              transition={{ duration: 0.6, type: "spring" }}
              className={`absolute inset-0 flex items-center justify-center text-4xl font-bold text-white rounded-2xl shadow-xl ${slide.color} ${style}`}
            >
              {slide.title}
            </motion.div>
          );
        })}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => nextSlide(-1)}
        className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => nextSlide(1)}
        className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
