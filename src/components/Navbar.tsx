"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-8 bg-gradient-to-br from-green-900 via-black to-green-900 text-gray-200 px-8 py-3 rounded-full shadow-lg backdrop-blur-md border border-gray-800">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-gradient-to-tr from-green-500 to-green-900 rounded-md"></div>
          <span className="font-semibold text-white text-lg">StrangeFx</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative font-medium text-gray-300"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
          className="ml-auto px-5 py-2 bg-lime-400 text-black font-medium rounded-full hover:bg-gray-200 transition"
        >
          <Link href="auth/login">Contact</Link>
        </motion.button>
      </div>
    </motion.nav>
  );
}
