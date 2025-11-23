"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";

const services = [
  {
    title: "Thumbnail",
    description:
      "Eye-catching YouTube and social media thumbnails designed to grab instant attention.",
    img: "/images/thumbnail.jpg",
  },
  {
    title: "Logo Artist",
    description:
      "Unique and modern logos crafted to elevate your brand identity.",
    img: "/images/logo.jpg",
  },
  {
    title: "Banners & Posters",
    description:
      "Premium posters and banners that communicate your message visually.",
    img: "/images/banner.jpg",
  },
  {
    title: "Shorts Editing",
    description:
      "Fast-paced, engaging edits for YouTube Shorts and TikTok.",
    img: "/images/shorts.jpg",
  },
  {
    title: "Long Video Editing",
    description:
      "Cinematic long-form editing with clean cuts, pacing, and story flow.",
    img: "/images/long.jpg",
  },
  {
    title: "Reel Editing",
    description:
      "Trendy Instagram Reels that boost reach and engagement.",
    img: "/images/reels.jpg",
  },
];

export default function ServicesAccordion() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Hover delay logic (1 second)
  useEffect(() => {
    if (hoveredIndex === null) return;

    const timer = setTimeout(() => {
      setActive(hoveredIndex);
    }, 200); // 1 second delay

    return () => clearTimeout(timer);
  }, [hoveredIndex]);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% 20%, rgba(34,197,94,0.06), transparent 10%), radial-gradient(900px 400px at 90% 80%, rgba(16,185,129,0.03), transparent 10%), #000000",
        }}
      />

      <section className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight"
          >
            My <span className="text-lime-400">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-neutral-300 max-w-2xl mt-4"
          >
            High-impact design, editing and visual work — polished, consistent and
            crafted to stand out.
          </motion.p>

          <div className="mt-16 flex w-full gap-4 overflow-x-auto no-scrollbar pb-6">
            {services.map((s, index) => {
              const isActive = index === active;

              return (
                <motion.div
                  key={index}
                  layout
                  onClick={() => setActive(index)}
                  onMouseEnter={() => {
                    setHovering(index);
                    setHoveredIndex(index); // start delayed hover timer
                  }}
                  onMouseLeave={() => {
                    setHovering(null);
                    setHoveredIndex(null); // cancel hover timer
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 26,
                  }}
                  className={`relative rounded-[2rem] cursor-pointer overflow-hidden backdrop-blur-md border border-white/10 bg-white/4 shadow-xl transition-all
                    h-[480px]
                    ${isActive ? "w-[700px]" : "w-[80px] opacity-60 hover:opacity-90"}
                  `}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/80" />
                  </div>

                  {hovering === index && !isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-4"
                    >
                      <p className="text-white text-sm font-medium">
                        {s.title}
                      </p>
                    </motion.div>
                  )}

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.45 }}
                        className="absolute bottom-0 w-full p-8 flex items-start gap-4"
                      >
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                          <Camera size={20} className="text-white" />
                        </div>

                        <div>
                          <h2 className="text-2xl font-semibold">{s.title}</h2>
                          <p className="text-white/80 text-sm mt-2 leading-relaxed">
                            {s.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
