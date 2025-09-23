"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold mb-6 text-center"
      >
        Creative Designer & Editor
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl text-gray-300 text-center"
      >
        I design visuals that speak louder than words.
      </motion.p>
    </section>
  );
}
