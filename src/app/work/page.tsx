"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Image as ImageIcon,
  
  Film,
  Camera,
  BadgeHelp,
  LayoutDashboard,
  Shapes,
} from "lucide-react";

// Ultra-Premium Work Page

export default function WorkPage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const y2 = useTransform(scrollY, [0, 900], [0, -140]);

  const categories = [
    { title: "Thumbnails", icon: <ImageIcon size={42} />, slug: "thumbnails" },
    { title: "Logos", icon: <BadgeHelp size={42} />, slug: "logos" },
    { title: "Banners & Posters", icon: <LayoutDashboard size={42} />, slug: "youtube-banners" },
    { title: "Shorts & Reels", icon: <Film size={42} />, slug: "shorts" },
    

    { title: "3D Graphics", icon: <Shapes size={42} />, slug: "3d-graphics" },
    { title: "Web / Ui Designs", icon: <Camera size={42} />, slug: "web-ui" },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.1),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.06),transparent_60%)]" />

      {/* Floating noise texture */}
      <div className="absolute inset-0 -z-10 opacity-[0.06] mix-blend-soft-light bg-[url('/textures/noise.png')]" />

      {/* Floating neon circles */}
      <motion.div
        style={{ translateY: y1 }}
        className="absolute w-[700px] h-[700px] bg-green-400/10 blur-[150px] rounded-full -top-20 -left-40"
      />
      <motion.div
        style={{ translateY: y2 }}
        className="absolute w-[600px] h-[600px] bg-lime-300/10 blur-[150px] rounded-full bottom-0 right-0"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-10 text-center relative">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase leading-tight"
        >
          My <span className="text-lime-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]">Creative Universe</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-neutral-300 mt-6 max-w-2xl mx-auto text-lg"
        >
          Explore a multi-genre collection of design, branding and visual storytelling —
          crafted with cinematic precision and memorable aesthetics.
        </motion.p>
      </section>

     

      {/* Premium Category Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-28 relative">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/work/${cat.slug}`}>
                <div className="
                  group relative p-8
                  rounded-3xl bg-gradient-to-b from-white/5 to-black/40
                  border border-white/10
                  shadow-[0_0_25px_rgba(34,197,94,0.08)]
                  backdrop-blur-xl
                  hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]
                  hover:border-lime-400/40
                  transition-all duration-300 cursor-pointer
                  h-[230px] flex flex-col justify-between
                ">
                  
                  {/* Floating shine */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition">
                    <div className="absolute inset-0 bg-gradient-to-br from-lime-400/30 to-transparent blur-2xl" />
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-white/10 group-hover:bg-lime-400/10 transition-all duration-300 w-fit">
                    {cat.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-lime-300 transition">
                      {cat.title}
                    </h3>
                    <p className="text-neutral-400 text-sm mt-1">
                      View Samples →
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-6 md:px-12">
        <div className="
          max-w-6xl mx-auto p-10 rounded-3xl
          bg-gradient-to-r from-black/50 to-green-900/20
          border border-white/10 backdrop-blur-xl shadow-2xl
          flex flex-col md:flex-row items-center justify-between gap-6
        ">
          <div>
            <h3 className="text-3xl font-semibold leading-tight">
              Want something extraordinary?
            </h3>
            <p className="text-neutral-300 mt-2">
              I create premium visuals that build identity and elevate your brand.
            </p>
          </div>

          <Link href="/connect">
            <button className="
              px-7 py-3 bg-lime-400 text-black rounded-2xl
              font-semibold shadow-xl hover:scale-105 transition active:scale-95
            ">
              Start a Project
            </button>
          </Link>
        </div>
      </section>

      
    </main>
  );
}
