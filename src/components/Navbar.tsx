"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Studio", href: "#studio" },
  { label: "Works", href: "#works" },
  { label: "News", href: "#news" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4"
    >
      <div className="relative">
        {/* 🔥 Animated Gradient Blob Behind Navbar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 -z-10"
        >
          <motion.div
            animate={{
              borderRadius: [
                "40% 60% 70% 30% / 40% 40% 60% 60%",
                "60% 40% 30% 70% / 50% 60% 40% 50%",
                "30% 70% 60% 40% / 60% 50% 40% 50%",
              ],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-400 to-black opacity-60 blur-2xl"
          />
        </motion.div>

        {/* Glass Navbar */}
        <div
          className={`flex items-center justify-between gap-6 px-6 py-3 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-black/40 backdrop-blur-xl border border-green-500/30 shadow-lg"
              : "bg-transparent"
          }`}
        >
          {/* Logo Pill */}
          <div className="flex items-center gap-2 px-4 py-1 border border-green-500/40 rounded-full bg-white/5 backdrop-blur-md">
            <div className="h-6 w-6 rounded-md bg-green-500 flex items-center justify-center font-bold text-black">
              S
            </div>
            <span className="font-bold text-white text-base">StrangeFx</span>
            <sup className="text-xs text-white/70">®</sup>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 border border-green-500/40 rounded-full bg-white/5 backdrop-blur-md">
            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="px-3 py-1 rounded-full text-sm font-medium text-white/80 hover:bg-green-500/30 hover:text-white transition"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
            className="hidden md:flex items-center gap-2 px-5 py-2 bg-green-500 text-black font-medium rounded-full hover:bg-green-400 transition"
          >
            Connect →
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-green-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 bg-black/40 backdrop-blur-xl border border-green-500/30 rounded-2xl shadow-lg px-6 py-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-white/80 hover:text-green-400"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 bg-green-500 text-black font-medium rounded-full hover:bg-green-400 transition text-center"
              >
                Connect →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
