"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";



// -----------------------------------
// TYPES
// -----------------------------------
type GalleryCardProps = {
  src: string;
  index: number;
  onClick: () => void;
};

type LightboxProps = {
  image: string | null;
  onClose: () => void;
};

// -----------------------------------
// IMAGES
// -----------------------------------
const galleryImages: string[] = [
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

// -----------------------------------
// ANIMATIONS
// -----------------------------------
const fadeZoomVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.7,
      ease: easeOut,
    },
  }),
};

// -----------------------------------
// GALLERY CARD
// -----------------------------------
function GalleryCard({ src, index, onClick }: GalleryCardProps) {
  return (
    
    <motion.div
      variants={fadeZoomVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
      whileHover={{
        scale: 1.05,
        rotate: 0.6,
        y: -6,
        transition: { type: "spring", stiffness: 260, damping: 18 },
      }}
      className="
        group relative rounded-3xl overflow-hidden 
    bg-gradient-to-tr from-gray-800/80 to-gray-900 
    shadow-xl shadow-green-900/30 cursor-pointer
    backdrop-blur-md border border-white/10
    aspect-[4/5]        // ← THIS FIXES THE HEIGHT/WIDTH ISSUE
    w-full h-full       // ← Ensure it fills grid cell
      "
      onClick={onClick}
    >
      
      {/* Image */}
      <Image
        src={src}
        alt={`Creative work ${index + 1}`}
        fill
        className="
          object-cover transition-transform duration-700 ease-out 
          group-hover:scale-110 group-hover:brightness-110
        "
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0 bg-gradient-to-t 
          from-black/80 via-black/20 to-transparent 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500 
          flex flex-col justify-end p-6
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold mb-1">Project {index + 1}</h3>
          <p className="text-sm text-gray-300">Click to view</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// -----------------------------------
// LIGHTBOX (UPGRADED)
// -----------------------------------
function Lightbox({ image, onClose }: LightboxProps) {
  if (!image) return null;

  return (
    <motion.div
      className="
        fixed inset-0 z-50 bg-black/90 backdrop-blur-md
        flex items-center justify-center p-4
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: easeOut }}
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Full Image */}
        <Image
          src={image}
          alt="Full view"
          width={1300}
          height={900}
          className="
            rounded-3xl shadow-2xl object-contain w-full h-auto 
            border border-white/10
          "
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 text-white text-4xl 
            font-bold hover:text-green-400 transition
          "
        >
          ×
        </button>
      </motion.div>
    </motion.div>
  );
}

// -----------------------------------
// MAIN COMPONENT
// -----------------------------------
export default function ThumbnailGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="
        relative min-h-screen text-white px-4 sm:px-8 md:px-12 
        py-20 overflow-hidden bg-black
      "
    >
      {/* Floating Glow Blobs */}
      <div className="pointer-events-none absolute -top-20 -left-16 w-[450px] h-[450px] bg-green-600/20 blur-[140px] rounded-full animate-pulse" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 w-[400px] h-[400px] bg-emerald-500/20 blur-[140px] rounded-full animate-pulse" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: easeOut }}
        className="max-w-2xl mx-auto text-center mb-20 relative z-10"
      >
        <span className="text-green-400 font-semibold tracking-[0.15em] uppercase">
          Showcase
        </span>

        <h2
          className="
            text-4xl sm:text-5xl md:text-6xl font-extrabold mt-3 mb-6 
            bg-gradient-to-r from-green-400 to-emerald-300 
            bg-clip-text text-transparent
          "
        >
          Our Creative Works
        </h2>

        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
          A refined collection of our finest visuals — crafted with detail,
          creativity, and emotion.
        </p>

        <a
          href="#"
          className="
            mt-8 inline-flex items-center gap-2 px-8 py-3 
            bg-green-600/90 hover:bg-green-500 rounded-2xl 
            font-medium text-white transition-all duration-300 
            hover:scale-105
          "
        >
          Follow Us
        </a>
      </motion.div>

      {/* GRID */}
      <div
  className="grid gap-6 sm:gap-7 md:gap-9 relative z-10"
  style={{
    gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
  }}
>
  {galleryImages.map((src, i) => (
    <div key={i} className="relative aspect-[4/5]">
      <GalleryCard
        src={src}
        index={i}
        onClick={() => setSelectedImage(src)}
      />
    </div>
  ))}
</div>
      {/* Lightbox */}
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
    
  );
}
