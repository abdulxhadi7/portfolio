"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Play, X, ChevronUp, ChevronDown } from "lucide-react";

export default function ThumbnailGrid() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  const getVideoId = (url: string) =>
    url.split("/shorts/")[1]?.split("?")[0] ?? "";

  const getThumb = (url: string) =>
    `https://img.youtube.com/vi/${getVideoId(url)}/hqdefault.jpg`;

  const nextVideo = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev! + 1 < shorts.length ? prev! + 1 : 0
    );
  };

  const prevVideo = () => {
    if (activeIndex === null) return;
    setActiveIndex((prev) =>
      prev! - 1 >= 0 ? prev! - 1 : shorts.length - 1
    );
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-green-900/40 to-black text-white px-6 py-16 overflow-hidden">

      {/* Soft Green Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)] pointer-events-none" />

      {/* GRID */}
      <div
        className="relative z-10 grid gap-6"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
        }}
      >
        {shorts.map((url, i) => (
          <motion.div
            key={i}
            className="group relative rounded-3xl overflow-hidden cursor-pointer bg-gray-900/70 backdrop-blur-md border border-green-800/30 shadow-lg shadow-green-900/30 aspect-[9/16]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            onClick={() => setActiveIndex(i)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${getThumb(url)})` }}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <Play size={50} className="text-white group-hover:text-green-400" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL PLAYER */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-b from-black via-green-950/90 to-black z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-md aspect-[9/16]">

              {/* Close */}
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-4 right-4 z-50 bg-black/60 p-2 rounded-full border border-green-700"
              >
                <X size={20} />
              </button>

              {/* Swipe Container */}
              <motion.div
                key={activeIndex}
                className="w-full h-full"
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.y < -100) nextVideo();
                  if (info.offset.y > 100) prevVideo();
                }}
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -300, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <iframe
                  className="w-full h-full rounded-2xl shadow-2xl shadow-green-900/50"
                  src={`https://www.youtube.com/embed/${getVideoId(
                    shorts[activeIndex]
                  )}?autoplay=1&rel=0`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </motion.div>

              {/* Arrows */}
              <button
                onClick={prevVideo}
                className="absolute left-1/2 -translate-x-1/2 top-4 bg-black/60 p-2 rounded-full border border-green-700"
              >
                <ChevronUp size={24} />
              </button>

              <button
                onClick={nextVideo}
                className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-black/60 p-2 rounded-full border border-green-700"
              >
                <ChevronDown size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Go Back */}
      <button
        onClick={() => router.push("/#work")}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-green-600/90 hover:bg-green-500 rounded-2xl font-medium transition z-40 shadow-lg shadow-green-900/40"
      >
        Go Back
      </button>
    </section>
  );
}
