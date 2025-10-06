"use client";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import { motion, AnimatePresence } from "framer-motion";

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </>
  );
}
