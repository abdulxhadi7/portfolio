"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4"
    >
      <div className="flex items-center gap-8 bg-gradient-to-br from-green-900 via-black to-green-900 text-gray-200 px-6 py-3 rounded-full shadow-lg backdrop-blur-md border border-gray-800">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-gradient-to-tr from-green-500 to-green-900 rounded-md"></div>
          <span className="font-semibold text-white text-lg">StrangeFx</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center px-46 gap-6 text-sm ">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative font-bold text-gray-300"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
          className="hidden md:block ml-auto px-5 py-2 bg-lime-400 text-black font-medium rounded-full hover:bg-gray-200 transition"
        >
          <Link href="auth/login">Contact</Link>
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto text-gray-200 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 bg-gradient-to-br from-green-900 via-black to-green-900 text-gray-200 rounded-2xl shadow-lg border border-gray-800 px-6 py-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-medium text-gray-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="auth/login"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 bg-lime-400 text-black font-medium rounded-full hover:bg-gray-200 transition text-center"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
