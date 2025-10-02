"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaDiscord, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Plus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-black to-green-950 text-white overflow-hidden">

      {/* Let's Talk Section with Curved Divider */}
      <div className="relative">
        <div className="w-full bg-black/90 py-16 sm:py-24 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-lg sm:text-xl text-gray-400 block mb-2">
              Want to <br /> Start a Project?
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-lime-400 leading-tight">
              {"Let's"} Talk
            </h2>
          </div>
          <div className="flex items-center mt-6 md:mt-0">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 sm:w-10 sm:h-10 text-lime-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Curved Divider */}
        <div className="absolute -bottom-1 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-full h-12 sm:h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#000000"
              fillOpacity="1"
              d="M0,64L80,106.7C160,149,320,235,480,261.3C640,288,800,256,960,234.7C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      {/* Floating Buttons */}
      {[
        "top-6 left-10 sm:top-10 sm:left-40",
        "top-1/3 right-6 sm:top-1/2 sm:right-16",
        "bottom-6 left-1/4 sm:left-1/3",
      ].map((pos, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.2, rotate: 12 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          className={`hidden xs:flex absolute ${pos} z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full ${
            i % 2 === 0 ? "bg-lime-500 text-black" : "bg-green-600 text-white"
          } shadow-lg items-center justify-center`}
        >
          <Plus size={18} />
        </motion.div>
      ))}

      {/* Main Footer Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 py-12 sm:py-20 px-6 sm:px-12 relative z-20 text-center md:text-left"
      >
        {/* About */}
        <div className="space-y-4 md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-lime-400">StrangeFx</h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-md leading-relaxed mx-auto md:mx-0">
            Crafting designs that inspire, visuals that connect, and edits that
            leave a lasting impact. Let’s bring your vision to life with modern
            creativity.
          </p>
        </div>

        {/* Contact (Stacked Buttons) */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <h2 className="text-xl sm:text-2xl font-bold text-lime-400">Contact</h2>
          <a
            href="https://wa.me/917389110335"
            target="_blank"
            className="w-full sm:w-48 flex items-center justify-center gap-2 bg-lime-500 text-black font-semibold px-4 sm:px-5 py-2 rounded-lg shadow-md hover:bg-lime-600 transition text-sm sm:text-base"
          >
            <FaWhatsapp size={18} /> WhatsApp
          </a>
          <a
            href="mailto:abdulxhadi7@gmail.com"
            className="w-full sm:w-48 flex items-center justify-center gap-2 bg-lime-500 text-black font-semibold px-4 sm:px-5 py-2 rounded-lg shadow-md hover:bg-lime-600 transition text-sm sm:text-base"
          >
            <FaEnvelope size={18} /> Email
          </a>
        </div>

        {/* Social */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <h2 className="text-xl sm:text-2xl font-bold text-lime-400">Follow Me</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
            <a href="https://instagram.com/strangefx" target="_blank" className="hover:text-pink-500 transition-transform hover:scale-110">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com/strangefx" target="_blank" className="hover:text-sky-400 transition-transform hover:scale-110">
              <FaTwitter size={24} />
            </a>
            <a href="https://discord.com/users/strangexyzz" target="_blank" className="hover:text-purple-400 transition-transform hover:scale-110">
              <FaDiscord size={24} />
            </a>
          </div>
          <a href="https://discord.gg/your-server-link" target="_blank" className="block text-xs sm:text-sm text-gray-400 hover:text-purple-400 transition mt-1">
            Server: Strange Zone
          </a>
        </div>
      </motion.div>

      {/* Bottom Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-10 sm:mt-12 border-t border-gray-700 pt-4 sm:pt-6 text-center text-gray-400 text-xs sm:text-sm relative z-20"
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-4 max-w-6xl mx-auto pb-4">
          <span>
            <a href="mailto:abdulxhadi7@gmail.com" className="hover:text-lime-400 transition">
              abdulxhadi7@gmail.com
            </a>
          </span>
          <p>© {new Date().getFullYear()} StrangeFx · All Rights Reserved.</p>
          <span>
            Phone:{" "}
            <a href="tel:+917389110335" className="hover:text-lime-400 transition">
              +91 7389110335
            </a>
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
