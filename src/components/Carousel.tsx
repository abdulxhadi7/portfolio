"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

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
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Floating Buttons (4 random positions) */}
      {[
        "top-24 left-16",
        "top-1/2 left-12",
        "bottom-32 right-16",
        "top-1/3 right-20",
      ].map((pos, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${pos} z-20 w-12 h-12 rounded-full ${
            i % 2 === 0 ? "bg-lime-500 text-black" : "bg-green-600 text-white"
          } shadow-lg flex items-center justify-center`}
        >
          <Plus size={20} />
        </motion.button>
      ))}

      {/* Slides */}
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
            x = 300;
          } else if (position === slides.length - 1) {
            // Left
            style = "opacity-70 scale-75 blur-sm";
            zIndex = 20;
            x = -300;
          }

          return (
            <motion.div
              key={slide.id}
              animate={{ x, zIndex }}
              transition={{ duration: 0.6, type: "spring" }}
              className={`absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-extrabold text-white rounded-2xl shadow-xl ${slide.color} ${style}`}
            >
              {slide.title}
            </motion.div>
          );
        })}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => nextSlide(-1)}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full z-30"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => nextSlide(1)}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full z-30"
      >
        ›
      </button>
    </div>
  );
}
