"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    // Animate fill rising to the top
    controls.start({
      y: ["100%", "0%"],
      transition: { duration: 3.5, ease: "easeInOut" },
    });

    const timer = setTimeout(() => setIsVisible(false), 4500);
    return () => clearTimeout(timer);
  }, [controls]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4, duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center bg-black z-[9999]"
    >
      {/* Outer green rounded square */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-28 h-28 rounded-2xl bg-[#00FF66]/10 flex items-center justify-center overflow-hidden shadow-2xl"
      >
        {/* Full box green fill */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full bg-[#00FF66] rounded-2xl shadow-[0_0_30px_#00FF66]"
          animate={controls}
        />

        {/* Floating wave effect on top for realism */}
        <motion.svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full opacity-60 mix-blend-overlay"
          animate={{
            y: ["0%", "-5%", "0%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "easeInOut",
          }}
        >
          <path
            d="M0 60 Q25 55 50 60 T100 60 V100 H0 Z"
            fill="#00FF66"
          />
        </motion.svg>

        {/* “S” logo text */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-black font-extrabold text-5xl z-10 select-none"
        >
          S
        </motion.span>

        {/* Soft outer glow */}
        <div className="absolute inset-0 rounded-2xl bg-green-500/30 blur-2xl"></div>
      </motion.div>
    </motion.div>
  );
}
