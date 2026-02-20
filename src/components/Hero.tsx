"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Palette, Video, Code, Megaphone } from "lucide-react";
import type { ReactNode } from "react";

type ServiceKey =
  | "Graphic Design"
  | "Video Editing"
  | "Shorts & Reels"
  | "Web Development"
  | "3D Motion"
  | "Digital Marketing";

const services: Record<ServiceKey, string> = {
  "Graphic Design":
    "Branding, logos and visual identities designed to stand out.",
  "Video Editing":
    "Cinematic edits, reels and storytelling that capture attention.",
  "Shorts & Reels":
    "High-performing vertical content optimized for social platforms.",
  "Web Development":
    "Modern, fast and scalable websites built to perform.",
  "3D Motion":
    "Dynamic 3D visuals and motion graphics that elevate brands.",
  "Digital Marketing":
    "Strategies that grow reach, engagement and conversions.",
};

export default function Hero() {
  const [activeService, setActiveService] = useState<ServiceKey | null>(null);
  const [mounted, setMounted] = useState(false);

  // ⏳ Wait for preloader to finish
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 4600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-20 relative min-h-screen w-full overflow-hidden bg-black text-white flex items-center">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Turning ideas
            <br />
            into
            <span className="text-lime-400"> digital impact.</span>
          </h1>

          <p className="mt-8 text-white/60 text-lg max-w-xl mx-auto lg:mx-0">
            Graphic design, cinematic video editing, modern websites and
            digital marketing — crafted to convert.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/#services">
              <button className="px-8 py-4 rounded-full bg-lime-400 text-black font-medium text-lg hover:scale-105 transition">
                View Work
              </button>
            </Link>

            <Link href="/connect">
              <button className="px-8 py-4 rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition">
                Start a Project
              </button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start text-sm">
            {(Object.keys(services) as ServiceKey[]).map((s) => (
              <button
                key={s}
                onClick={() => setActiveService(s)}
                className="px-4 py-2 rounded-full 
                  bg-white/5 border border-white/10 text-white/60
                  hover:bg-lime-400/20 hover:text-lime-300
                  transition"
              >
                {s}
              </button>
            ))}
          </div>

          {activeService && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 max-w-md rounded-2xl bg-black border border-white/10 p-6"
            >
              <h3 className="text-lime-400 text-lg font-semibold">
                {activeService}
              </h3>
              <p className="text-white/70 text-sm mt-2">
                {services[activeService]}
              </p>

              <div className="mt-4 flex justify-end gap-3">
                <button
                  onClick={() => setActiveService(null)}
                  className="text-white/50 hover:text-white text-sm"
                >
                  Close
                </button>

                <Link href="/#work">
                  <button className="px-4 py-2 rounded-full bg-lime-400 text-black text-sm">
                    Explore More
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* ================= RIGHT SIDE ================= */}
        <motion.div
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.15,
              },
            },
          }}
          className="relative flex justify-center"
        >
          {/* Main Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.92 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.04 }}
            className="relative w-[320px] h-[460px] rounded-[3rem] overflow-hidden border border-white/10"
          >
            <Image
              src="/images/f2.webp"
              alt="Creative Visual"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="absolute -top-8 right-4 flex gap-4"
          >
            <FloatingCard icon={<Code size={20} />} title="Web Development" desc="Modern scalable websites." />
            <FloatingCard icon={<Megaphone size={20} />} title="Digital Marketing" desc="Growth strategies that convert." dark />
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="absolute -left-10 top-20"
          >
            <FloatingCard icon={<Palette size={22} />} title="Graphic Design" desc="Visual identities that stand out." />
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="absolute -right-10 bottom-20"
          >
            <FloatingCard icon={<Video size={22} />} title="Video Editing" desc="Cinematic edits & reels." dark align="right" />
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="absolute -bottom-6 right-4 text-right"
          >
            <h2 className="text-3xl font-extrabold uppercase leading-tight pb-6">
              <span className="text-lime-500">YOUR VISION</span>
              <br />
              MY CREATION
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= FLOATING CARD ================= */

interface FloatingCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  dark?: boolean;
  align?: "left" | "right";
}

function FloatingCard({
  icon,
  title,
  desc,
  dark = false,
  align = "left",
}: FloatingCardProps) {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
      className={`group relative w-20 h-36 rounded-2xl 
        ${dark ? "bg-gradient-to-b from-green-500 to-green-900" : "bg-gradient-to-b from-lime-400 to-green-700"}
        flex items-center justify-center cursor-pointer`}
    >
      {icon}

      <div
        className={`absolute ${
          align === "right" ? "right-24 text-right" : "left-24"
        } w-56 p-4 rounded-xl bg-black/90 border border-white/10
        opacity-0 group-hover:opacity-100 transition`}
      >
        <h3 className="text-lime-400 text-sm font-semibold">{title}</h3>
        <p className="text-white/60 text-xs mt-1">{desc}</p>
      </div>
    </motion.div>
  );
}