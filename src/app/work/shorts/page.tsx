"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

/* -------------------- TYPES -------------------- */

interface Folder {
  name: string;
  description: string;
  thumbnail: string;
  links: string[];
}

interface ActiveVideo {
  links: string[];
  index: number;
}

/* -------------------- PAGE -------------------- */

export default function ShortsPage() {
  const router = useRouter();
  const [selectedFolder, setSelectedFolder] = useState<Folder | null>(null);
  const [activeVideo, setActiveVideo] = useState<ActiveVideo | null>(null);

  /* -------------------- ALL LINKS -------------------- */

  const gamingLinks: string[] = [
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

  const informative: string[] = [
    "https://youtube.com/shorts/4JmmGBfU9mQ?feature=share",
    "https://youtube.com/shorts/oEiS3ZnR1iE?feature=share",
    "https://youtube.com/shorts/rdADGxSIsMc?feature=share",
    "https://youtube.com/shorts/TeRh_GpVAaQ?feature=share",
    "https://youtube.com/shorts/swvZjsSF-8M?feature=share",
    "https://youtube.com/shorts/Cz1Mnaq6cDI?feature=share",
  ];

  const re: string[] = [
    "https://youtube.com/shorts/rdADGxSIsMc?feature=share",
    "https://youtube.com/shorts/KdABpsFCzJo?feature=share",
    "https://youtube.com/shorts/vo5iicTA-vE?feature=share",
    "https://youtube.com/shorts/swvZjsSF-8M?feature=share",
  ];

  const th: string[] = [
    "https://youtube.com/shorts/4JmmGBfU9mQ?feature=share",
    "https://youtube.com/shorts/-KaOisexxlk?feature=share",
    "https://youtube.com/shorts/Wve4CMaMOs4?feature=share",
    "https://youtube.com/shorts/oEiS3ZnR1iE?feature=share",
    "https://youtube.com/shorts/vo5iicTA-vE?feature=share",
  ];

  const edu: string[] = [
    "https://youtube.com/shorts/DTE07hNovRE?feature=share",
    "https://youtube.com/shorts/Fa_mEjtyfXU?feature=share",
    "https://youtube.com/shorts/MLCz8y-jBio?feature=share",
  ];

  const others: string[] = [
    "https://youtube.com/shorts/JjWTVPjnxmo?feature=share",
  ];

  /* -------------------- FOLDERS -------------------- */

  const folders: Folder[] = [
    {
      name: "Gaming",
      description: "High energy gaming edits and shorts.",
      thumbnail: "https://img.youtube.com/vi/0VXu3LmnZhI/hqdefault.jpg",
      links: gamingLinks,
    },
    {
      name: "Informative",
      description: "Educational & knowledge based content.",
      thumbnail: "/thumbnails/informative.jpg",
      links: informative,
    },
    {
      name: "Real Estate",
      description: "Property showcases and walkthrough edits.",
      thumbnail: "/thumbnails/realestate.jpg",
      links: re,
    },
    {
      name: "Talking Head",
      description: "Facecam & personal branding edits.",
      thumbnail: "/thumbnails/talking.jpg",
      links: th,
    },
    {
      name: "Educational",
      description: "Learning focused visual content.",
      thumbnail: "/thumbnails/education.jpg",
      links: edu,
    },
    {
      name: "Others",
      description: "Creative experimental edits.",
      thumbnail: "/thumbnails/others.jpg",
      links: others,
    },
  ];

  const getVideoId = (url: string) =>
    url.split("/shorts/")[1]?.split("?")[0] ?? "";

  /* -------------------- SWIPE HANDLER -------------------- */

  const handleSwipe = (_: any, info: any) => {
    if (!activeVideo) return;

    if (info.offset.y < -80 && activeVideo.index < activeVideo.links.length - 1) {
      setActiveVideo({ ...activeVideo, index: activeVideo.index + 1 });
    }

    if (info.offset.y > 80 && activeVideo.index > 0) {
      setActiveVideo({ ...activeVideo, index: activeVideo.index - 1 });
    }
  };

  /* -------------------- UI -------------------- */

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white px-6 py-20 overflow-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Short Form Portfolio
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Explore categorized short-form edits crafted for different industries.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-10">
        {folders.map((folder) => (
          <motion.div
            key={folder.name}
            onClick={() => setSelectedFolder(folder)}
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="cursor-pointer rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
          >
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${folder.thumbnail})` }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                {folder.name}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                {folder.description}
              </p>
              <span className="text-xs bg-green-500/20 text-green-400 px-4 py-1 rounded-full">
                {folder.links.length} Videos
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOLDER VIEW */}
      <AnimatePresence>
        {selectedFolder && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 overflow-y-auto px-6 py-24"
          >
            <button
              onClick={() => setSelectedFolder(null)}
              className="fixed top-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:bg-white/20 transition"
            >
              ← Back
            </button>

            <h2 className="text-4xl font-bold text-center mb-12">
              {selectedFolder.name}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {selectedFolder.links.map((url, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() =>
                    setActiveVideo({
                      links: selectedFolder.links,
                      index: i,
                    })
                  }
                  className="rounded-2xl overflow-hidden cursor-pointer shadow-xl"
                >
                  <div
                    className="aspect-[3/4] bg-cover bg-center"
                    style={{
                      backgroundImage: `url(https://img.youtube.com/vi/${getVideoId(
                        url
                      )}/hqdefault.jpg)`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center"
          >
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={handleSwipe}
              className="relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_0_120px_rgba(0,255,160,0.2)]"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-50 bg-black/60 p-2 rounded-full"
              >
                <X size={20} />
              </button>

              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${getVideoId(
                  activeVideo.links[activeVideo.index]
                )}?autoplay=1&rel=0`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GLOBAL BACK */}
      <button
        onClick={() => router.push("/#work")}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:bg-white/20 transition shadow-lg"
      >
        ← Back to Work
      </button>
    </section>
  );
}
