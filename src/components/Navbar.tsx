"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-8 bg-black text-gray-200 px-8 py-3 rounded-full shadow-lg backdrop-blur-md border border-gray-800">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-md"></div>
          <span className="font-semibold text-white text-lg">CareerVista</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* CTA Button */}
        <button className="ml-auto px-5 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
          <Link href="auth/login">Join Now</Link>
        </button>
      </div>
    </motion.nav>
  );
} 
