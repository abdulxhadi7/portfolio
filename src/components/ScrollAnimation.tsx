"use client";
import { motion } from "framer-motion";

export default function ScrollAnimation() {
  return (
    <div className="relative space-y-16 w-full max-w-7xl mx-auto p-4 sm:p-6">
      {/* Floating Buttons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-10 left-4 sm:left-10 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-lime-500/80 shadow-[0_0_20px_rgba(163,230,53,0.7)]"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-1/3 right-6 sm:right-16 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-green-500/80 shadow-[0_0_20px_rgba(163,230,53,0.7)]"
      />
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-20 left-1/4 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-lime-800/80 shadow-[0_0_20px_rgba(163,230,53,0.7)]"
      />
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
        className="absolute bottom-32 right-8 sm:right-24 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-lime-500/80 shadow-[0_0_20px_rgba(163,230,53,0.7)]"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4.2 }}
        className="absolute top-64 left-10 sm:left-64 w-10 sm:w-14 h-10 sm:h-14 rounded-full bg-green-500/80 shadow-[0_0_20px_rgba(163,230,53,0.7)]"
      />
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 3.8 }}
        className="absolute bottom-10 right-6 sm:right-10 w-7 sm:w-9 h-7 sm:h-9 rounded-full bg-lime-400/80 shadow-[0_0_20px_rgba(163,230,53,0.7)]"
      />

      {/* Reusable Box */}
      {[
        { title: "Thumbnail", text: "Eye-catching YouTube and social media thumbnails designed to grab attention instantly.", reverse: false },
        { title: "Logo Artist", text: "Unique and modern logos crafted to represent your brand identity.", reverse: true },
        { title: "Banners & Posters", text: "High-quality banners and posters that communicate your message effectively.", reverse: false },
        { title: "Shorts Editing", text: "Fast-paced, engaging editing for YouTube Shorts and TikTok videos.", reverse: true },
        { title: "Long Video Editing", text: "Professional long-form video editing with smooth cuts and cinematic effects.", reverse: false },
        { title: "Reel Editing", text: "Trendy and dynamic Instagram Reels editing to boost reach and engagement.", reverse: true },
      ].map((box, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: box.reverse ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 30px rgba(163, 230, 53, 0.6)",
          }}
          className={`w-full min-h-[280px] sm:h-[400px] flex flex-col ${
            box.reverse ? "sm:flex-row-reverse" : "sm:flex-row"
          } rounded-2xl overflow-hidden bg-gradient-to-b from-black to-green-950 border border-lime-500 shadow-lg`}
        >
          {/* Text Section */}
          <div className="w-full sm:w-[280px] bg-black/40 border-t sm:border-t-0 sm:border-r sm:border-lime-500 p-6 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-lime-400 mb-3">
              {box.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">{box.text}</p>
          </div>
          {/* Image Placeholder */}
          <div className="flex-1 bg-gray-800 flex items-center justify-center text-gray-500 text-sm sm:text-base">
            Image Here
          </div>
        </motion.div>
      ))}
    </div>
  );
}
