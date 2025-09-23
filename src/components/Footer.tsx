"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaDiscord, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 px-6 border-t border-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
          <a
            href="mailto:abdulxhadi7@gmail.com"
            className="hover:text-pink-500 transition-colors"
          >
            abdulxhadi7@gmail.com
          </a>
          <a
            href="https://wa.me/your-number-here"
            target="_blank"
            className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            <FaWhatsapp size={20} /> WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <h2 className="text-2xl font-bold mb-2">Follow Me</h2>
          <div className="flex space-x-6">
            <a
              href="https://instagram.com/strangefx"
              target="_blank"
              className="hover:text-pink-500 transition-transform hover:scale-110"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://twitter.com/strangefx"
              target="_blank"
              className="hover:text-blue-400 transition-transform hover:scale-110"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://discord.com/users/strangexyzz"
              target="_blank"
              className="hover:text-purple-400 transition-transform hover:scale-110"
            >
              <FaDiscord size={28} />
            </a>
            <a
              href="https://discord.gg/your-server-link"
              target="_blank"
              className="hover:text-purple-500 transition-transform hover:scale-110"
            >
              Server: Strange Zone
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-center text-gray-400 text-sm w-full"
      >
        © {new Date().getFullYear()} Abdul Xhadi. All rights reserved.
      </motion.div>
    </footer>
  );
}
