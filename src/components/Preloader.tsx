"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  const fillControls = useAnimation();
  const logoControls = useAnimation();
  const containerControls = useAnimation();

  useEffect(() => {
    async function sequence() {

      // STEP 1 — Fast fill (loading)
      await fillControls.start({
        y: ["100%", "0%"],
        transition: {
          duration: 1.2,
          ease: [0.83, 0, 0.17, 1],
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 300));

      // STEP 2 — Move to navbar center (top)
      await logoControls.start({
        y: -window.innerHeight / 2 + 80,
        scale: 0.65,
        transition: {
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 200));

      // STEP 3 — Move left into navbar logo position
      await logoControls.start({
        x: -window.innerWidth / 2 + 120,
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 200));

      // STEP 4 — Fade out preloader
      await containerControls.start({
        opacity: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      });

      setIsVisible(false);
    }

    sequence();
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      animate={containerControls}
      initial={{ opacity: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-[9999]"
    >
      <motion.div
        animate={logoControls}
        initial={{ scale: 0.9, opacity: 0, x: 0, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-28 h-28 rounded-2xl bg-[#00FF66]/10 flex items-center justify-center overflow-hidden shadow-2xl"
      >
        {/* Fill Animation */}
        <motion.div
          animate={fillControls}
          initial={{ y: "100%" }}
          className="absolute bottom-0 left-0 w-full h-full bg-[#00FF66] rounded-2xl shadow-[0_0_30px_#00FF66]"
        />

        {/* Wave Effect */}
        <motion.svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full opacity-60 mix-blend-overlay"
          animate={{ y: ["0%", "-6%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <path
            d="M0 60 Q25 55 50 60 T100 60 V100 H0 Z"
            fill="#00FF66"
          />
        </motion.svg>

        {/* Logo */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="text-black font-extrabold text-5xl z-10 select-none"
        >
          S
        </motion.span>

        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl bg-green-500/30 blur-2xl"></div>
      </motion.div>
    </motion.div>
  );
}