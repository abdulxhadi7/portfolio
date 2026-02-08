"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Thumbnail",
    description:
      "Eye-catching YouTube and social media thumbnails designed to grab instant attention.",
    img: "/images/thumbnail.webp",
    href: "/work/thumbnails",
  },
  {
    title: "Logo Artist",
    description:
      "Unique and modern logos crafted to elevate your brand identity.",
    img: "/images/logo.webp",
    href: "/work/logos",
  },
  {
    title: "Banners & Posters",
    description:
      "Premium posters and banners that communicate your message visually.",
    img: "/images/banner.webp",
    href: "/work/youtube-banners",
  },
  {
    title: "Shorts Editing",
    description:
      "Fast-paced, engaging edits for YouTube Shorts and TikTok.",
    img: "/images/shorts.webp",
    href: "/work/shorts",
  },
  {
    title: "Long Video Editing",
    description:
      "Cinematic long-form editing with clean cuts, pacing, and story flow.",
    img: "/images/long.webp",
    href: "/work/shorts",
  },
  {
    title: "Reel Editing",
    description:
      "Trendy Instagram Reels that boost reach and engagement.",
    img: "/images/reels.webp",
    href: "/work/shorts",
  },
];

export default function ServicesSection() {
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const globalX = useMotionValue(0);

  const translate = useTransform(globalX, (v) => {
    if (!containerRef.current || !trackRef.current) return 0;

    const containerWidth = containerRef.current.offsetWidth;
    const trackWidth = trackRef.current.scrollWidth;
    const maxTranslate = trackWidth - containerWidth;

    return -v * maxTranslate;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || window.innerWidth < 1024) return;

    const rect = containerRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;

    globalX.set(Math.min(Math.max(pos, 0), 1));
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* ================= DESKTOP ================= */}
      <section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full h-screen bg-black overflow-hidden hidden lg:block"
      >
        <motion.div
          ref={trackRef}
          style={{ x: translate }}
          className="flex h-full w-max"
        >
          {services.map((s, i) => {
            const isFirst = i === 0;

            return (
              <motion.div
                key={i}
                whileHover="hover"
                initial="initial"
                onClick={() => router.push(s.href)}
                className={`group relative flex flex-col justify-between px-12 py-20 
                  border-r border-white/10 overflow-hidden cursor-pointer
                  ${isFirst ? "sticky left-0 z-20 bg-black" : "bg-black"}
                `}
                style={{
                  width: isFirst ? 420 : 380,
                }}
              >
                {/* BG IMAGE */}
                <motion.div
                  variants={{
                    initial: { opacity: 0.05 },
                    hover: { opacity: 0.6 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 z-0"
                >
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </motion.div>

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col justify-center h-full -translate-y-10 text-center">
                  <h2 className="text-4xl font-extrabold opacity-40 group-hover:opacity-100 transition">
                    {s.title}
                  </h2>

                  <p className="text-sm mt-4 opacity-0 group-hover:opacity-100 transition">
                    {s.description}
                  </p>
                </div>

                {/* BUTTON (Desktop Hover Only) */}
                <div className="relative z-10 flex justify-center">
                  <Link href={s.href} onClick={(e) => e.stopPropagation()}>
                    <motion.button
                      variants={{
                        initial: { opacity: 0, y: 12 },
                        hover: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 flex items-center gap-2 px-7 py-3
                        bg-white text-black font-bold rounded-md
                        hover:scale-105 transition hover:bg-green-600 hover:text-white"
                    >
                      Explore <ArrowRight size={18} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

     {/* ================= MOBILE – APPLE STYLE ================= */}
<section className="lg:hidden pt-24 pb-24 bg-black text-white">
  <div className="px-6">
    <h1 className="text-4xl font-extrabold uppercase">
      My <span className="text-lime-400">Services</span>
    </h1>
  </div>

  <div
    className="mt-12 overflow-x-auto no-scrollbar
      scroll-smooth snap-x snap-mandatory"
  >
    {/* Side padding ensures first & last cards center */}
    <div className="flex gap-6 px-[10vw] w-max">
      {services.map((s, i) => (
        <div key={i} className="snap-center shrink-0">
          <Link href={s.href}>
            <div
              className="
                relative w-[80vw] max-w-[360px]
                h-[80vh]
                rounded-3xl overflow-hidden
                border border-white/10
                bg-black
                active:scale-[0.97]
                transition-transform duration-200
              "
            >
              {/* BACKGROUND IMAGE */}
              <div className="absolute inset-0">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
                {/* Strong overlay for clean readability */}
                <div className="absolute inset-0 bg-black/75" />
              </div>

              {/* CENTERED CONTENT */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center">
                <h2 className="text-2xl font-extrabold">
                  {s.title}
                </h2>

                <p className="text-sm text-white/70 mt-4 max-w-[280px]">
                  {s.description}
                </p>

                <div className="mt-6">
                  <button className="px-7 py-3 bg-white text-black rounded-full font-semibold">
                    Explore
                  </button>
                </div>
              </div>

            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>




    </main>
  );
}
