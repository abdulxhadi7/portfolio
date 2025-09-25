"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

const thumbnails = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  img: `/assets/img/home-02/instagram/insta-inner-${(i % 7) + 1}.jpg`,
  quote: [
    "Creativity is intelligence having fun.",
    "Design is thinking made visual.",
    "Every project tells a story.",
    "Innovation distinguishes leaders.",
    "Art meets technology here.",
    "Your vision, our creation.",
    "We build experiences, not just visuals.",
  ][i % 7],
}));

const variantsList: Variants[] = [
  { hidden: { opacity: 0, scale: 0.7 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, type: "spring" } } },
  { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } } },
  { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, type: "spring" } } },
];

// Fixed spans and variants for projects
const fixedSpans = [
  { colSpan: 2, rowSpan: 2, variant: variantsList[0] }, // Project 0
  { colSpan: 1, rowSpan: 1, variant: variantsList[1] }, // Project 1
  { colSpan: 1, rowSpan: 2, variant: variantsList[2] },
  { colSpan: 2, rowSpan: 1, variant: variantsList[0] },
  { colSpan: 1, rowSpan: 1, variant: variantsList[1] },
  { colSpan: 1, rowSpan: 2, variant: variantsList[2] },
  { colSpan: 2, rowSpan: 2, variant: variantsList[0] },
  { colSpan: 1, rowSpan: 1, variant: variantsList[1] },
  { colSpan: 1, rowSpan: 2, variant: variantsList[2] },
  { colSpan: 2, rowSpan: 1, variant: variantsList[0] },
  { colSpan: 1, rowSpan: 1, variant: variantsList[1] },
  { colSpan: 1, rowSpan: 2, variant: variantsList[2] },
];

// Extra quotes with positions
const extraQuotes = [
  {
    id: 100,
    text: "Editing is like storytelling with rhythm and flow.",
    colSpan: 1,
    rowSpan: 1,
    style: { gridColumnStart: 3, gridRowStart: 2 }, // Right of project 0, below project 1
  },
  
  {
    id: 102,
    text: "Design adds value faster than it adds costs.",
    colSpan: 2,
    rowSpan: 1,
    style: { gridColumnStart: 4, gridRowStart: 4 }, // Example position
  },
];

export default function FullWidthGrid() {
  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-12 py-12">
      {/* Content Section */}
      <div className="max-w-xl mx-auto text-center mb-12 relative z-10">
        <span className="text-green-400 font-semibold tracking-wider">SHOWCASE</span>
        <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">Our Creative Works</h2>
        <p className="text-lg sm:text-xl text-gray-300">
          Explore our projects and get inspired by the adventure in each story.
        </p>
        <a
          href="#"
          className="mt-6 inline-flex items-center px-6 py-3 bg-green-700 hover:bg-green-600 rounded-xl font-medium text-white transition"
        >
          Follow Us
        </a>
      </div>

      {/* Full-width Grid */}
      <div
        className="grid gap-4 sm:gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gridAutoRows: "minmax(150px, auto)",
          position: "relative",
        }}
      >
        {thumbnails.map((thumb, i) => {
          const { colSpan, rowSpan, variant } = fixedSpans[i];

          return (
            <motion.div
              key={thumb.id}
              className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer flex items-center justify-center"
              style={{
                gridColumnEnd: `span ${colSpan}`,
                gridRowEnd: `span ${rowSpan}`,
                backgroundColor: "rgba(0,255,0,0.2)",
              }}
              variants={variant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(163,230,53,0.7)" }}
            >
              <img
                src={thumb.img}
                alt={`Project ${thumb.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 flex items-center justify-center p-4 text-center transition">
                <span className="text-green-400 font-semibold text-xs sm:text-sm md:text-base">{thumb.quote}</span>
              </div>
            </motion.div>
          );
        })}

        {/* Extra Quotes */}
        {extraQuotes.map((quote) => (
          <div
            key={quote.id}
            className="flex items-center justify-center text-center p-2 text-green-400 font-semibold text-sm sm:text-base"
            style={{
              gridColumnEnd: `span ${quote.colSpan}`,
              gridRowEnd: `span ${quote.rowSpan}`,
              ...quote.style,
            }}
          >
            {quote.text}
          </div>
        ))}
      </div>
    </section>
  );
}
