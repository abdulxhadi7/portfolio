"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

export default function FullWidthGrid() {
  // -----------------------------
  // Thumbnails (12 cards)
  // -----------------------------
  const thumbnails = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
  }));

  // -----------------------------
  // Animation variants
  // -----------------------------
  const variantsList: Variants[] = [
    {
      hidden: { opacity: 0, scale: 0.7 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.7, type: "spring" } },
    },
    {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } },
    },
    {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.7, type: "spring" } },
    },
  ];

  // -----------------------------
  // Fixed spans (grid sizes)
  // -----------------------------
  const fixedSpans = [
    { colSpan: 2, rowSpan: 2, variant: variantsList[0] },
    { colSpan: 1, rowSpan: 1, variant: variantsList[1] },
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

  // -----------------------------
  // Bigger responsive fixed heights
  // -----------------------------
  const fixedHeights = [
    "h-72 sm:h-80 md:h-[28rem]", // card 0 - large
    "h-56 sm:h-64 md:h-[20rem]", // card 1 - medium
    "h-64 sm:h-72 md:h-[22rem]", // card 2 - medium-large
    "h-52 sm:h-60 md:h-[18rem]", // card 3 - smaller
    "h-72 sm:h-80 md:h-[26rem]", // card 4 - large
    "h-60 sm:h-72 md:h-[22rem]", // card 5 - medium-large
    "h-80 sm:h-96 md:h-[32rem]", // card 6 - extra large
    "h-56 sm:h-64 md:h-[20rem]", // card 7 - medium
    "h-64 sm:h-72 md:h-[24rem]", // card 8 - medium-large
    "h-72 sm:h-80 md:h-[28rem]", // card 9 - large
    "h-48 sm:h-56 md:h-[16rem]", // card 10 - small
    "h-64 sm:h-72 md:h-[22rem]", // card 11 - medium
  ];

  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-8 md:px-12 py-12">
      {/* Heading Section */}
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
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // bigger base size
          gridAutoRows: "minmax(200px, auto)", // taller base rows
          position: "relative",
        }}
      >
        {thumbnails.map((thumb, i) => {
          const { colSpan, rowSpan, variant } = fixedSpans[i];

          return (
            <motion.div
              key={thumb.id}
              className={`relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer w-full ${fixedHeights[i]} bg-green-700`}
              style={{
                gridColumnEnd: `span ${colSpan}`,
                gridRowEnd: `span ${rowSpan}`,
              }}
              variants={variant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(163,230,53,0.7)" }}
            >
              {/* Enter img here */}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
