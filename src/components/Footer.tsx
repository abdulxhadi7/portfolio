"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { Plus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-black to-green-950 text-white py-16 px-8 overflow-hidden">
      {/* Floating Buttons */}
      {[
        "top-10 left-40",
        "top-1/2 right-16",
        "bottom-6 left-1/3",
      ].map((pos, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.2, rotate: 12 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${pos} z-10 w-12 h-12 rounded-full ${
            i % 2 === 0 ? "bg-lime-500 text-black" : "bg-green-600 text-white"
          } shadow-lg flex items-center justify-center`}
        >
          <Plus size={20} />
        </motion.div>
      ))}

      {/* Main Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left relative z-20"
      >
        {/* About */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-lime-400">StrangeFx</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Crafting designs that inspire, visuals that connect, and edits that
            leave a lasting impact. Let’s bring your vision to life with modern
            creativity.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-lime-400">Contact</h2>
          <a
            href="mailto:abdulxhadi7@gmail.com"
            className="block hover:text-lime-400 transition-colors"
          >
            abdulxhadi7@gmail.com
          </a>
          <a
            href="https://wa.me/your-number-here"
            target="_blank"
            className="inline-flex items-center gap-2 bg-lime-500 text-black font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-lime-600 transition"
          >
            <FaWhatsapp size={18} /> WhatsApp
          </a>
        </div>

        {/* Social */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-lime-400">Follow Me</h2>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://instagram.com/strangefx"
              target="_blank"
              className="hover:text-pink-500 transition-transform hover:scale-110"
            >
              <FaInstagram size={26} />
            </a>
            <a
              href="https://twitter.com/strangefx"
              target="_blank"
              className="hover:text-sky-400 transition-transform hover:scale-110"
            >
              <FaTwitter size={26} />
            </a>
            <a
              href="https://discord.com/users/strangexyzz"
              target="_blank"
              className="hover:text-purple-400 transition-transform hover:scale-110"
            >
              <FaDiscord size={26} />
            </a>
          </div>
          <a
            href="https://discord.gg/your-server-link"
            target="_blank"
            className="block text-sm text-gray-400 hover:text-purple-400 transition"
          >
            Server: Strange Zone
          </a>
        </div>
      </motion.div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm relative z-20"
      >
        © {new Date().getFullYear()} Abdul Xhadi · All Rights Reserved.
      </motion.div>
    </footer>
  );
}
