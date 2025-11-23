"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WorkCategoryPage({
  title = "Category",
  description = "Showcasing exclusive work with cinematic presentation.",
  images = [],
}: {
  title?: string;
  description?: string;
  images?: string[];
}) {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_30%_20%,rgba(132,255,132,0.12),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.08),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.06] bg-[url('/textures/noise.png')] mix-blend-soft-light" />

      {/* Heading */}
      <section className="pt-32 text-center px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-neutral-300 mt-5 max-w-2xl mx-auto text-lg"
        >
          {description}
        </motion.p>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-32 mt-20">
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-lime-400/40 transition-all shadow-lg"
            >
              {/* Image */}
              <div className="relative h-[260px] w-full">
                <Image
                  src={src}
                  alt="work"
                  fill
                  className="object-cover group-hover:scale-110 group-hover:rotate-[1deg] transition-all duration-500 ease-out"
                />
              </div>

              {/* Glow on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-300/30 to-transparent blur-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
