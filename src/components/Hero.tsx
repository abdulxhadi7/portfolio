// app/page.tsx
"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center text-white overflow-hidden">
      {/* Emerald Void Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000000 40%, #072607 100%)",
        }}
      />

      {/* Floating Buttons (near right main box) */}
      <motion.button
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-40 z-20 w-12 h-12 rounded-full bg-lime-500 text-black shadow-lg flex items-center justify-center"
      >
        <Plus size={20} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.2, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-28 z-20 w-12 h-12 rounded-full bg-lime-400 text-black shadow-lg flex items-center justify-center"
      >
        <Plus size={20} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.2, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-36 z-20 w-12 h-12 rounded-full bg-green-600 text-white shadow-lg flex items-center justify-center"
      >
        <Plus size={20} />
      </motion.button>

      {/* Left Section (Text) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 px-6 md:px-16 space-y-6 relative z-10"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight uppercase">
          <span className="text-lime-400">BRING</span> <br />
          IDEAS TO LIFE <br />
          <span className="text-lime-400">Through</span> designs
        </h1>

        <p className="text-lg text-gray-300 max-w-md">
          Crafting visuals that inspire, stories that connect, and designs that last.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg shadow-lg hover:bg-lime-500 transition"
        >
          See My Work
        </motion.button>

        <p className="text-sm text-gray-500 pt-6">
          Design that speaks, edits that move.
        </p>
      </motion.div>

      {/* Right Section (Main Placeholder + Extras) */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 relative flex items-center justify-center z-10"
      >
        {/* Main Product Placeholder */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="translate-x-12 md:translate-x-20 w-72 h-96 md:w-80 md:h-[28rem] rounded-[2rem] bg-gradient-to-b from-lime-500 to-green-900 shadow-2xl"
        />

        {/* Top Right Small Boxes (now floating) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-8 right-8 flex gap-6"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, rotate: -3 }}
            className="w-20 h-32 rounded-2xl bg-gradient-to-b from-lime-400 to-green-700 shadow-lg"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="w-20 h-32 rounded-2xl bg-gradient-to-b from-lime-500 to-green-800 shadow-lg"
          />
        </motion.div>

        {/* Bottom Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 right-6 text-right"
        >
          <h2 className="text-5xl font-extrabold leading-tight uppercase">
            <span className="text-lime-400 text-4xl">YOUR VISION</span> <br />{" "}
            MY CREATION
          </h2>
        </motion.div>
      </motion.div>
    </main>
  );
}
