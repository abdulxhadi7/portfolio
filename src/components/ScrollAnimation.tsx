"use client";
import { motion } from "framer-motion";

export default function ScrollAnimation() {
  return (
    <div className="relative space-y-16 w-full max-w-7xl mx-auto p-6">
      {/* Floating Buttons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-10 left-10 w-10 h-10 rounded-full bg-lime-500/80 shadow-[0_0_20px_rgba(163,230,53,0.7)]"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-1/3 right-16 w-12 h-12 rounded-full bg-green-500/80 shadow-[0_0_20px_rgba(163,230,53,0.7)]"
      />
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-20 left-1/4 w-8 h-8 rounded-full bg-lime-800/80 shadow-[0_0_20px_rgba(163,230,53,0.7)]"
      />
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
        className="absolute bottom-32 right-24 w-10 h-10 rounded-full bg-lime-500/80 shadow-[0_0_20px_rgba(163,230,53,0.7)]"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4.2 }}
        className="absolute top-64 left-64 w-14 h-14 rounded-full bg-green-500/80 shadow-[0_0_20px_rgba(163,230,53,0.7)]"
      />
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 3.8 }}
        className="absolute bottom-10 right-10 w-9 h-9 rounded-full bg-lime-400/80 shadow-[0_0_20px_rgba(163,230,53,0.7)]"
      />

      {/* Box 1 - Thumbnail */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 30px rgba(163, 230, 53, 0.6)",
        }}
        className="w-full h-[400px] flex rounded-2xl overflow-hidden bg-gradient-to-b from-black to-green-950 border border-lime-500 shadow-lg"
      >
        {/* Left text */}
        <div className="w-[280px] bg-black/40 border-r border-lime-500 p-6 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-lime-400 mb-3">Thumbnail</h3>
          <p className="text-gray-300">
            Eye-catching YouTube and social media thumbnails designed to grab
            attention instantly.
          </p>
        </div>
        {/* Right image */}
        <div className="flex-1 bg-gray-800 flex items-center justify-center text-gray-500">
          Image Here
        </div>
      </motion.div>

      {/* Box 2 - Logo Artist */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 30px rgba(163, 230, 53, 0.6)",
        }}
        className="w-full h-[400px] flex flex-row-reverse rounded-2xl overflow-hidden bg-gradient-to-b from-black to-green-950 border border-lime-500 shadow-lg"
      >
        {/* Right text */}
        <div className="w-[280px] bg-black/40 border-l border-lime-500 p-6 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-lime-400 mb-3">Logo Artist</h3>
          <p className="text-gray-300">
            Unique and modern logos crafted to represent your brand identity.
          </p>
        </div>
        {/* Left image */}
        <div className="flex-1 bg-gray-800 flex items-center justify-center text-gray-500">
          Image Here
        </div>
      </motion.div>

      {/* Box 3 - Banners & Posters */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 30px rgba(163, 230, 53, 0.6)",
        }}
        className="w-full h-[400px] flex rounded-2xl overflow-hidden bg-gradient-to-b from-black to-green-950 border border-lime-500 shadow-lg"
      >
        <div className="w-[280px] bg-black/40 border-r border-lime-500 p-6 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-lime-400 mb-3">
            Banners & Posters
          </h3>
          <p className="text-gray-300">
            High-quality banners and posters that communicate your message
            effectively.
          </p>
        </div>
        <div className="flex-1 bg-gray-800 flex items-center justify-center text-gray-500">
          Image Here
        </div>
      </motion.div>

      {/* Box 4 - Shorts Editing */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 30px rgba(163, 230, 53, 0.6)",
        }}
        className="w-full h-[400px] flex flex-row-reverse rounded-2xl overflow-hidden bg-gradient-to-b from-black to-green-950 border border-lime-500 shadow-lg"
      >
        <div className="w-[280px] bg-black/40 border-l border-lime-500 p-6 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-lime-400 mb-3">
            Shorts Editing
          </h3>
          <p className="text-gray-300">
            Fast-paced, engaging editing for YouTube Shorts and TikTok videos.
          </p>
        </div>
        <div className="flex-1 bg-gray-800 flex items-center justify-center text-gray-500">
          Image Here
        </div>
      </motion.div>

      {/* Box 5 - Long Video Editing */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 30px rgba(163, 230, 53, 0.6)",
        }}
        className="w-full h-[400px] flex rounded-2xl overflow-hidden bg-gradient-to-b from-black to-green-950 border border-lime-500 shadow-lg"
      >
        <div className="w-[280px] bg-black/40 border-r border-lime-500 p-6 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-lime-400 mb-3">
            Long Video Editing
          </h3>
          <p className="text-gray-300">
            Professional long-form video editing with smooth cuts and cinematic
            effects.
          </p>
        </div>
        <div className="flex-1 bg-gray-800 flex items-center justify-center text-gray-500">
          Image Here
        </div>
      </motion.div>

      {/* Box 6 - Reel Editing */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 30px rgba(163, 230, 53, 0.6)",
        }}
        className="w-full h-[400px] flex flex-row-reverse rounded-2xl overflow-hidden bg-gradient-to-b from-black to-green-950 border border-lime-500 shadow-lg"
      >
        <div className="w-[280px] bg-black/40 border-l border-lime-500 p-6 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-lime-400 mb-3">
            Reel Editing
          </h3>
          <p className="text-gray-300">
            Trendy and dynamic Instagram Reels editing to boost reach and
            engagement.
          </p>
        </div>
        <div className="flex-1 bg-gray-800 flex items-center justify-center text-gray-500">
          Image Here
        </div>
      </motion.div>
    </div>
  );
}
