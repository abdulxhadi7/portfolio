"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollAnimation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1 1"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="h-[400px] bg-gray-300 rounded-2xl shadow-xl flex items-center justify-center text-2xl font-bold"
    >
      Project Placeholder
    </motion.div>
  );
}
