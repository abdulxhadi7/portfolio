"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">

      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 -z-20 bg-black" />

      {/* Gradient Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.08),transparent_40%)]" />

      {/* Floating Glow Orbs */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-10 left-10 w-40 h-40 bg-lime-500/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-52 h-52 bg-green-500/20 blur-3xl rounded-full"
      />

      {/* ================= PREMIUM CTA ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          Let’s Build Something
          <br />
          <span className="text-lime-400">Extraordinary</span>
        </h2>

        <p className="mt-6 text-white/60 max-w-2xl mx-auto">
          Whether it’s branding, cinematic edits, or high-performing websites —
          I turn your vision into impactful digital experiences.
        </p>

        <motion.a
          href="/connect"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-10 px-10 py-4 rounded-full bg-lime-400 text-black font-semibold text-lg shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_rgba(34,197,94,0.7)] transition"
        >
          Start a Project
        </motion.a>
      </motion.div>

      {/* ================= GLASS FOOTER GRID ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_0_60px_rgba(34,197,94,0.05)]">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-lime-400">StrangeFx</h3>
            <p className="mt-4 text-white/60 leading-relaxed">
              Crafting visuals that inspire, websites that convert,
              and edits that leave a lasting impact.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-lime-400">
              Contact
            </h3>

            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/917389110335"
                target="_blank"
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-lime-400 text-black font-medium hover:scale-105 transition"
              >
                <FaWhatsapp /> WhatsApp
              </a>

              <a
                href="mailto:abdulxhadi7@gmail.com"
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition"
              >
                <FaEnvelope /> Email
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-lime-400">
              Follow Me
            </h3>

            <div className="flex gap-6 text-2xl">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 8 }}
                href="https://instagram.com/strangefx"
                target="_blank"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, rotate: -8 }}
                href="https://twitter.com/strangefx"
                target="_blank"
                className="hover:text-sky-400 transition"
              >
                <FaTwitter />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, rotate: 8 }}
                href="https://discord.com/users/strangexyzz"
                target="_blank"
                className="hover:text-purple-400 transition"
              >
                <FaDiscord />
              </motion.a>
            </div>

            <p className="mt-6 text-sm text-white/40">
              Join the community · Strange Zone
            </p>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} StrangeFx · All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
