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
          className="fixed bottom-8 right-8 z-[9999] cursor-pointer"
        >
          <motion.button
            onClick={handleClick}
            whileHover={{
              scale: 1.2,
              boxShadow:
                "0 0 20px rgba(163, 230, 53, 0.9), 0 0 40px rgba(132, 204, 22, 0.8)",
            }}
            whileTap={{ scale: 0.9 }}
            className="
              bg-lime-500 text-black p-5 rounded-full
              shadow-[0_0_20px_rgba(163,230,53,0.9)]
              border border-lime-400
              transition-all
            "
          >
            <FaArrowUp size={24} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
