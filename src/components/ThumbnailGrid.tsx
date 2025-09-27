"use client";
import { motion, Variants } from "framer-motion";

const thumbnails = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  title: `Project ${i + 1}`,
  color: `bg-gradient-to-br from-green-900 via-black to-green-900`,
}));

// Animation variants
const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      type: "spring",
    },
  }),
};

export default function ThumbnailGrid() {
  return (
    <section className="min-h-screen px-4 sm:px-8 md:px-12 py-12 bg-black text-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
        My Work Showcase
      </h2>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {thumbnails.map((thumb, i) => (
          <motion.div
            key={thumb.id}
            className={`relative rounded-2xl h-48 sm:h-56 md:h-64 flex items-center justify-center cursor-pointer shadow-xl ${thumb.color}`}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{
              scale: 1.06,
              rotate: 1,
              boxShadow: "0 0 30px rgba(163,230,53,0.6)",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition flex items-center justify-center">
              <span className="text-base sm:text-lg font-semibold text-lime-400">
                View {thumb.title}
              </span>
            </div>

            {/* Title */}
            <span className="text-lg sm:text-xl font-bold drop-shadow-lg">
              {thumb.title}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
