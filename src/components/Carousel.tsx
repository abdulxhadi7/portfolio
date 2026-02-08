"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Play } from "lucide-react";

// About Page - with Unsplash images

export default function AboutPage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -60]);
  const y2 = useTransform(scrollY, [0, 800], [0, -120]);

  useEffect(() => {}, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Subtle radial background */}
      <section id="about"></section>
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% 20%, rgba(34,197,94,0.06), transparent 10%), radial-gradient(900px 400px at 90% 80%, rgba(16,185,129,0.03), transparent 10%), #000000",
        }}
      />

      {/* HERO */}
      <section className="relative pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-10">

          {/* Left — Text */}
          <div className="flex-1 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl leading-tight font-extrabold uppercase"
            >
              I craft <span className="text-lime-400">visual stories</span>
              <br /> that move from pixels to frames.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="text-neutral-300 mt-6 max-w-2xl"
            >
              I&apos;m a multidisciplinary creator — graphic designer, video editor,
              and web developer. I design brand identities, cut cinematic
              promos, and build fast, interactive websites that showcase work beautifully.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex items-center gap-4"
            >
              <Link href="/connect" className="inline-flex">
                <button className="px-6 py-3 rounded-2xl bg-lime-400 text-black font-semibold shadow-lg hover:scale-105 transition">
                  Work with me
                </button>
              </Link>

              <a
                href="/resume.pdf"
                className="px-4 py-2 rounded-2xl border border-white/10 text-sm text-neutral-200 hover:bg-white/6 transition"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Quick Badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="px-3 py-1 rounded-full bg-white/6 text-sm">Branding</div>
              <div className="px-3 py-1 rounded-full bg-white/6 text-sm">Film & Editing</div>
              <div className="px-3 py-1 rounded-full bg-white/6 text-sm">Motion</div>
              <div className="px-3 py-1 rounded-full bg-white/6 text-sm">Next.js</div>
              <div className="px-3 py-1 rounded-full bg-white/6 text-sm">Tailwind</div>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-4">
              <a href="#work" className="text-neutral-300 hover:text-lime-400">View Work →</a>
              <a href="https://github.com/abdulxhadi7" className="flex items-center gap-2 text-neutral-300 hover:text-lime-400" aria-label="Github">
                <Github size={18} /> <span className="text-sm">Github</span>
              </a>
              <a href="https://ae.linkedin.com/in/abdul-hadi-ahmed-khan-6073392b1" className="flex items-center gap-2 text-neutral-300 hover:text-lime-400" aria-label="LinkedIn">
                <Linkedin size={18} /> <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right — Portrait */}
          <div className="flex-1 z-10 flex items-center justify-center relative w-full">
            <motion.div style={{ translateY: y1 }} className="absolute -left-12 -top-8 w-44 h-64 sm:w-56 sm:h-80 rounded-2xl bg-gradient-to-b from-lime-500/30 to-transparent blur-xl opacity-30" />
            <motion.div style={{ translateY: y2 }} className="absolute -right-12 bottom-6 w-52 h-40 rounded-2xl bg-gradient-to-tr from-green-500/20 to-transparent blur-3xl opacity-30" />

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-72 h-96 sm:w-80 sm:h-[36rem] rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-b from-neutral-900/80 to-green-900/30 border border-white/6"
            >
              <Image
                src="/images/f1.webp"
                alt="Portrait"
                fill
                className="object-cover"
                priority
              />

              {/* Play Badge */}
              <div className="absolute left-6 bottom-6 bg-white/8 rounded-full p-3 backdrop-blur-sm border border-white/6">
                <div className="flex items-center gap-2">
                  <Play size={16} className="text-white" />
                  <span className="text-xs text-neutral-200">Showreel</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SKILLS / SERVICES */}
      <section className="pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="col-span-1">
            <h3 className="text-xl font-semibold text-lime-400">What I do</h3>
            <p className="text-neutral-300 mt-3">Design, edit and build — I bring creative & technical skills together to deliver polished work.</p>
          </motion.div>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Graphic Design",
                list: ["Brand identity", "Posters & Banners", "Thumbnails"],
                img: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Video Editing",
                list: ["Social cuts", "Cinematic edits", "Color grading"],
                img: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Web / UI",
                list: ["Landing pages", "Interactive UI", "CMS integrations"],
                img: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ translateY: -6, boxShadow: "0 12px 40px rgba(16,185,129,0.12)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-2xl overflow-hidden bg-gradient-to-b from-black/60 to-green-950 border border-white/8"
              >
                <div className="relative h-36">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg">{s.title}</h4>
                  <ul className="text-neutral-300 mt-2 text-sm space-y-1">
                    {s.list.map((li, idx) => (
                      <li key={idx}>• {li}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The rest of your page remains the same... */}
      {/* Timeline, Stats, CTA */}
    </main>
  );
}
