"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

export default function ThumbnailGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/images/i1.jpg",
    "/images/i2.jpg",
    "/images/i3.jpg",
    "/images/i4.jpg",
    "/images/i5.jpg",
    "/images/i6.jpg",
    "/images/i7.jpg",
    "/images/i8.jpg",
    "/images/i9.jpg",
    "/images/i10.jpg",
    "/images/i11.jpg",
    "/images/i12.jpg",
    "/images/i13.jpg",
    "/images/i14.jpg",
    "/images/i15.jpg",
  ];

  // 🔥 Smooth scroll animation
  const fadeZoomVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: easeOut,
      },
    }),
  };

  return (
    <section id="work" className="relative min-h-screen bg-gradient-to-b from-black via-green-900/45 to-black text-white px-4 sm:px-8 md:px-12 py-16 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15),transparent_70%)] pointer-events-none" />

      {/* Header Section */}
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
          Dive into our world of design and innovation — each piece tells a story of creativity and passion.
        </p>

        <a
          href="#"
          className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-green-600/90 hover:bg-green-500 rounded-2xl font-medium text-white transition-all duration-300 hover:scale-105"
        >
          Follow Us
        </a>
      </motion.div>

      {/* Grid Section */}
      <div
        className="grid gap-5 sm:gap-7 md:gap-8 relative z-10"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gridAutoRows: "minmax(220px, auto)",
        }}
      >
        {images.map((image, i) => (
          <motion.div
            key={i}
            className="group relative rounded-3xl overflow-hidden shadow-lg shadow-green-900/20 cursor-pointer bg-gradient-to-tr from-gray-800 to-gray-900"
            variants={fadeZoomVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            whileHover={{ scale: 1.03, rotate: 0.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`Creative work ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-1">Project {i + 1}</h3>
                <p className="text-sm text-gray-300">View details</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full view"
              width={1200}
              height={800}
              className="rounded-3xl shadow-2xl object-contain w-full h-auto"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-green-400 transition"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
