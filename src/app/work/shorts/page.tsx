"use client";

import { motion, easeOut } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import { Play } from "lucide-react";

export default function ThumbnailGrid() {
  const router = useRouter();

  const shorts = [
    "https://www.youtube.com/shorts/0VXu3LmnZhI",
    "https://www.youtube.com/shorts/z36VRSZn4A8",
    "https://www.youtube.com/shorts/DBI-N1apryI",
    "https://youtube.com/shorts/RYjTrrAR6S0?si=2r-5sK2CXgk1l4Wi",
    "https://youtube.com/shorts/DA7kbslk6eM?si=0Stmxj4I3f43Edr8",
    "https://www.youtube.com/shorts/sIP5fU5Xk-M",
    "https://www.youtube.com/shorts/segt04_TAGc",
    "https://www.youtube.com/shorts/nSIivaP5icY",
    "https://www.youtube.com/shorts/j14QjNU2IGc",
    "https://youtube.com/shorts/V_JJUFSVYo0?si=itP0bjW6koSwtt1c",
    "https://youtube.com/shorts/BBsDRf-Mt0U?si=0HVNRsyQerbxki0N",
    "https://www.youtube.com/shorts/TrtknXt_pkc",
    "https://youtube.com/shorts/lpKpiS3q9K4?si=0BFw-rI5i5dNHTXk",
    "https://www.youtube.com/shorts/DVaQTDfHS1M",
    "https://www.youtube.com/shorts/VoyP6Op2rYk",
    "https://youtube.com/shorts/jcLvpnhq3O8?si=vJ9comaE0Bm0pqg6",
    "https://www.youtube.com/shorts/PFXfRBciRSw",
    "https://www.youtube.com/shorts/QbkzTMWeFEo",
    "https://youtube.com/shorts/g8wYYgBeWMo?si=6RJhnQdx3TU57jql",
    "https://www.youtube.com/shorts/_gg_a-Q29rg",
    "https://www.youtube.com/shorts/DEdp2DlLHqk",
    "https://www.youtube.com/shorts/6I1sQwHBPm0",
    "https://www.youtube.com/shorts/_89VtPVXVEg",
    "https://www.youtube.com/shorts/dw3D80WWAjg",
    "https://www.youtube.com/shorts/0RiPkM1TCpA",
    "https://www.youtube.com/shorts/Bt2YdH9o4g8",
    "https://www.youtube.com/shorts/cSIjDr07l_A",
    "https://www.youtube.com/shorts/cSQcWs5fWX8",
    "https://www.youtube.com/shorts/9a-lhyus2bM",
    "https://www.youtube.com/shorts/ZbD-rAXUr-k",
    "https://www.youtube.com/shorts/rUESZchDxow",
    "https://www.youtube.com/shorts/0mf_PrjrE8Q",
    "https://www.youtube.com/shorts/kY2VuGohMQI",
    "https://www.youtube.com/shorts/2GWwiODknsE",
    "https://www.youtube.com/shorts/B5-k23vjT3E",
    "https://www.youtube.com/shorts/vTbXa5E1pOk",
    "https://www.youtube.com/shorts/yM4lG2mUGw4",
    "https://www.youtube.com/shorts/DByyg-eiixg",
    "https://youtube.com/shorts/LM80jHMUpvw?si=SUGWvsEIsXy4aKzx",
    "https://www.youtube.com/shorts/bujjzIUJHXo",
    "https://www.youtube.com/shorts/DkOdXxqVopo",
    "https://www.youtube.com/shorts/wQIv7Mg1LuI",
    "https://www.youtube.com/shorts/2_WKmNVfQN8",
    "https://www.youtube.com/shorts/c54BGY-zsPE",
    "https://www.youtube.com/shorts/G7hrrmvtFxE",
    
  ];

  // Extract clean Shorts ID
  const getThumb = (url: string) => {
    let id = "";
    if (url.includes("/shorts/")) {
      id = url.split("/shorts/")[1].split("?")[0];
    }
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  };

  const fadeZoomVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.6, ease: easeOut },
    }),
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-green-900/45 to-black text-white px-4 sm:px-8 md:px-12 py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15),transparent_70%)] pointer-events-none" />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="max-w-2xl mx-auto text-center mb-16 relative z-10"
      >
        <span className="text-green-400 font-semibold tracking-[0.15em] uppercase">
          Showcase
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-3 mb-6 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
          Our Creative Works
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
          Dive into our world of design and innovation — each piece tells a story of creativity and passion.
        </p>
      </motion.div>

      {/* Grid */}
      <div
        className="grid gap-5 sm:gap-7 md:gap-8 relative z-10"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
        }}
      >
        {shorts.map((url, i) => (
          <motion.div
            key={i}
            className="
              group relative rounded-3xl overflow-hidden shadow-lg 
              shadow-green-900/20 cursor-pointer bg-gray-900 
              aspect-[9/16]                      /* ⭐ TRUE SHORTS RATIO */
            "
            variants={fadeZoomVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            whileHover={{ scale: 1.03, rotate: 0.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => router.push(url)}
          >
            {/* Thumbnail */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out 
                group-hover:scale-110 group-hover:brightness-110"
              style={{ backgroundImage: `url(${getThumb(url)})` }}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <Play
                  size={50}
                  className="text-white group-hover:text-green-400 transition"
                />
                <p className="text-sm mt-3 text-gray-200">Watch Now</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Go Back Button */}
      <button
        onClick={() => router.push("/")}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-green-600/90 
        hover:bg-green-500 rounded-2xl font-medium text-white transition-all 
        duration-300 hover:scale-105 z-50 shadow-lg"
      >
        Go Back
      </button>
    </section>
  );
}
