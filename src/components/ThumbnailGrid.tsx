"use client";
import { motion, Variants } from "framer-motion";

const thumbnails = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  title: `Project ${i + 1}`,
  color: `bg-gradient-to-br from-green-900 via-black to-green-900`,
}));

// ✅ Explicitly type as Variants
const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      type: "spring", // ✅ matches allowed union type
    },
  }),
};

export default function ThumbnailGrid() {
  return (
    <section className="min-h-screen p-12 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        My Work Showcase
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {thumbnails.map((thumb, i) => (
          <motion.div
            key={thumb.id}
            className={`relative rounded-2xl h-56 flex items-center justify-center cursor-pointer shadow-lg ${thumb.color}`}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i} // ✅ Pass index to variants
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 hover:opacity-100 transition flex items-center justify-center">
              <span className="text-lg font-semibold">View {thumb.title}</span>
            </div>
            <span className="text-xl font-bold">{thumb.title}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
