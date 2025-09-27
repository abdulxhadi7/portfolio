"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black px-4 sm:px-8">
      {/* Floating Buttons */}
      {[
        "top-24 left-6 sm:left-16",
        "top-1/2 left-4 sm:left-12",
        "bottom-32 right-6 sm:right-16",
        "top-1/3 right-8 sm:right-20",
      ].map((pos, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${pos} z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full ${
            i % 2 === 0 ? "bg-lime-500 text-black" : "bg-green-600 text-white"
          } shadow-lg flex items-center justify-center`}
        >
          <Plus size={18} className="sm:size-20" />
        </motion.div>
      ))}

      {/* Slides */}
      <div className="relative w-full h-full flex items-center justify-center">
        {slides.map((slide, i) => {
          const position = (i - index + slides.length) % slides.length;

          let style = "opacity-0 scale-50 blur-md";
          let zIndex = 0;
          let x = 0;

          if (position === 0) {
            style = "opacity-100 scale-100 blur-0";
            zIndex = 30;
            x = 0;
          } else if (position === 1) {
            style = "opacity-70 scale-75 blur-sm";
            zIndex = 20;
            x = 220; // smaller offset for mobile
          } else if (position === slides.length - 1) {
            style = "opacity-70 scale-75 blur-sm";
            zIndex = 20;
            x = -220;
          }

          return (
            <motion.div
              key={slide.id}
              animate={{ x, zIndex }}
              transition={{ duration: 0.6, type: "spring" }}
              className={`absolute inset-0 flex items-center justify-center text-3xl sm:text-5xl md:text-7xl font-extrabold text-white rounded-2xl shadow-xl ${slide.color} ${style}`}
            >
              {slide.title}
            </motion.div>
          );
        })}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => nextSlide(-1)}
        className="absolute top-1/2 left-4 sm:left-6 -translate-y-1/2 z-30 
          bg-white/10 backdrop-blur-lg border border-white/20 
          hover:bg-white/20 transition-all 
          p-3 sm:p-4 rounded-2xl shadow-lg group"
      >
        <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => nextSlide(1)}
        className="absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 z-30 
          bg-white/10 backdrop-blur-lg border border-white/20 
          hover:bg-white/20 transition-all 
          p-3 sm:p-4 rounded-2xl shadow-lg group"
      >
        <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Indicators (optional for mobile UX) */}
      <div className="absolute bottom-6 flex gap-2 sm:gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
              i === index ? "bg-lime-400 scale-125" : "bg-gray-500/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
