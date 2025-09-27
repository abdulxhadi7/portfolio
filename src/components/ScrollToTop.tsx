"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[9999] cursor-pointer"
        >
          <motion.button
            onClick={handleClick}
            whileHover={{
              scale: 1.15,
              boxShadow:
                "0 0 20px rgba(163, 230, 53, 0.8), 0 0 40px rgba(163, 230, 53, 0.7)",
            }}
            whileTap={{ scale: 0.9 }}
            className="
              relative flex items-center justify-center
              bg-gradient-to-br from-lime-400 via-lime-500 to-green-600
              text-black p-4 sm:p-5 rounded-2xl
              shadow-lg border border-lime-300/50
              backdrop-blur-md transition-all
              animate-pulse-slow
            "
          >
            <FaArrowUp className="w-4 h-4 sm:w-6 sm:h-6" />
            {/* Glow ring effect */}
            <span className="absolute inset-0 rounded-2xl bg-lime-400/30 blur-lg animate-ping pointer-events-none" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
